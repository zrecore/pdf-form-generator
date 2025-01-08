FROM node:20

RUN mkdir /app
WORKDIR /app

COPY ./ /app/
RUN rm -fR /app/node_modules
RUN npm install -g pnpm

RUN pnpm install