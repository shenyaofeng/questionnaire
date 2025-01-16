import React, { FC } from 'react'
import {Space,Typography} from 'antd'
import { FormOutlined } from '@ant-design/icons'
import './Logo.scss'
import {Link} from 'react-router-dom'
const { Title } = Typography;
const Logo:FC = () => {
  return (
    <div className = 'continer'>
      <Link to={'/'}>
        <Space >
          <Title>
            <FormOutlined />
          </Title>
          <Title>问卷</Title>
        </Space>
      </Link>
    </div>
  )
}

export default Logo