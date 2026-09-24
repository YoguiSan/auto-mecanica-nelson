#!/usr/bin/env bash
set -Eeuo pipefail

# Directory containing this script
SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd -P)"

# Target directory for the container images
BUILD_DIR="$SCRIPT_DIR/../devops/container-images"

# shellcheck source=../devops/.env
set -a
source "$SCRIPT_DIR/../devops/.env"
set +a

usage() {
    cat <<EOF
Usage:
  $(basename "$0") [action] [options]

Actions:
  build             Builds all container images
  build-frontend    Builds the frontend image
  build-chatbot     Builds the chatbot "channel" and "system" API's
  build-vehicles    Builds the vehicles "channel" and "system" API's
  torqvoice         Generates the manifests from packages/torqvoice/docker-compose.yml using Kompose
  import            Imports container images into the VMs
  help              Show this help

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

build_frontend() {
    podman build . -t "localhost/amn-frontend:$FRONTEND_VERSION"
    podman save "localhost/amn-frontend:$FRONTEND_VERSION" -o "$BUILD_DIR/frontend-$FRONTEND_VERSION.tar"
    echo "Frontend version $FRONTEND_VERSION built and saved to $BUILD_DIR/frontend-$FRONTEND_VERSION.tar"
}

build_chatbot() {
    # Channel backend
    cd "$SCRIPT_DIR/../packages/chatbot-channel-backend" || exit
    podman build . -t "localhost/amn-chatbot-channel:$CHATBOT_CHANNEL_VERSION"
    podman save "localhost/amn-chatbot-channel:$CHATBOT_CHANNEL_VERSION" -o "$BUILD_DIR/chatbot-channel-$CHATBOT_CHANNEL_VERSION.tar"
    echo "Chatbot channel API version $CHATBOT_CHANNEL_VERSION built and saved to $BUILD_DIR/chatbot-channel-$CHATBOT_CHANNEL_VERSION.tar"
    cd ../../

    # System backend
    cd "$SCRIPT_DIR/../packages/chatbot-system-backend" || exit
    podman build . -t "localhost/amn-chatbot-system:$CHATBOT_SYSTEM_VERSION"
    podman save "localhost/amn-chatbot-system:$CHATBOT_SYSTEM_VERSION" -o "$BUILD_DIR/chatbot-system-$CHATBOT_SYSTEM_VERSION.tar"
    echo "Chatbot system API version $CHATBOT_SYSTEM_VERSION built and saved to $BUILD_DIR/chatbot-system-$CHATBOT_SYSTEM_VERSION.tar"
    cd ../../
}

build_vehicles() {
    # FIXME: not yet implemented
    echo "FIXME: not yet implemented"
    exit 1
}

build_torqvoice() {
    cd "$SCRIPT_DIR/../packages/torqvoice"
    kompose convert
    echo "BETTER_AUTH_SECRET=$(openssl rand -hex 32)" > .env
    echo 'NEXT_PUBLIC_APP_URL=http://localhost:3000' >> .env
    cd ../../
}

build_all() {
    build_backend "$@"
    build_frontend "$@"
    build_torqvoice "$@"
}

case "$action" in
    import)
        for ((i = 1; i <= $WORKER_COUNT; ++ i))
        do
            cd "$SCRIPT_DIR/../devops" || exit
            vagrant ssh "worker-$i" -c "
                echo \"Importing images into worker-$i\" &&
                sudo ctr -n k8s.io images import /vagrant/container-images/chatbot-system-${CHATBOT_SYSTEM_VERSION}.tar &&
                sudo ctr -n k8s.io images import /vagrant/container-images/chatbot-channel-${CHATBOT_CHANNEL_VERSION}.tar &&
                sudo ctr -n k8s.io images import /vagrant/container-images/frontend-${FRONTEND_VERSION}.tar &&
                echo \"Finished importing images into worker-$i\" &&
                exit
            "
        done
        ;;

    build)
        mkdir -p "$BUILD_DIR"

        build_all "$@"
        ;;
    build-frontend)
        build_frontend "$@"
        ;;
    build-backend)
        build_backend "$@"
        ;;
    build-vehicles)
        build_vehicles "$@"
        ;;
    build-torqvoice)
        build_torqvoice "$@"
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