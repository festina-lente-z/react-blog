import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Provider, useSelector, useDispatch } from 'react-redux'
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom'
import axios from 'axios'
import { parseJsonByString } from '../common/utils'
import store from './store'
import { getChangeSchemaAction, getChangePageAttributeAction } from './store/action'

import { Layout, Menu } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HomeOutlined,
  SettingOutlined,
  RollbackOutlined,
} from '@ant-design/icons'
import 'antd/dist/antd.css'
import 'normalize.css'
import HomeManagement from './container/HomeManagement'
import BasicSetting from './container/BasicSetting'
import styles from './style.module.scss'

const { Header, Sider, Content } = Layout

const useCollapsed = () => {
  const [ collapsed, setCollapsed ] = useState(false)
  const toggleCollapsed = () => { setCollapsed(!collapsed) }
  return { collapsed, toggleCollapsed }
}

const useStore = () => {
  const dispatch = useDispatch()
  const schema = useSelector((state) => state.common.schema)
  const changeSchema = (schema) => {
    dispatch(getChangeSchemaAction(schema));
  }
  const changePageAttribute = (key, value) => {
    dispatch(getChangePageAttributeAction(key, value))
  }
  return { schema, changeSchema, changePageAttribute }
}

const Wrapper = () => {
  const { collapsed, toggleCollapsed } = useCollapsed()
  const handleHomePageRedirect = () => {window.location.href = "/"}
  const { changeSchema } = useStore()
  
  useEffect(() => {
    axios.get('/api/schema/getLatestOne').then((response) => {
      const data = response?.data?.data
      data && changeSchema(parseJsonByString(data.schema, {}))
    })
  }, [changeSchema])

  return (
    <Router>
      <Layout style={{minHeight:"100vh"}}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['admin-home']}>
            <Menu.Item key="admin-home" icon={<HomeOutlined />}>
              <Link to="/">首页内容管理</Link>
            </Menu.Item>
            <Menu.Item key="admin-setting" icon={<SettingOutlined />}>
              <Link to="/setting">基础内容配置</Link>
            </Menu.Item>
            <Menu.Item 
              key="admin-back" 
              icon={<RollbackOutlined />}
              onClick={handleHomePageRedirect}
            >
              返回用户页面
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {
              collapsed
                ? <MenuUnfoldOutlined className={styles.trigger} onClick={toggleCollapsed}/>
                : <MenuFoldOutlined className={styles.trigger} onClick={toggleCollapsed}/>
            }
          </Header>
          <Content className={styles.content}>
            <Routes>
              <Route path="/" element={<HomeManagement/>}/>
              <Route path="setting" element={<BasicSetting />}/>
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <Wrapper/>
  </Provider>,
  document.getElementById('root')
)