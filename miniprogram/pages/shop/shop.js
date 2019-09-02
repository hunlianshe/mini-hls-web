// pages/shop/shop.js

const apiServicePro = require('../../service/api.service');
const {
  showModal,
  phoneCall,
} = require('../../utils/utils');

Page({
  data: {
    id: '',
    from: '',
    shopDetail: {}, 
    _active: '1',
    popWechat: false,
    currentQrcode: '',
    currentPhone: '',
  },

  onLoad: function (options) {
    if (options.id) {
      this.getShopDetail(options.id);
      this.setData({
        id: options.id,
      })
    }
    // 扫码进店场景
    if (options.scene) {
      this.getShopDetail(options.scene);
      this.setData({
        id: options.scene,
      })
    }
    if (options.from) {
      this.setData({
        from: options.from
      })
    }
  },

  /** 搜索页 */
  doSearch() {
    wx.navigateTo({
      url: '../shopSearch/shopSearch',
    })
  },

  tabSwitch(e) {
    const index = e.currentTarget.dataset.index;
    this.setData({
      _active: index,
    })
  },

  /**
   * 听过店铺id获取信息
   */
  getShopDetail(id) {
    apiServicePro.getShopDetail(id).then((result) => {
      if (result.code === 200) {
        this.setData({
          shopDetail: result.data
        })
      } else {
        showModal();
      }
    }, (err) => {
    })
  },

  /** 加入仓库 åå*/
  addWherehouse(e) {
    const id = e.currentTarget.dataset.id || e.detail.id;
    const follow = (e.currentTarget.dataset.follow || e.detail.follow) ? false : true;
    const params = {
      id,
      follow,
    };
    apiServicePro.joinWarehouse(params).then((result) => {
      if (result.code === 200) {
        const shopDetail = this.data.shopDetail;
        shopDetail.Cars.forEach(item => {
          if (item.id === id) {
            item.isFollowCar = follow;
          }
        })
        this.setData({
          shopDetail,
        })
        if (follow) {
          wx.showToast({
            title: '已添加',
            icon: 'succes',
            duration: 1000,
            mask: true
          })
        } else {
          wx.showToast({
            title: '已取消',
            icon: 'succes',
            duration: 1000,
            mask: true
          })
        }
      } else {
        showModal();
      }
    }, (err) => {
    })
  },

  phoneCall(e) {
    phoneCall(e);
  },

  goCarDetail(e) {
    wx.navigateTo({
      url: `../carDetail/carDetail?id=${e.currentTarget.dataset.id}`,
    })
  },

  /** 收藏店铺 */
  followShop(e) {
    const params = {
      id: e.currentTarget.dataset.id,
      follow: e.currentTarget.dataset.follow ? false : true
    };
    apiServicePro.followShop(params).then((result) => {
      if (result.code === 200) {
        const shopDetail = this.data.shopDetail;
        shopDetail.isFollowShop = e.currentTarget.dataset.follow ? false : true;
        this.setData({
          shopDetail,
        })
        if (e.currentTarget.dataset.follow) {
          wx.showToast({
            title: '已取消收藏',
            icon: 'succes'
          })
        } else {
          wx.showToast({
            title: '已收藏',
            icon: 'succes'
          })
        }
      } else {
        showModal();
      }
    }, (err) => {
    })
  },

  /** 打开微信二维码弹框 */
  popWechat(e) {
    const currentQrcode = e.currentTarget.dataset.qrcode;
    const currentPhone = e.currentTarget.dataset.phone;
    this.setData({
      currentQrcode,
      currentPhone,
      popWechat: true
    })
  },

  /** 关闭微信二维码弹框 */
  closeWechat() {
    this.setData({
      popWechat: false
    })
  },

  goEditCar(e) {
    const shopId = this.data.shopDetail.id;
    const carId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `../createCar/createCar?shopId=${shopId}&carId=${carId}`,
    })
  },

  goCreateCar () {
    const shopId = this.data.shopDetail.id;
    wx.navigateTo({
      url: `../createCar/createCar?shopId=${shopId}`,
    })
  },

  goEditShop() {
    const shopId = this.data.shopDetail.id;
    wx.navigateTo({
      url: `../createShop/createShop?shopId=${shopId}`,
    })
  },

  /** 返回首页 */
  backHome () {
    wx.switchTab({
      url: '../home/home',
    })
  },

  /**
   * 设置剪贴板
   */
  setClipboardData(e) {
    const shopInfo = this.data.shopDetail;
    let address = shopInfo.address;
    wx.setClipboardData({
      data: address,
      success(res) {
        wx.getClipboardData({
          success(res) {
          }
        })
      }
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

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  onUnload: function () {
    const from = this.data.from;
    if (from === 'creatShopPage') {
      wx.navigateBack({
        delta: 1
      })
    };
  },

  /** 下拉刷新 */
  onPullDownRefresh: function () {
    this.getShopDetail(this.data.id);
    wx.stopPullDownRefresh();
  },

  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   * 分享按钮
   */
  onShareAppMessage: function () {
    const {
      shopDetail,
      id
    } = this.data;
    return {
      title: `${shopDetail.shopName}`,
      path: `/pages/shop/shop?id=${id}&from=share`,
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
})