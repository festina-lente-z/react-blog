import { useState, forwardRef, useImperativeHandle } from 'react'
import { Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import AreaItem from '../AreaItem'
import styles from './style.module.scss'

const AreaList = (props, ref) => {
  const [ list, setList ] = useState(props.children)
  const addItemToChildren = () => {
    const newList = [...list]
    newList.push({})
    setList(newList)
  }
  const removeItemFromChildren = (index) => {
    const newList = [...list]
    newList.splice(index, 1)
    setList(newList)
  }
  useImperativeHandle(ref, () => {
    return { children: list }
  })
  return (
    <div>
      <ul className={styles.list}>
        {
          list.map((item,index) => (
            <AreaItem key={index} index={index} removeItemFromChildren={removeItemFromChildren}/>
          ))
        }
      </ul>
      <Button type="dashed" className={styles.btn} icon={<PlusOutlined />} onClick={addItemToChildren}>新增页面区块</Button>
      
    </div>
  )
}

export default forwardRef(AreaList)