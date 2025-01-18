import { useParams } from "react-router-dom";
import { getQuestionAPI } from "../services/question";
import { useRequest } from "ahooks";
function useLoadQuestionData(){
  const { id = "" } = useParams();
  // const [loading, setLoading] = useState<boolean>(false);
  // const [questionData, setQuestion] = useState({});
  // useEffect(() => {
  //   const getQuestion = async () => {
  //     const res = await getQuestionAPI(id);
  //     setQuestion(res.data);
  //     setLoading(false);
  //   };
  //   getQuestion();
  // }, []);

  // return {
  //   loading,
  //   questionData,
  // };
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