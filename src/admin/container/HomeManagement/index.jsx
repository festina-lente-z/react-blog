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
    const schema = {
      name: 'Page',
      attributes: {},
      children: [{
        name: 'Banner',
        attributes: {
          title: pageSettingRef.current.title,
          description: pageSettingRef.current.description
        }
      }, {
        name: 'CourseList'
      }, {
        name: 'Footer'
      }]
    }
    areaListRef.current.list.forEach(item => {
      schema.children.push({
        name: 'Area'
      })
    })
    const schemaStr = JSON.stringify(schema)
    window.localStorage.schema = schemaStr
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