#!/usr/bin/env bash

set -Eeuo pipefail

# Directory containing this script
SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd -P)"

# Adjust this path if necessary
VAGRANT_DIR="$SCRIPT_DIR/../devops"

set -a
source "$VAGRANT_DIR/.env"
set +a

# Kubernetes configuration
export KUBECONFIG="$VAGRANT_DIR/kube-config"

usage() {
    cat <<EOF
Usage:
  $(basename "$0") [action] [options]

Actions:
  pods          Show pod status
  help          Show this help

Examples:
  $(basename "$0")
  $(basename "$0") loadbalancer
EOF
}

if [[ $# -eq 0 ]]; then
    action="help"
else
    action="$1"
    shift
fi

case "$action" in
    pods)
        cd "$VAGRANT_DIR" || exit
        KUBECONFIG="$VAGRANT_DIR/kube-config" kubectl get pods
        ;;
    disk-usage)
        echo "Current disk usage:"
        df -h "$HOME"
        echo

        echo "Disk usage of VirtualBox VMs:"
        du -sh "$HOME/VirtualBox VMs"
        echo

        echo "Largest files in VirtualBox VMs directory:"
        du -ah "$HOME/VirtualBox VMs" | sort -h | tail -30
        echo

        echo "Space currently being used by container images:"
        du -ah "$VAGRANT_DIR/container-images" | sort -h | tail -30
        ;;
    help|-h|--help)
        usage
        exit 0
        ;;
    vagrant)
        "$SCRIPT_DIR/vagrant.sh status"
        exit 0
        ;;
    *)
        echo "Error: unknown action: $action" >&2
        echo >&2
        usage >&2
        exit 2
        ;;
esac
