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
                    setTimeout(() => {
                        wx.switchTab({
                            url: '../home/home',
                        });
                    }, 1500);
                }
                else {
                    _this.getOpenid();
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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLE1BQU0sR0FBRyxHQUFPLE1BQU0sRUFBRSxDQUFDO0FBQ3pCLGlEQUFpRDtBQUNqRCx5Q0FBa0M7QUFDbEMsNkNBRTJCO0FBSTNCLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxFQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUM7UUFDbEIsS0FBSyxFQUFFLEVBQUU7UUFDVCxXQUFXLEVBQUUsRUFBRTtRQUNmLFdBQVcsRUFBRSxFQUFFO1FBQ2YsUUFBUSxFQUFFLEVBQUU7UUFDWixXQUFXLEVBQUUsRUFBRTtRQUNmLFNBQVMsRUFBRSxJQUFJO1FBQ2YsVUFBVSxFQUFFLEtBQUs7UUFDakIsSUFBSSxFQUFFLEtBQUs7S0FDWjtJQUVELE1BQU0sRUFBRSxVQUFVLE9BQVc7UUFDM0IsSUFBSSxPQUFPLENBQUMsSUFBSSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxPQUFRLENBQUM7Z0JBQ1osSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJO2FBQ25CLENBQUMsQ0FBQTtTQUNIO1FBQ0QsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLEVBQUUsQ0FBQyxjQUFjLENBQUM7WUFDaEIsT0FBTyxDQUFDLEdBQUc7Z0JBQ1QsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO29CQUN2RCxLQUFLLENBQUMsT0FBUSxDQUFDO3dCQUNiLFVBQVUsRUFBRSxJQUFJO3FCQUNqQixDQUFDLENBQUE7b0JBQ0YsVUFBVSxDQUFDLEdBQUcsRUFBRTt3QkFDZCxFQUFFLENBQUMsU0FBUyxDQUFDOzRCQUNYLEdBQUcsRUFBRSxjQUFjO3lCQUNwQixDQUFDLENBQUE7b0JBQ0osQ0FBQyxFQUFFLElBQUks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QU0sQ0FBQyxJQUFJLEtBQUssR0FBRyxFQUFFO2dCQUN2QixRQUFRLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUNuQyxFQUFFLENBQUMsVUFBVSxDQUFDO29CQUNaLEdBQUcsRUFBRSxNQUFNO29CQUNYLElBQUksRUFBRSxRQUFRO29CQUNkLE9BQU8sRUFBRSxHQUFHLEVBQUU7d0JBQ1osRUFBRSxDQUFDLFNBQVMsQ0FBQzs0QkFDWCxHQUFHLEVBQUUsY0FBYzt5QkFDcEIsQ0FBQyxDQUFDO29CQUNMLENBQUM7aUJBQ0YsQ0FBQyxDQUFDO2FBQ0o7UUFDSCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUMxQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFHRCxRQUFRLENBQUMsQ0FBTTtRQUNiLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7WUFDakIsSUFBSSxDQUFDLE9BQVEsQ0FBQztnQkFDWixTQUFTLEVBQUUsSUFBSTtnQkFDZixXQUFXLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJO2FBQzNCLENBQUMsQ0FBQTtZQUNGLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQ1osR0FBRyxFQUFFLGFBQWE7Z0JBQ2xCLElBQUksRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUk7YUFDcEIsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLElBQUksQ0FBQyxPQUFRLENBQUM7Z0JBQ1osU0FBUyxFQUFFLElBQUk7YUFDaEIsQ0FBQyxDQUFBO1NBQ0g7SUFDSCxDQUFDO0lBRUQsT0FBTyxFQUFFO0lBQ1QsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgYXBwOmFueSA9IGdldEFwcCgpO1xuaW1wb3J0ICogYXMgQXBpIGZyb20gJy4uLy4uL3NlcnZpY2UvYXBpLnNlcnZpY2UnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi8uLi9jb25maWcnO1xuaW1wb3J0IHtcbiAgY2l0eVJlcGxhY2UsXG59IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJztcblxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vaW50ZXJmYWNlL3VzZXInO1xuXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIHVzZXI6IHtvcGVuaWQ6ICcnfSxcbiAgICBncm91cDoge30sXG4gICAgY3VycmVudENpdHk6ICcnLFxuICAgIHNlbGVjdFZhbHVlOiAnJyxcbiAgICBjaXR5TGlzdDogW10sXG4gICAgaG90Q2l0eUxpc3Q6IFtdLFxuICAgIHBvcEhpZGRlbjogdHJ1ZSxcbiAgICBoYXNTdG9yYWdlOiBmYWxzZSxcbiAgICBhdXRoOiBmYWxzZSxcbiAgfSxcblxuICBvbkxvYWQ6IGZ1bmN0aW9uIChvcHRpb25zOmFueSkge1xuICAgIGlmIChvcHRpb25zLmF1dGgpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICBhdXRoOiBvcHRpb25zLmF1dGhcbiAgICAgIH0pXG4gICAgfVxuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgd3guZ2V0U3RvcmFnZUluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgaWYgKHJlcy5rZXlzLmluZGV4T2YoJ3VzZXInKSAhPT0gLTEgJiYgIV90aGlzLmRhdGEuYXV0aCkge1xuICAgICAgICAgIF90aGlzLnNldERhdGEhKHtcbiAgICAgICAgICAgIGhhc1N0b3JhZ2U6IHRydWVcbiAgICAgICAgICB9KVxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgd3guc3dpdGNoVGFiKHtcbiAgICAgICAgICAgICAgdXJsOiAnLi4vaG9tZS9ob21lJyxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSwgMTUwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3RoaXMuZ2V0T3BlbmlkKCk7XG4gICAgICAgICAgaWYgKGFwcC5nbG9iYWxEYXRhLnVzZXJMb2NhdGlvbikge1xuICAgICAgICAgICAgd3guc2hvd0xvYWRpbmcoe1xuICAgICAgICAgICAgICB0aXRsZTogJ+WumuS9jeS4rScsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgd3guZ2V0TG9jYXRpb24oe1xuICAgICAgICAgICAgICB0eXBlOiAnd2dzODQnLFxuICAgICAgICAgICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICAgICAgICAgIF90aGlzLmdldExvY2FsQ2l0eShyZXMubGF0aXR1ZGUsIHJlcy5sb25naXR1ZGUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfdGhpcy5nZXRXZUNoYXRDaXR5KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSxcblxuICBnZXRPcGVuaWQoKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICB3eC5sb2dpbih7XG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBBcGkuZ2V0T3BlbmlkKGRhdGEuY29kZSkudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT09IDIwMCkge1xuICAgICAgICAgICAgX3RoaXMuZGF0YS51c2VyLm9wZW5pZCA9IHJlc3VsdC5kYXRhLm9wZW5pZDtcbiAgICAgICAgICAgIF90aGlzLnNldERhdGEhKHtcbiAgICAgICAgICAgICAgdXNlcjogX3RoaXMuZGF0YS51c2VyXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goKCkgPT4ge1xuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIGZhaWw6IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3d4LmxvZ2luIGZhaWxlZCcsIGVycilcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuXG4gIC8qKiDojrflj5blrprkvY0gKi9cbiAgZ2V0V2VDaGF0Q2l0eSgpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzXG4gICAgd3guYXV0aG9yaXplKHtcbiAgICAgIHNjb3BlOiBcInNjb3BlLnVzZXJMb2NhdGlvblwiLFxuICAgICAgc3VjY2VzcygpIHtcbiAgICAgICAgd3guc2hvd0xvYWRpbmcoe1xuICAgICAgICAgIHRpdGxlOiAn5a6a5L2N5LitJyxcbiAgICAgICAgfSlcbiAgICAgICAgd3guZ2V0TG9jYXRpb24oe1xuICAgICAgICAgIHR5cGU6ICd3Z3M4NCcsXG4gICAgICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgICAgIGFwcC5nbG9iYWxEYXRhLnVzZXJMb2NhdGlvbiA9IHRydWU7XG4gICAgICAgICAgICBfdGhpcy5nZXRMb2NhbENpdHkocmVzLmxhdGl0dWRlLCByZXMubG9uZ2l0dWRlKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWwoKSB7XG4gICAgICAgICAgICBfdGhpcy5zZXREYXRhISh7XG4gICAgICAgICAgICAgIGN1cnJlbnRDaXR5OiBcIuWumuS9jeWksei0pVwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIOiOt+WPluWumuS9jeWfjuW4glxuICAgKiBAcGFyYW0gbGF0aXR1ZGUg57uP5bqmXG4gICAqIEBwYXJhbSBsb25naXR1ZGUg57qs5bqmXG4gICAqL1xuICBnZXRMb2NhbENpdHkobGF0aXR1ZGU6IGFueSwgbG9uZ2l0dWRlOiBhbnkpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgdXJsOiAnaHR0cHM6Ly9hcGkubWFwLmJhaWR1LmNvbS9nZW9jb2Rlci92Mi8/YWs9JyArIGNvbmZpZy5hayArJyZsb2NhdGlvbj0nICsgbGF0aXR1ZGUgKyAnLCcgKyBsb25naXR1ZGUgKyAnJm91dHB1dD1qc29uJyxcbiAgICAgIGRhdGE6IHt9LFxuICAgICAgaGVhZGVyOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzOiBhbnkpIHtcbiAgICAgICAgbGV0IGNpdHkgPSByZXMuZGF0YS5yZXN1bHQuYWRkcmVzc0NvbXBvbmVudC5jaXR5O1xuICAgICAgICBjaXR5ID0gY2l0eVJlcGxhY2UoY2l0eSk7XG4gICAgICAgIF90aGlzLnNldERhdGEhKHtcbiAgICAgICAgICBjdXJyZW50Q2l0eTogY2l0eVxuICAgICAgICB9KTtcbiAgICAgICAgd3guc2V0U3RvcmFnZSh7XG4gICAgICAgICAga2V5OiAnY3VycmVudENpdHknLFxuICAgICAgICAgIGRhdGE6IGNpdHksXG4gICAgICAgIH0pO1xuICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xuICAgICAgfSxcbiAgICAgIGZhaWw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgIGN1cnJlbnRDaXR5OiBcIi0tLVwiXG4gICAgICAgIH0pO1xuICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xuICAgICAgfSxcbiAgICB9KVxuICB9LFxuXG4gIC8qKiDmjqfliLZwaWNrZXIgKi9cbiAgcG9wUGlja2VyKCkge1xuICAgIGxldCBwb3BIaWRkZW4gPSB0aGlzLmRhdGEucG9wSGlkZGVuO1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgcG9wSGlkZGVuOiAhcG9wSGlkZGVuLFxuICAgIH0pXG4gIH0sXG5cbiAgLyoqXG4gICAqIOiOt+WPluaOiOadg+WSjOeUqOaIt+S/oeaBr1xuICAgKiDliJvlu7rnlKjmiLfvvIjlkI7nq6/liKTmlq3mmK/lkKblt7Lnu4/liJvlu7rvvIlcbiAgICog6Lez6L2s5bm/5Zy6dGFiQmFy6aG1XG4gICovXG4gIGdldFVzZXIoZTphbnkpIHtcbiAgICBsZXQgdXNlckluZm86IFVzZXIgPSBlLmRldGFpbC51c2VySW5mbztcbiAgICB1c2VySW5mby5vcGVuaWQgPSB0aGlzLmRhdGEudXNlci5vcGVuaWQ7XG4gICAgY29uc29sZS5sb2coJ3VzZXJJbmZvJywgZS5kZXRhaWwudXNlckluZm8pO1xuICAgIGlmICghdXNlckluZm8ub3BlbmlkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIEFwaS5yZWdpc3Rlcih1c2VySW5mbykudGhlbigocmVzdWx0OmFueSkgPT4ge1xuICAgICAgaWYgKHJlc3VsdC5jb2RlID09PSAyMDApIHtcbiAgICAgICAgdXNlckluZm8udG9rZW4gPSByZXN1bHQuZGF0YS50b2tlbjtcbiAgICAgICAgd3guc2V0U3RvcmFnZSh7XG4gICAgICAgICAga2V5OiBcInVzZXJcIixcbiAgICAgICAgICBkYXRhOiB1c2VySW5mbyxcbiAgICAgICAgICBzdWNjZXNzOiAoKSA9PiB7XG4gICAgICAgICAgICB3eC5zd2l0Y2hUYWIoe1xuICAgICAgICAgICAgICB1cmw6IGAuLi9ob21lL2hvbWVgLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygn5Y+W5raI5o6I5p2D77yM55WZ5Zyo5pys6aG1JylcbiAgICB9KTtcbiAgfSxcblxuICAvKiog6YCJ5oup5Z+O5biCICovXG4gIGRvU2VsZWN0KGU6IGFueSkge1xuICAgIGlmIChlLmRldGFpbC5uYW1lKSB7XG4gICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgcG9wSGlkZGVuOiB0cnVlLFxuICAgICAgICBjdXJyZW50Q2l0eTogZS5kZXRhaWwubmFtZSxcbiAgICAgIH0pXG4gICAgICB3eC5zZXRTdG9yYWdlKHtcbiAgICAgICAga2V5OiAnY3VycmVudENpdHknLFxuICAgICAgICBkYXRhOiBlLmRldGFpbC5uYW1lLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHsgIC8vIOWPlua2iOaMiemSrlxuICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgIHBvcEhpZGRlbjogdHJ1ZSxcbiAgICAgIH0pXG4gICAgfVxuICB9LFxuXG4gIG9uUmVhZHk6IGZ1bmN0aW9uICgpIHtcbiAgfSxcbn0pIl19