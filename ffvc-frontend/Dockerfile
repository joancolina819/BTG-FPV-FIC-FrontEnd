# imagen utilziada para levantar el servidor de la interfaz
FROM node:14.17.0-alpine

RUN apk add --no-cache git

# creacion de directorio de trabajo
RUN mkdir -p /usr/src/components/app/node_modules && chown -R node:node /usr/src/components/app
WORKDIR /usr/src/components/app

# Copias dependencias 
COPY package*.json ./

# Especificar usuario
USER node

#Intalacion de dependencias 
RUN npm install

COPY --chown=node:node . .

#Puerto expuesto 
EXPOSE 3001

CMD ["npm","start"]