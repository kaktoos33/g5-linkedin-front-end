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

