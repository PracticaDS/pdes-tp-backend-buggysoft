module.exports = function requestDuration(app) {
  const Prometheus = app.get('Prometheus');
  const httpRequestDurationMicroseconds = new Prometheus.Histogram({
    name: 'http_request_duration_ms',
    help: 'Duration of HTTP requests in ms',
    labelNames: ['method', 'route', 'code'],
    buckets: [0.1, 5, 15, 50, 100, 200, 300, 400, 500]
    // buckets for response time from 0.1ms to 500ms
  });
  app.use((req, res, next) => {
    // Set timestamp at start
    res.locals.startEpoch = Date.now();
    res.on('finish', () => {
      const responseTimeInMs = Date.now() - res.locals.startEpoch;
      httpRequestDurationMicroseconds
        .labels(req.method, req.path ? req.path : 'no path', res.statusCode)
        .observe(responseTimeInMs);
    });

    next();
  });
};
