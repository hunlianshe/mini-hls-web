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
        console.log(options);
        this.setData({
            fortuneName: options.fortuneName,
        });
        this.getFortune(options.fortuneName);
    },
    otherPick: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieHp5c0RldGFpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInh6eXNEZXRhaWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBaUQ7QUFDakQscURBQThDO0FBRTlDLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLFNBQVMsRUFBRSxDQUFDO1FBQ1osV0FBVyxFQUFFLEVBQUU7UUFDZixhQUFhLEVBQUUsVUFBVTtRQUN6QixXQUFXLEVBQUUsRUFBRTtRQUNmLE1BQU0sRUFBRSxnQkFBTSxDQUFDLElBQUk7S0FDcEI7SUFFRCxNQUFNLEVBQUUsVUFBVSxPQUFZO1FBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLFdBQVcsRUFBRSxPQUFPLENBQUMsV0FBVztTQUNqQyxDQUFDLENBQUE7UUFDRixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsU0FBUyxFQUFFLFVBQVUsQ0FBTTtRQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDaEQsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLFdBQVcsRUFBRSxnQkFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDM0MsYUFBYSxFQUFFLGdCQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtTQUM5QyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUdELFVBQVUsQ0FBQyxXQUFtQjtRQUM1QixHQUFHLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQVcsRUFBRSxFQUFFO1lBQy9DLElBQUksV0FBVyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDOUIsSUFBSSxDQUFDLE9BQVEsQ0FBQztnQkFDWixXQUFXO2FBQ1osQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsT0FBTyxFQUFFO0lBRVQsQ0FBQztJQUtELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFLRCxNQUFNLEVBQUU7SUFFUixDQUFDO0lBS0QsUUFBUSxFQUFFO0lBRVYsQ0FBQztDQUVGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIEFwaSBmcm9tICcuLi8uLi9zZXJ2aWNlL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB4ekxpc3QgZnJvbSAnLi4vLi4vcHVibGljL2pzb24venhMaXN0JztcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBkYXRhSW5kZXg6IDAsXG4gICAgZm9ydHVuZU5hbWU6ICcnLFxuICAgIGZvcnR1bmVOYW1lRW46ICdBcXVhcml1cycsXG4gICAgZm9ydHVuZURhdGE6IHt9LFxuICAgIHh6TGlzdDogeHpMaXN0LmRhdGEsXG4gIH0sXG5cbiAgb25Mb2FkOiBmdW5jdGlvbiAob3B0aW9uczogYW55KSB7XG4gICAgY29uc29sZS5sb2cob3B0aW9ucyk7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBmb3J0dW5lTmFtZTogb3B0aW9ucy5mb3J0dW5lTmFtZSxcbiAgICB9KVxuICAgIHRoaXMuZ2V0Rm9ydHVuZShvcHRpb25zLmZvcnR1bmVOYW1lKTtcbiAgfSxcblxuICBvdGhlclBpY2s6IGZ1bmN0aW9uIChlOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZygncGlja2Vy5Y+R6YCB6YCJ5oup5pS55Y+Y77yM5pC65bim5YC85Li6JywgZS5kZXRhaWwudmFsdWUpXG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBmb3J0dW5lTmFtZTogeHpMaXN0LmRhdGFbZS5kZXRhaWwudmFsdWVdLmNoLFxuICAgICAgZm9ydHVuZU5hbWVFbjogeHpMaXN0LmRhdGFbZS5kZXRhaWwudmFsdWVdLmVuLFxuICAgIH0pO1xuICAgIHRoaXMuZ2V0Rm9ydHVuZSh0aGlzLmRhdGEuZm9ydHVuZU5hbWUpO1xuICB9LFxuXG4gIC8qKiDojrflj5bmmJ/luqfor6bop6MgKi9cbiAgZ2V0Rm9ydHVuZShmb3J0dW5lTmFtZTogc3RyaW5nKSB7XG4gICAgQXBpLmdldEZvcnR1bmUoZm9ydHVuZU5hbWUpLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICBsZXQgZm9ydHVuZURhdGEgPSByZXN1bHQuZGF0YTtcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICBmb3J0dW5lRGF0YSxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxuXG4gIG9uUmVhZHk6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxuICAgKi9cbiAgb25TaG93OiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cbiAgICovXG4gIG9uSGlkZTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Y246L29XG4gICAqL1xuICBvblVubG9hZDogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbn0pIl19