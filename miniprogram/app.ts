//app.ts
export interface IMyApp {
  userInfoReadyCallback?(res: wx.UserInfo): void
  globalData: {
    userInfo?: wx.UserInfo
  }
}

App<IMyApp>({
  /** onLaunch 小程序初始化完成时触发，全局只触发一次 */
  onLaunch() {
    console.log('onLaunch')
    // 展示本地存储能力
    var logs: number[] = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success(_res) {
        console.log('wx.login:', _res)
        // 发送 _res.code 到后台换取 openId, sessionKey, unionId
      }
    })
 
    /**
     * TODO 用户是否首次进入小程序，引导用户手机号注册
     * 若注册未成功或者用户未用手机注册，下次进来还视为首次
     */

    // 获取用户信息
    wx.getSetting({
      success: (res) => {
        console.log('getSetting: ', res)
        if (res.authSetting['scope.userInfo']) {
          // 【已经授权】，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          // 返回结果不知道在index页面加载完成之前还是之后完成
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res.userInfo)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
  }
})