"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Api = require("../../service/api.service");
const app = getApp();
Page({
    data: {
        userId: '',
        userInfo: app.globalData.userInfo,
    },
    onLoad: function (options) {
        this.setData({
            userId: options.id,
        });
    },
    getUserInfo() {
        const { openid } = this.data.userInfo;
        Api.getUserInfo(openid).then((result) => {
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
    onPullDownRefresh: function () {
    },
    onReachBottom: function () {
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlckRldGFpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXJEZXRhaWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBaUQ7QUFFakQsTUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFVLENBQUM7QUFFN0IsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osTUFBTSxFQUFFLEVBQUU7UUFDVixRQUFRLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFlO0tBQ3pDO0lBRUQsTUFBTSxFQUFFLFVBQVUsT0FBWTtRQUM1QixJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osTUFBTSxFQUFFLE9BQU8sQ0FBQyxFQUFFO1NBQ25CLENBQUMsQ0FBQztJQUNMLENBQUM7SUFHRCxXQUFXO1FBQ1QsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3RDLEdBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBVyxFQUFFLEVBQUU7WUFDM0MsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDN0IsSUFBSSxDQUFDLE9BQVEsQ0FBQztvQkFDWixRQUFRO2lCQUNULENBQUMsQ0FBQzthQUNKO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBS0QsT0FBTyxFQUFFO0lBRVQsQ0FBQztJQUtELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFLRCxNQUFNLEVBQUU7SUFFUixDQUFDO0lBS0QsUUFBUSxFQUFFO0lBRVYsQ0FBQztJQUtELGlCQUFpQixFQUFFO0lBRW5CLENBQUM7SUFLRCxhQUFhLEVBQUU7SUFFZixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgQXBpIGZyb20gJy4uLy4uL3NlcnZpY2UvYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgSU15QXBwIH0gZnJvbSAnLi4vLi4vYXBwJztcbmNvbnN0IGFwcCA9IGdldEFwcDxJTXlBcHA+KCk7XG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgdXNlcklkOiAnJyxcbiAgICB1c2VySW5mbzogYXBwLmdsb2JhbERhdGEudXNlckluZm8gYXMgYW55LFxuICB9LFxuXG4gIG9uTG9hZDogZnVuY3Rpb24gKG9wdGlvbnM6IGFueSkge1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgdXNlcklkOiBvcHRpb25zLmlkLFxuICAgIH0pO1xuICB9LFxuXG4gIC8qKiDojrflj5bnlKjmiLfkv6Hmga8gKi9cbiAgZ2V0VXNlckluZm8oKSB7XG4gICAgY29uc3QgeyBvcGVuaWQgfSA9IHRoaXMuZGF0YS51c2VySW5mbztcbiAgICBBcGkuZ2V0VXNlckluZm8ob3BlbmlkKS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBjb25zdCB1c2VySW5mbyA9IHJlc3VsdC5kYXRhO1xuICAgICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgICB1c2VySW5mbyxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yid5qyh5riy5p+T5a6M5oiQXG4gICAqL1xuICBvblJlYWR5OiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcbiAgICovXG4gIG9uU2hvdzogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXG4gICAqL1xuICBvbkhpZGU6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxuICAgKi9cbiAgb25VbmxvYWQ6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxuICAgKi9cbiAgb25QdWxsRG93blJlZnJlc2g6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcbiAgICovXG4gIG9uUmVhY2hCb3R0b206IGZ1bmN0aW9uICgpIHtcblxuICB9LFxufSkiXX0=