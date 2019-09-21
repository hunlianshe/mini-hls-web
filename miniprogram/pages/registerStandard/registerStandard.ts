import * as Api from '../../service/api.service';
import * as utils from '../../utils/utils';
import { IMyApp } from '../../app';
const app: any = getApp<IMyApp>();

Page({
  data: {
    type:'',
    ageNumber: '',
    heightNumber: '',
    salaryNumber: '',
    age: '',
    height: '',
    salary: '',
  },

  onLoad: function (options: any) {
    console.log(options);
  },

  jumpOver(): void {
    wx.navigateTo({
      url: '../home/home',
    })
  },

  next(): void {
    wx.navigateTo({
      url: '../home/home',
    })
  },

  getStandard(e: any) {
    const { type, value, number } = e.currentTarget.dataset;
    switch (type) {
      case '1':
        this.setData!({
          ageNumber: number,
          age: value,
        });
        break;
      case '2':
        this.setData!({
          heightNumber: number,
          height: value,
        });
        break;
      case '3':
        this.setData!({
          salaryNumber: number,
          salary: value,
        });
        break;
      default:
        break;
    }
    console.log('type:', type);
    console.log('value:', value);
  },

  updateUser(): any {
    const {
      age,
      height,
      salary,
    } = this.data;
    console.log(this.data);
    if (!utils.validateEmpty(age, '请选择年龄标准') ||
      !utils.validateEmpty(height, '请选择身高标准') ||
      !utils.validateEmpty(salary, '请选择收入标准')) {
      return false;
    }
    Api.updateUser({
      openid: app.globalData.userInfo.openid,
      objectInfo: { // 择偶标准
        age,
        height,
        salary,
      }
    }).then((result: any) => {
      console.log('esult.code', result.code)
      if (result.code === 200) {
        wx.navigateTo({
          url: '../registerPhone/registerPhone',
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