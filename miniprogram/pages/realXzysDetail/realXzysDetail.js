import * as Api from '../../service/api.service.js';
import xzList from '../../public/json/zxList.js';
import * as echarts from '../../ec-canvas/echarts';

function setOption(chart, chartData) {
  const option = {
    title: {
      text: ''
    },
    tooltip: {},
    legend: {
      data: []
    },
    radar: {
      shape: 'circle',
      name: {
        textStyle: {
          color: '#E39BF0',
          backgroundColor: '#fff',
          borderRadius: 0,
          padding: [3, 5],
          fontSize: 12,
        }
      },
      indicator: [
        { name: '真爱', max: 100 },
        { name: '健康', max: 100 },
        { name: '赚钱', max: 100 },
        { name: '工作', max: 100 },
      ]
    },
    series: [{
      name: '',
      type: 'radar',
      data: [
        {
          value: chartData,
          name: '四维分析',
          lineStyle: {
            normal: {
              type: 'dashed'
            }
          }
        },
      ]
    }]
  };
  chart.setOption(option);
}

Page({
  data: {
    ec: {
      // onInit: initChart
      // 将 lazyLoad 设为 true 后，需要手动初始化图表
      lazyLoad: true
    },
    isLoaded: false,
    isDisposed: false,
    chartData: [],
    dataIndex: 0,
    fortuneName: '',
    fortuneNameEn: 'Aquarius',
    fortuneData: {},
    xzList: xzList.data,
    dateType: '今日',
    type: 'today',
  },

  onLoad: function (options) {
    console.log('options', options);
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
    this.getFortune(options.consName, options.type);
  },

  onReady: function () {
    // 获取组件
    // this.ecComponent = this.selectComponent('#mychart-dom-bar');
  },
  // 点击按钮后初始化图表
  init: function (chartData) {
    this.ecComponent = this.selectComponent('#mychart-dom-bar');
    this.ecComponent.init((canvas, width, height) => {
      // 获取组件的 canvas、width、height 后的回调函数
      // 在这里初始化图表
      const chart = echarts.init(canvas, null, {
        width: width,
        height: height
      });
      setOption(chart, chartData);

      // 将图表实例绑定到 this 上，可以在其他成员函数（如 dispose）中访问
      this.chart = chart;
      this.chart.dispose();

      // 注意这里一定要返回 chart 实例，否则会影响事件处理等
      return chart;
    });
  },

  otherPick: function (e) {
    this.setData({
      fortuneName: xzList.data[e.detail.value].ch,
      fortuneNameEn: xzList.data[e.detail.value].en,
    });
    this.getFortune(this.data.fortuneName, this.data.type);
  },

  /** 获取实时星座运势 */
  getFortune(consName, type = 'month') {
    Api.getHoroscopet(consName, type).then((result) => {
      let fortuneData = result.data;
      let chartData = [];
      if (type === 'today') {
        chartData.push(fortuneData.love.replace(/%/, ""));
        chartData.push(fortuneData.health.replace(/%/, ""));
        chartData.push(fortuneData.money.replace(/%/, ""));
        chartData.push(fortuneData.work.replace(/%/, ""));
        this.init(chartData); // 图表
      } else {
        fortuneData.month = fortuneData.month.replace(/0/, "");
      }
      fortuneData.summary = fortuneData.summary || result.data.love
      this.setData({
        fortuneData,
      });
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

})