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
  vehicle, vehicles            Runs the vehicle system and channel (not yet implemented) API's along with Redis in the local development environment
  chatbot             Runs the chatbot system and channel API's along with Redis in the local development environment

Examples:
  $(basename "$0")
  $(basename "$0") vehicles
  $(basename "$0") chatbot
EOF
}

if [[ $# -eq 0 ]]; then
    action="help"
else
    action="$1"
    shift
fi

case "$action" in
    vehicle|vehicles)
        set -a
        source "$SCRIPT_DIR/../../packages/vehicle-system-api/.env"
        set +a
        PODMAN_CONTAINERS_CONF=short-name-mode="enforcing" podman compose -f "$SCRIPTPATH/../../docker-compose.vehicles.yml" up --build
      ;;
    chatbot)
        set -a
        source "$SCRIPT_DIR/../../packages/chatbot-system-backend/.env"
        source "$SCRIPT_DIR/../../packages/chatbot-channel-backend/.env"
        set +a
        PODMAN_CONTAINERS_CONF=short-name-mode="enforcing" podman compose -f "$SCRIPTPATH/../../docker-compose.chatbot.yml" up --build
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

