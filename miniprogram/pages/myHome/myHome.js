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
        let _this = this;
        Api.getUserInfo(openid).then((result) => {
            if (result) {
                const userInfo = result.data;
                userInfo.vipExpireAt = utils_1.formatHLSTime(userInfo.vipExpireAt);
                _this.setData({
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
    openVip(e) {
        const id = e.currentTarget.dataset.id;
        console.log(`open vip:`, id);
        wx.navigateTo({
            url: `../../packageMyhome/pages/vipCenter/vipCenter?type=${id}`,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXlIb21lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibXlIb21lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsaURBQWlEO0FBQ2pELDZDQUF1RjtBQUV2RixJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFO1FBQ3BCLFFBQVEsRUFBRSxFQUFFLE9BQU8sRUFBRyxFQUFFLEVBQUU7UUFDMUIsVUFBVSxFQUFFLEtBQUs7UUFDakIsTUFBTSxFQUFFLENBQUM7UUFDVCxNQUFNLEVBQUUsQ0FBQztRQUNULGFBQWEsRUFBRSxDQUFDO1FBQ2hCLFlBQVksRUFBRSxnQ0FBZ0M7UUFDOUMsVUFBVSxFQUFFLEtBQUs7S0FDbEI7SUFFRCxNQUFNLEVBQUU7UUFDTixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUE7UUFDaEIsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxNQUFNO1lBQ1gsT0FBTyxFQUFFLFVBQVMsR0FBRztnQkFDbkIsS0FBSyxDQUFDLE9BQVEsQ0FBQztvQkFDYixJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUk7aUJBQ2YsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztTQUNGLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osVUFBVSxFQUFFLElBQUk7U0FDakIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUdELFdBQVc7UUFDVCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDakIsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxNQUFNO1lBQ1gsT0FBTyxFQUFFLFVBQVUsR0FBRztnQkFDcEIsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7Z0JBQzVCLEtBQUssQ0FBQyxrQkFB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R0FBRyxFQUFFLDZCQUE2QixJQUFJLEVBQUU7U0FDekMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osVUFBVSxFQUFFLEtBQUs7U0FDbEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUdELE9BQU8sQ0FBQyxDQUFNO1FBQ1osTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFBO1FBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzdCLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsc0RBQXNELEVBQUUsRUFBRTtTQUNoRSxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsT0FBTyxFQUFFO0lBRVQsQ0FBQztJQUVELE1BQU0sRUFBRTtRQUNOLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztRQUNqQixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1YsR0FBRyxFQUFFLE1BQU07WUFDWCxPQUFPLEVBQUUsVUFBVSxHQUFHO2dCQUNsQixLQUFLLENBQUMsT0FBUSxDQUFDO29CQUNYLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSTtpQkFDakIsQ0FBQyxDQUFDO1lBQ1AsQ0FBQztTQUNKLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsTUFBTSxFQUFFO0lBRVIsQ0FBQztJQUVELFFBQVEsRUFBRTtJQUVWLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCAqIGFzIEFwaSBmcm9tICcuLi8uLi9zZXJ2aWNlL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IGRlYWxSaWdodEludGVyY2VwdCwgc2V0UmlnaHRTdG9yYWdlLCBmb3JtYXRITFNUaW1lIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xuXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIHVzZXI6IHsgb3BlbmlkOiAnJyB9LFxuICAgIHVzZXJJbmZvOiB7IHZpcFR5cGUgOiAnJyB9LFxuICAgIHBhZ2VMb2FkZWQ6IGZhbHNlLFxuICAgIG1lTGlrZTogMCxcbiAgICBsaWtlTWU6IDAsXG4gICAgbGlrZUVhY2hPdGhlcjogMCxcbiAgICBvcGVuVmlwSW1hZ2U6ICcuLi8uLi9wdWJsaWMvaW1hZ2Uvb3BlblZpcC5qcGcnLFxuICAgIHNob3dEaWFsb2c6IGZhbHNlLFxuICB9LFxuXG4gIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXNcbiAgICB3eC5nZXRTdG9yYWdlKHtcbiAgICAgIGtleTogJ3VzZXInLCAvLyDnlKjmiLflpLTlg4/kv6Hmga9cbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBfdGhpcy5zZXREYXRhISh7XG4gICAgICAgICAgdXNlcjogcmVzLmRhdGFcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgIH0pO1xuICAgIHRoaXMuZ2V0VXNlckluZm8oKTtcbiAgICB0aGlzLmdldFVzZXJzTGlrZUNvdW50KCk7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBwYWdlTG9hZGVkOiB0cnVlLFxuICAgIH0pO1xuICB9LFxuXG4gIC8qKiDojrflj5bnlKjmiLfkv6Hmga8gKi9cbiAgZ2V0VXNlckluZm8oKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICB3eC5nZXRTdG9yYWdlKHtcbiAgICAgIGtleTogJ3VzZXInLCAvLyDnlKjmiLflpLTlg4/kv6Hmga9cbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgY29uc3QgeyBvcGVuaWQgfSA9IHJlcy5kYXRhO1xuICAgICAgICBfdGhpcy5yZXF1ZXN0Rm9yVXNlckluZm8ob3BlbmlkKTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0sXG4gIHJlcXVlc3RGb3JVc2VySW5mbyhvcGVuaWQ6IHN0cmluZykge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgQXBpLmdldFVzZXJJbmZvKG9wZW5pZCkudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgY29uc3QgdXNlckluZm8gPSByZXN1bHQuZGF0YTtcbiAgICAgICAgdXNlckluZm8udmlwRXhwaXJlQXQgPSBmb3JtYXRITFNUaW1lKHVzZXJJbmZvLnZpcEV4cGlyZUF0KTtcbiAgICAgICAgX3RoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgIHVzZXJJbmZvLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICAvKiog6I635Y+W5Zac5qyi55qE57G75Yir5ZKM5pWw6YePICovXG4gIGdldFVzZXJzTGlrZUNvdW50KCkge1xuICAgIEFwaS5nZXRVc2Vyc0xpa2VDb3VudCgpLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IHVzZXJzTGlrZUNvdW50ID0gcmVzdWx0LmRhdGE7XG4gICAgICAgIGxldCBtZUxpa2UsIGxpa2VNZSwgbGlrZUVhY2hPdGhlcjtcbiAgICAgICAgdXNlcnNMaWtlQ291bnQuZm9yRWFjaCgoZTogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKGUudHlwZSA9PT0gXCJtZUxpa2VcIikge1xuICAgICAgICAgICAgbWVMaWtlID0gZS5jb3VudDtcbiAgICAgICAgICB9IGVsc2UgaWYgKGUudHlwZSA9PT0gXCJsaWtlTWVcIikge1xuICAgICAgICAgICAgbGlrZU1lID0gZS5jb3VudDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGlrZUVhY2hPdGhlciA9IGUuY291bnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgICAgbWVMaWtlLFxuICAgICAgICAgIGxpa2VNZSxcbiAgICAgICAgICBsaWtlRWFjaE90aGVyLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICAvKiog5b+D55CG5rWL6K+V5YiX6KGoICovXG4gIGdvWGxjc0xpc3QoKSB7XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6IGAuLi94bGNzTGlzdC94bGNzTGlzdGAsXG4gICAgfSlcbiAgfSxcblxuICByZWdpc3RlcigpIHtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogYC4uL3JlZ2lzdGVyL3JlZ2lzdGVyYCxcbiAgICB9KVxuICB9LFxuXG4gIG15SW1hZ2VzKCkge1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiBgLi4vbXlJbWFnZXMvbXlJbWFnZXNgLFxuICAgIH0pXG4gIH0sXG5cbiAgZ29NYXRjaFN0YW5kYXJkKCkge1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiBgLi4vcmVnaXN0ZXJTdGFuZGFyZC9yZWdpc3RlclN0YW5kYXJkP3R5cGU9dXNlcmNlbnRlcmAsXG4gICAgfSlcbiAgfSxcblxuICAvKiog5YWF5YC8ICovXG4gIGdvUmVjaGFyZ2UoKTogYW55IHtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogYC4uLy4uL3BhY2thZ2VNeWhvbWUvcGFnZXMvcmVjaGFyZ2UvcmVjaGFyZ2VgLFxuICAgIH0pXG4gIH0sXG5cbiAgLyoqIFxuICAgKiDllpzmrKLmiJHliJfooahcbiAgICog5oiR5Zac5qyiXG4gICAqIOebuOS6kuWWnOasolxuICAgKi9cbiAgZ29GYXRlTGlzdChlOiBhbnkpIHtcbiAgICBjb25zdCB7IHR5cGUgfSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0O1xuICAgIGxldCByaWdodFR5cGUgPSAnJztcbiAgICBpZiAodHlwZSA9PSAyKSB7IC8vIOWWnOasouaIkVxuICAgICAgcmlnaHRUeXBlID0gJ3dob0xpa2VNZSc7XG4gICAgfSBlbHNlIGlmICh0eXBlID09IDMpIHsgLy8g55u45LqS5Zac5qyiXG4gICAgICByaWdodFR5cGUgPSAnbGlrZUVhY2gnO1xuICAgIH1cbiAgICAvLyDlpITnkIbmi6bmiKrlubbov5Tlm57mmK/lkKbpnIDopoHooqvmi6bmiKpcbiAgICBpZiAoZGVhbFJpZ2h0SW50ZXJjZXB0KHJpZ2h0VHlwZSkpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICBzaG93RGlhbG9nOiB0cnVlLFxuICAgICAgfSlcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2V0UmlnaHRTdG9yYWdlKHJpZ2h0VHlwZSk7XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6IGAuLi9mYXRlTGlzdC9mYXRlTGlzdD90eXBlPSR7dHlwZX1gLFxuICAgIH0pO1xuICB9LFxuXG4gIGNsb3NlRGlhbG9nKCkge1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgc2hvd0RpYWxvZzogZmFsc2UsXG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqIOW8gOWKqOS8muWRmCAqL1xuICBvcGVuVmlwKGU6IGFueSkge1xuICAgIGNvbnN0IGlkID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWRcbiAgICBjb25zb2xlLmxvZyhgb3BlbiB2aXA6YCwgaWQpO1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiBgLi4vLi4vcGFja2FnZU15aG9tZS9wYWdlcy92aXBDZW50ZXIvdmlwQ2VudGVyP3R5cGU9JHtpZH1gLFxuICAgIH0pO1xuICB9LFxuXG4gIG9uUmVhZHk6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIG9uU2hvdzogZnVuY3Rpb24gKCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgd3guZ2V0U3RvcmFnZSh7XG4gICAgICAgIGtleTogJ3VzZXInLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICBfdGhpcy5zZXREYXRhISh7XG4gICAgICAgICAgICAgICAgdXNlcjogcmVzLmRhdGFcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgIH0pO1xuICAgIHRoaXMuZ2V0VXNlckluZm8oKTtcbiAgICB0aGlzLmdldFVzZXJzTGlrZUNvdW50KCk7XG4gIH0sXG5cbiAgb25IaWRlOiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICBvblVubG9hZDogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG59KSJdfQ==