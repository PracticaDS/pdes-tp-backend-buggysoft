module.exports = function requestCounter(app) {
  const Prometheus = app.get('Prometheus');
  const requestCounter = new Prometheus.Counter({
    name: 'total_request_count',
    help: 'Cantidad de requests total'
  });
  // Request counter
  app.use((req, res, next) => {
    requestCounter.inc();
    next();
  });
};
