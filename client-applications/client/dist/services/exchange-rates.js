System.register(['./http-wrapper'], function (_export, _context) {
  "use strict";

  var HttpWrapper, _class, _temp, ExchangeRateService;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_httpWrapper) {
      HttpWrapper = _httpWrapper.HttpWrapper;
    }],
    execute: function () {
      _export('ExchangeRateService', ExchangeRateService = (_temp = _class = function () {
        function ExchangeRateService(http) {
          _classCallCheck(this, ExchangeRateService);

          this.http = http;
        }

        ExchangeRateService.prototype.getInfo = function getInfo() {
          return this.http.get('/exchange-rates/ltc/current-rate').then(function (result) {
            return new NetworkInfo(result);
          });
        };

        return ExchangeRateService;
      }(), _class.inject = [HttpWrapper], _temp));

      _export('ExchangeRateService', ExchangeRateService);
    }
  };
});
//# sourceMappingURL=exchange-rates.js.map
