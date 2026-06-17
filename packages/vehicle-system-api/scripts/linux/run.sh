sudo docker build -t vehicle-data-api packages/vehicle-system-api --progress=plain
sudo docker run -p 8080:8080 \
  -e ConnectionStrings__DefaultConnection="server=host.docker.internal;..." \
  vehicle-data-api