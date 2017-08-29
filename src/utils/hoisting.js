/**
 * Created by Vincent on 2017/8/21.
 */

module.exports = function hoisting(target, host, keys) {
  keys.forEach((key)=>{
      let displayKey, realKey;
      if(Array.isArray(key)){
        displayKey = key[0];
        realKey = key[1] || displayKey;
      }else{
        realKey = displayKey = key;
      }
      Object.defineProperty(target, displayKey, {
        enumerable: false,
        configurable: true,
        get: function() {
          return host[realKey];
        },
        set: function(value) {
          host[realKey] = value;
        }
      })
    }
  );
};
