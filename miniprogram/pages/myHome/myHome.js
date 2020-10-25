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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXlIb21lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibXlIb21lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsaURBQWlEO0FBRWpELElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUU7UUFDcEIsUUFBUSxFQUFFLEVBQUU7UUFDWixjQUFjLEVBQUUsRUFBRTtRQUNsQixVQUFVLEVBQUUsS0FBSztRQUNqQixNQUFNLEVBQUUsQ0FBQztRQUNULE1BQU0sRUFBRSxDQUFDO1FBQ1QsYUFBYSxFQUFFLENBQUM7UUFDaEIsWUFBWSxFQUFFLGdDQUFnQztLQUMvQztJQUVELE1BQU0sRUFBRTtRQUNOLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQTtRQUNoQixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLE1BQU07WUFDWCxPQUFPLEVBQUUsVUFBUyxHQUFHO2dCQUNuQixLQUFLLENBQUMsT0FBUSxDQUFDO29CQUNiLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSTtpQkFDZixDQUFDLENBQUE7WUFDSixDQUFDO1NBQ0YsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixVQUFVLEVBQUUsSUFBSTtTQUNqQixDQUFDLENBQUE7SUFDSixDQUFDO0lBR0QsV0FBVztRQUNULElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztRQUNqQixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLE1BQU07WUFDWCxPQUFPLEVBQUUsVUFBVSxHQUFHO2dCQUNwQixNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztnQkFDNUIsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25DLENBQUM7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LEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsTUFBTSxFQUFFO0lBRVIsQ0FBQztJQUVELFFBQVEsRUFBRTtJQUVWLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCAqIGFzIEFwaSBmcm9tICcuLi8uLi9zZXJ2aWNlL2FwaS5zZXJ2aWNlJztcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICB1c2VyOiB7IG9wZW5pZDogJycgfSxcbiAgICB1c2VySW5mbzoge30sXG4gICAgdXNlclN0YXRpc3RpY3M6IHt9LFxuICAgIHBhZ2VMb2FkZWQ6IGZhbHNlLFxuICAgIG1lTGlrZTogMCxcbiAgICBsaWtlTWU6IDAsXG4gICAgbGlrZUVhY2hPdGhlcjogMCxcbiAgICBvcGVuVmlwSW1hZ2U6ICcuLi8uLi9wdWJsaWMvaW1hZ2Uvb3BlblZpcC5wbmcnLFxuICB9LFxuXG4gIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXNcbiAgICB3eC5nZXRTdG9yYWdlKHtcbiAgICAgIGtleTogJ3VzZXInLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIF90aGlzLnNldERhdGEhKHtcbiAgICAgICAgICB1c2VyOiByZXMuZGF0YVxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICB9KTtcbiAgICB0aGlzLmdldFVzZXJJbmZvKCk7XG4gICAgdGhpcy5nZXRVc2Vyc0xpa2VDb3VudCgpO1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgcGFnZUxvYWRlZDogdHJ1ZSxcbiAgICB9KVxuICB9LFxuXG4gIC8qKiDojrflj5bnlKjmiLfkv6Hmga8gKi9cbiAgZ2V0VXNlckluZm8oKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICB3eC5nZXRTdG9yYWdlKHtcbiAgICAgIGtleTogJ3VzZXInLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICBjb25zdCB7IG9wZW5pZCB9ID0gcmVzLmRhdGE7XG4gICAgICAgIF90aGlzLnJlcXVlc3RGb3JVc2VySW5mbyhvcGVuaWQpO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfSxcbiAgcmVxdWVzdEZvclVzZXJJbmZvKG9wZW5pZDogc3RyaW5nKSB7XG4gICAgQXBpLmdldFVzZXJJbmZvKG9wZW5pZCkudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgY29uc3QgdXNlckluZm8gPSByZXN1bHQuZGF0YTtcbiAgICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgICAgdXNlckluZm8sXG4gICAgICAgICAgLy8gdXNlclN0YXRpc3RpY3M6IHVzZXJJbmZvLnN0YXRpc3RpY3MsXG4gICAgICAgIH0pO1xuICAgICAgICAvLyAgIHd4LnNldFN0b3JhZ2Uoe1xuICAgICAgICAvLyAgICAga2V5OiAndXNlclNob3BJbmZvJyxcbiAgICAgICAgLy8gICAgIGRhdGE6IHVzZXJJbmZvLFxuICAgICAgICAvLyAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIC8qKiDojrflj5bllpzmrKLnmoTnsbvliKvlkozmlbDph48gKi9cbiAgZ2V0VXNlcnNMaWtlQ291bnQoKSB7XG4gICAgQXBpLmdldFVzZXJzTGlrZUNvdW50KCkudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgY29uc3QgdXNlcnNMaWtlQ291bnQgPSByZXN1bHQuZGF0YTtcbiAgICAgICAgbGV0IG1lTGlrZSwgbGlrZU1lLCBsaWtlRWFjaE90aGVyO1xuICAgICAgICB1c2Vyc0xpa2VDb3VudC5mb3JFYWNoKChlOiBhbnkpID0+IHtcbiAgICAgICAgICBpZiAoZS50eXBlID09PSBcIm1lTGlrZVwiKSB7XG4gICAgICAgICAgICBtZUxpa2UgPSBlLmNvdW50O1xuICAgICAgICAgIH0gZWxzZSBpZiAoZS50eXBlID09PSBcImxpa2VNZVwiKSB7XG4gICAgICAgICAgICBsaWtlTWUgPSBlLmNvdW50O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsaWtlRWFjaE90aGVyID0gZS5jb3VudDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgICBtZUxpa2UsXG4gICAgICAgICAgbGlrZU1lLFxuICAgICAgICAgIGxpa2VFYWNoT3RoZXIsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIC8qKiDlv4PnkIbmtYvor5XliJfooaggKi9cbiAgZ29YbGNzTGlzdCgpIHtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogYC4uL3hsY3NMaXN0L3hsY3NMaXN0YCxcbiAgICB9KVxuICB9LFxuXG4gIHJlZ2lzdGVyKCkge1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiBgLi4vcmVnaXN0ZXIvcmVnaXN0ZXJgLFxuICAgIH0pXG4gIH0sXG5cbiAgbXlJbWFnZXMoKSB7XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6IGAuLi9teUltYWdlcy9teUltYWdlc2AsXG4gICAgfSlcbiAgfSxcblxuICBnb01hdGNoU3RhbmRhcmQoKSB7XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6IGAuLi9yZWdpc3RlclN0YW5kYXJkL3JlZ2lzdGVyU3RhbmRhcmQ/dHlwZT11c2VyY2VudGVyYCxcbiAgICB9KVxuICB9LFxuXG4gIC8qKiDlhYXlgLwgKi9cbiAgZ29SZWNoYXJnZSgpOiBhbnkge1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiBgLi4vLi4vcGFja2FnZU15aG9tZS9wYWdlcy9yZWNoYXJnZS9yZWNoYXJnZWAsXG4gICAgfSlcbiAgfSxcblxuICAvKiog5Zac5qyi5Lq65YiX6KGoICovXG4gIGdvRmF0ZUxpc3QoZTogYW55KSB7XG4gICAgLy8gY29uc3QgaWQgPSB0aGlzLmRhdGEudXNlckluZm8uU2hvcC5pZDtcbiAgICBjb25zdCB7IHR5cGUgfSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0O1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiBgLi4vZmF0ZUxpc3QvZmF0ZUxpc3Q/dHlwZT0ke3R5cGV9YCxcbiAgICB9KVxuICB9LFxuXG4gIC8qKiDlvIDliqjkvJrlkZggKi9cbiAgb3BlblZpcCgpIHtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogYC4uLy4uL3BhY2thZ2VNeWhvbWUvcGFnZXMvdmlwQ2VudGVyL3ZpcENlbnRlcmAsXG4gICAgfSk7XG4gIH0sXG5cbiAgb25SZWFkeTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgb25TaG93OiBmdW5jdGlvbiAoKSB7XG4gICAgLy8gY29uc3QgeyBwYWdlTG9hZGVkIH0gPSB0aGlzLmRhdGE7XG4gICAgLy8gaWYgKHBhZ2VMb2FkZWQpIHtcbiAgICAvLyAgIHRoaXMuZ2V0VXNlckluZm8oKTtcbiAgICAvLyB9XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICB3eC5nZXRTdG9yYWdlKHtcbiAgICAgICAga2V5OiAndXNlcicsXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgIF90aGlzLnNldERhdGEhKHtcbiAgICAgICAgICAgICAgICB1c2VyOiByZXMuZGF0YVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgfSk7XG4gICAgdGhpcy5nZXRVc2VySW5mbygpO1xuICAgIHRoaXMuZ2V0VXNlcnNMaWtlQ291bnQoKTtcbiAgfSxcblxuICBvbkhpZGU6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIG9uVW5sb2FkOiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcbn0pIl19