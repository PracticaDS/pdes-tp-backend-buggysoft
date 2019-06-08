const app = require('../../src/app');

describe('\'factories\' service', () => {
  it('registered the service', () => {
    const service = app.service('factories');
    expect(service).toBeTruthy();
  });
});
