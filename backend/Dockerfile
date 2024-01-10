FROM node

WORKDIR /app

COPY package.json .

COPY .env .

RUN npm install

COPY . .

EXPOSE 80

CMD ["npm", "run", "dev"]