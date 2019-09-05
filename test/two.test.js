const io = require('socket.io-client');
const app = require('../src/app');

describe('socket two', () => {
  let appServer;

  before(done => {
    appServer = app.listen(3030);
    appServer.on('listening', done);
  });

  after(done => {
    appServer.close(done);
  });

  it('should pass', done => {
    const client = io('http://localhost:3030');

    client.on('connect', () => {
      client.close();
      done();
    });
  });
});
