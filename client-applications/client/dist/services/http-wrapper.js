System.register(['aurelia-http-client', '../../config.json!'], function (_export, _context) {
  "use strict";

  var HttpClient, Config, HttpWrapper;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }, function (_configJson) {
      Config = _configJson.default;
    }],
    execute: function () {
      _export('HttpWrapper', HttpWrapper = function () {
        function HttpWrapper() {
          _classCallCheck(this, HttpWrapper);

          var username = Config.username,
              password = Config.password;

          var token = btoa(username + ':' + password);

          this.http = new HttpClient().configure(function (x) {
            x.withBaseUrl('http://localhost:3000/v0/');
            x.withHeader('Authorization', 'Basic ' + token);
          });
        }

        HttpWrapper.prototype.get = function get(path) {
          return this.http.get(path).then(function (result) {
            return typeof result.content === 'string' ? JSON.parse(result.content) : result.content;
          });
        };

        HttpWrapper.prototype.post = function post(path, body) {
          return this.http.post(path, body);
        };

        HttpWrapper.prototype.patch = function patch(path, body) {
          return this.http.patch(path, body);
        };

        HttpWrapper.prototype.delete = function _delete(path) {
          return this.http.delete(path);
        };

        return HttpWrapper;
      }());

      _export('HttpWrapper', HttpWrapper);
    }
  };
});
//# sourceMappingURL=http-wrapper.js.map
