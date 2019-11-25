#!/bin/sh

PATH=/usr/local/bin/:$PATH

# Check if yabai exists
if ! [ -x "$(command -v yabai)" ]; then
  echo "{\"error\":\"yabai binary not found\"}"
  exit 1
fi

SPACES_1=$(yabai -m query --spaces --display 1 2> /dev/null || echo "[]")
SPACES_2=$(yabai -m query --spaces --display 2 2> /dev/null || echo "[]")
SPACES_3=$(yabai -m query --spaces --display 3 2> /dev/null || echo "[]")

echo $(cat <<-EOF
[
  $SPACES_1,
  $SPACES_2,
  $SPACES_3
]
EOF
)
