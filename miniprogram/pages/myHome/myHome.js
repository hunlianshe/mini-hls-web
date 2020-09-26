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
    goMatchmaker() {
        wx.navigateTo({
            url: `../matchmaker/matchmaker`,
        });
    },
    goFateList(e) {
        const { type } = e.currentTarget.dataset;
        wx.navigateTo({
            url: `../fateList/fateList?type=${type}`,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXlIb21lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibXlIb21lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsaURBQWlEO0FBRWpELElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUU7UUFDcEIsUUFBUSxFQUFFLEVBQUU7UUFDWixjQUFjLEVBQUUsRUFBRTtRQUNsQixVQUFVLEVBQUUsS0FBSztRQUNqQixNQUFNLEVBQUUsQ0FBQztRQUNULE1BQU0sRUFBRSxDQUFDO1FBQ1QsYUFBYSxFQUFFLENBQUM7S0FDakI7SUFFRCxNQUFNLEVBQUU7UUFDTixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUE7UUFDaEIsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxNQUFNO1lBQ1gsT0FBTyxFQUFFLFVBQVMsR0FBRztnQkFDbkIsS0FBSyxDQUFDLE9BQVEsQ0FBQztvQkFDYixJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUk7aUJBQ2YsQ0FBQyxDQUFBO1lBQ0osQ0FBQztTQUNGLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osVUFBVSxFQUFFLElBQUk7U0FDakIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUdELFdBQVc7UUFDVCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDakIsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxNQUFNO1lBQ1gsT0FBTyxFQUFFLFVBQVUsR0FBRztnQkFDcEIsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7Z0JBQzVCLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuQyxDQUFDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FB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IlxuaW1wb3J0ICogYXMgQXBpIGZyb20gJy4uLy4uL3NlcnZpY2UvYXBpLnNlcnZpY2UnO1xuXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIHVzZXI6IHsgb3BlbmlkOiAnJyB9LFxuICAgIHVzZXJJbmZvOiB7fSxcbiAgICB1c2VyU3RhdGlzdGljczoge30sXG4gICAgcGFnZUxvYWRlZDogZmFsc2UsXG4gICAgbWVMaWtlOiAwLFxuICAgIGxpa2VNZTogMCxcbiAgICBsaWtlRWFjaE90aGVyOiAwLFxuICB9LFxuXG4gIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXNcbiAgICB3eC5nZXRTdG9yYWdlKHtcbiAgICAgIGtleTogJ3VzZXInLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIF90aGlzLnNldERhdGEhKHtcbiAgICAgICAgICB1c2VyOiByZXMuZGF0YVxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICB9KTtcbiAgICB0aGlzLmdldFVzZXJJbmZvKCk7XG4gICAgdGhpcy5nZXRVc2Vyc0xpa2VDb3VudCgpO1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgcGFnZUxvYWRlZDogdHJ1ZSxcbiAgICB9KVxuICB9LFxuXG4gIC8qKiDojrflj5bnlKjmiLfkv6Hmga8gKi9cbiAgZ2V0VXNlckluZm8oKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICB3eC5nZXRTdG9yYWdlKHtcbiAgICAgIGtleTogJ3VzZXInLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICBjb25zdCB7IG9wZW5pZCB9ID0gcmVzLmRhdGE7XG4gICAgICAgIF90aGlzLnJlcXVlc3RGb3JVc2VySW5mbyhvcGVuaWQpO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfSxcbiAgcmVxdWVzdEZvclVzZXJJbmZvKG9wZW5pZDogc3RyaW5nKSB7XG4gICAgQXBpLmdldFVzZXJJbmZvKG9wZW5pZCkudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgY29uc3QgdXNlckluZm8gPSByZXN1bHQuZGF0YTtcbiAgICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgICAgdXNlckluZm8sXG4gICAgICAgICAgLy8gdXNlclN0YXRpc3RpY3M6IHVzZXJJbmZvLnN0YXRpc3RpY3MsXG4gICAgICAgIH0pO1xuICAgICAgICAvLyAgIHd4LnNldFN0b3JhZ2Uoe1xuICAgICAgICAvLyAgICAga2V5OiAndXNlclNob3BJbmZvJyxcbiAgICAgICAgLy8gICAgIGRhdGE6IHVzZXJJbmZvLFxuICAgICAgICAvLyAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIC8qKiDojrflj5bllpzmrKLnmoTnsbvliKvlkozmlbDph48gKi9cbiAgZ2V0VXNlcnNMaWtlQ291bnQoKSB7XG4gICAgQXBpLmdldFVzZXJzTGlrZUNvdW50KCkudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgY29uc3QgdXNlcnNMaWtlQ291bnQgPSByZXN1bHQuZGF0YTtcbiAgICAgICAgbGV0IG1lTGlrZSwgbGlrZU1lLCBsaWtlRWFjaE90aGVyO1xuICAgICAgICB1c2Vyc0xpa2VDb3VudC5mb3JFYWNoKChlOiBhbnkpID0+IHtcbiAgICAgICAgICBpZiAoZS50eXBlID09PSBcIm1lTGlrZVwiKSB7XG4gICAgICAgICAgICBtZUxpa2UgPSBlLmNvdW50O1xuICAgICAgICAgIH0gZWxzZSBpZiAoZS50eXBlID09PSBcImxpa2VNZVwiKSB7XG4gICAgICAgICAgICBsaWtlTWUgPSBlLmNvdW50O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsaWtlRWFjaE90aGVyID0gZS5jb3VudDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgICBtZUxpa2UsXG4gICAgICAgICAgbGlrZU1lLFxuICAgICAgICAgIGxpa2VFYWNoT3RoZXIsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIC8qKiDlv4PnkIbmtYvor5XliJfooaggKi9cbiAgZ29YbGNzTGlzdCgpIHtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogYC4uL3hsY3NMaXN0L3hsY3NMaXN0YCxcbiAgICB9KVxuICB9LFxuXG4gIHJlZ2lzdGVyKCkge1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiBgLi4vcmVnaXN0ZXIvcmVnaXN0ZXJgLFxuICAgIH0pXG4gIH0sXG5cbiAgbXlJbWFnZXMoKSB7XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6IGAuLi9teUltYWdlcy9teUltYWdlc2AsXG4gICAgfSlcbiAgfSxcblxuICBnb01hdGNoU3RhbmRhcmQoKSB7XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6IGAuLi9yZWdpc3RlclN0YW5kYXJkL3JlZ2lzdGVyU3RhbmRhcmQ/dHlwZT11c2VyY2VudGVyYCxcbiAgICB9KVxuICB9LFxuXG4gIC8qKiDnuqLlqJggKi9cbiAgZ29NYXRjaG1ha2VyKCk6IGFueSB7XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6IGAuLi9tYXRjaG1ha2VyL21hdGNobWFrZXJgLFxuICAgIH0pXG4gIH0sXG5cbiAgLyoqIOWWnOasouS6uuWIl+ihqCAqL1xuICBnb0ZhdGVMaXN0KGU6IGFueSkge1xuICAgIC8vIGNvbnN0IGlkID0gdGhpcy5kYXRhLnVzZXJJbmZvLlNob3AuaWQ7XG4gICAgY29uc3QgeyB0eXBlIH0gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldDtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogYC4uL2ZhdGVMaXN0L2ZhdGVMaXN0P3R5cGU9JHt0eXBlfWAsXG4gICAgfSlcbiAgfSxcblxuICBvblJlYWR5OiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICBvblNob3c6IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBjb25zdCB7IHBhZ2VMb2FkZWQgfSA9IHRoaXMuZGF0YTtcbiAgICAvLyBpZiAocGFnZUxvYWRlZCkge1xuICAgIC8vICAgdGhpcy5nZXRVc2VySW5mbygpO1xuICAgIC8vIH1cbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIHd4LmdldFN0b3JhZ2Uoe1xuICAgICAgICBrZXk6ICd1c2VyJyxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgX3RoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgICAgICAgIHVzZXI6IHJlcy5kYXRhXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICB9KTtcbiAgICB0aGlzLmdldFVzZXJJbmZvKCk7XG4gICAgdGhpcy5nZXRVc2Vyc0xpa2VDb3VudCgpO1xuICB9LFxuXG4gIG9uSGlkZTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgb25VbmxvYWQ6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxufSkiXX0=