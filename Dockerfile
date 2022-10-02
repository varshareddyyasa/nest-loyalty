# Base image
FROM node:14.16.1

# Create app directory
WORKDIR /usr/src/app

# copy package jsondo
COPY package*.json ./

# Install dependencies
RUN npm install

# Bundle app source
COPY . .

# Creates a "dist" folder
RUN npm run build

# Run the app
CMD [ "node", "dist/main.js" ]