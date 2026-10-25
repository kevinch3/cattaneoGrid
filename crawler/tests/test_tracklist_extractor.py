"""Regression tests built from real episodes whose tracklists failed to map."""

from CattaneoGrid.parsing import html_to_lines
from CattaneoGrid.tracklist_extractor import extract_tracklist, tracklist_issue

BOILERPLATE = (
    "Download episode on MP3 (Right click, save link as...) Help me support NGO "
    "Alegría Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! "
    "Donar desde Argentina haciendo click aquí!!!"
)


def test_keeps_last_track_glued_to_boilerplate():
    # Episode 798: the last track shared a line with the download/donation text
    source = (
        "1 - HAFT & Peyman S - Echoes In The Dark\n"
        "2 - Uccelli - Undertone\n"
        f"3 - Tim French - Sans Peur (Aubrey Fry Remix) {BOILERPLATE}"
    )
    assert extract_tracklist(source) == (
        "HAFT & Peyman S - Echoes In The Dark\n"
        "Uccelli - Undertone\n"
        "Tim French - Sans Peur (Aubrey Fry Remix)"
    )


def test_strips_trailing_slash_separators():
    # Episode 721
    source = (
        "1 - Gai Barone - Bitter Misery / \n"
        "2 - Doffo - Appetite / \n"
        "3 - Seyah - Horizon (Luca Abayan & Tato Seco Remix)\n"
        f"4 - Yeadon - What Is Real / {BOILERPLATE}"
    )
    assert extract_tracklist(source) == (
        "Gai Barone - Bitter Misery\n"
        "Doffo - Appetite\n"
        "Seyah - Horizon (Luca Abayan & Tato Seco Remix)\n"
        "Yeadon - What Is Real"
    )


def test_live_set_description_is_not_a_tracklist():
    # Episode 600 rendered "Recorded Live at Woodstock69 - July 2022" as "1 tracks"
    assert extract_tracklist(f"Recorded Live at Woodstock69 - July 2022 {BOILERPLATE}") is None
    assert extract_tracklist("LIVE FROM WOODSTOCK 69 - NETHERLANDS Pt.1\nFeaturing Pole Folder.") is None


def test_div_per_track_html_keeps_one_track_per_line():
    # Episode 285: html_to_text flattened these <div>s into one unparseable line
    html = (
        '<div><font face="Arial"><span><strong>Part 1 Tracklist</strong></span></font></div>'
        "<div><span>Paul Deep & Martin Gardoqui - Hairless Groovy</span></div>"
        "<div><span>Alberto Blanco & Marcelo Paladini - Nightmares (Beat Syndrome Remix)</span></div>"
        "<div><span>Marcelo Paladini - The Blind</span></div>"
        "<p>Download episode on MP3 (Right click, save link as...)</p>"
    )
    assert extract_tracklist(html_to_lines(html)) == (
        "Part 1\n"
        "Paul Deep & Martin Gardoqui - Hairless Groovy\n"
        "Alberto Blanco & Marcelo Paladini - Nightmares (Beat Syndrome Remix)\n"
        "Marcelo Paladini - The Blind"
    )


def test_br_separated_html():
    html = "<p>1 - A - One<br />2 - B - Two<br>3 - C - Three</p>"
    assert extract_tracklist(html_to_lines(html)) == "A - One\nB - Two\nC - Three"


def test_unspaced_artist_title_separator():
    # Episode 049
    source = (
        "Part 1 Tracklist\n"
        "Luis luchetti-Between The Blues\n"
        "Mic Newman-Knickerbocker\n"
        "Sanedrachunter -Just a groove"
    )
    assert extract_tracklist(source) == (
        "Part 1\nLuis luchetti-Between The Blues\nMic Newman-Knickerbocker\nSanedrachunter -Just a groove"
    )


def test_issue_flags_missing_tracks():
    source = "1 - A - One\n2 - B - Two\n3 - C - Three\n4 - D - Four"
    assert tracklist_issue(source, "A - One\nB - Two\nC - Three") is not None
    assert tracklist_issue(source, extract_tracklist(source)) is None


def test_issue_ignores_skipped_numbers_in_source():
    # Episode 408 jumps from 7 to 9
    source = "1 - A - One\n2 - B - Two\n3 - C - Three\n5 - D - Five"
    assert tracklist_issue(source, extract_tracklist(source)) is None


def test_issue_flags_unextracted_tracklist():
    source = "\n".join(f"Artist {i} - Title {i}" for i in range(8))
    assert tracklist_issue(source, None) is not None
    assert tracklist_issue("Recorded Live at Woodstock69 - July 2022", None) is None
