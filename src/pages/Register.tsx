import React, { FC } from 'react'
import styles from "./Register.module.scss"
import { UserAddOutlined } from '@ant-design/icons'
import { Space, Form, Input, Button } from 'antd'
import { Typography } from 'antd'
import { Link } from 'react-router-dom'
import { LOGIN } from '../router/index'
const { Title } = Typography
const Register: FC = () => {
  const onfinish = (values: any) => {
    console.log(values)
  }
  return (
    <>
      <div className={styles.continer}>
        <div>
          <Space>
            <Title level={2}><UserAddOutlined></UserAddOutlined></Title>
            <Title level={2}>注册</Title>
          </Space>
        </div>
        <div>
          <Form
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 14 }}
            onFinish={onfinish}
          >
            <Form.Item label="用户名" name="userName"
              rules={[
                { required: true, message: '请输入用户名' },
                { type: 'string', min: 4, max: 10, message: '用户名长度为4-10位' },
                { pattern: /^[a-zA-Z0-9_]*$/, message: '用户名只能是字母、数字、下划线' }]}>
              <Input></Input>
            </Form.Item>
            <Form.Item label="密码" name="password" rules={[{ required: true, message: '请输入密码' }]}>
              <Input.Password></Input.Password>
            </Form.Item>
            <Form.Item label="确认密码" name="confirmPassword" rules={[{ required: true, message: '请输入密码' }, ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('两次输入的密码不一致!'));
              },
            }),]} >
              <Input.Password></Input.Password>
            </Form.Item>
            <Form.Item label="昵称" name="nickName">
              <Input></Input>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
              <Button type='primary' htmlType='submit'>注册</Button>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
              <Link to={LOGIN}>已有账户？请登陆</Link>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  )
}

export default Register