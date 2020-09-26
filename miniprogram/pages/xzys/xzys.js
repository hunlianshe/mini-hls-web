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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieHp5cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInh6eXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxxREFBOEM7QUFHOUMsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osYUFBYSxFQUFFLGdCQUFNLENBQUMsSUFBSTtLQUMzQjtJQUVELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFHRCxZQUFZLENBQUMsQ0FBSztRQUNoQixJQUFJLFdBQVcsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7UUFDdEQsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSx3Q0FBd0MsV0FBVyxFQUFFO1NBQzNELENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxZQUFZLENBQUMsQ0FBSztRQUNoQixJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ2pHLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsNkNBQTZDLFFBQVEsYUFBYTtTQUN4RSxDQUFDLENBQUE7SUFDSixDQUFDO0lBR0QsYUFBYSxDQUFDLENBQU07UUFDbEIsSUFBSSxXQUFXLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNwRyxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLDBDQUEwQyxXQUFXLEVBQUU7U0FDN0QsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUtELE9BQU8sRUFBRTtJQUVULENBQUM7SUFLRCxNQUFNLEVBQUU7SUFFUixDQUFDO0lBS0QsTUFBTSxFQUFFO0lBRVIsQ0FBQztJQUtELFFBQVEsRUFBRTtJQUVWLENBQUM7SUFLRCxpQkFBaUIsRUFBRTtJQUVuQixDQUFDO0lBS0QsYUFBYSxFQUFFO0lBRWYsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHh6TGlzdCBmcm9tICcuLi8uLi9wdWJsaWMvanNvbi96eExpc3QnO1xuXG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgY29uc3RlbGxhdGlvbjogeHpMaXN0LmRhdGEsXG4gIH0sXG5cbiAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKiog5pif5bqn6L+Q5Yq/ICovXG4gIGdvWHp5c0RldGFpbChlOmFueSkge1xuICAgIGxldCBmb3J0dW5lTmFtZSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmZvcnR1bmVuYW1lO1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiBgLi4veHp5c0RldGFpbC94enlzRGV0YWlsP2ZvcnR1bmVOYW1lPSR7Zm9ydHVuZU5hbWV9YCxcbiAgICB9KVxuICB9LFxuXG4gIGdldENoYXJhY3RlcihlOmFueSkge1xuICAgIGxldCBjb25zTmFtZSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmZvcnR1bmVuYW1lID8gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuZm9ydHVuZW5hbWUgOiBcIueZvee+iuW6p1wiO1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiBgLi4vcmVhbFh6eXNEZXRhaWwvcmVhbFh6eXNEZXRhaWw/Y29uc05hbWU9JHtjb25zTmFtZX0mdHlwZT10b2RheWAsXG4gICAgfSlcbiAgfSxcblxuICAvKiog5pif5bqn5pWF5LqLICovXG4gIGdvU3RvcnlEZXRhaWwoZTogYW55KSB7XG4gICAgbGV0IGZvcnR1bmVuYW1lID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuZm9ydHVuZW5hbWUgPyBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5mb3J0dW5lbmFtZSA6IFwi55m9576K5bqnXCI7XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6IGAuLi9zdG9yeURldGFpbC9zdG9yeURldGFpbD9mb3J0dW5lTmFtZT0ke2ZvcnR1bmVuYW1lfWAsXG4gICAgfSlcbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliJ3mrKHmuLLmn5PlrozmiJBcbiAgICovXG4gIG9uUmVhZHk6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxuICAgKi9cbiAgb25TaG93OiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cbiAgICovXG4gIG9uSGlkZTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Y246L29XG4gICAqL1xuICBvblVubG9hZDogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXG4gICAqL1xuICBvblB1bGxEb3duUmVmcmVzaDogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxuICAgKi9cbiAgb25SZWFjaEJvdHRvbTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG59KSJdfQ==