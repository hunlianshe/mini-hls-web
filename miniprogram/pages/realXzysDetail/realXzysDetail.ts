import * as Api from '../../service/api.service';
import xzList from '../../public/json/zxList';

const dataList: any[] = [];
xzList.data.forEach((e: any) => {
  dataList.push(e.ch);
});


Page({
  data: {
    dataIndex: 0,
    fortuneName: '',
    fortuneData: {},
    xzList: dataList,
    date:'今日'

  },

  onLoad: function (options: any) {
    console.log('options',options)
    options.type
    this.setData!({
      fortuneName: options.consName,
      date:  options.type === 'today'?'今日':'本月',
    });
    this.getFortune(options.consName,options.type) 
  },

  otherPick: function (e: any) {
    this.setData!({
      fortuneName: dataList[e.detail.value],
    });
    this.getFortune(this.data.fortuneName);
  },

  /** 获取实时星座运势 */
  getFortune(consNamem: string,type='month') {
    Api.getHoroscopet(consNamem,type).then((result: any) => {
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