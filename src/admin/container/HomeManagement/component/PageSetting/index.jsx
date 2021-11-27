import { useState, forwardRef, useImperativeHandle } from 'react'
import { Form, Input} from 'antd'
// import styles from './style.module.scss'

const { TextArea } = Input

const PageSetting = (props, ref) => {
  const [title, setTitle] = useState(window.localStorage.title || '')
  const [description, setDescription] = useState(window.localStorage.description || '')
  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value)
  }
  useImperativeHandle(ref, () => {
    return { title, description }
  })

  return (
    <div>
      <Form layout="vertical">
        <Form.Item
          label="请输入页面标题"
          name="title"
          initialValue={title}
        >
          <Input value={title} onChange={handleTitleChange}/>
        </Form.Item>
        <Form.Item
          label="请输入页面描述"
          name="description"
          initialValue={description}
        >
          <TextArea value={description} onChange={handleDescriptionChange}/>
        </Form.Item>
      </Form>
    </div>
  )
}

export default forwardRef(PageSetting)