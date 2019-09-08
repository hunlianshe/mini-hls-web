"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Api = require("../../service/api.service");
const zxList_1 = require("../../public/json/zxList");
const dataList = [];
zxList_1.default.data.forEach((e) => {
    dataList.push(e.ch);
});
Page({
    data: {
        dataIndex: 0,
        fortuneName: '',
        fortuneData: {},
        xzList: dataList,
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
            fortuneName: dataList[e.detail.value],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieHp5c0RldGFpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInh6eXNEZXRhaWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBaUQ7QUFDakQscURBQThDO0FBRTlDLE1BQU0sUUFBUSxHQUFVLEVBQUUsQ0FBQztBQUMzQixnQkFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFNLEVBQUUsRUFBRTtJQUM3QixRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUN0QixDQUFDLENBQUMsQ0FBQztBQUVILElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLFNBQVMsRUFBRSxDQUFDO1FBQ1osV0FBVyxFQUFFLEVBQUU7UUFDZixXQUFXLEVBQUUsRUFBRTtRQUNmLE1BQU0sRUFBRSxRQUFRO0tBQ2pCO0lBRUQsTUFBTSxFQUFFLFVBQVUsT0FBWTtRQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixXQUFXLEVBQUUsT0FBTyxDQUFDLFdBQVc7U0FDakMsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELFNBQVMsRUFBRSxVQUFVLENBQU07UUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ2hELElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1NBQ3RDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBR0QsVUFBVSxDQUFDLFdBQW1CO1FBQzVCLEdBQUcsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBVyxFQUFFLEVBQUU7WUFDL0MsSUFBSSxXQUFXLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztZQUM5QixJQUFJLENBQUMsT0FBUSxDQUFDO2dCQUNaLFdBQVc7YUFDWixDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxPQUFPLEVBQUU7SUFFVCxDQUFDO0lBS0QsTUFBTSxFQUFFO0lBRVIsQ0FBQztJQUtELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFLRCxRQUFRLEVBQUU7SUFFVixDQUFDO0NBRUYsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgQXBpIGZyb20gJy4uLy4uL3NlcnZpY2UvYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHh6TGlzdCBmcm9tICcuLi8uLi9wdWJsaWMvanNvbi96eExpc3QnO1xuXG5jb25zdCBkYXRhTGlzdDogYW55W10gPSBbXTtcbnh6TGlzdC5kYXRhLmZvckVhY2goKGU6IGFueSkgPT4ge1xuICBkYXRhTGlzdC5wdXNoKGUuY2gpO1xufSk7XG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgZGF0YUluZGV4OiAwLFxuICAgIGZvcnR1bmVOYW1lOiAnJyxcbiAgICBmb3J0dW5lRGF0YToge30sXG4gICAgeHpMaXN0OiBkYXRhTGlzdCxcbiAgfSxcblxuICBvbkxvYWQ6IGZ1bmN0aW9uIChvcHRpb25zOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZyhvcHRpb25zKTtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIGZvcnR1bmVOYW1lOiBvcHRpb25zLmZvcnR1bmVOYW1lLFxuICAgIH0pXG4gICAgdGhpcy5nZXRGb3J0dW5lKG9wdGlvbnMuZm9ydHVuZU5hbWUpO1xuICB9LFxuXG4gIG90aGVyUGljazogZnVuY3Rpb24gKGU6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKCdwaWNrZXLlj5HpgIHpgInmi6nmlLnlj5jvvIzmkLrluKblgLzkuLonLCBlLmRldGFpbC52YWx1ZSlcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIGZvcnR1bmVOYW1lOiBkYXRhTGlzdFtlLmRldGFpbC52YWx1ZV0sXG4gICAgfSk7XG4gICAgdGhpcy5nZXRGb3J0dW5lKHRoaXMuZGF0YS5mb3J0dW5lTmFtZSk7XG4gIH0sXG5cbiAgLyoqIOiOt+WPluaYn+W6p+ivpuinoyAqL1xuICBnZXRGb3J0dW5lKGZvcnR1bmVOYW1lOiBzdHJpbmcpIHtcbiAgICBBcGkuZ2V0Rm9ydHVuZShmb3J0dW5lTmFtZSkudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgIGxldCBmb3J0dW5lRGF0YSA9IHJlc3VsdC5kYXRhO1xuICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgIGZvcnR1bmVEYXRhLFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG5cbiAgb25SZWFkeTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XG4gICAqL1xuICBvblNob3c6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdoumakOiXj1xuICAgKi9cbiAgb25IaWRlOiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cbiAgICovXG4gIG9uVW5sb2FkOiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxufSkiXX0=