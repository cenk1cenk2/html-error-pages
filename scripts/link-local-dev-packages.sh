#!/bin/bash

echo "Register all packages globally for development."
PACKAGES="@cenk1cenk2/react-template-base @cenk1cenk2/react-template-components"

if [ -z "$1" ]; then
  echo "Give out a command: link | unlink"
fi

for PACKAGE in $PACKAGES; do
  echo "Package: $PACKAGE"

  if [ "$1" == "link" ]; then
    yarn link ${PACKAGE}
  elif [ "$1" == "unlink" ]; then
    yarn unlink ${PACKAGE}
  fi
done
