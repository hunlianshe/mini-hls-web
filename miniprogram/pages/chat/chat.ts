import * as Api from '../../service/api.service';

Page({

  data: {
    userInfo: {}, // 用户信息
    message: '',  // 用户输入的消息
    messageList: [
      {
        "_id": "5f66e2f82735248c31b97bd8",
        "type": 1,
        "cid": "5f66e025bb97350949c52a97",
        "msg": "hello lisa",
        "status": [
          {
            "msgUnRead": false,
            "_id": "5f66e2f82735248c31b97bda",
            "openid": "oHgB55LJ1wGo2QqEYxgo8tLMxL4A"
          },
          {
            "msgUnRead": true,
            "_id": "5f66e2f82735248c31b97bd9",
            "openid": "oHgB55AlhKqR7azr85YYBwfIE9EQ"
          }
        ],
        "from": "oHgB55LJ1wGo2QqEYxgo8tLMxL4A",
        "updatedAt": "2020-09-20T05:04:56.688Z",
        "createdAt": "2020-09-20T05:04:56.688Z"
      },
    ],
  },

  onLoad: function () {
    this.getUserInfo();
  },

  getOpenid() {
    let openid: string = '';
    const user = wx.getStorageSync('user');
    openid = user.openid || '';
    return openid;
  },

  getUserInfo() {
    const openid = this.getOpenid();
    Api.getUserInfo(openid).then((result: any) => {
      if (result) {
        const userInfo = result.data;
        console.log('userInfo:', userInfo)
        this.setData!({
          userInfo
        });
      } else {
        throw new Error("获取用户信息失败");
      }
    });
  },

  /** 发送消息事件 */
  sendTap() {
    // TODO
    console.log('send message:', this.data.message);
  },

  /** 输入消息内容 */
  inputTap(e: any) {
    console.log('input message:', e);
    this.setData!({
      message: e.detail.detail.value // 获取输入的值
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