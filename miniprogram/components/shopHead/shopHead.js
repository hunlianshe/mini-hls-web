// components/shopHead/shopHead.js
const {
  phoneCall,
} = require('../../utils/utils');

Component({
  properties: {
    shopInfo: {
      type: Object,
      value: {}
    },
    shopIntro: {
      type: Boolean,
      value: true
    }
  },

  data: {
    needFollow: true
  },

  methods: {
    followShop(e) {
      const myEventDetail = {
        id: e.currentTarget.dataset.id,
        follow: e.currentTarget.dataset.follow
      } // detail对象，提供给事件监听函数
      const myEventOption = {} // 触发事件的选项
      this.triggerEvent('followshop', myEventDetail, myEventOption)
    },

    popWechat(e) {
      this.triggerEvent('popWechat', {}, {})
    },

    phoneCall(e) {
      phoneCall(e);
    },

    /**
     * 设置剪贴板
     */
    setClipboardData(e) {
      const shopInfo = this.properties.shopInfo;
      let address = shopInfo.address;
      wx.setClipboardData({
        data: address,
        success(res) {
          wx.getClipboardData({
            success(res) {
            }
          })
        }
      })
    },
  },

  lifetimes: {
    attached() {
      // this.getUserInfo();
    },
    detached() {
      // 在组件实例被从页面节点树移除时执行
    },
  }
})
