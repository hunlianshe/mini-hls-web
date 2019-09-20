import * as Api from '../../service/api.service';
import xzList from '../../public/json/zxList';

Page({
  data: {
    dataIndex: 0,
    me: '',
    he: '',
    fortuneData: {
      title: "白羊座：金牛座",
      grade: "友情：★★爱情：★★★婚姻：★★亲情：★★",
      content: "节奏不同是你们天生的问题，一个冲动，一个慢半拍，要把你们放在同一个世界一起生活，看来大家要非常容忍对方，如果不是，很难看到长远。白羊座的人喜欢用强烈的追求攻势去攻陷金牛座的人的心，但金牛座固执求稳的性格，必然会深思熟虑才肯接受追求，中间拉拉扯扯的时候，可能白羊座已经忍不住转身就走。如果真是可以走在一起，大家不妨用双打网球的原理，一个补、一个攻，也许能够创出光明的前途，大前提当然是已经能理解和接受对方的特性。假如金牛座一方是男性，白羊座的女性就要更主动、加大追求力度。白羊座的人还要学习金牛座深思熟虑的处事态度，明白这点，大家都有好处的。性生活方面，金牛喜欢耳鬓撕磨，白羊则速战速决，有时候要学会迁就对方了。"
    },
    xzList: xzList.data,
  },

  onLoad: function (options: any) {
    this.setData!({
      me: options.me,
      he: options.he,
    })
    this.getConstellationMmatchingDetail(options.me, options.he);
  },

  myPick: function (e: any) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData!({
      me: xzList.data[e.detail.value].ch,
    });
  },

  otherPick: function (e: any) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData!({
      he: xzList.data[e.detail.value].ch,
    });
  },

  /** 获取星座详解 */
  getConstellationMmatchingDetail(me: string, he: string) {
    Api.getConstellationMmatchingDetail(me, he).then((result: any) => {
      let fortuneData = result.data;
      this.setData!({
        fortuneData,
      });
    });
  },

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

})