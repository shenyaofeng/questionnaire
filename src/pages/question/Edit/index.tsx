import React, { FC,  } from 'react'
import  useLoadQuestionData  from "../../../Hooks/useLoadQuestionData"
const Edit: FC = () => {
  const { loading, questionData } = useLoadQuestionData()
  return (
    <div>
      {loading ? <p>loading</p> : <p>{JSON.stringify(questionData)}</p>}
    </div>
  )
}

export default Edit