#contenedor que se necesita para que corra la app
FROM node:14

#crear directorio de trabajo
WORKDIR /app

#copiamos los archivos package al directorio de trabajo
COPY package*.json ./

#instalamos dependencias
RUN npm install

#copiamos el resto de los archivos, a excepcion de los que estan en .dockerignore
COPY . .

CMD [ "npm", "start" ]