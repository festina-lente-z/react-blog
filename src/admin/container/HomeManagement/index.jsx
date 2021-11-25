import { useState } from 'react'
import { Layout, Menu } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HomeOutlined,
  RollbackOutlined,
} from '@ant-design/icons'
import styles from './style.module.scss'

const { Header, Sider, Content } = Layout

const useCollapsed = () => {
  const [ collapsed, setCollapsed ] = useState(false)
  const toggleCollapsed = () => { setCollapsed(!collapsed) }
  return { collapsed, toggleCollapsed }
}

const HomeManagement = () => {
  const { collapsed, toggleCollapsed } = useCollapsed()
  const handleHomePageRedirect = () => {window.location.href = "/"}

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['admin-home']}>
          <Menu.Item key="admin-home" icon={<HomeOutlined />}>
            首页内容管理
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
      <Layout className="site-layout" style={{height: '100vh'}}>
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {
            collapsed
              ? <MenuUnfoldOutlined className={styles.trigger} onClick={toggleCollapsed}/>
              : <MenuFoldOutlined className={styles.trigger} onClick={toggleCollapsed}/>
          }
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  )
}
export default HomeManagement