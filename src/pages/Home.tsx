import { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Typography } from 'antd'
import { MANAGE_INDEX } from '../router'
import styles from './Home.module.scss'
import { getQuestionAPI } from "../services/question"
const {Title,Paragraph} = Typography
const Home: FC = () => {
  const navigate = useNavigate()
  useEffect(() => {
    async function  gettest (){
      const res = await getQuestionAPI('1')
      console.log(res)
    }
    gettest()
  },[])
  return (
    <>
      <div className={styles.continer}>
        <div className={styles.info}>
          <Title>问卷调查 | 在线投票</Title>
          <Paragraph>已累计13123123五分,发布12312,收到23123分</Paragraph>
          <div>
            <Button type='primary' onClick={() => { navigate(MANAGE_INDEX) }}>开始使用</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home