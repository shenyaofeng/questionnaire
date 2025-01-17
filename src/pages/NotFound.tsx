import { FC } from 'react'
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';
import { MANAGE_INDEX } from '../router';
const NotFound: FC = () => {
  const navigate = useNavigate();
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button type="primary" onClick={() => { navigate(MANAGE_INDEX, { replace: true }) }}>返回问卷列表</Button>}
    />
  )
}

export default NotFound