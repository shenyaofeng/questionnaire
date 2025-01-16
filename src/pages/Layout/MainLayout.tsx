import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import './MainLayout.scss'
import Logo from '../../components/Logo'
import UserInfo from '../../components/UserInfo'
const { Header,Content,Footer} = Layout
const MainLayout: FC = () => {
  
  return (
    <Layout>
      <Header className='header'>
        <div className='left'>
          <Logo/>
        </div>
        <div className='right'>
          <UserInfo/>
        </div>
      </Header>
      <Content className='main'>
        <Outlet/>
      </Content>
      <Footer className='footer'>
        &copy; syf
      </Footer>
    </Layout>
  )
}

export default MainLayout