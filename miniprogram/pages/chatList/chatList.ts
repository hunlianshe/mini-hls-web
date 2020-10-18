import * as Api from '../../service/api.service';


Page({
  data: {
    userList: [], // 用户列表
    matcherImage: '../../public/image/matcher.png',
  },


  getChatList() {
    Api.getChatList().then((result: any) => {
      if (result) {
        const userList = result.data;
        console.log('userList:', userList)
        this.setData!({
          userList
        });
      } else {
        throw new Error("获取聊天列表失败");
      }
    });
  },

  onLoad: function () {
    //获取聊天列表
    this.getChatList();
  },

  /** 去聊天 */
  goChat(e: any) {
    const { openid } = e.currentTarget.dataset;
    wx.navigateTo({
      url: `../chat/chat?openid=${openid}`,
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