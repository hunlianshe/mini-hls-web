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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLE1BQU0sR0FBRyxHQUFPLE1BQU0sRUFBRSxDQUFDO0FBQ3pCLGlEQUFpRDtBQUNqRCx5Q0FBa0M7QUFDbEMsNkNBRTJCO0FBSTNCLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxFQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUM7UUFDbEIsS0FBSyxFQUFFLEVBQUU7UUFDVCxXQUFXLEVBQUUsRUFBRTtRQUNmLFdBQVcsRUFBRSxFQUFFO1FBQ2YsUUFBUSxFQUFFLEVBQUU7UUFDWixXQUFXLEVBQUUsRUFBRTtRQUNmLFNBQVMsRUFBRSxJQUFJO1FBQ2YsVUFBVSxFQUFFLEtBQUs7UUFDakIsSUFBSSxFQUFFLEtBQUs7S0FDWjtJQUVELE1BQU0sRUFBRSxVQUFVLE9BQVc7UUFDM0IsSUFBSSxPQUFPLENBQUMsSUFBSSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxPQUFRLENBQUM7Z0JBQ1osSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJO2FBQ25CLENBQUMsQ0FBQTtTQUNIO1FBQ0QsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLEVBQUUsQ0FBQyxjQUFjLENBQUM7WUFDaEIsT0FBTyxDQUFDLEdBQUc7Z0JBQ1QsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO29CQUN2RCxLQUFLLENBQUMsT0FBUSxDQUFDO3dCQUNiLFVBQVUsRUFBRSxJQUFJO3FCQUNqQixDQUFDLENBQUE7b0JBQ0YsVUFBVSxDQUFDLEdBQUcsRUFBRTt3QkFDZCxFQUFFLENBQUMsU0FBUyxDQUFDOzRCQUNYLEdBQUcsRUFBRSxjQUFjO3lCQUNwQixDQUFDLENBQUE7b0JBQ0osQ0FBQyxFQUFFLElBQUks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QUFjO1FBQ1osRUFBRSxDQUFDLFNBQVMsQ0FBQztZQUNYLEdBQUcsRUFBRSxjQUFjO1NBQ3BCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxPQUFPLEVBQUU7SUFDVCxDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCBhcHA6YW55ID0gZ2V0QXBwKCk7XG5pbXBvcnQgKiBhcyBBcGkgZnJvbSAnLi4vLi4vc2VydmljZS9hcGkuc2VydmljZSc7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4uLy4uL2NvbmZpZyc7XG5pbXBvcnQge1xuICBjaXR5UmVwbGFjZSxcbn0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xuXG5pbXBvcnQgVXNlciBmcm9tICcuLi8uLi9pbnRlcmZhY2UvdXNlcic7XG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgdXNlcjoge29wZW5pZDogJyd9LFxuICAgIGdyb3VwOiB7fSxcbiAgICBjdXJyZW50Q2l0eTogJycsXG4gICAgc2VsZWN0VmFsdWU6ICcnLFxuICAgIGNpdHlMaXN0OiBbXSxcbiAgICBob3RDaXR5TGlzdDogW10sXG4gICAgcG9wSGlkZGVuOiB0cnVlLFxuICAgIGhhc1N0b3JhZ2U6IGZhbHNlLFxuICAgIGF1dGg6IGZhbHNlLFxuICB9LFxuXG4gIG9uTG9hZDogZnVuY3Rpb24gKG9wdGlvbnM6YW55KSB7XG4gICAgaWYgKG9wdGlvbnMuYXV0aCkge1xuICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgIGF1dGg6IG9wdGlvbnMuYXV0aFxuICAgICAgfSlcbiAgICB9XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICB3eC5nZXRTdG9yYWdlSW5mbyh7XG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICBpZiAocmVzLmtleXMuaW5kZXhPZigndXNlcicpICE9PSAtMSAmJiAhX3RoaXMuZGF0YS5hdXRoKSB7XG4gICAgICAgICAgX3RoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgICAgaGFzU3RvcmFnZTogdHJ1ZVxuICAgICAgICAgIH0pXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB3eC5zd2l0Y2hUYWIoe1xuICAgICAgICAgICAgICB1cmw6ICcuLi9ob21lL2hvbWUnLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9LCAxNTAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdGhpcy5nZXRPcGVuaWQoKTtcbiAgICAgICAgICAvLyBpZiAoYXBwLmdsb2JhbERhdGEudXNlckxvY2F0aW9uKSB7XG4gICAgICAgICAgLy8gICB3eC5zaG93TG9hZGluZyh7XG4gICAgICAgICAgLy8gICAgIHRpdGxlOiAn5a6a5L2N5LitJyxcbiAgICAgICAgICAvLyAgIH0pXG4gICAgICAgICAgLy8gICB3eC5nZXRMb2NhdGlvbih7XG4gICAgICAgICAgLy8gICAgIHR5cGU6ICd3Z3M4NCcsXG4gICAgICAgICAgLy8gICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgICAgLy8gICAgICAgX3RoaXMuZ2V0TG9jYWxDaXR5KHJlcy5sYXRpdHVkZSwgcmVzLmxvbmdpdHVkZSk7XG4gICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAvLyAgIH0pXG4gICAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgICAvLyAgIF90aGlzLmdldFdlQ2hhdENpdHkoKTtcbiAgICAgICAgICAvLyB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9LFxuXG4gIGdldE9wZW5pZCgpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIHd4LmxvZ2luKHtcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIEFwaS5nZXRPcGVuaWQoZGF0YS5jb2RlKS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PT0gMjAwKSB7XG4gICAgICAgICAgICBfdGhpcy5kYXRhLnVzZXIub3BlbmlkID0gcmVzdWx0LmRhdGEub3BlbmlkO1xuICAgICAgICAgICAgX3RoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgICAgICB1c2VyOiBfdGhpcy5kYXRhLnVzZXJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgZmFpbDogZnVuY3Rpb24gKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZygnd3gubG9naW4gZmFpbGVkJywgZXJyKVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG5cbiAgLyoqIOiOt+WPluWumuS9jSAqL1xuICBnZXRXZUNoYXRDaXR5KCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXNcbiAgICB3eC5hdXRob3JpemUoe1xuICAgICAgc2NvcGU6IFwic2NvcGUudXNlckxvY2F0aW9uXCIsXG4gICAgICBzdWNjZXNzKCkge1xuICAgICAgICB3eC5zaG93TG9hZGluZyh7XG4gICAgICAgICAgdGl0bGU6ICflrprkvY3kuK0nLFxuICAgICAgICB9KVxuICAgICAgICB3eC5nZXRMb2NhdGlvbih7XG4gICAgICAgICAgdHlwZTogJ3dnczg0JyxcbiAgICAgICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICAgICAgYXBwLmdsb2JhbERhdGEudXNlckxvY2F0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIF90aGlzLmdldExvY2FsQ2l0eShyZXMubGF0aXR1ZGUsIHJlcy5sb25naXR1ZGUpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbCgpIHtcbiAgICAgICAgICAgIF90aGlzLnNldERhdGEhKHtcbiAgICAgICAgICAgICAgY3VycmVudENpdHk6IFwi5a6a5L2N5aSx6LSlXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICAvKipcbiAgICog6I635Y+W5a6a5L2N5Z+O5biCXG4gICAqIEBwYXJhbSBsYXRpdHVkZSDnu4/luqZcbiAgICogQHBhcmFtIGxvbmdpdHVkZSDnuqzluqZcbiAgICovXG4gIGdldExvY2FsQ2l0eShsYXRpdHVkZTogYW55LCBsb25naXR1ZGU6IGFueSkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgd3gucmVxdWVzdCh7XG4gICAgICB1cmw6ICdodHRwczovL2FwaS5tYXAuYmFpZHUuY29tL2dlb2NvZGVyL3YyLz9haz0nICsgY29uZmlnLmFrICsnJmxvY2F0aW9uPScgKyBsYXRpdHVkZSArICcsJyArIGxvbmdpdHVkZSArICcmb3V0cHV0PWpzb24nLFxuICAgICAgZGF0YToge30sXG4gICAgICBoZWFkZXI6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXM6IGFueSkge1xuICAgICAgICBsZXQgY2l0eSA9IHJlcy5kYXRhLnJlc3VsdC5hZGRyZXNzQ29tcG9uZW50LmNpdHk7XG4gICAgICAgIGNpdHkgPSBjaXR5UmVwbGFjZShjaXR5KTtcbiAgICAgICAgX3RoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgIGN1cnJlbnRDaXR5OiBjaXR5XG4gICAgICAgIH0pO1xuICAgICAgICB3eC5zZXRTdG9yYWdlKHtcbiAgICAgICAgICBrZXk6ICdjdXJyZW50Q2l0eScsXG4gICAgICAgICAgZGF0YTogY2l0eSxcbiAgICAgICAgfSk7XG4gICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XG4gICAgICB9LFxuICAgICAgZmFpbDogZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy5zZXREYXRhISh7XG4gICAgICAgICAgY3VycmVudENpdHk6IFwiLS0tXCJcbiAgICAgICAgfSk7XG4gICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XG4gICAgICB9LFxuICAgIH0pXG4gIH0sXG5cbiAgLyoqIOaOp+WItnBpY2tlciAqL1xuICBwb3BQaWNrZXIoKSB7XG4gICAgbGV0IHBvcEhpZGRlbiA9IHRoaXMuZGF0YS5wb3BIaWRkZW47XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBwb3BIaWRkZW46ICFwb3BIaWRkZW4sXG4gICAgfSlcbiAgfSxcblxuICAvKipcbiAgICog6I635Y+W5o6I5p2D5ZKM55So5oi35L+h5oGvXG4gICAqIOWIm+W7uueUqOaIt++8iOWQjuerr+WIpOaWreaYr+WQpuW3sue7j+WIm+W7uu+8iVxuICAgKiDot7Povazlub/lnLp0YWJCYXLpobVcbiAgKi9cbiAgZ2V0VXNlcihlOmFueSkge1xuICAgIGxldCB1c2VySW5mbzogVXNlciA9IGUuZGV0YWlsLnVzZXJJbmZvO1xuICAgIHVzZXJJbmZvLm9wZW5pZCA9IHRoaXMuZGF0YS51c2VyLm9wZW5pZDtcbiAgICBpZiAoIXVzZXJJbmZvLm9wZW5pZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBBcGkucmVnaXN0ZXIodXNlckluZm8pLnRoZW4oKHJlc3VsdDphbnkpID0+IHtcbiAgICAgIGlmIChyZXN1bHQuY29kZSA9PT0gMjAwKSB7XG4gICAgICAgIHVzZXJJbmZvLnRva2VuID0gcmVzdWx0LmRhdGEudG9rZW47XG4gICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xuICAgICAgICAgIGtleTogXCJ1c2VyXCIsXG4gICAgICAgICAgZGF0YTogdXNlckluZm8sXG4gICAgICAgICAgc3VjY2VzczogKCkgPT4ge1xuICAgICAgICAgICAgd3guc3dpdGNoVGFiKHtcbiAgICAgICAgICAgICAgdXJsOiBgLi4vaG9tZS9ob21lYCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSkuY2F0Y2goKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ+WPlua2iOaOiOadg++8jOeVmeWcqOacrOmhtScpXG4gICAgfSk7XG4gIH0sXG5cbiAgbmF2aWdhdGVUb0hvbWUoKSB7XG4gICAgd3guc3dpdGNoVGFiKHtcbiAgICAgIHVybDogYC4uL2hvbWUvaG9tZWAsXG4gICAgfSk7XG4gIH0sXG5cbiAgb25SZWFkeTogZnVuY3Rpb24gKCkge1xuICB9LFxufSkiXX0=