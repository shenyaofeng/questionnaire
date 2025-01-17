import { ChangeEvent, FC, useEffect } from 'react'
import {Input} from 'antd'
import { useState } from'react'
import { useNavigate, useLocation,useSearchParams } from 'react-router-dom';
const { Search } = Input;
const ListSearch: FC = () => {
  const navigate = useNavigate()
  const {pathname} = useLocation()
  const [searchParams]  = useSearchParams()
  // 输入框的值
  const [inputValue, setInputValue] = useState('')
  // 输入框的值改变
  const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }
  // 搜索
  const handleSearch = (value:string) => {
    navigate({
      pathname,
      search:`keyword=${value}`
    })
  }
  // 根据url获取关键字给input赋值
  useEffect(()=>{

    const cururl = searchParams.get("keyword") || ''
    setInputValue(cururl)
  }, [searchParams])
  return (
    <div>
      <Search
      style={{width:"400px"}}
      size='large'
      placeholder='请输入关键字'
      allowClear
      value={inputValue}
      onChange={handleChange}
      onSearch={handleSearch}
      />
    </div>
  )
}

export default ListSearch