const requestCounter = require('./requestCounter');
const requestDuration = require('./requestDuration');

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  // Add your custom middleware here. Remember that
  // in Express, the order matters.
  const Prometheus = app.get('Prometheus');
  const { collectDefaultMetrics } = Prometheus;
  // Probe every 5th second.
  collectDefaultMetrics({ timeout: 5000 });
  requestDuration(app);
  requestCounter(app);
};
