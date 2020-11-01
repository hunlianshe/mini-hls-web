import {getSocket, sendMessage } from '../../service/socket.service2';
import { getDate, getTime } from '../../utils/utils';
import * as Api from '../../service/api.service';

Page({
  data: {
    openid: '',
    cid: '',
    me: {}, //我的用户信息
    host: '', //我的用户信息
    toUser: {}, //接收人的用户信息
    userInfo: {}, // 用户信息
    message: '',  // 用户输入的消息
    pagination: {pageSize : 50, pageToken: ''},
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
    this.getMessageList();
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
   })

  },

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
    // TODO
    // to do
    sendMessage({cid: this.data.cid, msg: this.data.message, type: 1})
    console.log('send message:', this.data.message);
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

    // this.setData!({
    //   message: e.detail.detail.value // 获取输入的值
    // })
  },


  getMessageList() {
    // const messageList: any = [
    //   {
    //     "_id": "5f66e2f82735248c31b97bd8",
    //     "type": 1,
    //     "cid": "5f66e025bb97350949c52a97",
    //     "msg": "hello lisa",
    //     "status": [
    //       {
    //         "msgUnRead": false,
    //         "_id": "5f66e2f82735248c31b97bda",
    //         "openid": "oHgB55LJ1wGo2QqEYxgo8tLMxL4A"
    //       },
    //       {
    //         "msgUnRead": true,
    //         "_id": "5f66e2f82735248c31b97bd9",
    //         "openid": "oHgB55AlhKqR7azr85YYBwfIE9EQ"
    //       }
    //     ],
    //     "from": "oHgB55LJ1wGo2QqEYxgo8tLMxL4A",
    //     "updatedAt": "2020-09-20T05:04:56.688Z",
    //     "createdAt": "2020-09-20T05:04:56.688Z"
    //   },
    //   {
    //     "_id": "5f66e2f82735248c31b97bd8",
    //     "type": 1,
    //     "cid": "5f66e025bb97350949c52a97",
    //     "msg": "吃饭了吗",
    //     "status": [
    //       {
    //         "msgUnRead": false,
    //         "_id": "5f66e2f82735248c31b97bda",
    //         "openid": "oHgB55LJ1wGo2QqEYxgo8tLMxL4A"
    //       },
    //       {
    //         "msgUnRead": true,
    //         "_id": "5f66e2f82735248c31b97bd9",
    //         "openid": "oHgB55AlhKqR7azr85YYBwfIE9EQ"
    //       }
    //     ],
    //     "from": "oHgB55AlhKqR7azr85YYBwfIE9EQ",
    //     "updatedAt": "2020-09-20T05:04:56.688Z",
    //     "createdAt": "2020-09-20T05:04:56.688Z"
    //   },
    // ];
    Api.getMessageByCid(this.data.cid, this.data.pagination.pageSize, this.data.pagination.pageToken).then((result:any) => {
      console.log("result.data",result.data)
      this.setData!({
        pagination: {
          pageToken: result.data.pageToken
        }// 获取输入的值
      })
     let  messageList = result.data.result
      const dateAry: any[] = [];
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