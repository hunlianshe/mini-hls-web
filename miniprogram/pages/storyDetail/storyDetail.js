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
        console.log(options);
        this.setData({
            fortuneName: options.fortuneName,
        });
        this.getConstellationStory(options.fortuneName);
    },
    otherPick: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcnlEZXRhaWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdG9yeURldGFpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUFpRDtBQUNqRCxxREFBOEM7QUFFOUMsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osU0FBUyxFQUFFLENBQUM7UUFDWixXQUFXLEVBQUUsRUFBRTtRQUNmLGFBQWEsRUFBRSxVQUFVO1FBQ3pCLFNBQVMsRUFBRSxFQUFFO1FBQ2IsTUFBTSxFQUFFLGdCQUFNLENBQUMsSUFBSTtLQUNwQjtJQUVELE1BQU0sRUFBRSxVQUFVLE9BQVk7UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXO1NBQ2pDLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELFNBQVMsRUFBRSxVQUFVLENBQU07UUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ2hELElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixXQUFXLEVBQUUsZ0JBQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQzNDLGFBQWEsRUFBRSxnQkFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7U0FDOUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUdELHFCQUFxQixDQUFDLFdBQW1CO1FBQ3ZDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFXLEVBQUUsRUFBRTtZQUMxRCxJQUFJLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQzVCLElBQUksQ0FBQyxPQUFRLENBQUM7Z0JBQ1osU0FBUzthQUNWLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELE9BQU8sRUFBRTtJQUVULENBQUM7SUFLRCxNQUFNLEVBQUU7SUFFUixDQUFDO0lBS0QsTUFBTSxFQUFFO0lBRVIsQ0FBQztJQUtELFFBQVEsRUFBRTtJQUVWLENBQUM7Q0FFRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBBcGkgZnJvbSAnLi4vLi4vc2VydmljZS9hcGkuc2VydmljZSc7XHJcbmltcG9ydCB4ekxpc3QgZnJvbSAnLi4vLi4vcHVibGljL2pzb24venhMaXN0JztcclxuXHJcblBhZ2Uoe1xyXG4gIGRhdGE6IHtcclxuICAgIGRhdGFJbmRleDogMCxcclxuICAgIGZvcnR1bmVOYW1lOiAnJyxcclxuICAgIGZvcnR1bmVOYW1lRW46ICdBcXVhcml1cycsXHJcbiAgICBzdG9yeURhdGE6IHt9LFxyXG4gICAgeHpMaXN0OiB4ekxpc3QuZGF0YSxcclxuICB9LFxyXG5cclxuICBvbkxvYWQ6IGZ1bmN0aW9uIChvcHRpb25zOiBhbnkpIHtcclxuICAgIGNvbnNvbGUubG9nKG9wdGlvbnMpO1xyXG4gICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgIGZvcnR1bmVOYW1lOiBvcHRpb25zLmZvcnR1bmVOYW1lLFxyXG4gICAgfSlcclxuICAgIHRoaXMuZ2V0Q29uc3RlbGxhdGlvblN0b3J5KG9wdGlvbnMuZm9ydHVuZU5hbWUpO1xyXG4gIH0sXHJcblxyXG4gIG90aGVyUGljazogZnVuY3Rpb24gKGU6IGFueSkge1xyXG4gICAgY29uc29sZS5sb2coJ3BpY2tlcuWPkemAgemAieaLqeaUueWPmO+8jOaQuuW4puWAvOS4uicsIGUuZGV0YWlsLnZhbHVlKVxyXG4gICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgIGZvcnR1bmVOYW1lOiB4ekxpc3QuZGF0YVtlLmRldGFpbC52YWx1ZV0uY2gsXHJcbiAgICAgIGZvcnR1bmVOYW1lRW46IHh6TGlzdC5kYXRhW2UuZGV0YWlsLnZhbHVlXS5lbixcclxuICAgIH0pO1xyXG4gICAgdGhpcy5nZXRDb25zdGVsbGF0aW9uU3RvcnkodGhpcy5kYXRhLmZvcnR1bmVOYW1lKTtcclxuICB9LFxyXG5cclxuICAvKiog6I635Y+W5pif5bqn6K+m6KejICovXHJcbiAgZ2V0Q29uc3RlbGxhdGlvblN0b3J5KGZvcnR1bmVOYW1lOiBzdHJpbmcpIHtcclxuICAgIEFwaS5nZXRDb25zdGVsbGF0aW9uU3RvcnkoZm9ydHVuZU5hbWUpLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XHJcbiAgICAgIGxldCBzdG9yeURhdGEgPSByZXN1bHQuZGF0YTtcclxuICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgc3RvcnlEYXRhLFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIG9uUmVhZHk6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcclxuICAgKi9cclxuICBvblNob3c6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cclxuICAgKi9cclxuICBvbkhpZGU6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cclxuICAgKi9cclxuICBvblVubG9hZDogZnVuY3Rpb24gKCkge1xyXG5cclxuICB9LFxyXG5cclxufSkiXX0=