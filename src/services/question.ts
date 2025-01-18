import instance from "./ajax";
// type ReqParams = {
//   page: number;
//   size: number;
// };
export function fetchListAPI(id: string) {
  return instance.request({
    url: `/api/question/${id}`,
  });
}
