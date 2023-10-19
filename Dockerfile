FROM node:18-alpine AS builder
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm ci
COPY ./ ./
RUN npm run build
RUN --network=host

CMD ["npm", "run", "server"]