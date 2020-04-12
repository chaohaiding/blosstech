FROM node:12-alpine3.11

RUN npm install -g serve

COPY . /

EXPOSE 5000
ENTRYPOINT [ "serve", "-p", "5000" ]
