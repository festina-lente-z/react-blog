import { useState, useEffect, forwardRef, useImperativeHandle } from 'react'
import { Button, Modal, Select } from 'antd'
import { DeleteTwoTone } from '@ant-design/icons'
import styles from './style.module.scss'

const { Option } = Select

const AreaItem = (props, ref) => {
  const { index, item, removeItemFromChildren } = props
  const [ isModalVisible, setIsModalVisible ] = useState(false)
  const [ tempSchema, setTempSchema ] = useState(item)
  const [ schema, setSchema ] = useState(item)

  useEffect(() => {
    setSchema(item)
    setTempSchema(item)
  }, [item])

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
    setSchema(tempSchema)
  }

  const handleModalCancel = () => {
    setIsModalVisible(false)
    setTempSchema(schema)
  }
  const handleSelectorChange = (value) => {
    const newSchema = {name: value, attributes: {}, children: []}
    setTempSchema(newSchema)
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
        <Select value={tempSchema.name} style={{ width: '100%' }} onChange={handleSelectorChange}>
          <Option value="Banner">Banner 组件</Option>
          <Option value="List">List 组件</Option>
          <Option value="Footer">Footer 组件</Option>   
        </Select>
      </Modal>
    </li>
  )
}

export default forwardRef(AreaItem)