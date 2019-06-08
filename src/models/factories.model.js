module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const factories = new Schema({
    user: { type: String, required: true },
    machineGrid: [[{
      position: { type: Array, required: true },
      machine: { type: Mixed, required: true }
    }]],
    resourceGrid: [[{
      position: { type: Array, required: true },
      resources: { type: Mixed, required: true }
    }]]
  }, {
    timestamps: true,
    strict: false
  });

  return mongooseClient.model('factories', factories);
};
