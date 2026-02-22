import json
import sys

def extract_values(data, key):
    values = []
    for obj in data:
        if key in obj:
            values.append(obj[key])
    return values

def main(input_file, key):
    try:
        with open(input_file, 'r', encoding='utf-8') as file:
            data = json.load(file)
        
        values = extract_values(data, key)
        
        for value in values:
            print(value)
            
    except FileNotFoundError:
        print(f"Error: The file '{input_file}' does not exist.")
    except json.JSONDecodeError:
        print(f"Error: The file '{input_file}' is not valid JSON.")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python extract_values.py <input_file> <key>")
    else:
        input_file = sys.argv[1]
        key = sys.argv[2]
        main(input_file, key)