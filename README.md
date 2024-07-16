## Description

It's a web portal for all my local applications.  
You can use this app as you want if you have the same need as me.  
Just don't forget that this project is only for personnal use and it works  
with my others applications.  
This apps contains many modules that you can disable as your need.

## Installation
```bash
npm install
```

## Environments
```dosini
DATABASE_URI=<mongodb uri>
SUBSCRIBED_MAIL_ADDRESS=<mail address where your auth code will be send>
ADMIN_MAIL_USER=<your mail server address>
ADMIN_MAIL_PASSWORD=<Your mail server password>

# Note this root directory will be your docker volume if you use docker
CDN_ROOT_DIRECTORY=<Your root directory>


# Only for Docker
CDN_VOLUME_FOLDER=<>
```

## Getting Started

Start the development server

```bash
npm run dev
```

## Production

First, build your project with
```bash
npm run build
```

then
```bash
npm start
```

## Docker

Just run the docker-compose command

```bash
docker-compose up local
# Or if you want to run it in detached.
docker-compose up -d local
```