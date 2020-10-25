"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vipService_1 = require("./config/vipService");
Page({
    data: {
        BJ: vipService_1.BAIJIN,
        HT: vipService_1.HUANGTONG,
        rightList: vipService_1.RIGHTLIST
    },
    onLoad: function () {
    },
    goRecharge() {
        wx.navigateTo({
            url: `../../../packageMyhome/pages/recharge/recharge`,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlwQ2VudGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmlwQ2VudGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsb0RBQW1FO0FBRW5FLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLEVBQUUsRUFBRSxtQkFBTTtRQUNWLEVBQUUsRUFBRSxzQkFBUztRQUNiLFNBQVMsRUFBRSxzQkFBUztLQUNyQjtJQUVELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFHRCxVQUFVO1FBQ1IsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxnREFBZ0Q7U0FDdEQsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUtELE9BQU8sRUFBRTtJQUVULENBQUM7SUFLRCxNQUFNLEVBQUU7SUFFUixDQUFDO0lBS0QsTUFBTSxFQUFFO0lBRVIsQ0FBQztJQUtELFFBQVEsRUFBRTtJQUVWLENBQUM7SUFLRCxpQkFBaUIsRUFBRTtJQUVuQixDQUFDO0lBS0QsYUFBYSxFQUFFO0lBRWYsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJBSUpJTiwgSFVBTkdUT05HLCBSSUdIVExJU1QgfSBmcm9tICcuL2NvbmZpZy92aXBTZXJ2aWNlJztcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBCSjogQkFJSklOLFxuICAgIEhUOiBIVUFOR1RPTkcsXG4gICAgcmlnaHRMaXN0OiBSSUdIVExJU1RcbiAgfSxcblxuICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKiDlhYXlgLwgKi9cbiAgZ29SZWNoYXJnZSgpOiBhbnkge1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiBgLi4vLi4vLi4vcGFja2FnZU15aG9tZS9wYWdlcy9yZWNoYXJnZS9yZWNoYXJnZWAsXG4gICAgfSlcbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliJ3mrKHmuLLmn5PlrozmiJBcbiAgICovXG4gIG9uUmVhZHk6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxuICAgKi9cbiAgb25TaG93OiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cbiAgICovXG4gIG9uSGlkZTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Y246L29XG4gICAqL1xuICBvblVubG9hZDogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXG4gICAqL1xuICBvblB1bGxEb3duUmVmcmVzaDogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxuICAgKi9cbiAgb25SZWFjaEJvdHRvbTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG59KSJdfQ==