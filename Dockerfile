FROM node:20

RUN mkdir /app
WORKDIR /app

COPY ./ /app/

RUN npm install -g pnpm

RUN pnpm install