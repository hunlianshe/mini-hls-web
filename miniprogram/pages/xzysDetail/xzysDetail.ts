import * as Api from '../../service/api.service';
import xzList from '../../public/json/zxList';

Page({
  data: {
    dataIndex: 0,
    fortuneName: '',
    fortuneNameEn: 'Aquarius',
    fortuneData: {},
    xzList: xzList.data,
  },

  onLoad: function (options: any) {
    console.log(options);
    this.setData!({
      fortuneName: options.fortuneName,
    })
    this.getFortune(options.fortuneName);
  },

  otherPick: function (e: any) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData!({
      fortuneName: xzList.data[e.detail.value],
      fortuneNameEn: xzList.data[e.detail.value].en,
    });
    this.getFortune(this.data.fortuneName);
  },

  /** 获取星座详解 */
  getFortune(fortuneName: string) {
    Api.getFortune(fortuneName).then((result: any) => {
      let fortuneData = result.data;
      this.setData!({
        fortuneData,
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