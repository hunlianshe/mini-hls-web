import * as Api from '../../service/api.service';


Page({
  data: {
    psyTest: [],
  },

  onLoad: function () {
    this.getPsyTest();
  },

  doTest() {
    wx.navigateTo({
      url: `../xlcsDetail/xlcsDetail`,
    })
  },

  /** 获取心理测试题目 */
  getPsyTest() {
    Api.getPsyTest().then((result: any) => {
      this.setData!({
        psyTest: result.data,
      })
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