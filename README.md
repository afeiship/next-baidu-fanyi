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


## options
| name   | default | description         |
| ------ | ------- | ------------------- |
| from   | zh      | from which language |
| to     | en      | to which language   |
| appid  | -       | -                   |
| secret | -       | -                   |
| q      | -       | keywords            |

## usage
```js
import NxBaiduFanyi from '@feizheng/next-baidu-fanyi';

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
