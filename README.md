## Create image

```bash
docker build -t imageName .
docker build -t node-api-rest .
```

## Create and run image in container

```bash
docker run -d -p hostPort:containerPort imageName
docker run -d -p 4000:3000 node-api-rest
docker run -it -p 4000:3000 node-api-rest
```

## For run app without docker

```bash
npm run dev
```

## For build app without docker

```bash
npm run build
```

## For generate or update models with sequelize auto

```bash
sequelize-auto -o rutaDestino -d databaseName -h hostName -u userName -p portDb -x passwordUser -e mysql
```

where

- `rutaDestino` es la ruta donde se desea guardar los modelos
- `databaseName` es el nombre de la base de datos
- `hostName` es el host donde se encuentra la base de datos
- `userName` es el nombre del usuario que tenga acceso a la base de datos
- `portDb` es el puerto del gestor de base de datos
- `passwordUser` es la contraseña del usuario con acceso a la base de datos

for example

```bash
sequelize-auto -o src/models/ -d store_online -h localhost -u admin_store -p 3306 -x 123456 -e mysql
```
