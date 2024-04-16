# Use an official Node.js runtime as the base image
FROM node:latest AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the SvelteKit application
RUN npm run build

FROM nginx:alpine

# Copy the static site from the builder stage into the nginx web root directory
COPY --from=builder /app/dist /usr/share/nginx/html
