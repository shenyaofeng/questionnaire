import instance from "./ajax";
// type ReqParams = {
//   page: number;
//   size: number;
// };
export function getQuestionAPI(id: string) {
  return instance.request({
    url: `/api/question/${id}`,
  });
}


export function createQuestionAPI() {
  return instance.request({
    url: `/api/question/`,
    method: "post",
  });
}