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
        const { vipType = '' } = this.data.userInfo;
        let rightType = '';
        if (type == 2) {
            rightType = 'whoLikeMe';
        }
        else if (type == 3) {
            rightType = 'likeEach';
        }
        if (utils_1.dealRightIntercept(vipType, rightType)) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXlIb21lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibXlIb21lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsaURBQWlEO0FBQ2pELDZDQUF3RTtBQUV4RSxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFO1FBQ3BCLFFBQVEsRUFBRSxFQUFFLE9BQU8sRUFBRyxFQUFFLEVBQUU7UUFDMUIsVUFBVSxFQUFFLEtBQUs7UUFDakIsTUFBTSxFQUFFLENBQUM7UUFDVCxNQUFNLEVBQUUsQ0FBQztRQUNULGFBQWEsRUFBRSxDQUFDO1FBQ2hCLFlBQVksRUFBRSxnQ0FBZ0M7UUFDOUMsVUFBVSxFQUFFLEtBQUs7S0FDbEI7SUFFRCxNQUFNLEVBQUU7UUFDTixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUE7UUFDaEIsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxNQUFNO1lBQ1gsT0FBTyxFQUFFLFVBQVMsR0FBRztnQkFDbkIsS0FBSyxDQUFDLE9BQVEsQ0FBQztvQkFDYixJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUk7aUJBQ2YsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztTQUNGLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osVUFBVSxFQUFFLElBQUk7U0FDakIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUdELFdBQVc7UUFDVCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDakIsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxNQUFNO1lBQ1gsT0FBTyxFQUFFLFVBQVUsR0FBRztnQkFDcEIsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7Z0JBQzVCLEtBQUssQ0FBQyxrQkFB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QTZCLElBQUksRUFBRTtTQUN6QyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixVQUFVLEVBQUUsS0FBSztTQUNsQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBR0QsT0FBTztRQUNMLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsK0NBQStDO1NBQ3JELENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxPQUFPLEVBQUU7SUFFVCxDQUFDO0lBRUQsTUFBTSxFQUFFO1FBQ04sSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDVixHQUFHLEVBQUUsTUFBTTtZQUNYLE9BQU8sRUFBRSxVQUFVLEdBQUc7Z0JBQ2xCLEtBQUssQ0FBQyxPQUFRLENBQUM7b0JBQ1gsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJO2lCQUNqQixDQUFDLENBQUM7WUFDUCxDQUFDO1NBQ0osQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxNQUFNLEVBQUU7SUFFUixDQUFDO0lBRUQsUUFBUSxFQUFFO0lBRVYsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0ICogYXMgQXBpIGZyb20gJy4uLy4uL3NlcnZpY2UvYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgZGVhbFJpZ2h0SW50ZXJjZXB0LCBzZXRSaWdodFN0b3JhZ2UgfSBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgdXNlcjogeyBvcGVuaWQ6ICcnIH0sXG4gICAgdXNlckluZm86IHsgdmlwVHlwZSA6ICcnIH0sXG4gICAgcGFnZUxvYWRlZDogZmFsc2UsXG4gICAgbWVMaWtlOiAwLFxuICAgIGxpa2VNZTogMCxcbiAgICBsaWtlRWFjaE90aGVyOiAwLFxuICAgIG9wZW5WaXBJbWFnZTogJy4uLy4uL3B1YmxpYy9pbWFnZS9vcGVuVmlwLnBuZycsXG4gICAgc2hvd0RpYWxvZzogZmFsc2UsXG4gIH0sXG5cbiAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IF90aGlzID0gdGhpc1xuICAgIHd4LmdldFN0b3JhZ2Uoe1xuICAgICAga2V5OiAndXNlcicsIC8vIOeUqOaIt+WktOWDj+S/oeaBr1xuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIF90aGlzLnNldERhdGEhKHtcbiAgICAgICAgICB1c2VyOiByZXMuZGF0YVxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgdGhpcy5nZXRVc2VySW5mbygpO1xuICAgIHRoaXMuZ2V0VXNlcnNMaWtlQ291bnQoKTtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIHBhZ2VMb2FkZWQ6IHRydWUsXG4gICAgfSlcbiAgfSxcblxuICAvKiog6I635Y+W55So5oi35L+h5oGvICovXG4gIGdldFVzZXJJbmZvKCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgd3guZ2V0U3RvcmFnZSh7XG4gICAgICBrZXk6ICd1c2VyJywgLy8g55So5oi35aS05YOP5L+h5oGvXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgIGNvbnN0IHsgb3BlbmlkIH0gPSByZXMuZGF0YTtcbiAgICAgICAgX3RoaXMucmVxdWVzdEZvclVzZXJJbmZvKG9wZW5pZCk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9LFxuICByZXF1ZXN0Rm9yVXNlckluZm8ob3BlbmlkOiBzdHJpbmcpIHtcbiAgICBBcGkuZ2V0VXNlckluZm8ob3BlbmlkKS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBjb25zdCB1c2VySW5mbyA9IHJlc3VsdC5kYXRhO1xuICAgICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgICB1c2VySW5mbyxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqIOiOt+WPluWWnOasoueahOexu+WIq+WSjOaVsOmHjyAqL1xuICBnZXRVc2Vyc0xpa2VDb3VudCgpIHtcbiAgICBBcGkuZ2V0VXNlcnNMaWtlQ291bnQoKS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBjb25zdCB1c2Vyc0xpa2VDb3VudCA9IHJlc3VsdC5kYXRhO1xuICAgICAgICBsZXQgbWVMaWtlLCBsaWtlTWUsIGxpa2VFYWNoT3RoZXI7XG4gICAgICAgIHVzZXJzTGlrZUNvdW50LmZvckVhY2goKGU6IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChlLnR5cGUgPT09IFwibWVMaWtlXCIpIHtcbiAgICAgICAgICAgIG1lTGlrZSA9IGUuY291bnQ7XG4gICAgICAgICAgfSBlbHNlIGlmIChlLnR5cGUgPT09IFwibGlrZU1lXCIpIHtcbiAgICAgICAgICAgIGxpa2VNZSA9IGUuY291bnQ7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxpa2VFYWNoT3RoZXIgPSBlLmNvdW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgIG1lTGlrZSxcbiAgICAgICAgICBsaWtlTWUsXG4gICAgICAgICAgbGlrZUVhY2hPdGhlcixcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqIOW/g+eQhua1i+ivleWIl+ihqCAqL1xuICBnb1hsY3NMaXN0KCkge1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiBgLi4veGxjc0xpc3QveGxjc0xpc3RgLFxuICAgIH0pXG4gIH0sXG5cbiAgcmVnaXN0ZXIoKSB7XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6IGAuLi9yZWdpc3Rlci9yZWdpc3RlcmAsXG4gICAgfSlcbiAgfSxcblxuICBteUltYWdlcygpIHtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogYC4uL215SW1hZ2VzL215SW1hZ2VzYCxcbiAgICB9KVxuICB9LFxuXG4gIGdvTWF0Y2hTdGFuZGFyZCgpIHtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogYC4uL3JlZ2lzdGVyU3RhbmRhcmQvcmVnaXN0ZXJTdGFuZGFyZD90eXBlPXVzZXJjZW50ZXJgLFxuICAgIH0pXG4gIH0sXG5cbiAgLyoqIOWFheWAvCAqL1xuICBnb1JlY2hhcmdlKCk6IGFueSB7XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6IGAuLi8uLi9wYWNrYWdlTXlob21lL3BhZ2VzL3JlY2hhcmdlL3JlY2hhcmdlYCxcbiAgICB9KVxuICB9LFxuXG4gIC8qKiBcbiAgICog5Zac5qyi5oiR5YiX6KGoXG4gICAqIOaIkeWWnOasolxuICAgKiDnm7jkupLllpzmrKJcbiAgICovXG4gIGdvRmF0ZUxpc3QoZTogYW55KSB7XG4gICAgY29uc3QgeyB0eXBlIH0gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldDtcbiAgICBjb25zdCB7IHZpcFR5cGUgPSAnJyB9ID0gdGhpcy5kYXRhLnVzZXJJbmZvO1xuICAgIGxldCByaWdodFR5cGUgPSAnJztcbiAgICBpZiAodHlwZSA9PSAyKSB7IC8vIOWWnOasouaIkVxuICAgICAgcmlnaHRUeXBlID0gJ3dob0xpa2VNZSc7XG4gICAgfSBlbHNlIGlmICh0eXBlID09IDMpIHsgLy8g55u45LqS5Zac5qyiXG4gICAgICByaWdodFR5cGUgPSAnbGlrZUVhY2gnO1xuICAgIH1cbiAgICAvLyDlpITnkIbmi6bmiKrlubbov5Tlm57mmK/lkKbpnIDopoHooqvmi6bmiKpcbiAgICBpZiAoZGVhbFJpZ2h0SW50ZXJjZXB0KHZpcFR5cGUsIHJpZ2h0VHlwZSkpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICBzaG93RGlhbG9nOiB0cnVlLFxuICAgICAgfSlcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2V0UmlnaHRTdG9yYWdlKHJpZ2h0VHlwZSk7XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6IGAuLi9mYXRlTGlzdC9mYXRlTGlzdD90eXBlPSR7dHlwZX1gLFxuICAgIH0pO1xuICB9LFxuXG4gIGNsb3NlRGlhbG9nKCkge1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgc2hvd0RpYWxvZzogZmFsc2UsXG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqIOW8gOWKqOS8muWRmCAqL1xuICBvcGVuVmlwKCkge1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiBgLi4vLi4vcGFja2FnZU15aG9tZS9wYWdlcy92aXBDZW50ZXIvdmlwQ2VudGVyYCxcbiAgICB9KTtcbiAgfSxcblxuICBvblJlYWR5OiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICBvblNob3c6IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIHd4LmdldFN0b3JhZ2Uoe1xuICAgICAgICBrZXk6ICd1c2VyJyxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgX3RoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgICAgICAgIHVzZXI6IHJlcy5kYXRhXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICB9KTtcbiAgICB0aGlzLmdldFVzZXJJbmZvKCk7XG4gICAgdGhpcy5nZXRVc2Vyc0xpa2VDb3VudCgpO1xuICB9LFxuXG4gIG9uSGlkZTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgb25VbmxvYWQ6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxufSkiXX0=