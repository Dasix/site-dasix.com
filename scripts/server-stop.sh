#!/bin/bash

# This script will STOP the documentation web server.

pm2 stop ./env/pm2/web-server.json
