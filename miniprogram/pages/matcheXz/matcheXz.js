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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0Y2hlWHouanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYXRjaGVYei50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFEQUE4QztBQUU5QyxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixTQUFTLEVBQUUsQ0FBQztRQUNaLFFBQVEsRUFBRSxnQkFBTSxDQUFDLElBQUk7UUFDckIsYUFBYSxFQUFFLEVBQUU7UUFDakIsZ0JBQWdCLEVBQUUsRUFBRTtLQUNyQjtJQUVELE1BQU0sRUFBRSxVQUFVLE9BQVk7UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQsTUFBTSxFQUFFLFVBQVUsQ0FBTTtRQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDaEQsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLGFBQWEsRUFBRSxnQkFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7U0FDOUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFNBQVMsRUFBRSxVQUFVLENBQU07UUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ2hELElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixnQkFBZ0IsRUFBRSxnQkFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7U0FDakQsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELE1BQU07UUFDSixNQUFNLEVBQ0osYUFBYSxFQUNiLGdCQUFnQixFQUNqQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDZCxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLHFDQUFxQyxhQUFhLE9BQU8sZ0JBQWdCLEVBQUU7U0FDakYsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUtELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFLRCxNQUFNLEVBQUU7SUFFUixDQUFDO0lBS0QsUUFBUSxFQUFFO0lBRVYsQ0FBQztJQUtELGlCQUFpQixFQUFFO0lBRW5CLENBQUM7SUFLRCxhQUFhLEVBQUU7SUFFZixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHh6TGlzdCBmcm9tICcuLi8uLi9wdWJsaWMvanNvbi96eExpc3QnO1xuXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIGRhdGFJbmRleDogMCxcbiAgICBkYXRhTGlzdDogeHpMaXN0LmRhdGEsXG4gICAgbXlGb3J0dW5lTmFtZTogJycsXG4gICAgb3RoZXJGb3J0dW5lTmFtZTogJycsXG4gIH0sXG5cbiAgb25Mb2FkOiBmdW5jdGlvbiAob3B0aW9uczogYW55KSB7XG4gICAgY29uc29sZS5sb2cob3B0aW9ucyk7XG4gIH0sXG5cbiAgbXlQaWNrOiBmdW5jdGlvbiAoZTogYW55KSB7XG4gICAgY29uc29sZS5sb2coJ3BpY2tlcuWPkemAgemAieaLqeaUueWPmO+8jOaQuuW4puWAvOS4uicsIGUuZGV0YWlsLnZhbHVlKVxuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgbXlGb3J0dW5lTmFtZTogeHpMaXN0LmRhdGFbZS5kZXRhaWwudmFsdWVdLmNoLFxuICAgIH0pO1xuICB9LFxuXG4gIG90aGVyUGljazogZnVuY3Rpb24gKGU6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKCdwaWNrZXLlj5HpgIHpgInmi6nmlLnlj5jvvIzmkLrluKblgLzkuLonLCBlLmRldGFpbC52YWx1ZSlcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIG90aGVyRm9ydHVuZU5hbWU6IHh6TGlzdC5kYXRhW2UuZGV0YWlsLnZhbHVlXS5jaCxcbiAgICB9KTtcbiAgfSxcblxuICBzdWJtaXQoKSB7XG4gICAgY29uc3Qge1xuICAgICAgbXlGb3J0dW5lTmFtZSxcbiAgICAgIG90aGVyRm9ydHVuZU5hbWVcbiAgICB9ID0gdGhpcy5kYXRhO1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiBgLi4vbWF0Y2hYWlJlc3VsdC9tYXRjaFhaUmVzdWx0P21lPSR7bXlGb3J0dW5lTmFtZX0maGU9JHtvdGhlckZvcnR1bmVOYW1lfWAsXG4gICAgfSlcbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcbiAgICovXG4gIG9uU2hvdzogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXG4gICAqL1xuICBvbkhpZGU6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxuICAgKi9cbiAgb25VbmxvYWQ6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxuICAgKi9cbiAgb25QdWxsRG93blJlZnJlc2g6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcbiAgICovXG4gIG9uUmVhY2hCb3R0b206IGZ1bmN0aW9uICgpIHtcblxuICB9LFxufSkiXX0=