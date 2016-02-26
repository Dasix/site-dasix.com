#!/bin/bash

ls -la

echo ""
echo "---- Executing Build (scripts/build.sh) ---------------------------------"
echo ""

grunt rebuild

echo ""
echo "---- Build Finished (scripts/build.sh) ----------------------------------"
echo ""

ls -la
