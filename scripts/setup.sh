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
        KUBECONFIG="$VAGRANT_DIR/kube-config" kubectl apply -f https://raw.githubusercontent.com/metallb/metallb/v0.16.1/config/manifests/metallb-frr-k8s.yaml
        KUBECONFIG="$VAGRANT_DIR/kube-config" kubectl wait --namespace metallb-system --for=condition=ready pod --selector=app=metallb --timeout=90s

        # From MetalLB's documentation: This will deploy MetalLB to your cluster, under the metallb-system namespace. The components in the manifest are:

        # - The metallb-system/controller deployment. This is the cluster-wide controller that handles IP address assignments.
        # - The metallb-system/speaker daemonset. This is the component that speaks the protocol(s) of your choice to make the services reachable.
        # - Service accounts for the controller and speaker, along with the RBAC permissions that the components need to function.
        # The installation manifest does not include a configuration file. MetalLB’s components will still start, but will remain idle until you start deploying resources.
        ;;
    # Disable VM's recording feature to save disk space
    virtualbox-configs)
        VBoxManage list vms |
        sed -n 's/^"\([^"]*\)".*$/\1/p' |
        while IFS= read -r vm; do
            VBoxManage modifyvm "$vm" --recording off
        done
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
