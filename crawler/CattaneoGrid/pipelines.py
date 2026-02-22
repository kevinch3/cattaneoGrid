import json
from datetime import datetime
from pathlib import Path

from itemadapter import ItemAdapter


class JsonArrayWriterPipeline:
    """Stream scraped items into a JSON array with safe backups."""

    def open_spider(self, spider):
        self.output_path = Path(spider.settings.get("OUTPUT_JSON_PATH", "output/db.json"))
        self.output_path.parent.mkdir(parents=True, exist_ok=True)
        self.temp_path = self.output_path.with_suffix(self.output_path.suffix + ".tmp")
        self.backup_path = None
        self.resume_mode = getattr(spider, "resume_mode", False)
        self.items_written = 0
        self.first_entry = True
        self.existing_items = []

        if not self.resume_mode and self.output_path.exists():
            timestamp = datetime.utcnow().strftime("%Y%m%dT%H%M%S")
            backup_name = f"{self.output_path.stem}.{timestamp}{self.output_path.suffix}"
            self.backup_path = self.output_path.with_name(backup_name)
            self.output_path.replace(self.backup_path)
            spider.logger.info("Backup created at %s", self.backup_path)

        if self.resume_mode and self.output_path.exists():
            try:
                self.existing_items = json.loads(self.output_path.read_text(encoding="utf-8"))
            except Exception:
                spider.logger.warning(
                    "Failed to parse existing output file %s; continuing with fresh data.",
                    self.output_path,
                    exc_info=True,
                )
                self.existing_items = []

        self.file = self.temp_path.open("w", encoding="utf-8")
        self.file.write("[")

    def _write_entry(self, entry):
        if not self.first_entry:
            self.file.write(",\n")
        json.dump(entry, self.file, ensure_ascii=False)
        self.first_entry = False
        self.items_written += 1

    def process_item(self, item, spider):
        adapter = ItemAdapter(item)
        self._write_entry(adapter.asdict())
        self.file.flush()
        return item

    def close_spider(self, spider):
        if self.resume_mode and self.existing_items:
            for entry in self.existing_items:
                if not self.first_entry:
                    self.file.write(",\n")
                json.dump(entry, self.file, ensure_ascii=False)
                self.first_entry = False

        self.file.write("]\n")
        self.file.close()

        if self.items_written == 0 and not self.resume_mode:
            # No new data scraped during full crawl; restore backup if present.
            if self.backup_path and self.backup_path.exists():
                self.backup_path.replace(self.output_path)
                spider.logger.info("Restored original output from %s", self.backup_path)
            if self.temp_path.exists():
                self.temp_path.unlink()
            return

        self.temp_path.replace(self.output_path)
