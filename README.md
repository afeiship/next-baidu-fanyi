# next-baidu-fanyi
> Baidu fangyi api wrapper.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-baidu-fanyi
```

## apis
| api       | params | description     |
| --------- | ------ | --------------- |
| translate | -      | Get translation |


## options
| name   | default | description         |
| ------ | ------- | ------------------- |
| delay  | 1000    | Call fn duration.   |
| from   | zh      | from which language |
| to     | en      | to which language   |
| appid  | -       | -                   |
| secret | -       | -                   |
| q      | -       | keywords            |

## usage
```js
import NxBaiduFanyi from '@jswork/next-baidu-fanyi';

// code goes here:
NxBaiduFanyi.translate({ q: '苹果', from:'zh', to:'en' }).then((res) => {
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

## resources
- https://api.fanyi.baidu.com/doc/21

## license
Code released under [the MIT license](https://github.com/afeiship/next-baidu-fanyi/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-baidu-fanyi
[version-url]: https://npmjs.org/package/@jswork/next-baidu-fanyi

[license-image]: https://img.shields.io/npm/l/@jswork/next-baidu-fanyi
[license-url]: https://github.com/afeiship/next-baidu-fanyi/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-baidu-fanyi
[size-url]: https://github.com/afeiship/next-baidu-fanyi/blob/master/dist/next-baidu-fanyi.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-baidu-fanyi
[download-url]: https://www.npmjs.com/package/@jswork/next-baidu-fanyi
