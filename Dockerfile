FROM node:18.18.2-alpine3.18 as builder
RUN corepack enable && corepack prepare pnpm@8.10.2 --activate

# FROM node:18
WORKDIR /var/www/html
ADD . .
RUN pnpm install
RUN pnpm build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /var/www/html/dist /usr/share/nginx/html
