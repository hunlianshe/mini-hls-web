import {getSocket, sendMessage } from '../../service/socket.service2';
import { getDate, getTime, setRightStorage } from '../../utils/utils';
import * as Api from '../../service/api.service';

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
    console.log("okkkk")
    let openid = options.openid;
    let cid = options.cid;
    this.setData!({
      cid: cid
    });
    console.log("openid",openid)
    console.log("cid",cid)

    const user = wx.getStorageSync('user');
    console.log("user",user)
    // openid = user.openid || '';
    // return openid;
    this.setData!({
      me: user
    });

    this.getToUserInfo(openid);
    const { pagination } = this.data;
    this.getMessageList(pagination.pageSize, pagination.pageToken);
    this.receiveMessage();
  },

  getOpenid() {
    let openid: string = '';
    const user = wx.getStorageSync('user');
    openid = user.openid || '';
    return openid;
  },



  receiveMessage() {
    console.log("准备接收消息")
   let socket = getSocket()
   socket.on("privateChat", (msg:any) => {
     console.log("接收到的消息是",msg)
     var messageList: any = this.data.messageList;
     messageList.push(msg);
     this.setData!({messageList})
   })

  },

  // 消息对方的信息
  getToUserInfo(openid: string) {
    Api.getUserInfo(openid).then((result: any) => {
      if (result) {
        const userInfo = result.data;
        console.log('userInfo:', userInfo)
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
    sendMessage({cid: this.data.cid, msg: this.data.message, type: 1});
    console.log('send message:', this.data.message);
    // this.setChatSession();
  },

  setChatSession() {
    let chatSession = wx.getStorageSync('chatSession');
    let dateNow = new Date();
    // 判断是否是同一天
    if (chatSession.updateTime && chatSession.updateTime.toDateString() == dateNow.toDateString()) {
      // 去重后存入聊天人列表
      if (chatSession.openidList) {
        const index = chatSession.openidList.findIndex((openid: any) => openid === this.data.openid)
        if (index) {
          return;
        } else {
          chatSession = {
            updateTime: dateNow,
            openidList: chatSession.openidList.push(this.data.openid)
          }
        }
      }
    } else {
      chatSession = {
        updateTime: dateNow,
        openidList: [this.data.openid]
      }
    }
    console.log('chatSession:', chatSession)
    wx.setStorageSync("chatSession", chatSession);
    setRightStorage('fateChat');
  },

  /** 输入消息内容 */
  inputTap(e: any) {
    console.log('input message:', e);
    this.setData!({
      message: e.detail.detail.value // 获取输入的值
    })
  },

   /** 输入消息内容 */
   uploadImage(e: any) {
    console.log('upload image:', e.detail);
    sendMessage({cid: this.data.cid, msg: e.detail, type: 2})
  },

  getMessageList(pageSize: number, pageToken: string) {
    Api.getMessageByCid(this.data.cid, pageSize, pageToken).then((result:any) => {
      console.log("result.data",result.data)
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
        messageList,
      });
    })
  
  },

  onPageScroll: function (res: any) {
   // 页面滚动时执行
    const { pagination } = this.data;
    if (res.scrollTop === 0 && pagination.pageToken !== '') {
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