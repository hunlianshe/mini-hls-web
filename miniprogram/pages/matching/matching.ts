
Page({
  data: {
    headList: [{
      'src': '../../public/image/male.png',
      'left': '50%',
      'width': '80',
    }],
    headInterval: null,
    matching: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options: any) {
    console.log(options);
    // let headInterval = setInterval(() => {
    //   let headList = this.data.headList;
    //   if (headList.length > 10) {
    //     clearInterval(headInterval);
    //     return;
    //   }
    //   const windowWidth = wx.getSystemInfoSync().windowWidth
    //   let left = 80 + Math.random() * (windowWidth - 160);
    //   let width = 60 + Math.random() * 40;
    //   console.log('left', left);
    //   headList.push({
    //     'src': '../../public/image/xzpd.png',
    //     'left': left.toString(),
    //     'width': width.toString(),
    //   });
    //   this.setData!({
    //     headList,
    //   });
    // }, 2000);
    // this.setData!({
    //   headInterval,
    // });
    setTimeout(() => {
      this.setData!({
        matching: false,
      });
      setTimeout(() => {
        wx.navigateTo({
          url: '../matchResult/matchResult',
        });
      }, 1000);
    }, 3500);
  },

  onReady: function () {

  },

  onShow: function () {

  },

  onHide: function () {

  },

  onUnload: function () {
    this.setData!({
      headInterval: null,
    });
  },

  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

})