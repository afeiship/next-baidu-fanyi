(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var fetch = require('node-fetch');
  var nxDelay = require('@jswork/next-delay');
  var nxFanyiApiSign = nx.fangyiApiSign || require('@jswork/next-fanyi-api-sign');
  var nxParam = nx.param || require('@jswork/next-param');
  var DEFAULT_OPTIONS = {
    from: 'zh',
    to: 'en',
    delay: 1000
  };

  var NxBaiduFanyi = nx.declare('nx.BaiduFanyi', {
    statics: {
      translate: function (inOptions) {
        var options = nx.mix(null, DEFAULT_OPTIONS, nxFanyiApiSign(inOptions));
        var url = 'http://api.fanyi.baidu.com/api/trans/vip/translate?' + nxParam(options);
        var _from = options.from;
        var _to = options.to;
        var _query = options.q;
        if (_from === _to) {
          return new Promise(function (resolve) {
            var items = _query.split('\n');
            var res = {
              from: _from,
              to: _to,
              trans_result: nx.map(items, function (_, value) {
                return { src: value, dst: value };
              })
            };
            resolve(res);
          });
        } else {
          return fetch(url)
            .then(nxDelay(options.delay))
            .then(function (res) {
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
