import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { Button, Input } from 'antd'
import { parseJsonByString } from '../../../common/utils'
import styles from './style.module.scss'
import { getChangeSchemaAction, getChangePageAttributeAction } from '../../store/action'

const useStore = () => {
  const dispatch = useDispatch()
  const schema = useSelector((state) => state.common.schema)
  const changeSchema = (schema) => dispatch(getChangeSchemaAction(schema))
  const changePageAttribute = (key, value) => {
    dispatch(getChangePageAttributeAction(key, value))
  }
  return { schema, changeSchema, changePageAttribute }
}

export default function BasicSetting() {
  // 把action通过dispatch方法传给reducer
  const { schema = {}, changePageAttribute, changeSchema } = useStore()
  const { attributes = {} } = schema
  const { title = '' } = attributes
  const handleSaveBtnClick = () => {
    axios.post('/api/schema/save', {
      schema: JSON.stringify(schema)
    }).then(() => {})
  }
  const handleResetBtnClick = () => {
    axios.get('/api/schema/getLatestOne').then((response) => {
      const data = response.data.data;
      if(data) {
        changeSchema(parseJsonByString(data.schema,{}));
      }
    })
  }
  const handleTitleChange = useCallback((e) => {
    changePageAttribute('title', e.target.value)
  }, [changePageAttribute])
  return (
    <div>
      <div className={styles.row}>
        <div className={styles.title}>页面标题：</div>
        <div className={styles.content}>
          <Input value={title} onChange={handleTitleChange} />
        </div>
      </div>
      <div>
        <Button type="primary" className={styles.save} onClick={handleSaveBtnClick}>保存基本配置</Button>
        <Button className={styles.reset} onClick={handleResetBtnClick}>重置基本配置</Button> 
      </div>
    </div>
    
  )
}
