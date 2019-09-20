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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcnlEZXRhaWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdG9yeURldGFpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUFpRDtBQUNqRCxxREFBOEM7QUFFOUMsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osU0FBUyxFQUFFLENBQUM7UUFDWixXQUFXLEVBQUUsRUFBRTtRQUNmLGFBQWEsRUFBRSxVQUFVO1FBQ3pCLFNBQVMsRUFBRSxFQUFFO1FBQ2IsTUFBTSxFQUFFLGdCQUFNLENBQUMsSUFBSTtLQUNwQjtJQUVELE1BQU0sRUFBRSxVQUFVLE9BQVk7UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXO1NBQ2pDLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELFNBQVMsRUFBRSxVQUFVLENBQU07UUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ2hELElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixXQUFXLEVBQUUsZ0JBQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQzNDLGFBQWEsRUFBRSxnQkFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7U0FDOUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUdELHFCQUFxQixDQUFDLFdBQW1CO1FBQ3ZDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFXLEVBQUUsRUFBRTtZQUMxRCxJQUFJLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQzVCLElBQUksQ0FBQyxPQUFRLENBQUM7Z0JBQ1osU0FBUzthQUNWLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELE9BQU8sRUFBRTtJQUVULENBQUM7SUFLRCxNQUFNLEVBQUU7SUFFUixDQUFDO0lBS0QsTUFBTSxFQUFFO0lBRVIsQ0FBQztJQUtELFFBQVEsRUFBRTtJQUVWLENBQUM7Q0FFRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBBcGkgZnJvbSAnLi4vLi4vc2VydmljZS9hcGkuc2VydmljZSc7XG5pbXBvcnQgeHpMaXN0IGZyb20gJy4uLy4uL3B1YmxpYy9qc29uL3p4TGlzdCc7XG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgZGF0YUluZGV4OiAwLFxuICAgIGZvcnR1bmVOYW1lOiAnJyxcbiAgICBmb3J0dW5lTmFtZUVuOiAnQXF1YXJpdXMnLFxuICAgIHN0b3J5RGF0YToge30sXG4gICAgeHpMaXN0OiB4ekxpc3QuZGF0YSxcbiAgfSxcblxuICBvbkxvYWQ6IGZ1bmN0aW9uIChvcHRpb25zOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZyhvcHRpb25zKTtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIGZvcnR1bmVOYW1lOiBvcHRpb25zLmZvcnR1bmVOYW1lLFxuICAgIH0pXG4gICAgdGhpcy5nZXRDb25zdGVsbGF0aW9uU3Rvcnkob3B0aW9ucy5mb3J0dW5lTmFtZSk7XG4gIH0sXG5cbiAgb3RoZXJQaWNrOiBmdW5jdGlvbiAoZTogYW55KSB7XG4gICAgY29uc29sZS5sb2coJ3BpY2tlcuWPkemAgemAieaLqeaUueWPmO+8jOaQuuW4puWAvOS4uicsIGUuZGV0YWlsLnZhbHVlKVxuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgZm9ydHVuZU5hbWU6IHh6TGlzdC5kYXRhW2UuZGV0YWlsLnZhbHVlXS5jaCxcbiAgICAgIGZvcnR1bmVOYW1lRW46IHh6TGlzdC5kYXRhW2UuZGV0YWlsLnZhbHVlXS5lbixcbiAgICB9KTtcbiAgICB0aGlzLmdldENvbnN0ZWxsYXRpb25TdG9yeSh0aGlzLmRhdGEuZm9ydHVuZU5hbWUpO1xuICB9LFxuXG4gIC8qKiDojrflj5bmmJ/luqfor6bop6MgKi9cbiAgZ2V0Q29uc3RlbGxhdGlvblN0b3J5KGZvcnR1bmVOYW1lOiBzdHJpbmcpIHtcbiAgICBBcGkuZ2V0Q29uc3RlbGxhdGlvblN0b3J5KGZvcnR1bmVOYW1lKS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgbGV0IHN0b3J5RGF0YSA9IHJlc3VsdC5kYXRhO1xuICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgIHN0b3J5RGF0YSxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxuXG4gIG9uUmVhZHk6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxuICAgKi9cbiAgb25TaG93OiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cbiAgICovXG4gIG9uSGlkZTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Y246L29XG4gICAqL1xuICBvblVubG9hZDogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbn0pIl19