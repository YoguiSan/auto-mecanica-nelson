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
  lb,loadbalancer       Installs MetalLB
  help                  Show this help

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
    lb|loadbalancer)
        echo "Using configurations from: $KUBECONFIG"

        # Setup MetalLB (load balancer)
        cd "$VAGRANT_DIR" || exit
        KUBECONFIG="$VAGRANT_DIR/kube-config" kubectl apply -f https://raw.githubusercontent.com/metallb/metallb/v0.14.5/config/manifests/metallb-native.yaml
        KUBECONFIG="$VAGRANT_DIR/kube-config" kubectl wait --namespace metallb-system --for=condition=ready pod --selector=app=metallb --timeout=90s
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
