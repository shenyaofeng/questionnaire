import { FC } from 'react'
import { Outlet,useNavigate ,useLocation} from 'react-router-dom'
import styles from './ManageLayout.module.scss'
import { Button,Space,Divider } from 'antd'
import { PlusOutlined,BarsOutlined,StarOutlined ,DeleteOutlined} from '@ant-design/icons'
import { createQuestionAPI } from "../../services/question"
import { useState } from 'react'
const ManageLayout: FC = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  // 控制创建问卷按钮的loading状态不能连续点击
  const [loading, setLoading] = useState<boolean>(false)
  // 创建问卷
  const createQuestion = async () =>{ 
    setLoading(true)
    const res = await createQuestionAPI()
    navigate(`/question/edit/${res.data.id}`)
    setLoading(false)
  }
  return (
    <>
    {/* 我的问卷中间布局 */}
      <div className={styles.container}>
        <div className={styles.left}>
          <Space direction='vertical'><Button type='primary' size='large' icon={<PlusOutlined />} onClick={createQuestion} disabled={loading}>创建问卷</Button>
            <Divider style={{ borderTop: 'transparent' }} />
            <Button type={pathname.startsWith('/manage/list') ? 'default' :'text' } size='large' icon={<BarsOutlined />} onClick={() => { navigate('/manage/list') }}>我的问卷</Button>
            <Button type={pathname.startsWith('/manage/star') ? 'default' : 'text'} size='large' icon={<StarOutlined />} onClick={() => { navigate('/manage/star') }}>星标问卷</Button>
            <Button type={pathname.startsWith('/manage/trash') ? 'default' : 'text'} size='large' icon={<DeleteOutlined />} onClick={() => { navigate('/manage/trash') }}>回收站</Button></Space>
        </div>
        <div className={styles.right}>
          <Outlet />
        </div>
      </div>
      
    </>
  )
}

export default ManageLayout