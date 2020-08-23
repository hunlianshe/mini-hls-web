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
                if (res.keys.indexOf('user') !== -1 && !_this.data.auth) {
                    _this.setData({
                        hasStorage: true
                    });
                    // setTimeout(() => {
                    //     wx.switchTab({
                    //         url: '../home/home',
                    //     });
                    // }, 1500);
                }
                else {
                    _this.getOpenid();
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
    getUser(e) {
        let userInfo = e.detail.userInfo;
        userInfo.openid = this.data.user.openid;
        console.log('userInfo', e.detail.userInfo);
        if (!userInfo.openid) {
            return;
        }
        Api.register(userInfo).then((result) => {
            if (result.code === 200) {
                userInfo.token = result.data.token;
                wx.setStorage({
                    key: "user",
                    data: userInfo,
                    success: () => {
                        wx.switchTab({
                            url: `../home/home`,
                        });
                    }
                });
            }
        }).catch(() => {
            console.log('取消授权，留在本页');
        });
    },
    navigateToHome() {
        wx.switchTab({
            url: `../home/home`,
        });
    },
    onReady: function () {
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLE1BQU0sR0FBRyxHQUFPLE1BQU0sRUFBRSxDQUFDO0FBQ3pCLGlEQUFpRDtBQUNqRCx5Q0FBa0M7QUFDbEMsNkNBRTJCO0FBSTNCLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxFQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUM7UUFDbEIsS0FBSyxFQUFFLEVBQUU7UUFDVCxXQUFXLEVBQUUsRUFBRTtRQUNmLFdBQVcsRUFBRSxFQUFFO1FBQ2YsUUFBUSxFQUFFLEVBQUU7UUFDWixXQUFXLEVBQUUsRUFBRTtRQUNmLFNBQVMsRUFBRSxJQUFJO1FBQ2YsVUFBVSxFQUFFLEtBQUs7UUFDakIsSUFBSSxFQUFFLEtBQUs7S0FDWjtJQUVELE1BQU0sRUFBRSxVQUFVLE9BQVc7UUFDM0IsSUFBSSxPQUFPLENBQUMsSUFBSSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxPQUFRLENBQUM7Z0JBQ1osSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJO2FBQ25CLENBQUMsQ0FBQTtTQUNIO1FBQ0QsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLEVBQUUsQ0FBQyxjQUFjLENBQUM7WUFDaEIsT0FBTyxDQUFDLEdBQUc7Z0JBQ1QsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO29CQUN2RCxLQUFLLENBQUMsT0FBUSxDQUFDO3dCQUNiLFVBQVUsRUFBRSxJQUFJO3FCQUNqQixDQUFDLENBQUE7b0JBQ0YsVUFBVSxDQUFDLEdBQUcsRUFBRTt3QkFDZCxFQUFFLENBQUMsU0FBUyxDQUFDOzRCQUNYLEdBQUcsRUFBRSxjQUFjO3lCQUNwQixDQUFDLENBQUE7b0JBQ0osQ0FBQyxFQUFFLElBQUks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QUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQzFCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGNBQWM7UUFDWixFQUFFLENBQUMsU0FBUyxDQUFDO1lBQ1gsR0FBRyxFQUFFLGNBQWM7U0FDcEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELE9BQU8sRUFBRTtJQUNULENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgYXBwOmFueSA9IGdldEFwcCgpO1xyXG5pbXBvcnQgKiBhcyBBcGkgZnJvbSAnLi4vLi4vc2VydmljZS9hcGkuc2VydmljZSc7XHJcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vLi4vY29uZmlnJztcclxuaW1wb3J0IHtcclxuICBjaXR5UmVwbGFjZSxcclxufSBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XHJcblxyXG5pbXBvcnQgVXNlciBmcm9tICcuLi8uLi9pbnRlcmZhY2UvdXNlcic7XHJcblxyXG5QYWdlKHtcclxuICBkYXRhOiB7XHJcbiAgICB1c2VyOiB7b3BlbmlkOiAnJ30sXHJcbiAgICBncm91cDoge30sXHJcbiAgICBjdXJyZW50Q2l0eTogJycsXHJcbiAgICBzZWxlY3RWYWx1ZTogJycsXHJcbiAgICBjaXR5TGlzdDogW10sXHJcbiAgICBob3RDaXR5TGlzdDogW10sXHJcbiAgICBwb3BIaWRkZW46IHRydWUsXHJcbiAgICBoYXNTdG9yYWdlOiBmYWxzZSxcclxuICAgIGF1dGg6IGZhbHNlLFxyXG4gIH0sXHJcblxyXG4gIG9uTG9hZDogZnVuY3Rpb24gKG9wdGlvbnM6YW55KSB7XHJcbiAgICBpZiAob3B0aW9ucy5hdXRoKSB7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgIGF1dGg6IG9wdGlvbnMuYXV0aFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuICAgIHd4LmdldFN0b3JhZ2VJbmZvKHtcclxuICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICBpZiAocmVzLmtleXMuaW5kZXhPZigndXNlcicpICE9PSAtMSAmJiAhX3RoaXMuZGF0YS5hdXRoKSB7XHJcbiAgICAgICAgICBfdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgICAgIGhhc1N0b3JhZ2U6IHRydWVcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgd3guc3dpdGNoVGFiKHtcclxuICAgICAgICAgICAgICB1cmw6ICcuLi9ob21lL2hvbWUnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfSwgMTUwMCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIF90aGlzLmdldE9wZW5pZCgpO1xyXG4gICAgICAgICAgLy8gaWYgKGFwcC5nbG9iYWxEYXRhLnVzZXJMb2NhdGlvbikge1xyXG4gICAgICAgICAgLy8gICB3eC5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgICAvLyAgICAgdGl0bGU6ICflrprkvY3kuK0nLFxyXG4gICAgICAgICAgLy8gICB9KVxyXG4gICAgICAgICAgLy8gICB3eC5nZXRMb2NhdGlvbih7XHJcbiAgICAgICAgICAvLyAgICAgdHlwZTogJ3dnczg0JyxcclxuICAgICAgICAgIC8vICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgLy8gICAgICAgX3RoaXMuZ2V0TG9jYWxDaXR5KHJlcy5sYXRpdHVkZSwgcmVzLmxvbmdpdHVkZSk7XHJcbiAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgLy8gICB9KVxyXG4gICAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAgIC8vICAgX3RoaXMuZ2V0V2VDaGF0Q2l0eSgpO1xyXG4gICAgICAgICAgLy8gfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICBnZXRPcGVuaWQoKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgd3gubG9naW4oe1xyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIEFwaS5nZXRPcGVuaWQoZGF0YS5jb2RlKS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09PSAyMDApIHtcclxuICAgICAgICAgICAgX3RoaXMuZGF0YS51c2VyLm9wZW5pZCA9IHJlc3VsdC5kYXRhLm9wZW5pZDtcclxuICAgICAgICAgICAgX3RoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgICAgICAgIHVzZXI6IF90aGlzLmRhdGEudXNlclxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSkuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWw6IGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnd3gubG9naW4gZmFpbGVkJywgZXJyKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIC8qKiDojrflj5blrprkvY0gKi9cclxuICBnZXRXZUNoYXRDaXR5KCkge1xyXG4gICAgbGV0IF90aGlzID0gdGhpc1xyXG4gICAgd3guYXV0aG9yaXplKHtcclxuICAgICAgc2NvcGU6IFwic2NvcGUudXNlckxvY2F0aW9uXCIsXHJcbiAgICAgIHN1Y2Nlc3MoKSB7XHJcbiAgICAgICAgd3guc2hvd0xvYWRpbmcoe1xyXG4gICAgICAgICAgdGl0bGU6ICflrprkvY3kuK0nLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgd3guZ2V0TG9jYXRpb24oe1xyXG4gICAgICAgICAgdHlwZTogJ3dnczg0JyxcclxuICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgIGFwcC5nbG9iYWxEYXRhLnVzZXJMb2NhdGlvbiA9IHRydWU7XHJcbiAgICAgICAgICAgIF90aGlzLmdldExvY2FsQ2l0eShyZXMubGF0aXR1ZGUsIHJlcy5sb25naXR1ZGUpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGZhaWwoKSB7XHJcbiAgICAgICAgICAgIF90aGlzLnNldERhdGEhKHtcclxuICAgICAgICAgICAgICBjdXJyZW50Q2l0eTogXCLlrprkvY3lpLHotKVcIlxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDojrflj5blrprkvY3ln47luIJcclxuICAgKiBAcGFyYW0gbGF0aXR1ZGUg57uP5bqmXHJcbiAgICogQHBhcmFtIGxvbmdpdHVkZSDnuqzluqZcclxuICAgKi9cclxuICBnZXRMb2NhbENpdHkobGF0aXR1ZGU6IGFueSwgbG9uZ2l0dWRlOiBhbnkpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgdXJsOiAnaHR0cHM6Ly9hcGkubWFwLmJhaWR1LmNvbS9nZW9jb2Rlci92Mi8/YWs9JyArIGNvbmZpZy5hayArJyZsb2NhdGlvbj0nICsgbGF0aXR1ZGUgKyAnLCcgKyBsb25naXR1ZGUgKyAnJm91dHB1dD1qc29uJyxcclxuICAgICAgZGF0YToge30sXHJcbiAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgfSxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlczogYW55KSB7XHJcbiAgICAgICAgbGV0IGNpdHkgPSByZXMuZGF0YS5yZXN1bHQuYWRkcmVzc0NvbXBvbmVudC5jaXR5O1xyXG4gICAgICAgIGNpdHkgPSBjaXR5UmVwbGFjZShjaXR5KTtcclxuICAgICAgICBfdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgICBjdXJyZW50Q2l0eTogY2l0eVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAga2V5OiAnY3VycmVudENpdHknLFxyXG4gICAgICAgICAgZGF0YTogY2l0eSxcclxuICAgICAgICB9KTtcclxuICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xyXG4gICAgICB9LFxyXG4gICAgICBmYWlsOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgX3RoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgICAgY3VycmVudENpdHk6IFwiLS0tXCJcclxuICAgICAgICB9KTtcclxuICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICAvKiog5o6n5Yi2cGlja2VyICovXHJcbiAgcG9wUGlja2VyKCkge1xyXG4gICAgbGV0IHBvcEhpZGRlbiA9IHRoaXMuZGF0YS5wb3BIaWRkZW47XHJcbiAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgcG9wSGlkZGVuOiAhcG9wSGlkZGVuLFxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDojrflj5bmjojmnYPlkoznlKjmiLfkv6Hmga9cclxuICAgKiDliJvlu7rnlKjmiLfvvIjlkI7nq6/liKTmlq3mmK/lkKblt7Lnu4/liJvlu7rvvIlcclxuICAgKiDot7Povazlub/lnLp0YWJCYXLpobVcclxuICAqL1xyXG4gIGdldFVzZXIoZTphbnkpIHtcclxuICAgIGxldCB1c2VySW5mbzogVXNlciA9IGUuZGV0YWlsLnVzZXJJbmZvO1xyXG4gICAgdXNlckluZm8ub3BlbmlkID0gdGhpcy5kYXRhLnVzZXIub3BlbmlkO1xyXG4gICAgY29uc29sZS5sb2coJ3VzZXJJbmZvJywgZS5kZXRhaWwudXNlckluZm8pO1xyXG4gICAgaWYgKCF1c2VySW5mby5vcGVuaWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQXBpLnJlZ2lzdGVyKHVzZXJJbmZvKS50aGVuKChyZXN1bHQ6YW55KSA9PiB7XHJcbiAgICAgIGlmIChyZXN1bHQuY29kZSA9PT0gMjAwKSB7XHJcbiAgICAgICAgdXNlckluZm8udG9rZW4gPSByZXN1bHQuZGF0YS50b2tlbjtcclxuICAgICAgICB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAgICAgIGtleTogXCJ1c2VyXCIsXHJcbiAgICAgICAgICBkYXRhOiB1c2VySW5mbyxcclxuICAgICAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcclxuICAgICAgICAgICAgd3guc3dpdGNoVGFiKHtcclxuICAgICAgICAgICAgICB1cmw6IGAuLi9ob21lL2hvbWVgLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSkuY2F0Y2goKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygn5Y+W5raI5o6I5p2D77yM55WZ5Zyo5pys6aG1JylcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIG5hdmlnYXRlVG9Ib21lKCkge1xyXG4gICAgd3guc3dpdGNoVGFiKHtcclxuICAgICAgdXJsOiBgLi4vaG9tZS9ob21lYCxcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIG9uUmVhZHk6IGZ1bmN0aW9uICgpIHtcclxuICB9LFxyXG59KSJdfQ==