interface User {
  // 微信获取的用户信息
  nickName: string,
  language: string,
  city: string,
  province: string,
  country: string,
  avatarUrl: string,
  openid: string,
  token: string,
  deleteStatus?: boolean,
}

export default User;