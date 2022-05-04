
# # Install dependencies only when needed
# FROM docker.abrman.ir/g5/node:14.18.0-alpine AS deps
# # Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
# RUN apk add --no-cache libc6-compat
# WORKDIR /frontend
# COPY package.json yarn.lock ./
# RUN yarn install --frozen-lockfile



# # Rebuild the source code only when needed
# FROM docker.abrman.ir/g5/node:14.18.0-alpine AS builder
# WORKDIR /frontend
# COPY . .
# COPY --from=deps /frontend/node_modules ./node_modules
# RUN yarn build

FROM node:16.14.2 AS build
# RUN npm install --global yarn
# ENV NODE_ENV=production
WORKDIR /app

COPY . .
RUN yarn install --frozen-lockfile

# COPY . .
# RUN rm -rf node_modules
# RUN npm install --production --silent

ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=${REACT_APP_API_URL}

RUN rm -rf build
RUN yarn build 

#### Stage 1: Build the react application
# FROM node:16.4.2-alpine as build

# Configure the main working directory inside the docker image. 
# This is the base directory used in any further RUN, COPY, and ENTRYPOINT 
# commands.
# WORKDIR /app

# Copy the package.json as well as the package-lock.json and install 
# the dependencies. This is a separate step so the dependencies 
# will be cached unless changes to one of those two files 
# are made.
# COPY package.json package-lock.json ./
# RUN yarn install

# Copy the main application
# COPY . ./

# Arguments
# ARG REACT_APP_API_URL
# ENV REACT_APP_API_URL=${REACT_APP_API_URL}

# Build the application
# RUN yarn build

#### Stage 2: Serve the React application from Nginx 
FROM nginx:1.17.0-alpine

# Copy the react build from Stage 1
COPY --from=build /app/build /var/www
# COPY ./build /var/www

# Copy our custom nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80 to the Docker host, so we can access it 
# from the outside.
EXPOSE 80

ENTRYPOINT ["nginx","-g","daemon off;"]