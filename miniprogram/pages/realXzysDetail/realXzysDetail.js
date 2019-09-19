import * as Api from '../../service/api.service.js';
import xzList from '../../public/json/zxList.js';
import * as echarts from '../../ec-canvas/echarts';
let chart = null;

let chartData = [70,9, 90, 44];
function initChart(canvas, width, height) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height,
  });
  canvas.setChart(chart);

  var option = {
    title: {
      text: 'xxxxxx'
    },
    tooltip: {},
    legend: {
      data: ['运势分析']
    },
    radar: {
      // shape: 'circle',
      name: {
        textStyle: {
          color: '#fff',
          backgroundColor: '#999',
          borderRadius: 3,
          padding: [3, 5]
        }
      },
      indicator: [
        { name: '真爱指数', max: 100 },
        { name: '健康指数', max: 100 },
        { name: '赚钱指数', max: 100 },
        { name: '工作指数', max: 100 },
      ]
    },
    series: [{
      name: '',
      type: 'radar',
      data: [
        {
          value: chartData,
          name: '运势分析'
        },
      ]
    }]
  };
  chart.setOption(option);
  return chart;
}

Page({
  data: {
    ec: {
      onInit: initChart
    },
    chartData: [],
    dataIndex: 0,
    fortuneName: '',
    fortuneNameEn: 'Aquarius',
    fortuneData: {},
    xzList: xzList.data,
    dateType:'今日',
    type: 'today',
  },

  onLoad: function (options) {
    console.log('options',options);
    xzList.data.forEach((e) => {
      if (options.consName === e.ch) {
        this.setData({
          fortuneNameEn: e.en,
        });
      }
    });
    this.setData({
      fortuneName: options.consName,
      dateType: options.type === 'today' ? '今日' : '本月',
      type: options.type,
    });
    this.getFortune(options.consName,options.type);
  },

  

  otherPick: function (e) {
    this.setData({
      fortuneName: xzList.data[e.detail.value].ch,
      fortuneNameEn: xzList.data[e.detail.value].en,
    });
    this.getFortune(this.data.fortuneName, this.data.type);
  },

  /** 获取实时星座运势 */
  getFortune(consName, type='month') {
    Api.getHoroscopet(consName,type).then((result) => {
      console.log('result.data', result.data)
      let fortuneData = result.data;
      if (type === 'today') {
        chartData.push(fortuneData.love);
        chartData.push(fortuneData.health);
        chartData.push(fortuneData.money);
        chartData.push(fortuneData.work);
        // initChart();
      }
      fortuneData.summary = fortuneData.summary ||  result.data.love
      this.setData({
        fortuneData,
      });
    });
  },

  onReady() {
    setTimeout(function () {
      // 获取 chart 实例的方式
      console.log(chart)
    }, 2000);
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