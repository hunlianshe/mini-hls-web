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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLE1BQU0sR0FBRyxHQUFPLE1BQU0sRUFBRSxDQUFDO0FBQ3pCLGlEQUFpRDtBQUNqRCx5Q0FBa0M7QUFDbEMsNkNBRTJCO0FBSTNCLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxFQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUM7UUFDbEIsS0FBSyxFQUFFLEVBQUU7UUFDVCxXQUFXLEVBQUUsRUFBRTtRQUNmLFdBQVcsRUFBRSxFQUFFO1FBQ2YsUUFBUSxFQUFFLEVBQUU7UUFDWixXQUFXLEVBQUUsRUFBRTtRQUNmLFNBQVMsRUFBRSxJQUFJO1FBQ2YsVUFBVSxFQUFFLEtBQUs7UUFDakIsSUFBSSxFQUFFLEtBQUs7S0FDWjtJQUVELE1BQU0sRUFBRSxVQUFVLE9BQVc7UUFDM0IsSUFBSSxPQUFPLENBQUMsSUFBSSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxPQUFRLENBQUM7Z0JBQ1osSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJO2FBQ25CLENBQUMsQ0FBQTtTQUNIO1FBQ0QsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLEVBQUUsQ0FBQyxjQUFjLENBQUM7WUFDaEIsT0FBTyxDQUFDLEdBQUc7Z0JBQ1QsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO29CQUN2RCxLQUFLLENBQUMsT0FBUSxDQUFDO3dCQUNiLFVBQVUsRUFBRSxJQUFJO3FCQUNqQixDQUFDLENBQUE7b0JBQ0YsVUFBVSxDQUFDLEdBQUcsRUFBRTt3QkFDZCxFQUFFLENBQUMsU0FBUyxDQUFDOzRCQUNYLEdBQUcsRUFBRSxjQUFjO3lCQUNwQixDQUFDLENBQUE7b0JBQ0osQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO2lCQUNWO3FCQUFNO29CQUNMLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztpQkFjbkI7WUFDSCxDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELFNBQVM7UUFDUCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDakIsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUNQLE9BQU8sRUFBRSxVQUFVLElBQUk7Z0JBQ3JCLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQVcsRUFBRSxFQUFFO29CQUM1QyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssR0FBRyxFQUFFO3dCQUN2QixLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7d0JBQzVDLEtBQUssQ0FBQyxPQUFRLENBQUM7NEJBQ2IsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSTt5QkFDdEIsQ0FBQyxDQUFDO3FCQUNKO3lCQUFNO3FCQUNOO2dCQUNILENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUU7Z0JBQ2QsQ0FBQyxDQUFDLENBQUE7WUFDSixDQUFDO1lBQ0QsSUFBSSxFQUFFLFVBQVUsR0FBRztnQkFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLENBQUMsQ0FBQTtZQUNyQyxDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUdELGFBQWE7UUFDWCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUE7UUFDaEIsRUFBRSxDQUFDLFNBQVMsQ0FBQztZQUNYLEtBQUssRUFBRSxvQkFBb0I7WUFDM0IsT0FBTztnQkFDTCxFQUFFLENBQUMsV0FBVyxDQUFDO29CQUNiLEtBQUssRUFBRSxLQUFLO2lCQUNiLENBQUMsQ0FBQTtnQkFDRixFQUFFLENBQUMsV0FBVyxDQUFDO29CQUNiLElBQUksRUFBRSxPQUFPO29CQUNiLE9BQU8sQ0FBQyxHQUFHO3dCQUNULEdBQUcsQ0FBQyxVQUFVLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQzt3QkFDbkMsS0FBSyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDbEQsQ0FBQztvQkFDRCxJQUFJO3dCQUNGLEtBQUssQ0FBQyxPQUFRLENBQUM7NEJBQ2IsV0FBVyxFQUFFLE1BQU07eUJBQ3BCLENBQUMsQ0FBQztvQkFDTCxDQUFDO2lCQUNGLENBQUMsQ0FBQTtZQUNKLENBQUM7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBT0QsWUFBWSxDQUFDLFFBQWEsRUFBRSxTQUFjO1FBQ3hDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztRQUNqQixFQUFFLENBQUMsT0FBTyxDQUFDO1lBQ1QsR0FBRyxFQUFFLDRDQUE0QyxHQUFHLGdCQUFNLENBQUMsRUFBRSxHQUFFLFlBQVksR0FBRyxRQUFRLEdBQUcsR0FBRyxHQUFHLFNBQVMsR0FBRyxjQUFjO1lBQ3pILElBQUksRUFBRSxFQUFFO1lBQ1IsTUFBTSxFQUFFO2dCQUNOLGNBQWMsRUFBRSxrQkFBa0I7YUFDbkM7WUFDRCxPQUFPLEVBQUUsVUFBVSxHQUFRO2dCQUN6QixJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pELElBQUksR0FBRyxtQkFBVyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN6QixLQUFLLENBQUMsT0FBUSxDQUFDO29CQUNiLFdBQVcsRUFBRSxJQUFJO2lCQUNsQixDQUFDLENBQUM7Z0JBQ0gsRUFBRSxDQUFDLFVBQVUsQ0FBQztvQkFDWixHQUFHLEVBQUUsYUFBYTtvQkFDbEIsSUFBSSxFQUFFLElBQUk7aUJBQ1gsQ0FBQyxDQUFDO2dCQUNILEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNuQixDQUFDO1lBQ0QsSUFBSSxFQUFFO2dCQUNKLEtBQUssQ0FBQyxPQUFRLENBQUM7b0JBQ2IsV0FBVyxFQUFFLEtBQUs7aUJBQ25CLENBQUMsQ0FBQztnQkFDSCxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkIsQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFHRCxTQUFTO1FBQ1AsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDcEMsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLFNBQVMsRUFBRSxDQUFDLFNBQVM7U0FDdEIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQU9ELE9BQU8sQ0FBQyxDQUFLO1FBQ1gsSUFBSSxRQUFRLEdBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDdkMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRTtZQUNwQixPQUFPO1NBQ1I7UUFDRCxHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQVUsRUFBRSxFQUFFO1lBQ3pDLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxHQUFHLEVBQUU7Z0JBQ3ZCLFFBQVEsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQ25DLEVBQUUsQ0FBQyxVQUFVLENBQUM7b0JBQ1osR0FBRyxFQUFFLE1BQU07b0JBQ1gsSUFBSSxFQUFFLFFBQVE7b0JBQ2QsT0FBTyxFQUFFLEdBQUcsRUFBRTt3QkFDWixFQUFFLENBQUMsU0FBUyxDQUFDOzRCQUNYLEdBQUcsRUFBRSxjQUFjO3lCQUNwQixDQUFDLENBQUM7b0JBQ0wsQ0FBQztpQkFDRixDQUFDLENBQUM7YUFDSjtRQUNILENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUU7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQzFCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGNBQWM7UUFDWixFQUFFLENBQUMsU0FBUyxDQUFDO1lBQ1gsR0FBRyxFQUFFLGNBQWM7U0FDcEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELE9BQU8sRUFBRTtJQUNULENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IGFwcDphbnkgPSBnZXRBcHAoKTtcbmltcG9ydCAqIGFzIEFwaSBmcm9tICcuLi8uLi9zZXJ2aWNlL2FwaS5zZXJ2aWNlJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vLi4vY29uZmlnJztcbmltcG9ydCB7XG4gIGNpdHlSZXBsYWNlLFxufSBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XG5cbmltcG9ydCBVc2VyIGZyb20gJy4uLy4uL2ludGVyZmFjZS91c2VyJztcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICB1c2VyOiB7b3BlbmlkOiAnJ30sXG4gICAgZ3JvdXA6IHt9LFxuICAgIGN1cnJlbnRDaXR5OiAnJyxcbiAgICBzZWxlY3RWYWx1ZTogJycsXG4gICAgY2l0eUxpc3Q6IFtdLFxuICAgIGhvdENpdHlMaXN0OiBbXSxcbiAgICBwb3BIaWRkZW46IHRydWUsXG4gICAgaGFzU3RvcmFnZTogZmFsc2UsXG4gICAgYXV0aDogZmFsc2UsXG4gIH0sXG5cbiAgb25Mb2FkOiBmdW5jdGlvbiAob3B0aW9uczphbnkpIHtcbiAgICBpZiAob3B0aW9ucy5hdXRoKSB7XG4gICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgYXV0aDogb3B0aW9ucy5hdXRoXG4gICAgICB9KVxuICAgIH1cbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIHd4LmdldFN0b3JhZ2VJbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIGlmIChyZXMua2V5cy5pbmRleE9mKCd1c2VyJykgIT09IC0xICYmICFfdGhpcy5kYXRhLmF1dGgpIHtcbiAgICAgICAgICBfdGhpcy5zZXREYXRhISh7XG4gICAgICAgICAgICBoYXNTdG9yYWdlOiB0cnVlXG4gICAgICAgICAgfSlcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHd4LnN3aXRjaFRhYih7XG4gICAgICAgICAgICAgIHVybDogJy4uL2hvbWUvaG9tZScsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0sIDE1MDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF90aGlzLmdldE9wZW5pZCgpO1xuICAgICAgICAgIC8vIGlmIChhcHAuZ2xvYmFsRGF0YS51c2VyTG9jYXRpb24pIHtcbiAgICAgICAgICAvLyAgIHd4LnNob3dMb2FkaW5nKHtcbiAgICAgICAgICAvLyAgICAgdGl0bGU6ICflrprkvY3kuK0nLFxuICAgICAgICAgIC8vICAgfSlcbiAgICAgICAgICAvLyAgIHd4LmdldExvY2F0aW9uKHtcbiAgICAgICAgICAvLyAgICAgdHlwZTogJ3dnczg0JyxcbiAgICAgICAgICAvLyAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgICAvLyAgICAgICBfdGhpcy5nZXRMb2NhbENpdHkocmVzLmxhdGl0dWRlLCByZXMubG9uZ2l0dWRlKTtcbiAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgIC8vICAgfSlcbiAgICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAgIC8vICAgX3RoaXMuZ2V0V2VDaGF0Q2l0eSgpO1xuICAgICAgICAgIC8vIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG5cbiAgZ2V0T3BlbmlkKCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgd3gubG9naW4oe1xuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgQXBpLmdldE9wZW5pZChkYXRhLmNvZGUpLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09PSAyMDApIHtcbiAgICAgICAgICAgIF90aGlzLmRhdGEudXNlci5vcGVuaWQgPSByZXN1bHQuZGF0YS5vcGVuaWQ7XG4gICAgICAgICAgICBfdGhpcy5zZXREYXRhISh7XG4gICAgICAgICAgICAgIHVzZXI6IF90aGlzLmRhdGEudXNlclxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBmYWlsOiBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd3eC5sb2dpbiBmYWlsZWQnLCBlcnIpXG4gICAgICB9XG4gICAgfSlcbiAgfSxcblxuICAvKiog6I635Y+W5a6a5L2NICovXG4gIGdldFdlQ2hhdENpdHkoKSB7XG4gICAgbGV0IF90aGlzID0gdGhpc1xuICAgIHd4LmF1dGhvcml6ZSh7XG4gICAgICBzY29wZTogXCJzY29wZS51c2VyTG9jYXRpb25cIixcbiAgICAgIHN1Y2Nlc3MoKSB7XG4gICAgICAgIHd4LnNob3dMb2FkaW5nKHtcbiAgICAgICAgICB0aXRsZTogJ+WumuS9jeS4rScsXG4gICAgICAgIH0pXG4gICAgICAgIHd4LmdldExvY2F0aW9uKHtcbiAgICAgICAgICB0eXBlOiAnd2dzODQnLFxuICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgICAgICBhcHAuZ2xvYmFsRGF0YS51c2VyTG9jYXRpb24gPSB0cnVlO1xuICAgICAgICAgICAgX3RoaXMuZ2V0TG9jYWxDaXR5KHJlcy5sYXRpdHVkZSwgcmVzLmxvbmdpdHVkZSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWlsKCkge1xuICAgICAgICAgICAgX3RoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgICAgICBjdXJyZW50Q2l0eTogXCLlrprkvY3lpLHotKVcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIC8qKlxuICAgKiDojrflj5blrprkvY3ln47luIJcbiAgICogQHBhcmFtIGxhdGl0dWRlIOe7j+W6plxuICAgKiBAcGFyYW0gbG9uZ2l0dWRlIOe6rOW6plxuICAgKi9cbiAgZ2V0TG9jYWxDaXR5KGxhdGl0dWRlOiBhbnksIGxvbmdpdHVkZTogYW55KSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICB3eC5yZXF1ZXN0KHtcbiAgICAgIHVybDogJ2h0dHBzOi8vYXBpLm1hcC5iYWlkdS5jb20vZ2VvY29kZXIvdjIvP2FrPScgKyBjb25maWcuYWsgKycmbG9jYXRpb249JyArIGxhdGl0dWRlICsgJywnICsgbG9uZ2l0dWRlICsgJyZvdXRwdXQ9anNvbicsXG4gICAgICBkYXRhOiB7fSxcbiAgICAgIGhlYWRlcjoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9LFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlczogYW55KSB7XG4gICAgICAgIGxldCBjaXR5ID0gcmVzLmRhdGEucmVzdWx0LmFkZHJlc3NDb21wb25lbnQuY2l0eTtcbiAgICAgICAgY2l0eSA9IGNpdHlSZXBsYWNlKGNpdHkpO1xuICAgICAgICBfdGhpcy5zZXREYXRhISh7XG4gICAgICAgICAgY3VycmVudENpdHk6IGNpdHlcbiAgICAgICAgfSk7XG4gICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xuICAgICAgICAgIGtleTogJ2N1cnJlbnRDaXR5JyxcbiAgICAgICAgICBkYXRhOiBjaXR5LFxuICAgICAgICB9KTtcbiAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcbiAgICAgIH0sXG4gICAgICBmYWlsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzLnNldERhdGEhKHtcbiAgICAgICAgICBjdXJyZW50Q2l0eTogXCItLS1cIlxuICAgICAgICB9KTtcbiAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcbiAgICAgIH0sXG4gICAgfSlcbiAgfSxcblxuICAvKiog5o6n5Yi2cGlja2VyICovXG4gIHBvcFBpY2tlcigpIHtcbiAgICBsZXQgcG9wSGlkZGVuID0gdGhpcy5kYXRhLnBvcEhpZGRlbjtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIHBvcEhpZGRlbjogIXBvcEhpZGRlbixcbiAgICB9KVxuICB9LFxuXG4gIC8qKlxuICAgKiDojrflj5bmjojmnYPlkoznlKjmiLfkv6Hmga9cbiAgICog5Yib5bu655So5oi377yI5ZCO56uv5Yik5pat5piv5ZCm5bey57uP5Yib5bu677yJXG4gICAqIOi3s+i9rOW5v+WcunRhYkJhcumhtVxuICAqL1xuICBnZXRVc2VyKGU6YW55KSB7XG4gICAgbGV0IHVzZXJJbmZvOiBVc2VyID0gZS5kZXRhaWwudXNlckluZm87XG4gICAgdXNlckluZm8ub3BlbmlkID0gdGhpcy5kYXRhLnVzZXIub3BlbmlkO1xuICAgIGNvbnNvbGUubG9nKCd1c2VySW5mbycsIGUuZGV0YWlsLnVzZXJJbmZvKTtcbiAgICBpZiAoIXVzZXJJbmZvLm9wZW5pZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBBcGkucmVnaXN0ZXIodXNlckluZm8pLnRoZW4oKHJlc3VsdDphbnkpID0+IHtcbiAgICAgIGlmIChyZXN1bHQuY29kZSA9PT0gMjAwKSB7XG4gICAgICAgIHVzZXJJbmZvLnRva2VuID0gcmVzdWx0LmRhdGEudG9rZW47XG4gICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xuICAgICAgICAgIGtleTogXCJ1c2VyXCIsXG4gICAgICAgICAgZGF0YTogdXNlckluZm8sXG4gICAgICAgICAgc3VjY2VzczogKCkgPT4ge1xuICAgICAgICAgICAgd3guc3dpdGNoVGFiKHtcbiAgICAgICAgICAgICAgdXJsOiBgLi4vaG9tZS9ob21lYCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSkuY2F0Y2goKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ+WPlua2iOaOiOadg++8jOeVmeWcqOacrOmhtScpXG4gICAgfSk7XG4gIH0sXG5cbiAgbmF2aWdhdGVUb0hvbWUoKSB7XG4gICAgd3guc3dpdGNoVGFiKHtcbiAgICAgIHVybDogYC4uL2hvbWUvaG9tZWAsXG4gICAgfSk7XG4gIH0sXG5cbiAgb25SZWFkeTogZnVuY3Rpb24gKCkge1xuICB9LFxufSkiXX0=