#!/bin/bash
# Absolute path to this script, e.g. /home/user/bin/foo.sh
SCRIPT=$(readlink -f "$0")
# Absolute path this script is in, thus /home/user/bin
SCRIPTPATH=$(dirname "$SCRIPT")
BUILD_DIR="$SCRIPTPATH/../devops/.vagrant/container-images"

# shellcheck source=../devops/.env
source "$SCRIPTPATH/../devops/.env"

# Checks if target folder for the images exists, if it doesn't then creates it
(cd "$BUILD_DIR" || mkdir -p "$BUILD_DIR")

# Chatbot channel backend
cd "$SCRIPTPATH/../packages/chatbot-channel-backend" || exit
podman build . -t "amn-chatbot-channel:$CHATBOT_CHANNEL_VERSION"
podman save "amn-chatbot-channel:$CHATBOT_CHANNEL_VERSION" -o "$BUILD_DIR/chatbot-channel-$CHATBOT_CHANNEL_VERSION.tar"
echo "Chatbot channel API version $CHATBOT_CHANNEL_VERSION built and saved to $BUILD_DIR/chatbot-channel-$CHATBOT_CHANNEL_VERSION.tar"
cd ../../

# Chatbot system backend
cd "$SCRIPTPATH/../packages/chatbot-system-backend" || exit
podman build . -t "amn-chatbot-system:$CHATBOT_SYSTEM_VERSION"
podman save "amn-chatbot-system:$CHATBOT_SYSTEM_VERSION" -o "chatbot-system-$CHATBOT_SYSTEM_VERSION.tar"
echo "Chatbot system API version $CHATBOT_SYSTEM_VERSION built and saved to $BUILD_DIR/chatbot-system-$CHATBOT_SYSTEM_VERSION.tar"
cd ../../

# Frontend
podman build . -t "amn-frontend:$FRONTEND_VERSION" || exit
podman "save amn-frontend:$FRONTEND_VERSION" -o "frontend-$FRONTEND_VERSION.tar"
echo "Frontend version $FRONTEND_VERSION built and saved to $BUILD_DIR/frontend-$FRONTEND_VERSION.tar"