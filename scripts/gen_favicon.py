"""Generate a multi-size favicon.ico for KimiK3 Max (blue mark + K3)."""
import os
from PIL import Image, ImageDraw, ImageFont

OUT = os.path.join(os.path.dirname(__file__), "..", "public", "favicon.ico")
OUT = os.path.abspath(OUT)

BLUE = (66, 133, 244, 255)
WHITE = (255, 255, 255, 255)

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


def make(size):
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    margin = int(size * 0.12)
    d.rounded_rectangle(
        [margin, margin, size - margin, size - margin],
        radius=int(size * 0.22),
        fill=BLUE,
    )
    font = get_font(int(size * 0.5))
    text = "K3"
    bbox = d.textbbox((0, 0), text, font=font)
    tw = bbox[2] - bbox[0]
    th = bbox[3] - bbox[1]
    x = (size - tw) / 2 - bbox[0]
    y = (size - th) / 2 - bbox[1]
    d.text((x, y), text, font=font, fill=WHITE)
    return img


sizes = [16, 32, 48]
images = [make(s) for s in sizes]
os.makedirs(os.path.dirname(OUT), exist_ok=True)
images[0].save(OUT, sizes=[(s, s) for s in sizes])
print("wrote", OUT, os.path.getsize(OUT), "bytes")
