FROM node:10
WORKDIR /usr/src/app

COPY ./client ./client
COPY ./server ./server

# Build Client
WORKDIR /usr/src/app/client
RUN npm install
RUN npm run build

# Build Server
WORKDIR /usr/src/app/server
RUN npm install
RUN npm run build

# Copy Client to Server
RUN mv ../client/dist ./dist/public

# Finalize
ENV NODE_ENV=production
EXPOSE 3000
CMD ["node", "dist/server.js"]
