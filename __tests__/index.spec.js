(function() {
  var nx = require('@feizheng/next-js-core2');
  var NxBaiduFanyi = require('../src/next-baidu-fanyi');
  var sleep = require('sleep');


  describe('NxBaiduFanyi.methods', function() {
    test('translate apple to english', function(done) {
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

    // sleep 1s

    test('translate apple to de', function(done) {
      var option = {
        q: '苹果',
        to: 'de'
      };

      console.log('sleep 1s');
      sleep.sleep(1);

      NxBaiduFanyi.translate(option).then((res) => {
        expect(res).toEqual({
          from: 'zh',
          to: 'de',
          trans_result: [{ src: '苹果', dst: 'Apfel' }]
        });
        done();
      });
    });
  });
})();
