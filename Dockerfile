# build environment
FROM node:16.14.2 AS build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY . .

RUN yarn install --frozen-lockfile

RUN yarn build

# production environment
FROM nginx:1.17.0-alpine
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]