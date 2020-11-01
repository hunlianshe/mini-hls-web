"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Api = require("../../service/api.service");
const app = getApp();
Page({
    data: {
        userInfo: { constellation: '' },
        psyTest: [],
        currShopList: [],
        dataAlready: false,
        currentCity: '',
        selectValue: '',
        currentQrcode: '',
        currentPhone: '',
        phone: '',
        popHidden: true,
        pageLoaded: false,
        popWechat: false,
        currentPage: 1,
        pageSize: 10,
        totalCount: 0,
        pullDown: false,
        pullUp: false,
        horoscopeData: {},
    },
    onLoad() {
        let _this = this;
        wx.getStorage({
            key: 'user',
            success: function (res) {
                _this.setData({
                    userInfo: res.data,
                });
                _this.getUserInfo();
                _this.getPsyList();
            },
        });
        this.getRightConfig();
    },
    getRightConfig() {
        const rightConfig = [
            {
                name: '无会员',
                horoscope: 99999,
                yearPrice: 0,
                seasonPrice: 0,
                monthPrice: 0,
                psychologicalTest: 99999,
                constellationMatching: 99999,
                fateMatch: 3,
                fateWatch: 20,
                fateChat: 3,
                whoLikeMe: 0,
                likeEach: 0,
            },
            {
                name: '黄铜会员',
                yearPrice: 120,
                seasonPrice: 30,
                monthPrice: 10,
                horoscope: 99999,
                psychologicalTest: 99999,
                constellationMatching: 99999,
                fateMatch: 99999,
                fateWatch: 99999,
                fateChat: 20,
                whoLikeMe: 99999,
                likeEach: 99999,
            },
            {
                name: '白金会员',
                yearPrice: 240,
                seasonPrice: 60,
                monthPrice: 20,
                horoscope: 99999,
                psychologicalTest: 99999,
                constellationMatching: 99999,
                fateMatch: 99999,
                fateWatch: 99999,
                fateChat: 9999,
                whoLikeMe: 99999,
                likeEach: 99999,
            },
        ];
        wx.setStorage({ key: 'rightConfig', data: rightConfig });
    },
    goXzys() {
        wx.navigateTo({
            url: `../xzys/xzys`,
        });
    },
    goXlcsList() {
        wx.navigateTo({
            url: `../xlcsList/xlcsList`,
        });
    },
    doTest(e) {
        const { id, type, } = e.currentTarget.dataset;
        if (type === '3') {
            wx.navigateTo({
                url: `../qsqy/qsqy?id=${id}`,
            });
        }
        else {
            wx.navigateTo({
                url: `../xlcsDetail/xlcsDetail?id=${id}`,
            });
        }
    },
    goMatch() {
        wx.navigateTo({
            url: `../matcheXz/matcheXz`,
        });
    },
    getPsyList() {
        Api.getPsyList().then((result) => {
            this.setData({
                psyTest: result.data,
            });
        });
    },
    getHoroscopet(e) {
        const consName = this.data.userInfo.constellation ? this.data.userInfo.constellation : '白羊座';
        const { type } = e.currentTarget.dataset;
        wx.navigateTo({
            url: '../realXzysDetail/realXzysDetail?consName=' + consName + '&type=' + type
        });
    },
    getUserInfo() {
        const { openid } = this.data.userInfo;
        Api.getUserInfo(openid || '').then((result) => {
            if (result) {
                const userInfo = result.data;
                app.globalData.userInfo = result.data;
                wx.setStorage({
                    key: 'userInfo',
                    data: Object.assign({ openid }, result.data),
                });
                this.setData({
                    userInfo,
                    pageLoaded: true,
                });
            }
        });
    },
    topInfo() {
        wx.navigateTo({
            url: '../bar/index'
        });
    },
    onReady: function () {
    },
    onShow: function () {
        const _this = this;
        wx.getStorage({
            key: 'user',
            success: function (res) {
                _this.setData({
                    userInfo: res.data,
                });
                _this.getUserInfo();
                _this.getPsyList();
            },
        });
        _this.getPsyList();
    },
    onHide: function () {
    },
    onUnload: function () {
    },
    onPullDownRefresh: function () {
        this.setData({
            pullDown: true,
            pullUp: false
        });
        wx.stopPullDownRefresh();
    },
    onReachBottom: function () {
        this.setData({
            pullDown: false,
            pullUp: true
        });
    },
    onShareAppMessage: function (options) {
        console.log('onShareAppMessage options', options);
        return {};
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBaUQ7QUFFakQsTUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFVLENBQUM7QUFLN0IsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFLEVBQUUsYUFBYSxFQUFFLEVBQUUsRUFBVTtRQUN2QyxPQUFPLEVBQUUsRUFBRTtRQUNYLFlBQVksRUFBRSxFQUFFO1FBQ2hCLFdBQVcsRUFBRSxLQUFLO1FBQ2xCLFdBQVcsRUFBRSxFQUFFO1FBQ2YsV0FBVyxFQUFFLEVBQUU7UUFDZixhQUFhLEVBQUUsRUFBRTtRQUNqQixZQUFZLEVBQUUsRUFBRTtRQUNoQixLQUFLLEVBQUUsRUFBRTtRQUNULFNBQVMsRUFBRSxJQUFJO1FBQ2YsVUFBVSxFQUFFLEtBQUs7UUFDakIsU0FBUyxFQUFFLEtBQUs7UUFDaEIsV0FBVyxFQUFFLENBQUM7UUFDZCxRQUFRLEVBQUUsRUFBRTtRQUNaLFVBQVUsRUFBRSxDQUFDO1FBQ2IsUUFBUSxFQUFFLEtBQUs7UUFDZixNQUFNLEVBQUUsS0FBSztRQUNiLGFBQWEsRUFBRSxFQUFlO0tBQy9CO0lBRUQsTUFBTTtRQUNKLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztRQUNqQixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLE1BQU07WUFDWCxPQUFPLEVBQUUsVUFBUyxHQUFHO2dCQUNuQixLQUFLLENBQUMsT0FBUSxDQUFDO29CQUNiLFFBQVEsRUFBRSxHQUFHLENBQUMsSUFBSTtpQkFDbkIsQ0FBQyxDQUFDO2dCQUNILEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDcEIsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3JCLENBQUM7U0FDRixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUdELGNBQWM7UUFRWixNQUFN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RztnQkFDbEIsS0FBSyxDQUFDLE9BQVEsQ0FBQztvQkFDWCxRQUFRLEVBQUUsR0FBRyxDQUFDLElBQUk7aUJBQ3JCLENBQUMsQ0FBQztnQkFDSCxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ3BCLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUN2QixDQUFDO1NBQ0osQ0FBQyxDQUFDO1FBQ0gsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFLRCxNQUFNLEVBQUU7SUFFUixDQUFDO0lBS0QsUUFBUSxFQUFFO0lBRVYsQ0FBQztJQUtELGlCQUFpQixFQUFFO1FBQ2pCLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixRQUFRLEVBQUUsSUFBSTtZQUNkLE1BQU0sRUFBRSxLQUFLO1NBQ2QsQ0FBQyxDQUFDO1FBQ0gsRUFBRSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUtELGFBQWEsRUFBRTtRQUNiLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixRQUFRLEVBQUUsS0FBSztZQUNmLE1BQU0sRUFBRSxJQUFJO1NBQ2IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUtELGlCQUFpQixFQUFFLFVBQVUsT0FBaUQ7UUFDNUUsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNsRCxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBBcGkgZnJvbSAnLi4vLi4vc2VydmljZS9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBJTXlBcHAgfSBmcm9tICcuLi8uLi9hcHAnO1xuY29uc3QgYXBwID0gZ2V0QXBwPElNeUFwcD4oKTtcblxuaW1wb3J0IEhvcm9zY29wZSBmcm9tICcuLi8uLi9pbnRlcmZhY2UvaG9yb3Njb3BlJztcbmltcG9ydCBVc2VyIGZyb20gJy4uLy4uL2ludGVyZmFjZS91c2VyJztcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICB1c2VySW5mbzogeyBjb25zdGVsbGF0aW9uOiAnJyB9IGFzIFVzZXIsXG4gICAgcHN5VGVzdDogW10sXG4gICAgY3VyclNob3BMaXN0OiBbXSxcbiAgICBkYXRhQWxyZWFkeTogZmFsc2UsXG4gICAgY3VycmVudENpdHk6ICcnLFxuICAgIHNlbGVjdFZhbHVlOiAnJyxcbiAgICBjdXJyZW50UXJjb2RlOiAnJyxcbiAgICBjdXJyZW50UGhvbmU6ICcnLFxuICAgIHBob25lOiAnJyxcbiAgICBwb3BIaWRkZW46IHRydWUsXG4gICAgcGFnZUxvYWRlZDogZmFsc2UsXG4gICAgcG9wV2VjaGF0OiBmYWxzZSxcbiAgICBjdXJyZW50UGFnZTogMSxcbiAgICBwYWdlU2l6ZTogMTAsXG4gICAgdG90YWxDb3VudDogMCxcbiAgICBwdWxsRG93bjogZmFsc2UsXG4gICAgcHVsbFVwOiBmYWxzZSxcbiAgICBob3Jvc2NvcGVEYXRhOiB7fSBhcyBIb3Jvc2NvcGUsXG4gIH0sXG5cbiAgb25Mb2FkICgpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIHd4LmdldFN0b3JhZ2Uoe1xuICAgICAga2V5OiAndXNlcicsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgX3RoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgIHVzZXJJbmZvOiByZXMuZGF0YSxcbiAgICAgICAgfSk7XG4gICAgICAgIF90aGlzLmdldFVzZXJJbmZvKCk7XG4gICAgICAgIF90aGlzLmdldFBzeUxpc3QoKTtcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgdGhpcy5nZXRSaWdodENvbmZpZygpO1xuICB9LFxuICBcbiAgLyoqIOiOt+WPluS8muWRmOadg+ebiumFjee9riAqL1xuICBnZXRSaWdodENvbmZpZygpIHtcbiAgICAvLyBBcGkuZ2V0UmlnaHRDb25maWcoKS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgIC8vICAgY29uc3QgcmlnaHRDb25maWcgPSByZXN1bHQuZGF0YTtcbiAgICAvLyAgIHd4LnNldFN0b3JhZ2Uoe1xuICAgIC8vICAgICBrZXk6ICdyaWdodENvbmZpZycsXG4gICAgLy8gICAgIGRhdGE6IHJpZ2h0Q29uZmlnLFxuICAgIC8vICAgfSk7XG4gICAgLy8gfSk7XG4gICAgY29uc3QgcmlnaHRDb25maWc6IGFueSA9IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ+aXoOS8muWRmCcsXG4gICAgICAgIC8vIOaYn+W6p+i/kOWKv1xuICAgICAgICBob3Jvc2NvcGU6IDk5OTk5LFxuICAgICAgICB5ZWFyUHJpY2U6IDAsXG4gICAgICAgIHNlYXNvblByaWNlOiAwLFxuICAgICAgICBtb250aFByaWNlOiAwLFxuICAgICAgICBwc3ljaG9sb2dpY2FsVGVzdDogOTk5OTksXG4gICAgICAgIGNvbnN0ZWxsYXRpb25NYXRjaGluZzogOTk5OTksXG4gICAgICAgIGZhdGVNYXRjaDogMyxcbiAgICAgICAgZmF0ZVdhdGNoOiAyMCxcbiAgICAgICAgZmF0ZUNoYXQ6IDMsXG4gICAgICAgIHdob0xpa2VNZTogMCxcbiAgICAgICAgbGlrZUVhY2g6IDAsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAn6buE6ZOc5Lya5ZGYJyxcbiAgICAgICAgeWVhclByaWNlOiAxMjAsXG4gICAgICAgIHNlYXNvblByaWNlOiAzMCxcbiAgICAgICAgbW9udGhQcmljZTogMTAsIFxuICAgICAgICBob3Jvc2NvcGU6IDk5OTk5LCAvLyDmmJ/luqfov5Dlir9cbiAgICAgICAgcHN5Y2hvbG9naWNhbFRlc3Q6IDk5OTk5LCAvLyDlv4PnkIbmtYvor5VcbiAgICAgICAgY29uc3RlbGxhdGlvbk1hdGNoaW5nOiA5OTk5OSwgLy8g5pif5bqn5Yy56YWNXG4gICAgICAgIGZhdGVNYXRjaDogOTk5OTksIC8vIOe8mOWIhuWMuemFjVxuICAgICAgICBmYXRlV2F0Y2g6IDk5OTk5LCAvLyDnvJjliIbkuIvmu5Hmn6XnnItcbiAgICAgICAgZmF0ZUNoYXQ6IDIwLCAvLyDnvJjliIbogYrlpKlcbiAgICAgICAgd2hvTGlrZU1lOiA5OTk5OSwgLy8g6LCB5Zac5qyi5oiRXG4gICAgICAgIGxpa2VFYWNoOiA5OTk5OSwgLy8g5LqS55u45Zac5qyiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAn55m96YeR5Lya5ZGYJyxcbiAgICAgICAgeWVhclByaWNlOiAyNDAsXG4gICAgICAgIHNlYXNvblByaWNlOiA2MCxcbiAgICAgICAgbW9udGhQcmljZTogMjAsXG4gICAgICAgIGhvcm9zY29wZTogOTk5OTksXG4gICAgICAgIHBzeWNob2xvZ2ljYWxUZXN0OiA5OTk5OSxcbiAgICAgICAgY29uc3RlbGxhdGlvbk1hdGNoaW5nOiA5OTk5OSxcbiAgICAgICAgZmF0ZU1hdGNoOiA5OTk5OSxcbiAgICAgICAgZmF0ZVdhdGNoOiA5OTk5OSxcbiAgICAgICAgZmF0ZUNoYXQ6IDk5OTksXG4gICAgICAgIHdob0xpa2VNZTogOTk5OTksXG4gICAgICAgIGxpa2VFYWNoOiA5OTk5OSxcbiAgICAgIH0sXG4gICAgXTtcbiAgICB3eC5zZXRTdG9yYWdlKHsga2V5OiAncmlnaHRDb25maWcnLCBkYXRhOiByaWdodENvbmZpZ30pO1xuICB9LFxuICBcbiAgLyoqIOaYn+W6p+i/kOWKvyAqL1xuICBnb1h6eXMoKSB7XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6IGAuLi94enlzL3h6eXNgLFxuICAgIH0pXG4gIH0sXG5cbiAgLyoqIOW/g+eQhua1i+ivleWIl+ihqCAqL1xuICBnb1hsY3NMaXN0KCkge1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiBgLi4veGxjc0xpc3QveGxjc0xpc3RgLFxuICAgIH0pO1xuICB9LFxuICBcbiAgLyoqIOW/g+eQhua1i+ivlSAqL1xuICBkb1Rlc3QoZTogYW55KSB7XG4gICAgY29uc3Qge1xuICAgICAgaWQsXG4gICAgICB0eXBlLFxuICAgIH0gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldDtcbiAgICBpZiAodHlwZSA9PT0gJzMnKSB7XG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiBgLi4vcXNxeS9xc3F5P2lkPSR7aWR9YCxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiBgLi4veGxjc0RldGFpbC94bGNzRGV0YWlsP2lkPSR7aWR9YCxcbiAgICAgIH0pXG4gICAgfVxuICB9LFxuXG4gIC8qKiDmmJ/luqfljLnphY0gKi9cbiAgZ29NYXRjaCgpIHtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogYC4uL21hdGNoZVh6L21hdGNoZVh6YCxcbiAgICB9KVxuICB9LFxuXG4gIC8qKiDojrflj5blv4PnkIbmtYvor5UgKi9cbiAgZ2V0UHN5TGlzdCgpIHtcbiAgICBBcGkuZ2V0UHN5TGlzdCgpLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgcHN5VGVzdDogcmVzdWx0LmRhdGEsXG4gICAgICB9KVxuICAgIH0pXG4gIH0sXG5cbiAgLyoqIOi/kOWKv+WIhuaekCAgKi9cbiAgZ2V0SG9yb3Njb3BldChlOiBhbnkpIHtcbiAgICBjb25zdCBjb25zTmFtZSA9IHRoaXMuZGF0YS51c2VySW5mby5jb25zdGVsbGF0aW9uID8gdGhpcy5kYXRhLnVzZXJJbmZvLmNvbnN0ZWxsYXRpb24gOiAn55m9576K5bqnJztcbiAgICBjb25zdCB7IHR5cGUgfSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0O1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiAnLi4vcmVhbFh6eXNEZXRhaWwvcmVhbFh6eXNEZXRhaWw/Y29uc05hbWU9Jytjb25zTmFtZSsnJnR5cGU9Jyt0eXBlXG4gICAgfSlcbiAgfSxcblxuICAvKiog6I635Y+W55So5oi36K+m57uG5L+h5oGvICovXG4gIGdldFVzZXJJbmZvKCkge1xuICAgIGNvbnN0IHsgb3BlbmlkIH0gPSB0aGlzLmRhdGEudXNlckluZm87XG4gICAgQXBpLmdldFVzZXJJbmZvKG9wZW5pZCB8fCAnJykudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgY29uc3QgdXNlckluZm8gPSByZXN1bHQuZGF0YTtcbiAgICAgICAgYXBwLmdsb2JhbERhdGEudXNlckluZm8gPSByZXN1bHQuZGF0YTtcbiAgICAgICAgd3guc2V0U3RvcmFnZSh7XG4gICAgICAgICAga2V5OiAndXNlckluZm8nLFxuICAgICAgICAgIGRhdGE6IE9iamVjdC5hc3NpZ24oe29wZW5pZH0sIHJlc3VsdC5kYXRhKSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgIHVzZXJJbmZvLFxuICAgICAgICAgIHBhZ2VMb2FkZWQ6IHRydWUsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIHRvcEluZm8oKSB7XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6ICcuLi9iYXIvaW5kZXgnXG4gICAgfSlcbiAgfSxcblxuICBvblJlYWR5OiBmdW5jdGlvbiAoKSB7XG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XG4gICAqL1xuICBvblNob3c6IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBpZiAodGhpcy5kYXRhLnBhZ2VMb2FkZWQgPT09IHRydWUpIHtcbiAgICAvLyAgIHRoaXMuZ2V0VXNlckluZm8oKTtcbiAgICAvLyB9XG4gICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuICAgIHd4LmdldFN0b3JhZ2Uoe1xuICAgICAgICBrZXk6ICd1c2VyJyxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgX3RoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgICAgICAgIHVzZXJJbmZvOiByZXMuZGF0YSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgX3RoaXMuZ2V0VXNlckluZm8oKTtcbiAgICAgICAgICAgIF90aGlzLmdldFBzeUxpc3QoKTtcbiAgICAgICAgfSxcbiAgICB9KTtcbiAgICBfdGhpcy5nZXRQc3lMaXN0KCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXG4gICAqL1xuICBvbkhpZGU6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxuICAgKi9cbiAgb25VbmxvYWQ6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDkuIvmi4nliLfmlrBcbiAgICovXG4gIG9uUHVsbERvd25SZWZyZXNoOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBwdWxsRG93bjogdHJ1ZSxcbiAgICAgIHB1bGxVcDogZmFsc2VcbiAgICB9KTtcbiAgICB3eC5zdG9wUHVsbERvd25SZWZyZXNoKCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxuICAgKi9cbiAgb25SZWFjaEJvdHRvbTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgcHVsbERvd246IGZhbHNlLFxuICAgICAgcHVsbFVwOiB0cnVlXG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUqOaIt+eCueWHu+WPs+S4iuinkuWIhuS6q1xuICAgKi9cbiAgb25TaGFyZUFwcE1lc3NhZ2U6IGZ1bmN0aW9uIChvcHRpb25zPzogUGFnZS5JU2hhcmVBcHBNZXNzYWdlT3B0aW9uIHwgdW5kZWZpbmVkKTogUGFnZS5JQ3VzdG9tU2hhcmVDb250ZW50IHtcbiAgICBjb25zb2xlLmxvZygnb25TaGFyZUFwcE1lc3NhZ2Ugb3B0aW9ucycsIG9wdGlvbnMpO1xuICAgIHJldHVybiB7fTtcbiAgfVxufSkiXX0=