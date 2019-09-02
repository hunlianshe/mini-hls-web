// pages/carDetail/carDetail.js
const apiServicePro = require('../../service/api.service');
const {
  phoneCall,
  showModal,
} = require('../../utils/utils');
import config from '../../config'

Page({

  data: {
    id: '',
    from: '',
    carDetail: {},
    carImages: [],
    userInfo: {},
    currentQrcode: '',
    popWechat: false,
    isOpen: false,
    // popPhoneCall: false,
  },

  onLoad: function (options) {
    this.getCarDetail(options.id);
    // this.getUserInfo();
    this.setData({
      id: options.id,
    })
    if (options.from) {
      this.setData({
        from: options.from
      })
    }
  },

  /** 汽车详情 */
  getCarDetail(id) {
    apiServicePro.getCarDetail(id).then((result) => {
      if (result) {
        const carDetail = result.data;
        const dateCard = carDetail.dateCard ? this.getYear(carDetail.dateCard) : '';
        carDetail.dateCard = dateCard;
        let images = carDetail.images;
        images.unshift(carDetail.indexImage);
        if (carDetail.isDeal) {
          images = images.map(e => {
            console.log(e);
            return e.replace(/^.*cn/, config.uploadImageUrl);
          });
        }
        console.log(images);
        this.setData({
          carDetail,
          carImages: images,
        })
      }
    })
  },

  /** 打开微信二维码弹框 */
  popWechat(e) {
    const currentQrcode = e.currentTarget.dataset.qrcode;
    this.setData({
      currentQrcode,
      popWechat: true
    })
  },

  /** 关闭微信二维码弹框 */
  closeWechat() {
    this.setData({
      popWechat: false
    })
  },

  /** 加入仓库 */
  addWherehouse(e) {
    const params = {
      id: e.currentTarget.dataset.id,
      follow: e.currentTarget.dataset.follow ? false : true,
    };
    apiServicePro.joinWarehouse(params).then((result) => {
      if (result.code === 200) {
        const carDetail = this.data.carDetail;
        carDetail.isFollowCar = e.currentTarget.dataset.follow ? false : true;
        this.setData({
          carDetail,
        })
        if (e.currentTarget.dataset.follow) {
          wx.showToast({
            title: '已取消',
            icon: 'succes',
            duration: 1000,
            mask: true
          })
        } else {
          wx.showToast({
            title: '已添加',
            icon: 'succes',
            duration: 1000,
            mask: true
          })
        }
      }
    }, (err) => {
    })
  },

  getYMD(dateStr) {
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}年${month}月${day}日`;
  },

  getYear(dateStr) {
    const date = new Date(dateStr);
    const year = date.getFullYear();
    return `${year}年`;
  },

  phoneCall(e) {
    phoneCall(e);
  },

  /** 店铺首页 */
  goShop(e) {
    wx.navigateTo({
      url: `../shop/shop?id=${e.currentTarget.dataset.id}`,
    })
  },

  /** 返回首页 */
  backHome() {
    wx.switchTab({
      url: '../home/home',
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    const {
      carDetail,
      id
    } = this.data;
    return {
      title: `${carDetail.brand}${carDetail.brandDetail}`,
      path: `/pages/carDetail/carDetail?id=${id}&from=share`,
      success: function (res) {
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

  viewAll() {
    const isOpen = !this.data.isOpen;
    this.setData({
      isOpen,
    })
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
    const from = this.data.from;
    if (from === 'creatCarPage') {
      wx.navigateBack({
        delta: 1
      })
    };
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.getCarDetail(this.data.id);
    wx.stopPullDownRefresh();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  }
})