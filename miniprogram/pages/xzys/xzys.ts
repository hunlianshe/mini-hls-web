
import xzList from '../../public/json/zxList';


Page({
  data: {
    constellation: xzList.data,
  },

  onLoad: function () {

  },

  /** 星座运势 */
  goXzysDetail(e:any) {
    let fortuneName = e.currentTarget.dataset.fortunename;
    wx.navigateTo({
      url: `../xzysDetail/xzysDetail?fortuneName=${fortuneName}`,
    })
  },

  getCharacter(e:any) {
    let consName = e.currentTarget.dataset.fortunename ? e.currentTarget.dataset.fortunename : "白羊座";
    wx.navigateTo({
      url: `../realXzysDetail/realXzysDetail?consName=${consName}&type=today`,
    })
  },

  /** 星座故事 */
  goStoryDetail(e: any) {
    let fortunename = e.currentTarget.dataset.fortunename ? e.currentTarget.dataset.fortunename : "白羊座";
    wx.navigateTo({
      url: `../storyDetail/storyDetail?fortuneName=${fortunename}`,
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