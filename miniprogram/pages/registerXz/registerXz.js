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
    },
    onLoad: function (options) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXJYei5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlZ2lzdGVyWHoudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBaUQ7QUFDakQscURBQThDO0FBRTlDLE1BQU0sR0FBRyxHQUFRLE1BQU0sRUFBVSxDQUFDO0FBRWxDLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLEtBQUssRUFBRSxFQUFFO1FBQ1QsYUFBYSxFQUFFLEVBQUU7UUFDakIsaUJBQWlCLEVBQUUsZ0JBQU0sQ0FBQyxJQUFJO0tBQy9CO0lBRUQsTUFBTSxFQUFFLFVBQVUsT0FBWTtRQUM1QixJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUU7WUFDakIsSUFBSSxDQUFDLE9BQVEsQ0FBQztnQkFDWixLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7YUFDckIsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRUQsUUFBUTtRQUNOLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsY0FBYztTQUNwQixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsTUFBTSxDQUFDLENBQU07UUFDWCxNQUFNLEVBQUUsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDbEQsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLGFBQWE7U0FDZCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsVUFBVTtRQUNSLEdBQUcsQ0FBQyxVQUFVLENBQUM7WUFDYixNQUFNLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsTUFBTTtZQUN0QyxhQUFhLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhO1NBQ3ZDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFXLEVBQUUsRUFBRTtZQUN0QixJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssR0FBRyxFQUFFO2dCQUN2QixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLE1BQU0sRUFBRTtvQkFDOUIsRUFBRSxDQUFDLFNBQVMsQ0FBQzt3QkFDWCxHQUFHLEVBQUUsY0FBYztxQkFDcEIsQ0FBQyxDQUFDO29CQUNILE9BQU87aUJBQ1I7Z0JBQ0QsRUFBRSxDQUFDLFVBQVUsQ0FBQztvQkFDWixHQUFHLEVBQUUsOEJBQThCO2lCQUNwQyxDQUFDLENBQUM7YUFDSjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUtELE9BQU8sRUFBRTtJQUVULENBQUM7SUFLRCxNQUFNLEVBQUU7SUFFUixDQUFDO0lBS0QsTUFBTSxFQUFFO0lBRVIsQ0FBQztJQUtELFFBQVEsRUFBRTtJQUVWLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBBcGkgZnJvbSAnLi4vLi4vc2VydmljZS9hcGkuc2VydmljZSc7XG5pbXBvcnQgeHpMaXN0IGZyb20gJy4uLy4uL3B1YmxpYy9qc29uL3p4TGlzdCc7XG5pbXBvcnQgeyBJTXlBcHAgfSBmcm9tICcuLi8uLi9hcHAnO1xuY29uc3QgYXBwOiBhbnkgPSBnZXRBcHA8SU15QXBwPigpO1xuXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIHNjZW5lOiAnJyxcbiAgICBjb25zdGVsbGF0aW9uOiAnJyxcbiAgICBjb25zdGVsbGF0aW9uTGlzdDogeHpMaXN0LmRhdGEsXG4gIH0sXG5cbiAgb25Mb2FkOiBmdW5jdGlvbiAob3B0aW9uczogYW55KSB7XG4gICAgaWYgKG9wdGlvbnMuc2NlbmUpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICBzY2VuZTogb3B0aW9ucy5zY2VuZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICBqdW1wT3ZlcigpIHtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogJy4uL2hvbWUvaG9tZScsXG4gICAgfSlcbiAgfSxcblxuICBzZWxlY3QoZTogYW55KSB7XG4gICAgY29uc3QgeyBjb25zdGVsbGF0aW9uIH0gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldDtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIGNvbnN0ZWxsYXRpb24sXG4gICAgfSk7XG4gIH0sXG5cbiAgdXBkYXRlVXNlcigpIHtcbiAgICBBcGkudXBkYXRlVXNlcih7XG4gICAgICBvcGVuaWQ6IGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvLm9wZW5pZCxcbiAgICAgIGNvbnN0ZWxsYXRpb246IHRoaXMuZGF0YS5jb25zdGVsbGF0aW9uXG4gICAgfSkudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgIGlmIChyZXN1bHQuY29kZSA9PT0gMjAwKSB7XG4gICAgICAgIGlmICh0aGlzLmRhdGEuc2NlbmUgPT09ICdob21lJykge1xuICAgICAgICAgIHd4LnN3aXRjaFRhYih7XG4gICAgICAgICAgICB1cmw6ICcuLi9ob21lL2hvbWUnLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICcuLi9yZWdpc3RlckluZm8vcmVnaXN0ZXJJbmZvJyxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yid5qyh5riy5p+T5a6M5oiQXG4gICAqL1xuICBvblJlYWR5OiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcbiAgICovXG4gIG9uU2hvdzogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXG4gICAqL1xuICBvbkhpZGU6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxuICAgKi9cbiAgb25VbmxvYWQ6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxufSkiXX0=