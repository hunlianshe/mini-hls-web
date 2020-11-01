import * as Api from '../../service/api.service';
import { getDate } from '../../utils/utils';
import config from '../../config';

Page({
  data: {
    host:'',
    toOpenid:'',
    userList: [], // 用户列表
    me: {}, // 用户列表
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
    const user = wx.getStorageSync('user');
    console.log("user",user)
    console.log("hostUrl",config.hostUrl)
    this.setData!({
      me: user,
      host: config.hostUrl,
    });
  },

  /** 去聊天 */
  goChat(e: any) {
    console.log("e3wew",e.currentTarget.dataset)
    const { openids, cid } = e.currentTarget.dataset;
    console.log("openids",openids)
    this.getToUserByOpenids(openids)
    console.log("this.data.toOpenid",this.data.toOpenid)
    console.log("that.data.me.openid",this.data.me.openid)
    wx.navigateTo({
      url: `../chat/chat?openid=${this.data.toOpenid}&cid=${cid}`,
    })
  },

  /** 红娘 */
  goMatchmaker() {
    wx.navigateTo({
      url: `../matchmaker/matchmaker`,
    })
  },

  getToUserByOpenids(userIds){
    var that = this;
    userIds.forEach(userId => {
      if(that.data.me.openid !== userId){
        that.setData({toOpenid: userId})
      }
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