# ninjaz-scanner

> Barcode Scanner for EventNinjaz that utilises Maple + Wordpress based plugins

## Build Setup

``` bash
# install dependencies
npm install

# app manger
npm run manager

# app manager with commands
npm run manager -- --list # list all apps
npm run manager -- --add # add app
npm run manager -- --delete # delete app
npm run manager -- --setDefault # set default app template

# serve with hot reload at localhost:3001
npm run dev

#serve on port
PORT=9000 npm run dev

# build for production with minification
npm run build:dist

# build clean
npm run build:dist -- --clean

# build for production and view the bundle analyzer report
npm run build:dist --report

# add build platform
cordova platform add android

# emulate on android
npm run emulate android

# emulate on device
npm run device android

# build distributable application
# output defaults to none
# if output OS is not specified then the distribution is only copied to the cordova src file
npm run build:app

# build output to www directory but do not build dstribution
npm run build:app -- --no-dist

# build clean
npm run build:app -- --clean
```

## Pre-requisit

> 1. **Vue**
> a. Vue Loader
> b. Vue Router
> c. Vuex
> 2. **Vuetify**
> 3. **Flow**
> 4. **Cordova**


For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
