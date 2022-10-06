FROM node:alpine as build
WORKDIR /app
COPY package*.json /app/
RUN npm i
COPY . .
RUN npm run build

FROM nginx
EXPOSE 3000
COPY /nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
