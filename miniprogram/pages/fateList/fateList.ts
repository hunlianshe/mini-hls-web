import * as Api from '../../service/api.service';
import { dealRightIntercept, setRightStorage } from '../../utils/utils';

Page({
  data: {
    _active: '1',
    listLikes: [] as any[],
    showDialog: false,
  },

  onLoad: function (options: any) {
    this.setData!({
      _active: options.type,
    });
    this.getUsersListLikes(this.data._active);
  },

  onReady: function () {
  },

  /** 获取对应喜欢类别的用户列表 */
  getUsersListLikes(active: string) {
    let type = 'likeMe';
    switch (active) {
      case '1':
        type = 'meLike';
        break;
      case '2':
        type = 'likeMe';
        break;
      case '3':
        type = 'likeEachOther';
        break;
      default:
        break;
    }
    const params = { type, }
    Api.getUsersListLikes(params).then((result: any) => {
      if (result) {
        const listLikes:any = result.data;
        listLikes.forEach((like: any) => {
          if (like.photos && like.photos.length) {
            like.avatarUrl = like.photos[0]
          }
        })
        
        this.setData!({
          listLikes,
        });
      }
    });
  },

  /** 切换tab */
  switchTab(e: any) {
    const index = e.currentTarget.dataset.index;
    this.setData!({
      _active: index,
    });
    let rightType = '';
    if (index == 2) { // 喜欢我
      rightType = 'whoLikeMe';
    } else if (index == 3) { // 相互喜欢
      rightType = 'likeEach';
    }
    // 处理拦截并返回是否需要被拦截
    if (dealRightIntercept(rightType)) {
      this.setData!({
        showDialog: true,
      })
      return;
    }
    setRightStorage(rightType);
    this.getUsersListLikes(this.data._active);
  },

  closeDialog() {
    this.setData!({
      showDialog: false,
    });
  },

  /** 详情 */
  userDetail(e: any) {
    const { openid } = e.currentTarget.dataset;
    wx.navigateTo({
      url: `../userDetail/userDetail?openid=${openid}`,
    })
  },

  /** 去聊天 */
  goChat(e: any) {
    const { openid } = e.currentTarget.dataset;
    wx.navigateTo({
      url: `../chat/chat?openid=${openid}`,
    })
  },

  onShow: function () {

  },

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