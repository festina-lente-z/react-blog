import { useSelector, useDispatch } from 'react-redux'
import { SortableContainer } from 'react-sortable-hoc'
import { Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import AreaItem from '../AreaItem'
import { getAddPageChildrenAction, getChangePageChildPositionAction } from '../../../../store/action'
import styles from './style.module.scss'

const SortableList = SortableContainer(({list}) => {
  return (
    <ul className={styles.list}>
      {list.map((item,index) => (
          <AreaItem key={index} index={index} value={index}/>
      ))}
    </ul>
  )
})

const AreaList = () => {
  const dispatch = useDispatch()
  const children = useSelector((state) => state.common.schema?.children || [])

  const addPageToChildren = () => {
    dispatch(getAddPageChildrenAction())
  }

  const onSortEnd = ({oldIndex, newIndex}) => {
    dispatch(getChangePageChildPositionAction(oldIndex, newIndex))
  }
  
  return (
    <div>
      <SortableList list={children} onSortEnd={onSortEnd} distance={5} lockAxis="y"/>
      <Button type="dashed" className={styles.btn} icon={<PlusOutlined />} onClick={addPageToChildren}>新增页面区块</Button>
      
    </div>
  )
}

export default AreaList