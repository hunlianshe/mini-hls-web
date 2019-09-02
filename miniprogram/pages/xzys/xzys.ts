const constellation1 = [
  {
    en: 'Aquarius',
    ch: '水瓶座',
    desc: '1月21日～2月19日'
  },
  {
    en: 'Aries',
    ch: '白羊座',
    desc: '3月21日～4月20日'
  },
  {
    en: 'Cancer',
    ch: '巨蟹座',
    desc: '6月22日～7月22日'
  },
  {
    en: 'Capricorn',
    ch: '摩羯座',
    desc: '12月22日～1月20日'
  },
  {
    en: 'Gemini',
    ch: '双子座',
    desc: '5月22日～6月21日'
  },
  {
    en: 'Leo',
    ch: '狮子座',
    desc: '7月23日～8月23日'
  },
  {
    en: 'Libra',
    ch: '天秤座',
    desc: '9月24日～10月23日'
  },
  {
    en: 'Pisces',
    ch: '双鱼座',
    desc: '2月20日～3月20日'
  },
  {
    en: 'Sagittarius',
    ch: '射手座',
    desc: '11月23日～12月21日'
  },
  {
    en: 'Scorpio',
    ch: '天蝎座',
    desc: '10月24日～11月22日'
  },
  {
    en: 'Taurus',
    ch: '金牛座',
    desc: '4月21～5月21日'
  },
  {
    en: 'Virgo',
    ch: '处女座',
    desc: '8月24日～9月23日'
  }
];


Page({
  data: {
    constellation: constellation1,
  },

  onLoad: function () {

  },

  /** 星座运势 */
  goXzysDetail() {
    wx.navigateTo({
      url: `../xzysDetail/xzysDetail`,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },
})