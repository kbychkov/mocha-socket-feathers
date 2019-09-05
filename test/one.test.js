const io = require('socket.io-client');
const AppServer = require('./fixtures/appserver_feathers');
const app = require('../src/app');

describe('socket one', () => {
  let appServer;

  before(async () => {
    appServer = await AppServer.create(app);
  });

  after(async () => {
    await appServer.stop();
  });

  it('should pass', done => {
    const client = io(appServer.getUrl());

    client.on('connect', () => {
      client.close();
      done();
    });
  });
});
