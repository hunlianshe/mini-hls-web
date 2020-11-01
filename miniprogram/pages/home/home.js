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
                constellationMatching: 0,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBaUQ7QUFFakQsTUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFVLENBQUM7QUFLN0IsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFLEVBQUUsYUFBYSxFQUFFLEVBQUUsRUFBVTtRQUN2QyxPQUFPLEVBQUUsRUFBRTtRQUNYLFlBQVksRUFBRSxFQUFFO1FBQ2hCLFdBQVcsRUFBRSxLQUFLO1FBQ2xCLFdBQVcsRUFBRSxFQUFFO1FBQ2YsV0FBVyxFQUFFLEVBQUU7UUFDZixhQUFhLEVBQUUsRUFBRTtRQUNqQixZQUFZLEVBQUUsRUFBRTtRQUNoQixLQUFLLEVBQUUsRUFBRTtRQUNULFNBQVMsRUFBRSxJQUFJO1FBQ2YsVUFBVSxFQUFFLEtBQUs7UUFDakIsU0FBUyxFQUFFLEtBQUs7UUFDaEIsV0FBVyxFQUFFLENBQUM7UUFDZCxRQUFRLEVBQUUsRUFBRTtRQUNaLFVBQVUsRUFBRSxDQUFDO1FBQ2IsUUFBUSxFQUFFLEtBQUs7UUFDZixNQUFNLEVBQUUsS0FBSztRQUNiLGFBQWEsRUFBRSxFQUFlO0tBQy9CO0lBRUQsTUFBTTtRQUNKLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztRQUNqQixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLE1BQU07WUFDWCxPQUFPLEVBQUUsVUFBUyxHQUFHO2dCQUNuQixLQUFLLENBQUMsT0FBUSxDQUFDO29CQUNiLFFBQVEsRUFBRSxHQUFHLENBQUMsSUFBSTtpQkFDbkIsQ0FBQyxDQUFDO2dCQUNILEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDcEIsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3JCLENBQUM7U0FDRixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUdELGNBQWM7UUFRWixNQUFN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RztnQkFDbEIsS0FBSyxDQUFDLE9BQVEsQ0FBQztvQkFDWCxRQUFRLEVBQUUsR0FBRyxDQUFDLElBQUk7aUJBQ3JCLENBQUMsQ0FBQztnQkFDSCxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ3BCLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUN2QixDQUFDO1NBQ0osQ0FBQyxDQUFDO1FBQ0gsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFLRCxNQUFNLEVBQUU7SUFFUixDQUFDO0lBS0QsUUFBUSxFQUFFO0lBRVYsQ0FBQztJQUtELGlCQUFpQixFQUFFO1FBQ2pCLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixRQUFRLEVBQUUsSUFBSTtZQUNkLE1BQU0sRUFBRSxLQUFLO1NBQ2QsQ0FBQyxDQUFDO1FBQ0gsRUFBRSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUtELGFBQWEsRUFBRTtRQUNiLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixRQUFRLEVBQUUsS0FBSztZQUNmLE1BQU0sRUFBRSxJQUFJO1NBQ2IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUtELGlCQUFpQixFQUFFLFVBQVUsT0FBaUQ7UUFDNUUsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNsRCxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBBcGkgZnJvbSAnLi4vLi4vc2VydmljZS9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBJTXlBcHAgfSBmcm9tICcuLi8uLi9hcHAnO1xuY29uc3QgYXBwID0gZ2V0QXBwPElNeUFwcD4oKTtcblxuaW1wb3J0IEhvcm9zY29wZSBmcm9tICcuLi8uLi9pbnRlcmZhY2UvaG9yb3Njb3BlJztcbmltcG9ydCBVc2VyIGZyb20gJy4uLy4uL2ludGVyZmFjZS91c2VyJztcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICB1c2VySW5mbzogeyBjb25zdGVsbGF0aW9uOiAnJyB9IGFzIFVzZXIsXG4gICAgcHN5VGVzdDogW10sXG4gICAgY3VyclNob3BMaXN0OiBbXSxcbiAgICBkYXRhQWxyZWFkeTogZmFsc2UsXG4gICAgY3VycmVudENpdHk6ICcnLFxuICAgIHNlbGVjdFZhbHVlOiAnJyxcbiAgICBjdXJyZW50UXJjb2RlOiAnJyxcbiAgICBjdXJyZW50UGhvbmU6ICcnLFxuICAgIHBob25lOiAnJyxcbiAgICBwb3BIaWRkZW46IHRydWUsXG4gICAgcGFnZUxvYWRlZDogZmFsc2UsXG4gICAgcG9wV2VjaGF0OiBmYWxzZSxcbiAgICBjdXJyZW50UGFnZTogMSxcbiAgICBwYWdlU2l6ZTogMTAsXG4gICAgdG90YWxDb3VudDogMCxcbiAgICBwdWxsRG93bjogZmFsc2UsXG4gICAgcHVsbFVwOiBmYWxzZSxcbiAgICBob3Jvc2NvcGVEYXRhOiB7fSBhcyBIb3Jvc2NvcGUsXG4gIH0sXG5cbiAgb25Mb2FkICgpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIHd4LmdldFN0b3JhZ2Uoe1xuICAgICAga2V5OiAndXNlcicsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgX3RoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgIHVzZXJJbmZvOiByZXMuZGF0YSxcbiAgICAgICAgfSk7XG4gICAgICAgIF90aGlzLmdldFVzZXJJbmZvKCk7XG4gICAgICAgIF90aGlzLmdldFBzeUxpc3QoKTtcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgdGhpcy5nZXRSaWdodENvbmZpZygpO1xuICB9LFxuICBcbiAgLyoqIOiOt+WPluS8muWRmOadg+ebiumFjee9riAqL1xuICBnZXRSaWdodENvbmZpZygpIHtcbiAgICAvLyBBcGkuZ2V0UmlnaHRDb25maWcoKS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgIC8vICAgY29uc3QgcmlnaHRDb25maWcgPSByZXN1bHQuZGF0YTtcbiAgICAvLyAgIHd4LnNldFN0b3JhZ2Uoe1xuICAgIC8vICAgICBrZXk6ICdyaWdodENvbmZpZycsXG4gICAgLy8gICAgIGRhdGE6IHJpZ2h0Q29uZmlnLFxuICAgIC8vICAgfSk7XG4gICAgLy8gfSk7XG4gICAgY29uc3QgcmlnaHRDb25maWc6IGFueSA9IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ+aXoOS8muWRmCcsXG4gICAgICAgIC8vIOaYn+W6p+i/kOWKv1xuICAgICAgICBob3Jvc2NvcGU6IDk5OTk5LFxuICAgICAgICB5ZWFyUHJpY2U6IDAsXG4gICAgICAgIHNlYXNvblByaWNlOiAwLFxuICAgICAgICBtb250aFByaWNlOiAwLFxuICAgICAgICBwc3ljaG9sb2dpY2FsVGVzdDogOTk5OTksXG4gICAgICAgIGNvbnN0ZWxsYXRpb25NYXRjaGluZzogMCxcbiAgICAgICAgZmF0ZU1hdGNoOiAzLFxuICAgICAgICBmYXRlV2F0Y2g6IDIwLFxuICAgICAgICBmYXRlQ2hhdDogMyxcbiAgICAgICAgd2hvTGlrZU1lOiAwLFxuICAgICAgICBsaWtlRWFjaDogMCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICfpu4Tpk5zkvJrlkZgnLFxuICAgICAgICB5ZWFyUHJpY2U6IDEyMCxcbiAgICAgICAgc2Vhc29uUHJpY2U6IDMwLFxuICAgICAgICBtb250aFByaWNlOiAxMCwgXG4gICAgICAgIGhvcm9zY29wZTogOTk5OTksIC8vIOaYn+W6p+i/kOWKv1xuICAgICAgICBwc3ljaG9sb2dpY2FsVGVzdDogOTk5OTksIC8vIOW/g+eQhua1i+ivlVxuICAgICAgICBjb25zdGVsbGF0aW9uTWF0Y2hpbmc6IDk5OTk5LCAvLyDmmJ/luqfljLnphY1cbiAgICAgICAgZmF0ZU1hdGNoOiA5OTk5OSwgLy8g57yY5YiG5Yy56YWNXG4gICAgICAgIGZhdGVXYXRjaDogOTk5OTksIC8vIOe8mOWIhuS4i+a7keafpeeci+mZkOWItlxuICAgICAgICBmYXRlQ2hhdDogMjAsIC8vIOe8mOWIhuiBiuWkqVxuICAgICAgICB3aG9MaWtlTWU6IDk5OTk5LCAvLyDosIHllpzmrKLmiJFcbiAgICAgICAgbGlrZUVhY2g6IDk5OTk5LCAvLyDkupLnm7jllpzmrKJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICfnmb3ph5HkvJrlkZgnLFxuICAgICAgICB5ZWFyUHJpY2U6IDI0MCxcbiAgICAgICAgc2Vhc29uUHJpY2U6IDYwLFxuICAgICAgICBtb250aFByaWNlOiAyMCxcbiAgICAgICAgaG9yb3Njb3BlOiA5OTk5OSxcbiAgICAgICAgcHN5Y2hvbG9naWNhbFRlc3Q6IDk5OTk5LFxuICAgICAgICBjb25zdGVsbGF0aW9uTWF0Y2hpbmc6IDk5OTk5LFxuICAgICAgICBmYXRlTWF0Y2g6IDk5OTk5LFxuICAgICAgICBmYXRlV2F0Y2g6IDk5OTk5LFxuICAgICAgICBmYXRlQ2hhdDogOTk5OSxcbiAgICAgICAgd2hvTGlrZU1lOiA5OTk5OSxcbiAgICAgICAgbGlrZUVhY2g6IDk5OTk5LFxuICAgICAgfSxcbiAgICBdO1xuICAgIHd4LnNldFN0b3JhZ2UoeyBrZXk6ICdyaWdodENvbmZpZycsIGRhdGE6IHJpZ2h0Q29uZmlnfSk7XG4gIH0sXG4gIFxuICAvKiog5pif5bqn6L+Q5Yq/ICovXG4gIGdvWHp5cygpIHtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogYC4uL3h6eXMveHp5c2AsXG4gICAgfSlcbiAgfSxcblxuICAvKiog5b+D55CG5rWL6K+V5YiX6KGoICovXG4gIGdvWGxjc0xpc3QoKSB7XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6IGAuLi94bGNzTGlzdC94bGNzTGlzdGAsXG4gICAgfSk7XG4gIH0sXG4gIFxuICAvKiog5b+D55CG5rWL6K+VICovXG4gIGRvVGVzdChlOiBhbnkpIHtcbiAgICBjb25zdCB7XG4gICAgICBpZCxcbiAgICAgIHR5cGUsXG4gICAgfSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0O1xuICAgIGlmICh0eXBlID09PSAnMycpIHtcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAuLi9xc3F5L3FzcXk/aWQ9JHtpZH1gLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAuLi94bGNzRGV0YWlsL3hsY3NEZXRhaWw/aWQ9JHtpZH1gLFxuICAgICAgfSlcbiAgICB9XG4gIH0sXG5cbiAgLyoqIOaYn+W6p+WMuemFjSAqL1xuICBnb01hdGNoKCkge1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiBgLi4vbWF0Y2hlWHovbWF0Y2hlWHpgLFxuICAgIH0pXG4gIH0sXG5cbiAgLyoqIOiOt+WPluW/g+eQhua1i+ivlSAqL1xuICBnZXRQc3lMaXN0KCkge1xuICAgIEFwaS5nZXRQc3lMaXN0KCkudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICBwc3lUZXN0OiByZXN1bHQuZGF0YSxcbiAgICAgIH0pXG4gICAgfSlcbiAgfSxcblxuICAvKiog6L+Q5Yq/5YiG5p6QICAqL1xuICBnZXRIb3Jvc2NvcGV0KGU6IGFueSkge1xuICAgIGNvbnN0IGNvbnNOYW1lID0gdGhpcy5kYXRhLnVzZXJJbmZvLmNvbnN0ZWxsYXRpb24gPyB0aGlzLmRhdGEudXNlckluZm8uY29uc3RlbGxhdGlvbiA6ICfnmb3nvorluqcnO1xuICAgIGNvbnN0IHsgdHlwZSB9ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQ7XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6ICcuLi9yZWFsWHp5c0RldGFpbC9yZWFsWHp5c0RldGFpbD9jb25zTmFtZT0nK2NvbnNOYW1lKycmdHlwZT0nK3R5cGVcbiAgICB9KVxuICB9LFxuXG4gIC8qKiDojrflj5bnlKjmiLfor6bnu4bkv6Hmga8gKi9cbiAgZ2V0VXNlckluZm8oKSB7XG4gICAgY29uc3QgeyBvcGVuaWQgfSA9IHRoaXMuZGF0YS51c2VySW5mbztcbiAgICBBcGkuZ2V0VXNlckluZm8ob3BlbmlkIHx8ICcnKS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBjb25zdCB1c2VySW5mbyA9IHJlc3VsdC5kYXRhO1xuICAgICAgICBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlc3VsdC5kYXRhO1xuICAgICAgICB3eC5zZXRTdG9yYWdlKHtcbiAgICAgICAgICBrZXk6ICd1c2VySW5mbycsXG4gICAgICAgICAgZGF0YTogT2JqZWN0LmFzc2lnbih7b3BlbmlkfSwgcmVzdWx0LmRhdGEpLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgICAgdXNlckluZm8sXG4gICAgICAgICAgcGFnZUxvYWRlZDogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgdG9wSW5mbygpIHtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogJy4uL2Jhci9pbmRleCdcbiAgICB9KVxuICB9LFxuXG4gIG9uUmVhZHk6IGZ1bmN0aW9uICgpIHtcbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcbiAgICovXG4gIG9uU2hvdzogZnVuY3Rpb24gKCkge1xuICAgIC8vIGlmICh0aGlzLmRhdGEucGFnZUxvYWRlZCA9PT0gdHJ1ZSkge1xuICAgIC8vICAgdGhpcy5nZXRVc2VySW5mbygpO1xuICAgIC8vIH1cbiAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG4gICAgd3guZ2V0U3RvcmFnZSh7XG4gICAgICAgIGtleTogJ3VzZXInLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICBfdGhpcy5zZXREYXRhISh7XG4gICAgICAgICAgICAgICAgdXNlckluZm86IHJlcy5kYXRhLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBfdGhpcy5nZXRVc2VySW5mbygpO1xuICAgICAgICAgICAgX3RoaXMuZ2V0UHN5TGlzdCgpO1xuICAgICAgICB9LFxuICAgIH0pO1xuICAgIF90aGlzLmdldFBzeUxpc3QoKTtcbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cbiAgICovXG4gIG9uSGlkZTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Y246L29XG4gICAqL1xuICBvblVubG9hZDogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOS4i+aLieWIt+aWsFxuICAgKi9cbiAgb25QdWxsRG93blJlZnJlc2g6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIHB1bGxEb3duOiB0cnVlLFxuICAgICAgcHVsbFVwOiBmYWxzZVxuICAgIH0pO1xuICAgIHd4LnN0b3BQdWxsRG93blJlZnJlc2goKTtcbiAgfSxcblxuICAvKipcbiAgICog6aG16Z2i5LiK5ouJ6Kem5bqV5LqL5Lu255qE5aSE55CG5Ye95pWwXG4gICAqL1xuICBvblJlYWNoQm90dG9tOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBwdWxsRG93bjogZmFsc2UsXG4gICAgICBwdWxsVXA6IHRydWVcbiAgICB9KTtcbiAgfSxcblxuICAvKipcbiAgICog55So5oi354K55Ye75Y+z5LiK6KeS5YiG5LqrXG4gICAqL1xuICBvblNoYXJlQXBwTWVzc2FnZTogZnVuY3Rpb24gKG9wdGlvbnM/OiBQYWdlLklTaGFyZUFwcE1lc3NhZ2VPcHRpb24gfCB1bmRlZmluZWQpOiBQYWdlLklDdXN0b21TaGFyZUNvbnRlbnQge1xuICAgIGNvbnNvbGUubG9nKCdvblNoYXJlQXBwTWVzc2FnZSBvcHRpb25zJywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHt9O1xuICB9XG59KSJdfQ==