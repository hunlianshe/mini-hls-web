"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Api = require("../../service/api.service");
const zxList_1 = require("../../public/json/zxList");
Page({
    data: {
        dataIndex: 0,
        fortuneName: '',
        fortuneNameEn: 'Aquarius',
        fortuneData: {},
        xzList: zxList_1.default.data,
    },
    onLoad: function (options) {
        this.setData({
            fortuneName: options.fortuneName,
        });
        this.getFortune(options.fortuneName);
    },
    otherPick: function (e) {
        this.setData({
            fortuneName: zxList_1.default.data[e.detail.value].ch,
            fortuneNameEn: zxList_1.default.data[e.detail.value].en,
        });
        this.getFortune(this.data.fortuneName);
    },
    getFortune(fortuneName) {
        Api.getFortune(fortuneName).then((result) => {
            let fortuneData = result.data;
            this.setData({
                fortuneData,
            });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieHp5c0RldGFpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInh6eXNEZXRhaWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBaUQ7QUFDakQscURBQThDO0FBRTlDLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLFNBQVMsRUFBRSxDQUFDO1FBQ1osV0FBVyxFQUFFLEVBQUU7UUFDZixhQUFhLEVBQUUsVUFBVTtRQUN6QixXQUFXLEVBQUUsRUFBRTtRQUNmLE1BQU0sRUFBRSxnQkFBTSxDQUFDLElBQUk7S0FDcEI7SUFFRCxNQUFNLEVBQUUsVUFBVSxPQUFZO1FBQzVCLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixXQUFXLEVBQUUsT0FBTyxDQUFDLFdBQVc7U0FDakMsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELFNBQVMsRUFBRSxVQUFVLENBQU07UUFDekIsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLFdBQVcsRUFBRSxnQkFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDM0MsYUFBYSxFQUFFLGdCQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtTQUM5QyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUdELFVBQVUsQ0FBQyxXQUFtQjtRQUM1QixHQUFHLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQVcsRUFBRSxFQUFFO1lBQy9DLElBQUksV0FBVyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDOUIsSUFBSSxDQUFDLE9BQVEsQ0FBQztnQkFDWixXQUFXO2FBQ1osQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsT0FBTyxFQUFFO0lBRVQsQ0FBQztJQUtELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFLRCxNQUFNLEVBQUU7SUFFUixDQUFDO0lBS0QsUUFBUSxFQUFFO0lBRVYsQ0FBQztDQUVGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIEFwaSBmcm9tICcuLi8uLi9zZXJ2aWNlL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB4ekxpc3QgZnJvbSAnLi4vLi4vcHVibGljL2pzb24venhMaXN0JztcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBkYXRhSW5kZXg6IDAsXG4gICAgZm9ydHVuZU5hbWU6ICcnLFxuICAgIGZvcnR1bmVOYW1lRW46ICdBcXVhcml1cycsXG4gICAgZm9ydHVuZURhdGE6IHt9LFxuICAgIHh6TGlzdDogeHpMaXN0LmRhdGEsXG4gIH0sXG5cbiAgb25Mb2FkOiBmdW5jdGlvbiAob3B0aW9uczogYW55KSB7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBmb3J0dW5lTmFtZTogb3B0aW9ucy5mb3J0dW5lTmFtZSxcbiAgICB9KVxuICAgIHRoaXMuZ2V0Rm9ydHVuZShvcHRpb25zLmZvcnR1bmVOYW1lKTtcbiAgfSxcblxuICBvdGhlclBpY2s6IGZ1bmN0aW9uIChlOiBhbnkpIHtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIGZvcnR1bmVOYW1lOiB4ekxpc3QuZGF0YVtlLmRldGFpbC52YWx1ZV0uY2gsXG4gICAgICBmb3J0dW5lTmFtZUVuOiB4ekxpc3QuZGF0YVtlLmRldGFpbC52YWx1ZV0uZW4sXG4gICAgfSk7XG4gICAgdGhpcy5nZXRGb3J0dW5lKHRoaXMuZGF0YS5mb3J0dW5lTmFtZSk7XG4gIH0sXG5cbiAgLyoqIOiOt+WPluaYn+W6p+ivpuinoyAqL1xuICBnZXRGb3J0dW5lKGZvcnR1bmVOYW1lOiBzdHJpbmcpIHtcbiAgICBBcGkuZ2V0Rm9ydHVuZShmb3J0dW5lTmFtZSkudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgIGxldCBmb3J0dW5lRGF0YSA9IHJlc3VsdC5kYXRhO1xuICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgIGZvcnR1bmVEYXRhLFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG5cbiAgb25SZWFkeTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XG4gICAqL1xuICBvblNob3c6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdoumakOiXj1xuICAgKi9cbiAgb25IaWRlOiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cbiAgICovXG4gIG9uVW5sb2FkOiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxufSkiXX0=