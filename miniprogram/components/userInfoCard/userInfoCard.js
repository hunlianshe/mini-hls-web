
Component({
  properties: {
    userInfo: {
      type: Object,
      value: {},
    },
  },

  data: {},

  methods: {
     /** 详情 */
    userDetail(e) {
      const { openid } = e.currentTarget.dataset;
      wx.navigateTo({
        url: `../userDetail/userDetail?openid=${openid}`,
      })
    },
  }
})
