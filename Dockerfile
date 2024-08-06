FROM node:20

WORKDIR /usr/src/backend_camping_social

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000

CMD ["npm", "run", "dev"]