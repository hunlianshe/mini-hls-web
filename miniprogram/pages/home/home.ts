import * as Api from '../../service/api.service';
import { IMyApp } from '../../app';
const app = getApp<IMyApp>();

import Horoscope from '../../interface/horoscope';
import User from '../../interface/user';

Page({
  data: {
    userInfo: { constellation: '' } as User,
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
        _this.getPsyList();
      },
    });
    this.getRightConfig();
  },
  
  /** 获取会员权益配置 */
  getRightConfig() {
    // Api.getRightConfig().then((result: any) => {
    //   const rightConfig = result.data;
    //   wx.setStorage({
    //     key: 'rightConfig',
    //     data: rightConfig,
    //   });
    // });
    const rightConfig: any = [
      {
        name: '无会员',
        // 星座运势
        horoscope: 99999,
        yearPrice: 0,
        seasonPrice: 0,
        monthPrice: 0,
        psychologicalTest: 99999,
        constellationMatching: 99999,
        fateMatch: 3,
        fateWatch: 20,
        fateChat: 3,
        whoLikeMe: 0,
        likeEach: 0,
      },
      {
        name: '黄铜会员',
        yearPrice: 120,
        seasonPrice: 30,
        monthPrice: 10, 
        horoscope: 99999, // 星座运势
        psychologicalTest: 99999, // 心理测试
        constellationMatching: 99999, // 星座匹配
        fateMatch: 99999, // 缘分匹配
        fateWatch: 99999, // 缘分下滑查看
        fateChat: 20, // 缘分聊天
        whoLikeMe: 99999, // 谁喜欢我
        likeEach: 99999, // 互相喜欢
      },
      {
        name: '白金会员',
        yearPrice: 240,
        seasonPrice: 60,
        monthPrice: 20,
        horoscope: 99999,
        psychologicalTest: 99999,
        constellationMatching: 99999,
        fateMatch: 99999,
        fateWatch: 99999,
        fateChat: 9999,
        whoLikeMe: 99999,
        likeEach: 99999,
      },
    ];
    wx.setStorage({ key: 'rightConfig', data: rightConfig});
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
    });
  },
  
  /** 心理测试 */
  doTest(e: any) {
    const {
      id,
      type,
    } = e.currentTarget.dataset;
    if (type === '3') {
      wx.navigateTo({
        url: `../qsqy/qsqy?id=${id}`,
      });
    } else {
      wx.navigateTo({
        url: `../xlcsDetail/xlcsDetail?id=${id}`,
      })
    }
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
    const consName = this.data.userInfo.constellation ? this.data.userInfo.constellation : '白羊座';
    const { type } = e.currentTarget.dataset;
    wx.navigateTo({
      url: '../realXzysDetail/realXzysDetail?consName='+consName+'&type='+type
    })
  },

  /** 获取用户详细信息 */
  getUserInfo() {
    const { openid } = this.data.userInfo;
    Api.getUserInfo(openid || '').then((result: any) => {
      if (result) {
        const userInfo = result.data;
        app.globalData.userInfo = result.data;
        wx.setStorage({
          key: 'userInfo',
          data: Object.assign({openid}, result.data),
        });
        this.setData!({
          userInfo,
          pageLoaded: true,
        });
      }
    });
  },

  topInfo() {
    wx.navigateTo({
      url: '../bar/index'
    })
  },

  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // if (this.data.pageLoaded === true) {
    //   this.getUserInfo();
    // }
    const _this = this;
    wx.getStorage({
        key: 'user',
        success: function (res) {
            _this.setData!({
                userInfo: res.data,
            });
            _this.getUserInfo();
            _this.getPsyList();
        },
    });
    _this.getPsyList();
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