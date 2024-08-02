import nx from '@jswork/next';

import '@jswork/next-delay';
import '@jswork/next-fanyi-api-sign';
import '@jswork/next-param';

const defaults = {
  from: 'zh',
  to: 'en',
  delay: 1200
};

const preprocess = (options) => {
  options.q = Array.isArray(options.q) ? options.q.join('\n') : options.q;
  return options;
};

const NxBaiduFanyi = nx.declare('nx.BaiduFanyi', {
  statics: {
    translate: function(inOptions) {
      const options = nx.mix(null, defaults, nx.fanyiApiSign(preprocess(inOptions)));
      const url = nx.param(options, 'http://api.fanyi.baidu.com/api/trans/vip/translate');
      const _from = options.from;
      const _to = options.to;
      const _query = options.q;
      if (_from === _to) {
        return new Promise(function(resolve) {
          const items = _query.split('\n');
          const res = {
            from: _from,
            to: _to,
            trans_result: items.map((item) => ({ src: item, dst: item }))
          };
          resolve(res);
        });
      } else {
        return fetch(url)
          .then(nx.delay(options.delay))
          .then((r) => r.json());
      }
    }
  }
});

if (typeof module !== 'undefined' && module.exports) {
  module.exports = NxBaiduFanyi;
}

export default NxBaiduFanyi;
