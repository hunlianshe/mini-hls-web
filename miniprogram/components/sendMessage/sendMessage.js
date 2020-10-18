/**
 * 支持图片文字
 */
Component({
  properties: {
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    sendTap() {
      this.triggerEvent('sendTap', {}, {})
    },
    inputTap(e) {
      this.triggerEvent('inputTap', e, {})
    },
  }
})
