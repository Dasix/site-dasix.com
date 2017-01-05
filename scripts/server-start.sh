#!/bin/bash

pm2 start ./env/pm2/server.json
pm2 save
