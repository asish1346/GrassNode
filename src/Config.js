yclass Config {
  constructor() {
    this.ipCheckURL = 'https://ipinfo.io/json';
    this.wssHost = 'proxy2.wynd.network:4444';
    this.retryInterval = 20000;
  }
}

module.exports = Config;
