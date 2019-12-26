(function() {
  var nx = require('@feizheng/next-js-core2');
  var NxBaiduFanyi = require('../src/next-baidu-fanyi');

  describe('NxBaiduFanyi.methods', function() {
    test('init', function(done) {
      var option = {
        q: '苹果'
      };

      NxBaiduFanyi.translate(option).then((res) => {
        expect(res).toEqual({
          from: 'zh',
          to: 'en',
          trans_result: [{ src: '苹果', dst: 'Apple' }]
        });
        done();
      });
    });
  });
})();
