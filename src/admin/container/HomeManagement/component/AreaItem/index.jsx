import { Button } from 'antd'
import { DeleteTwoTone } from '@ant-design/icons'
import styles from './style.module.scss'

const AreaItem = (props) => {
  const { index, removeItemFromChildren } = props
  return (
    <li className={styles.item}>
      <span className={styles.content}>当前区块内容为空</span>
      <span>
        <Button 
          type="text" 
          shape="circle" 
          icon={<DeleteTwoTone twoToneColor="#f5222d"/>}
          onClick={() => removeItemFromChildren(index)}
        />
      </span>
    </li>
  )
}

export default AreaItem