import re

# Site boilerplate that can be glued onto the last track
# ("10 - Yeadon - What Is Real / Download episode on MP3 ..."): cut it off,
# keeping the text before it, instead of dropping the whole line.
_BOILERPLATE = re.compile(
    r"Download episode on MP3|Right click, save link|Help me support|Donate now|Donar desde",
    re.IGNORECASE,
)

# Separators some episodes put after each track: "Doffo - Appetite /"
_TRAILING_SEPARATOR = re.compile(r"\s*(?:[/|]|\s[-–])\s*$")

_NOISE_PATTERNS = re.compile(
    r"http|Right click|save link|PayPal|Download|charity|donation",
    re.IGNORECASE,
)

# "Part1 Tracklist" or "Part 1 Tracklist" → "Part 1"
_PART_HEADER = re.compile(r"\bPart\s*(\d+)\s+Tracklist\b", re.IGNORECASE)

# "1 - " or "1. " at the start of a line
_TRACK_NUM = re.compile(r"^\d+[\s]*[-\.]\s*")

# Used by the concatenated fallback to split on numbered entries
_CONCAT_SPLIT = re.compile(r"(?=\d+\s+-\s+)")


def _strip_boilerplate(line: str) -> str:
    m = _BOILERPLATE.search(line)
    return line[: m.start()] if m else line


def extract_tracklist(descripcion: str | None) -> str | None:
    """Extract a clean tracklist from raw scraped descripcion text.

    Returns None if nothing useful remains (so the frontend falls back to
    showing descripcion as-is).
    """
    if not descripcion:
        return None

    # --- Step 1: noise removal ---
    lines = [_strip_boilerplate(ln) for ln in descripcion.splitlines()]
    lines = [ln for ln in lines if not _NOISE_PATTERNS.search(ln)]

    # --- Step 2: part header normalization ---
    lines = [_PART_HEADER.sub(r"Part \1", ln) for ln in lines]

    # --- Step 3: track number and trailing separator stripping ---
    lines = [_TRAILING_SEPARATOR.sub("", _TRACK_NUM.sub("", ln)) for ln in lines]

    # --- Step 4: collapse empty lines ---
    result_lines = []
    prev_blank = False
    for ln in lines:
        stripped = ln.strip()
        if stripped == "":
            if not prev_blank and result_lines:
                result_lines.append("")
            prev_blank = True
        else:
            result_lines.append(stripped)
            prev_blank = False

    # Trim leading/trailing blank lines
    while result_lines and result_lines[0] == "":
        result_lines.pop(0)
    while result_lines and result_lines[-1] == "":
        result_lines.pop()

    if not result_lines:
        return None

    result = "\n".join(result_lines)

    # --- Step 5: concatenated fallback ---
    if "\n" not in result and len(result) > 80:
        parts = _CONCAT_SPLIT.split(result)
        parts = [_TRACK_NUM.sub("", p).strip() for p in parts if p.strip()]
        if len(parts) > 2:
            result = "\n".join(parts)

    # --- Step 6: reject prose ("Recorded Live at Woodstock69 - July 2022") ---
    # Episodes are hour-long mixes; a real tracklist has several artist - title
    # separators (counted over the whole text: some parts put every track on one line)
    if len(_ARTIST_TITLE.findall(result)) < MIN_TRACKS:
        return None

    return result


MIN_TRACKS = 3

# "Artist - Title", also unspaced as in older episodes: "Luis luchetti-Between The Blues"
_ARTIST_TITLE = re.compile(r"[\w)\]][ \t]*[-–][ \t]*[\w(]")

_PART_LINE = re.compile(r"^Part\s*\d+\s*$", re.IGNORECASE)

# "1 - ", "10. " at the start of a source line
_NUMBERED_LINE = re.compile(r"^\s*(\d{1,3})\s*[-.]\s", re.MULTILINE)


def tracklist_issue(source: str | None, tracklist: str | None) -> str | None:
    """Return why an extracted tracklist looks broken, or None if it looks fine.

    source is the line-preserving text the tracklist was extracted from.
    """
    numbers = [int(n) for n in _NUMBERED_LINE.findall(source or "")]
    tracks = [ln for ln in (tracklist or "").split("\n") if ln.strip() and not _PART_LINE.match(ln)]
    # Compare with the count of numbered lines, not the highest number: some sources skip numbers
    if len(numbers) >= MIN_TRACKS and len(tracks) < len(numbers):
        return f"{len(tracks)} tracks extracted from {len(numbers)} numbered source lines"
    if tracklist is None and sum(1 for ln in (source or "").split("\n") if _ARTIST_TITLE.search(ln)) >= MIN_TRACKS * 2:
        return "no tracklist extracted from a source with many artist - title lines"
    return None
