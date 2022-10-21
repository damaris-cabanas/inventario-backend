FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./
COPY tsconfig.json ./

RUN npm install

COPY . . 
RUN ls -a

RUN npm run build
COPY .env ./dist/

EXPOSE 8080 

CMD [ "npm", "start" ]