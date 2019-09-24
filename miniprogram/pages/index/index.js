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
    onReady: function () {
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLE1BQU0sR0FBRyxHQUFPLE1BQU0sRUFBRSxDQUFDO0FBQ3pCLGlEQUFpRDtBQUNqRCx5Q0FBa0M7QUFDbEMsNkNBRTJCO0FBSTNCLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxFQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUM7UUFDbEIsS0FBSyxFQUFFLEVBQUU7UUFDVCxXQUFXLEVBQUUsRUFBRTtRQUNmLFdBQVcsRUFBRSxFQUFFO1FBQ2YsUUFBUSxFQUFFLEVBQUU7UUFDWixXQUFXLEVBQUUsRUFBRTtRQUNmLFNBQVMsRUFBRSxJQUFJO1FBQ2YsVUFBVSxFQUFFLEtBQUs7UUFDakIsSUFBSSxFQUFFLEtBQUs7S0FDWjtJQUVELE1BQU0sRUFBRSxVQUFVLE9BQVc7UUFDM0IsSUFBSSxPQUFPLENBQUMsSUFBSSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxPQUFRLENBQUM7Z0JBQ1osSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJO2FBQ25CLENBQUMsQ0FBQTtTQUNIO1FBQ0QsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLEVBQUUsQ0FBQyxjQUFjLENBQUM7WUFDaEIsT0FBTyxDQUFDLEdBQUc7Z0JBQ1QsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO29CQUN2RCxLQUFLLENBQUMsT0FBUSxDQUFDO3dCQUNiLFVBQVUsRUFBRSxJQUFJO3FCQUNqQixDQUFDLENBQUE7b0JBQ0YsVUFBVSxDQUFDLEdBQUcsRUFBRTt3QkFDZCxFQUFFLENBQUMsU0FBUyxDQUFDOzRCQUNYLEdBQUcsRUFBRSxjQUFjO3lCQUNwQixDQUFDLENBQUE7b0JBQ0osQ0FBQyxFQUFFLElBQUks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QU0sQ0FBQyxJQUFJLEtBQUssR0FBRyxFQUFFO2dCQUN2QixRQUFRLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUNuQyxFQUFFLENBQUMsVUFBVSxDQUFDO29CQUNaLEdBQUcsRUFBRSxNQUFNO29CQUNYLElBQUksRUFBRSxRQUFRO29CQUNkLE9BQU8sRUFBRSxHQUFHLEVBQUU7d0JBQ1osRUFBRSxDQUFDLFNBQVMsQ0FBQzs0QkFDWCxHQUFHLEVBQUUsY0FBYzt5QkFDcEIsQ0FBQyxDQUFDO29CQUNMLENBQUM7aUJBQ0YsQ0FBQyxDQUFDO2FBQ0o7UUFDSCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUMxQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxPQUFPLEVBQUU7SUFDVCxDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCBhcHA6YW55ID0gZ2V0QXBwKCk7XG5pbXBvcnQgKiBhcyBBcGkgZnJvbSAnLi4vLi4vc2VydmljZS9hcGkuc2VydmljZSc7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4uLy4uL2NvbmZpZyc7XG5pbXBvcnQge1xuICBjaXR5UmVwbGFjZSxcbn0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xuXG5pbXBvcnQgVXNlciBmcm9tICcuLi8uLi9pbnRlcmZhY2UvdXNlcic7XG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgdXNlcjoge29wZW5pZDogJyd9LFxuICAgIGdyb3VwOiB7fSxcbiAgICBjdXJyZW50Q2l0eTogJycsXG4gICAgc2VsZWN0VmFsdWU6ICcnLFxuICAgIGNpdHlMaXN0OiBbXSxcbiAgICBob3RDaXR5TGlzdDogW10sXG4gICAgcG9wSGlkZGVuOiB0cnVlLFxuICAgIGhhc1N0b3JhZ2U6IGZhbHNlLFxuICAgIGF1dGg6IGZhbHNlLFxuICB9LFxuXG4gIG9uTG9hZDogZnVuY3Rpb24gKG9wdGlvbnM6YW55KSB7XG4gICAgaWYgKG9wdGlvbnMuYXV0aCkge1xuICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgIGF1dGg6IG9wdGlvbnMuYXV0aFxuICAgICAgfSlcbiAgICB9XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICB3eC5nZXRTdG9yYWdlSW5mbyh7XG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICBpZiAocmVzLmtleXMuaW5kZXhPZigndXNlcicpICE9PSAtMSAmJiAhX3RoaXMuZGF0YS5hdXRoKSB7XG4gICAgICAgICAgX3RoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgICAgaGFzU3RvcmFnZTogdHJ1ZVxuICAgICAgICAgIH0pXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB3eC5zd2l0Y2hUYWIoe1xuICAgICAgICAgICAgICB1cmw6ICcuLi9ob21lL2hvbWUnLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9LCAxNTAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdGhpcy5nZXRPcGVuaWQoKTtcbiAgICAgICAgICBpZiAoYXBwLmdsb2JhbERhdGEudXNlckxvY2F0aW9uKSB7XG4gICAgICAgICAgICB3eC5zaG93TG9hZGluZyh7XG4gICAgICAgICAgICAgIHRpdGxlOiAn5a6a5L2N5LitJyxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB3eC5nZXRMb2NhdGlvbih7XG4gICAgICAgICAgICAgIHR5cGU6ICd3Z3M4NCcsXG4gICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuZ2V0TG9jYWxDaXR5KHJlcy5sYXRpdHVkZSwgcmVzLmxvbmdpdHVkZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF90aGlzLmdldFdlQ2hhdENpdHkoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9LFxuXG4gIGdldE9wZW5pZCgpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIHd4LmxvZ2luKHtcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIEFwaS5nZXRPcGVuaWQoZGF0YS5jb2RlKS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PT0gMjAwKSB7XG4gICAgICAgICAgICBfdGhpcy5kYXRhLnVzZXIub3BlbmlkID0gcmVzdWx0LmRhdGEub3BlbmlkO1xuICAgICAgICAgICAgX3RoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgICAgICB1c2VyOiBfdGhpcy5kYXRhLnVzZXJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgZmFpbDogZnVuY3Rpb24gKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZygnd3gubG9naW4gZmFpbGVkJywgZXJyKVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG5cbiAgLyoqIOiOt+WPluWumuS9jSAqL1xuICBnZXRXZUNoYXRDaXR5KCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXNcbiAgICB3eC5hdXRob3JpemUoe1xuICAgICAgc2NvcGU6IFwic2NvcGUudXNlckxvY2F0aW9uXCIsXG4gICAgICBzdWNjZXNzKCkge1xuICAgICAgICB3eC5zaG93TG9hZGluZyh7XG4gICAgICAgICAgdGl0bGU6ICflrprkvY3kuK0nLFxuICAgICAgICB9KVxuICAgICAgICB3eC5nZXRMb2NhdGlvbih7XG4gICAgICAgICAgdHlwZTogJ3dnczg0JyxcbiAgICAgICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICAgICAgYXBwLmdsb2JhbERhdGEudXNlckxvY2F0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIF90aGlzLmdldExvY2FsQ2l0eShyZXMubGF0aXR1ZGUsIHJlcy5sb25naXR1ZGUpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbCgpIHtcbiAgICAgICAgICAgIF90aGlzLnNldERhdGEhKHtcbiAgICAgICAgICAgICAgY3VycmVudENpdHk6IFwi5a6a5L2N5aSx6LSlXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICAvKipcbiAgICog6I635Y+W5a6a5L2N5Z+O5biCXG4gICAqIEBwYXJhbSBsYXRpdHVkZSDnu4/luqZcbiAgICogQHBhcmFtIGxvbmdpdHVkZSDnuqzluqZcbiAgICovXG4gIGdldExvY2FsQ2l0eShsYXRpdHVkZTogYW55LCBsb25naXR1ZGU6IGFueSkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgd3gucmVxdWVzdCh7XG4gICAgICB1cmw6ICdodHRwczovL2FwaS5tYXAuYmFpZHUuY29tL2dlb2NvZGVyL3YyLz9haz0nICsgY29uZmlnLmFrICsnJmxvY2F0aW9uPScgKyBsYXRpdHVkZSArICcsJyArIGxvbmdpdHVkZSArICcmb3V0cHV0PWpzb24nLFxuICAgICAgZGF0YToge30sXG4gICAgICBoZWFkZXI6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXM6IGFueSkge1xuICAgICAgICBsZXQgY2l0eSA9IHJlcy5kYXRhLnJlc3VsdC5hZGRyZXNzQ29tcG9uZW50LmNpdHk7XG4gICAgICAgIGNpdHkgPSBjaXR5UmVwbGFjZShjaXR5KTtcbiAgICAgICAgX3RoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgIGN1cnJlbnRDaXR5OiBjaXR5XG4gICAgICAgIH0pO1xuICAgICAgICB3eC5zZXRTdG9yYWdlKHtcbiAgICAgICAgICBrZXk6ICdjdXJyZW50Q2l0eScsXG4gICAgICAgICAgZGF0YTogY2l0eSxcbiAgICAgICAgfSk7XG4gICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XG4gICAgICB9LFxuICAgICAgZmFpbDogZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy5zZXREYXRhISh7XG4gICAgICAgICAgY3VycmVudENpdHk6IFwiLS0tXCJcbiAgICAgICAgfSk7XG4gICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XG4gICAgICB9LFxuICAgIH0pXG4gIH0sXG5cbiAgLyoqIOaOp+WItnBpY2tlciAqL1xuICBwb3BQaWNrZXIoKSB7XG4gICAgbGV0IHBvcEhpZGRlbiA9IHRoaXMuZGF0YS5wb3BIaWRkZW47XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBwb3BIaWRkZW46ICFwb3BIaWRkZW4sXG4gICAgfSlcbiAgfSxcblxuICAvKipcbiAgICog6I635Y+W5o6I5p2D5ZKM55So5oi35L+h5oGvXG4gICAqIOWIm+W7uueUqOaIt++8iOWQjuerr+WIpOaWreaYr+WQpuW3sue7j+WIm+W7uu+8iVxuICAgKiDot7Povazlub/lnLp0YWJCYXLpobVcbiAgKi9cbiAgZ2V0VXNlcihlOmFueSkge1xuICAgIGxldCB1c2VySW5mbzogVXNlciA9IGUuZGV0YWlsLnVzZXJJbmZvO1xuICAgIHVzZXJJbmZvLm9wZW5pZCA9IHRoaXMuZGF0YS51c2VyLm9wZW5pZDtcbiAgICBjb25zb2xlLmxvZygndXNlckluZm8nLCBlLmRldGFpbC51c2VySW5mbyk7XG4gICAgaWYgKCF1c2VySW5mby5vcGVuaWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQXBpLnJlZ2lzdGVyKHVzZXJJbmZvKS50aGVuKChyZXN1bHQ6YW55KSA9PiB7XG4gICAgICBpZiAocmVzdWx0LmNvZGUgPT09IDIwMCkge1xuICAgICAgICB1c2VySW5mby50b2tlbiA9IHJlc3VsdC5kYXRhLnRva2VuO1xuICAgICAgICB3eC5zZXRTdG9yYWdlKHtcbiAgICAgICAgICBrZXk6IFwidXNlclwiLFxuICAgICAgICAgIGRhdGE6IHVzZXJJbmZvLFxuICAgICAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcbiAgICAgICAgICAgIHd4LnN3aXRjaFRhYih7XG4gICAgICAgICAgICAgIHVybDogYC4uL2hvbWUvaG9tZWAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCflj5bmtojmjojmnYPvvIznlZnlnKjmnKzpobUnKVxuICAgIH0pO1xuICB9LFxuXG4gIG9uUmVhZHk6IGZ1bmN0aW9uICgpIHtcbiAgfSxcbn0pIl19