#!/usr/bin/env bash
set -Eeuo pipefail

# Directory containing this script
SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd -P)"

# Target directory for the container images
BUILD_DIR="$SCRIPT_DIR/../devops/container-images"

# shellcheck source=../devops/.env
source "$SCRIPT_DIR/../devops/.env"

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
    import)
        # Alias for halting
        for ((i = 1; i <= $WORKER_COUNT; ++ i))
        do
            cd "$SCRIPT_DIR/../devops" || exit
            vagrant ssh "worker-$i" -c "
                echo \"Importing images into worker-$i\" &&
                sudo ctr -n k8s.io images import /vagrant/container-images/chatbot-system-${CHATBOT_SYSTEM_VERSION}.tar &&
                sudo ctr -n k8s.io images import /vagrant/container-images/chatbot-channel-${CHATBOT_CHANNEL_VERSION}.tar &&
                sudo ctr -n k8s.io images import /vagrant/container-images/frontend-${FRONTEND_VERSION}.tar
                echo \"Finished importing images into worker-$i\" &&
                exit
            "
        done
        ;;

    build)
        # Chatbot channel backend
        cd "$SCRIPT_DIR/../packages/chatbot-channel-backend" || exit
        podman build . -t "amn-chatbot-channel:$CHATBOT_CHANNEL_VERSION"
        podman save "amn-chatbot-channel:$CHATBOT_CHANNEL_VERSION" -o "$BUILD_DIR/chatbot-channel-$CHATBOT_CHANNEL_VERSION.tar"
        echo "Chatbot channel API version $CHATBOT_CHANNEL_VERSION built and saved to $BUILD_DIR/chatbot-channel-$CHATBOT_CHANNEL_VERSION.tar"
        cd ../../

        # Chatbot system backend
        cd "$SCRIPT_DIR/../packages/chatbot-system-backend" || exit
        podman build . -t "amn-chatbot-system:$CHATBOT_SYSTEM_VERSION"
        podman save "amn-chatbot-system:$CHATBOT_SYSTEM_VERSION" -o "$BUILD_DIR/chatbot-system-$CHATBOT_SYSTEM_VERSION.tar"
        echo "Chatbot system API version $CHATBOT_SYSTEM_VERSION built and saved to $BUILD_DIR/chatbot-system-$CHATBOT_SYSTEM_VERSION.tar"
        cd ../../

        # Frontend
        podman build . -t "amn-frontend:$FRONTEND_VERSION"
        podman save "amn-frontend:$FRONTEND_VERSION" -o "$BUILD_DIR/frontend-$FRONTEND_VERSION.tar"
        echo "Frontend version $FRONTEND_VERSION built and saved to $BUILD_DIR/frontend-$FRONTEND_VERSION.tar"
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