import os

import pandas as pd

def sort_cards(column):
    if column.name == "type":
        return column.map({"character": 0, "companion": 0, "item": 1, "meteorite": 2, "quest": 3})
    else:
        return column

scripts_dir = os.path.dirname(os.path.realpath(__file__))
df = pd.read_excel(os.path.join(scripts_dir, "cards.xlsx"), sheet_name="Master")
df["id"] = df.index
df.sort_values(by=["type", "number", "team"], inplace=True, key=sort_cards)
df["number"] = df["number"].map(lambda x: '{:03d}'.format(int(x)) if not pd.isnull(x) else x)
df.to_json(os.path.join(scripts_dir, "../src/assets/cards.json"), orient="records", indent=2)
