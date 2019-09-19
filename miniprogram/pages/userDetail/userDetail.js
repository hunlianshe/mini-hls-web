"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Api = require("../../service/api.service");
Page({
    data: {
        openid: '',
        userInfo: {},
    },
    onLoad: function (options) {
        this.setData({
            openid: options.openid,
        });
        this.getUserInfo(options.openid);
    },
    getUserInfo(openid) {
        Api.getUserInfo(openid).then((result) => {
            if (result.code == 200) {
                const userInfo = result.data;
                this.setData({
                    userInfo,
                });
            }
        });
    },
    putUsersLike() {
        console.log('putUsersLike');
        const { openid } = this.data;
        Api.putUsersLike(openid).then((result) => {
            if (result.code == 200) {
                wx.showToast({
                    title: '收藏成功',
                    icon: 'success',
                });
            }
        });
    },
    onReady: function () {
    },
    onShow: function () {
    },
    onHide: function () {
    },
    onUnload: function () {
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlckRldGFpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXJEZXRhaWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBaUQ7QUFJakQsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osTUFBTSxFQUFFLEVBQUU7UUFDVixRQUFRLEVBQUUsRUFBUztLQUNwQjtJQUVELE1BQU0sRUFBRSxVQUFVLE9BQVk7UUFDNUIsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTtTQUN2QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBR0QsV0FBVyxDQUFDLE1BQWM7UUFDeEIsR0FBRyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFXLEVBQUUsRUFBRTtZQUMzQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLElBQUksR0FBRyxFQUFFO2dCQUN0QixNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUM3QixJQUFJLENBQUMsT0FBUSxDQUFDO29CQUNaLFFBQVE7aUJBQ1QsQ0FBQyxDQUFDO2FBQ0o7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFHRCxZQUFZO1FBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUM1QixNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUM3QixHQUFHLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQVcsRUFBRSxFQUFFO1lBQzVDLElBQUksTUFBTSxDQUFDLElBQUksSUFBSSxHQUFHLEVBQUU7Z0JBQ3RCLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0JBQ1gsS0FBSyxFQUFFLE1BQU07b0JBQ2IsSUFBSSxFQUFFLFNBQVM7aUJBQ2hCLENBQUMsQ0FBQzthQUNKO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsT0FBTyxFQUFFO0lBQ1QsQ0FBQztJQUdELE1BQU0sRUFBRTtJQUNSLENBQUM7SUFLRCxNQUFNLEVBQUU7SUFFUixDQUFDO0lBS0QsUUFBUSxFQUFFO0lBRVYsQ0FBQztDQUVGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIEFwaSBmcm9tICcuLi8uLi9zZXJ2aWNlL2FwaS5zZXJ2aWNlJzsgXG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XG5cblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBvcGVuaWQ6ICcnLFxuICAgIHVzZXJJbmZvOiB7fSBhcyBhbnksXG4gIH0sXG5cbiAgb25Mb2FkOiBmdW5jdGlvbiAob3B0aW9uczogYW55KSB7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBvcGVuaWQ6IG9wdGlvbnMub3BlbmlkLFxuICAgIH0pO1xuICAgIHRoaXMuZ2V0VXNlckluZm8ob3B0aW9ucy5vcGVuaWQpO1xuICB9LFxuXG4gIC8qKiDojrflj5bnlKjmiLfkv6Hmga8gKi9cbiAgZ2V0VXNlckluZm8ob3BlbmlkOiBzdHJpbmcpIHtcbiAgICBBcGkuZ2V0VXNlckluZm8ob3BlbmlkKS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xuICAgICAgICBjb25zdCB1c2VySW5mbyA9IHJlc3VsdC5kYXRhO1xuICAgICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgICB1c2VySW5mbyxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqIOWFs+azqCjmlLbol48p5o6l5Y+jICovXG4gIHB1dFVzZXJzTGlrZSgpIHtcbiAgICBjb25zb2xlLmxvZygncHV0VXNlcnNMaWtlJyk7XG4gICAgY29uc3QgeyBvcGVuaWQgfSA9IHRoaXMuZGF0YTtcbiAgICBBcGkucHV0VXNlcnNMaWtlKG9wZW5pZCkudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcbiAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICB0aXRsZTogJ+aUtuiXj+aIkOWKnycsXG4gICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICBvblJlYWR5OiBmdW5jdGlvbiAoKSB7XG4gIH0sXG5cblxuICBvblNob3c6IGZ1bmN0aW9uICgpIHtcbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cbiAgICovXG4gIG9uSGlkZTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Y246L29XG4gICAqL1xuICBvblVubG9hZDogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbn0pIl19