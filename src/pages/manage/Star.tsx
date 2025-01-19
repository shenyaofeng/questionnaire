import { FC } from 'react'
import styles from "./common.module.scss"
import QuestionCard from '../../components/QuestionCard'
import { Typography, Empty } from 'antd'
import ListSearch from '../../components/ListSearch'
import useLoadQuestionListData from "../../Hooks/useLoadQuestionListData"
import {Spin} from 'antd'
const { Title } = Typography
const Star: FC = () => {
  const { data, loading } = useLoadQuestionListData({isStar:true})
  const questionList = data?.data.list || [];
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>星标问卷</Title>
        </div>
        <div className={styles.right}><ListSearch></ListSearch></div>
      </div>
      <div className='content' style={{ backgroundColor: '#f1f1f1' }}>
        {/* 问卷列表 */}
        {loading && <div style={{ textAlign: 'center' }}><Spin></Spin></div>}
        {(!loading && questionList.length === 0) ? <Empty></Empty> : questionList.map((item:any) => {
          const { _id } = item
          return <QuestionCard key={_id} {...item} ></QuestionCard>
        })}
      </div>
      <div className={styles.footer}>
        加载更多
      </div>
    </>
  )
}

export default Star