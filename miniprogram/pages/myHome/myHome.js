"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Api = require("../../service/api.service");
Page({
    data: {
        user: { openid: '' },
        userInfo: null,
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
    closeDialog() {
        this.setData({
            showDialog: false,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXlIb21lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibXlIb21lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsaURBQWlEO0FBRWpELElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUU7UUFDcEIsUUFBUSxFQUFFLElBQUk7UUFDZCxjQUFjLEVBQUUsRUFBRTtRQUNsQixVQUFVLEVBQUUsS0FBSztRQUNqQixNQUFNLEVBQUUsQ0FBQztRQUNULE1BQU0sRUFBRSxDQUFDO1FBQ1QsYUFBYSxFQUFFLENBQUM7UUFDaEIsWUFBWSxFQUFFLGdDQUFnQztRQUM5QyxVQUFVLEVBQUUsS0FBSztLQUNsQjtJQUVELE1BQU0sRUFBRTtRQUNOLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQTtRQUNoQixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLE1BQU07WUFDWCxPQUFPLEVBQUUsVUFBUyxHQUFHO2dCQUNuQixLQUFLLENBQUMsT0FBUSxDQUFDO29CQUNiLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSTtpQkFDZixDQUFDLENBQUE7WUFDSixDQUFDO1NBQ0YsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixVQUFVLEVBQUUsSUFBSTtTQUNqQixDQUFDLENBQUE7SUFDSixDQUFDO0lBR0QsV0FBVztRQUNULElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztRQUNqQixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLE1BQU07WUFDWCxPQUFPLEVBQUUsVUFBVSxHQUFHO2dCQUNwQixNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztnQkFDNUIsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0s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SSxDQUFDO1FBQ2pCLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDVixHQUFHLEVBQUUsTUFBTTtZQUNYLE9BQU8sRUFBRSxVQUFVLEdBQUc7Z0JBQ2xCLEtBQUssQ0FBQyxPQUFRLENBQUM7b0JBQ1gsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJO2lCQUNqQixDQUFDLENBQUM7WUFDUCxDQUFDO1NBQ0osQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxNQUFNLEVBQUU7SUFFUixDQUFDO0lBRUQsUUFBUSxFQUFFO0lBRVYsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0ICogYXMgQXBpIGZyb20gJy4uLy4uL3NlcnZpY2UvYXBpLnNlcnZpY2UnO1xuXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIHVzZXI6IHsgb3BlbmlkOiAnJyB9LFxuICAgIHVzZXJJbmZvOiBudWxsLFxuICAgIHVzZXJTdGF0aXN0aWNzOiB7fSxcbiAgICBwYWdlTG9hZGVkOiBmYWxzZSxcbiAgICBtZUxpa2U6IDAsXG4gICAgbGlrZU1lOiAwLFxuICAgIGxpa2VFYWNoT3RoZXI6IDAsXG4gICAgb3BlblZpcEltYWdlOiAnLi4vLi4vcHVibGljL2ltYWdlL29wZW5WaXAucG5nJyxcbiAgICBzaG93RGlhbG9nOiBmYWxzZSxcbiAgfSxcblxuICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzXG4gICAgd3guZ2V0U3RvcmFnZSh7XG4gICAgICBrZXk6ICd1c2VyJyxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBfdGhpcy5zZXREYXRhISh7XG4gICAgICAgICAgdXNlcjogcmVzLmRhdGFcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgdGhpcy5nZXRVc2VySW5mbygpO1xuICAgIHRoaXMuZ2V0VXNlcnNMaWtlQ291bnQoKTtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIHBhZ2VMb2FkZWQ6IHRydWUsXG4gICAgfSlcbiAgfSxcblxuICAvKiog6I635Y+W55So5oi35L+h5oGvICovXG4gIGdldFVzZXJJbmZvKCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgd3guZ2V0U3RvcmFnZSh7XG4gICAgICBrZXk6ICd1c2VyJyxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgY29uc3QgeyBvcGVuaWQgfSA9IHJlcy5kYXRhO1xuICAgICAgICBfdGhpcy5yZXF1ZXN0Rm9yVXNlckluZm8ob3BlbmlkKTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0sXG4gIHJlcXVlc3RGb3JVc2VySW5mbyhvcGVuaWQ6IHN0cmluZykge1xuICAgIEFwaS5nZXRVc2VySW5mbyhvcGVuaWQpLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IHVzZXJJbmZvID0gcmVzdWx0LmRhdGE7XG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgIHVzZXJJbmZvLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICAvKiog6I635Y+W5Zac5qyi55qE57G75Yir5ZKM5pWw6YePICovXG4gIGdldFVzZXJzTGlrZUNvdW50KCkge1xuICAgIEFwaS5nZXRVc2Vyc0xpa2VDb3VudCgpLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IHVzZXJzTGlrZUNvdW50ID0gcmVzdWx0LmRhdGE7XG4gICAgICAgIGxldCBtZUxpa2UsIGxpa2VNZSwgbGlrZUVhY2hPdGhlcjtcbiAgICAgICAgdXNlcnNMaWtlQ291bnQuZm9yRWFjaCgoZTogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKGUudHlwZSA9PT0gXCJtZUxpa2VcIikge1xuICAgICAgICAgICAgbWVMaWtlID0gZS5jb3VudDtcbiAgICAgICAgICB9IGVsc2UgaWYgKGUudHlwZSA9PT0gXCJsaWtlTWVcIikge1xuICAgICAgICAgICAgbGlrZU1lID0gZS5jb3VudDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGlrZUVhY2hPdGhlciA9IGUuY291bnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgICAgbWVMaWtlLFxuICAgICAgICAgIGxpa2VNZSxcbiAgICAgICAgICBsaWtlRWFjaE90aGVyLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICAvKiog5b+D55CG5rWL6K+V5YiX6KGoICovXG4gIGdvWGxjc0xpc3QoKSB7XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6IGAuLi94bGNzTGlzdC94bGNzTGlzdGAsXG4gICAgfSlcbiAgfSxcblxuICByZWdpc3RlcigpIHtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogYC4uL3JlZ2lzdGVyL3JlZ2lzdGVyYCxcbiAgICB9KVxuICB9LFxuXG4gIG15SW1hZ2VzKCkge1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiBgLi4vbXlJbWFnZXMvbXlJbWFnZXNgLFxuICAgIH0pXG4gIH0sXG5cbiAgZ29NYXRjaFN0YW5kYXJkKCkge1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiBgLi4vcmVnaXN0ZXJTdGFuZGFyZC9yZWdpc3RlclN0YW5kYXJkP3R5cGU9dXNlcmNlbnRlcmAsXG4gICAgfSlcbiAgfSxcblxuICAvKiog5YWF5YC8ICovXG4gIGdvUmVjaGFyZ2UoKTogYW55IHtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogYC4uLy4uL3BhY2thZ2VNeWhvbWUvcGFnZXMvcmVjaGFyZ2UvcmVjaGFyZ2VgLFxuICAgIH0pXG4gIH0sXG5cbiAgLyoqIFxuICAgKiDllpzmrKLmiJHliJfooahcbiAgICog5oiR5Zac5qyiXG4gICAqIOebuOS6kuWWnOasolxuICAgKi9cbiAgZ29GYXRlTGlzdChlOiBhbnkpIHtcbiAgICBjb25zdCB7IHR5cGUgfSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0O1xuICAgIC8vIGNvbnN0IHsgdmlwVHlwZSA9ICcnLCB9ID0gdGhpcy5kYXRhLnVzZXJJbmZvO1xuICAgIGlmICh0eXBlID09IDIgfHwgdHlwZSA9PSAzKSB7XG4gICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgc2hvd0RpYWxvZzogdHJ1ZSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogYC4uL2ZhdGVMaXN0L2ZhdGVMaXN0P3R5cGU9JHt0eXBlfWAsXG4gICAgfSlcbiAgfSxcblxuICBjbG9zZURpYWxvZygpIHtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIHNob3dEaWFsb2c6IGZhbHNlLFxuICAgIH0pO1xuICB9LFxuXG4gIC8qKiDlvIDliqjkvJrlkZggKi9cbiAgb3BlblZpcCgpIHtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogYC4uLy4uL3BhY2thZ2VNeWhvbWUvcGFnZXMvdmlwQ2VudGVyL3ZpcENlbnRlcmAsXG4gICAgfSk7XG4gIH0sXG5cbiAgb25SZWFkeTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgb25TaG93OiBmdW5jdGlvbiAoKSB7XG4gICAgLy8gY29uc3QgeyBwYWdlTG9hZGVkIH0gPSB0aGlzLmRhdGE7XG4gICAgLy8gaWYgKHBhZ2VMb2FkZWQpIHtcbiAgICAvLyAgIHRoaXMuZ2V0VXNlckluZm8oKTtcbiAgICAvLyB9XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICB3eC5nZXRTdG9yYWdlKHtcbiAgICAgICAga2V5OiAndXNlcicsXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgIF90aGlzLnNldERhdGEhKHtcbiAgICAgICAgICAgICAgICB1c2VyOiByZXMuZGF0YVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgfSk7XG4gICAgdGhpcy5nZXRVc2VySW5mbygpO1xuICAgIHRoaXMuZ2V0VXNlcnNMaWtlQ291bnQoKTtcbiAgfSxcblxuICBvbkhpZGU6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIG9uVW5sb2FkOiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcbn0pIl19