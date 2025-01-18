import { FC } from 'react'
import { Typography,Spin } from 'antd'
import styles from "./common.module.scss"
import QuestionCard from '../../components/QuestionCard'
import ListSearch from '../../components/ListSearch'
import { getQuestionListAPI } from '../../services/question'
import { useRequest } from 'ahooks'
const { Title } = Typography

const List: FC = () => {
  const { data, loading } = useRequest(getQuestionListAPI)
  const questionList = data?.data.list || [];
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>我的问卷</Title>
        </div>
        <div className={styles.right}>
          <ListSearch></ListSearch>
        </div>
      </div>
      <div className='content' style={{backgroundColor:'#f1f1f1'}}>
        {loading && <div style={{textAlign:'center'}}><Spin></Spin></div>}
        {/* 问卷列表 */}
        {(!loading && questionList.length) > 0 &&
         questionList.map((item:any) => {
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

export default List