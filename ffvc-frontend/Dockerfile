FROM node:14.17.0-alpine

RUN apk add --no-cache git

RUN mkdir -p /usr/src/components/app/node_modules && chown -R node:node /usr/src/components/app
WORKDIR /usr/src/components/app

COPY package*.json ./

USER node
RUN npm install

COPY --chown=node:node . .

# RUN npm run build:install

EXPOSE 3001

CMD ["npm","start"]