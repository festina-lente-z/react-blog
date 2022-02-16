import { Form, Input, Button} from 'antd'
import { CloseOutlined } from '@ant-design/icons'
import styles from './style.module.scss'

export default function Footer (props) {
  const { attributes = {}, children = [], changeAttributes, changeChildren} = props
  const { copyright, record } = attributes
  const addItemTpChildren = () => {
    const newChildren = [ ...children ]
    newChildren.push({
      name: 'Item',
      attributes: { title: '', link: '' },
      children: []
    })
    changeChildren(newChildren)
  }
  const removeItemTpChildren = (index) => {
    const newChildren = [ ...children ]
    newChildren.splice(index,1)
    changeChildren(newChildren)
  }
  const changeChildrenItem = (index, key, value) => {
    const originItem = children[index]
    const item = { ...originItem }
    item.attributes[key] = value
    const newChildren = [ ...children ]
    newChildren.splice(index, 1, item)
    changeChildren(newChildren)
  }
  return (
    <div className={styles.wrapper}>
      <Form>
        <Form.Item
          label="版权信息"
          // name="title"
        >
          <Input 
            value={copyright} 
            onChange={(e) => {changeAttributes({copyright:e.target.value})}}
          />
        </Form.Item>
        <Form.Item
          label="备案信息"
          // name="description"
        >
          <Input 
            value={record} 
            onChange={(e) => {changeAttributes({record:e.target.value})}}
          />
        </Form.Item>
      </Form>
      <Button 
        type="primary" 
        className={styles.button}
        onClick={addItemTpChildren}
      >+ 新增列表项</Button>
      {children.map(({ attributes: {
        title, link
      } }, index) => (
        <div className={styles.area} key={index}>
          <Button 
            type="danger" 
            shape="circle" 
            size="small"
            className={styles.delete}
            icon={<CloseOutlined/>}
            onClick={() => removeItemTpChildren(index)}
          />
          <div className={styles.row}>
            <span className={styles.label}>标题</span>
            <Input
              value={title}
              className={styles.content}
              placeholder="请输入标题"
              onChange={(e) => {changeChildrenItem(index, 'title', e.target.value)}}
            />
          </div>
          <div className={styles.row}>
            <span className={styles.label}>链接</span>
            <Input
              value={link}
              className={styles.content}
              placeholder="请输入链接"
              onChange={(e) => {changeChildrenItem(index, 'link', e.target.value)}}
            />
          </div>
        </div>
      ))}
    </div>
  )
}