@echo off
cd packages/chatbot-channel-backend
start source ./.venv/bin/activate & fastapi dev src/__init__.py