# Use a lightweight base image
FROM nginx:alpine

# Copy the content of the local src directory to the default Nginx public folder
COPY ./src /usr/share/nginx/html

# Expose the port on which Nginx will be running
EXPOSE 80

