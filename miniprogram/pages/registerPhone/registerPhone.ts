import * as Api from '../../service/api.service';
import * as utils from '../../utils/utils';

import { IMyApp } from '../../app';
const app = getApp<IMyApp>()

Page({
  data: {
    motto: '点击 “编译” 以构建',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    smsDisable: false,
    smsTime: 0,
    phone: '',
  },
  
  onLoad() {
    this.setData!({
      userInfo: app.globalData.userInfo,
      hasUserInfo: true,
    });
  },

  bindPhoneInput(e: any) {
    this.setData!({
      phone: e.detail.value
    })
  },

  getPhoneCode() {
    const { phone } = this.data;
    Api.sendSms({ phone }).then((result: any) => {
      if (result.code === 200) {
        this.setData!({
          smsDisable: true,
        })
        let smsTime = 59;
        const smsInterval = setInterval(() => {
          if (smsTime === 0) {
            this.setData!({
              smsDisable: false,
            })
            clearInterval(smsInterval);
            return;
          }
          smsTime--;
          this.setData!({
            smsTime,
          });
        }, 1000)
      }
    });
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
    wx.navigateTo({
      url: '../matching/matching',
    })
  },
   
  formSubmit(e: any): void {
    Api.addPhone(e.detail.value).then((result: any) => {
      if (result.code === 200) {
        wx.switchTab({
          url: '../matching/matching',
        });
      } else {
        utils.showModal(result.message);
      }
    })
  },

  formReset(): void {
    console.log('form发生了reset事件')
  }
  
})
