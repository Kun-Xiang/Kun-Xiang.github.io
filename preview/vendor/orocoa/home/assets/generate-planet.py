"""Build an original ringed-planet point cloud for the existing renderer.

Each sample stores float32 xyz, normalized int8 surface normals, and uint8
reflectance. Deterministic shuffling preserves the full model at phone budgets.
Run this file with Python 3 to regenerate the binary beside it.
"""

import json
import math
from pathlib import Path
import random
import struct


HERE = Path(__file__).resolve().parent
RANDOM = random.Random(42817)
POINTS = []
TILT = 0.68
ROLL = -0.34


def orient(vector):
    x, y, z = vector
    y, z = y * math.cos(TILT) - z * math.sin(TILT), y * math.sin(TILT) + z * math.cos(TILT)
    return (
        x * math.cos(ROLL) - y * math.sin(ROLL),
        x * math.sin(ROLL) + y * math.cos(ROLL),
        z,
    )


def sample(position, normal, reflectance):
    xyz = orient(position)
    normal = orient(normal)
    encoded_normal = [round(max(-1, min(1, value)) * 127) for value in normal]
    tone = round(max(0, min(1, reflectance)) * 255)
    POINTS.append(struct.pack("<fffbbbB", *xyz, *encoded_normal, tone))


# A slightly oblate planet with quiet, uneven cloud bands.
for _ in range(110000):
    latitude = RANDOM.uniform(-1, 1)
    angle = RANDOM.uniform(0, math.tau)
    radius = 0.735 + RANDOM.gauss(0, 0.0018)
    side = math.sqrt(1 - latitude * latitude)
    x, z = side * math.cos(angle), side * math.sin(angle)
    band = math.sin(latitude * 38 + math.sin(angle * 3) * 0.6)
    fine_band = math.sin(latitude * 89 + angle * 0.3)
    tone = 0.69 + band * 0.13 + fine_band * 0.045 + RANDOM.uniform(-0.055, 0.055)
    sample((x * radius, latitude * radius * 0.91, z * radius), (x, latitude, z), tone)


# Separate ring bands and narrow gaps keep the silhouette legible as points.
for start, end, count, tone in [
    (1.00, 1.17, 30000, 0.55),
    (1.19, 1.38, 55000, 0.88),
    (1.43, 1.53, 25000, 0.67),
]:
    for _ in range(count):
        radius = math.sqrt(RANDOM.uniform(start * start, end * end))
        angle = RANDOM.uniform(0, math.tau)
        height = RANDOM.gauss(0, 0.003)
        grooves = 0.78 + 0.22 * math.sin(radius * 265) ** 2
        normal = (0, 1 if height >= 0 else -1, 0)
        sample(
            (radius * math.cos(angle), height, radius * math.sin(angle)),
            normal,
            tone * grooves * RANDOM.uniform(0.85, 1.0),
        )


RANDOM.shuffle(POINTS)
binary = b"".join(POINTS)
assert len(binary) == len(POINTS) * 16
(HERE / "ringed-planet.points.bin").write_bytes(binary)
(HERE / "pointcloud.json").write_text(
    json.dumps(
        {
            "points": len(POINTS),
            "file": "ringed-planet.points.bin",
            "description": "Original procedural ringed planet for Kun Xiang's homepage",
            "generator": "generate-planet.py; deterministic sphere and annular surfaces",
        },
        indent=2,
    ) + "\n"
)
print(f"Generated {len(POINTS):,} points ({len(binary):,} bytes).")
