import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'


const QuestionLayout: FC = () => {

  return (
    <>
      <div className='container'>
        <div className='left'>
          QuestionLayout left
        </div>
        <div className='right'>
          <Outlet />
        </div>
      </div>
      
    </>
  )
}

export default QuestionLayout