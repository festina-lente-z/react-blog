import { useState, forwardRef, useImperativeHandle } from 'react'
import { Button, Modal, Select } from 'antd'
import { DeleteTwoTone } from '@ant-design/icons'
import styles from './style.module.scss'

const { Option } = Select

let prevSchema = {}

const AreaItem = (props, ref) => {
  const { index, item, removeItemFromChildren } = props
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [schema, setSchema] = useState(item)

  useImperativeHandle(ref, () => {
    return {
      getSchema: () => {
        return schema
      }
    }
  })
  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleModalOk = () => {
    setIsModalVisible(false)
    prevSchema = {}
  }

  const handleModalCancel = () => {
    setSchema(prevSchema)
    setIsModalVisible(false)
    prevSchema = {}
  }
  const handleSelectorChange = (value) => {
    prevSchema = {...schema}
    const newSchema = {name: value, attributes: {}, children: []}
    setSchema(newSchema)
  }
  return (
    <li className={styles.item}>
      <span className={styles.content} onClick={showModal}>
        {schema.name ? schema.name + '组件' : '当前区块为空'}
      </span>
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

export default forwardRef(AreaItem)