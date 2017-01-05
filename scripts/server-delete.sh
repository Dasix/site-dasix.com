#!/bin/bash

pm2 delete ./env/pm2/server.json
pm2 save
