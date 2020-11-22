import * as Api from '../../service/api.service'; 
import { dealFateChatIntercept } from "../../utils/utils";

Page({
  data: {
    openid: "",
    userInfo: {} as any,
    showDialog: false,
  },

  onLoad: function (options: any) {
    this.setData!({
      openid: options.openid,
    });
    this.getUserInfo(options.openid);
  },

  /** 获取用户信息 */
  getUserInfo(openid: string) {
    Api.getUserInfo(openid).then((result: any) => {
      if (result.code == 200) {
        const userInfo = result.data;
        userInfo.intro = [];
        if (userInfo.age) {
          userInfo.intro.push(userInfo.age);
        }
        if (userInfo.jobGeneral) {
          userInfo.intro.push(userInfo.jobGeneral);
        }
        if (userInfo.jobDetail) {
          userInfo.intro.push(userInfo.jobDetail);
        }
        if (userInfo.education) {
          userInfo.intro.push(userInfo.education);
        }
        userInfo.intro = userInfo.intro.join(" | ");
        this.setData!({
          userInfo,
        });
      }
    });
  },

  /** 关注(收藏)接口 */
  putUsersLike() {
    const { openid } = this.data;
    Api.putUsersLike(openid).then((result: any) => {
      if (result.code == 200) {
        wx.showToast({
          title: "收藏成功",
          icon: "success",
        });
      }
    });
  },

  /** 去聊天 */
  goChat() {
    if (dealFateChatIntercept(this.data.openid)) {
      this.setData!({
        showDialog: true,
      });
      return;
    }
    // 开始回话
    Api.startChatSession({
      userIds: [this.data.openid],
    }).then((result: any) => {
      if (result.code == 200) {
        console.log(`start chat session result`, result.data);
        wx.navigateTo({
          url: `../chat/chat?openid=${this.data.openid}&cid=${result.data._id}`,
        });
      }
    });
  },

  closeDialog: function() {
    this.setData!({
      showDialog: false
    })
  },

  onReady: function () {},

  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},
});