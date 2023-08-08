FROM node:18-alpine

RUN mkdir -p /home/node/betting-events-service/node_modules && chown -R node:node /home/node/betting-events-service

WORKDIR /home/node/betting-events-service

COPY package*.json ./

RUN npm install pm2 -g
RUN npm install

COPY . .
COPY --chown=node:node . .

RUN npm run build

USER node

CMD [ "pm2-runtime", "build/app.js" ]