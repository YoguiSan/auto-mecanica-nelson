#!/usr/bin/env bash

set -Eeuo pipefail

# Directory containing this script
SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd -P)"

# Kubernetes configuration
export KUBECONFIG="$SCRIPT_DIR/../devops/kube-config"

# Adjust these paths
FRONTEND_MANIFEST="$SCRIPT_DIR/../devops/frontend/deployment.yaml"
CHATBOT_SYSTEM_MANIFEST="$SCRIPT_DIR/../devops/chatbot/system.yaml"
CHATBOT_CHANNEL_MANIFEST="$SCRIPT_DIR/../devops/chatbot/channel.yaml"
VEHICLES_SYSTEM_MANIFEST="$SCRIPT_DIR/../devops/vehicles/system.yaml"
VEHICLES_CHANNEL_MANIFEST="$SCRIPT_DIR/../devops/vehicles/channel.yaml"

usage() {
    cat <<EOF
Usage:
  $(basename "$0") [target] [kubectl options]

Targets:
  all          Deploy everything; this is the default
  frontend     Deploy the frontend
  chatbot      Deploy the chatbot system
  vehicles     Deploy the vehicles system
  status       Show Kubernetes resources
  help         Show this help

Examples:
  $(basename "$0")
  $(basename "$0") all
  $(basename "$0") frontend
  $(basename "$0") chatbot
  $(basename "$0") vehicles
  $(basename "$0") status
  $(basename "$0") all --namespace development
EOF
}

apply_manifest() {
    local name="$1"
    local manifest="$2"
    shift 2

    if [[ ! -f "$manifest" ]]; then
        echo "Error: manifest for '$name' does not exist:" >&2
        echo "  $manifest" >&2
        exit 1
    fi

    echo "Deploying $name..."
    kubectl apply "$@" -f "$manifest"
}

deploy_frontend() {
    apply_manifest "frontend" "$FRONTEND_MANIFEST" "$@"
}

deploy_chatbot() {
    apply_manifest "chatbot-system" "$CHATBOT_SYSTEM_MANIFEST" "$@"
    apply_manifest "chatbot-channel" "$CHATBOT_CHANNEL_MANIFEST" "$@"
}

deploy_vehicles() {
    apply_manifest "vehicles-system" "$VEHICLES_SYSTEM_MANIFEST" "$@"
    apply_manifest "vehicles-channel" "$VEHICLES_CHANNEL_MANIFEST" "$@"
}

deploy_all() {
    deploy_frontend "$@"
    deploy_chatbot "$@"
    # deploy_vehicles "$@"
}

# No target means: deploy everything
if [[ $# -eq 0 ]]; then
    target="all"
else
    target="$1"
    shift
fi

case "$target" in
    all)
        deploy_all "$@"
        ;;

    frontend)
        deploy_frontend "$@"
        ;;

    chatbot)
        deploy_chatbot "$@"
        ;;

    vehicles)
        deploy_vehicles "$@"
        ;;

    status)
        kubectl get pods,services,deployments "$@"
        ;;

    help|-h|--help)
        usage
        ;;

    *)
        echo "Error: unknown target: $target" >&2
        echo >&2
        usage >&2
        exit 2
        ;;
esac
