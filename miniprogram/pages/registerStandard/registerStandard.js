"use strict";
Page({
    data: {
        type: '',
        ageNumber: '',
        heightNumber: '',
        salaryNumber: '',
    },
    onLoad: function (options) {
        console.log(options);
    },
    jumpOver() {
        wx.navigateTo({
            url: '../home/home',
        });
    },
    next() {
        wx.navigateTo({
            url: '../home/home',
        });
    },
    getStandard(e) {
        const { type, value, number } = e.currentTarget.dataset;
        let ageNumber, heightNumber, salaryNumber;
        switch (type) {
            case '1':
                ageNumber = number;
                break;
            case '2':
                heightNumber = number;
                break;
            case '3':
                salaryNumber = number;
                break;
            default:
                break;
        }
        this.setData({
            ageNumber,
            heightNumber,
            salaryNumber,
        });
        console.log('type:', type);
        console.log('value:', value);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXJTdGFuZGFyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlZ2lzdGVyU3RhbmRhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLElBQUksRUFBQyxFQUFFO1FBQ1AsU0FBUyxFQUFFLEVBQUU7UUFDYixZQUFZLEVBQUUsRUFBRTtRQUNoQixZQUFZLEVBQUUsRUFBRTtLQUNqQjtJQUVELE1BQU0sRUFBRSxVQUFVLE9BQVk7UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQsUUFBUTtRQUNOLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsY0FBYztTQUNwQixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsSUFBSTtRQUNGLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsY0FBYztTQUNwQixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsV0FBVyxDQUFDLENBQU07UUFDaEIsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDeEQsSUFBSSxTQUFTLEVBQ1gsWUFBWSxFQUNaLFlBQVksQ0FBQztRQUNmLFFBQVEsSUFBSSxFQUFFO1lBQ1osS0FBSyxHQUFHO2dCQUNOLFNBQVMsR0FBRyxNQUFNLENBQUM7Z0JBQ25CLE1BQU07WUFDUixLQUFLLEdBQUc7Z0JBQ04sWUFBWSxHQUFHLE1BQU0sQ0FBQztnQkFDdEIsTUFBTTtZQUNSLEtBQUssR0FBRztnQkFDTixZQUFZLEdBQUcsTUFBTSxDQUFDO2dCQUN0QixNQUFNO1lBQ1I7Z0JBQ0UsTUFBTTtTQUNUO1FBQ0QsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLFNBQVM7WUFDVCxZQUFZO1lBQ1osWUFBWTtTQUNiLENBQUMsQ0FBQTtRQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxPQUFPLEVBQUU7SUFFVCxDQUFDO0lBRUQsTUFBTSxFQUFFO0lBRVIsQ0FBQztJQUtELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFLRCxRQUFRLEVBQUU7SUFFVixDQUFDO0lBS0QsaUJBQWlCLEVBQUU7SUFFbkIsQ0FBQztJQUtELGFBQWEsRUFBRTtJQUVmLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlcy9yZWdpc3RlclN0YW5kYXJkL3JlZ2lzdGVyU3RhbmRhcmQuanNcblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgdHlwZTonJyxcbiAgICBhZ2VOdW1iZXI6ICcnLFxuICAgIGhlaWdodE51bWJlcjogJycsXG4gICAgc2FsYXJ5TnVtYmVyOiAnJyxcbiAgfSxcblxuICBvbkxvYWQ6IGZ1bmN0aW9uIChvcHRpb25zOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZyhvcHRpb25zKTtcbiAgfSxcblxuICBqdW1wT3ZlcigpOiB2b2lkIHtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogJy4uL2hvbWUvaG9tZScsXG4gICAgfSlcbiAgfSxcblxuICBuZXh0KCk6IHZvaWQge1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiAnLi4vaG9tZS9ob21lJyxcbiAgICB9KVxuICB9LFxuXG4gIGdldFN0YW5kYXJkKGU6IGFueSkge1xuICAgIGNvbnN0IHsgdHlwZSwgdmFsdWUsIG51bWJlciB9ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQ7XG4gICAgbGV0IGFnZU51bWJlcixcbiAgICAgIGhlaWdodE51bWJlcixcbiAgICAgIHNhbGFyeU51bWJlcjtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJzEnOlxuICAgICAgICBhZ2VOdW1iZXIgPSBudW1iZXI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnMic6XG4gICAgICAgIGhlaWdodE51bWJlciA9IG51bWJlcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICczJzpcbiAgICAgICAgc2FsYXJ5TnVtYmVyID0gbnVtYmVyO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIGFnZU51bWJlcixcbiAgICAgIGhlaWdodE51bWJlcixcbiAgICAgIHNhbGFyeU51bWJlcixcbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKCd0eXBlOicsIHR5cGUpO1xuICAgIGNvbnNvbGUubG9nKCd2YWx1ZTonLCB2YWx1ZSk7XG4gIH0sXG5cbiAgb25SZWFkeTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgb25TaG93OiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cbiAgICovXG4gIG9uSGlkZTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Y246L29XG4gICAqL1xuICBvblVubG9hZDogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXG4gICAqL1xuICBvblB1bGxEb3duUmVmcmVzaDogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxuICAgKi9cbiAgb25SZWFjaEJvdHRvbTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG59KSJdfQ==