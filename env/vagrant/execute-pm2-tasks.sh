#!/bin/bash

# Execute the runners and watchers

echo ""
echo "[Provision-Local] Starting the Local Server"
echo ""
cd /project
npm run-script server-start

echo ""
echo ""
echo "-------------------------------------------------------------------------"
echo ""
echo "        A local Grits.js webserver has been setup and should"
echo "        be available at: http://localhost:3570/"
echo ""
echo "-------------------------------------------------------------------------"
echo ""
echo ""
