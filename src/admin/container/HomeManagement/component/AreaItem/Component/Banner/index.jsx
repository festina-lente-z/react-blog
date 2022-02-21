import { Form, Input, Switch } from 'antd'
import styles from './style.module.scss'

const { TextArea } = Input

export default function Banner (props) {
  const { attributes = {}, changeAttributes} = props
  const { title, description, showSmallPic, smallPicUrl, backgroundUrl, backgroundHeight } = attributes
  const handleShowSmallPicChange = (checked) => {
    if(!checked) {
      changeAttributes({
        showSmallPic: checked,
        smallPicUrl: ''
      })
    } else {
      changeAttributes({
        showSmallPic: checked
      })
    }
  }
  return (
    <div className={styles.wrapper}>
      <Form>
        <Form.Item
          label="页面标题"
          // name="title"
        >
          <Input 
            value={title} 
            onChange={(e) => {changeAttributes({title:e.target.value})}}
          />
        </Form.Item>
        <Form.Item
          label="页面描述"
          // name="description"
        >
          <TextArea 
            value={description} 
            onChange={(e) => {changeAttributes({description:e.target.value})}}
          />
        </Form.Item>
        <Form.Item
          label="展示小图"
          // name="showSmallPic"
        >
          <Switch
            checked={showSmallPic} 
            onChange={handleShowSmallPicChange}
          />
        </Form.Item>
        {showSmallPic && <Form.Item
          label="小图链接"
          // name="smallPicUrl"
        >
          <Input 
            value={smallPicUrl} 
            onChange={(e) => {changeAttributes({smallPicUrl:e.target.value})}}
          />
        </Form.Item>}
        <Form.Item
          label="背景链接"
          // name="backgroundUrl"
        >
          <Input 
            value={backgroundUrl} 
            onChange={(e) => {changeAttributes({backgroundUrl: e.target.value})}}
          />
        </Form.Item>
        <Form.Item
          label="背景高度"
          // name="backgroundHeight"
        >
          <Input
            value={backgroundHeight} 
            onChange={(e) => {changeAttributes({backgroundHeight: e.target.value})}}
          />
        </Form.Item>
      </Form>
    </div>
  )
}