import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'


const Home: FC = () => {
  const navigate = useNavigate()
  return (
    <>
      <div >
        Home
      </div>
    </>
  )
}

export default Home