"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Api = require("../../service/api.service");
const zxList_1 = require("../../public/json/zxList");
const app = getApp();
Page({
    data: {
        scene: '',
        constellation: '',
        constellationList: zxList_1.default.data,
        userInfo: {}
    },
    onLoad: function (options) {
        const userInfo = wx.getStorageSync('userInfo');
        const user = wx.getStorageSync('user');
        if (!user || !user.openid) {
            wx.navigateTo({
                url: "../login/login",
            });
        }
        if (userInfo.phone) {
            console.log('come in.....');
            wx.switchTab({
                url: `../home/home`,
            });
        }
        if (options.scene) {
            this.setData({
                scene: options.scene,
            });
        }
    },
    jumpOver() {
        wx.navigateTo({
            url: '../home/home',
        });
    },
    select(e) {
        const { constellation } = e.currentTarget.dataset;
        this.setData({
            constellation,
        });
    },
    updateUser() {
        Api.updateUser({
            openid: app.globalData.userInfo.openid,
            constellation: this.data.constellation
        }).then((result) => {
            if (result.code === 200) {
                if (this.data.scene === 'home') {
                    wx.switchTab({
                        url: '../home/home',
                    });
                    return;
                }
                wx.navigateTo({
                    url: '../registerInfo/registerInfo',
                });
            }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXJYei5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlZ2lzdGVyWHoudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBaUQ7QUFDakQscURBQThDO0FBRTlDLE1BQU0sR0FBRyxHQUFRLE1BQU0sRUFBVSxDQUFDO0FBRWxDLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLEtBQUssRUFBRSxFQUFFO1FBQ1QsYUFBYSxFQUFFLEVBQUU7UUFDakIsaUJBQWlCLEVBQUUsZ0JBQU0sQ0FBQyxJQUFJO1FBQzlCLFFBQVEsRUFBRSxFQUFTO0tBQ3BCO0lBRUQsTUFBTSxFQUFFLFVBQVUsT0FBWTtRQUM1QixNQUFNLFFBQVEsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQy9DLE1BQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDekIsRUFBRSxDQUFDLFVBQVUsQ0FBQztnQkFDWixHQUFHLEVBQUUsZ0JBQWdCO2FBQ3RCLENBQUMsQ0FBQztTQUNKO1FBQ0QsSUFBSSxRQUFRLENBQUMsS0FBSyxFQUFFO1lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUE7WUFDM0IsRUFBRSxDQUFDLFNBQVMsQ0FBQztnQkFDWCxHQUFHLEVBQUUsY0FBYzthQUNwQixDQUFDLENBQUM7U0FDSjtRQUVELElBQUksT0FBTyxDQUFDLEtBQUssRUFBRTtZQUNqQixJQUFJLENBQUMsT0FBUSxDQUFDO2dCQUNaLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSzthQUNyQixDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFRCxRQUFRO1FBQ04sRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxjQUFjO1NBQ3BCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxNQUFNLENBQUMsQ0FBTTtRQUNYLE1BQU0sRUFBRSxhQUFhLEVBQUUsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUNsRCxJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osYUFBYTtTQUNkLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxVQUFVO1FBQ1IsR0FBRyxDQUFDLFVBQVUsQ0FBQztZQUNiLE1BQU0sRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxNQUFNO1lBQ3RDLGFBQWEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWE7U0FDdkMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQVcsRUFBRSxFQUFFO1lBQ3RCLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxHQUFHLEVBQUU7Z0JBQ3ZCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssTUFBTSxFQUFFO29CQUM5QixFQUFFLENBQUMsU0FBUyxDQUFDO3dCQUNYLEdBQUcsRUFBRSxjQUFjO3FCQUNwQixDQUFDLENBQUM7b0JBQ0gsT0FBTztpQkFDUjtnQkFDRCxFQUFFLENBQUMsVUFBVSxDQUFDO29CQUNaLEdBQUcsRUFBRSw4QkFBOEI7aUJBQ3BDLENBQUMsQ0FBQzthQUNKO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBS0QsT0FBTyxFQUFFO0lBRVQsQ0FBQztJQUtELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFLRCxNQUFNLEVBQUU7SUFFUixDQUFDO0lBS0QsUUFBUSxFQUFFO0lBRVYsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIEFwaSBmcm9tICcuLi8uLi9zZXJ2aWNlL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB4ekxpc3QgZnJvbSAnLi4vLi4vcHVibGljL2pzb24venhMaXN0JztcbmltcG9ydCB7IElNeUFwcCB9IGZyb20gJy4uLy4uL2FwcCc7XG5jb25zdCBhcHA6IGFueSA9IGdldEFwcDxJTXlBcHA+KCk7XG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgc2NlbmU6ICcnLFxuICAgIGNvbnN0ZWxsYXRpb246ICcnLFxuICAgIGNvbnN0ZWxsYXRpb25MaXN0OiB4ekxpc3QuZGF0YSxcbiAgICB1c2VySW5mbzoge30gYXMgYW55XG4gIH0sXG5cbiAgb25Mb2FkOiBmdW5jdGlvbiAob3B0aW9uczogYW55KSB7XG4gICAgY29uc3QgdXNlckluZm8gPSB3eC5nZXRTdG9yYWdlU3luYygndXNlckluZm8nKTtcbiAgICBjb25zdCB1c2VyID0gd3guZ2V0U3RvcmFnZVN5bmMoJ3VzZXInKTtcbiAgICBpZiAoIXVzZXIgfHwgIXVzZXIub3BlbmlkKSB7XG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiBcIi4uL2xvZ2luL2xvZ2luXCIsXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHVzZXJJbmZvLnBob25lKSB7XG4gICAgICBjb25zb2xlLmxvZygnY29tZSBpbi4uLi4uJylcbiAgICAgIHd4LnN3aXRjaFRhYih7XG4gICAgICAgIHVybDogYC4uL2hvbWUvaG9tZWAsXG4gICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgaWYgKG9wdGlvbnMuc2NlbmUpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICBzY2VuZTogb3B0aW9ucy5zY2VuZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICBqdW1wT3ZlcigpIHtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogJy4uL2hvbWUvaG9tZScsXG4gICAgfSlcbiAgfSxcblxuICBzZWxlY3QoZTogYW55KSB7XG4gICAgY29uc3QgeyBjb25zdGVsbGF0aW9uIH0gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldDtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIGNvbnN0ZWxsYXRpb24sXG4gICAgfSk7XG4gIH0sXG5cbiAgdXBkYXRlVXNlcigpIHtcbiAgICBBcGkudXBkYXRlVXNlcih7XG4gICAgICBvcGVuaWQ6IGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvLm9wZW5pZCxcbiAgICAgIGNvbnN0ZWxsYXRpb246IHRoaXMuZGF0YS5jb25zdGVsbGF0aW9uXG4gICAgfSkudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgIGlmIChyZXN1bHQuY29kZSA9PT0gMjAwKSB7XG4gICAgICAgIGlmICh0aGlzLmRhdGEuc2NlbmUgPT09ICdob21lJykge1xuICAgICAgICAgIHd4LnN3aXRjaFRhYih7XG4gICAgICAgICAgICB1cmw6ICcuLi9ob21lL2hvbWUnLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICcuLi9yZWdpc3RlckluZm8vcmVnaXN0ZXJJbmZvJyxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yid5qyh5riy5p+T5a6M5oiQXG4gICAqL1xuICBvblJlYWR5OiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcbiAgICovXG4gIG9uU2hvdzogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXG4gICAqL1xuICBvbkhpZGU6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxuICAgKi9cbiAgb25VbmxvYWQ6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxufSkiXX0=