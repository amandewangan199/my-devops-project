# Use Nginx (a lightweight web server)
FROM nginx:alpine

# Copy our html file to the Nginx folder inside the container
COPY index.html /usr/share/nginx/html/index.html
