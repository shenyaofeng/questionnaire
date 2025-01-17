import { ChangeEvent, FC } from 'react'
import {Input} from 'antd'
import { useState } from'react'
const { Search } = Input;
const ListSearch: FC = () => {
  // 输入框的值
  const [inputValue, setInputValue] = useState('')

  const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }
  const handleSearch = (value:string) => {
    console.log(value)
  }
  return (
    <div>
      <Search
      style={{width:"400px"}}
      size='large'
      placeholder='请输入关键字'
      allowClear
      onChange={handleChange}
      onSearch={handleSearch}
      />
    </div>
  )
}

export default ListSearch