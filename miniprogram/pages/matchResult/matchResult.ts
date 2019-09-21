import * as Api from '../../service/api.service';



// pages/matchResult/matchResult.js
Page({
  data: {
    matchResult:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options: any) {
    console.log(options);
    Api.getConstellationMmatchingDetailComplex().then((result:any) => {
      console.log('result', result)
      this.setData!({
        matchResult: result.data,
      });
    }, (err) => {
      console.log('err000', err)
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  moreMatch(){
    wx.navigateTo({
      url: '../matching/matching'
    })
  },

  /** 详情 */
  userDetail() {
    wx.navigateTo({
      url: `../userDetail/userDetail?openid=${this.data.matchResult.opposite.openid}`,
    })
    // wx.navigateTo({
    //   url: '../registerPhone/registerPhone',
    // })
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