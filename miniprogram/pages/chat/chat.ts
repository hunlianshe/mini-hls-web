import * as Api from '../../service/api.service';

Page({

  data: {
    userInfo: {}, // 用户信息
    message: '', // 用户输入的消息
  },

  onLoad: function () {
    this.getUserInfo();
  },

  getOpenid() {
    let openid: string = '';
    const user = wx.getStorageSync('user');
    console.log('user:', user)
    openid = user.openid || '';
    console.log('openid:', openid)
    return openid;
  },

  getUserInfo() {
    const openid = this.getOpenid();
    Api.getUserInfo(openid).then((result: any) => {
      if (result) {
        const userInfo = result.data;
        console.log('userInfo:', userInfo)
        this.setData!({
          userInfo
        });
      }
    });
  },

  /** 发送消息事件 */
  sendTap() {
    // TODO
    console.log('send message:', this.data.message);
  },

  /** 输入消息内容 */
  inputTap(e: any) {
    console.log('input message:', e);
    this.setData!({
      message: e.detail.detail.value // 获取输入的值
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
  // onShareAppMessage: function () {

  // }
})