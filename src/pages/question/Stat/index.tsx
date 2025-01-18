import { FC } from 'react'

import useLoadQuestionData from "../../../Hooks/useLoadQuestionData"

const Stat: FC = () => {
  const { loading, questionData } = useLoadQuestionData()
  return (
    <div>
      {loading ? <p>loading</p> : <p>{JSON.stringify(questionData)}</p>}
    </div>
  )
}

export default Stat