import * as Api from '../../service/api.service';
import xzList from '../../public/json/zxList';

Page({
  data: {
    dataIndex: 0,
    fortuneName: '',
    fortuneNameEn: 'Aquarius',
    fortuneData: {},
    xzList: xzList.data,
    dateType:'今日'

  },

  onLoad: function (options: any) {
    console.log('options',options);
    xzList.data.forEach((e: any) => {
      if (options.consName === e.ch) {
        this.setData!({
          fortuneNameEn: e.en,
        });
      }
    });
    this.setData!({
      fortuneName: options.consName,
      dateType: options.type === 'today' ? '今日' : '本月',
    });
    this.getFortune(options.consName,options.type) 
  },

  otherPick: function (e: any) {
    this.setData!({
      fortuneName: xzList.data[e.detail.value].ch,
      fortuneNameEn: xzList.data[e.detail.value].en,
    });
    this.getFortune(this.data.fortuneName);
  },

  /** 获取实时星座运势 */
  getFortune(consName: string, type='month') {
    Api.getHoroscopet(consName,type).then((result: any) => {
      console.log('result.data', result.data)
      let fortuneData = result.data;
      fortuneData.summary = fortuneData.summary ||  result.data.love
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