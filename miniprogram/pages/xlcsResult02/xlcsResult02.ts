
Page({
  data: {
    name: '',
    catDogResult: {} as any,
  },

  onLoad: function (options: any) {
    this.setData!({
      name: options.name,
    })
    let _this = this;
    wx.getStorage({
      key: 'catDogResult',
      success: function (res) {
        _this.setData!({
          catDogResult: res.data
        })
        console.log('res.data', res.data)
      },
      fail: function () {
        console.log('res.data', 'fail')
      }
    });
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