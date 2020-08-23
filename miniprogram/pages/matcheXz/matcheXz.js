"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zxList_1 = require("../../public/json/zxList");
Page({
    data: {
        dataIndex: 0,
        dataList: zxList_1.default.data,
        myFortuneName: '',
        otherFortuneName: '',
    },
    onLoad: function (options) {
        console.log(options);
    },
    myPick: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value);
        this.setData({
            myFortuneName: zxList_1.default.data[e.detail.value].ch,
        });
    },
    otherPick: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value);
        this.setData({
            otherFortuneName: zxList_1.default.data[e.detail.value].ch,
        });
    },
    submit() {
        const { myFortuneName, otherFortuneName } = this.data;
        wx.navigateTo({
            url: `../matchXZResult/matchXZResult?me=${myFortuneName}&he=${otherFortuneName}`,
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0Y2hlWHouanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYXRjaGVYei50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFEQUE4QztBQUU5QyxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixTQUFTLEVBQUUsQ0FBQztRQUNaLFFBQVEsRUFBRSxnQkFBTSxDQUFDLElBQUk7UUFDckIsYUFBYSxFQUFFLEVBQUU7UUFDakIsZ0JBQWdCLEVBQUUsRUFBRTtLQUNyQjtJQUVELE1BQU0sRUFBRSxVQUFVLE9BQVk7UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQsTUFBTSxFQUFFLFVBQVUsQ0FBTTtRQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDaEQsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLGFBQWEsRUFBRSxnQkFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7U0FDOUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFNBQVMsRUFBRSxVQUFVLENBQU07UUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ2hELElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixnQkFBZ0IsRUFBRSxnQkFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7U0FDakQsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELE1BQU07UUFDSixNQUFNLEVBQ0osYUFBYSxFQUNiLGdCQUFnQixFQUNqQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDZCxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLHFDQUFxQyxhQUFhLE9BQU8sZ0JBQWdCLEVBQUU7U0FDakYsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUtELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFLRCxNQUFNLEVBQUU7SUFFUixDQUFDO0lBS0QsUUFBUSxFQUFFO0lBRVYsQ0FBQztJQUtELGlCQUFpQixFQUFFO0lBRW5CLENBQUM7SUFLRCxhQUFhLEVBQUU7SUFFZixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHh6TGlzdCBmcm9tICcuLi8uLi9wdWJsaWMvanNvbi96eExpc3QnO1xyXG5cclxuUGFnZSh7XHJcbiAgZGF0YToge1xyXG4gICAgZGF0YUluZGV4OiAwLFxyXG4gICAgZGF0YUxpc3Q6IHh6TGlzdC5kYXRhLFxyXG4gICAgbXlGb3J0dW5lTmFtZTogJycsXHJcbiAgICBvdGhlckZvcnR1bmVOYW1lOiAnJyxcclxuICB9LFxyXG5cclxuICBvbkxvYWQ6IGZ1bmN0aW9uIChvcHRpb25zOiBhbnkpIHtcclxuICAgIGNvbnNvbGUubG9nKG9wdGlvbnMpO1xyXG4gIH0sXHJcblxyXG4gIG15UGljazogZnVuY3Rpb24gKGU6IGFueSkge1xyXG4gICAgY29uc29sZS5sb2coJ3BpY2tlcuWPkemAgemAieaLqeaUueWPmO+8jOaQuuW4puWAvOS4uicsIGUuZGV0YWlsLnZhbHVlKVxyXG4gICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgIG15Rm9ydHVuZU5hbWU6IHh6TGlzdC5kYXRhW2UuZGV0YWlsLnZhbHVlXS5jaCxcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIG90aGVyUGljazogZnVuY3Rpb24gKGU6IGFueSkge1xyXG4gICAgY29uc29sZS5sb2coJ3BpY2tlcuWPkemAgemAieaLqeaUueWPmO+8jOaQuuW4puWAvOS4uicsIGUuZGV0YWlsLnZhbHVlKVxyXG4gICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgIG90aGVyRm9ydHVuZU5hbWU6IHh6TGlzdC5kYXRhW2UuZGV0YWlsLnZhbHVlXS5jaCxcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIHN1Ym1pdCgpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgbXlGb3J0dW5lTmFtZSxcclxuICAgICAgb3RoZXJGb3J0dW5lTmFtZVxyXG4gICAgfSA9IHRoaXMuZGF0YTtcclxuICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICB1cmw6IGAuLi9tYXRjaFhaUmVzdWx0L21hdGNoWFpSZXN1bHQ/bWU9JHtteUZvcnR1bmVOYW1lfSZoZT0ke290aGVyRm9ydHVuZU5hbWV9YCxcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcclxuICAgKi9cclxuICBvblNob3c6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cclxuICAgKi9cclxuICBvbkhpZGU6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cclxuICAgKi9cclxuICBvblVubG9hZDogZnVuY3Rpb24gKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxyXG4gICAqL1xyXG4gIG9uUHVsbERvd25SZWZyZXNoOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxyXG4gICAqL1xyXG4gIG9uUmVhY2hCb3R0b206IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgfSxcclxufSkiXX0=