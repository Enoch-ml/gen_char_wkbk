import os
import time
import re
import argparse
import urllib.parse
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from PIL import Image
import cairosvg

# Base output directory; all lesson/character folders go under here
DIR_PATH = "../outputs/output_chars"


def sanitize_folder_name(name: str) -> str:
    """Make a safe folder name across OSes."""
    return re.sub(r'[<>:"/\\|?*]', "_", name).rstrip(" .")


def setup_driver():
    options = Options()
    options.add_argument("--headless=new")
    options.add_argument("--disable-gpu")
    options.add_argument("--no-sandbox")
    options.add_argument("--window-size=1200,900")

    driver = webdriver.Chrome(options=options)
    return driver


def fetch_svgs(driver, character):
    """Return a list of SVG outerHTML strings for the given character page."""
    encoded_char = urllib.parse.quote(character)
    url = f"https://www.chinesehideout.com/tools/strokeorder.php?c={encoded_char}"
    driver.get(url)

    # Wait up to 10s for any SVG under #sequence to appear
    try:
        WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.CSS_SELECTOR, "#sequence svg"))
        )
    except Exception:
        # Fallback: give the page a little time and parse anyway
        time.sleep(1.5)

    # Use Selenium to grab the live DOM
    svgs = driver.find_elements(By.CSS_SELECTOR, "#sequence svg")
    if svgs:
        return [el.get_attribute("outerHTML") for el in svgs]

    # Fallback: parse page_source with BS4 in case SVGs are present there
    soup = BeautifulSoup(driver.page_source, "html.parser")
    sequence_div = soup.find("div", id="sequence")
    if not sequence_div:
        return []

    return [str(s) for s in sequence_div.find_all("svg")]


def save_pngs(base_dir, lesson_name, character, svg_strings):
    """Save numbered PNGs, e.g. 1.png, 2.png, under base_dir/lesson/character."""
    lesson_dir = os.path.join(base_dir, sanitize_folder_name(lesson_name))
    char_dir = os.path.join(lesson_dir, character)
    os.makedirs(char_dir, exist_ok=True)

    count = 0

    for idx, svg_code in enumerate(svg_strings, 1):
        out_path = os.path.join(char_dir, f"{idx}.png")

        try:
            cairosvg.svg2png(
                bytestring=svg_code.encode("utf-8"),
                write_to=out_path,
                output_width=100,
                output_height=100,
            )

            # Optional crop: top-left 85x85
            with Image.open(out_path) as img:
                cropped = img.crop((0, 0, 85, 85))
                cropped.save(out_path)

            count += 1

        except Exception as e:
            print(f"  ! Failed to convert/crop SVG {idx} for {character}: {e}")

    return count


def parse_to_dict(s: str) -> dict:
    """Parse lines of 'key\\tvalue...' into {key: value_string}."""
    result = {}

    for line_number, line in enumerate(s.strip().split("\n"), start=1):
        if not line.strip():
            continue

        if "\t" not in line:
            raise ValueError(
                f"Line {line_number} does not contain a tab separator: {line!r}"
            )

        key, val = line.split("\t", 1)
        result[key] = val

    return result


def parse_args():
    parser = argparse.ArgumentParser(
        description="Download stroke-order PNGs for Chinese characters listed in a TSV file."
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

    os.makedirs(DIR_PATH, exist_ok=True)
    driver = setup_driver()

    try:
        for lesson_name, chars_str in data_dict.items():
            tokens = [tok for tok in chars_str.split() if tok.strip()]
            print(f"\n== Lesson: {lesson_name}  ({len(tokens)} tokens)")

            for ch in tokens:
                print(f"  - Processing {ch} ...")

                svg_strings = fetch_svgs(driver, ch)

                if not svg_strings:
                    print(f"    No stroke-order SVGs found for '{ch}'")

                    # Still create the character directory to mark it missing
                    save_pngs(DIR_PATH, lesson_name, ch, [])
                    continue

                saved = save_pngs(DIR_PATH, lesson_name, ch, svg_strings)
                print(f"    Saved {saved} PNG(s) for '{ch}'")

    finally:
        driver.quit()


if __name__ == "__main__":
    main()