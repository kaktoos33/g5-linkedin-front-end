###  docker in development 

- build
```
docker build -f Dockerfile.dev -t rahama_front .
```
- run
```
docker run -p 3000:3000 --name rahama_front_con -itd rahama_front
```

- some useful commands
```
docker ps
docker container ls
docker container ls -a
docker stop rahama_front_con
docker rm rahama_front_con
docker rmi rahama_front
```

###  docker in development with NGINX
#### with docker-compose
- build & run
```
docker-compose -f docker-compose-front-dev.yml up -d --build
```

#### without docker-compose

- build 
```
docker build -f Dockerfile.prod -t rahama_front_nginx:prod .
```

- run
```
$ docker run -itd --rm -p 1337:80 rahama_front_nginx:prod
```

###  docker in production 
- build app
```
npm ci --production
```
```
npm run build
```
- build image
```
docker build -t docker.abrman.ir/g5_front:latest .
```
- run
```
docker run -itd --rm -p 80:80 docker.abrman.ir/g5_front:latest
```
- clean
```
rm -r package-lock.json node_modules
npm install
```
- login
```
docker login https://docker.abrman.ir/
user: abb
pass :  xTbpwSAg9MtmPtJPEoW3mXuiPVpoa2

```
- see repo
```
https://repo.abrman.ir/#browse/browse:abrman-repository
https://repo.abrman.ir/
```
- PUSH
```
docker push  docker.abrman.ir/g5_front:latest 
```