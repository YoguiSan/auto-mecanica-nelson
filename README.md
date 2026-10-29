# Auto Mecânica Nelson

## Arquitetura
TODO

## Configuração do host
### Instalação do Vagrant
TODO

### Instalação do VirtualBox
TODO

### Instalação do Podman
- Executar:
```sudo apt install podman```
- Configurar o Podman para funcionar como o **container runtime** no Kubernetes:
```sudo apt install podman-docker ```

## Rodando as aplicações com Podman Compose

Os arquivos de Compose menores permitem iniciar um grupo por vez:

```sh
podman-compose --env-file .env -f docker-compose.chatbot.yml up -d
podman-compose --env-file .env -f docker-compose.vehicles.yml up -d
```

Forneça as variáveis exigidas pelas aplicações no ambiente ou no `.env` da raiz
antes de iniciar. `podman-compose` não carrega esse arquivo automaticamente.
Use o Compose da raiz abaixo para executar os grupos simultaneamente; iniciar
os dois grupos menores ao mesmo tempo causa conflitos nas portas publicadas.

Para iniciar todos os serviços juntos, use o Compose da raiz:

```sh
podman-compose --env-file .env up -d
```

Use `podman-compose --env-file .env down` para parar o grupo iniciado pela raiz.
Ao usar `--env-file .env`, esse arquivo deve fornecer os valores usados pelas
aplicações (como `REDIS_PASSWORD`, as credenciais das APIs e
`BETTER_AUTH_SECRET`). O
`packages/torqvoice/.env` não é carregado automaticamente ao incluir o Compose
do Torqvoice; disponibilize esses valores no ambiente ou no `.env` da raiz.
As credenciais do MySQL têm valores padrão para desenvolvimento local e podem
ser sobrescritas com `MYSQL_ROOT_PASSWORD`, `MYSQL_DATABASE`, `MYSQL_USER` e
`MYSQL_PASSWORD`.

## Rodando com Vagrant
- Executar o script:
```scripts/vagrant-up.sh up```
- Caso ocorra um erro de que o **VT-x** esteja sendo usado por outro hypervisor, é preciso desativar o KVM (no Debian/Ubuntu). Para isso:
  - Em processadores Intel:
  ```sudo modprobe -r kvm_intel && sudo modprobe -r kvm```

## Acessando aplicações
### Rodando via Vagrant
| Aplicação               | URL           | Porta | Observações |
|-------------------------|---------------|-------|-------------|
| Frontend                |               |       |             |
| Channel API de veículos |               |       |             |
| System API de veículos  |               | 7147  |             |

## Links úteis
| Nome | Link | Observações |
|------|------|-------------|
| Anotações do curso de Arquitetura de software | https://docs.google.com/document/d/1u44oPp290PYlaC8a8Wf5ZCjN9DmfYhtUfSYLz4RyOB4/edit?tab=t.ss0198y1gxbb#heading=h.zib3vwmbf339
| Anotações do curso de Kubernetes | https://docs.google.com/document/d/1uUqUIdGj7gv0zDicG3cRtPJXKGmEibjA9vVyJbQEO0k/edit?tab=t.f3l463aru340
| Repositório do Kubespray | https://github.com/kubernetes-sigs/kubespray
| Instalação do MetalLB | https://metallb.io/installation/
| Gerador de Dockerfile | https://dockerbuild.com/tools/dockerfile-generator
| Instalação do Torqvoice | https://torqvoice.com/pt-BR/docs/installation