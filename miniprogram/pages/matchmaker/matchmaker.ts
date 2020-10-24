import serviceConfig from './serviceConfig';

Page({
  data: {
    active: '1',
    serviceConfig: serviceConfig,
  },

  onLoad: function () {
    console.log(serviceConfig)
  },

  switchTab(e: any) {
    this.setData!({
      active: e.currentTarget.dataset.active,
    });
  },
  phoneCall() {
    const phone = '18057313715'
    wx.makePhoneCall({
      phoneNumber: phone,
    })
  },

  onReady: function () {

  },

  onShow: function () {

  },

  onHide: function () {

  },

  onUnload: function () {

  },

  onPullDownRefresh: function () {

  },

  onReachBottom: function () {

  },
})