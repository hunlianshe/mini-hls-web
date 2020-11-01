"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Api = require("../../service/api.service");
Page({
    data: {
        user: { openid: '' },
        userInfo: {},
        userStatistics: {},
        pageLoaded: false,
        meLike: 0,
        likeMe: 0,
        likeEachOther: 0,
        openVipImage: '../../public/image/openVip.png',
        showDialog: false,
    },
    onLoad: function () {
        let _this = this;
        wx.getStorage({
            key: 'user',
            success: function (res) {
                _this.setData({
                    user: res.data
                });
            },
        });
        this.getUserInfo();
        this.getUsersLikeCount();
        this.setData({
            pageLoaded: true,
        });
    },
    getUserInfo() {
        let _this = this;
        wx.getStorage({
            key: 'user',
            success: function (res) {
                const { openid } = res.data;
                _this.requestForUserInfo(openid);
            },
        });
    },
    requestForUserInfo(openid) {
        Api.getUserInfo(openid).then((result) => {
            if (result) {
                const userInfo = result.data;
                this.setData({
                    userInfo,
                });
            }
        });
    },
    getUsersLikeCount() {
        Api.getUsersLikeCount().then((result) => {
            if (result) {
                const usersLikeCount = result.data;
                let meLike, likeMe, likeEachOther;
                usersLikeCount.forEach((e) => {
                    if (e.type === "meLike") {
                        meLike = e.count;
                    }
                    else if (e.type === "likeMe") {
                        likeMe = e.count;
                    }
                    else {
                        likeEachOther = e.count;
                    }
                });
                this.setData({
                    meLike,
                    likeMe,
                    likeEachOther,
                });
            }
        });
    },
    goXlcsList() {
        wx.navigateTo({
            url: `../xlcsList/xlcsList`,
        });
    },
    register() {
        wx.navigateTo({
            url: `../register/register`,
        });
    },
    myImages() {
        wx.navigateTo({
            url: `../myImages/myImages`,
        });
    },
    goMatchStandard() {
        wx.navigateTo({
            url: `../registerStandard/registerStandard?type=usercenter`,
        });
    },
    goRecharge() {
        wx.navigateTo({
            url: `../../packageMyhome/pages/recharge/recharge`,
        });
    },
    goFateList(e) {
        const { type } = e.currentTarget.dataset;
        if (type == 2 || type == 3) {
            this.setData({
                showDialog: true,
            });
            return;
        }
        wx.navigateTo({
            url: `../fateList/fateList?type=${type}`,
        });
    },
    openVip() {
        wx.navigateTo({
            url: `../../packageMyhome/pages/vipCenter/vipCenter`,
        });
    },
    onReady: function () {
    },
    onShow: function () {
        let _this = this;
        wx.getStorage({
            key: 'user',
            success: function (res) {
                _this.setData({
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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXlIb21lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibXlIb21lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsaURBQWlEO0FBRWpELElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUU7UUFDcEIsUUFBUSxFQUFFLEVBQUU7UUFDWixjQUFjLEVBQUUsRUFBRTtRQUNsQixVQUFVLEVBQUUsS0FBSztRQUNqQixNQUFNLEVBQUUsQ0FBQztRQUNULE1BQU0sRUFBRSxDQUFDO1FBQ1QsYUFBYSxFQUFFLENBQUM7UUFDaEIsWUFBWSxFQUFFLGdDQUFnQztRQUM5QyxVQUFVLEVBQUUsS0FBSztLQUNsQjtJQUVELE1BQU0sRUFBRTtRQUNOLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQTtRQUNoQixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLE1BQU07WUFDWCxPQUFPLEVBQUUsVUFBUyxHQUFHO2dCQUNuQixLQUFLLENBQUMsT0FBUSxDQUFDO29CQUNiLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSTtpQkFDZixDQUFDLENBQUE7WUFDSixDQUFDO1NBQ0YsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixVQUFVLEVBQUUsSUFBSTtTQUNqQixDQUFDLENBQUE7SUFDSixDQUFDO0lBR0QsV0FBVztRQUNULElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztRQUNqQixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLE1BQU07WUFDWCxPQUFPLEVBQUUsVUFBVSxHQUFHO2dCQUNwQixNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztnQkFDNUIsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0s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Q2xCLEtBQUssQ0FBQyxPQUFRLENBQUM7b0JBQ1gsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJO2lCQUNqQixDQUFDLENBQUM7WUFDUCxDQUFDO1NBQ0osQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxNQUFNLEVBQUU7SUFFUixDQUFDO0lBRUQsUUFBUSxFQUFFO0lBRVYsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0ICogYXMgQXBpIGZyb20gJy4uLy4uL3NlcnZpY2UvYXBpLnNlcnZpY2UnO1xuXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIHVzZXI6IHsgb3BlbmlkOiAnJyB9LFxuICAgIHVzZXJJbmZvOiB7fSxcbiAgICB1c2VyU3RhdGlzdGljczoge30sXG4gICAgcGFnZUxvYWRlZDogZmFsc2UsXG4gICAgbWVMaWtlOiAwLFxuICAgIGxpa2VNZTogMCxcbiAgICBsaWtlRWFjaE90aGVyOiAwLFxuICAgIG9wZW5WaXBJbWFnZTogJy4uLy4uL3B1YmxpYy9pbWFnZS9vcGVuVmlwLnBuZycsXG4gICAgc2hvd0RpYWxvZzogZmFsc2UsXG4gIH0sXG5cbiAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IF90aGlzID0gdGhpc1xuICAgIHd4LmdldFN0b3JhZ2Uoe1xuICAgICAga2V5OiAndXNlcicsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgX3RoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgIHVzZXI6IHJlcy5kYXRhXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgIH0pO1xuICAgIHRoaXMuZ2V0VXNlckluZm8oKTtcbiAgICB0aGlzLmdldFVzZXJzTGlrZUNvdW50KCk7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBwYWdlTG9hZGVkOiB0cnVlLFxuICAgIH0pXG4gIH0sXG5cbiAgLyoqIOiOt+WPlueUqOaIt+S/oeaBryAqL1xuICBnZXRVc2VySW5mbygpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIHd4LmdldFN0b3JhZ2Uoe1xuICAgICAga2V5OiAndXNlcicsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgIGNvbnN0IHsgb3BlbmlkIH0gPSByZXMuZGF0YTtcbiAgICAgICAgX3RoaXMucmVxdWVzdEZvclVzZXJJbmZvKG9wZW5pZCk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9LFxuICByZXF1ZXN0Rm9yVXNlckluZm8ob3BlbmlkOiBzdHJpbmcpIHtcbiAgICBBcGkuZ2V0VXNlckluZm8ob3BlbmlkKS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBjb25zdCB1c2VySW5mbyA9IHJlc3VsdC5kYXRhO1xuICAgICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgICB1c2VySW5mbyxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqIOiOt+WPluWWnOasoueahOexu+WIq+WSjOaVsOmHjyAqL1xuICBnZXRVc2Vyc0xpa2VDb3VudCgpIHtcbiAgICBBcGkuZ2V0VXNlcnNMaWtlQ291bnQoKS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBjb25zdCB1c2Vyc0xpa2VDb3VudCA9IHJlc3VsdC5kYXRhO1xuICAgICAgICBsZXQgbWVMaWtlLCBsaWtlTWUsIGxpa2VFYWNoT3RoZXI7XG4gICAgICAgIHVzZXJzTGlrZUNvdW50LmZvckVhY2goKGU6IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChlLnR5cGUgPT09IFwibWVMaWtlXCIpIHtcbiAgICAgICAgICAgIG1lTGlrZSA9IGUuY291bnQ7XG4gICAgICAgICAgfSBlbHNlIGlmIChlLnR5cGUgPT09IFwibGlrZU1lXCIpIHtcbiAgICAgICAgICAgIGxpa2VNZSA9IGUuY291bnQ7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxpa2VFYWNoT3RoZXIgPSBlLmNvdW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgIG1lTGlrZSxcbiAgICAgICAgICBsaWtlTWUsXG4gICAgICAgICAgbGlrZUVhY2hPdGhlcixcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqIOW/g+eQhua1i+ivleWIl+ihqCAqL1xuICBnb1hsY3NMaXN0KCkge1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiBgLi4veGxjc0xpc3QveGxjc0xpc3RgLFxuICAgIH0pXG4gIH0sXG5cbiAgcmVnaXN0ZXIoKSB7XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6IGAuLi9yZWdpc3Rlci9yZWdpc3RlcmAsXG4gICAgfSlcbiAgfSxcblxuICBteUltYWdlcygpIHtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogYC4uL215SW1hZ2VzL215SW1hZ2VzYCxcbiAgICB9KVxuICB9LFxuXG4gIGdvTWF0Y2hTdGFuZGFyZCgpIHtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogYC4uL3JlZ2lzdGVyU3RhbmRhcmQvcmVnaXN0ZXJTdGFuZGFyZD90eXBlPXVzZXJjZW50ZXJgLFxuICAgIH0pXG4gIH0sXG5cbiAgLyoqIOWFheWAvCAqL1xuICBnb1JlY2hhcmdlKCk6IGFueSB7XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6IGAuLi8uLi9wYWNrYWdlTXlob21lL3BhZ2VzL3JlY2hhcmdlL3JlY2hhcmdlYCxcbiAgICB9KVxuICB9LFxuXG4gIC8qKiBcbiAgICog5Zac5qyi5oiR5YiX6KGoXG4gICAqIOaIkeWWnOasolxuICAgKiDnm7jkupLllpzmrKJcbiAgICovXG4gIGdvRmF0ZUxpc3QoZTogYW55KSB7XG4gICAgY29uc3QgeyB0eXBlIH0gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldDtcbiAgICBpZiAodHlwZSA9PSAyIHx8IHR5cGUgPT0gMykge1xuICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgIHNob3dEaWFsb2c6IHRydWUsXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6IGAuLi9mYXRlTGlzdC9mYXRlTGlzdD90eXBlPSR7dHlwZX1gLFxuICAgIH0pXG4gIH0sXG5cbiAgLyoqIOW8gOWKqOS8muWRmCAqL1xuICBvcGVuVmlwKCkge1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiBgLi4vLi4vcGFja2FnZU15aG9tZS9wYWdlcy92aXBDZW50ZXIvdmlwQ2VudGVyYCxcbiAgICB9KTtcbiAgfSxcblxuICBvblJlYWR5OiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICBvblNob3c6IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBjb25zdCB7IHBhZ2VMb2FkZWQgfSA9IHRoaXMuZGF0YTtcbiAgICAvLyBpZiAocGFnZUxvYWRlZCkge1xuICAgIC8vICAgdGhpcy5nZXRVc2VySW5mbygpO1xuICAgIC8vIH1cbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIHd4LmdldFN0b3JhZ2Uoe1xuICAgICAgICBrZXk6ICd1c2VyJyxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgX3RoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgICAgICAgIHVzZXI6IHJlcy5kYXRhXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICB9KTtcbiAgICB0aGlzLmdldFVzZXJJbmZvKCk7XG4gICAgdGhpcy5nZXRVc2Vyc0xpa2VDb3VudCgpO1xuICB9LFxuXG4gIG9uSGlkZTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgb25VbmxvYWQ6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxufSkiXX0=