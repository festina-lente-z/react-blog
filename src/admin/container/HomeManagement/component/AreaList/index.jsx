import { useState } from 'react'
import { Button } from 'antd'
import styles from './style.module.scss'
import { DeleteTwoTone } from '@ant-design/icons'
import { parseJsonByString } from '../../../../../common/utils'

const listData = parseJsonByString(window.localStorage.homeData,[])

const AreaList = () => {
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
  const handleSaveBtnClick = () => {
    const listDate = JSON.stringify(list)
    window.localStorage.homeData = listDate
  }
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
      <Button type="primary" ghost onClick={handleAddBtnClick}>新增页面区块</Button>
      <Button type="primary" className={styles.save} onClick={handleSaveBtnClick}>保存区块配置</Button>
    </div>
  )
}

export default AreaList