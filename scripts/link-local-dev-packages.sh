#!/bin/bash

echo "Register all packages globally for development."
BASE_PATH="../react-template/dist"
PACKAGES="react-template-base react-template-components"
COPY_TO="./node_modules/@cenk1cenk2/"

if [ -z "$1" ]; then
  echo "Give out a command: link | unlink"
fi

for PACKAGE in $PACKAGES; do
  echo "Package: $PACKAGE"

  if [ "$1" == "link" ]; then
    (cp -r "$BASE_PATH/$PACKAGE" "$COPY_TO")
  elif [ "$1" == "unlink" ]; then
    (rm -r "$COPY_TO/$PACKAGE")
  fi
done
