
import * as Api from '../../service/api.service';
import { dealRightIntercept, setRightStorage, formatHLSTime } from '../../utils/utils';

Page({
  data: {
    user: { openid: '' },
    userInfo: { vipType : '' },
    pageLoaded: false,
    meLike: 0,
    likeMe: 0,
    likeEachOther: 0,
    openVipImage: '../../public/image/openVip.jpg',
    showDialog: false,
  },

  onLoad: function () {
    let _this = this
    wx.getStorage({
      key: 'user', // 用户头像信息
      success: function(res) {
        _this.setData!({
          user: res.data
        });
      },
    });
    this.getUserInfo();
    this.getUsersLikeCount();
    this.setData!({
      pageLoaded: true,
    });
  },

  /** 获取用户信息 */
  getUserInfo() {
    let _this = this;
    wx.getStorage({
      key: 'user', // 用户头像信息
      success: function (res) {
        const { openid } = res.data;
        _this.requestForUserInfo(openid);
      },
    });
  },
  requestForUserInfo(openid: string) {
    let _this = this;
    Api.getUserInfo(openid).then((result: any) => {
      if (result) {
        const userInfo = result.data;
        userInfo.vipExpireAt = formatHLSTime(userInfo.vipExpireAt);
        _this.setData!({
          userInfo,
        });
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

  /** 充值 */
  goRecharge(): any {
    wx.navigateTo({
      url: `../../packageMyhome/pages/recharge/recharge`,
    })
  },

  /** 
   * 喜欢我列表
   * 我喜欢
   * 相互喜欢
   */
  goFateList(e: any) {
    const { type } = e.currentTarget.dataset;
    let rightType = '';
    if (type == 2) { // 喜欢我
      rightType = 'whoLikeMe';
    } else if (type == 3) { // 相互喜欢
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
    wx.navigateTo({
      url: `../fateList/fateList?type=${type}`,
    });
  },

  closeDialog() {
    this.setData!({
      showDialog: false,
    });
  },

  /** 开通会员 */
  openVip(e: any) {
    const id = e.currentTarget.dataset.id
    console.log(`open vip:`, id);
    wx.navigateTo({
      url: `../../packageMyhome/pages/vipCenter/vipCenter?type=${id}`,
    });
  },

  onReady: function () {

  },

  onShow: function () {
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