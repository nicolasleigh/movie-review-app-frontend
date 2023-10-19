FROM node:18-alpine AS builder
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm ci
COPY ./ ./
ENV VITE_BASE_URL="/api"
RUN npm run build
RUN npm run server
VOLUME /app/node_modules
VOLUME ./frontend:/app


FROM nginx:1.25
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d
# EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# CMD ["npm", "run", "start"]