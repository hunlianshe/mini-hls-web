// pages/nameCard/nameCard.js
const apiServicePro = require('../../service/api.service');
const {
  showModal,
} = require('../../utils/utils');

Page({
  data: {
    userInfo: {},
    shopName: '',
    addressInfo: '',
    user: {},
    openid: '',
    backgroundImage: '',
  },
  
  onLoad: function (options) {
    let _this = this
    wx.getStorage({
      key: 'user',
      success: function (res) {
        _this.setData({
          user: res.data,
          openid: res.data.openid
        })
      },
    });
    if (options.openid) {
      this.getCardInfo(options.openid);
      _this.setData({
        openid: options.openid
      })
    } else {
      wx.getStorage({
        key: 'user',
        success: function (res) {
          _this.getCardInfo(res.data.openid);
        },
      })
    }

    wx.showShareMenu({
      withShareTicket: true,
      success: function (res) {
      },
      fail: function (res) {
        // 分享失败
        console.log(res)
      }
    })

    wx.getFileSystemManager().readFile({
      filePath: '../../image/bg_namecard.jpg',
      encoding: 'base64',
      success: (res) => {
        _this.setData({
          backgroundImage: 'data:image/jpg;base64,' + res.data
        });
      },
      fail: (res) => {
        console.log(res.errMsg);
      }
    });
   
  },
  
  onShareAppMessage: function () {
    const {
      shopName,
      openid
    } = this.data;
    return {
      title: `${shopName}`,
      path: `/pages/nameCard/nameCard?openid=${openid}`,
      success: function (res) {
        console.log(res.shareTickets[0])
        wx.getShareInfo({
          shareTicket: res.shareTickets[0],
          success: function (res) { console.log(res) },
          fail: function (res) { console.log(res) },
          complete: function (res) { console.log(res) }
        })
      },
      fail: function (res) {
        // 分享失败
        console.log(res)
      }
    }
  },

  /** 获取用户信息（店铺信息） */
  // getUserInfo() {
  //   apiServicePro.getUserInfo('0').then(result => {
  //     if (result) {
  //       const userInfo = result.data.Shop;
  //       const ads = result.data.Shop.addressInfo;
  //       this.setData({
  //         userInfo,
  //         shopName: result.data.Shop.shopName,
  //         addressInfo: `${ads.province.name}${ads.city.name}${ads.area.name}${ads.detail}`,
  //       });
  //     }
  //   });
  // },

  /** 根据openid获取卡片信息 */
  getCardInfo(openid) {
    apiServicePro.getCardInfo(openid, '0').then(result => {
      if (result) {
        const userInfo = result.data;
        const ads = userInfo.Shop;
        this.setData({
          userInfo,
          shopName: result.data.Shop.shopName,
          addressInfo: `${ads.province}${ads.city}${ads.area}${ads.address}`,
        });
      }
    });
  },

  /** 分享页面 */
  share() {
  },

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

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  }
})