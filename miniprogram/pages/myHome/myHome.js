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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXlIb21lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibXlIb21lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsaURBQWlEO0FBQ2pELDZDQUF1RjtBQUV2RixJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFO1FBQ3BCLFFBQVEsRUFBRSxFQUFFLE9BQU8sRUFBRyxFQUFFLEVBQUU7UUFDMUIsVUFBVSxFQUFFLEtBQUs7UUFDakIsTUFBTSxFQUFFLENBQUM7UUFDVCxNQUFNLEVBQUUsQ0FBQztRQUNULGFBQWEsRUFBRSxDQUFDO1FBQ2hCLFlBQVksRUFBRSxnQ0FBZ0M7UUFDOUMsVUFBVSxFQUFFLEtBQUs7S0FDbEI7SUFFRCxNQUFNLEVBQUU7UUFDTixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUE7UUFDaEIsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxNQUFNO1lBQ1gsT0FBTyxFQUFFLFVBQVMsR0FBRztnQkFDbkIsS0FBSyxDQUFDLE9BQVEsQ0FBQztvQkFDYixJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUk7aUJBQ2YsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztTQUNGLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osVUFBVSxFQUFFLElBQUk7U0FDakIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUdELFdBQVc7UUFDVCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDakIsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxNQUFNO1lBQ1gsT0FBTyxFQUFFLFVBQVUsR0FBRztnQkFDcEIsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7Z0JBQzVCLEtBQUssQ0FBQyxrQkFB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Q0FBQztZQUNaLFVBQVUsRUFBRSxLQUFLO1NBQ2xCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFHRCxPQUFPLENBQUMsQ0FBTTtRQUNaLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQTtRQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM3QixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLHNEQUFzRCxFQUFFLEVBQUU7U0FDaEUsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELE9BQU8sRUFBRTtJQUVULENBQUM7SUFFRCxNQUFNLEVBQUU7UUFDTixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDakIsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNWLEdBQUcsRUFBRSxNQUFNO1lBQ1gsT0FBTyxFQUFFLFVBQVUsR0FBRztnQkFDbEIsS0FBSyxDQUFDLE9BQVEsQ0FBQztvQkFDWCxJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUk7aUJBQ2pCLENBQUMsQ0FBQztZQUNQLENBQUM7U0FDSixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFFRCxRQUFRLEVBQUU7SUFFVixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgKiBhcyBBcGkgZnJvbSAnLi4vLi4vc2VydmljZS9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBkZWFsUmlnaHRJbnRlcmNlcHQsIHNldFJpZ2h0U3RvcmFnZSwgZm9ybWF0SExTVGltZSB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJztcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICB1c2VyOiB7IG9wZW5pZDogJycgfSxcbiAgICB1c2VySW5mbzogeyB2aXBUeXBlIDogJycgfSxcbiAgICBwYWdlTG9hZGVkOiBmYWxzZSxcbiAgICBtZUxpa2U6IDAsXG4gICAgbGlrZU1lOiAwLFxuICAgIGxpa2VFYWNoT3RoZXI6IDAsXG4gICAgb3BlblZpcEltYWdlOiAnLi4vLi4vcHVibGljL2ltYWdlL29wZW5WaXAuanBnJyxcbiAgICBzaG93RGlhbG9nOiBmYWxzZSxcbiAgfSxcblxuICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzXG4gICAgd3guZ2V0U3RvcmFnZSh7XG4gICAgICBrZXk6ICd1c2VyJywgLy8g55So5oi35aS05YOP5L+h5oGvXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgX3RoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgIHVzZXI6IHJlcy5kYXRhXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICB9KTtcbiAgICB0aGlzLmdldFVzZXJJbmZvKCk7XG4gICAgdGhpcy5nZXRVc2Vyc0xpa2VDb3VudCgpO1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgcGFnZUxvYWRlZDogdHJ1ZSxcbiAgICB9KTtcbiAgfSxcblxuICAvKiog6I635Y+W55So5oi35L+h5oGvICovXG4gIGdldFVzZXJJbmZvKCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgd3guZ2V0U3RvcmFnZSh7XG4gICAgICBrZXk6ICd1c2VyJywgLy8g55So5oi35aS05YOP5L+h5oGvXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgIGNvbnN0IHsgb3BlbmlkIH0gPSByZXMuZGF0YTtcbiAgICAgICAgX3RoaXMucmVxdWVzdEZvclVzZXJJbmZvKG9wZW5pZCk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9LFxuICByZXF1ZXN0Rm9yVXNlckluZm8ob3BlbmlkOiBzdHJpbmcpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIEFwaS5nZXRVc2VySW5mbyhvcGVuaWQpLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IHVzZXJJbmZvID0gcmVzdWx0LmRhdGE7XG4gICAgICAgIHVzZXJJbmZvLnZpcEV4cGlyZUF0ID0gZm9ybWF0SExTVGltZSh1c2VySW5mby52aXBFeHBpcmVBdCk7XG4gICAgICAgIF90aGlzLnNldERhdGEhKHtcbiAgICAgICAgICB1c2VySW5mbyxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqIOiOt+WPluWWnOasoueahOexu+WIq+WSjOaVsOmHjyAqL1xuICBnZXRVc2Vyc0xpa2VDb3VudCgpIHtcbiAgICBBcGkuZ2V0VXNlcnNMaWtlQ291bnQoKS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBjb25zdCB1c2Vyc0xpa2VDb3VudCA9IHJlc3VsdC5kYXRhO1xuICAgICAgICBsZXQgbWVMaWtlLCBsaWtlTWUsIGxpa2VFYWNoT3RoZXI7XG4gICAgICAgIHVzZXJzTGlrZUNvdW50LmZvckVhY2goKGU6IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChlLnR5cGUgPT09IFwibWVMaWtlXCIpIHtcbiAgICAgICAgICAgIG1lTGlrZSA9IGUuY291bnQ7XG4gICAgICAgICAgfSBlbHNlIGlmIChlLnR5cGUgPT09IFwibGlrZU1lXCIpIHtcbiAgICAgICAgICAgIGxpa2VNZSA9IGUuY291bnQ7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxpa2VFYWNoT3RoZXIgPSBlLmNvdW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgIG1lTGlrZSxcbiAgICAgICAgICBsaWtlTWUsXG4gICAgICAgICAgbGlrZUVhY2hPdGhlcixcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgcmVnaXN0ZXIoKSB7XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6IGAuLi9yZWdpc3Rlci9yZWdpc3RlcmAsXG4gICAgfSlcbiAgfSxcblxuICBteUltYWdlcygpIHtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogYC4uL215SW1hZ2VzL215SW1hZ2VzYCxcbiAgICB9KVxuICB9LFxuXG4gIGdvTWF0Y2hTdGFuZGFyZCgpIHtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogYC4uL3JlZ2lzdGVyU3RhbmRhcmQvcmVnaXN0ZXJTdGFuZGFyZD90eXBlPXVzZXJjZW50ZXJgLFxuICAgIH0pXG4gIH0sXG5cbiAgLyoqIOWFheWAvCAqL1xuICBnb1JlY2hhcmdlKCk6IGFueSB7XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6IGAuLi8uLi9wYWNrYWdlTXlob21lL3BhZ2VzL3JlY2hhcmdlL3JlY2hhcmdlYCxcbiAgICB9KVxuICB9LFxuXG4gIC8qKiBcbiAgICog5Zac5qyi5oiR5YiX6KGoXG4gICAqIOaIkeWWnOasolxuICAgKiDnm7jkupLllpzmrKJcbiAgICovXG4gIGdvRmF0ZUxpc3QoZTogYW55KSB7XG4gICAgY29uc3QgeyB0eXBlIH0gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldDtcbiAgICBsZXQgcmlnaHRUeXBlID0gJyc7XG4gICAgaWYgKHR5cGUgPT0gMikgeyAvLyDllpzmrKLmiJFcbiAgICAgIHJpZ2h0VHlwZSA9ICd3aG9MaWtlTWUnO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PSAzKSB7IC8vIOebuOS6kuWWnOasolxuICAgICAgcmlnaHRUeXBlID0gJ2xpa2VFYWNoJztcbiAgICB9XG4gICAgLy8g5aSE55CG5oum5oiq5bm26L+U5Zue5piv5ZCm6ZyA6KaB6KKr5oum5oiqXG4gICAgaWYgKGRlYWxSaWdodEludGVyY2VwdChyaWdodFR5cGUpKSB7XG4gICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgc2hvd0RpYWxvZzogdHJ1ZSxcbiAgICAgIH0pXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNldFJpZ2h0U3RvcmFnZShyaWdodFR5cGUpO1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiBgLi4vZmF0ZUxpc3QvZmF0ZUxpc3Q/dHlwZT0ke3R5cGV9YCxcbiAgICB9KTtcbiAgfSxcblxuICBjbG9zZURpYWxvZygpIHtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIHNob3dEaWFsb2c6IGZhbHNlLFxuICAgIH0pO1xuICB9LFxuXG4gIC8qKiDlvIDpgJrkvJrlkZggKi9cbiAgb3BlblZpcChlOiBhbnkpIHtcbiAgICBjb25zdCBpZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkXG4gICAgY29uc29sZS5sb2coYG9wZW4gdmlwOmAsIGlkKTtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogYC4uLy4uL3BhY2thZ2VNeWhvbWUvcGFnZXMvdmlwQ2VudGVyL3ZpcENlbnRlcj90eXBlPSR7aWR9YCxcbiAgICB9KTtcbiAgfSxcblxuICBvblJlYWR5OiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICBvblNob3c6IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIHd4LmdldFN0b3JhZ2Uoe1xuICAgICAgICBrZXk6ICd1c2VyJyxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgX3RoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgICAgICAgIHVzZXI6IHJlcy5kYXRhXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICB9KTtcbiAgICB0aGlzLmdldFVzZXJJbmZvKCk7XG4gICAgdGhpcy5nZXRVc2Vyc0xpa2VDb3VudCgpO1xuICB9LFxuXG4gIG9uSGlkZTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgb25VbmxvYWQ6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxufSkiXX0=