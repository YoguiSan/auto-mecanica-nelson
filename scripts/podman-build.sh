(cd packages/chatbot-channel-backend && podman build . -t amn-chatbot-channel)
(cd packages/chatbot-system-backend && podman build . -t amn-chatbot-system)
(podman build . -t amn-frontend)