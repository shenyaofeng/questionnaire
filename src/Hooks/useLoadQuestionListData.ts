import { useRequest } from "ahooks";
import { useSearchParams } from "react-router-dom";
import {getQuestionListAPI} from "../services/question"

function useLoadQuestionListData() {
  const [searchParams] = useSearchParams();
  
  const   getQuestionList = async () => {
    const keyword = searchParams.get("keyword") || ""
    const res = await getQuestionListAPI({ keyword });
    return res
  }


  const { data, loading, error } = useRequest(getQuestionList,{
    refreshDeps: [searchParams] // 当searchParams变化时，重新请求数据
  });

  return {
    data,
    loading,
    error
  }
}

export default useLoadQuestionListData;