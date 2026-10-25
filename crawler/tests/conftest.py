import sys
from pathlib import Path

# Make the CattaneoGrid package importable when pytest runs from crawler/
sys.path.insert(0, str(Path(__file__).parent.parent))
