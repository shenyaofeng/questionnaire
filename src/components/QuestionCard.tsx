import { FC } from 'react'
import "./QuestionCard.scss"
type PropsType = {
  _id: string,
  title: string,
  isPublished: boolean,
  isStar: boolean,
  answerCount: number,
  createAt: string
}

const QuestionList: FC<PropsType> = (props: PropsType) => {
  const { _id, title, isPublished, answerCount, createAt } = props
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
      <div className='container'>
        {/* 上半部分 */}
        <div className='title'>
          <div className='left'>
            <a href='#'>{title}</a>
          </div>
          <div className='right'>
            {isPublished ? <span style={{color:'green'}}>已发布</span> : <span>未发布</span>}
            &nbsp;
            <span>答卷:{answerCount}</span>
            &nbsp;
            <span>{createAt}</span>
          </div>
        </div>
        {/* 下半部分 */}
        <div className='button-container'>
          <div className='left'>
            <button>编辑问卷</button>
            <button>数据统计</button>
          </div>
          <div className='right'>
            <button>标星</button>
            <button>复制</button>
            <button>删除</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default QuestionList