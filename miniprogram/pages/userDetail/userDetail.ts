import * as Api from '../../service/api.service'; 


Page({
  data: {
    openid: '',
    userInfo: {} as any,
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
        this.setData!({
          userInfo,
        });
      }
    });
  },

  /** 关注(收藏)接口 */
  putUsersLike() {
    console.log('putUsersLike');
    const { openid } = this.data;
    Api.putUsersLike(openid).then((result: any) => {
      if (result.code == 200) {
        wx.showToast({
          title: '收藏成功',
          icon: 'success',
        });
      }
    });
  },

  onReady: function () {
  },


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