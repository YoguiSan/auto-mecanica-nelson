#!/usr/bin/env bash

set -Eeuo pipefail

# Directory containing this script
SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd -P)"

# Adjust this path if necessary
VAGRANT_DIR="$SCRIPT_DIR/../devops"

set -a
source "$VAGRANT_DIR/.env"
set +a

# Kubernetes configuration
export KUBECONFIG="$VAGRANT_DIR/kube-config"

if [[ $MASTER_COUNT -gt 99 ]]; then
    echo "Error: The number of master nodes is greater than 99."
    exit 1
fi

usage() {
    cat <<EOF
Usage:
  $(basename "$0") [action] [options]

Actions:
  init                  Initial setup
  lb,loadbalancer       Installs MetalLB
  virtualbox-configs    Sets Virtualbox configurations
  nodes-network         Setups the networks for master and worker nodes
  nodes-ips             Sets the proper IP ranges for master and worker nodes
  help                  Show this help

Examples:
  $(basename "$0")
  $(basename "$0") loadbalancer
EOF
}

if [[ $# -eq 0 ]]; then
    action="help"
else
    action="$1"
    shift
fi

case "$action" in
    init)
        "$SCRIPT_DIR/containers.sh" build
        echo "Container images rebuilt."
        echo

        "$SCRIPT_DIR/vagrant.sh" up
        echo "VM's running again."
        echo

        "$SCRIPT_DIR/setup.sh" nodes-network
        echo "Nodes networks set up"
        echo

        "$SCRIPT_DIR/setup.sh" nodes-ips
        echo "Nodes IP ranges adjusted and kubelet restarted"
        echo

        "$SCRIPT_DIR/containers.sh" import
        echo "Container images imported into the VM's."
        echo
    ;;
    lb|loadbalancer)
        echo "Using configurations from: $KUBECONFIG"

        # Setup MetalLB (load balancer)
        cd "$VAGRANT_DIR" || exit
        KUBECONFIG="$VAGRANT_DIR/kube-config" kubectl apply -f https://raw.githubusercontent.com/metallb/metallb/v0.16.1/config/manifests/metallb-frr-k8s.yaml
        KUBECONFIG="$VAGRANT_DIR/kube-config" kubectl wait --namespace metallb-system --for=condition=ready pod --selector=app=metallb --timeout=90s

        # From MetalLB's documentation: This will deploy MetalLB to your cluster, under the metallb-system namespace. The components in the manifest are:

        # - The metallb-system/controller deployment. This is the cluster-wide controller that handles IP address assignments.
        # - The metallb-system/speaker daemonset. This is the component that speaks the protocol(s) of your choice to make the services reachable.
        # - Service accounts for the controller and speaker, along with the RBAC permissions that the components need to function.
        # The installation manifest does not include a configuration file. MetalLB’s components will still start, but will remain idle until you start deploying resources.
        ;;
    # Disable VM's recording feature to save disk space
    virtualbox-configs)
        VBoxManage list vms |
        sed -n 's/^"\([^"]*\)".*$/\1/p' |
        while IFS= read -r vm; do
            VBoxManage modifyvm "$vm" --recording off
        done
    ;;    
    kubeconfig)
        echo "Exporting KUBECONFIG for current shell session:"
        echo "KUBECONFIG=\"$VAGRANT_DIR/kube-config\""
        ;;
    nodes-network)
        # This is in order to fix the issue with flannel not being able to find the correct network interface on some systems. Each VM ends up with two network interfaces, one for NAT and one for the internal network. Flannel needs to use the internal network interface, which is usually named "enp0s8" on Linux systems.
        KUBECONFIG="$VAGRANT_DIR/kube-config" kubectl -n kube-flannel patch daemonset kube-flannel-ds --type='json' \
        -p='[{"op": "add", "path": "/spec/template/spec/containers/0/args/-", "value": "--iface=enp0s8"}]'

        KUBECONFIG="$VAGRANT_DIR/kube-config" kubectl -n kube-flannel rollout restart daemonset kube-flannel-ds
        ;;
    nodes-ips)
        echo "Adjusting the IP addresses on master nodes..."
        echo

        for ((i = 1; i <= MASTER_COUNT; ++ i))
        do
            master_ip_address="192.168.56.$((100 + i))"
            cd "$SCRIPT_DIR/../devops" || exit
            vagrant ssh "master-$i" -c "
                echo \"Setting master-$i IP address to $master_ip_address\" &&
                echo 'KUBELET_EXTRA_ARGS=\"--node-ip=192.168.56.$master_ip_address\"' | sudo tee -a /etc/default/kubelet &&
                sudo systemctl restart kubelet &&
                exit
            "
        done
        echo "Done"
        echo
        echo

        echo "Adjusting the IP addresses on worker nodes..."
        echo

        for ((j = 1; j <= WORKER_COUNT; ++ j))
        do
            worker_ip_address="192.168.56.$((200 + j))"
            cd "$SCRIPT_DIR/../devops" || exit
            vagrant ssh "worker-$j" -c "
                echo \"Setting master-$j IP address to $worker_ip_address\" &&
                echo 'KUBELET_EXTRA_ARGS=\"--node-ip=192.168.56.$worker_ip_address\"' | sudo tee -a /etc/default/kubelet &&
                sudo systemctl restart kubelet &&
                exit
            "
        done
        echo "Done"
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
