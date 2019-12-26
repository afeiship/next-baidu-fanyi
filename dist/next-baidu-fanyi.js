/*!
 * name: @feizheng/next-baidu-fanyi
 * description: Baidu fangyi api wrapper.
 * url: https://github.com/afeiship/next-baidu-fanyi
 * version: 1.0.0
 * date: 2019-12-26 12:09:17
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var fetch = require('node-fetch');
  var nxFanyiApiSign = nx.fangyiApiSign || require('@feizheng/next-fanyi-api-sign');
  var nxParam = nx.param || require('@feizheng/next-param');
  var DEFAULT_OPTIONS = {
    from: 'zh',
    to: 'en'
  };

  var NxBaiduFanyi = nx.declare('nx.BaiduFanyi', {
    statics: {
      translate: function(inOptions) {
        var options = nx.mix(null, DEFAULT_OPTIONS, nxFanyiApiSign(inOptions));
        var url = 'http://api.fanyi.baidu.com/api/trans/vip/translate?' + nxParam(options);
        return fetch(url).then(function(res) {
          return res.json();
        });
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxBaiduFanyi;
  }
})();

//# sourceMappingURL=next-baidu-fanyi.js.map
