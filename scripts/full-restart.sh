#!/bin/bash
# Absolute path to this script, e.g. /home/user/bin/foo.sh
SCRIPT=$(readlink -f "$0")
# Absolute path this script is in, thus /home/user/bin
SCRIPTPATH=$(dirname "$SCRIPT")
# BUILD_DIR="$SCRIPTPATH/../devops/.vagrant/container-images"

# shellcheck source=../devops/.env
# source "$SCRIPTPATH/../devops/.env",

"$SCRIPTPATH/vagrant.sh" destroy
"$SCRIPTPATH/./vagrant.sh" up
"$SCRIPTPATH/./deploy.sh"
