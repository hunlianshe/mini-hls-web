import * as Api from '../../service/api.service';
import { IMyApp } from '../../app';
const app = getApp<IMyApp>();

import Horoscope from '../../interface/horoscope';

Page({
  data: {
    userInfo: {} as any,
    psyTest: [],
    currShopList: [],
    dataAlready: false,
    currentCity: '',
    selectValue: '',
    currentQrcode: '',
    currentPhone: '',
    phone: '',
    popHidden: true,
    pageLoaded: false,
    popWechat: false,
    currentPage: 1,
    pageSize: 10,
    totalCount: 0,
    pullDown: false,
    pullUp: false,
    horoscopeData: {} as Horoscope,
  },

  onLoad () {
    let _this = this;
    wx.getStorage({
      key: 'user',
      success: function(res) {
        _this.setData!({
          userInfo: res.data,
        });
        _this.getUserInfo();
      },
    });
    this.setData!({
      pageLoaded: true,
    })
    this.getPsyList();
  },
  
  
  /** 星座运势 */
  goXzys() {
    wx.navigateTo({
      url: `../xzys/xzys`,
    })
  },

  /** 心理测试列表 */
  goXlcsList() {
    wx.navigateTo({
      url: `../xlcsList/xlcsList`,
    })
  },
  
  /** 心理测试 */
  doTest(e: any) {
    wx.navigateTo({
      url: `../xlcsDetail/xlcsDetail?id=${e.currentTarget.dataset.id}`,
    })
  },

  /** 星座匹配 */
  goMatch() {
    wx.navigateTo({
      url: `../matcheXz/matcheXz`,
    })
  },

  /** 获取心理测试 */
  getPsyList() {
    Api.getPsyList().then((result: any) => {
      this.setData!({
        psyTest: result.data,
      })
    })
  },

  /** 运势分析  */
  getHoroscopet(e: any) {
    const consName = this.data.userInfo.constellation || '白羊座';
    // if (consName) {
      console.log('are you ok')
        
      const { type } = e.currentTarget.dataset;
      wx.navigateTo({
        url: '../realXzysDetail/realXzysDetail?consName='+consName+'&type='+type
      })
      // Api.getHoroscopet(consName, type).then((result: any) => {
      //   this.setData!({
      //     horoscopeData: result.data,
      //   })
      // });
    // } else {
    //   wx.navigateTo({
    //     url: '../registerXz/registerXz?scene=home'
    //   })
    // }
  },

  /** 获取用户详细信息 */
  getUserInfo() {
    const { openid } = this.data.userInfo;
    Api.getUserInfo(openid).then((result: any) => {
      if (result) {
        const userInfo = result.data;
        app.globalData.userInfo = result.data;
        this.setData!({
          userInfo,
        });
      }
    });
  },

  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getUserInfo();
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
   * 下拉刷新
   */
  onPullDownRefresh: function () {
    this.setData!({
      pullDown: true,
      pullUp: false
    });
    wx.stopPullDownRefresh();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.setData!({
      pullDown: false,
      pullUp: true
    });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (options?: Page.IShareAppMessageOption | undefined): Page.ICustomShareContent {
    console.log('onShareAppMessage options', options);
    return {};
  }
})