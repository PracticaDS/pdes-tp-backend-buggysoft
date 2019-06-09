const app = require('../../src/app');
const mongoose = require('mongoose');

describe('\'users\' service', () => {
  it('registered the service', () => {
    const service = app.service('users');
    expect(service).toBeTruthy();
  });
  afterAll(async () => {
    await mongoose.disconnect();
    await mongoose.connection.close();
  });
});
