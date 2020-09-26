"use strict";
Page({
    data: {
        name: '',
        catDogResult: {},
    },
    onLoad: function (options) {
        this.setData({
            name: options.name,
        });
        let _this = this;
        wx.getStorage({
            key: 'catDogResult',
            success: function (res) {
                _this.setData({
                    catDogResult: res.data
                });
            },
            fail: function () {
                console.log('res.data', 'fail');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGxjc1Jlc3VsdDAyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsieGxjc1Jlc3VsdDAyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsRUFBRTtRQUNSLFlBQVksRUFBRSxFQUFTO0tBQ3hCO0lBRUQsTUFBTSxFQUFFLFVBQVUsT0FBWTtRQUM1QixJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJO1NBQ25CLENBQUMsQ0FBQTtRQUNGLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztRQUNqQixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLGNBQWM7WUFDbkIsT0FBTyxFQUFFLFVBQVUsR0FBRztnQkFDcEIsS0FBSyxDQUFDLE9BQVEsQ0FBQztvQkFDYixZQUFZLEVBQUUsR0FBRyxDQUFDLElBQUk7aUJBQ3ZCLENBQUMsQ0FBQTtZQUNKLENBQUM7WUFDRCxJQUFJLEVBQUU7Z0JBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUE7WUFDakMsQ0FBQztTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFLRCxPQUFPLEVBQUU7SUFFVCxDQUFDO0lBS0QsTUFBTSxFQUFFO0lBRVIsQ0FBQztJQUtELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFLRCxRQUFRLEVBQUU7SUFFVixDQUFDO0lBS0QsaUJBQWlCLEVBQUU7SUFFbkIsQ0FBQztJQUtELGFBQWEsRUFBRTtJQUVmLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgbmFtZTogJycsXG4gICAgY2F0RG9nUmVzdWx0OiB7fSBhcyBhbnksXG4gIH0sXG5cbiAgb25Mb2FkOiBmdW5jdGlvbiAob3B0aW9uczogYW55KSB7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBuYW1lOiBvcHRpb25zLm5hbWUsXG4gICAgfSlcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIHd4LmdldFN0b3JhZ2Uoe1xuICAgICAga2V5OiAnY2F0RG9nUmVzdWx0JyxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgX3RoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgIGNhdERvZ1Jlc3VsdDogcmVzLmRhdGFcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBmYWlsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyZXMuZGF0YScsICdmYWlsJylcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliJ3mrKHmuLLmn5PlrozmiJBcbiAgICovXG4gIG9uUmVhZHk6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxuICAgKi9cbiAgb25TaG93OiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cbiAgICovXG4gIG9uSGlkZTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Y246L29XG4gICAqL1xuICBvblVubG9hZDogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXG4gICAqL1xuICBvblB1bGxEb3duUmVmcmVzaDogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxuICAgKi9cbiAgb25SZWFjaEJvdHRvbTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG59KSJdfQ==