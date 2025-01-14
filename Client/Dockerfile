FROM node:20 AS deps

ARG BUILD_ENV=development

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

FROM node:20 AS build

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

ENV NODE_OPTIONS=--openssl-legacy-provider

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]