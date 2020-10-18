
import * as Api from '../../service/api.service';

Page({
  data: {
    user: { openid: '' },
    userInfo: {},
    userStatistics: {},
    pageLoaded: false,
    meLike: 0,
    likeMe: 0,
    likeEachOther: 0,
    openVipImage: '../../public/image/openVip.png',
  },

  onLoad: function () {
    let _this = this
    wx.getStorage({
      key: 'user',
      success: function(res) {
        _this.setData!({
          user: res.data
        })
      },
    });
    this.getUserInfo();
    this.getUsersLikeCount();
    this.setData!({
      pageLoaded: true,
    })
  },

  /** 获取用户信息 */
  getUserInfo() {
    let _this = this;
    wx.getStorage({
      key: 'user',
      success: function (res) {
        const { openid } = res.data;
        _this.requestForUserInfo(openid);
      },
    });
  },
  requestForUserInfo(openid: string) {
    Api.getUserInfo(openid).then((result: any) => {
      if (result) {
        const userInfo = result.data;
        this.setData!({
          userInfo,
          // userStatistics: userInfo.statistics,
        });
        //   wx.setStorage({
        //     key: 'userShopInfo',
        //     data: userInfo,
        //   });
      }
    });
  },

  /** 获取喜欢的类别和数量 */
  getUsersLikeCount() {
    Api.getUsersLikeCount().then((result: any) => {
      if (result) {
        const usersLikeCount = result.data;
        let meLike, likeMe, likeEachOther;
        usersLikeCount.forEach((e: any) => {
          if (e.type === "meLike") {
            meLike = e.count;
          } else if (e.type === "likeMe") {
            likeMe = e.count;
          } else {
            likeEachOther = e.count;
          }
        });
        this.setData!({
          meLike,
          likeMe,
          likeEachOther,
        });
      }
    });
  },

  /** 心理测试列表 */
  goXlcsList() {
    wx.navigateTo({
      url: `../xlcsList/xlcsList`,
    })
  },

  register() {
    wx.navigateTo({
      url: `../register/register`,
    })
  },

  myImages() {
    wx.navigateTo({
      url: `../myImages/myImages`,
    })
  },

  goMatchStandard() {
    wx.navigateTo({
      url: `../registerStandard/registerStandard?type=usercenter`,
    })
  },

  /** 红娘 */
  goMatchmaker(): any {
    wx.navigateTo({
      url: `../matchmaker/matchmaker`,
    })
  },

  /** 喜欢人列表 */
  goFateList(e: any) {
    // const id = this.data.userInfo.Shop.id;
    const { type } = e.currentTarget.dataset;
    wx.navigateTo({
      url: `../fateList/fateList?type=${type}`,
    })
  },

  /** 开动会员 */
  openVip() {
    console.log('openVip');
  },

  onReady: function () {

  },

  onShow: function () {
    // const { pageLoaded } = this.data;
    // if (pageLoaded) {
    //   this.getUserInfo();
    // }
    let _this = this;
    wx.getStorage({
        key: 'user',
        success: function (res) {
            _this.setData!({
                user: res.data
            });
        },
    });
    this.getUserInfo();
    this.getUsersLikeCount();
  },

  onHide: function () {

  },

  onUnload: function () {

  },
})