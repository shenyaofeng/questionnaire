import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import styles from './MainLayout.module.scss'
import Logo from '../../components/Logo'
import UserInfo from '../../components/UserInfo'
const { Header,Content,Footer} = Layout
const MainLayout: FC = () => {
  
  return (
    <Layout>
      <Header className={styles.header}>
        <div className={styles.left}>
          <Logo/>
        </div>
        <div className={styles.right}>
          <UserInfo/>
        </div>
      </Header>
      <Content className={styles.main}>
        <Outlet/>
      </Content>
      <Footer className={styles.footer}>
        &copy; syf
      </Footer>
    </Layout>
  )
}

export default MainLayout