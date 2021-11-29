import { useState, useEffect, forwardRef, useImperativeHandle, createRef, useMemo } from 'react'
import { Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import AreaItem from '../AreaItem'
import styles from './style.module.scss'

let refs = []

const AreaList = (props, ref) => {
  const [ list, setList ] = useState(props.children)

  useEffect(() => {
    setList(props.children)
  }, [props.children])
  
  useMemo(() => {
    refs = list.map(item => createRef())
  }, [list])

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
    return {
      getSchema: () => {
        const schema = []
        list.forEach((item, index) => {
          schema.push(refs[index].current.getSchema())
        })
        return schema
      }
    }  
  })
  return (
    <div>
      <ul className={styles.list}>
        {
          list.map((item,index) => (
            <AreaItem 
              key={index} 
              index={index}
              item={item} 
              removeItemFromChildren={removeItemFromChildren}
              ref={refs[index]}
            />
          ))
        }
      </ul>
      <Button type="dashed" className={styles.btn} icon={<PlusOutlined />} onClick={addItemToChildren}>新增页面区块</Button>
      
    </div>
  )
}

export default forwardRef(AreaList)