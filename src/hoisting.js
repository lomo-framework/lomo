/**
 * Created by Vincent on 2017/8/21.
 */

module.exports = function hoisting(target, host, keys) {
  keys.forEach((key)=>Object.defineProperty(target, key, {
    enumerable: false,
    configurable: true,
    get: function() {
      return host[key];
    },
    set: function(value) {
      host[key] = value;
    }
  }));
};
