interface User {
  // 微信获取的用户信息
  nickName?: string,
  gender?: number,
  birth?: string,
  height?: number,            // 身高
  month_incomeRange?: string, //月收入
  work_province?: string,     // 工作 省
  work_city?: string,         // 工作 市
  work_region?: string,       // 工作 区
  education?: string,         // 学历
  marital_status?: boolean,   // 是否已婚 没有值->请选择 - boolean
  with_child?: boolean,       // 是否有孩子
  want_child?: boolean,       // 是否想要孩子
  job_general?: string,       // 工作类型的大类别
  job_detail?: string,        // 工作类型的小类别
  have_house?: string,        // 是否有房子
  phone?: string,             // 电话号码
  language?: string,  
  city?: string,
  province?: string,
  country?: string,
  avatarUrl?: string,
  openid?: string,            // wx openid
  token?: string,
  deleteStatus?: boolean,
}

export default User;