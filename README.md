# pdes-tp-backend-buggysoft

> Back-end for pdes-tp

## Run locally with docker
1. You need to setup a local network
```
docker network create buggynet
```

2. Run mongo attached to that network
```
docker run -d --network buggynet --name mongo mongo
```

3. And attach the docker image to that network as well. Then our connection string will look like this `MONGO_URL=mongodb://mongo.buggynet:27017/pdes_tp_backend_buggysoft`
```
docker run -a STDOUT -p 3001:3001 --network buggynet -e MONGO_URL=mongodb://mongo.buggynet:27017/pdes_tp_backend_buggysoft pdes-tp-backend-buggysoft
```

## About

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.

## Getting Started

Getting up and running is as easy as 1, 2, 3.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

    ```
    cd path/to/pdes-tp-backend-buggysoft; npm install
    ```

3. Start your app

    ```
    npm start
    ```

## Testing

Simply run `npm test` and all your tests in the `test/` directory will be run.

## Scaffolding

Feathers has a powerful command line interface. Here are a few things it can do:

```
$ npm install -g @feathersjs/cli          # Install Feathers CLI

$ feathers generate service               # Generate a new Service
$ feathers generate hook                  # Generate a new Hook
$ feathers help                           # Show all commands
```

## Help

For more information on all the things you can do with Feathers visit [docs.feathersjs.com](http://docs.feathersjs.com).

## Changelog

__0.1.0__

- Initial release

## License

Copyright (c) 2018

Licensed under the [MIT license](LICENSE).
