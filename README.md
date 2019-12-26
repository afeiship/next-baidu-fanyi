# next-baidu-fanyi
> Baidu fangyi api wrapper.

## installation
```bash
npm install -S @feizheng/next-baidu-fanyi
```

## apis
| api       | params | description     |
| --------- | ------ | --------------- |
| translate | -      | Get translation |

## usage
```js
import NxBaiduFanyi from '@feizheng/next-baidu-fanyi';

// code goes here:
NxBaiduFanyi.translate(option).then((res) => {
  /*
  // res:
  {
    from: 'zh',
    to: 'en',
    trans_result: [{ src: '苹果', dst: 'Apple' }]
  }
  */
});
```
