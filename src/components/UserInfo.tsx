import { FC } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { UserOutlined } from '@ant-design/icons'
import { getUserInfoAPI } from '../services/user'
import { useRequest } from 'ahooks'
import { Button, message, Popconfirm } from 'antd'
import { LOGIN } from '../router/index'
import { removeToken } from '../utils/user-token'
const UserInfo: FC = () => {
  const navigate = useNavigate()
  const { data } = useRequest(getUserInfoAPI)
  const { userName, nickName } = data?.data || {}
  const exit = () => {
    removeToken()
    message.success('退出成功')
    navigate(LOGIN)
  }
  const UserInfo = (
    <>
      <span style={{ color: '#e8e8e8' }}>
        <UserOutlined></UserOutlined>
        {nickName}
      </span>
      <Popconfirm
        title="是否退出登陆"
        onConfirm={exit}
        okText="是"
        cancelText="否">
        <Button type='link'>退出</Button>
      </Popconfirm>
      
    </>
  )
  const Login = (
    <>
      <Link to={LOGIN}>登陆</Link>
    </>
  )
  return (
    <div >
      {userName ? UserInfo : Login}
    </div>
  )
}

export default UserInfo