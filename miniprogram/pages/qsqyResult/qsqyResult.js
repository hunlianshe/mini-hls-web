import * as Api from '../../service/api.service.js';
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
          color: '#666666', 
          fontSize: 6,
        }
      },
      indicator: [
        { name: `体贴 ${chartData[0]}`, max: 10 },
        { name: `异性 ${chartData[1]}`, max: 10 },
        { name: `温柔 ${chartData[2]}`, max: 10 },
        { name: `家务 ${chartData[3]}`, max: 10 },
        { name: `吵架 ${chartData[4]}`, max: 10 },
      ],
      radius: 50,
      center: ['50%', '60%'],
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
    pastLoveData: {},
    isLoaded: false,
    isDisposed: false,
    chartData: [5, 5, 5, 5, 5],
    userInfo: {}, 
  },

  onLoad: function () {
    let _this = this;
    this.getPastLove();
    wx.getStorage({
      key: 'user',
      success: function (res) {
        console.log('user', res)
        _this.setData({
          userInfo: res.data
        })
      },
    });
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

  /** 前世情缘 */
  getPastLove() {
    Api.getPastLove().then((result) => {
      let pastLoveData = result.data;
      let chartData = [];
      chartData.push(pastLoveData.considerStandard ? pastLoveData.considerStandard : 5);
      chartData.push(pastLoveData.hsexualStandard ? pastLoveData.hsexualStandard : 5);
      chartData.push(pastLoveData.gentleStandard ? pastLoveData.gentleStandard : 5);
      chartData.push(pastLoveData.hworkStandard ? pastLoveData.hworkStandard : 5);
      chartData.push(pastLoveData.quarrelStandard ? pastLoveData.quarrelStandard : 5);
      this.init(chartData);   // 图表
      this.setData({
        pastLoveData,
      });
    });
  },

  createCanvas() {
    const ctx = wx.createCanvasContext('qsqy', this);
    // ctx.
  }

})