import { useState, useRef } from 'react'
import { Layout, Menu, Button } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HomeOutlined,
  RollbackOutlined,
} from '@ant-design/icons'
import AreaList from './component/AreaList'
import PageSetting from './component/PageSetting'
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
  const pageSettingRef = useRef()
  const areaListRef = useRef()
  const handleSaveBtnClick = () => {
    const listData = JSON.stringify(areaListRef.current.list)
    window.localStorage.homeData = listData
    window.localStorage.title = pageSettingRef.current.title
    window.localStorage.description = pageSettingRef.current.description
  }

  return (
    <Layout style={{minHeight:"100vh"}}>
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
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {
            collapsed
              ? <MenuUnfoldOutlined className={styles.trigger} onClick={toggleCollapsed}/>
              : <MenuFoldOutlined className={styles.trigger} onClick={toggleCollapsed}/>
          }
        </Header>
        <Content className={styles.content}>
          <PageSetting ref={pageSettingRef}/>
          <AreaList ref={areaListRef}/>
          <Button type="primary" className={styles.save} onClick={handleSaveBtnClick}>保存区块配置</Button> 
        </Content>
      </Layout>
    </Layout>
  )
}
export default HomeManagement