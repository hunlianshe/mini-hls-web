import * as Api from '../../service/api.service';
import xzList from '../../public/json/zxList';

Page({
  data: {
    dataIndex: 0,
    me: '',
    he: '',
    fortuneData: {
      title: '',
      grade: '',
      content: ''
    },
    xzList: xzList.data,
  },

  onLoad: function (options: any) {
    let me = options.me;
    let he = options.he;
    this.setData!({
      me,
      he,
    })
    this.getConstellationMmatchingDetail(me, he);
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
    me = me.replace(/座/, '');
    he = he.replace(/座/, '');
    Api.getConstellationMmatchingDetail(me, he).then((result: any) => {
      let fortuneData = result.data;
      this.setData!({
        fortuneData,
      });
    });
  },

  submit() {
    let {
      me,
      he
    } = this.data;
    this.getConstellationMmatchingDetail(me, he);
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