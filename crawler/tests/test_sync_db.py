import importlib.util
from pathlib import Path

_spec = importlib.util.spec_from_file_location(
    "sync_db", Path(__file__).parent.parent / "scripts" / "data" / "sync_db.py"
)
sync_db = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(sync_db)


def record(episodio, titulo, likes="1", descargas="10", tracklist=None):
    return {
        "episodio": episodio,
        "titulo": titulo,
        "likes": likes,
        "descargas": descargas,
        "link": "https://example.com/x.mp3",
        "tracklist": tracklist,
    }


def test_refreshes_stats_and_keeps_order_and_curated_fields():
    existing = [record("2", "Episode 2", tracklist="kept"), record("1", "Episode 1")]
    api = [record("2", "Episode 2", likes="5", descargas="99", tracklist="new"), record("1", "Episode 1")]
    merged, added, changed, retracked = sync_db.merge(existing, api)
    assert [r["episodio"] for r in merged] == ["2", "1"]
    assert merged[0]["likes"] == "5" and merged[0]["descargas"] == "99"
    assert merged[0]["tracklist"] == "kept"
    assert (added, changed, retracked) == ([], 1, 0)


def test_retrack_replaces_tracklists():
    existing = [record("1", "Episode 1", tracklist="old")]
    merged, _, _, retracked = sync_db.merge(existing, [record("1", "Episode 1", tracklist="new")], retrack=True)
    assert merged[0]["tracklist"] == "new" and retracked == 1


def test_new_episodes_go_first():
    existing = [record("1", "Episode 1")]
    merged, added, _, _ = sync_db.merge(existing, [record("2", "Episode 2"), record("1", "Episode 1")])
    assert [r["episodio"] for r in merged] == ["2", "1"] and added == ["2"]


def test_split_part_does_not_overwrite_part_one():
    # "Episode 001.2" extracts as "001", same as the stored "Episode 001.1"
    existing = [record("001", "Resident / Episode 001.1 / May 7th 2011", likes="34")]
    api = [
        record("001", "Resident / Episode 001.2 / May 7th 2011", likes="21"),
        record("001", "Resident / Episode 001.1 / May 7th 2011", likes="34"),
    ]
    merged, added, _, _ = sync_db.merge(existing, api)
    assert added == ["001.2"]
    assert {r["episodio"]: r["likes"] for r in merged} == {"001.2": "21", "001": "34"}
