import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { Button } from 'antd'
import AreaList from './component/AreaList'
// import PageSetting from './component/PageSetting'
import { parseJsonByString } from '../../../common/utils'
import styles from './style.module.scss'
import { getChangeSchemaAction } from '../../store/action'

const useStore = () => {
  const dispatch = useDispatch()
  const schema = useSelector((state) => state.common.schema)
  const changeSchema = (schema) => dispatch(getChangeSchemaAction(schema))
  
  return { schema, changeSchema }
}

const HomeManagement = () => {
  // 把action通过dispatch方法传给reducer
  const { schema, changeSchema } = useStore()
  const handleSaveBtnClick = () => {
    axios.post('/api/schema/save', {
      schema: JSON.stringify(schema)
    }).then(() => {})
  }
  const handleResetBtnClick = () => {
    axios.get('/api/schema/getLatestOne').then((response) => {
      const data = response?.data?.data;
      if(data) {
        changeSchema(parseJsonByString(data.schema,{}));
      }
    })
  }
  return (
    <div>
      {/* <PageSetting /> */}
      <AreaList/>
      <Button type="primary" className={styles.save} onClick={handleSaveBtnClick}>保存区块配置</Button>
      <Button className={styles.reset} onClick={handleResetBtnClick}>重置区块配置</Button> 
    </div>
  )
}
export default HomeManagement