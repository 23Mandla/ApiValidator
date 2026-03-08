import "@testing-library/jest-dom";

// Polyfill Request and Response for Node.js environment
if (typeof global.Request === 'undefined') {
  global.Request = class Request {
    constructor(url, init = {}) {
      this.url = url;
      this.method = init.method || 'GET';
      this.headers = new Map(Object.entries(init.headers || {}));
      this.body = init.body;
    }

    async json() {
      if (this.body) {
        return JSON.parse(this.body);
      }
      return {};
    }

    text() {
      return Promise.resolve(this.body || '');
    }
  };
}

if (typeof global.Response === 'undefined') {
  global.Response = class Response {
    constructor(body, init = {}) {
      this.body = body;
      this.status = init.status || 200;
      this.statusText = init.statusText || 'OK';
      this.headers = new Map(Object.entries(init.headers || {}));
      this._bodyText = typeof body === 'string' ? body : JSON.stringify(body);
    }

    async json() {
      try {
        return JSON.parse(this._bodyText);
      } catch {
        return {};
      }
    }

    text() {
      return Promise.resolve(this._bodyText);
    }
  };
}