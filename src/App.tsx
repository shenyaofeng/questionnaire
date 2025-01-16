
function App() {
//问卷列表数据
  const questionList = [
    {id:'q1',title:'问卷1',isPublished:false},
    { id: 'q2', title: '问卷2', isPublished: true },
    { id: 'q3', title: '问卷3', isPublished: false },
    { id: 'q4', title: '问卷4', isPublished: false },
  ]
  const edit = (id:string) => {
    console.log(id)
  }
  return (
    <div>
      <h1>问卷列表页</h1>
      {questionList.map((item)=>{
        return <div key={item.id}>
          <strong>{item.title}</strong>
          &nbsp;
          {item.isPublished ? <span style={{ color: 'green' }}>未发布</span> : <span>已发布</span>}
          &nbsp;
          <button onClick={()=>{edit(item.id)}}>编辑问卷</button>
          </div>
      })}
    </div>
  )
}

export default App
