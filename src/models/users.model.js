module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const users = new Schema({
    username: { type: String, required: true }
  }, {
    timestamps: true
  });

  return mongooseClient.model('users', users);
};
