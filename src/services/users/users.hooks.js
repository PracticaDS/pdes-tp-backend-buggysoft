

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [
      function(context) {
        const service = context.app.service('/users');

        return new Promise(function(resolve, reject) {
          function processResponse(response) {
            if (response) {
              context.result = response;
              context.error = {};
              context.statusCode = 200;
            }
            resolve(context);
          }

          if(!context.result) {
            service.create({ _id: context.id, username: context.id }, context.params)
              .then(response => processResponse(response))
              .catch(e => {
                reject(e);
              });
          }
        });
      }
    ],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
