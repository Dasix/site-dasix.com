#!/bin/bash

# This script will restart the documentation web server.

pm2 restart ./env/pm2/web-server.json
