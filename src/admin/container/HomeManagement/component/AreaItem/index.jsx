import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { SortableElement } from 'react-sortable-hoc'
import { cloneDeep } from 'lodash'
import { getChangePageChildAction, getRemovePageChildAction } from '../../../../store/action'
import Banner from './Component/Banner'
import List from './Component/List'
import Footer from './Component/Footer'
import { Button, Modal, Select } from 'antd'
import { DeleteTwoTone } from '@ant-design/icons'
import styles from './style.module.scss'

const { Option } = Select
// 做一个映射
const map = { Banner, List, Footer }

const useStore = (index) => {
  const dispatch = useDispatch()
  const pageChild = useSelector((state) => state.common.schema.children?.[index] || {})
  const changePageChild = (tempPageChild) => dispatch(getChangePageChildAction(index, tempPageChild))
  const removePageChild = () => dispatch(getRemovePageChildAction(index))
  return { pageChild, changePageChild, removePageChild }
}

const AreaItem = (props) => {
  const { value: index } = props
  const { pageChild, changePageChild, removePageChild } = useStore(index)
  
  const [ isModalVisible, setIsModalVisible ] = useState(false)
  const [ tempPageChild, setTempPageChild ] = useState(cloneDeep(pageChild))

  useEffect(() => {
    setTempPageChild(cloneDeep(pageChild))
  }, [pageChild])
  
  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleModalOk = () => {
    setIsModalVisible(false)
    changePageChild(tempPageChild)
  }

  const handleModalCancel = () => {
    setIsModalVisible(false)
    setTempPageChild(cloneDeep(pageChild))
  }
  const handleSelectorChange = (value) => {
    setTempPageChild({name: value, attributes: {}, children: []})
  }
  const changeTempPageChildAttributes = (kvObj) => {
    // console.log(kvObj)
    const newTempPageChild = { ...tempPageChild }
    for(let key in kvObj) {
      newTempPageChild.attributes[key] = kvObj[key]
    }
    setTempPageChild(newTempPageChild)
  }
  const changeTempPageChildChildren = (children) => {
    const newTempPageChild = { ...tempPageChild }
    newTempPageChild.children = children
    setTempPageChild(newTempPageChild)
  }
  const getComponent = () => {
    const { name } = tempPageChild
    // console.log(tempPageChild)
    const Component = name ? map[name] : null
    return Component ? (
      <Component {...tempPageChild} changeAttributes={changeTempPageChildAttributes} changeChildren={changeTempPageChildChildren}/>
    ) : null
  }

  return (
    <li className={styles.item}>
      <span className={styles.content} onClick={showModal}>
        {pageChild.name ? pageChild.name + '组件' : '当前区块为空'}
      </span>
      <span>
        <Button 
          type="text" 
          shape="circle" 
          icon={<DeleteTwoTone twoToneColor="#f5222d"/>}
          onClick={removePageChild}
        />
      </span>
      <Modal 
        title="选择组件" 
        visible={isModalVisible} 
        onOk={handleModalOk} 
        onCancel={handleModalCancel}
        bodyStyle={{maxHeight: 500, overflowY: 'scroll'}}
      >
        <Select value={tempPageChild.name} style={{ width: '100%' }} onChange={handleSelectorChange}>
          <Option value="Banner">Banner 组件</Option>
          <Option value="List">List 组件</Option>
          <Option value="Footer">Footer 组件</Option>   
        </Select>
        { getComponent() }
      </Modal>
    </li>
  )
}

export default SortableElement(AreaItem)