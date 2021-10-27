# stage 2 - Nginx
FROM nginx:1.17.8-alpine

COPY /build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf


EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]