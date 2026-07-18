"""Generate a multi-size favicon.ico for KimiK3 Max.

Kimi-inspired design: blue gradient rounded tile + white chat bubble + blue "K3".
Kept simple/legible at 16px while matching the SVG logo mark.
"""
import os
from PIL import Image, ImageDraw, ImageFont

OUT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "public", "favicon.ico"))

TOP = (79, 139, 255, 255)   # Kimi blue (gradient top)
BOT = (30, 84, 224, 255)    # Kimi blue (gradient bottom)
WHITE = (255, 255, 255, 255)
INK = (46, 111, 230, 255)   # blue "K3"

FONT_PATHS = [
    "C:/Windows/Fonts/arial.ttf",
    "C:/Windows/Fonts/ARIAL.TTF",
    "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
    "/Library/Fonts/Arial.ttf",
]


def get_font(size):
    for p in FONT_PATHS:
        if os.path.exists(p):
            try:
                return ImageFont.truetype(p, size)
            except Exception:
                continue
    return ImageFont.load_default()


def gradient_tile(size):
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    margin = int(size * 0.10)
    r = int(size * 0.24)
    for y in range(size):
        t = y / max(1, size - 1)
        rr = int(TOP[0] + (BOT[0] - TOP[0]) * t)
        gg = int(TOP[1] + (BOT[1] - TOP[1]) * t)
        bb = int(TOP[2] + (BOT[2] - TOP[2]) * t)
        d.line([(0, y), (size, y)], fill=(rr, gg, bb, 255))
    mask = Image.new("L", (size, size), 0)
    ImageDraw.Draw(mask).rounded_rectangle(
        [margin, margin, size - margin, size - margin], radius=r, fill=255
    )
    img.putalpha(mask)
    return img


def make(size):
    img = gradient_tile(size)
    d = ImageDraw.Draw(img)
    # white chat bubble
    bm = int(size * 0.16)
    br = int(size * 0.18)
    d.rounded_rectangle(
        [bm, bm, size - bm, int(size * 0.78)], radius=br, fill=WHITE
    )
    # tail
    tx = int(size * 0.47)
    d.polygon(
        [(tx, int(size * 0.78)), (int(size * 0.34), int(size * 0.92)), (int(size * 0.60), int(size * 0.78))],
        fill=WHITE,
    )
    # blue K3
    font = get_font(int(size * 0.42))
    text = "K3"
    bbox = d.textbbox((0, 0), text, font=font)
    tw = bbox[2] - bbox[0]
    th = bbox[3] - bbox[1]
    x = (size - tw) / 2 - bbox[0]
    y = (size * 0.50 - th / 2) - bbox[1]
    d.text((x, y), text, font=font, fill=INK)
    return img


sizes = [16, 32, 48, 64]
images = [make(s) for s in sizes]
os.makedirs(os.path.dirname(OUT), exist_ok=True)
images[0].save(OUT, sizes=[(s, s) for s in sizes])
print("wrote", OUT, os.path.getsize(OUT), "bytes")
