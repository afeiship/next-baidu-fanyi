(function () {

  const NxBaiduFanyi = require('../src');
  const sleep = require('sleep');

  describe('NxBaiduFanyi.methods', function () {
    test('translate apple to english', function (done) {
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

    test('translate apple to de', function (done) {
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

    test('translate apple to cht', function (done) {
      var option = {
        q: '你好计算机',
        to: 'cht'
      };

      console.log('sleep 1s');
      sleep.sleep(1);

      NxBaiduFanyi.translate(option).then((res) => {
        expect(res).toEqual({
          from: 'zh',
          to: 'cht',
          trans_result: [{ src: '你好计算机', dst: '你好電腦' }]
        });
        done();
      });
    });

    test('translate multil zh->zh', function (done) {
      var option = {
        q: '你好计算机\n你好阿飞',
        from: 'zh',
        to: 'zh'
      };
      sleep.sleep(1);
      NxBaiduFanyi.translate(option).then((res) => {
        console.log(res);
        expect(res).toEqual({
          from: 'zh',
          to: 'zh',
          trans_result: [
            { src: '你好计算机', dst: '你好计算机' },
            { src: '你好阿飞', dst: '你好阿飞' }
          ]
        });
        done();
      });
    });
  });
})();
