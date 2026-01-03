#!/usr/bin/env bash

INPUT_DIR="./src/assets/images"

for img in "$INPUT_DIR"/*.png; do
  base_name="$(basename "$img" .png)"
  ffmpeg -i "$img" -c:v libwebp -lossless 0 -q:v 75 "$INPUT_DIR/$base_name.webp"
done
