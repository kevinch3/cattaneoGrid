import re
import requests
import json
from tqdm import tqdm
import sys

def process_tracklist(description):
    lines = description.split("\n")
    tracklist = [line.strip() for line in lines if '-' in line and "Download" not in line and "save link" not in line]
    return "\n".join(tracklist)

def extract_artists(tracklist):
    # Extract artists from the tracklist
    artists = []
    for line in tracklist.split("\n"):
        match = re.match(r"^\u2022 (.+?) - ", line)
        if match:
            artists.append(match.group(1))
    return artists

def send_prompt_to_custom_server(description):
    url = 'http://127.0.0.1:5001/v1/completions'
    headers = {
        'Content-Type': 'application/json',
    }
    prompt = f"""Extract the tracklist from the following music episode description. 
    Return only the tracklist as an unordered list with parts (if they exist) mentioned as "Part 1", "Part 2", etc., 
    as headers, and without any introductory text, system messages, or additional words. Each track should be in the format "Artist - Track Title":

    Description:
    {description}"""

    data = {
        'prompt': prompt,
        'max_tokens': 1500,
        'temperature': 0.7,
        'top_p': 0.6,
        'seed': 10548
    }
    
    response = requests.post(url, headers=headers, json=data)
    return response.json()

def parse_tracklist_response(response):
    if 'choices' in response and response['choices']:
        content = response['choices'][0]['text']
        # Remove any unwanted text by filtering lines
        lines = content.split('\n')
        cleaned_lines = []
        for line in lines:
            if re.search(r'- .+ -', line) and "Download" not in line and "save link" not in line:
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

        tracklist_cleaned = process_tracklist(entry['descripcion'])
        custom_server_response = send_prompt_to_custom_server(tracklist_cleaned)

        tracklist_std = parse_tracklist_response(custom_server_response)
        tracklist_artists = extract_artists(tracklist_std) if tracklist_std else []

        if tracklist_std:
            result = {
                'episodio': entry['episodio'],
                'titulo': entry['titulo'],
                'likes': entry['likes'],
                'fecha': entry['fecha'],
                'descargas': entry['descargas'],
                'link': entry['link'],
                'tracklist': tracklist_cleaned,
                'tracklist_std': tracklist_std,
                'tracklist_artists': tracklist_artists
            }
            processed_data.append(result)
            print(f"Processed entry {entry['episodio']} successfully.")
            
            # Write the results to the file incrementally
            with open(output_json_file, 'w') as outfile:
                json.dump(processed_data, outfile, indent=4)
                print(f"Wrote {len(processed_data)} entries to file.")
        else:
            print(f"Error or unexpected response from the API for entry {entry['episodio']}: {custom_server_response}")
