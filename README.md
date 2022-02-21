## 技术栈
- 前端：React、React Hook、Redux
- 后端：Midway FaaS、云数据库RDS MySQL
## 功能展示
### 后台配置
- 自定义模块
  ![alt](https://festinalente.oss-cn-beijing.aliyuncs.com/img/1.gif?Expires=1645438421&OSSAccessKeyId=TMP.3KhyJHWTyi5GgDptpfYHPYrbBAB4fgZESLKoJfzFg2aGSGVNCBpG8N3cuv2D8d7W5QPwZYN9G7XBR7ZbYRAFviCynZFJy4&Signature=zeJYvL9jNUokOaE3EBByjD9mN3o%3D)
- 模块增删及拖拽
### 前台展示
## schema结构
```json
{
  name: '',
  attributes: {
    title: ''
  },
  children: [
    {
      name: 'Banner',
      attributes: {
        title: '',
        description: '',
        showSmallPic: true,
        smallPicUrl: '',
        backgroundUrl: '',
        backgroundHeight: ''
      },
      children: []
    }, {
      name: 'List',
      attributes: {},
      children: [{
        name: 'Item',
        attributes: {
          title: '',
          description: '',
          imageUrl: '',
          link: ''
        },
        children: [] 
      }]
    },{
      name: 'Footer',
      attributes: {
        copyright: '',
        record: ''
      },
      children: [{
        name: 'Item',
        attributes:{
          title: '',
          link: ''
        },
        children: []
      }]
    },
  ]
}
```
