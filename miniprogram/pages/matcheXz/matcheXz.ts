import xzList from '../../public/json/zxList';
import { dealRightIntercept, setRightStorage } from '../../utils/utils';

Page({
  data: {
    dataIndex: 0,
    dataList: xzList.data,
    myFortuneName: '',
    otherFortuneName: '',
    showDialog: false,
  },

  onLoad: function (options: any) {
    console.log(options);
  },

  myPick: function (e: any) {
    this.setData!({
      myFortuneName: xzList.data[e.detail.value].ch,
    });
  },

  otherPick: function (e: any) {
    this.setData!({
      otherFortuneName: xzList.data[e.detail.value].ch,
    });
  },

  submit() {
    let rightType = 'constellationMatching'; // 星座匹配
    if (dealRightIntercept(rightType)) {
      this.setData!({
        showDialog: true,
      });
      return;
    }
    setRightStorage(rightType);

    const {
      myFortuneName,
      otherFortuneName
    } = this.data;
    wx.navigateTo({
      url: `../matchXZResult/matchXZResult?me=${myFortuneName}&he=${otherFortuneName}`,
    })
  },

  closeDialog() {
    this.setData!({
      showDialog: false,
    });
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