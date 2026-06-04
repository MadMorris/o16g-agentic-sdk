#!/usr/bin/env bash
# o16g Bootstrap Script
# Generates the .o16g_state.md file (REASONS Canvas) if it does not exist.

STATE_FILE=".o16g_state.md"

if [ ! -f "$STATE_FILE" ]; then
  echo "Initializing o16g State Canvas ($STATE_FILE)..."
  # Try to use local template if available, otherwise fetch via curl
  if [ -f "templates/REASONS.md" ]; then
    cp "templates/REASONS.md" "$STATE_FILE"
  elif [ -f ".o16g/templates/REASONS.md" ]; then
    cp ".o16g/templates/REASONS.md" "$STATE_FILE"
  else
    curl -sL https://raw.githubusercontent.com/MadMorris/o16g-agentic-sdk/main/templates/REASONS.md -o "$STATE_FILE"
  fi
  echo "State Canvas initialized successfully."
else
  echo "State Canvas ($STATE_FILE) already exists."
fi
