# build-a-bot

## Overview
This project is based on a Vue.js PluralSight tutorial by Jim Cooper. It's purpose is to demo as much of the main Vue framework offerings as possible.

## Prerequsites
* Docker Desktop

### Compile and hot-reload for development
```
docker-compose up -d
```
By default, the frontend will be available at localhost:8080

### Compile and minify for production
Build image from Dockerfile in project root.

### Lint and fix files
If you have node installed locally:
```
npm run lint
```
If you're pure Docker:
```
docker exec -i build-a-bot_web_1 npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
