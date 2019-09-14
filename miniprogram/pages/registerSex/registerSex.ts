
import { IMyApp } from '../../app';

const app = getApp<IMyApp>()

Page({
  data: {
    motto: '点击 “编译” 以构建',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },
  //事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  goRegister(): void {
    wx.navigateTo({
      url: '../registerphone/registerphone'
    })
  },

  goHome(): void {
    console.log('goHome');
    // wx.switchTab({
    //   url: '../home/home'
    // })
    wx.navigateTo({
      url: '../home/home'
    })
  },

  onLoad() {
    this.setData!({
      userInfo: app.globalData.userInfo,
      hasUserInfo: true,
    });
    
    // if (app.globalData.userInfo) {
    //   this.IsFirstTime() ? this.goRegister() : this.goHome();
    // } else if (this.data.canIUse){
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   // 改函数将在app.js中被调用
    //   app.userInfoReadyCallback = (res) => {
    //     this.setData!({
    //       userInfo: res,
    //       hasUserInfo: true
    //     });
    //     this.IsFirstTime() ? this.goRegister() : this.goHome();
    //   }
    // } else {
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.setData!({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       })
    //     },
    //   })
    //   this.IsFirstTime() ? this.goRegister() : this.goHome();
    // }
  },

  /** 
   * （未授权）手动唤起授权
   */
  getUserInfo(e: any) {
    console.log('getUserInfo:', e);
    app.globalData.userInfo = e.detail.userInfo
    this.setData!({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
    this.IsFirstTime() ? this.goRegister() : this.goHome();
  },

  /** 是否首次 */
  IsFirstTime(): Boolean {
    return false
  },

  jumpOver(): void {
    wx.navigateTo({
      url: '../home/home',
    })
  },

  next(): void {
    console.log('next');
    wx.navigateTo({
      url: '../registerXz/registerXz',
    })
  }

})
