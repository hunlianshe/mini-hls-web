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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieHp5c0RldGFpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInh6eXNEZXRhaWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBaUQ7QUFDakQscURBQThDO0FBRTlDLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLFNBQVMsRUFBRSxDQUFDO1FBQ1osV0FBVyxFQUFFLEVBQUU7UUFDZixhQUFhLEVBQUUsVUFBVTtRQUN6QixXQUFXLEVBQUUsRUFBRTtRQUNmLE1BQU0sRUFBRSxnQkFBTSxDQUFDLElBQUk7S0FDcEI7SUFFRCxNQUFNLEVBQUUsVUFBVSxPQUFZO1FBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLFdBQVcsRUFBRSxPQUFPLENBQUMsV0FBVztTQUNqQyxDQUFDLENBQUE7UUFDRixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsU0FBUyxFQUFFLFVBQVUsQ0FBTTtRQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDaEQsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLFdBQVcsRUFBRSxnQkFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDM0MsYUFBYSxFQUFFLGdCQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtTQUM5QyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUdELFVBQVUsQ0FBQyxXQUFtQjtRQUM1QixHQUFHLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQVcsRUFBRSxFQUFFO1lBQy9DLElBQUksV0FBVyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDOUIsSUFBSSxDQUFDLE9BQVEsQ0FBQztnQkFDWixXQUFXO2FBQ1osQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsT0FBTyxFQUFFO0lBRVQsQ0FBQztJQUtELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFLRCxNQUFNLEVBQUU7SUFFUixDQUFDO0lBS0QsUUFBUSxFQUFFO0lBRVYsQ0FBQztDQUVGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIEFwaSBmcm9tICcuLi8uLi9zZXJ2aWNlL2FwaS5zZXJ2aWNlJztcclxuaW1wb3J0IHh6TGlzdCBmcm9tICcuLi8uLi9wdWJsaWMvanNvbi96eExpc3QnO1xyXG5cclxuUGFnZSh7XHJcbiAgZGF0YToge1xyXG4gICAgZGF0YUluZGV4OiAwLFxyXG4gICAgZm9ydHVuZU5hbWU6ICcnLFxyXG4gICAgZm9ydHVuZU5hbWVFbjogJ0FxdWFyaXVzJyxcclxuICAgIGZvcnR1bmVEYXRhOiB7fSxcclxuICAgIHh6TGlzdDogeHpMaXN0LmRhdGEsXHJcbiAgfSxcclxuXHJcbiAgb25Mb2FkOiBmdW5jdGlvbiAob3B0aW9uczogYW55KSB7XHJcbiAgICBjb25zb2xlLmxvZyhvcHRpb25zKTtcclxuICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICBmb3J0dW5lTmFtZTogb3B0aW9ucy5mb3J0dW5lTmFtZSxcclxuICAgIH0pXHJcbiAgICB0aGlzLmdldEZvcnR1bmUob3B0aW9ucy5mb3J0dW5lTmFtZSk7XHJcbiAgfSxcclxuXHJcbiAgb3RoZXJQaWNrOiBmdW5jdGlvbiAoZTogYW55KSB7XHJcbiAgICBjb25zb2xlLmxvZygncGlja2Vy5Y+R6YCB6YCJ5oup5pS55Y+Y77yM5pC65bim5YC85Li6JywgZS5kZXRhaWwudmFsdWUpXHJcbiAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgZm9ydHVuZU5hbWU6IHh6TGlzdC5kYXRhW2UuZGV0YWlsLnZhbHVlXS5jaCxcclxuICAgICAgZm9ydHVuZU5hbWVFbjogeHpMaXN0LmRhdGFbZS5kZXRhaWwudmFsdWVdLmVuLFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmdldEZvcnR1bmUodGhpcy5kYXRhLmZvcnR1bmVOYW1lKTtcclxuICB9LFxyXG5cclxuICAvKiog6I635Y+W5pif5bqn6K+m6KejICovXHJcbiAgZ2V0Rm9ydHVuZShmb3J0dW5lTmFtZTogc3RyaW5nKSB7XHJcbiAgICBBcGkuZ2V0Rm9ydHVuZShmb3J0dW5lTmFtZSkudGhlbigocmVzdWx0OiBhbnkpID0+IHtcclxuICAgICAgbGV0IGZvcnR1bmVEYXRhID0gcmVzdWx0LmRhdGE7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgIGZvcnR1bmVEYXRhLFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIG9uUmVhZHk6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcclxuICAgKi9cclxuICBvblNob3c6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cclxuICAgKi9cclxuICBvbkhpZGU6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cclxuICAgKi9cclxuICBvblVubG9hZDogZnVuY3Rpb24gKCkge1xyXG5cclxuICB9LFxyXG5cclxufSkiXX0=