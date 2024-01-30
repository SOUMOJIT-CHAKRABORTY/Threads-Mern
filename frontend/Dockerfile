FROM node:21-alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm cache clean --force \
    && rm -rf node_modules \
    && npm install

COPY . .

RUN npm install rollup

CMD ["npm", "run", "dev"]