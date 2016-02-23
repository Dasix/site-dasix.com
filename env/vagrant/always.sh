#!/bin/bash

# This file is executed each time that "vagrant up" or "vagrant reload" is
# executed.  During provisioning, this file is executed AFTER provision.sh.

# Load common path variables
source "/project/env/vagrant/provision/_paths.sh"

echo ""
echo "[Always] always.sh: Rebuilding YUM Cache"
yum makecache fast

echo ""
echo "[Always] always.sh: Updating 'locate' Database (disabled)"
# updatedb

echo ""
