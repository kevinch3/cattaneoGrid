import json
import re
import string
from datetime import datetime
from pathlib import Path

from itemadapter import ItemAdapter
from scrapy.exceptions import DropItem

from CattaneoGrid.tracklist_extractor import extract_tracklist


class TracklistNormalizerPipeline:
    """Auto-extract tracklist from descripcion for new episodes (priority 200)."""

    def process_item(self, item, spider):
        adapter = ItemAdapter(item)
        if adapter.get("stats_only"):
            return item
        if adapter.get("tracklist"):
            return item
        item["tracklist"] = extract_tracklist(adapter.get("descripcion"))
        return item


class JsonArrayWriterPipeline:
    """Stream scraped items into a JSON array with safe backups and deduplication."""

    @staticmethod
    def _is_letter_id(ep):
        """Return True if episodio is a letter-only ID (e.g. 'A', 'BC')."""
        return bool(ep and re.match(r"^[A-Z]+$", str(ep)))

    def _next_letter_id(self):
        """Return the next unused letter ID (A–Z, then AA, AB, …)."""
        for letter in string.ascii_uppercase:
            if letter not in self.used_letter_ids:
                return letter
        for l1 in string.ascii_uppercase:
            for l2 in string.ascii_uppercase:
                combined = l1 + l2
                if combined not in self.used_letter_ids:
                    return combined
        return None

    def open_spider(self, spider):
        self.output_path = Path(spider.settings.get("OUTPUT_JSON_PATH", "output/db.json"))
        self.output_path.parent.mkdir(parents=True, exist_ok=True)
        self.temp_path = self.output_path.with_suffix(self.output_path.suffix + ".tmp")
        self.backup_path = None
        self.resume_mode = getattr(spider, "resume_mode", False)
        self.items_written = 0
        self.first_entry = True
        self.existing_items = []
        self.initial_load_failed = False

        # Deduplication state
        self.written_episodes: set[str] = set()   # episodio strings written this run
        self.written_titles: set[str] = set()     # titles written this run
        self.used_letter_ids: set[str] = set()    # existing + newly assigned letter IDs
        self.existing_by_title: dict[str, object] = {}  # title → episodio for existing items
        self.stats_updates: dict[str, dict] = {}  # episodio → {likes, descargas} from stats refresh

        if not self.resume_mode and self.output_path.exists():
            timestamp = datetime.utcnow().strftime("%Y%m%dT%H%M%S")
            backup_name = f"{self.output_path.stem}.{timestamp}{self.output_path.suffix}"
            self.backup_path = self.output_path.with_name(backup_name)
            self.output_path.replace(self.backup_path)
            spider.logger.info("Backup created at %s", self.backup_path)

        if self.resume_mode and self.output_path.exists():
            try:
                raw = json.loads(self.output_path.read_text(encoding="utf-8"))
                # Deduplicate on load: keep first occurrence per episodio (or title for null-ID items)
                seen_keys: set[str] = set()
                for entry in raw:
                    ep = entry.get("episodio")
                    titulo = entry.get("titulo")
                    ep_str = str(ep) if ep is not None else None
                    key = ep_str if ep_str else f"__title__{titulo}"
                    if key in seen_keys:
                        continue
                    seen_keys.add(key)
                    self.existing_items.append(entry)
                    if self._is_letter_id(ep):
                        self.used_letter_ids.add(ep_str)
                    if titulo:
                        self.existing_by_title[titulo] = ep
                spider.logger.info(
                    "Loaded %d unique existing items (deduplicated from %d raw entries).",
                    len(self.existing_items), len(raw),
                )
            except Exception:
                self.initial_load_failed = True
                spider.logger.warning(
                    "Failed to parse existing output file %s; continuing with fresh data.",
                    self.output_path,
                    exc_info=True,
                )

        self.file = self.temp_path.open("w", encoding="utf-8")
        self.file.write("[")

    def _write_entry(self, entry):
        if not self.first_entry:
            self.file.write(",\n")
        json.dump(entry, self.file, ensure_ascii=False)
        self.first_entry = False
        self.items_written += 1

    def _append_existing(self, entry):
        """Write an existing entry without counting it toward items_written."""
        if not self.first_entry:
            self.file.write(",\n")
        json.dump(entry, self.file, ensure_ascii=False)
        self.first_entry = False

    def process_item(self, item, spider):
        adapter = ItemAdapter(item)
        data = adapter.asdict()

        if data.get("stats_only"):
            ep_str = str(data["episodio"])
            update = {k: data[k] for k in ("likes", "descargas") if data.get(k) is not None}
            if update:
                self.stats_updates[ep_str] = update
            raise DropItem(f"Stats refresh for existing episode {ep_str!r}")

        episodio = data.get("episodio")
        titulo = data.get("titulo")

        if not episodio:
            # Episodes without a numeric ID: assign a stable letter ID
            if titulo and titulo in self.existing_by_title:
                existing_ep = self.existing_by_title[titulo]
                if self._is_letter_id(existing_ep):
                    # Re-crawl of a letter-ID episode: preserve the original letter ID
                    data["episodio"] = str(existing_ep)
                    item["episodio"] = str(existing_ep)
                    episodio = str(existing_ep)
                else:
                    # Matches an existing numeric-ID or null-ID item by title — drop duplicate
                    raise DropItem(f"Re-crawled existing episode (title match): {titulo!r}")
            elif titulo and titulo in self.written_titles:
                # Duplicate within this crawl run
                raise DropItem(f"Duplicate episode title in this crawl: {titulo!r}")
            else:
                # Genuinely new episode without a numeric ID — assign next letter
                letter_id = self._next_letter_id()
                if letter_id:
                    data["episodio"] = letter_id
                    item["episodio"] = letter_id
                    self.used_letter_ids.add(letter_id)
                    if titulo:
                        self.existing_by_title[titulo] = letter_id
                episodio = data.get("episodio")
        else:
            # Numeric/letter ID provided by spider — intra-run duplicate check
            ep_str = str(episodio)
            if ep_str in self.written_episodes:
                raise DropItem(f"Duplicate episode {ep_str!r} in this crawl")

        self._write_entry(data)
        if episodio:
            self.written_episodes.add(str(episodio))
        if titulo:
            self.written_titles.add(titulo)
        self.file.flush()
        return item

    def close_spider(self, spider):
        if self.resume_mode and self.existing_items:
            for entry in self.existing_items:
                ep = entry.get("episodio")
                titulo = entry.get("titulo")
                ep_str = str(ep) if ep is not None else None
                # Skip if already written by episode ID this run
                if ep_str and ep_str in self.written_episodes:
                    continue
                # Skip if already written by title this run (covers null-episodio items)
                if titulo and titulo in self.written_titles:
                    continue
                if ep_str and ep_str in self.stats_updates:
                    entry = {**entry, **self.stats_updates[ep_str]}
                self._append_existing(entry)

        self.file.write("]\n")
        self.file.close()

        if self.items_written == 0 and not self.resume_mode:
            # Full crawl yielded nothing — restore backup if available
            if self.backup_path and self.backup_path.exists():
                self.backup_path.replace(self.output_path)
                spider.logger.info("Restored original output from %s", self.backup_path)
            if self.temp_path.exists():
                self.temp_path.unlink()
            return

        if self.items_written == 0 and self.resume_mode and self.initial_load_failed:
            # Existing data failed to load and nothing new was scraped — protect existing file
            spider.logger.error(
                "Existing data failed to load and no new items scraped; "
                "skipping output replacement to preserve existing file."
            )
            if self.temp_path.exists():
                self.temp_path.unlink()
            return

        self.temp_path.replace(self.output_path)
