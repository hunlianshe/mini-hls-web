// import { IMyApp } from '../../app';
// const {
//   cityReplace,
//   showModal,
// } = require('../../utils/utils');

// const app = getApp<IMyApp>();
import * as Api from '../../service/api.service';

Page({
  data: {
    userInfo: {},
    userList: [] as any[],
    curruserList: [],
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
  },

  onLoad() {
    let _this = this;
    wx.getStorage({
      key: 'user',
      success: function(res) {
        _this.setData!({
          userInfo: res.data,
        });
      },
    });
    this.getUserList('');
    this.setData!({
      pageLoaded: true,
    })
  },

  /** 详情 */
  userDetail() {
    // wx.navigateTo({
    //   url: `../userDetail/userDetail`,
    // })
    wx.navigateTo({
      url: '../registerPhone/registerPhone',
    })
  },

  /**
   * @param {string} objectId
   */
  getUserList(objectId: string) {
    const params = { objectId }
    Api.getUserList(params).then((result: any) => {
      if (result.code === 200) {
        let dataList = this.data.userList;
        dataList = dataList.concat(result.data);
        this.setData!({
          userList: dataList,
        });
      }
    }).catch((err) => {
      console.log('get user List', err);
    })
  },

  goMatch() {
    wx.navigateTo({
      url: '../matching/matching'
    })
  },

  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // const { pageLoaded } = this.data;
    // if (pageLoaded) {
    //   this.getuserList({}, '0');
    // }
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
    // this.setData!({
    //   pullDown: true,
    //   pullUp: false
    // });
    // this.getUserList('');
    // wx.stopPullDownRefresh();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    const { userList } = this.data;
    const lastId = userList.length > 0 ? userList[userList.length - 1]._id : ''
    this.getUserList(lastId);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (options?: Page.IShareAppMessageOption | undefined): Page.ICustomShareContent {
    console.log('onShareAppMessage options', options);
    return {};
  }
})