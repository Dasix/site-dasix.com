#!/bin/bash

echo ""
echo "---- Executing CI Build (scripts/ci-build.sh) ---------------------------"
echo ""

grunt clean
mkdir dist
grunt build

echo ""
echo "---- CI Build Finished (scripts/ci-build.sh) ----------------------------"
echo ""
