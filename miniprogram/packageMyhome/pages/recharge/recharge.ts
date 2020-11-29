import * as Api from "../../../service/api.service";
import * as utils from "../../../utils/utils";

import { IMyApp } from "../../../app";
const app = getApp<IMyApp>();

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse("button.open-type.getUserInfo"),
    smsDisable: false,
    smsTime: 59,
    phone: "",
    submitDisable: false,
    totalMoney: 0,
  },

  onLoad() {
    console.log(`userinfo: `, app.globalData.userInfo);
    const userInfo: any = wx.getStorageSync("userInfo");
    this.setData!({
      userInfo: app.globalData.userInfo,
      totalMoney: userInfo.coin,
      hasUserInfo: true,
    });
  },

  bindPhoneInput(e: any) {
    this.setData!({
      phone: e.detail.value,
    });
  },

  getPhoneCode(): any {
    const { phone } = this.data;
    if (!utils.validateEmpty(phone, "请输入手机号")) {
      return false;
    }
  },

  goRegister(): void {
    wx.navigateTo({
      url: "../registerphone/registerphone",
    });
  },

  goHome(): void {
    wx.navigateTo({
      url: "../home/home",
    });
  },

  /**
   * （未授权）手动唤起授权
   */
  getUserInfo(e: any) {
    app.globalData.userInfo = e.detail.userInfo;
    this.setData!({
      userInfo: e.detail.userInfo,
      hasUserInfo: true,
    });
    this.IsFirstTime() ? this.goRegister() : this.goHome();
  },

  /** 是否首次 */
  IsFirstTime(): Boolean {
    return false;
  },

  jumpOver(): void {
    wx.navigateTo({
      url: "../home/home",
    });
  },

  next(): void {
    wx.navigateTo({
      url: "../matching/matching",
    });
  },

  formSubmit(e: any): any {
    this.setData!({
      submitDisable: true,
    });
    const params = e.detail.value;
    if (!utils.validateEmpty(params.money, "请输入充值金额")) {
      this.setData!({
        submitDisable: false,
      });
      return false;
    }
    if (!utils.validateMoney(params.money, "请输入小数点保留2位的金额")) {
      this.setData!({
        submitDisable: false,
      });
      return false;
    }
    // TODO
    Api.rechargeMoney({
      ...params,
      money: +params.money,
    }).then((result: any) => {
      console.log(`recharge money request:`, result);
      this.setData!({
        submitDisable: true,
      });
      this.callWxForPay(result.data);
      // if (result.code === 200) {
      //   wx.navigateTo({
      //     url: '../matching/matching',
      //   });
      // } else {
      //   this.setData!({
      //     submitDisable: false
      //   });
      //   utils.showModal(result.message);
      // }
    });
  },

  callWxForPay(data: any) {
    const _this = this;
    wx.requestPayment({
      timeStamp: data.timeStamp,
      nonceStr: data.nonceStr,
      // package: data.package,
      package: "prepay_id=" + data.prepayId,
      signType: "MD5",
      paySign: data.paySign,
      success(res) {
        console.log(`付款成功: `, res);
      },
      fail(res) {
        console.log(`付款失败: `, res);
      },
      complete(res) {
        console.log(`付款结束complete: `, res);
        // 付款成功直接更新
        Api.checkOrderStatus(data.orderNum).then((result: any) => {
          if (result && result.code === 200) {
            console.log(`check order result`);
            // 跳转订单详情
            // wx.navigateTo({
            //   url: `../../../pages/myHome/myHome`,
            // })
            utils.showModelAction("支付成功", () => {
              wx.navigateBack({
                delta: 1,
              });
            });
            _this.setData!({
              submitDisable: false,
            });
          } else {
            _this.setData!({
              submitDisable: false,
            });
            utils.showModal("支付失败", result.message);
          }
        });
      },
    });
  },

  formReset(): void {},
});
