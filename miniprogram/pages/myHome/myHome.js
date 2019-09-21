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
        const { openid } = this.data.user;
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
        const { pageLoaded } = this.data;
        if (pageLoaded) {
            this.getUserInfo();
        }
    },
    onHide: function () {
    },
    onUnload: function () {
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXlIb21lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibXlIb21lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsaURBQWlEO0FBRWpELElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUU7UUFDcEIsUUFBUSxFQUFFLEVBQUU7UUFDWixjQUFjLEVBQUUsRUFBRTtRQUNsQixVQUFVLEVBQUUsS0FBSztRQUNqQixNQUFNLEVBQUUsQ0FBQztRQUNULE1BQU0sRUFBRSxDQUFDO1FBQ1QsYUFBYSxFQUFFLENBQUM7S0FDakI7SUFFRCxNQUFNLEVBQUU7UUFDTixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUE7UUFDaEIsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxNQUFNO1lBQ1gsT0FBTyxFQUFFLFVBQVMsR0FBRztnQkFDbkIsS0FBSyxDQUFDLE9BQVEsQ0FBQztvQkFDYixJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUk7aUJBQ2YsQ0FBQyxDQUFBO1lBQ0osQ0FBQztTQUNGLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osVUFBVSxFQUFFLElBQUk7U0FDakIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUdELFdBQVc7UUFDVCxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDbEMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFXLEVBQUUsRUFBRTtZQUMzQyxJQUFJLE1BQU0sRUFBRTtnQkFDVixNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUM3QixJQUFJLENBQUMsT0FBUSxDQUFDO29CQUNaLFFBQVE7aUJBRVQsQ0FBQyxDQUFDO2FBS0o7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFHRCxpQkFBaUI7UUFDZixHQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFXLEVBQUUsRUFBRTtZQUMzQyxJQUFJLE1BQU0sRUFBRTtnQkFDVixNQUFNLGNBQWMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNuQyxJQUFJLE1BQU0sRUFBRSxNQUFNLEVBQUUsYUFBYSxDQUFDO2dCQUNsQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBTSxFQUFFLEVBQUU7b0JBQ2hDLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7d0JBQ3ZCLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO3FCQUNsQjt5QkFBTSxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO3dCQUM5QixNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztxQkFDbEI7eUJBQU07d0JBQ0wsYUFBYSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7cUJBQ3pCO2dCQUNILENBQUMsQ0FBQyxDQUFDO2dCQUNILElBQUksQ0FBQyxPQUFRLENBQUM7b0JBQ1osTUFBTTtvQkFDTixNQUFNO29CQUNOLGFBQWE7aUJBQ2QsQ0FBQyxDQUFDO2FBQ0o7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFHRCxVQUFVO1FBQ1IsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxzQkFBc0I7U0FDNUIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELFFBQVE7UUFDTixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLHNCQUFzQjtTQUM1QixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsUUFBUTtRQUNOLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsc0JBQXNCO1NBQzVCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxlQUFlO1FBQ2IsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxzREFBc0Q7U0FDNUQsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUdELFlBQVk7UUFDVixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLDBCQUEwQjtTQUNoQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBR0QsVUFBVSxDQUFDLENBQU07UUFFZixNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDekMsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSw2QkFBNkIsSUFBSSxFQUFFO1NBQ3pDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxPQUFPLEVBQUU7SUFFVCxDQUFDO0lBRUQsTUFBTSxFQUFFO1FBQ04sTUFBTSxFQUFFLFVBQVUsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDakMsSUFBSSxVQUFVLEVBQUU7WUFDZCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEI7SUFDSCxDQUFDO0lBRUQsTUFBTSxFQUFFO0lBRVIsQ0FBQztJQUVELFFBQVEsRUFBRTtJQUVWLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCAqIGFzIEFwaSBmcm9tICcuLi8uLi9zZXJ2aWNlL2FwaS5zZXJ2aWNlJztcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICB1c2VyOiB7IG9wZW5pZDogJycgfSxcbiAgICB1c2VySW5mbzoge30sXG4gICAgdXNlclN0YXRpc3RpY3M6IHt9LFxuICAgIHBhZ2VMb2FkZWQ6IGZhbHNlLFxuICAgIG1lTGlrZTogMCxcbiAgICBsaWtlTWU6IDAsXG4gICAgbGlrZUVhY2hPdGhlcjogMCxcbiAgfSxcblxuICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzXG4gICAgd3guZ2V0U3RvcmFnZSh7XG4gICAgICBrZXk6ICd1c2VyJyxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBfdGhpcy5zZXREYXRhISh7XG4gICAgICAgICAgdXNlcjogcmVzLmRhdGFcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgdGhpcy5nZXRVc2VySW5mbygpO1xuICAgIHRoaXMuZ2V0VXNlcnNMaWtlQ291bnQoKTtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIHBhZ2VMb2FkZWQ6IHRydWUsXG4gICAgfSlcbiAgfSxcblxuICAvKiog6I635Y+W55So5oi35L+h5oGvICovXG4gIGdldFVzZXJJbmZvKCkge1xuICAgIGNvbnN0IHsgb3BlbmlkIH0gPSB0aGlzLmRhdGEudXNlcjtcbiAgICBBcGkuZ2V0VXNlckluZm8ob3BlbmlkKS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBjb25zdCB1c2VySW5mbyA9IHJlc3VsdC5kYXRhO1xuICAgICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgICB1c2VySW5mbyxcbiAgICAgICAgICAvLyB1c2VyU3RhdGlzdGljczogdXNlckluZm8uc3RhdGlzdGljcyxcbiAgICAgICAgfSk7XG4gICAgICAgIC8vICAgd3guc2V0U3RvcmFnZSh7XG4gICAgICAgIC8vICAgICBrZXk6ICd1c2VyU2hvcEluZm8nLFxuICAgICAgICAvLyAgICAgZGF0YTogdXNlckluZm8sXG4gICAgICAgIC8vICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqIOiOt+WPluWWnOasoueahOexu+WIq+WSjOaVsOmHjyAqL1xuICBnZXRVc2Vyc0xpa2VDb3VudCgpIHtcbiAgICBBcGkuZ2V0VXNlcnNMaWtlQ291bnQoKS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBjb25zdCB1c2Vyc0xpa2VDb3VudCA9IHJlc3VsdC5kYXRhO1xuICAgICAgICBsZXQgbWVMaWtlLCBsaWtlTWUsIGxpa2VFYWNoT3RoZXI7XG4gICAgICAgIHVzZXJzTGlrZUNvdW50LmZvckVhY2goKGU6IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChlLnR5cGUgPT09IFwibWVMaWtlXCIpIHtcbiAgICAgICAgICAgIG1lTGlrZSA9IGUuY291bnQ7XG4gICAgICAgICAgfSBlbHNlIGlmIChlLnR5cGUgPT09IFwibGlrZU1lXCIpIHtcbiAgICAgICAgICAgIGxpa2VNZSA9IGUuY291bnQ7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxpa2VFYWNoT3RoZXIgPSBlLmNvdW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgIG1lTGlrZSxcbiAgICAgICAgICBsaWtlTWUsXG4gICAgICAgICAgbGlrZUVhY2hPdGhlcixcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqIOW/g+eQhua1i+ivleWIl+ihqCAqL1xuICBnb1hsY3NMaXN0KCkge1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiBgLi4veGxjc0xpc3QveGxjc0xpc3RgLFxuICAgIH0pXG4gIH0sXG5cbiAgcmVnaXN0ZXIoKSB7XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6IGAuLi9yZWdpc3Rlci9yZWdpc3RlcmAsXG4gICAgfSlcbiAgfSxcblxuICBteUltYWdlcygpIHtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogYC4uL215SW1hZ2VzL215SW1hZ2VzYCxcbiAgICB9KVxuICB9LFxuXG4gIGdvTWF0Y2hTdGFuZGFyZCgpIHtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogYC4uL3JlZ2lzdGVyU3RhbmRhcmQvcmVnaXN0ZXJTdGFuZGFyZD90eXBlPXVzZXJjZW50ZXJgLFxuICAgIH0pXG4gIH0sXG5cbiAgLyoqIOe6ouWomCAqL1xuICBnb01hdGNobWFrZXIoKTogYW55IHtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogYC4uL21hdGNobWFrZXIvbWF0Y2htYWtlcmAsXG4gICAgfSlcbiAgfSxcblxuICAvKiog5Zac5qyi5Lq65YiX6KGoICovXG4gIGdvRmF0ZUxpc3QoZTogYW55KSB7XG4gICAgLy8gY29uc3QgaWQgPSB0aGlzLmRhdGEudXNlckluZm8uU2hvcC5pZDtcbiAgICBjb25zdCB7IHR5cGUgfSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0O1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiBgLi4vZmF0ZUxpc3QvZmF0ZUxpc3Q/dHlwZT0ke3R5cGV9YCxcbiAgICB9KVxuICB9LFxuXG4gIG9uUmVhZHk6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIG9uU2hvdzogZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHsgcGFnZUxvYWRlZCB9ID0gdGhpcy5kYXRhO1xuICAgIGlmIChwYWdlTG9hZGVkKSB7XG4gICAgICB0aGlzLmdldFVzZXJJbmZvKCk7XG4gICAgfVxuICB9LFxuXG4gIG9uSGlkZTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgb25VbmxvYWQ6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxufSkiXX0=