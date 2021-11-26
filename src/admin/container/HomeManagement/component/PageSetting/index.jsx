// import { useState } from 'react'
import { Form, Input} from 'antd'
// import styles from './style.module.scss'

const { TextArea } = Input

const PageSetting = () => {
  return (
    <div>
      <Form layout="vertical">
        <Form.Item
          label="请输入页面标题"
          name="title"
        >
          <Input/>
        </Form.Item>
        <Form.Item
          label="请输入页面描述"
          name="description"
        >
          <TextArea/>
        </Form.Item>
      </Form>
    </div>
  )
}

export default PageSetting