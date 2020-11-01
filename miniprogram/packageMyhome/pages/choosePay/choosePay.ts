// packageMyhome/pages/choosePay.js
Page({

  /**
   * Page initial data
   */
  data: {
    price: 0,
  },

  onLoad: function (options: any) {
    console.log(`===options===`, options);
    if (options.price) {
      this.setData!({
        price: options.price
      })
    }
  },

  wxPay: function() {
    console.log("wxPay");
  },

  coinPay: function() {
    console.log("coinPay");
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