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
        // const { pageLoaded } = this.data;
        // if (pageLoaded) {
        //     this.getUserInfo();
        // }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXlIb21lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibXlIb21lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsaURBQWlEO0FBRWpELElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUU7UUFDcEIsUUFBUSxFQUFFLEVBQUU7UUFDWixjQUFjLEVBQUUsRUFBRTtRQUNsQixVQUFVLEVBQUUsS0FBSztRQUNqQixNQUFNLEVBQUUsQ0FBQztRQUNULE1BQU0sRUFBRSxDQUFDO1FBQ1QsYUFBYSxFQUFFLENBQUM7S0FDakI7SUFFRCxNQUFNLEVBQUU7UUFDTixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUE7UUFDaEIsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxNQUFNO1lBQ1gsT0FBTyxFQUFFLFVBQVMsR0FBRztnQkFDbkIsS0FBSyxDQUFDLE9BQVEsQ0FBQztvQkFDYixJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUk7aUJBQ2YsQ0FBQyxDQUFBO1lBQ0osQ0FBQztTQUNGLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osVUFBVSxFQUFFLElBQUk7U0FDakIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUdELFdBQVc7UUFDVCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDakIsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxNQUFNO1lBQ1gsT0FBTyxFQUFFLFVBQVUsR0FBRztnQkFDcEIsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7Z0JBQzVCLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuQyxDQUFDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELGtCQUFrQixDQUFDLE1BQWM7UUFDL0IsR0FBRyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFXLEVBQUUsRUFBRTtZQUMzQyxJQUFJLE1BQU0sRUFBRTtnQkFDVixNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUM3QixJQUFJLENBQUMsT0FBUSxDQUFDO29CQUNaLFFBQVE7aUJBRVQsQ0FBQyxDQUFDO2FBS0o7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFHRCxpQkFBaUI7UUFDZixHQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFXLEVBQUUsRUFBRTtZQUMzQyxJQUFJLE1BQU0sRUFBRTtnQkFDVixNQUFNLGNBQWMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNuQyxJQUFJLE1BQU0sRUFBRSxNQUFNLEVBQUUsYUFBYSxDQUFDO2dCQUNsQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBTSxFQUFFLEVBQUU7b0JBQ2hDLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7d0JBQ3ZCLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO3FCQUNsQjt5QkFBTSxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO3dCQUM5QixNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztxQkFDbEI7eUJBQU07d0JBQ0wsYUFBYSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7cUJBQ3pCO2dCQUNILENBQUMsQ0FBQyxDQUFDO2dCQUNILElBQUksQ0FBQyxPQUFRLENBQUM7b0JBQ1osTUFBTTtvQkFDTixNQUFNO29CQUNOLGFBQWE7aUJBQ2QsQ0FBQyxDQUFDO2FBQ0o7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFHRCxVQUFVO1FBQ1IsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxzQkFBc0I7U0FDNUIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELFFBQVE7UUFDTixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLHNCQUFzQjtTQUM1QixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsUUFBUTtRQUNOLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsc0JBQXNCO1NBQzVCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxlQUFlO1FBQ2IsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxzREFBc0Q7U0FDNUQsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUdELFlBQVk7UUFDVixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLDBCQUEwQjtTQUNoQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBR0QsVUFBVSxDQUFDLENBQU07UUFFZixNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDekMsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSw2QkFBNkIsSUFBSSxFQUFFO1NBQ3pDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxPQUFPLEVBQUU7SUFFVCxDQUFDO0lBRUQsTUFBTSxFQUFFO1FBQ04sTUFBTSxFQUFFLFVBQVUsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDakMsSUFBSSxVQUFVLEVBQUU7WUFDZCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEI7SUFDSCxDQUFDO0lBRUQsTUFBTSxFQUFFO0lBRVIsQ0FBQztJQUVELFFBQVEsRUFBRTtJQUVWLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0ICogYXMgQXBpIGZyb20gJy4uLy4uL3NlcnZpY2UvYXBpLnNlcnZpY2UnO1xyXG5cclxuUGFnZSh7XHJcbiAgZGF0YToge1xyXG4gICAgdXNlcjogeyBvcGVuaWQ6ICcnIH0sXHJcbiAgICB1c2VySW5mbzoge30sXHJcbiAgICB1c2VyU3RhdGlzdGljczoge30sXHJcbiAgICBwYWdlTG9hZGVkOiBmYWxzZSxcclxuICAgIG1lTGlrZTogMCxcclxuICAgIGxpa2VNZTogMCxcclxuICAgIGxpa2VFYWNoT3RoZXI6IDAsXHJcbiAgfSxcclxuXHJcbiAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzXHJcbiAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAga2V5OiAndXNlcicsXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgIF90aGlzLnNldERhdGEhKHtcclxuICAgICAgICAgIHVzZXI6IHJlcy5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5nZXRVc2VySW5mbygpO1xyXG4gICAgdGhpcy5nZXRVc2Vyc0xpa2VDb3VudCgpO1xyXG4gICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgIHBhZ2VMb2FkZWQ6IHRydWUsXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIC8qKiDojrflj5bnlKjmiLfkv6Hmga8gKi9cclxuICBnZXRVc2VySW5mbygpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAga2V5OiAndXNlcicsXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICBjb25zdCB7IG9wZW5pZCB9ID0gcmVzLmRhdGE7XHJcbiAgICAgICAgX3RoaXMucmVxdWVzdEZvclVzZXJJbmZvKG9wZW5pZCk7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9LFxyXG4gIHJlcXVlc3RGb3JVc2VySW5mbyhvcGVuaWQ6IHN0cmluZykge1xyXG4gICAgQXBpLmdldFVzZXJJbmZvKG9wZW5pZCkudGhlbigocmVzdWx0OiBhbnkpID0+IHtcclxuICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgIGNvbnN0IHVzZXJJbmZvID0gcmVzdWx0LmRhdGE7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgICB1c2VySW5mbyxcclxuICAgICAgICAgIC8vIHVzZXJTdGF0aXN0aWNzOiB1c2VySW5mby5zdGF0aXN0aWNzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgLy8gICAgIGtleTogJ3VzZXJTaG9wSW5mbycsXHJcbiAgICAgICAgLy8gICAgIGRhdGE6IHVzZXJJbmZvLFxyXG4gICAgICAgIC8vICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIC8qKiDojrflj5bllpzmrKLnmoTnsbvliKvlkozmlbDph48gKi9cclxuICBnZXRVc2Vyc0xpa2VDb3VudCgpIHtcclxuICAgIEFwaS5nZXRVc2Vyc0xpa2VDb3VudCgpLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XHJcbiAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICBjb25zdCB1c2Vyc0xpa2VDb3VudCA9IHJlc3VsdC5kYXRhO1xyXG4gICAgICAgIGxldCBtZUxpa2UsIGxpa2VNZSwgbGlrZUVhY2hPdGhlcjtcclxuICAgICAgICB1c2Vyc0xpa2VDb3VudC5mb3JFYWNoKChlOiBhbnkpID0+IHtcclxuICAgICAgICAgIGlmIChlLnR5cGUgPT09IFwibWVMaWtlXCIpIHtcclxuICAgICAgICAgICAgbWVMaWtlID0gZS5jb3VudDtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoZS50eXBlID09PSBcImxpa2VNZVwiKSB7XHJcbiAgICAgICAgICAgIGxpa2VNZSA9IGUuY291bnQ7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsaWtlRWFjaE90aGVyID0gZS5jb3VudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICAgIG1lTGlrZSxcclxuICAgICAgICAgIGxpa2VNZSxcclxuICAgICAgICAgIGxpa2VFYWNoT3RoZXIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIC8qKiDlv4PnkIbmtYvor5XliJfooaggKi9cclxuICBnb1hsY3NMaXN0KCkge1xyXG4gICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgIHVybDogYC4uL3hsY3NMaXN0L3hsY3NMaXN0YCxcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgcmVnaXN0ZXIoKSB7XHJcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgdXJsOiBgLi4vcmVnaXN0ZXIvcmVnaXN0ZXJgLFxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICBteUltYWdlcygpIHtcclxuICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICB1cmw6IGAuLi9teUltYWdlcy9teUltYWdlc2AsXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIGdvTWF0Y2hTdGFuZGFyZCgpIHtcclxuICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICB1cmw6IGAuLi9yZWdpc3RlclN0YW5kYXJkL3JlZ2lzdGVyU3RhbmRhcmQ/dHlwZT11c2VyY2VudGVyYCxcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgLyoqIOe6ouWomCAqL1xyXG4gIGdvTWF0Y2htYWtlcigpOiBhbnkge1xyXG4gICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgIHVybDogYC4uL21hdGNobWFrZXIvbWF0Y2htYWtlcmAsXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIC8qKiDllpzmrKLkurrliJfooaggKi9cclxuICBnb0ZhdGVMaXN0KGU6IGFueSkge1xyXG4gICAgLy8gY29uc3QgaWQgPSB0aGlzLmRhdGEudXNlckluZm8uU2hvcC5pZDtcclxuICAgIGNvbnN0IHsgdHlwZSB9ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQ7XHJcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgdXJsOiBgLi4vZmF0ZUxpc3QvZmF0ZUxpc3Q/dHlwZT0ke3R5cGV9YCxcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgb25SZWFkeTogZnVuY3Rpb24gKCkge1xyXG5cclxuICB9LFxyXG5cclxuICBvblNob3c6IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IHsgcGFnZUxvYWRlZCB9ID0gdGhpcy5kYXRhO1xyXG4gICAgaWYgKHBhZ2VMb2FkZWQpIHtcclxuICAgICAgdGhpcy5nZXRVc2VySW5mbygpO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIG9uSGlkZTogZnVuY3Rpb24gKCkge1xyXG5cclxuICB9LFxyXG5cclxuICBvblVubG9hZDogZnVuY3Rpb24gKCkge1xyXG5cclxuICB9LFxyXG59KSJdfQ==