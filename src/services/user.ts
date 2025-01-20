import instance from "./ajax";
// type ReqParams = {
//   page: number;
//   size: number;
// };


// type SearchOption = {
//   keyword: string;
//   isStar: boolean;
//   isDeleted: boolean;
// };

// 获取用户信息
export function getUserInfoAPI() {
  return instance.request({
    url: `/api/user/info`,
  });
}
// 用户注册
export function userRegisterAPI(userName:string, password:string,nickName?:string) {
  return instance.request({
    url: "/api/user/register",
    method: "get",
    data: {
      userName,
      password,
      nickName: nickName || userName,
    },
  });
}
// 用户登陆
export function userLoginAPI(userName: string, password: string) {
  return instance.request({
    url: "/api/user/login",
    method: "post",
    data: {
      userName,
      password
    },
  });
}
