"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Api = require("../../service/api.service");
const utils_1 = require("../../utils/utils");
Page({
    data: {
        user: { openid: '' },
        userInfo: { vipType: '' },
        pageLoaded: false,
        meLike: 0,
        likeMe: 0,
        likeEachOther: 0,
        openVipImage: '../../public/image/openVip.jpg',
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
                userInfo.vipExpireAt = utils_1.formatHLSTime(userInfo.vipExpireAt);
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
        let rightType = '';
        if (type == 2) {
            rightType = 'whoLikeMe';
        }
        else if (type == 3) {
            rightType = 'likeEach';
        }
        if (utils_1.dealRightIntercept(rightType)) {
            this.setData({
                showDialog: true,
            });
            return;
        }
        utils_1.setRightStorage(rightType);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXlIb21lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibXlIb21lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsaURBQWlEO0FBQ2pELDZDQUF1RjtBQUV2RixJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFO1FBQ3BCLFFBQVEsRUFBRSxFQUFFLE9BQU8sRUFBRyxFQUFFLEVBQUU7UUFDMUIsVUFBVSxFQUFFLEtBQUs7UUFDakIsTUFBTSxFQUFFLENBQUM7UUFDVCxNQUFNLEVBQUUsQ0FBQztRQUNULGFBQWEsRUFBRSxDQUFDO1FBQ2hCLFlBQVksRUFBRSxnQ0FBZ0M7UUFDOUMsVUFBVSxFQUFFLEtBQUs7S0FDbEI7SUFFRCxNQUFNLEVBQUU7UUFDTixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUE7UUFDaEIsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxNQUFNO1lBQ1gsT0FBTyxFQUFFLFVBQVMsR0FBRztnQkFDbkIsS0FBSyxDQUFDLE9BQVEsQ0FBQztvQkFDYixJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUk7aUJBQ2YsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztTQUNGLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osVUFBVSxFQUFFLElBQUk7U0FDakIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUdELFdBQVc7UUFDVCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDakIsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxNQUFNO1lBQ1gsT0FBTyxFQUFFLFVBQVUsR0FBRztnQkFDcEIsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7Z0JBQzVCLEtBQUssQ0FBQyxrQkFB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QyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixVQUFVLEVBQUUsS0FBSztTQUNsQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBR0QsT0FBTztRQUNMLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsK0NBQStDO1NBQ3JELENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxPQUFPLEVBQUU7SUFFVCxDQUFDO0lBRUQsTUFBTSxFQUFFO1FBQ04sSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDVixHQUFHLEVBQUUsTUFBTTtZQUNYLE9BQU8sRUFBRSxVQUFVLEdBQUc7Z0JBQ2xCLEtBQUssQ0FBQyxPQUFRLENBQUM7b0JBQ1gsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJO2lCQUNqQixDQUFDLENBQUM7WUFDUCxDQUFDO1NBQ0osQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxNQUFNLEVBQUU7SUFFUixDQUFDO0lBRUQsUUFBUSxFQUFFO0lBRVYsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0ICogYXMgQXBpIGZyb20gJy4uLy4uL3NlcnZpY2UvYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgZGVhbFJpZ2h0SW50ZXJjZXB0LCBzZXRSaWdodFN0b3JhZ2UsIGZvcm1hdEhMU1RpbWUgfSBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgdXNlcjogeyBvcGVuaWQ6ICcnIH0sXG4gICAgdXNlckluZm86IHsgdmlwVHlwZSA6ICcnIH0sXG4gICAgcGFnZUxvYWRlZDogZmFsc2UsXG4gICAgbWVMaWtlOiAwLFxuICAgIGxpa2VNZTogMCxcbiAgICBsaWtlRWFjaE90aGVyOiAwLFxuICAgIG9wZW5WaXBJbWFnZTogJy4uLy4uL3B1YmxpYy9pbWFnZS9vcGVuVmlwLmpwZycsXG4gICAgc2hvd0RpYWxvZzogZmFsc2UsXG4gIH0sXG5cbiAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IF90aGlzID0gdGhpc1xuICAgIHd4LmdldFN0b3JhZ2Uoe1xuICAgICAga2V5OiAndXNlcicsIC8vIOeUqOaIt+WktOWDj+S/oeaBr1xuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIF90aGlzLnNldERhdGEhKHtcbiAgICAgICAgICB1c2VyOiByZXMuZGF0YVxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgdGhpcy5nZXRVc2VySW5mbygpO1xuICAgIHRoaXMuZ2V0VXNlcnNMaWtlQ291bnQoKTtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIHBhZ2VMb2FkZWQ6IHRydWUsXG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqIOiOt+WPlueUqOaIt+S/oeaBryAqL1xuICBnZXRVc2VySW5mbygpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIHd4LmdldFN0b3JhZ2Uoe1xuICAgICAga2V5OiAndXNlcicsIC8vIOeUqOaIt+WktOWDj+S/oeaBr1xuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICBjb25zdCB7IG9wZW5pZCB9ID0gcmVzLmRhdGE7XG4gICAgICAgIF90aGlzLnJlcXVlc3RGb3JVc2VySW5mbyhvcGVuaWQpO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfSxcbiAgcmVxdWVzdEZvclVzZXJJbmZvKG9wZW5pZDogc3RyaW5nKSB7XG4gICAgQXBpLmdldFVzZXJJbmZvKG9wZW5pZCkudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgY29uc3QgdXNlckluZm8gPSByZXN1bHQuZGF0YTtcbiAgICAgICAgdXNlckluZm8udmlwRXhwaXJlQXQgPSBmb3JtYXRITFNUaW1lKHVzZXJJbmZvLnZpcEV4cGlyZUF0KTtcbiAgICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgICAgdXNlckluZm8sXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIC8qKiDojrflj5bllpzmrKLnmoTnsbvliKvlkozmlbDph48gKi9cbiAgZ2V0VXNlcnNMaWtlQ291bnQoKSB7XG4gICAgQXBpLmdldFVzZXJzTGlrZUNvdW50KCkudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgY29uc3QgdXNlcnNMaWtlQ291bnQgPSByZXN1bHQuZGF0YTtcbiAgICAgICAgbGV0IG1lTGlrZSwgbGlrZU1lLCBsaWtlRWFjaE90aGVyO1xuICAgICAgICB1c2Vyc0xpa2VDb3VudC5mb3JFYWNoKChlOiBhbnkpID0+IHtcbiAgICAgICAgICBpZiAoZS50eXBlID09PSBcIm1lTGlrZVwiKSB7XG4gICAgICAgICAgICBtZUxpa2UgPSBlLmNvdW50O1xuICAgICAgICAgIH0gZWxzZSBpZiAoZS50eXBlID09PSBcImxpa2VNZVwiKSB7XG4gICAgICAgICAgICBsaWtlTWUgPSBlLmNvdW50O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsaWtlRWFjaE90aGVyID0gZS5jb3VudDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgICBtZUxpa2UsXG4gICAgICAgICAgbGlrZU1lLFxuICAgICAgICAgIGxpa2VFYWNoT3RoZXIsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIC8qKiDlv4PnkIbmtYvor5XliJfooaggKi9cbiAgZ29YbGNzTGlzdCgpIHtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogYC4uL3hsY3NMaXN0L3hsY3NMaXN0YCxcbiAgICB9KVxuICB9LFxuXG4gIHJlZ2lzdGVyKCkge1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiBgLi4vcmVnaXN0ZXIvcmVnaXN0ZXJgLFxuICAgIH0pXG4gIH0sXG5cbiAgbXlJbWFnZXMoKSB7XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6IGAuLi9teUltYWdlcy9teUltYWdlc2AsXG4gICAgfSlcbiAgfSxcblxuICBnb01hdGNoU3RhbmRhcmQoKSB7XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6IGAuLi9yZWdpc3RlclN0YW5kYXJkL3JlZ2lzdGVyU3RhbmRhcmQ/dHlwZT11c2VyY2VudGVyYCxcbiAgICB9KVxuICB9LFxuXG4gIC8qKiDlhYXlgLwgKi9cbiAgZ29SZWNoYXJnZSgpOiBhbnkge1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiBgLi4vLi4vcGFja2FnZU15aG9tZS9wYWdlcy9yZWNoYXJnZS9yZWNoYXJnZWAsXG4gICAgfSlcbiAgfSxcblxuICAvKiogXG4gICAqIOWWnOasouaIkeWIl+ihqFxuICAgKiDmiJHllpzmrKJcbiAgICog55u45LqS5Zac5qyiXG4gICAqL1xuICBnb0ZhdGVMaXN0KGU6IGFueSkge1xuICAgIGNvbnN0IHsgdHlwZSB9ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQ7XG4gICAgbGV0IHJpZ2h0VHlwZSA9ICcnO1xuICAgIGlmICh0eXBlID09IDIpIHsgLy8g5Zac5qyi5oiRXG4gICAgICByaWdodFR5cGUgPSAnd2hvTGlrZU1lJztcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT0gMykgeyAvLyDnm7jkupLllpzmrKJcbiAgICAgIHJpZ2h0VHlwZSA9ICdsaWtlRWFjaCc7XG4gICAgfVxuICAgIC8vIOWkhOeQhuaLpuaIquW5tui/lOWbnuaYr+WQpumcgOimgeiiq+aLpuaIqlxuICAgIGlmIChkZWFsUmlnaHRJbnRlcmNlcHQocmlnaHRUeXBlKSkge1xuICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgIHNob3dEaWFsb2c6IHRydWUsXG4gICAgICB9KVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzZXRSaWdodFN0b3JhZ2UocmlnaHRUeXBlKTtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogYC4uL2ZhdGVMaXN0L2ZhdGVMaXN0P3R5cGU9JHt0eXBlfWAsXG4gICAgfSk7XG4gIH0sXG5cbiAgY2xvc2VEaWFsb2coKSB7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBzaG93RGlhbG9nOiBmYWxzZSxcbiAgICB9KTtcbiAgfSxcblxuICAvKiog5byA5Yqo5Lya5ZGYICovXG4gIG9wZW5WaXAoKSB7XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6IGAuLi8uLi9wYWNrYWdlTXlob21lL3BhZ2VzL3ZpcENlbnRlci92aXBDZW50ZXJgLFxuICAgIH0pO1xuICB9LFxuXG4gIG9uUmVhZHk6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIG9uU2hvdzogZnVuY3Rpb24gKCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgd3guZ2V0U3RvcmFnZSh7XG4gICAgICAgIGtleTogJ3VzZXInLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICBfdGhpcy5zZXREYXRhISh7XG4gICAgICAgICAgICAgICAgdXNlcjogcmVzLmRhdGFcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgIH0pO1xuICAgIHRoaXMuZ2V0VXNlckluZm8oKTtcbiAgICB0aGlzLmdldFVzZXJzTGlrZUNvdW50KCk7XG4gIH0sXG5cbiAgb25IaWRlOiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICBvblVubG9hZDogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG59KSJdfQ==