Page({
  data: {
    active: '1',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {

  },

  switchTab(e: any) {
    this.setData!({
      active: e.currentTarget.dataset.active,
    });
  },
  phoneCall() {
    const phone = '18057313715'
    wx.makePhoneCall({
      phoneNumber: phone,
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
})