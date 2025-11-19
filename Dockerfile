FROM nginx:alpine

# OLD LINE: COPY index.html /usr/share/nginx/html/index.html
# NEW LINE: Copy EVERYTHING (.) to the nginx folder
COPY . /usr/share/nginx/html/
