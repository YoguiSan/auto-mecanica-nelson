#!/usr/bin/env bash

set -Eeuo pipefail

# Directory containing this script
SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd -P)"

# Adjust this path if necessary
VAGRANT_DIR="$SCRIPT_DIR/../devops"

set -a
source "$VAGRANT_DIR/.env"
set +a

echo "Master settings:"
echo "MASTER_CPUS: $MASTER_CPUS"
echo "MASTER_MEMORY: $MASTER_MEMORY"
echo "MASTER_COUNT: $MASTER_COUNT"

echo "Worker settings:"
echo "WORKER_COUNT: $WORKER_COUNT"
echo "WORKER_CPUS: $WORKER_CPUS"
echo "WORKER_MEMORY: $WORKER_MEMORY"

usage() {
    cat <<EOF
Usage:
  $(basename "$0") [action] [options]

Actions:
  up              Start the VMs
  down, halt      Stop the VMs
  reload          Restart the VMs
  suspend         Suspend the VMs
  resume          Resume suspended VMs
  provision       Provision the VMs
  destroy         Destroy the VMs
  status          Show VM status
  ssh             Connect to a VM
  help            Show this help

Examples:
  $(basename "$0")
  $(basename "$0") up
  $(basename "$0") up --provider virtualbox
  $(basename "$0") halt
  $(basename "$0") destroy
  $(basename "$0") ssh
EOF
}

if [[ ! -d "$VAGRANT_DIR" ]]; then
    echo "Error: Vagrant directory does not exist: $VAGRANT_DIR" >&2
    exit 1
fi

cd "$VAGRANT_DIR"

# No action means: show status
if [[ $# -eq 0 ]]; then
    exec vagrant status
fi

action="$1"
shift

case "$action" in
    down)
        # Alias for halting
        exec vagrant halt
        ;;
    up|halt|reload|suspend|resume|provision|status|ssh)
        exec vagrant "$action"
        ;;

    destroy)
        # Always destroy without asking for confirmation
        exec vagrant destroy -f
        ;;

    help|-h|--help)
        usage
        ;;

    *)
        echo "Error: unknown action: $action" >&2
        echo >&2
        usage >&2
        exit 2
        ;;
esac
