"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zxList_1 = require("../../public/json/zxList");
Page({
    data: {
        constellation: zxList_1.default.data,
    },
    onLoad: function () {
    },
    goXzysDetail(e) {
        console.log('goXzysDetail e', e);
        let fortuneName = e.currentTarget.dataset.fortunename;
        wx.navigateTo({
            url: `../xzysDetail/xzysDetail?fortuneName=${fortuneName}`,
        });
    },
    getCharacter(e) {
        let consName = e.currentTarget.dataset.fortunename ? e.currentTarget.dataset.fortunename : "白羊座";
        wx.navigateTo({
            url: `../realXzysDetail/realXzysDetail?consName=${consName}&type=today`,
        });
    },
    goStoryDetail(e) {
        let fortunename = e.currentTarget.dataset.fortunename ? e.currentTarget.dataset.fortunename : "白羊座";
        wx.navigateTo({
            url: `../storyDetail/storyDetail?fortuneName=${fortunename}`,
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
    onPullDownRefresh: function () {
    },
    onReachBottom: function () {
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieHp5cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInh6eXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxxREFBOEM7QUFHOUMsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osYUFBYSxFQUFFLGdCQUFNLENBQUMsSUFBSTtLQUMzQjtJQUVELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFHRCxZQUFZLENBQUMsQ0FBSztRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ2hDLElBQUksV0FBVyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztRQUN0RCxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLHdDQUF3QyxXQUFXLEVBQUU7U0FDM0QsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELFlBQVksQ0FBQyxDQUFLO1FBQ2hCLElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDakcsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSw2Q0FBNkMsUUFBUSxhQUFhO1NBQ3hFLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFHRCxhQUFhLENBQUMsQ0FBTTtRQUNsQixJQUFJLFdBQVcsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ3BHLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsMENBQTBDLFdBQVcsRUFBRTtTQUM3RCxDQUFDLENBQUE7SUFDSixDQUFDO0lBS0QsT0FBTyxFQUFFO0lBRVQsQ0FBQztJQUtELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFLRCxNQUFNLEVBQUU7SUFFUixDQUFDO0lBS0QsUUFBUSxFQUFFO0lBRVYsQ0FBQztJQUtELGlCQUFpQixFQUFFO0lBRW5CLENBQUM7SUFLRCxhQUFhLEVBQUU7SUFFZixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeHpMaXN0IGZyb20gJy4uLy4uL3B1YmxpYy9qc29uL3p4TGlzdCc7XG5cblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBjb25zdGVsbGF0aW9uOiB4ekxpc3QuZGF0YSxcbiAgfSxcblxuICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKiDmmJ/luqfov5Dlir8gKi9cbiAgZ29YenlzRGV0YWlsKGU6YW55KSB7XG4gICAgY29uc29sZS5sb2coJ2dvWHp5c0RldGFpbCBlJywgZSlcbiAgICBsZXQgZm9ydHVuZU5hbWUgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5mb3J0dW5lbmFtZTtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogYC4uL3h6eXNEZXRhaWwveHp5c0RldGFpbD9mb3J0dW5lTmFtZT0ke2ZvcnR1bmVOYW1lfWAsXG4gICAgfSlcbiAgfSxcblxuICBnZXRDaGFyYWN0ZXIoZTphbnkpIHtcbiAgICBsZXQgY29uc05hbWUgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5mb3J0dW5lbmFtZSA/IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmZvcnR1bmVuYW1lIDogXCLnmb3nvorluqdcIjtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogYC4uL3JlYWxYenlzRGV0YWlsL3JlYWxYenlzRGV0YWlsP2NvbnNOYW1lPSR7Y29uc05hbWV9JnR5cGU9dG9kYXlgLFxuICAgIH0pXG4gIH0sXG5cbiAgLyoqIOaYn+W6p+aVheS6iyAqL1xuICBnb1N0b3J5RGV0YWlsKGU6IGFueSkge1xuICAgIGxldCBmb3J0dW5lbmFtZSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmZvcnR1bmVuYW1lID8gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuZm9ydHVuZW5hbWUgOiBcIueZvee+iuW6p1wiO1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiBgLi4vc3RvcnlEZXRhaWwvc3RvcnlEZXRhaWw/Zm9ydHVuZU5hbWU9JHtmb3J0dW5lbmFtZX1gLFxuICAgIH0pXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yid5qyh5riy5p+T5a6M5oiQXG4gICAqL1xuICBvblJlYWR5OiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcbiAgICovXG4gIG9uU2hvdzogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXG4gICAqL1xuICBvbkhpZGU6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxuICAgKi9cbiAgb25VbmxvYWQ6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxuICAgKi9cbiAgb25QdWxsRG93blJlZnJlc2g6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcbiAgICovXG4gIG9uUmVhY2hCb3R0b206IGZ1bmN0aW9uICgpIHtcblxuICB9LFxufSkiXX0=