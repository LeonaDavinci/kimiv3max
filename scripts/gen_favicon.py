"""Generate a multi-size favicon.ico for KimiK3 Max.

Design: black gradient rounded tile + white "K" + small blue-green "3".
Legible at 16px while matching the SVG logo mark.
"""
import os
from PIL import Image, ImageDraw, ImageFont

OUT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "public", "favicon.ico"))

TOP = (43, 43, 48, 255)     # black gradient (top)
BOT = (7, 7, 8, 255)        # black gradient (bottom)
WHITE = (255, 255, 255, 255)
TEAL = (25, 200, 176, 255)  # blue-green "3" (#19C8B0)

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
    cy = size * 0.50
    fK = get_font(int(size * 0.44))
    f3 = get_font(int(size * 0.30))
    kb = d.textbbox((0, 0), "K", font=fK)
    kw = kb[2] - kb[0]
    kh = kb[3] - kb[1]
    t3b = d.textbbox((0, 0), "3", font=f3)
    tw3 = t3b[2] - t3b[0]
    gap = int(size * 0.04)
    total = kw + gap + tw3
    xK = (size - total) / 2 - kb[0]
    yK = cy - kh / 2 - kb[1]
    d.text((xK, yK), "K", font=fK, fill=WHITE)
    x3 = xK + kw + gap - t3b[0]
    y3 = yK - int(size * 0.12) - t3b[1]
    d.text((x3, y3), "3", font=f3, fill=TEAL)
    return img


sizes = [16, 32, 48, 64]
images = [make(s) for s in sizes]
os.makedirs(os.path.dirname(OUT), exist_ok=True)
images[0].save(OUT, sizes=[(s, s) for s in sizes])
print("wrote", OUT, os.path.getsize(OUT), "bytes")
