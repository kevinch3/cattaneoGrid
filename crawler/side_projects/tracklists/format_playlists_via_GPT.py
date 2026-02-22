import re
import requests
import json
from tqdm import tqdm
import sys
import time

def clean_html(raw_html):
    cleanr = re.compile('<.*?>')
    cleantext = re.sub(cleanr, '', raw_html)
    return cleantext

def extract_artists(tracklist):
    artists = []
    for line in tracklist.split("\n"):
        match = re.match(r"Part \d+ - (.+?) - ", line)
        if not match:
            match = re.match(r"(.+?) - ", line)
        if match:
            artists.append(match.group(1))
    return artists

def send_prompt_to_custom_server(description, retries=3, delay=5):
    url = 'http://192.168.8.189:5000/v1/completions'

    headers = {
        'Content-Type': 'application/json',
    }
    prompt = f"""Extract and format the tracklist from the following music episode description. 
    Return only the tracklist as an unordered list. If there is a Part mentioned it defines a section, so define it as title for the list. 
    Return without any introductory text, system messages, or additional words. Should NOT have HTML tags. Should be in plain text in the format "Artist - Track Title".
    If there is no tracklist, return a title.

    Description:
    {description}"""

    data = {
        'prompt': prompt,
        'max_tokens': 1500,
        'temperature': 0.7,
        'top_p': 0.6,
        'seed': 10548,
        "context_length": 32768,
    }

    for attempt in range(retries):
        try:
            print(f"DEBUG: Sending prompt to custom server (attempt {attempt + 1}):\n{prompt}\n")  # Debug log for the prompt
            response = requests.post(url, headers=headers, json=data)
            response.raise_for_status()
            return response.json()
        except requests.RequestException as e:
            print(f"Error in request attempt {attempt + 1}: {e}")
            if attempt < retries - 1:
                print(f"Retrying in {delay} seconds...")
                time.sleep(delay)
            else:
                print("Max retries reached. Giving up.")
                return None

def parse_tracklist_response(response):
    if response and 'choices' in response and response['choices']:
        content = response['choices'][0]['text']
        # Remove HTML tags and filter lines
        content = re.sub(r'<[^>]+>', '', content)
        lines = content.split('\n')
        cleaned_lines = []
        for line in lines:
            if re.search(r'- .+ -', line) and "Download" not in line and "save link" not in line:
                cleaned_lines.append(line.strip())
            elif re.match(r'Part \d+', line):
                cleaned_lines.append(line.strip())
        return '\n'.join(cleaned_lines)
    return None

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python playlist_processing_with_custom_server.py <input_json_file> <output_json_file>")
        sys.exit(1)
    
    input_json_file = sys.argv[1]
    output_json_file = sys.argv[2]

    # Read the input file
    with open(input_json_file, 'r') as file:
        data = json.load(file)

    # Determine how many elements have already been processed
    try:
        with open(output_json_file, 'r') as outfile:
            try:
                processed_data = json.load(outfile)
                print(f"Loaded {len(processed_data)} processed entries from file.")
            except json.JSONDecodeError:
                processed_data = []
                print("File is empty or corrupted. Starting with an empty list.")
    except FileNotFoundError:
        processed_data = []
        print("File not found. Starting with an empty list.")

    # Process the remaining elements
    for entry in tqdm(data, desc="Procesando entradas"):
        if any(d['episodio'] == entry['episodio'] for d in processed_data):
            continue  # Skip already processed entries

        # Check if 'descripcion' key exists in entry
        if 'descripcion' not in entry:
            print(f"Skipping entry {entry['episodio']} due to missing 'descripcion' key.")
            continue

        description = entry['descripcion']
        custom_server_response = send_prompt_to_custom_server(description)

        # Error handling for unexpected responses
        if not custom_server_response or 'choices' not in custom_server_response or not custom_server_response['choices']:
            print(f"Error or unexpected response from the API for entry {entry['episodio']}: {custom_server_response}")
            continue

        tracklist_std = parse_tracklist_response(custom_server_response)
        tracklist_artists = extract_artists(tracklist_std) if tracklist_std else []

        result = {
            'episodio': entry['episodio'],
            'titulo': entry['titulo'],
            'likes': entry['likes'],
            'fecha': entry['fecha'],
            'descargas': entry['descargas'],
            'link': entry['link'],
            'tracklist': entry.get('tracklist'),  # Use .get to safely access the key
            'tracklist_std': tracklist_std,
            'tracklist_artists': tracklist_artists
        }
        processed_data.append(result)
        print(f"Processed entry {entry['episodio']} successfully.")
        
        # Write the results to the file incrementally
        with open(output_json_file, 'w') as outfile:
            json.dump(processed_data, outfile, indent=4)
            print(f"Wrote {len(processed_data)} entries to file.")
