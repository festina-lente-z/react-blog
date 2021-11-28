import { useState } from 'react'
import { Button, Modal, Select } from 'antd'
import { DeleteTwoTone } from '@ant-design/icons'
import styles from './style.module.scss'

const { Option } = Select

const AreaItem = (props) => {
  const { index, item, changeChildrenItem, removeItemFromChildren } = props
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [schema, setSchema] = useState(item)
  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleModalOk = () => {
    setIsModalVisible(false)
    changeChildrenItem(index, schema)
  }

  const handleModalCancel = () => {
    setSchema(item)
    setIsModalVisible(false)
  }
  const handleSelectorChange = (value) => {
    const schema = {name: value, attributes: {}, children: []}
    setSchema(schema)
  }
  return (
    <li className={styles.item}>
      <span className={styles.content} onClick={showModal}>当前区块内容为空</span>
      <span>
        <Button 
          type="text" 
          shape="circle" 
          icon={<DeleteTwoTone twoToneColor="#f5222d"/>}
          onClick={() => removeItemFromChildren(index)}
        />
      </span>
      <Modal title="选择组件" visible={isModalVisible} onOk={handleModalOk} onCancel={handleModalCancel}>
        <Select value={schema.name} style={{ width: '100%' }} onChange={handleSelectorChange}>
          <Option value="Banner">Banner 组件</Option>
          <Option value="List">List 组件</Option>
          <Option value="Footer">Footer 组件</Option>   
        </Select>
      </Modal>
    </li>
  )
}

export default AreaItem