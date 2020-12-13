import * as Api from '../../service/api.service';
import xzList from '../../public/json/zxList';
import { IMyApp } from '../../app';
const app = getApp<IMyApp>();

Page({
  data: {
    dataIndex: 0,
    me: '',
    he: '',
    fortuneData: {
      title: '',
      grade: '',
      content: ''
    },
    gradeData: [],
    xzList: xzList.data,
  },

  onLoad: function (options: any) {
    let me = options.me;
    let he = options.he;
    this.setData!({
      me,
      he,
    })
    this.getConstellationMmatchingDetail(me, he);
  },

  myPick: function (e: any) {
    this.setData!({
      me: xzList.data[e.detail.value].ch,
    });
  },

  otherPick: function (e: any) {
    this.setData!({
      he: xzList.data[e.detail.value].ch,
    });
  },
  onShareAppMessage: function () {
    return {
      title: '星座匹配',
      desc: `${this.data.me} VS ${this.data.he} 缘分指数`,
      path: `/pages/matchXZResult/matchXZResult?me=${this.data.me}&he=${this.data.he}`,
    }
  },
  /** 获取星座详解 */
  getConstellationMmatchingDetail(me: string, he: string) {
    me = me.replace(/座/, '');
    he = he.replace(/座/, '');
    Api.getConstellationMmatchingDetail(me, he).then((result: any) => {
      let fortuneData = result.data;
      let gradeData = fortuneData.grade.match(/\★{1,5}/g);
      this.setData!({
        fortuneData,
        gradeData,
      });
    });
  },

  submit() {
    let {
      me,
      he
    } = this.data;
    this.getConstellationMmatchingDetail(me, he);
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  goMatch() {
    let userInfo = app.globalData.userInfo;
    if (userInfo && userInfo.phone) {
      wx.navigateTo({
        url: '../matching/matching'
      })
    } else {
      wx.navigateTo({
        url: '../registerXz/registerXz'
      })
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

})