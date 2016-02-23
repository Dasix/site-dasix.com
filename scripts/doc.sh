#!/bin/bash

# This script generates the project documentation using JSDoc

echo ""
echo "Building JSDoc Documentation"
echo "---------------------------"
echo ""

# Ensure proper directory
cd /project

# Render HTML Docs
echo ""
echo " > Render HTML Docs"
echo ""
jsdoc --configure doc/conf/jsdoc/html-output.json

# Render JSON Docs
# echo ""
# echo " > Render JSON Docs"
# echo ""
# jsdoc --configure doc/conf/jsdoc/json-output.json
