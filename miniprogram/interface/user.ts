interface User {
  nickName?: string,
  gender?: number,
  age?: string,
  birth?: string,
  height?: string,            // 身高
  salary?: string,            // 月收入
  workProvince?: string,      // 工作 省
  workCity?: string,          // 工作 市
  workRegion?: string,        // 工作 区
  education?: string,         // 学历
  isMarriage?: string,        // 是否已婚 没有值->请选择
  hasChild?: string,          // 是否有孩子
  wantChild?: string,         // 是否想要孩子
  jobGeneral?: string,        // 工作类型的大类别
  jobDetail?: string,         // 工作类型的小类别
  haveHouse?: string,         // 是否有房子
  phone?: string,             // 电话号码
  language?: string,  
  city?: string,
  province?: string,
  country?: string,
  avatarUrl?: string,
  openid?: string,          // wx openid
  token?: string,
  deleteStatus?: boolean,
  constellation?: string,
}

export default User;