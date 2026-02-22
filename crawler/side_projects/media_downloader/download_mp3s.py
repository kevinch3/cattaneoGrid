import argparse
import json
from pathlib import Path

import requests


def safe_name(value: str) -> str:
    return value.replace("/", "_").strip()


def download_episode(episode: dict, index: int, total: int, output_dir: Path, timeout: int) -> None:
    url = episode.get("link")
    title = episode.get("titulo", f"episode-{index}")

    if not url:
        print(f"[{index}/{total}] missing link: {title}")
        return

    filename = output_dir / f"{safe_name(title)}.mp3"
    if filename.exists():
        print(f"[{index}/{total}] skip existing: {title}")
        return

    try:
        response = requests.get(url, timeout=timeout)
        response.raise_for_status()
    except requests.RequestException as exc:
        print(f"[{index}/{total}] download failed: {title} ({exc})")
        return

    filename.write_bytes(response.content)
    print(f"[{index}/{total}] downloaded: {title}")


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Download MP3 files from crawler JSON output")
    parser.add_argument(
        "--input",
        type=Path,
        default=Path("output/db.json"),
        help="Episode JSON file (default: output/db.json)",
    )
    parser.add_argument(
        "--output-dir",
        type=Path,
        default=Path("side_projects/media_downloader/downloaded"),
        help="Destination folder for MP3 files",
    )
    parser.add_argument("--timeout", type=int, default=45, help="Per-request timeout in seconds")
    return parser.parse_args()


if __name__ == "__main__":
    args = parse_args()
    args.output_dir.mkdir(parents=True, exist_ok=True)

    episodes = json.loads(args.input.read_text(encoding="utf-8"))
    total = len(episodes)
    for i, episode in enumerate(episodes, start=1):
        download_episode(episode, i, total, args.output_dir, args.timeout)
