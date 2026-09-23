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
  scratch,nuclear     Destroys and recreates the VMs, rebuilds and imports container images, and redeploys the applications
  vms                 Destroys and recreates the VMs
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
        sleep 1

        "$SCRIPTPATH/vagrant.sh" destroy
        echo "VM's destroyed."
        echo

        "$SCRIPTPATH/maintenance/cleanup.sh" containers
        echo "Container images removed."
        echo

        "$SCRIPTPATH/maintenance/cleanup.sh" virtualbox --destroy
        echo "VirtualBox VMs cleared."
        echo

        "$SCRIPTPATH/containers.sh" build
        echo "Container images rebuilt."
        echo

        "$SCRIPTPATH/vagrant.sh" up
        echo "VM's running again."
        echo

        "$SCRIPTPATH/containers.sh" import
        echo "Container images imported into the VM's."
        echo

        KUBECONFIG="$SCRIPTPATH/../devops/kube-config" kubectl delete deployment \
          amn-vehicles-system-backend amn-vehicles-channel-backend \
          --ignore-not-found
        echo "Deployments removed from Kubernetes."
        echo

        "$SCRIPTPATH/deploy.sh"
        echo "Applications redeployed."
        echo

        exit 0
        ;;
    vms)
        "$SCRIPTPATH/vagrant.sh" destroy
        "$SCRIPTPATH/vagrant.sh" up
        exit 0
        ;;
      help|-h|--help)
        usage
        exit 0
        ;;
      *)
        echo "Error: unknown action: $action" >&2
        usage >&2
        exit 2
        ;;
esac

