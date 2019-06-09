const factories = require('./factories/factories.service.js');
const users = require('./users/users.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(factories);
  app.configure(users);
};
