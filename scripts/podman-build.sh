#!/bin/bash
# Absolute path to this script, e.g. /home/user/bin/foo.sh
SCRIPT=$(readlink -f "$0")
# Absolute path this script is in, thus /home/user/bin
SCRIPTPATH=$(dirname "$SCRIPT")

(cd "$SCRIPTPATH/../packages/chatbot-channel-backend" && podman build . -t amn-chatbot-channel:0.1.0)
(cd "$SCRIPTPATH/../packages/chatbot-system-backend" && podman build . -t amn-chatbot-system:0.1.0)
(podman build . -t amn-frontend:0.1.0)