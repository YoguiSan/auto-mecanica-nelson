#!/usr/bin/env bash
set -Eeuo pipefail

# Directory containing this script
SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd -P)"

# shellcheck source=../devops/.env
set -a
source "$SCRIPT_DIR/../../.env"
set +a

podman build -f "$SCRIPT_DIR/../../Dockerfile.redis" -t localhost/amn-redis:latest
# podman rm -f amn-redis || true
podman run -d \
  --name redis-test \
  -e REDIS_PASSWORD \
  -p 6379:6379 \
  --replace \
  localhost/amn-redis:latest
podman exec -it redis-test redis-cli -a "$REDIS_PASSWORD" ping