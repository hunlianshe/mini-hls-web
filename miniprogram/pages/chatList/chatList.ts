import * as Api from '../../service/api.service';
import { getDate } from '../../utils/utils';

Page({
  data: {
    userList: [], // 用户列表
    matcherImage: '../../public/image/matcher.png',
  },


  getChatList() {
    Api.getChatList().then((result: any) => {
      if (result) {
        const userList = result.data;
        userList.map((item: any) => {
          item.date = getDate(item.createdAt);
          return item;
        });
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
    
  },

  /** 去聊天 */
  goChat(e: any) {
    const { openid } = e.currentTarget.dataset;
    wx.navigateTo({
      url: `../chat/chat?openid=${openid}`,
    })
  },

  /** 红娘 */
  goMatchmaker() {
    wx.navigateTo({
      url: `../matchmaker/matchmaker`,
    })
  },

  onReady: function () {
  },

  onShow: function () {
    //获取聊天列表
    this.getChatList();
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