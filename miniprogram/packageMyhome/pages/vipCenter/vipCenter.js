"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vipService_1 = require("./config/vipService");
Page({
    data: {
        BJ: vipService_1.BAIJIN,
        HT: vipService_1.HUANGTONG,
        rightList: vipService_1.RIGHTLIST,
        swiper: {
            indicatorDots: true,
            vertical: false,
            autoplay: false,
            interval: 2000,
            duration: 500
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlwQ2VudGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmlwQ2VudGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsb0RBQW1FO0FBRW5FLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLEVBQUUsRUFBRSxtQkFBTTtRQUNWLEVBQUUsRUFBRSxzQkFBUztRQUNiLFNBQVMsRUFBRSxzQkFBUztRQUNwQixNQUFNLEVBQUU7WUFDTixhQUFhLEVBQUUsSUFBSTtZQUNuQixRQUFRLEVBQUUsS0FBSztZQUNmLFFBQVEsRUFBRSxLQUFLO1lBQ2YsUUFBUSxFQUFFLElBQUk7WUFDZCxRQUFRLEVBQUUsR0FBRztTQUNkO0tBQ0Y7SUFFRCxNQUFNLEVBQUU7SUFFUixDQUFDO0lBR0QsVUFBVTtRQUNSLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsZ0RBQWdEO1NBQ3RELENBQUMsQ0FBQTtJQUNKLENBQUM7SUFLRCxPQUFPLEVBQUU7SUFFVCxDQUFDO0lBS0QsTUFBTSxFQUFFO0lBRVIsQ0FBQztJQUtELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFLRCxRQUFRLEVBQUU7SUFFVixDQUFDO0lBS0QsaUJBQWlCLEVBQUU7SUFFbkIsQ0FBQztJQUtELGFBQWEsRUFBRTtJQUVmLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCQUlKSU4sIEhVQU5HVE9ORywgUklHSFRMSVNUIH0gZnJvbSAnLi9jb25maWcvdmlwU2VydmljZSc7XG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgQko6IEJBSUpJTixcbiAgICBIVDogSFVBTkdUT05HLFxuICAgIHJpZ2h0TGlzdDogUklHSFRMSVNULFxuICAgIHN3aXBlcjoge1xuICAgICAgaW5kaWNhdG9yRG90czogdHJ1ZSxcbiAgICAgIHZlcnRpY2FsOiBmYWxzZSxcbiAgICAgIGF1dG9wbGF5OiBmYWxzZSxcbiAgICAgIGludGVydmFsOiAyMDAwLFxuICAgICAgZHVyYXRpb246IDUwMFxuICAgIH1cbiAgfSxcblxuICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKiDlhYXlgLwgKi9cbiAgZ29SZWNoYXJnZSgpOiBhbnkge1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiBgLi4vLi4vLi4vcGFja2FnZU15aG9tZS9wYWdlcy9yZWNoYXJnZS9yZWNoYXJnZWAsXG4gICAgfSlcbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliJ3mrKHmuLLmn5PlrozmiJBcbiAgICovXG4gIG9uUmVhZHk6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxuICAgKi9cbiAgb25TaG93OiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cbiAgICovXG4gIG9uSGlkZTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Y246L29XG4gICAqL1xuICBvblVubG9hZDogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXG4gICAqL1xuICBvblB1bGxEb3duUmVmcmVzaDogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxuICAgKi9cbiAgb25SZWFjaEJvdHRvbTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG59KSJdfQ==