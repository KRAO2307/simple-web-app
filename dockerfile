FROM nginx:alpine
COPY index.html /usr/share/nginx/html
COPY 26.jpg /usr/share/nginx/html
COPY 3.jpg /usr/share/nginx/html