
const app = getApp();
import * as Api from '../../service/api.service';
import config from '../../config';
import {
  cityReplace,
} from '../../utils/utils';

import User from '../../interface/user';

Page({
  data: {
    user: {openid: ''},
    group: {},
    currentCity: '',
    selectValue: '',
    cityList: [],
    hotCityList: [],
    popHidden: true,
    hasStorage: false,
    auth: false,
  },

  onLoad: function (options:any) {
    if (options.auth) {
      this.setData!({
        auth: options.auth
      })
    }
    let _this = this;
    wx.getStorageInfo({
      success(res) {
        if (res.keys.indexOf('user') !== -1 &&
          res.keys.indexOf('currentCity') !== -1 &&
          res.keys.indexOf('userShopInfo') !== -1 &&
          !_this.data.auth) {
          _this.setData!({
            hasStorage: true
          })
          setTimeout(() => {
            wx.switchTab({
              url: '../home/home',
            })
          }, 1500);
        } else {
          _this.getOpenid();
          // _this.getCityList(); // 放入缓存
          // _this.getHotCityList();
          if (app.globalData.userLocation) {
            wx.showLoading({
              title: '定位中',
            })
            wx.getLocation({
              type: 'wgs84',
              success(res) {
                _this.getLocalCity(res.latitude, res.longitude);
              }
            })
          } else {
            _this.getWeChatCity();
          }
        }
      }
    })
  },

  getOpenid() {
    let _this = this;
    wx.login({
      success: function (data) {
        Api.getOpenid(data.code).then((result: any) => {
          if (result.code === 200) {
            _this.data.user.openid = result.data.openid;
            _this.setData!({
              user: _this.data.user
            });
          } else {
          }
        }).catch(() => {
        })
      },
      fail: function (err) {
        console.log('wx.login failed', err)
      }
    })
  },

  /** 获取城市列表 */
  getCityList() {
    Api.getCityList({}).then((result: any) => {
      if (result.code === 200) {
        const cityList = result.data;
        cityList.forEach((e: any) => {
          e.data.forEach((city: any) => {
            city.name = cityReplace(city.name);
          })
        });
        this.setData!({
          cityList: result.data,
        });
        wx.setStorage({
          key: 'cityList',
          data: result.data,
        });
      } else { }
    }).catch((err) => {
      console.log('getCityList err', err);
    })
  },

  /** 获取城市列表 */
  getHotCityList() {
    Api.getCityList({hot: 1}).then((result: any) => {
      if (result.code === 200) {
        const hotCityList = result.data;
        hotCityList.forEach((e:any) => {
          e.name = cityReplace(e.name);
        });
        this.setData!({
          hotCityList: result.data,
        });
        wx.setStorage({
          key: 'hotCityList',
          data: result.data,
        });
      } else { }
    }).catch((err) => {
      console.log('getHotCityList err', err);
    })
  },

  /** 获取定位 */
  getWeChatCity() {
    let _this = this
    wx.authorize({
      scope: "scope.userLocation",
      success() {
        wx.showLoading({
          title: '定位中',
        })
        wx.getLocation({
          type: 'wgs84',
          success(res) {
            app.globalData.userLocation = true;
            _this.getLocalCity(res.latitude, res.longitude);
          },
          fail() {
            _this.setData!({
              currentCity: "定位失败"
            });
          }
        })
      }
    });
  },

  /**
   * 获取定位城市
   * @param latitude 经度
   * @param longitude 纬度
   */
  getLocalCity(latitude: any, longitude: any) {
    let _this = this;
    wx.request({
      url: 'https://api.map.baidu.com/geocoder/v2/?ak=' + config.ak +'&location=' + latitude + ',' + longitude + '&output=json',
      data: {},
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res: any) {
        let city = res.data.result.addressComponent.city;
        city = cityReplace(city);
        _this.setData!({
          currentCity: city
        });
        wx.setStorage({
          key: 'currentCity',
          data: city,
        });
        wx.hideLoading();
      },
      fail: function () {
        _this.setData!({
          currentCity: "---"
        });
        wx.hideLoading();
      },
    })
  },

  /** 控制picker */
  popPicker() {
    let popHidden = this.data.popHidden;
    this.setData!({
      popHidden: !popHidden,
    })
  },

  /** 
   * 获取授权和用户信息
   * 创建用户（后端判断是否已经创建）
   * 跳转广场tabBar页
   */
  goHome(e:any) {
    this.getUser(e);
  },

  /** 获取用户信息 */
  getUser(e:any) {
    let userInfo: User = e.detail.userInfo;
    userInfo.openid = this.data.user.openid;
    console.log('userInfo', e.detail.userInfo);
    if (!userInfo.openid) {
      return;
    }
    Api.register(userInfo).then((result:any) => {
      if (result.code === 200) {
        userInfo.token = result.data.token;
        wx.setStorage({
          key: "user",
          data: userInfo,
          success: () => {
            wx.switchTab({
              url: `../home/home`,
            });
            // this.getUserShopInfo();
          }
        });
      }
    }).catch(() => {
    });
  },

  /** 选择城市 */
  doSelect(e: any) {
    if (e.detail.name) {
      this.setData!({
        popHidden: true,
        currentCity: e.detail.name,
      })
      wx.setStorage({
        key: 'currentCity',
        data: e.detail.name,
      });
    } else {  // 取消按钮
      this.setData!({
        popHidden: true,
      })
    }
  },

  onReady: function () {
  },
})