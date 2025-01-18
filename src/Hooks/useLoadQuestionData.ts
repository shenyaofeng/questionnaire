import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getQuestionAPI } from "../services/question";
function useLoadQuestionData(){
  const { id = "" } = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const [questionData, setQuestion] = useState({});
  useEffect(() => {
    const getQuestion = async () => {
      const res = await getQuestionAPI(id);
      setQuestion(res.data);
      setLoading(false);
    };
    getQuestion();
  }, []);

  return {
    loading,
    questionData,
  };
}

export default useLoadQuestionData