const url = require('url');

class AppServer {
  constructor(app) {
    this.host = 'localhost';
    this.port = 3030;

    this.server = app.listen(this.port);
    this.server.on('connection', () => console.log('server connection'));
  }

  static create(app) {
    const appServer = new AppServer(app);

    return new Promise(resolve => {
      appServer.server.once('listening', () => {
        console.log('server listening');
        resolve(appServer);
      });
    });
  }

  stop() {
    return new Promise(resolve => {
      this.server.close(() => {
        console.log('server closed');
        resolve();
      });
    });
  }

  getUrl(pathname) {
    return url.format({
      hostname: this.host,
      protocol: 'http',
      port: this.port,
      pathname
    });
  }
}

module.exports = AppServer;
