"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Api = require("../../service/api.service");
const zxList_1 = require("../../public/json/zxList");
Page({
    data: {
        dataIndex: 0,
        fortuneName: '',
        fortuneNameEn: 'Aquarius',
        storyData: {},
        xzList: zxList_1.default.data,
    },
    onLoad: function (options) {
        this.setData({
            fortuneName: options.fortuneName,
        });
        this.getConstellationStory(options.fortuneName);
    },
    otherPick: function (e) {
        this.setData({
            fortuneName: zxList_1.default.data[e.detail.value].ch,
            fortuneNameEn: zxList_1.default.data[e.detail.value].en,
        });
        this.getConstellationStory(this.data.fortuneName);
    },
    getConstellationStory(fortuneName) {
        Api.getConstellationStory(fortuneName).then((result) => {
            let storyData = result.data;
            this.setData({
                storyData,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcnlEZXRhaWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdG9yeURldGFpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUFpRDtBQUNqRCxxREFBOEM7QUFFOUMsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osU0FBUyxFQUFFLENBQUM7UUFDWixXQUFXLEVBQUUsRUFBRTtRQUNmLGFBQWEsRUFBRSxVQUFVO1FBQ3pCLFNBQVMsRUFBRSxFQUFFO1FBQ2IsTUFBTSxFQUFFLGdCQUFNLENBQUMsSUFBSTtLQUNwQjtJQUVELE1BQU0sRUFBRSxVQUFVLE9BQVk7UUFDNUIsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLFdBQVcsRUFBRSxPQUFPLENBQUMsV0FBVztTQUNqQyxDQUFDLENBQUE7UUFDRixJQUFJLENBQUMscUJBQXFCLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxTQUFTLEVBQUUsVUFBVSxDQUFNO1FBQ3pCLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixXQUFXLEVBQUUsZ0JBQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQzNDLGFBQWEsRUFBRSxnQkFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7U0FDOUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUdELHFCQUFxQixDQUFDLFdBQW1CO1FBQ3ZDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFXLEVBQUUsRUFBRTtZQUMxRCxJQUFJLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQzVCLElBQUksQ0FBQyxPQUFRLENBQUM7Z0JBQ1osU0FBUzthQUNWLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELE9BQU8sRUFBRTtJQUVULENBQUM7SUFLRCxNQUFNLEVBQUU7SUFFUixDQUFDO0lBS0QsTUFBTSxFQUFFO0lBRVIsQ0FBQztJQUtELFFBQVEsRUFBRTtJQUVWLENBQUM7Q0FFRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBBcGkgZnJvbSAnLi4vLi4vc2VydmljZS9hcGkuc2VydmljZSc7XG5pbXBvcnQgeHpMaXN0IGZyb20gJy4uLy4uL3B1YmxpYy9qc29uL3p4TGlzdCc7XG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgZGF0YUluZGV4OiAwLFxuICAgIGZvcnR1bmVOYW1lOiAnJyxcbiAgICBmb3J0dW5lTmFtZUVuOiAnQXF1YXJpdXMnLFxuICAgIHN0b3J5RGF0YToge30sXG4gICAgeHpMaXN0OiB4ekxpc3QuZGF0YSxcbiAgfSxcblxuICBvbkxvYWQ6IGZ1bmN0aW9uIChvcHRpb25zOiBhbnkpIHtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIGZvcnR1bmVOYW1lOiBvcHRpb25zLmZvcnR1bmVOYW1lLFxuICAgIH0pXG4gICAgdGhpcy5nZXRDb25zdGVsbGF0aW9uU3Rvcnkob3B0aW9ucy5mb3J0dW5lTmFtZSk7XG4gIH0sXG5cbiAgb3RoZXJQaWNrOiBmdW5jdGlvbiAoZTogYW55KSB7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBmb3J0dW5lTmFtZTogeHpMaXN0LmRhdGFbZS5kZXRhaWwudmFsdWVdLmNoLFxuICAgICAgZm9ydHVuZU5hbWVFbjogeHpMaXN0LmRhdGFbZS5kZXRhaWwudmFsdWVdLmVuLFxuICAgIH0pO1xuICAgIHRoaXMuZ2V0Q29uc3RlbGxhdGlvblN0b3J5KHRoaXMuZGF0YS5mb3J0dW5lTmFtZSk7XG4gIH0sXG5cbiAgLyoqIOiOt+WPluaYn+W6p+ivpuinoyAqL1xuICBnZXRDb25zdGVsbGF0aW9uU3RvcnkoZm9ydHVuZU5hbWU6IHN0cmluZykge1xuICAgIEFwaS5nZXRDb25zdGVsbGF0aW9uU3RvcnkoZm9ydHVuZU5hbWUpLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICBsZXQgc3RvcnlEYXRhID0gcmVzdWx0LmRhdGE7XG4gICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgc3RvcnlEYXRhLFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG5cbiAgb25SZWFkeTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XG4gICAqL1xuICBvblNob3c6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdoumakOiXj1xuICAgKi9cbiAgb25IaWRlOiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cbiAgICovXG4gIG9uVW5sb2FkOiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxufSkiXX0=