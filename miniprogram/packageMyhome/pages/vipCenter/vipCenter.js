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
        },
        currentRight: 0,
    },
    onLoad: function () {
    },
    goRecharge() {
        wx.navigateTo({
            url: `../../../packageMyhome/pages/recharge/recharge`,
        });
    },
    swiperChange(e) {
        console.log(e.detail.current);
        this.setData({
            currentRight: e.detail.current,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlwQ2VudGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmlwQ2VudGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsb0RBQW1FO0FBRW5FLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLEVBQUUsRUFBRSxtQkFBTTtRQUNWLEVBQUUsRUFBRSxzQkFBUztRQUNiLFNBQVMsRUFBRSxzQkFBUztRQUNwQixNQUFNLEVBQUU7WUFDTixhQUFhLEVBQUUsSUFBSTtZQUNuQixRQUFRLEVBQUUsS0FBSztZQUNmLFFBQVEsRUFBRSxLQUFLO1lBQ2YsUUFBUSxFQUFFLElBQUk7WUFDZCxRQUFRLEVBQUUsR0FBRztTQUNkO1FBQ0QsWUFBWSxFQUFFLENBQUM7S0FDaEI7SUFFRCxNQUFNLEVBQUU7SUFFUixDQUFDO0lBR0QsVUFBVTtRQUNSLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsZ0RBQWdEO1NBQ3RELENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxZQUFZLENBQUMsQ0FBTTtRQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLFlBQVksRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU87U0FDL0IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUtELE9BQU8sRUFBRTtJQUVULENBQUM7SUFLRCxNQUFNLEVBQUU7SUFFUixDQUFDO0lBS0QsTUFBTSxFQUFFO0lBRVIsQ0FBQztJQUtELFFBQVEsRUFBRTtJQUVWLENBQUM7SUFLRCxpQkFBaUIsRUFBRTtJQUVuQixDQUFDO0lBS0QsYUFBYSxFQUFFO0lBRWYsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJBSUpJTiwgSFVBTkdUT05HLCBSSUdIVExJU1QgfSBmcm9tICcuL2NvbmZpZy92aXBTZXJ2aWNlJztcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBCSjogQkFJSklOLFxuICAgIEhUOiBIVUFOR1RPTkcsXG4gICAgcmlnaHRMaXN0OiBSSUdIVExJU1QsXG4gICAgc3dpcGVyOiB7XG4gICAgICBpbmRpY2F0b3JEb3RzOiB0cnVlLFxuICAgICAgdmVydGljYWw6IGZhbHNlLFxuICAgICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgaW50ZXJ2YWw6IDIwMDAsXG4gICAgICBkdXJhdGlvbjogNTAwXG4gICAgfSxcbiAgICBjdXJyZW50UmlnaHQ6IDAsIC8vIDAtaHVhbmd0b25nIDEtYmFpamluXG4gIH0sXG5cbiAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKiog5YWF5YC8ICovXG4gIGdvUmVjaGFyZ2UoKTogYW55IHtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogYC4uLy4uLy4uL3BhY2thZ2VNeWhvbWUvcGFnZXMvcmVjaGFyZ2UvcmVjaGFyZ2VgLFxuICAgIH0pXG4gIH0sXG5cbiAgc3dpcGVyQ2hhbmdlKGU6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKGUuZGV0YWlsLmN1cnJlbnQpO1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgY3VycmVudFJpZ2h0OiBlLmRldGFpbC5jdXJyZW50LCBcbiAgICB9KTtcbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliJ3mrKHmuLLmn5PlrozmiJBcbiAgICovXG4gIG9uUmVhZHk6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxuICAgKi9cbiAgb25TaG93OiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cbiAgICovXG4gIG9uSGlkZTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Y246L29XG4gICAqL1xuICBvblVubG9hZDogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXG4gICAqL1xuICBvblB1bGxEb3duUmVmcmVzaDogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxuICAgKi9cbiAgb25SZWFjaEJvdHRvbTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG59KSJdfQ==