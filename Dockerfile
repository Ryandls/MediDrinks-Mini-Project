FROM node:10-alpine

WORKDIR /app

COPY package*.json ./

RUN yarn install

EXPOSE 8081

CMD ["yarn", "run", "serve"]