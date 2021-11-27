import { useState, forwardRef, useImperativeHandle } from 'react'
import { Button } from 'antd'
import styles from './style.module.scss'
import { DeleteTwoTone, PlusOutlined } from '@ant-design/icons'
import { parseJsonByString } from '../../../../../common/utils'

const schema = parseJsonByString(window.localStorage.schema,{})
const listData = schema?.children?.splice(3)

const AreaList = (props, ref) => {
  const [ list, setList ] = useState(listData)
  const handleAddBtnClick = () => {
    const newList = [...list]
    newList.push({})
    setList(newList)
  }
  const handleDeleteBtnClick = (index) => {
    const newList = [...list]
    newList.splice(index, 1)
    setList(newList)
  }
  useImperativeHandle(ref, () => {
    return { list }
  })
  return (
    <div>
      <ul className={styles.list}>
        {
          list.map((item,index) => (
            <li key={index} className={styles.item}>
              <span className={styles.content}>当前区块内容为空</span>
              <span>
                <Button 
                  type="text" 
                  shape="circle" 
                  icon={<DeleteTwoTone twoToneColor="#f5222d"/>}
                  onClick={() => handleDeleteBtnClick(index)}
                />
              </span>
            </li>
          ))
        }
      </ul>
      <Button type="dashed" className={styles.btn} icon={<PlusOutlined />} onClick={handleAddBtnClick}>新增页面区块</Button>
      
    </div>
  )
}

export default forwardRef(AreaList)