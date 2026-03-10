import re

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


def extract_tracklist(descripcion: str | None) -> str | None:
    """Extract a clean tracklist from raw scraped descripcion text.

    Returns None if nothing useful remains (so the frontend falls back to
    showing descripcion as-is).
    """
    if not descripcion:
        return None

    # --- Step 1: noise removal ---
    lines = descripcion.splitlines()
    lines = [ln for ln in lines if not _NOISE_PATTERNS.search(ln)]

    # --- Step 2: part header normalization ---
    lines = [_PART_HEADER.sub(r"Part \1", ln) for ln in lines]

    # --- Step 3: track number stripping ---
    lines = [_TRACK_NUM.sub("", ln) for ln in lines]

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
            return "\n".join(parts)
        return result

    return result
