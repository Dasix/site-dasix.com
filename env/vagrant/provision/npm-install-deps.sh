#!/bin/bash

# This is a provisioning script that is executed automatically
# by Vagrant as part of the development environment setup.
# See the README.md in this directory for more information.

echo ""
echo "[Provision] npm-install-deps.sh: Installing Project Dependencies"

cd /project
npm install
