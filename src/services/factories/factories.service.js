// Initializes the `factories` service on path `/factories`
const createService = require('feathers-mongoose');
const createModel = require('../../models/factories.model');
const hooks = require('./factories.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/factories', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('factories');

  service.hooks(hooks);
};
