FROM node:16.13.2

WORKDIR /project/frontend

COPY package.json package-lock.json ./

RUN npm install --silent

RUN npm install react-scripts@3.4.1 -g --silent

COPY . ./

EXPOSE 3000
