
Page({
  data: {
    _active: '1',
  },

  onLoad: function (options: any) {
    this.setData!({
      _active: options.type,
    })
  },

  onReady: function () {

  },

  switchTab(e: any) {
    const index = e.currentTarget.dataset.index;
    this.setData!({
      _active: index,
    })
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