// packageMyhome/pages/choosePay.js
import * as Api from "../../../service/api.service";

Page({
  /**
   * Page initial data
   */
  data: {
    payInfo: {} as any,
    userInfo: {} as any,
  },

  onLoad: function (options: any) {
    const user = wx.getStorageSync("userInfo");
    console.log("userInfo", user);
    this.setData!({
      userInfo: {
        ...user,
        vipType: "bronze",
        vipExpireAt: "2020.12.31",
      },
    });
    console.log(`===options===`, options);
    if (options.payInfo) {
      this.setData!({
        payInfo: JSON.parse(options.payInfo),
      });
    }
  },

  // 判断当前是否是开通状态
  wxPay: function () {
    const reqParams = this.preparePayInfo();
    Api.buyVipByWechat(reqParams).then((result: any) => {
      console.log(result);
      if (result && result.code === 200) {
        let data = result.data;
        this.callWxForPay(data);
      }
    });
    console.log("wxPay");
  },

  callWxForPay: function (data: any) {
    const that = this;
    wx.requestPayment({
      timeStamp: data.timeStamp,
      nonceStr: data.nonceStr,
      // package: data.package,
      package: "prepay_id=" + data.prepayId,
      signType: "MD5",
      paySign: data.paySign,
      success(res: any) {
        console.log(`付款成功: `, res);
      },
      fail(res: any) {
        console.log(`付款失败: `, res);
      },
      complete(res: any) {
        console.log(`付款结束complete: `, res);
        // 付款成功直接更新
        Api.checkOrderStatus(data.orderNum).then((result: any) => {
          if (result && result.code === 200) {
            that.requestForUserInfo();
            // 跳转订单详情
            wx.navigateTo({
              url: `../paySuccess/paySuccess`,
            });
          }
        });
      },
    });
  },

  requestForUserInfo() {
    Api.getUserInfo(this.data.userInfo.openid).then((result: any) => {
      if (result) {
        const userInfo = result.data;
        this.setData!({
          userInfo,
        });
        wx.setStorageSync("userInfo", userInfo);
      }
    });
  },

  /**
   * {
  // 选择年付, 月付, 季付
  "period": "month", // "month"-月 "season"-季度 "year"-年
  // 会员类型 
  "vipType": "bronze", // "bronze"-黄铜 "platinum"-白金 
  // 付款类型
  "payType": "join" // "join"-加入 "renew"-续费 "upgrade"-升级
}
   * 
  */
  preparePayInfo: function () {
    const reqParams: any = {};
    const { userInfo, payInfo } = this.data;
    console.log(userInfo.vipType);
    console.log(payInfo);
    switch (userInfo.vipType) {
      // 黄铜
      case "bronze":
        if (payInfo.vipType === "bronze") {
          //续费
          reqParams.payType = "renew";
        } else {
          reqParams.payType = "upgrade";
        }
        reqParams.period = payInfo.name;
        reqParams.vipType = payInfo.vipType;
        break;
      // 白金
      case "platinum":
        reqParams.payType = "renew";
        reqParams.period = payInfo.name;
        reqParams.vipType = "platinum";
        break;
      default:
        reqParams.payType = "join";
        reqParams.period = payInfo.name;
        reqParams.vipType = payInfo.vipType;
        break;
    }
    return reqParams;
  },

  coinPay: function () {
    console.log("coinPay");
  },

  onReady: function () {},

  onShow: function () {},

  onHide: function () {},

  onUnload: function () {},

  onPullDownRefresh: function () {},

  onReachBottom: function () {},
});
