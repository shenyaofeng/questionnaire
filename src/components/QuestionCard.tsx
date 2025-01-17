import { FC } from 'react'
import styles from "./QuestionCard.module.scss"
import { Button, Space, Divider, Tag, Popconfirm, message } from 'antd'
import { EditOutlined, LineChartOutlined, StarOutlined, CopyOutlined, DeleteOutlined } from '@ant-design/icons'
import { useNavigate, Link } from 'react-router-dom'
type PropsType = {
  _id: string,
  title: string,
  isPublished: boolean,
  isStar: boolean,
  answerCount: number,
  createAt: string
}

const QuestionList: FC<PropsType> = (props: PropsType) => {
  const { _id, title, isPublished, answerCount, createAt, isStar } = props
  const navigate = useNavigate()
  const copy = () => {
    message.success('复制成功');
  }
  const del = () => {
    message.success('删除成功');
  }
  return (
    <>
      {/* <div key={_id} className="list-item">
        <strong>{title}</strong>
        &nbsp;
        {isPublished ? <span style={{ color: 'green' }}>未发布</span> : <span>已发布</span>}
        &nbsp;
        <button onClick={() => { edit(_id) }}>编辑问卷</button>
        &nbsp;
        <button onClick={() => { del(_id) }}>删除</button>
      </div> */}
      <div className={styles.container}>
        {/* 上半部分 */}
        <div className={styles.title}>
          <div className={styles.left}>
            <Link to={isPublished ? '/question/stat/${_id}' : '/question/edit/${_id}'}>
              <Space>
                {isStar && <StarOutlined style={{ color: 'red' }} />}
                {title}
              </Space>
            </Link>
          </div>
          <div className={styles.right}>
            <Space>
              {isPublished ? <Tag color='processing'>已发布</Tag> : <Tag>未发布</Tag>}
              <span>答卷:{answerCount}</span>
              <span>{createAt}</span>
            </Space>

          </div>
        </div>
        <Divider></Divider>
        {/* 下半部分 */}
        <div className={styles.buttonContainer}>
          <div className={styles.left}>
            <Space>
              <Button type='text' icon={<EditOutlined />} size='small' onClick={() => { navigate(`/question/edit/${_id}`) }}>编辑问卷</Button>
              <Button type='text' icon={<LineChartOutlined />} size='small' onClick={() => { navigate(`/question/stat/${_id}`) }} disabled={!isPublished}>数据统计</Button>
            </Space>
          </div>
          <div className={styles.right}>
            <Space>
              <Button type='text' icon={<StarOutlined></StarOutlined>}>{isStar ? '取消标星' : '标星'}</Button>
              <Popconfirm
                title="是否复制该问卷"
                onConfirm={copy}
                onCancel={() => { message.error('取消复制')}}
                okText="Yes"
                cancelText="No">
                <Button type='text' icon={<CopyOutlined></CopyOutlined>} >复制</Button>
              </Popconfirm>
              <Popconfirm
                title="是否复制该问卷"
                onConfirm={del}
                onCancel={() => { message.error('取消删除') }}
                okText="Yes"
                cancelText="No">
                <Button type='text' icon={<DeleteOutlined></DeleteOutlined>}>删除</Button></Popconfirm>
            </Space>
          </div>
        </div>
      </div>
    </>
  )
}

export default QuestionList