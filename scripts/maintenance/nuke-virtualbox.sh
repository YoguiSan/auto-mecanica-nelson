#!/usr/bin/env bash
set -Eeuo pipefail

# Destructive cleanup for disposable VirtualBox/Vagrant lab VMs.
# By default, only VMs whose names begin with VM_PREFIX are selected.

VM_PREFIX="${VM_PREFIX:-devops_}"
VBOXMANAGE="${VBOXMANAGE:-VBoxManage}"

if ! command -v "$VBOXMANAGE" >/dev/null 2>&1; then
    echo "Error: VBoxManage was not found." >&2
    exit 1
fi

usage() {
    cat <<EOF
Usage:
  $0                  Show checks and selected VMs; do not delete anything
  $0 --destroy        Power off and delete matching VMs
  $0 --destroy --clean-boxes
                      Also delete cached Vagrant boxes
  $0 --help           Show this help

Environment:
  VM_PREFIX=devops_   VM-name prefix to match
EOF
}

DESTROY=0
CLEAN_BOXES=0

for arg in "$@"; do
    case "$arg" in
        --destroy)      DESTROY=1 ;;
        --clean-boxes)  CLEAN_BOXES=1 ;;
        --help|-h)      usage; exit 0 ;;
        *)
            echo "Unknown argument: $arg" >&2
            usage >&2
            exit 2
            ;;
    esac
done

echo "=== Filesystem usage ==="

if [[ -d "$HOME/VirtualBox VMs" ]]; then
    df -hT "$HOME/VirtualBox VMs" || true
    echo
    df -i "$HOME/VirtualBox VMs" || true
    echo
    du -sh "$HOME/VirtualBox VMs" 2>/dev/null || true
fi

if [[ -d "$HOME/.vagrant.d" ]]; then
    echo
    echo "Vagrant home:"
    du -sh "$HOME/.vagrant.d" 2>/dev/null || true
fi

echo
echo "=== Registered VirtualBox machines matching prefix: $VM_PREFIX ==="

mapfile -t MACHINES < <(
    "$VBOXMANAGE" list vms |
        sed -n 's/^"\([^"]*\)".*$/\1/p' |
        grep "^${VM_PREFIX}" || true
)

if ((${#MACHINES[@]} == 0)); then
    echo "No registered machines match '$VM_PREFIX'."
    exit 0
fi

for vm in "${MACHINES[@]}"; do
    state=$("$VBOXMANAGE" showvminfo "$vm" --machinereadable |
        sed -n 's/^VMState="\([^"]*\)".*/\1/p' | head -n1)

    echo "$state  $vm"
done

if ((DESTROY == 0)); then
    echo
    echo "Dry run only. Nothing was deleted."
    echo "Run with --destroy to power off and remove these VMs."
    exit 0
fi

echo
echo "=== Destructive operation ==="
echo "The following VirtualBox machines will be powered off and deleted:"
printf '  %s\n' "${MACHINES[@]}"
echo

read -r -p "Type DELETE to continue: " confirmation
if [[ "$confirmation" != "DELETE" ]]; then
    echo "Cancelled."
    exit 1
fi

echo
echo "=== Powering off machines ==="

for vm in "${MACHINES[@]}"; do
    state=$("$VBOXMANAGE" showvminfo "$vm" --machinereadable |
        sed -n 's/^VMState="\([^"]*\)".*/\1/p' | head -n1)

    echo "$vm: $state"

    case "$state" in
        paused)
            echo "  Resuming paused VM..."
            "$VBOXMANAGE" controlvm "$vm" resume || true
            sleep 1
            echo "  Powering it off..."
            "$VBOXMANAGE" controlvm "$vm" poweroff || true
            ;;

        running)
            echo "  Powering it off..."
            "$VBOXMANAGE" controlvm "$vm" poweroff || true
            ;;

        poweroff|saved|aborted)
            echo "  Already stopped."
            ;;

        *)
            echo "  Unrecognized state: $state"
            echo "  Attempting poweroff..."
            "$VBOXMANAGE" controlvm "$vm" poweroff || true
            ;;
    esac
done

echo
echo "Waiting for VirtualBox to release disk locks..."
sleep 5

echo
echo "=== Deleting machines ==="

for vm in "${MACHINES[@]}"; do
    if "$VBOXMANAGE" list vms | grep -Fq "\"$vm\""; then
        echo "Deleting $vm..."
        "$VBOXMANAGE" unregistervm "$vm" --delete
    else
        echo "$vm is already unregistered."
    fi
done

if ((CLEAN_BOXES == 1)); then
    echo
    echo "=== Removing cached Vagrant boxes ==="
    if [[ -d "$HOME/.vagrant.d/boxes" ]]; then
        rm -rf -- "$HOME/.vagrant.d/boxes"
        echo "Removed $HOME/.vagrant.d/boxes"
    else
        echo "No Vagrant boxes directory found."
    fi
fi

echo
echo "=== Final status ==="
"$VBOXMANAGE" list vms || true
echo
du -sh "$HOME/VirtualBox VMs" 2>/dev/null || true
df -h "$HOME/VirtualBox VMs" 2>/dev/null || true

echo
echo "Cleanup complete."
