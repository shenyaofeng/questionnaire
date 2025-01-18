import instance from "./ajax";
// type ReqParams = {
//   page: number;
//   size: number;
// };
// 获取单个问卷
export function getQuestionAPI(id: string) {
  return instance.request({
    url: `/api/question/${id}`,
  });
}
// 
export function createQuestionAPI() {
  return instance.request({
    url: '/api/question/',
    method: "post",
  });
}
;
// 获取问卷列表
export function getQuestionListAPI() {
  return instance.request({
    url: '/api/question',
    method: "get",
  });
}