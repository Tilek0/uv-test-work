FROM node:16.14.0-alpine3.14
ARG CONFIGURATION
ARG TEAM

WORKDIR /app
ADD package.json package-lock.json /app/
RUN apk add --no-cache git
RUN npm i

ADD . .

RUN sed -i -e "s/TEAM_NAME_REPLACEMENT_TOKEN/$TEAM/g" src/environments/environment.test.ts
RUN npm run build:$CONFIGURATION

FROM nginx:stable
ARG source
COPY --from=0 /app/dist/ /var/www/
COPY ./.docker/nginx.vhost.conf /etc/nginx/conf.d/default.conf
