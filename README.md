# Auto Mecânica Nelson

## Arquitetura

## Rodando com Vagrant
- Entrar na pasta onde está o Vagrantfile:
```cd devops```
- Executar:
```vagrant up```
- Para pausar as VM's:
```vagrant halt```
- Caso ocorra um erro de que o VT-x esteja sendo usado por outro hypervisor, é preciso desativar o KVM (no Debian/Ubuntu). Para isso (em processadores Intel):
```sudo modprobe -r kvm_intel && sudo modprobe -r kvm```

## Links úteis
| Nome | Link | Observações |
|------|------|-------------|
| Anotações do curso de Arquitetura de software | https://docs.google.com/document/d/1u44oPp290PYlaC8a8Wf5ZCjN9DmfYhtUfSYLz4RyOB4/edit?tab=t.ss0198y1gxbb#heading=h.zib3vwmbf339
| Anotações do curso de Kubernetes | https://docs.google.com/document/d/1uUqUIdGj7gv0zDicG3cRtPJXKGmEibjA9vVyJbQEO0k/edit?tab=t.f3l463aru340
| Repositório do Kubespray | https://github.com/kubernetes-sigs/kubespray