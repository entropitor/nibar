#!/bin/bash

PATH=/usr/local/bin/:$PATH

# Check if yabai exists
if ! [ -x "$(command -v yabai)" ]; then
  echo "{\"error\":\"yabai binary not found\"}"
  exit 1
fi

DISPLAY="$1"

yabai -m query --spaces --display $DISPLAY 2>/dev/null || echo "{\"error\":\"yabai could not find your display $DISPLAY\"}"
