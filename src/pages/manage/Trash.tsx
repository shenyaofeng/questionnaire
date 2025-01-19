import { FC } from 'react'
import styles from "./common.module.scss"
import { useState } from 'react'
import { Typography, Empty, Table, Tag,Space, Button,Popconfirm } from 'antd'
import ListSearch from '../../components/ListSearch'
import { Spin } from 'antd'
import useLoadQuestionListData from "../../Hooks/useLoadQuestionListData"

// 表格标题
const columns = [
  {
    title: '标题',
    dataIndex: 'title',
  },
  {
    title: '是否发布',
    dataIndex: 'isPublished',
    render: (isPublished : boolean) =>{
      return isPublished? <Tag color='processing'>已发布</Tag> : <Tag>未发布</Tag>
    }
  },
  {
    title: '答卷数量',
    dataIndex: 'answerCount',
  },
  {
    title: '创建时间',
    dataIndex: 'createAt',
  }
];


const { Title } = Typography
const Trash: FC = () => {
  //列表
  const { data, loading } = useLoadQuestionListData({isDeleted:true})
  const questionList = data?.data.list || [];
  // 选中的
  const [selectIds, setSelectIds] = useState<string[]>([])

  // 表格组件
  const TableElement = (
    <>
    <div>
        <Space style={{marginBottom:'12px'}}>
          <Button type='primary' disabled={selectIds.length === 0}>恢复</Button>
          <Popconfirm
            title="确定要删除吗?"
            onConfirm={() => {
              console.log(selectIds)
            }}
            okText="是"
            cancelText="否"
          >
            <Button danger disabled={selectIds.length === 0}>彻底删除</Button>
          </Popconfirm>
          
        </Space>
    </div>
      <Table
        rowSelection={{
          type: 'checkbox',
          onChange: (selectedRowKeys) => {
            setSelectIds(selectedRowKeys as string[])
          },
        }} dataSource={questionList} columns={columns} pagination={false} rowKey={"_id"} />
    </>
  )


  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>回收站</Title>
        </div>
        <div className={styles.right}><ListSearch></ListSearch></div>
      </div>
      <div className='content' style={{ backgroundColor: '#f1f1f1' }}>
        {/* 问卷列表 */}
        {loading && <div style={{ textAlign: 'center' }}><Spin></Spin></div>}
        {questionList.length === 0 ? <Empty></Empty> : TableElement
        }
      </div>
      <div className={styles.footer}>
        加载更多
      </div>
    </>
  )
}

export default Trash