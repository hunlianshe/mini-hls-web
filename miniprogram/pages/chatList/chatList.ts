
Page({
  data: {
    userList: [
      {
        "_id": "5f66e025bb97350949c52a97",
        "userIds": [
          "oHgB55LJ1wGo2QqEYxgo8tLMxL4A",
          "oHgB55AlhKqR7azr85YYBwfIE9EQ"
        ],
        "createId": "oHgB55AlhKqR7azr85YYBwfIE9EQ",
        "createdAt": "2020-09-20T04:52:53.115Z",
        "updatedAt": "2020-09-20T07:57:43.815Z",
        "lastMessage": {
          "cid": "5f66e025bb97350949c52a97",
          "type": 1,
          "msg": "hello lisa",
          "status": [
            {
              "openid": "oHgB55LJ1wGo2QqEYxgo8tLMxL4A",
              "msgUnread": true
            },
            {
              "openid": "oHgB55AlhKqR7azr85YYBwfIE9EQ",
              "msgUnread": true
            }
          ],
          "from": "oV2Js5THL6EdzDahAxCTxFoXyjHk",
          "fromName": "刘祖宽",
          "fromAvatarUrl": "https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83erbAfZ10K9richIBTz7kDsA9lUsVyzicShXgxw9zeMfekOUk6s7JGOVtCza5veuxvibsJyOOgVICwpPQ/132"
        }
      }
    ], // 用户列表
    matcherImage: '../../public/image/matcher.png',
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

  onReady: function () {

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