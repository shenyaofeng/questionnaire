import React, { FC } from 'react'
import "./List.scss"
import { useState } from 'react'
import { produce } from 'immer'
import QuestionCard from '../../components/QuestionCard'
const rawQuestionList = [
  { _id: 'q1', title: '问卷1', isPublished: false, isStar: false, answerCount: 5, createAt: '2022-01-01' },
  { _id: 'q2', title: '问卷2', isPublished: true, isStar: false, answerCount: 3, createAt: '2022-012-01' },
  { _id: 'q3', title: '问卷3', isPublished: false, isStar: false, answerCount: 2, createAt: '2022-013-01' },
  { _id: 'q4', title: '问卷4', isPublished: false, isStar: false, answerCount: 1, createAt: '2022-014-01' },]


const List: FC = () => {
  const [questionList, setQuestionList] = useState(rawQuestionList)
  return (
    <>
      <div className='header'>
        <div className='left'>
          <h3>我的问卷</h3>
        </div>
        <div className='right'>搜索</div>
      </div>
      <div className='content' style={{backgroundColor:'#f1f1f1'}}>
        {questionList.map((item) => {
          const { _id } = item
          return <QuestionCard key={_id} {...item} ></QuestionCard>
        })}
      </div>
      <div className='footer'>
        footer
      </div>
    </>
  )
}

export default List