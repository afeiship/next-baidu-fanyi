/*!
 * name: @feizheng/next-baidu-fanyi
 * description: Baidu fangyi api wrapper.
 * url: https://github.com/afeiship/next-baidu-fanyi
 * version: 1.2.0
 * date: 2020-01-15 13:16:22
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var fetch = require('node-fetch');
  var nxDelay = require('@feizheng/next-delay');
  var nxFanyiApiSign = nx.fangyiApiSign || require('@feizheng/next-fanyi-api-sign');
  var nxParam = nx.param || require('@feizheng/next-param');
  var DEFAULT_OPTIONS = {
    from: 'zh',
    to: 'en',
    delay: 1000
  };

  var NxBaiduFanyi = nx.declare('nx.BaiduFanyi', {
    statics: {
      translate: function(inOptions) {
        var options = nx.mix(null, DEFAULT_OPTIONS, nxFanyiApiSign(inOptions));
        var url = 'http://api.fanyi.baidu.com/api/trans/vip/translate?' + nxParam(options);
        var _from = options.from;
        var _to = options.to;
        var _query = options.q;
        if (_from === _to) {
          return new Promise(function(resolve) {
            var items = _query.split('\n');
            var res = {
              from: _from,
              to: _to,
              trans_result: nx.map(items, function(index, value) {
                return { src: value, dst: value };
              })
            };
            resolve(res);
          });
        } else {
          return fetch(url)
            .then(nxDelay(options.delay))
            .then(function(res) {
              return res.json();
            });
        }
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxBaiduFanyi;
  }
})();

//# sourceMappingURL=next-baidu-fanyi.js.map
