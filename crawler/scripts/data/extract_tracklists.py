"""Backfill tracklist field for all episodes in db.json.

Usage (from crawler/ with venv active):
    python scripts/data/extract_tracklists.py
    python scripts/data/extract_tracklists.py --force   # overwrite existing tracklists
"""

import argparse
import json
import sys
from pathlib import Path

# Make the CattaneoGrid package importable when run from crawler/
sys.path.insert(0, str(Path(__file__).parent.parent.parent))
from CattaneoGrid.tracklist_extractor import extract_tracklist

DB_PATH = Path(__file__).parent.parent.parent.parent / "data" / "db.json"


def main():
    parser = argparse.ArgumentParser(description="Backfill tracklist field in db.json")
    parser.add_argument(
        "--force",
        action="store_true",
        help="Overwrite existing non-null tracklist values",
    )
    parser.add_argument(
        "--db",
        default=str(DB_PATH),
        help=f"Path to db.json (default: {DB_PATH})",
    )
    args = parser.parse_args()

    db_path = Path(args.db)
    if not db_path.exists():
        print(f"Error: {db_path} not found", file=sys.stderr)
        sys.exit(1)

    data = json.loads(db_path.read_text(encoding="utf-8"))

    updated = 0
    for episode in data:
        if not args.force and episode.get("tracklist") is not None:
            continue
        extracted = extract_tracklist(episode.get("descripcion"))
        if extracted != episode.get("tracklist"):
            episode["tracklist"] = extracted
            updated += 1

    tmp_path = db_path.with_suffix(db_path.suffix + ".tmp")
    tmp_path.write_text(json.dumps(data, ensure_ascii=False, indent=None), encoding="utf-8")
    tmp_path.replace(db_path)

    print(f"Done. {updated} episode(s) updated out of {len(data)} total.")


if __name__ == "__main__":
    main()
