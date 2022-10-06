FROM node
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
COPY /dist .
EXPOSE 8080
CMD ["node", "./dist/server.js" ]
