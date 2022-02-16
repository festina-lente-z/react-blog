{
  name: '',
  attributes: {
    title: '个人博客系统'
  },
  children: [
    {
      name: 'Banner',
      attributes: {
        title: '个人小站',
        description: '个人介绍',
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