import { useParams } from "react-router-dom";
import { getQuestionAPI } from "../services/question";
import { useRequest } from "ahooks";
function useLoadQuestionData(){
  // 编辑问卷和数据统计页面需要根据id获取问卷数据
  const { id = "" } = useParams();
  // 定义请求的load函数
  const load = async () => {
    const res = await getQuestionAPI(id);
    return res
  }
  // 使用ahooks的useRequest，传入load函数，自动返回loading,data,error
  const {loading,data,error} = useRequest(load);

  return {
    loading,
    questionData:data,
    error
  }
}

export default useLoadQuestionData