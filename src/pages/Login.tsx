import { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Login.module.scss'
import { UserAddOutlined } from '@ant-design/icons'
import { Space, Form, Input, Button, Checkbox, message } from 'antd'
import { Typography } from 'antd'
import { Link } from 'react-router-dom'
import { REGISTER } from '../router/index'
import { userLoginAPI } from '../services/user'
import { useRequest } from 'ahooks'
import { setToken } from '../utils/user-token'
const { Title } = Typography
interface LoginValues {
  userName: string;
  password: string;
  remember: boolean;
}
function setUserInfo(userName: string, password: string) {
  localStorage.setItem('userName', userName)
  localStorage.setItem('password', password)
}

function getUserInfo() {
  return {
    userName: localStorage.getItem('userName'),
    password: localStorage.getItem('password')
  }
}

function deleteUserInfo() {
  localStorage.removeItem('userName')
  localStorage.removeItem('password')
}


const Login: FC = () => {
  //
  const navigate = useNavigate()
  // form表单的useForm
  const [form] = Form.useForm()
  // 获取userInfo
  useEffect(()=>{
    const {userName, password} = getUserInfo()
    form.setFieldsValue({
      userName,
      password
    })
  },[])
  // 提交表单
  const onfinish = (values: LoginValues) => {
    console.log(values)
    run(values)
    if(values.remember) {
      setUserInfo(values.userName, values.password)
    } else {
      deleteUserInfo()
    }
  }

  const { run } = useRequest(async values => {
    const {userName,password } = values
    const data = await userLoginAPI(userName, password)
    return data
  },{
    manual:true,
    onSuccess: (result) => {
      //存储token
      const { token = '' } = result.data
      setToken(token)
      message.success('登陆成功')
      navigate('/manage/list')
    }
  })
  return (
    <>
      <div className={styles.continer}>
        <div>
          <Space>
            <Title level={2}><UserAddOutlined></UserAddOutlined></Title>
            <Title level={2}>登陆</Title>
          </Space>
        </div>
        <div>
          <Form
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 14 }}
            onFinish={onfinish}
            initialValues={{remember: true}}
            form={form}
          >
            <Form.Item label="用户名" name="userName" rules={[
              { required: true, message: '请输入用户名' },
              { type: 'string', min: 4, max: 10, message: '用户名长度为4-10位' },
              { pattern: /^[a-zA-Z0-9_]*$/, message: '用户名只能是字母、数字、下划线' }]}>
              <Input></Input>
            </Form.Item>
            <Form.Item label="密码" name="password" rules={[{ required: true, message: '请输入密码' }]} >
              <Input.Password ></Input.Password>
            </Form.Item>  
            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 6, span: 16 }}>
              <Checkbox>记住我</Checkbox>
            </Form.Item>           
            <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
              <Button type='primary' htmlType='submit'>登陆</Button>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
              <Link to={REGISTER}>没有账户？请注册</Link>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  )
}

export default Login