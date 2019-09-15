// pages/registerStandard/registerStandard.js
Page({
  data: {
    type:'',
    ageNumber: '',
    heightNumber: '',
    salaryNumber: '',
  },

  onLoad: function (options: any) {
    console.log(options);
  },

  jumpOver(): void {
    wx.navigateTo({
      url: '../home/home',
    })
  },

  next(): void {
    wx.navigateTo({
      url: '../home/home',
    })
  },

  getStandard(e: any) {
    const { type, value, number } = e.currentTarget.dataset;
    let ageNumber,
      heightNumber,
      salaryNumber;
    switch (type) {
      case '1':
        ageNumber = number;
        break;
      case '2':
        heightNumber = number;
        break;
      case '3':
        salaryNumber = number;
        break;
      default:
        break;
    }
    this.setData!({
      ageNumber,
      heightNumber,
      salaryNumber,
    })
    console.log('type:', type);
    console.log('value:', value);
  },

  onReady: function () {

  },

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