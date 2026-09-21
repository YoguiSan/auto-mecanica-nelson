#!/bin/bash
# Absolute path to this script, e.g. /home/user/bin/foo.sh
SCRIPT=$(readlink -f "$0")
# Absolute path this script is in, thus /home/user/bin
SCRIPTPATH=$(dirname "$SCRIPT")

# Directory containing this script
SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd -P)"

# Target directory for the container images
BUILD_DIR="$SCRIPT_DIR/../devops/container-images"

usage() {
    cat <<EOF
Usage:
  $(basename "$0") [action] [options]

Actions:
  build           Builds container images
  import          Imports container images into the VMs
  help            Show this help

Examples:
  $(basename "$0")
  $(basename "$0") build
  $(basename "$0") imnport
EOF
}

if [[ $# -eq 0 ]]; then
    action="help"
else
    action="$1"
    shift
fi

case "$action" in
    scratch|nuclear)
        echo "WARNING!! Destroying and recreating the VMs..."
        echo 5
        sleep 1
        echo 4
        sleep 1
        echo 3
        sleep 1
        echo 2
        sleep 1
        echo 1
        sleep 1
        echo "You have been warned."
        "$SCRIPTPATH/vagrant.sh" destroy
        "$SCRIPTPATH/vagrant.sh" up
        "$SCRIPTPATH/containers.sh" build
        "$SCRIPTPATH/containers.sh" import
        "$SCRIPTPATH/deploy.sh"
        rm -rf "$BUILD_DIR"

        ;;

esac


"$SCRIPTPATH/vagrant.sh" destroy
"$SCRIPTPATH/vagrant.sh" up

"$SCRIPTPATH/deploy.sh"
