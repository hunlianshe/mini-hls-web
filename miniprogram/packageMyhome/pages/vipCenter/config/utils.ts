export enum RightList {
  NOLIMIT = 99999,
  NOACESS = 0,
}

export const dealWithVipPriceInfo = (data: any) => {
  const result: any = {};
  data.forEach((vipInfo: any) => {
    const temp = {
      name: vipInfo.name,
      priceList: [
        {
          select: false,
          name: "year", // 年
          nameStr: "年付",
          value: vipInfo.yearPrice,
          avgStr: `${vipInfo.monthPrice}元/月`,
        },
        {
          select: false,
          name: "season", // 季
          nameStr: "季付",
          value: vipInfo.seasonPrice,
          avgStr: `${vipInfo.monthPrice}元/月`,
        },
        {
          select: false,
          name: "month", // 月
          nameStr: "月付",
          value: vipInfo.monthPrice,
          avgStr: `${vipInfo.monthPrice}/月`,
        },
      ],
    };
    if (vipInfo.name === "白金会员") {
      result.BAIJIN = temp;
    } else if (vipInfo.name === "黄铜会员") {
      result.HUANGTONG = temp;
    }
  });
  return result;
};

export const dealWithVipRightList = (data: any) => {
  const result: any = [
    {
      name: "星座运势",
      ordinary: true,
      huangTong: true,
      baiJin: true,
      type: "",
    },
    {
      name: "心理测试",
      ordinary: true,
      huangTong: true,
      baiJin: true,
      type: "",
    },
    {
      name: "星座配对",
      ordinary: true,
      huangTong: true,
      baiJin: true,
      type: "",
    },
    {
      name: "缘分查看",
      ordinary: "20人",
      huangTong: "无限次",
      baiJin: "无限次",
      type: "string",
    },
    {
      name: "缘分聊天",
      ordinary: "3次",
      huangTong: "无限次",
      baiJin: "无限次",
      type: "string",
    },
    {
      name: "谁喜欢我",
      ordinary: false,
      huangTong: true,
      baiJin: true,
      type: "",
    },
    {
      name: "相互喜欢",
      ordinary: false,
      huangTong: true,
      baiJin: true,
      type: "",
    },
  ];
  data.forEach((vipInfo: any) => {
    let key = "";
    switch (vipInfo.name) {
      case "无会员":
        key = "ordinary";
        break;
      case "黄铜会员":
        key = "huangTong";
        break;
      case "白金会员":
        key = "huangTong";
        break;
      default:
        break;
    }
    //星座运势
    result[0][key] =
      vipInfo.psychologicalTest === RightList.NOLIMIT ? true : false;
    //心理测试
    result[1][key] =
      vipInfo.constellationMatching === RightList.NOLIMIT ? true : false;
    //星座配对
    result[2][key] = vipInfo.fateMatch === RightList.NOLIMIT ? true : false;
    //缘分查看
    result[3][key] =
      vipInfo.fateWatch === RightList.NOLIMIT
        ? "无限次"
        : `${vipInfo.fateWatch}人`;
    //缘分聊天
    result[4][key] =
      vipInfo.fateChat === RightList.NOLIMIT
        ? "无限次"
        : `${vipInfo.fateChat}次`;
    //谁喜欢我
    result[5][key] = vipInfo.whoLikeMe === RightList.NOLIMIT ? true : false;
    //相互喜欢
    result[6][key] = vipInfo.likeEach === RightList.NOLIMIT ? true : false;
  });
  return result;
};
