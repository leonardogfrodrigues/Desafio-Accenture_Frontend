FROM node:16-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install npm install -g nodemon

COPY . .

EXPOSE 4004

CMD [ "nodemon","./server.js", "--host", "127.0.0.1", "--port", "4004"]