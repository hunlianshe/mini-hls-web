import * as Api from '../../service/api.service';


Page({
  data: {
    psyTest: [],
  },

  onLoad: function () {
    this.getPsyList();
  },

  doTest(e: any) {
    wx.navigateTo({
      url: `../xlcsDetail/xlcsDetail?id=${e.currentTarget.dataset.id}`,
    })
  },

  /** 获取心理测试题目 */
  getPsyList() {
    Api.getPsyList().then((result: any) => {
      let psyTest = result.data;
      psyTest.forEach((e: any) => {
        e.image = `../../public/image/xlcs_${e.type}.jpg`;
      });
      this.setData!({
        psyTest,
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