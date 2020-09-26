import * as Api from '../../service/api.service';
import xzList from '../../public/json/zxList';

Page({
  data: {
    dataIndex: 0,
    fortuneName: '',
    fortuneNameEn: 'Aquarius',
    storyData: {},
    xzList: xzList.data,
  },

  onLoad: function (options: any) {
    this.setData!({
      fortuneName: options.fortuneName,
    })
    this.getConstellationStory(options.fortuneName);
  },

  otherPick: function (e: any) {
    this.setData!({
      fortuneName: xzList.data[e.detail.value].ch,
      fortuneNameEn: xzList.data[e.detail.value].en,
    });
    this.getConstellationStory(this.data.fortuneName);
  },

  /** 获取星座详解 */
  getConstellationStory(fortuneName: string) {
    Api.getConstellationStory(fortuneName).then((result: any) => {
      let storyData = result.data;
      this.setData!({
        storyData,
      });
    });
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

})