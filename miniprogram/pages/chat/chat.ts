import {getSocket, sendMessage } from '../../service/socket.service2';
import { getDate, getTime } from '../../utils/utils';
import * as Api from '../../service/api.service';
import * as ChatService from '../../service/chat.service';

Page({
  data: {
    openid: '', // 收信人的openid
    cid: '',
    me: {}, // 我的用户信息
    host: '', // 我的用户信息
    toUser: {}, // 接收人的用户信息
    userInfo: {}, // 用户信息
    message: '',  // 用户输入的消息
    pagination: {pageSize : 10, pageToken: ''},
    messageList: [],
  },

  onLoad: function (options:any) {
    // this.getUserInfo();
    let openid = options.openid;
    let cid = options.cid;
    this.setData!({
      cid: cid,
      openid: openid,
    });

    const user = wx.getStorageSync('user');
    this.setData!({
      me: user
    });
    this.readAllMessage();

    this.getToUserInfo(openid);
    const { pagination } = this.data;
    this.getMessageList(pagination.pageSize, pagination.pageToken);
    this.receiveMessage();
  },

  // 设置消息已读
  readAllMessage() {
    ChatService.updateMsgToReadStatus(this.data.cid);
  },

  getOpenid() {
    let openid: string = '';
    const user = wx.getStorageSync('user');
    openid = user.openid || '';
    return openid;
  },



  receiveMessage() {
    function getRandom(num: any){
      return Math.floor((Math.random()+Math.floor(Math.random()*9+1))*Math.pow(10,num-1));
    }
    console.log("准备接收消息")
    let socket = getSocket()
    socket.on("privateChat", (msg:any) => {
      console.log("接收到的消息是",msg)
      var messageList: any = this.data.messageList;
      console.log("getRandom(10)",getRandom(10));
      msg._id = getRandom(10)
      messageList.push(msg);
      console.log("`item${messageList.length}`",messageList.length)
      this.setData!({messageList})
      let toLast = `item${messageList.length}`
      console.log('toLast',toLast)
      this.setData!({
        scrollTop: 1000 * messageList.length  // 这里我们的单对话区域最高1000，取了最大值，应该有方法取到精确的
      });
    })
  },

  // 消息对方的信息
  getToUserInfo(openid: string) {
    Api.getUserInfo(openid).then((result: any) => {
      if (result) {
        const userInfo = result.data;
        this.setData!({
          toUser: userInfo
        });
      } else {
        throw new Error("获取用户信息失败");
      }
    });
  },

  /** 发送消息事件 */
  sendTap() {
    if(!this.data.message) return 
    sendMessage({cid: this.data.cid, msg: this.data.message, type: 1});
    this.setData!({
      msg: ''
    });
    this.setChatSession();
  },

  setChatSession() {
    let chatSession = wx.getStorageSync('chatSession');
    let dateNow = new Date();
    // 判断是否是同一天
    if (chatSession && chatSession.updateTime && new Date(chatSession.updateTime).toDateString() == dateNow.toDateString()) {
      // 去重后存入聊天人列表
      if (chatSession.openidList && chatSession.openidList.length > 0) {
        const index = chatSession.openidList.findIndex((openid: any) => openid === this.data.openid)
        if (index !== -1) {
          return;
        } else {
          chatSession.openidList.push(this.data.openid);
          chatSession = {
            updateTime: dateNow,
            openidList: chatSession.openidList,
          }
        }
      }
    } else {
      chatSession = {
        updateTime: dateNow,
        openidList: [this.data.openid]
      }
    }
    wx.setStorageSync("chatSession", chatSession);
  },

  /** 输入消息内容 */
  inputTap(e: any) {
    this.setData!({
      message: e.detail.detail.value // 获取输入的值
    })
  },

   /** 输入消息内容 */
   uploadImage(e: any) {
    sendMessage({cid: this.data.cid, msg: e.detail, type: 2})
  },

  getMessageList(pageSize: number, pageToken: string) {
    Api.getMessageByCid(this.data.cid, pageSize, pageToken).then((result:any) => {
      let resultList = result.data.result;
      let lastId = result.data.nextPageToken;
      this.setData!({
        pagination: {
          pageToken: lastId,
          pageSize: 10
        }
      })
      const dateAry: any[] = [];
      resultList = resultList.reverse();
      let { messageList } = this.data;
      messageList = resultList.concat(messageList);
      messageList.map((item: any) => {
        const date = getDate(item.createdAt);
        if (dateAry.indexOf(date) == -1) {
          item.date = date;
          dateAry.push(date);
        } else {
          item.date = '';
        }
        item.time = getTime(item.createdAt);
        return item;
      });
      this.setData!({
        messageList
      });
    })
  
  },

  // onPageScroll: function (res: any) {
  //  // 页面滚动时执行
  //  console.log('onPageScroll:', res)
  //   const { pagination } = this.data;
  //   if (res.scrollTop === 0 && pagination.pageToken !== '') {
  //     this.getMessageList(pagination.pageSize, pagination.pageToken);
  //   }
  // },

  onRefresh: function (e: any) {
    console.log('onRefresh', e)
    console.log('onRefresh', e.detail.scrollTop)
    const { pagination } = this.data;
    if (e.detail.scrollTop === 0 && pagination.pageToken !== '') {
      this.getMessageList(pagination.pageSize, pagination.pageToken);
    }
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
    ChatService.updateMsgToReadStatus(this.data.cid);
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