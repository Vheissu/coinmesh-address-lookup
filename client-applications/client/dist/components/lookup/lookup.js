System.register(['aurelia-framework'], function (_export, _context) {
  "use strict";

  var customElement, _dec, _class, Lookup;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaFramework) {
      customElement = _aureliaFramework.customElement;
    }],
    execute: function () {
      _export('Lookup', Lookup = (_dec = customElement('lookup'), _dec(_class = function Lookup() {
        _classCallCheck(this, Lookup);
      }) || _class));

      _export('Lookup', Lookup);
    }
  };
});
//# sourceMappingURL=lookup.js.map
