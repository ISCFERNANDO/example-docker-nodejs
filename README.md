#Create image
docker build -t imageName .
docker build -t node-api-rest .

#Create and run image in container
docker run -d -p hostPort:containerPort imageName

docker run -d -p 4000:3000 node-api-rest

docker run -it -p 4000:3000 node-api-rest
