#!/bin/bash

ls -la ./dist

echo ""
echo "---- Executing Build (scripts/build.sh) ---------------------------------"
echo ""

grunt build

echo ""
echo "---- Build Finished (scripts/build.sh) ----------------------------------"
echo ""

ls -la ./dist
