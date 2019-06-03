const app = require('../../src/app');

describe('\'fabricas\' service', () => {
  it('registered the service', () => {
    const service = app.service('fabricas');
    expect(service).toBeTruthy();
  });
});
