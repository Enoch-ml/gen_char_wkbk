# -*- coding: utf-8 -*-
import os
import time
import argparse
import urllib.parse
import requests
from bs4 import BeautifulSoup

HEADERS = {
    "User-Agent": "Mozilla/5.0 (compatible; char-scraper/1.0)",
    "Accept-Language": "en-US,en;q=0.9",
}
TIMEOUT = 12
SLEEP_BETWEEN = 0.4  # be gentle to the site


def safe_extract_pinyin_and_def(phrase: str):
    """Robustly extract [pinyin] and '- definition' parts; return (pinyin, definition) or (None, None)."""
    # trim anything after 'radical' if present
    phrase = phrase.split("radical", 1)[0].strip()

    pinyin = None
    definition = None

    # pinyin inside first [...] if present
    if "[" in phrase and "]" in phrase:
        try:
            pinyin = phrase.split("[", 1)[1].split("]", 1)[0].strip()
        except Exception:
            pinyin = None

    # definition after first "- " if present
    if "- " in phrase:
        try:
            definition = phrase.split("- ", 1)[1].strip()
        except Exception:
            definition = None

    return pinyin, definition


def get_pnyn_def(char, session: requests.Session):
    encoded_char = urllib.parse.quote(char)
    url = f"https://www.chinesehideout.com/tools/strokeorder.php?c={encoded_char}"

    for attempt in range(3):
        try:
            resp = session.get(url, headers=HEADERS, timeout=TIMEOUT)
            resp.raise_for_status()
            soup = BeautifulSoup(resp.text, "html.parser")
            header = soup.find("div", id="mydef")
            if not header:
                return None, None
            phrase = header.get_text(strip=True)
            return safe_extract_pinyin_and_def(phrase)
        except Exception:
            if attempt == 2:
                return None, None
            time.sleep(0.6 + attempt * 0.4)


def parse_to_dict(s: str) -> dict:
    result = {}

    for line_number, line in enumerate(s.strip().split("\n"), start=1):
        if not line.strip():
            continue

        if "\t" not in line:
            raise ValueError(
                f"Line {line_number} does not contain a tab separator: {line!r}"
            )

        key, val = line.split("\t", 1)  # split only at the first tab
        result[key] = val

    return result


def parse_args():
    parser = argparse.ArgumentParser(
        description="Fetch pinyin and definitions for characters listed in a TSV file."
    )

    parser.add_argument(
        "tsv_filepath",
        help="Path to the TSV file containing lesson names and characters.",
    )

    return parser.parse_args()


def main():
    args = parse_args()

    with open(args.tsv_filepath, "r", encoding="utf-8") as f:
        raw_data = f.read()

    data_dict = parse_to_dict(raw_data)
    session = requests.Session()

    for lesson_name, chars in data_dict.items():
        base_dir = f"../outputs/output_chars/{lesson_name}"

        for char in chars.split():  # split the value string into tokens
            print(f"Fetching: {char}")
            pinyin, definition = get_pnyn_def(char, session)

            # make directory for this character; creates lesson folder too
            char_dir = os.path.join(base_dir, char)
            os.makedirs(char_dir, exist_ok=True)

            info_path = os.path.join(char_dir, "info.txt")
            with open(info_path, "w", encoding="utf-8") as f:
                f.write(f"Character: {char}\n")
                f.write(f"Pinyin: {pinyin or ''}\n")
                f.write(f"Definition: {definition or ''}\n")

            time.sleep(SLEEP_BETWEEN)

        print(f"\nAll character folders saved under: {base_dir}")


if __name__ == "__main__":
    main()