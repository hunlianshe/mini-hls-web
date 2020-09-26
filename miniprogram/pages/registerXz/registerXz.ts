import * as Api from '../../service/api.service';
import xzList from '../../public/json/zxList';
import { IMyApp } from '../../app';
const app: any = getApp<IMyApp>();

Page({
  data: {
    scene: '',
    constellation: '',
    constellationList: xzList.data,
  },

  onLoad: function (options: any) {
    if (options.scene) {
      this.setData!({
        scene: options.scene,
      });
    }
  },

  jumpOver() {
    wx.navigateTo({
      url: '../home/home',
    })
  },

  select(e: any) {
    const { constellation } = e.currentTarget.dataset;
    this.setData!({
      constellation,
    });
  },

  updateUser() {
    Api.updateUser({
      openid: app.globalData.userInfo.openid,
      constellation: this.data.constellation
    }).then((result: any) => {
      if (result.code === 200) {
        if (this.data.scene === 'home') {
          wx.switchTab({
            url: '../home/home',
          });
          return;
        }
        wx.navigateTo({
          url: '../registerInfo/registerInfo',
        });
      }
    });
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