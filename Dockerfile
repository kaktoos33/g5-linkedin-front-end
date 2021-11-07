
# Install dependencies only when needed
FROM docker.abrman.ir/g5/node:14.18.0-alpine AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /frontend
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile



# Rebuild the source code only when needed
FROM docker.abrman.ir/g5/node:14.18.0-alpine AS builder
WORKDIR /frontend
COPY . .
COPY --from=deps /frontend/node_modules ./node_modules
RUN yarn build
