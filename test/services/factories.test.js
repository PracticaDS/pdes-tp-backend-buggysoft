const app = require('../../src/app');
const mongoose = require('mongoose');

describe('\'factories\' service', () => {
  it('registered the service', () => {
    const service = app.service('factories');
    expect(service).toBeTruthy();
  });
  afterAll(async () => {
    await mongoose.disconnect();
    await mongoose.connection.close();
  });
});
