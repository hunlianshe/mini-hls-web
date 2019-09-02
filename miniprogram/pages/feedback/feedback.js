// pages/feedback/feedback.js
const {
  showModal,
} = require('../../utils/utils');

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  saveImg() {
    wx.getImageInfo({
      src: '../../image/wechat.jpeg',
      success(res) {
        wx.saveImageToPhotosAlbum({
          filePath: res.path,
          success(res) {
            wx.showToast({
              title: '已保存到系统相册',
            })
          },
          file(err) {
            console.log('err', err);
            showModal('保存文件失败，请重试');
          }
        })
      }
    })
  },

  /**
   * 设置剪贴板
   */
  setClipboardData (e) {
    const wechat = e.currentTarget.dataset.wechat;
    wx.setClipboardData({
      data: wechat,
      success(res) {
        wx.getClipboardData({
          success(res) {
            console.log(res.data) // data
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})