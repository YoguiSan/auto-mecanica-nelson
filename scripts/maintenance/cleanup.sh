#!/usr/bin/env bash
set -Eeuo pipefail

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
  podman              Show podman information, disk usage, and prune unused resources
  virtualbox,vms      Clears all Virtualbox VMs
  containers,images   Removes all container images
  help                Show this help

Examples:
  $(basename "$0")
  $(basename "$0") build
  $(basename "$0") import
EOF
}

if [[ $# -eq 0 ]]; then
    action="help"
else
    action="$1"
    shift
fi

case "$action" in
    podman)
      podman info --format \
      'GraphRoot={{.Store.GraphRoot}} Driver={{.Store.GraphDriverName}}'

      podman system df -v
      podman ps -a --size
      podman images
      podman volume ls

      podman system prune -a --force --volumes
    ;;
    virtualbox|vms)
      "$SCRIPTPATH/nuke-virtualbox.sh" --destroy
    ;;
    containers|images)
      "rm -rf $BUILD_DIR"
    ;;
    help|-h|--help)
        usage
    ;;
esac