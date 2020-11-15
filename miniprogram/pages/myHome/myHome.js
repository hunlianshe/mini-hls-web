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
            url: `../../packageMyhome/pages/paySuccess/paySuccess`,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXlIb21lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibXlIb21lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsaURBQWlEO0FBQ2pELDZDQUF1RjtBQUV2RixJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFO1FBQ3BCLFFBQVEsRUFBRSxFQUFFLE9BQU8sRUFBRyxFQUFFLEVBQUU7UUFDMUIsVUFBVSxFQUFFLEtBQUs7UUFDakIsTUFBTSxFQUFFLENBQUM7UUFDVCxNQUFNLEVBQUUsQ0FBQztRQUNULGFBQWEsRUFBRSxDQUFDO1FBQ2hCLFlBQVksRUFBRSxnQ0FBZ0M7UUFDOUMsVUFBVSxFQUFFLEtBQUs7S0FDbEI7SUFFRCxNQUFNLEVBQUU7UUFDTixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUE7UUFDaEIsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxNQUFNO1lBQ1gsT0FBTyxFQUFFLFVBQVMsR0FBRztnQkFDbkIsS0FBSyxDQUFDLE9BQVEsQ0FBQztvQkFDYixJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUk7aUJBQ2YsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztTQUNGLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osVUFBVSxFQUFFLElBQUk7U0FDakIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUdELFdBQVc7UUFDVCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDakIsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxNQUFNO1lBQ1gsT0FBTyxFQUFFLFVBQVUsR0FBRztnQkFDcEIsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7Z0JBQzVCLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuQyxDQUFDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELGtCQUFrQixDQUFDLE1BQWM7UUFDL0IsR0FBRyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFXLEVBQUUsRUFBRTtZQUMzQyxJQUFJLE1BQU0sRUFBRTtnQkFDVixNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUM3QixRQUFRLENBQUMsV0FBVyxHQUFHLHFCQUFhLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUMzRCxJQUFJLENBQUMsT0FBUSxDQUFDO29CQUNaLFFBQVE7aUJBQ1QsQ0FBQyxDQUFDO2FBQ0o7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFHRCxpQkFBaUI7UUFDZixHQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFXLEVBQUUsRUFBRTtZQUMzQyxJQUFJLE1BQU0sRUFBRTtnQkFDVixNQUFNLGNBQWMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNuQyxJQUFJLE1BQU0sRUFBRSxNQUFNLEVBQUUsYUFBYSxDQUFDO2dCQUNsQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBTSxFQUFFLEVBQUU7b0JBQ2hDLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7d0JBQ3ZCLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO3FCQUNsQjt5QkFBTSxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO3dCQUM5QixNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztxQkFDbEI7eUJBQU07d0JBQ0wsYUFBYSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7cUJBQ3pCO2dCQUNILENBQUMsQ0FBQyxDQUFDO2dCQUNILElBQUksQ0FBQyxPQUFRLENBQUM7b0JBQ1osTUFBTTtvQkFDTixNQUFNO29CQUNOLGFBQWE7aUJBQ2QsQ0FBQyxDQUFDO2FBQ0o7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxRQUFRO1FBQ04sRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxzQkFBc0I7U0FDNUIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELFFBQVE7UUFDTixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLHNCQUFzQjtTQUM1QixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsZUFBZTtRQUNiLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsc0RBQXNEO1NBQzVELENBQUMsQ0FBQTtJQUNKLENBQUM7SUFHRCxVQUFVO1FBQ1IsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSw2Q0FBNkM7U0FDbkQsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQU9ELFVBQVUsQ0FBQyxDQUFNO1FBQ2YsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQ3pDLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNuQixJQUFJLElBQUksSUFBSSxDQUFDLEVBQUU7WUFDYixTQUFTLEdBQUcsV0FBVyxDQUFDO1NBQ3pCO2FBQU0sSUFBSSxJQUFJLElBQUksQ0FBQyxFQUFFO1lBQ3BCLFNBQVMsR0FBRyxVQUFVLENBQUM7U0FDeEI7UUFFRCxJQUFJLDBCQUFrQixDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxPQUFRLENBQUM7Z0JBQ1osVUFBVSxFQUFFLElBQUk7YUFDakIsQ0FBQyxDQUFBO1lBQ0YsT0FBTztTQUNSO1FBQ0QsdUJBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMzQixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLDZCQUE2QixJQUFJLEVBQUU7U0FDekMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osVUFBVSxFQUFFLEtBQUs7U0FDbEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUdELE9BQU87UUFDTCxFQUFFLENBQUMsVUFBVSxDQUFDO1lBRVosR0FBRyxFQUFFLGlEQUFpRDtTQUN2RCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsT0FBTyxFQUFFO0lBRVQsQ0FBQztJQUVELE1BQU0sRUFBRTtRQUNOLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztRQUNqQixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1YsR0FBRyxFQUFFLE1BQU07WUFDWCxPQUFPLEVBQUUsVUFBVSxHQUFHO2dCQUNsQixLQUFLLENBQUMsT0FBUSxDQUFDO29CQUNYLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSTtpQkFDakIsQ0FBQyxDQUFDO1lBQ1AsQ0FBQztTQUNKLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsTUFBTSxFQUFFO0lBRVIsQ0FBQztJQUVELFFBQVEsRUFBRTtJQUVWLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCAqIGFzIEFwaSBmcm9tICcuLi8uLi9zZXJ2aWNlL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IGRlYWxSaWdodEludGVyY2VwdCwgc2V0UmlnaHRTdG9yYWdlLCBmb3JtYXRITFNUaW1lIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xuXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIHVzZXI6IHsgb3BlbmlkOiAnJyB9LFxuICAgIHVzZXJJbmZvOiB7IHZpcFR5cGUgOiAnJyB9LFxuICAgIHBhZ2VMb2FkZWQ6IGZhbHNlLFxuICAgIG1lTGlrZTogMCxcbiAgICBsaWtlTWU6IDAsXG4gICAgbGlrZUVhY2hPdGhlcjogMCxcbiAgICBvcGVuVmlwSW1hZ2U6ICcuLi8uLi9wdWJsaWMvaW1hZ2Uvb3BlblZpcC5qcGcnLFxuICAgIHNob3dEaWFsb2c6IGZhbHNlLFxuICB9LFxuXG4gIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXNcbiAgICB3eC5nZXRTdG9yYWdlKHtcbiAgICAgIGtleTogJ3VzZXInLCAvLyDnlKjmiLflpLTlg4/kv6Hmga9cbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBfdGhpcy5zZXREYXRhISh7XG4gICAgICAgICAgdXNlcjogcmVzLmRhdGFcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgIH0pO1xuICAgIHRoaXMuZ2V0VXNlckluZm8oKTtcbiAgICB0aGlzLmdldFVzZXJzTGlrZUNvdW50KCk7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBwYWdlTG9hZGVkOiB0cnVlLFxuICAgIH0pO1xuICB9LFxuXG4gIC8qKiDojrflj5bnlKjmiLfkv6Hmga8gKi9cbiAgZ2V0VXNlckluZm8oKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICB3eC5nZXRTdG9yYWdlKHtcbiAgICAgIGtleTogJ3VzZXInLCAvLyDnlKjmiLflpLTlg4/kv6Hmga9cbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgY29uc3QgeyBvcGVuaWQgfSA9IHJlcy5kYXRhO1xuICAgICAgICBfdGhpcy5yZXF1ZXN0Rm9yVXNlckluZm8ob3BlbmlkKTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0sXG4gIHJlcXVlc3RGb3JVc2VySW5mbyhvcGVuaWQ6IHN0cmluZykge1xuICAgIEFwaS5nZXRVc2VySW5mbyhvcGVuaWQpLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IHVzZXJJbmZvID0gcmVzdWx0LmRhdGE7XG4gICAgICAgIHVzZXJJbmZvLnZpcEV4cGlyZUF0ID0gZm9ybWF0SExTVGltZSh1c2VySW5mby52aXBFeHBpcmVBdCk7XG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgIHVzZXJJbmZvLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICAvKiog6I635Y+W5Zac5qyi55qE57G75Yir5ZKM5pWw6YePICovXG4gIGdldFVzZXJzTGlrZUNvdW50KCkge1xuICAgIEFwaS5nZXRVc2Vyc0xpa2VDb3VudCgpLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IHVzZXJzTGlrZUNvdW50ID0gcmVzdWx0LmRhdGE7XG4gICAgICAgIGxldCBtZUxpa2UsIGxpa2VNZSwgbGlrZUVhY2hPdGhlcjtcbiAgICAgICAgdXNlcnNMaWtlQ291bnQuZm9yRWFjaCgoZTogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKGUudHlwZSA9PT0gXCJtZUxpa2VcIikge1xuICAgICAgICAgICAgbWVMaWtlID0gZS5jb3VudDtcbiAgICAgICAgICB9IGVsc2UgaWYgKGUudHlwZSA9PT0gXCJsaWtlTWVcIikge1xuICAgICAgICAgICAgbGlrZU1lID0gZS5jb3VudDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGlrZUVhY2hPdGhlciA9IGUuY291bnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgICAgbWVMaWtlLFxuICAgICAgICAgIGxpa2VNZSxcbiAgICAgICAgICBsaWtlRWFjaE90aGVyLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICByZWdpc3RlcigpIHtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogYC4uL3JlZ2lzdGVyL3JlZ2lzdGVyYCxcbiAgICB9KVxuICB9LFxuXG4gIG15SW1hZ2VzKCkge1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiBgLi4vbXlJbWFnZXMvbXlJbWFnZXNgLFxuICAgIH0pXG4gIH0sXG5cbiAgZ29NYXRjaFN0YW5kYXJkKCkge1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiBgLi4vcmVnaXN0ZXJTdGFuZGFyZC9yZWdpc3RlclN0YW5kYXJkP3R5cGU9dXNlcmNlbnRlcmAsXG4gICAgfSlcbiAgfSxcblxuICAvKiog5YWF5YC8ICovXG4gIGdvUmVjaGFyZ2UoKTogYW55IHtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogYC4uLy4uL3BhY2thZ2VNeWhvbWUvcGFnZXMvcmVjaGFyZ2UvcmVjaGFyZ2VgLFxuICAgIH0pXG4gIH0sXG5cbiAgLyoqIFxuICAgKiDllpzmrKLmiJHliJfooahcbiAgICog5oiR5Zac5qyiXG4gICAqIOebuOS6kuWWnOasolxuICAgKi9cbiAgZ29GYXRlTGlzdChlOiBhbnkpIHtcbiAgICBjb25zdCB7IHR5cGUgfSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0O1xuICAgIGxldCByaWdodFR5cGUgPSAnJztcbiAgICBpZiAodHlwZSA9PSAyKSB7IC8vIOWWnOasouaIkVxuICAgICAgcmlnaHRUeXBlID0gJ3dob0xpa2VNZSc7XG4gICAgfSBlbHNlIGlmICh0eXBlID09IDMpIHsgLy8g55u45LqS5Zac5qyiXG4gICAgICByaWdodFR5cGUgPSAnbGlrZUVhY2gnO1xuICAgIH1cbiAgICAvLyDlpITnkIbmi6bmiKrlubbov5Tlm57mmK/lkKbpnIDopoHooqvmi6bmiKpcbiAgICBpZiAoZGVhbFJpZ2h0SW50ZXJjZXB0KHJpZ2h0VHlwZSkpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICBzaG93RGlhbG9nOiB0cnVlLFxuICAgICAgfSlcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2V0UmlnaHRTdG9yYWdlKHJpZ2h0VHlwZSk7XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6IGAuLi9mYXRlTGlzdC9mYXRlTGlzdD90eXBlPSR7dHlwZX1gLFxuICAgIH0pO1xuICB9LFxuXG4gIGNsb3NlRGlhbG9nKCkge1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgc2hvd0RpYWxvZzogZmFsc2UsXG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqIOW8gOmAmuS8muWRmCAqL1xuICBvcGVuVmlwKCkge1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgLy8gdXJsOiBgLi4vLi4vcGFja2FnZU15aG9tZS9wYWdlcy92aXBDZW50ZXIvdmlwQ2VudGVyYCxcbiAgICAgIHVybDogYC4uLy4uL3BhY2thZ2VNeWhvbWUvcGFnZXMvcGF5U3VjY2Vzcy9wYXlTdWNjZXNzYCxcbiAgICB9KTtcbiAgfSxcblxuICBvblJlYWR5OiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICBvblNob3c6IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIHd4LmdldFN0b3JhZ2Uoe1xuICAgICAgICBrZXk6ICd1c2VyJyxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgX3RoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgICAgICAgIHVzZXI6IHJlcy5kYXRhXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICB9KTtcbiAgICB0aGlzLmdldFVzZXJJbmZvKCk7XG4gICAgdGhpcy5nZXRVc2Vyc0xpa2VDb3VudCgpO1xuICB9LFxuXG4gIG9uSGlkZTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgb25VbmxvYWQ6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxufSkiXX0=