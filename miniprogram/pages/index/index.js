"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app = getApp();
const Api = require("../../service/api.service");
const config_1 = require("../../config");
const utils_1 = require("../../utils/utils");
Page({
    data: {
        user: { openid: '' },
        group: {},
        currentCity: '',
        selectValue: '',
        cityList: [],
        hotCityList: [],
        popHidden: true,
        hasStorage: false,
        auth: false,
    },
    onLoad: function (options) {
        if (options.auth) {
            this.setData({
                auth: options.auth
            });
        }
        let _this = this;
        wx.getStorageInfo({
            success(res) {
                if (res.keys.indexOf('user') !== -1 &&
                    res.keys.indexOf('currentCity') !== -1 &&
                    res.keys.indexOf('userShopInfo') !== -1 &&
                    !_this.data.auth) {
                    _this.setData({
                        hasStorage: true
                    });
                    setTimeout(() => {
                        wx.switchTab({
                            url: '../home/home',
                        });
                    }, 1500);
                }
                else {
                    _this.getOpenid();
                    _this.getCityList();
                    _this.getHotCityList();
                    if (app.globalData.userLocation) {
                        wx.showLoading({
                            title: '定位中',
                        });
                        wx.getLocation({
                            type: 'wgs84',
                            success(res) {
                                _this.getLocalCity(res.latitude, res.longitude);
                            }
                        });
                    }
                    else {
                        _this.getWeChatCity();
                    }
                }
            }
        });
    },
    getOpenid() {
        let _this = this;
        wx.login({
            success: function (data) {
                Api.getOpenid(data.code).then((result) => {
                    if (result.code === 200) {
                        _this.data.user.openid = result.data.openid;
                        _this.setData({
                            user: _this.data.user
                        });
                    }
                    else {
                    }
                }).catch(() => {
                });
            },
            fail: function (err) {
                console.log('wx.login failed', err);
            }
        });
    },
    getCityList() {
        Api.getCityList({}).then((result) => {
            if (result.code === 200) {
                const cityList = result.data;
                cityList.forEach((e) => {
                    e.data.forEach((city) => {
                        city.name = utils_1.cityReplace(city.name);
                    });
                });
                this.setData({
                    cityList: result.data,
                });
                wx.setStorage({
                    key: 'cityList',
                    data: result.data,
                });
            }
            else { }
        }).catch((err) => {
            console.log('getCityList err', err);
        });
    },
    getHotCityList() {
        Api.getCityList({ hot: 1 }).then((result) => {
            if (result.code === 200) {
                const hotCityList = result.data;
                hotCityList.forEach((e) => {
                    e.name = utils_1.cityReplace(e.name);
                });
                this.setData({
                    hotCityList: result.data,
                });
                wx.setStorage({
                    key: 'hotCityList',
                    data: result.data,
                });
            }
            else { }
        }).catch((err) => {
            console.log('getHotCityList err', err);
        });
    },
    getWeChatCity() {
        let _this = this;
        wx.authorize({
            scope: "scope.userLocation",
            success() {
                wx.showLoading({
                    title: '定位中',
                });
                wx.getLocation({
                    type: 'wgs84',
                    success(res) {
                        app.globalData.userLocation = true;
                        _this.getLocalCity(res.latitude, res.longitude);
                    },
                    fail() {
                        _this.setData({
                            currentCity: "定位失败"
                        });
                    }
                });
            }
        });
    },
    getLocalCity(latitude, longitude) {
        let _this = this;
        wx.request({
            url: 'https://api.map.baidu.com/geocoder/v2/?ak=' + config_1.default.ak + '&location=' + latitude + ',' + longitude + '&output=json',
            data: {},
            header: {
                'Content-Type': 'application/json'
            },
            success: function (res) {
                let city = res.data.result.addressComponent.city;
                city = utils_1.cityReplace(city);
                _this.setData({
                    currentCity: city
                });
                wx.setStorage({
                    key: 'currentCity',
                    data: city,
                });
                wx.hideLoading();
            },
            fail: function () {
                _this.setData({
                    currentCity: "---"
                });
                wx.hideLoading();
            },
        });
    },
    popPicker() {
        let popHidden = this.data.popHidden;
        this.setData({
            popHidden: !popHidden,
        });
    },
    goHome(e) {
        this.getUser(e);
    },
    getUser(e) {
        let userInfo = e.detail.userInfo;
        userInfo.openid = this.data.user.openid;
        if (!userInfo.openid) {
            return;
        }
        Api.insertUser(userInfo).then((result) => {
            if (result.code === 200) {
                userInfo.token = result.data.token;
                wx.setStorage({
                    key: "user",
                    data: userInfo,
                    success: () => {
                        this.getUserShopInfo();
                    }
                });
            }
        }).catch(() => {
        });
    },
    getUserShopInfo() {
        Api.getUserInfo().then((result) => {
            if (result) {
                const userShopInfo = result.data;
                wx.setStorage({
                    key: 'userShopInfo',
                    data: userShopInfo,
                });
                if (this.data.auth == true) {
                    wx.navigateBack({
                        delta: 2
                    });
                }
                else {
                    wx.switchTab({
                        url: `../home/home`,
                    });
                }
            }
        });
    },
    doSelect(e) {
        if (e.detail.name) {
            this.setData({
                popHidden: true,
                currentCity: e.detail.name,
            });
            wx.setStorage({
                key: 'currentCity',
                data: e.detail.name,
            });
        }
        else {
            this.setData({
                popHidden: true,
            });
        }
    },
    onReady: function () {
    },
    onShow: function () {
    },
    onHide: function () {
    },
    onUnload: function () {
    },
    onReachBottom: function () {
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLE1BQU0sR0FBRyxHQUFHLE1BQU0sRUFBRSxDQUFDO0FBQ3JCLGlEQUFpRDtBQUNqRCx5Q0FBa0M7QUFDbEMsNkNBRTJCO0FBRTNCLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxFQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUM7UUFDbEIsS0FBSyxFQUFFLEVBQUU7UUFDVCxXQUFXLEVBQUUsRUFBRTtRQUNmLFdBQVcsRUFBRSxFQUFFO1FBQ2YsUUFBUSxFQUFFLEVBQUU7UUFDWixXQUFXLEVBQUUsRUFBRTtRQUNmLFNBQVMsRUFBRSxJQUFJO1FBQ2YsVUFBVSxFQUFFLEtBQUs7UUFDakIsSUFBSSxFQUFFLEtBQUs7S0FDWjtJQUVELE1BQU0sRUFBRSxVQUFVLE9BQVc7UUFDM0IsSUFBSSxPQUFPLENBQUMsSUFBSSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxPQUFRLENBQUM7Z0JBQ1osSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJO2FBQ25CLENBQUMsQ0FBQTtTQUNIO1FBQ0QsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLEVBQUUsQ0FBQyxjQUFjLENBQUM7WUFDaEIsT0FBTyxDQUFDLEdBQUc7Z0JBQ1QsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ2pDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDdEMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN2QyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO29CQUNsQixLQUFLLENBQUMsT0FBUSxDQUFDO3dCQUNiLFVBQVUsRUFBRSxJQUFJO3FC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SUFDUixDQUFDO0lBRUQsUUFBUSxFQUFFO0lBQ1YsQ0FBQztJQUVELGFBQWEsRUFBRTtJQUNmLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IGFwcCA9IGdldEFwcCgpO1xuaW1wb3J0ICogYXMgQXBpIGZyb20gJy4uLy4uL3NlcnZpY2UvYXBpLnNlcnZpY2UnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi8uLi9jb25maWcnO1xuaW1wb3J0IHtcbiAgY2l0eVJlcGxhY2UsXG59IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJztcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICB1c2VyOiB7b3BlbmlkOiAnJ30sXG4gICAgZ3JvdXA6IHt9LFxuICAgIGN1cnJlbnRDaXR5OiAnJyxcbiAgICBzZWxlY3RWYWx1ZTogJycsXG4gICAgY2l0eUxpc3Q6IFtdLFxuICAgIGhvdENpdHlMaXN0OiBbXSxcbiAgICBwb3BIaWRkZW46IHRydWUsXG4gICAgaGFzU3RvcmFnZTogZmFsc2UsXG4gICAgYXV0aDogZmFsc2UsXG4gIH0sXG5cbiAgb25Mb2FkOiBmdW5jdGlvbiAob3B0aW9uczphbnkpIHtcbiAgICBpZiAob3B0aW9ucy5hdXRoKSB7XG4gICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgYXV0aDogb3B0aW9ucy5hdXRoXG4gICAgICB9KVxuICAgIH1cbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIHd4LmdldFN0b3JhZ2VJbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIGlmIChyZXMua2V5cy5pbmRleE9mKCd1c2VyJykgIT09IC0xICYmXG4gICAgICAgICAgcmVzLmtleXMuaW5kZXhPZignY3VycmVudENpdHknKSAhPT0gLTEgJiZcbiAgICAgICAgICByZXMua2V5cy5pbmRleE9mKCd1c2VyU2hvcEluZm8nKSAhPT0gLTEgJiZcbiAgICAgICAgICAhX3RoaXMuZGF0YS5hdXRoKSB7XG4gICAgICAgICAgX3RoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgICAgaGFzU3RvcmFnZTogdHJ1ZVxuICAgICAgICAgIH0pXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB3eC5zd2l0Y2hUYWIoe1xuICAgICAgICAgICAgICB1cmw6ICcuLi9ob21lL2hvbWUnLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9LCAxNTAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdGhpcy5nZXRPcGVuaWQoKTtcbiAgICAgICAgICBfdGhpcy5nZXRDaXR5TGlzdCgpOyAvLyDmlL7lhaXnvJPlrZhcbiAgICAgICAgICBfdGhpcy5nZXRIb3RDaXR5TGlzdCgpO1xuICAgICAgICAgIGlmIChhcHAuZ2xvYmFsRGF0YS51c2VyTG9jYXRpb24pIHtcbiAgICAgICAgICAgIHd4LnNob3dMb2FkaW5nKHtcbiAgICAgICAgICAgICAgdGl0bGU6ICflrprkvY3kuK0nLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHd4LmdldExvY2F0aW9uKHtcbiAgICAgICAgICAgICAgdHlwZTogJ3dnczg0JyxcbiAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5nZXRMb2NhbENpdHkocmVzLmxhdGl0dWRlLCByZXMubG9uZ2l0dWRlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3RoaXMuZ2V0V2VDaGF0Q2l0eSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG5cbiAgZ2V0T3BlbmlkKCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgd3gubG9naW4oe1xuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgQXBpLmdldE9wZW5pZChkYXRhLmNvZGUpLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09PSAyMDApIHtcbiAgICAgICAgICAgIF90aGlzLmRhdGEudXNlci5vcGVuaWQgPSByZXN1bHQuZGF0YS5vcGVuaWQ7XG4gICAgICAgICAgICBfdGhpcy5zZXREYXRhISh7XG4gICAgICAgICAgICAgIHVzZXI6IF90aGlzLmRhdGEudXNlclxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBmYWlsOiBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd3eC5sb2dpbiBmYWlsZWQnLCBlcnIpXG4gICAgICB9XG4gICAgfSlcbiAgfSxcblxuICAvKiog6I635Y+W5Z+O5biC5YiX6KGoICovXG4gIGdldENpdHlMaXN0KCkge1xuICAgIEFwaS5nZXRDaXR5TGlzdCh7fSkudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgIGlmIChyZXN1bHQuY29kZSA9PT0gMjAwKSB7XG4gICAgICAgIGNvbnN0IGNpdHlMaXN0ID0gcmVzdWx0LmRhdGE7XG4gICAgICAgIGNpdHlMaXN0LmZvckVhY2goKGU6IGFueSkgPT4ge1xuICAgICAgICAgIGUuZGF0YS5mb3JFYWNoKChjaXR5OiBhbnkpID0+IHtcbiAgICAgICAgICAgIGNpdHkubmFtZSA9IGNpdHlSZXBsYWNlKGNpdHkubmFtZSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgIGNpdHlMaXN0OiByZXN1bHQuZGF0YSxcbiAgICAgICAgfSk7XG4gICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xuICAgICAgICAgIGtleTogJ2NpdHlMaXN0JyxcbiAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgeyB9XG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2dldENpdHlMaXN0IGVycicsIGVycik7XG4gICAgfSlcbiAgfSxcblxuICAvKiog6I635Y+W5Z+O5biC5YiX6KGoICovXG4gIGdldEhvdENpdHlMaXN0KCkge1xuICAgIEFwaS5nZXRDaXR5TGlzdCh7aG90OiAxfSkudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgIGlmIChyZXN1bHQuY29kZSA9PT0gMjAwKSB7XG4gICAgICAgIGNvbnN0IGhvdENpdHlMaXN0ID0gcmVzdWx0LmRhdGE7XG4gICAgICAgIGhvdENpdHlMaXN0LmZvckVhY2goKGU6YW55KSA9PiB7XG4gICAgICAgICAgZS5uYW1lID0gY2l0eVJlcGxhY2UoZS5uYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgIGhvdENpdHlMaXN0OiByZXN1bHQuZGF0YSxcbiAgICAgICAgfSk7XG4gICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xuICAgICAgICAgIGtleTogJ2hvdENpdHlMaXN0JyxcbiAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgeyB9XG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2dldEhvdENpdHlMaXN0IGVycicsIGVycik7XG4gICAgfSlcbiAgfSxcblxuICAvKiog6I635Y+W5a6a5L2NICovXG4gIGdldFdlQ2hhdENpdHkoKSB7XG4gICAgbGV0IF90aGlzID0gdGhpc1xuICAgIHd4LmF1dGhvcml6ZSh7XG4gICAgICBzY29wZTogXCJzY29wZS51c2VyTG9jYXRpb25cIixcbiAgICAgIHN1Y2Nlc3MoKSB7XG4gICAgICAgIHd4LnNob3dMb2FkaW5nKHtcbiAgICAgICAgICB0aXRsZTogJ+WumuS9jeS4rScsXG4gICAgICAgIH0pXG4gICAgICAgIHd4LmdldExvY2F0aW9uKHtcbiAgICAgICAgICB0eXBlOiAnd2dzODQnLFxuICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgICAgICBhcHAuZ2xvYmFsRGF0YS51c2VyTG9jYXRpb24gPSB0cnVlO1xuICAgICAgICAgICAgX3RoaXMuZ2V0TG9jYWxDaXR5KHJlcy5sYXRpdHVkZSwgcmVzLmxvbmdpdHVkZSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWlsKCkge1xuICAgICAgICAgICAgX3RoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgICAgICBjdXJyZW50Q2l0eTogXCLlrprkvY3lpLHotKVcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIC8qKlxuICAgKiDojrflj5blrprkvY3ln47luIJcbiAgICogQHBhcmFtIGxhdGl0dWRlIOe7j+W6plxuICAgKiBAcGFyYW0gbG9uZ2l0dWRlIOe6rOW6plxuICAgKi9cbiAgZ2V0TG9jYWxDaXR5KGxhdGl0dWRlOiBhbnksIGxvbmdpdHVkZTogYW55KSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICB3eC5yZXF1ZXN0KHtcbiAgICAgIHVybDogJ2h0dHBzOi8vYXBpLm1hcC5iYWlkdS5jb20vZ2VvY29kZXIvdjIvP2FrPScgKyBjb25maWcuYWsgKycmbG9jYXRpb249JyArIGxhdGl0dWRlICsgJywnICsgbG9uZ2l0dWRlICsgJyZvdXRwdXQ9anNvbicsXG4gICAgICBkYXRhOiB7fSxcbiAgICAgIGhlYWRlcjoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9LFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlczogYW55KSB7XG4gICAgICAgIGxldCBjaXR5ID0gcmVzLmRhdGEucmVzdWx0LmFkZHJlc3NDb21wb25lbnQuY2l0eTtcbiAgICAgICAgY2l0eSA9IGNpdHlSZXBsYWNlKGNpdHkpO1xuICAgICAgICBfdGhpcy5zZXREYXRhISh7XG4gICAgICAgICAgY3VycmVudENpdHk6IGNpdHlcbiAgICAgICAgfSk7XG4gICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xuICAgICAgICAgIGtleTogJ2N1cnJlbnRDaXR5JyxcbiAgICAgICAgICBkYXRhOiBjaXR5LFxuICAgICAgICB9KTtcbiAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcbiAgICAgIH0sXG4gICAgICBmYWlsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzLnNldERhdGEhKHtcbiAgICAgICAgICBjdXJyZW50Q2l0eTogXCItLS1cIlxuICAgICAgICB9KTtcbiAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcbiAgICAgIH0sXG4gICAgfSlcbiAgfSxcblxuICAvKiog5o6n5Yi2cGlja2VyICovXG4gIHBvcFBpY2tlcigpIHtcbiAgICBsZXQgcG9wSGlkZGVuID0gdGhpcy5kYXRhLnBvcEhpZGRlbjtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIHBvcEhpZGRlbjogIXBvcEhpZGRlbixcbiAgICB9KVxuICB9LFxuXG4gIC8qKiBcbiAgICog6I635Y+W5o6I5p2D5ZKM55So5oi35L+h5oGvXG4gICAqIOWIm+W7uueUqOaIt++8iOWQjuerr+WIpOaWreaYr+WQpuW3sue7j+WIm+W7uu+8iVxuICAgKiDot7Povazlub/lnLp0YWJCYXLpobVcbiAgICovXG4gIGdvSG9tZShlOmFueSkge1xuICAgIHRoaXMuZ2V0VXNlcihlKTtcbiAgfSxcblxuICAvKiog6I635Y+W55So5oi35L+h5oGvICovXG4gIGdldFVzZXIoZTphbnkpIHtcbiAgICBsZXQgdXNlckluZm8gPSBlLmRldGFpbC51c2VySW5mbztcbiAgICB1c2VySW5mby5vcGVuaWQgPSB0aGlzLmRhdGEudXNlci5vcGVuaWQ7XG4gICAgaWYgKCF1c2VySW5mby5vcGVuaWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQXBpLmluc2VydFVzZXIodXNlckluZm8pLnRoZW4oKHJlc3VsdDphbnkpID0+IHtcbiAgICAgIGlmIChyZXN1bHQuY29kZSA9PT0gMjAwKSB7XG4gICAgICAgIHVzZXJJbmZvLnRva2VuID0gcmVzdWx0LmRhdGEudG9rZW47XG4gICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xuICAgICAgICAgIGtleTogXCJ1c2VyXCIsXG4gICAgICAgICAgZGF0YTogdXNlckluZm8sXG4gICAgICAgICAgc3VjY2VzczogKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5nZXRVc2VyU2hvcEluZm8oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICB9KTtcbiAgfSxcblxuICAvKiog6I635Y+W55So5oi35L+h5oGv77yI5bqX6ZO65L+h5oGv77yJICovXG4gIGdldFVzZXJTaG9wSW5mbygpIHtcbiAgICBBcGkuZ2V0VXNlckluZm8oKS50aGVuKChyZXN1bHQ6YW55KSA9PiB7XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IHVzZXJTaG9wSW5mbyA9IHJlc3VsdC5kYXRhO1xuICAgICAgICB3eC5zZXRTdG9yYWdlKHtcbiAgICAgICAgICBrZXk6ICd1c2VyU2hvcEluZm8nLFxuICAgICAgICAgIGRhdGE6IHVzZXJTaG9wSW5mbyxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh0aGlzLmRhdGEuYXV0aCA9PSB0cnVlKSB7XG4gICAgICAgICAgd3gubmF2aWdhdGVCYWNrKHtcbiAgICAgICAgICAgIGRlbHRhOiAyXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd3guc3dpdGNoVGFiKHtcbiAgICAgICAgICAgIHVybDogYC4uL2hvbWUvaG9tZWAsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICAvKiog6YCJ5oup5Z+O5biCICovXG4gIGRvU2VsZWN0KGU6IGFueSkge1xuICAgIGlmIChlLmRldGFpbC5uYW1lKSB7XG4gICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgcG9wSGlkZGVuOiB0cnVlLFxuICAgICAgICBjdXJyZW50Q2l0eTogZS5kZXRhaWwubmFtZSxcbiAgICAgIH0pXG4gICAgICB3eC5zZXRTdG9yYWdlKHtcbiAgICAgICAga2V5OiAnY3VycmVudENpdHknLFxuICAgICAgICBkYXRhOiBlLmRldGFpbC5uYW1lLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHsgIC8vIOWPlua2iOaMiemSrlxuICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgIHBvcEhpZGRlbjogdHJ1ZSxcbiAgICAgIH0pXG4gICAgfVxuICB9LFxuXG4gIG9uUmVhZHk6IGZ1bmN0aW9uICgpIHtcbiAgfSxcblxuICBvblNob3c6IGZ1bmN0aW9uICgpIHtcbiAgfSxcblxuICBvbkhpZGU6IGZ1bmN0aW9uICgpIHtcbiAgfSxcblxuICBvblVubG9hZDogZnVuY3Rpb24gKCkge1xuICB9LFxuXG4gIG9uUmVhY2hCb3R0b206IGZ1bmN0aW9uICgpIHtcbiAgfSxcbn0pIl19