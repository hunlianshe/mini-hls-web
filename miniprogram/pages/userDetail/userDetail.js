"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Api = require("../../service/api.service");
Page({
    data: {
        userOpenid: '',
        userInfo: {},
    },
    onLoad: function (options) {
        this.setData({
            userOpenid: options.openid,
        });
    },
    getUserInfo() {
        const { userOpenid } = this.data;
        Api.getUserInfo(userOpenid).then((result) => {
            if (result) {
                const userInfo = result.data;
                this.setData({
                    userInfo,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlckRldGFpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXJEZXRhaWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBaUQ7QUFJakQsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osVUFBVSxFQUFFLEVBQUU7UUFDZCxRQUFRLEVBQUUsRUFBUztLQUNwQjtJQUVELE1BQU0sRUFBRSxVQUFVLE9BQVk7UUFDNUIsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLFVBQVUsRUFBRSxPQUFPLENBQUMsTUFBTTtTQUMzQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBR0QsV0FBVztRQUNULE1BQU0sRUFBRSxVQUFVLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ2pDLEdBQUcsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBVyxFQUFFLEVBQUU7WUFDL0MsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDN0IsSUFBSSxDQUFDLE9BQVEsQ0FBQztvQkFDWixRQUFRO2lCQUNULENBQUMsQ0FBQzthQUNKO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsT0FBTyxFQUFFO0lBQ1QsQ0FBQztJQUdELE1BQU0sRUFBRTtJQUNSLENBQUM7SUFLRCxNQUFNLEVBQUU7SUFFUixDQUFDO0lBS0QsUUFBUSxFQUFFO0lBRVYsQ0FBQztDQUVGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIEFwaSBmcm9tICcuLi8uLi9zZXJ2aWNlL2FwaS5zZXJ2aWNlJztcbi8vIGltcG9ydCB7IElNeUFwcCB9IGZyb20gJy4uLy4uL2FwcCc7XG4vLyBjb25zdCBhcHAgPSBnZXRBcHA8SU15QXBwPigpO1xuXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIHVzZXJPcGVuaWQ6ICcnLFxuICAgIHVzZXJJbmZvOiB7fSBhcyBhbnksXG4gIH0sXG5cbiAgb25Mb2FkOiBmdW5jdGlvbiAob3B0aW9uczogYW55KSB7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICB1c2VyT3BlbmlkOiBvcHRpb25zLm9wZW5pZCxcbiAgICB9KTtcbiAgfSxcblxuICAvKiog6I635Y+W55So5oi35L+h5oGvICovXG4gIGdldFVzZXJJbmZvKCkge1xuICAgIGNvbnN0IHsgdXNlck9wZW5pZCB9ID0gdGhpcy5kYXRhO1xuICAgIEFwaS5nZXRVc2VySW5mbyh1c2VyT3BlbmlkKS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBjb25zdCB1c2VySW5mbyA9IHJlc3VsdC5kYXRhO1xuICAgICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgICB1c2VySW5mbyxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgb25SZWFkeTogZnVuY3Rpb24gKCkge1xuICB9LFxuXG5cbiAgb25TaG93OiBmdW5jdGlvbiAoKSB7XG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXG4gICAqL1xuICBvbkhpZGU6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxuICAgKi9cbiAgb25VbmxvYWQ6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG59KSJdfQ==