FROM php:8.2-fpm

WORKDIR /var/www
ARG NODE_VERSION=20
ARG VITE_APP_PORT=5174

ENV TZ Asia/Tokyo
ENV VITE_APP_PORT=$VITE_APP_PORT

RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip

RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

COPY --from=composer:2.8.1 /usr/bin/composer /usr/bin/composer

RUN curl -sL https://deb.nodesource.com/setup_$NODE_VERSION.x | bash - \
    && apt-get install -y nodejs

COPY ./php.ini /usr/local/etc/php/php.ini

EXPOSE 9000 ${VITE_APP_PORT}
