import React, { FC } from 'react'
import styles from "./common.module.scss"
import { useState } from 'react'
import QuestionCard from '../../components/QuestionCard'
import { Typography,Empty } from 'antd'
const rawQuestionList = [
  { _id: 'q1', title: '问卷1', isPublished: false, isStar: true, answerCount: 5, createAt: '2022-01-01' },
  { _id: 'q2', title: '问卷2', isPublished: true, isStar: true, answerCount: 3, createAt: '2022-012-01' },
  { _id: 'q3', title: '问卷3', isPublished: false, isStar: true, answerCount: 2, createAt: '2022-013-01' },
  { _id: 'q4', title: '问卷4', isPublished: false, isStar: true, answerCount: 1, createAt: '2022-014-01' }
]
const { Title } = Typography
const Star: FC = () => {
const [questionList, setQuestionList] = useState(rawQuestionList)
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>我的问卷</Title>
        </div>
        <div className={styles.right}>搜索</div>
      </div>
      <div className='content' style={{ backgroundColor: '#f1f1f1' }}>
        {/* 问卷列表 */}
        {questionList.length === 0 ? <Empty></Empty> : questionList.map((item) => {
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