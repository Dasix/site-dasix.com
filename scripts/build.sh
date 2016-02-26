#!/bin/bash

ls -la

echo ""
echo "---- Executing Build (scripts/build.sh) ---------------------------------"
echo ""
4
grunt build

echo ""
echo "---- Build Finished (scripts/build.sh) ----------------------------------"
echo ""

ls -la
