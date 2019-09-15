import * as Api from '../../service/api.service';
// import { IMyApp } from '../../app';
// const app = getApp<IMyApp>();

Page({
  data: {
    userOpenid: '',
    userInfo: {} as any,
  },

  onLoad: function (options: any) {
    this.setData!({
      userOpenid: options.openid,
    });
  },

  /** 获取用户信息 */
  getUserInfo() {
    const { userOpenid } = this.data;
    Api.getUserInfo(userOpenid).then((result: any) => {
      if (result) {
        const userInfo = result.data;
        this.setData!({
          userInfo,
        });
      }
    });
  },

  onReady: function () {
  },


  onShow: function () {
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

})