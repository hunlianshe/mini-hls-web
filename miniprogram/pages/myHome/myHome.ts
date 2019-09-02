// pages/myHome/myHome.js

import apiServicePro = require('../../service/api.service');

Page({
  data: {
    user: {},
    userInfo: {},
    userStatistics: {},
    pageLoaded: false,
  },

  onLoad: function () {
    let _this = this
    wx.getStorage({
      key: 'user',
      success: function(res) {
        _this.setData!({
          user: res.data
        })
      },
    });
    this.getUserInfo();
    this.setData!({
      pageLoaded: true,
    })
  },

  /** 心理测试列表 */
  goXlcsList() {
    wx.navigateTo({
      url: `../xlcsList/xlcsList`,
    })
  },

  register() {
    wx.navigateTo({
      url: `../register/register`,
    })
  },

  myImages() {
    wx.navigateTo({
      url: `../myImages/myImages`,
    })
  },

  /** 获取用户信息（店铺信息） */
  getUserInfo() {
    apiServicePro.getUserInfo().then(result => {
      if (result) {
      //   const userInfo = result.data;
      //   this.setData!({
      //     userInfo,
      //     userStatistics: userInfo.statistics,
      //   });
      //   wx.setStorage({
      //     key: 'userShopInfo',
      //     data: userInfo,
      //   });
      }
    });
  },

  /** 创建店铺 */
  createShop() {
    wx.navigateTo({
      url: '../createShop/createShop',
    })
  },

  /** 创建汽车 */
  goMatchmaker(): any {
    wx.navigateTo({
      url: `../matchmaker/matchmaker`,
    })
  },

  /** 查看店铺 */
  goFateList() {
    // const id = this.data.userInfo.Shop.id;
    wx.navigateTo({
      url: `../fateList/fateList`,
    })
  },

  /** 名片 */
  goNamecard() {
    wx.navigateTo({
      url: '../nameCard/nameCard',
    })
  },

  /** 用户反馈 */
  goFeedback() {
    wx.navigateTo({
      url: '../feedback/feedback',
    })
  },

  shopQrcode() {
    wx.navigateTo({
      url: `../shopQrcode/shopQrcode`,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    const { pageLoaded } = this.data;
    if (pageLoaded) {
      this.getUserInfo();
    }
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

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },
})