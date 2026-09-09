# Base image
FROM node:24-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Copies Ethyl UI into the project dicrectory, allowing it to be installed as a local dependency
COPY packages/ethyl-ui ./packages/ethyl-ui

# Install dependencies
RUN npm ci

# Build
RUN npm run build

# Copy application code
COPY ./out .

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]