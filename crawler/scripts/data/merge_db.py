import argparse
import json
from pathlib import Path
from typing import Any


def load_json(filepath: Path) -> list[dict[str, Any]]:
    if not filepath.exists():
        print(f"File not found: {filepath}")
        return []

    content = filepath.read_text(encoding="utf-8").strip()
    if not content:
        print(f"File is empty: {filepath}")
        return []

    try:
        data = json.loads(content)
        return data if isinstance(data, list) else []
    except json.JSONDecodeError:
        fixed_content = "[" + content.replace("}{", "},{") + "]"
        try:
            data = json.loads(fixed_content)
            return data if isinstance(data, list) else []
        except json.JSONDecodeError:
            print(f"Could not decode JSON from {filepath}")
            return []


def save_json(filepath: Path, data: list[dict[str, Any]]) -> None:
    filepath.parent.mkdir(parents=True, exist_ok=True)
    filepath.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")


def merge_json_files(existing_file: Path, new_file: Path, output_file: Path) -> None:
    existing_data = load_json(existing_file)
    new_data = load_json(new_file)

    print(f"Loaded {len(existing_data)} items from {existing_file}")
    print(f"Loaded {len(new_data)} items from {new_file}")

    merged: dict[int, dict[str, Any]] = {}

    for item in existing_data:
        episode = item.get("episodio")
        try:
            if episode is not None:
                merged[int(episode)] = item
        except (TypeError, ValueError):
            print(f"Skipping existing item with invalid episodio: {item}")

    for item in new_data:
        episode = item.get("episodio")
        try:
            if episode is not None:
                key = int(episode)
                if key in merged:
                    merged[key].update(item)
                else:
                    merged[key] = item
        except (TypeError, ValueError):
            print(f"Skipping new item with invalid episodio: {item}")

    merged_list = [merged[k] for k in sorted(merged)]
    save_json(output_file, merged_list)
    print(f"Saved {len(merged_list)} merged items to {output_file}")


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Merge two episode JSON files by episodio")
    parser.add_argument("--existing", type=Path, required=True, help="Existing/canonical JSON file")
    parser.add_argument("--new", type=Path, required=True, help="Fresh JSON file to overlay")
    parser.add_argument("--out", type=Path, required=True, help="Output merged JSON file")
    return parser.parse_args()


if __name__ == "__main__":
    args = parse_args()
    merge_json_files(args.existing, args.new, args.out)
