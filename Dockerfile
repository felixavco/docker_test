FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

ENV NODE_ENV production

EXPOSE 4000

CMD ["npm", "start"]