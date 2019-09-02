// components/pickCity.js

import * as apiServicePro from '../../service/api.service';;
const {
  cityReplace,
  showModal,
} = require('../../utils/utils.js');

Component({
  /**
   * 组件的属性列表
   */
  properties: {
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentView: '',
    cityList: '',
    hotCityList: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    doSelsct(e) {
      let myEventDetail = { 
        id: e.currentTarget.dataset.id,
        name: e.currentTarget.dataset.name,
      }; // detail对象，提供给事件监听函数
      let myEventOption = {}; // 触发事件的选项
      this.triggerEvent('pickevent', myEventDetail, myEventOption)
    },

    jumpToView(e) {
      this.setData({
        currentView: e.currentTarget.dataset.code
      })
    },

    /** 获取城市列表 */
    getCityList() {
      apiServicePro.getCityList({}, '0').then((result) => {
        if (result.code === 200) {
          const cityList = result.data;
          cityList.forEach((e) => {
            e.data.forEach((city) => {
              city.name = cityReplace(city.name);
            })
          });
          this.setData({
            cityList: result.data,
          });
        } else { }
      }).catch((err) => {
        console.log('getCityList', err);
      })
    },

    /** 获取城市列表 */
    getHotCityList() {
      apiServicePro.getCityList({ hot: 1 }, '0').then((result) => {
        if (result.code === 200) {
          const hotCityList = result.data;
          hotCityList.forEach((e) => {
            e.name = cityReplace(e.name);
          });
          this.setData({
            hotCityList: result.data,
          });
        } else { }
      }).catch((err) => {
        console.log('getHotCityList', err);
      })
    },
  },

  lifetimes: {
    attached() {
      this.getCityList();
      this.getHotCityList();
    },
    detached() {
      // 在组件实例被从页面节点树移除时执行
    },
  }
})
