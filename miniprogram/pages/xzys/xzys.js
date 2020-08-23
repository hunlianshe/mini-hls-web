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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieHp5cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInh6eXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxxREFBOEM7QUFHOUMsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osYUFBYSxFQUFFLGdCQUFNLENBQUMsSUFBSTtLQUMzQjtJQUVELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFHRCxZQUFZLENBQUMsQ0FBSztRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ2hDLElBQUksV0FBVyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztRQUN0RCxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLHdDQUF3QyxXQUFXLEVBQUU7U0FDM0QsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELFlBQVksQ0FBQyxDQUFLO1FBQ2hCLElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDakcsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSw2Q0FBNkMsUUFBUSxhQUFhO1NBQ3hFLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFHRCxhQUFhLENBQUMsQ0FBTTtRQUNsQixJQUFJLFdBQVcsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ3BHLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsMENBQTBDLFdBQVcsRUFBRTtTQUM3RCxDQUFDLENBQUE7SUFDSixDQUFDO0lBS0QsT0FBTyxFQUFFO0lBRVQsQ0FBQztJQUtELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFLRCxNQUFNLEVBQUU7SUFFUixDQUFDO0lBS0QsUUFBUSxFQUFFO0lBRVYsQ0FBQztJQUtELGlCQUFpQixFQUFFO0lBRW5CLENBQUM7SUFLRCxhQUFhLEVBQUU7SUFFZixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB4ekxpc3QgZnJvbSAnLi4vLi4vcHVibGljL2pzb24venhMaXN0JztcclxuXHJcblxyXG5QYWdlKHtcclxuICBkYXRhOiB7XHJcbiAgICBjb25zdGVsbGF0aW9uOiB4ekxpc3QuZGF0YSxcclxuICB9LFxyXG5cclxuICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqIOaYn+W6p+i/kOWKvyAqL1xyXG4gIGdvWHp5c0RldGFpbChlOmFueSkge1xyXG4gICAgY29uc29sZS5sb2coJ2dvWHp5c0RldGFpbCBlJywgZSlcclxuICAgIGxldCBmb3J0dW5lTmFtZSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmZvcnR1bmVuYW1lO1xyXG4gICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgIHVybDogYC4uL3h6eXNEZXRhaWwveHp5c0RldGFpbD9mb3J0dW5lTmFtZT0ke2ZvcnR1bmVOYW1lfWAsXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIGdldENoYXJhY3RlcihlOmFueSkge1xyXG4gICAgbGV0IGNvbnNOYW1lID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuZm9ydHVuZW5hbWUgPyBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5mb3J0dW5lbmFtZSA6IFwi55m9576K5bqnXCI7XHJcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgdXJsOiBgLi4vcmVhbFh6eXNEZXRhaWwvcmVhbFh6eXNEZXRhaWw/Y29uc05hbWU9JHtjb25zTmFtZX0mdHlwZT10b2RheWAsXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIC8qKiDmmJ/luqfmlYXkuosgKi9cclxuICBnb1N0b3J5RGV0YWlsKGU6IGFueSkge1xyXG4gICAgbGV0IGZvcnR1bmVuYW1lID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuZm9ydHVuZW5hbWUgPyBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5mb3J0dW5lbmFtZSA6IFwi55m9576K5bqnXCI7XHJcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgdXJsOiBgLi4vc3RvcnlEZXRhaWwvc3RvcnlEZXRhaWw/Zm9ydHVuZU5hbWU9JHtmb3J0dW5lbmFtZX1gLFxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxyXG4gICAqL1xyXG4gIG9uUmVhZHk6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcclxuICAgKi9cclxuICBvblNob3c6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cclxuICAgKi9cclxuICBvbkhpZGU6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cclxuICAgKi9cclxuICBvblVubG9hZDogZnVuY3Rpb24gKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxyXG4gICAqL1xyXG4gIG9uUHVsbERvd25SZWZyZXNoOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxyXG4gICAqL1xyXG4gIG9uUmVhY2hCb3R0b206IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgfSxcclxufSkiXX0=