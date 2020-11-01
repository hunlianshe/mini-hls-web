export const  BAIJIN= {
  name: "白金会员",
  priceList: [
    {
      select: false,
      name: "year", // 年
      nameStr: "年付",
      value: "240",
      avgStr: "20元/月",
    }, {
      select: false,
      name: "quarter", // 季
      nameStr: "季付",
      value: "60",
      avgStr: "20元/月"
    }, {
      select: false,
      name: "month", // 月
      nameStr: "月付",
      value: "20",
      avgStr: "20元/月"
    }
  ]
}

export const HUANGTONG = {
  name: "黄铜会员",
  priceList: [
    {
      select: false,
      name: "year", // 年
      nameStr: "年付",
      value: "120",
      avgStr: "10元/月"
    }, {
      select: false,
      name: "quarter", // 季
      nameStr: "季付",
      value: "30",
      avgStr: "10元/月"
    }, {
      select: false,
      name: "month", // 月
      nameStr: "月付",
      value: "30",
      avgStr: "10元/月"
    }
  ]
}

export const RIGHTLIST = [
  {
    name: "星座运势",
    ordinary: true,
    huangTong: true,
    baiJin: true,
    type: ""
  }, {
    name: "心理测试",
    ordinary: true,
    huangTong: true,
    baiJin: true,
    type: ""
  }, {
    name: "星座配对",
    ordinary: "3次",
    huangTong: "无限次",
    baiJin: "无限次",
    type: "string"
  }, {
    name: "缘分查看",
    ordinary: "20人",
    huangTong: "无限次",
    baiJin: "无限次",
    type: "string"
  }, {
    name: "缘分聊天",
    ordinary: "3次",
    huangTong: "无限次",
    baiJin: "无限次",
    type: "string"
  }, {
    name: "谁喜欢我",
    ordinary: false,
    huangTong: true,
    baiJin: true,
    type: ""
  }, {
    name: "相互喜欢",
    ordinary: false,
    huangTong: true,
    baiJin: true,
    type: ""
  }
]