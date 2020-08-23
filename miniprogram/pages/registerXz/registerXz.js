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
        console.log(e);
        const { constellation } = e.currentTarget.dataset;
        this.setData({
            constellation,
        });
    },
    updateUser() {
        console.log('--->', this.data.constellation);
        Api.updateUser({
            openid: app.globalData.userInfo.openid,
            constellation: this.data.constellation
        }).then((result) => {
            console.log('esult.code', result.code);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXJYei5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlZ2lzdGVyWHoudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBaUQ7QUFDakQscURBQThDO0FBRTlDLE1BQU0sR0FBRyxHQUFRLE1BQU0sRUFBVSxDQUFDO0FBRWxDLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLEtBQUssRUFBRSxFQUFFO1FBQ1QsYUFBYSxFQUFFLEVBQUU7UUFDakIsaUJBQWlCLEVBQUUsZ0JBQU0sQ0FBQyxJQUFJO0tBQy9CO0lBRUQsTUFBTSxFQUFFLFVBQVUsT0FBWTtRQUM1QixJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUU7WUFDakIsSUFBSSxDQUFDLE9BQVEsQ0FBQztnQkFDWixLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7YUFDckIsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRUQsUUFBUTtRQUNOLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsY0FBYztTQUNwQixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsTUFBTSxDQUFDLENBQU07UUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2YsTUFBTSxFQUFFLGFBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQ2xELElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixhQUFhO1NBQ2QsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFVBQVU7UUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzdDLEdBQUcsQ0FBQyxVQUFVLENBQUM7WUFDYixNQUFNLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsTUFBTTtZQUN0QyxhQUFhLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhO1NBQ3ZDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFXLEVBQUUsRUFBRTtZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDdEMsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLEdBQUcsRUFBRTtnQkFDdkIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxNQUFNLEVBQUU7b0JBQzlCLEVBQUUsQ0FBQyxTQUFTLENBQUM7d0JBQ1gsR0FBRyxFQUFFLGNBQWM7cUJBQ3BCLENBQUMsQ0FBQztvQkFDSCxPQUFPO2lCQUNSO2dCQUNELEVBQUUsQ0FBQyxVQUFVLENBQUM7b0JBQ1osR0FBRyxFQUFFLDhCQUE4QjtpQkFDcEMsQ0FBQyxDQUFDO2FBQ0o7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFLRCxPQUFPLEVBQUU7SUFFVCxDQUFDO0lBS0QsTUFBTSxFQUFFO0lBRVIsQ0FBQztJQUtELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFLRCxRQUFRLEVBQUU7SUFFVixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgQXBpIGZyb20gJy4uLy4uL3NlcnZpY2UvYXBpLnNlcnZpY2UnO1xyXG5pbXBvcnQgeHpMaXN0IGZyb20gJy4uLy4uL3B1YmxpYy9qc29uL3p4TGlzdCc7XHJcbmltcG9ydCB7IElNeUFwcCB9IGZyb20gJy4uLy4uL2FwcCc7XHJcbmNvbnN0IGFwcDogYW55ID0gZ2V0QXBwPElNeUFwcD4oKTtcclxuXHJcblBhZ2Uoe1xyXG4gIGRhdGE6IHtcclxuICAgIHNjZW5lOiAnJyxcclxuICAgIGNvbnN0ZWxsYXRpb246ICcnLFxyXG4gICAgY29uc3RlbGxhdGlvbkxpc3Q6IHh6TGlzdC5kYXRhLFxyXG4gIH0sXHJcblxyXG4gIG9uTG9hZDogZnVuY3Rpb24gKG9wdGlvbnM6IGFueSkge1xyXG4gICAgaWYgKG9wdGlvbnMuc2NlbmUpIHtcclxuICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgc2NlbmU6IG9wdGlvbnMuc2NlbmUsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGp1bXBPdmVyKCkge1xyXG4gICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgIHVybDogJy4uL2hvbWUvaG9tZScsXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIHNlbGVjdChlOiBhbnkpIHtcclxuICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgY29uc3QgeyBjb25zdGVsbGF0aW9uIH0gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldDtcclxuICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICBjb25zdGVsbGF0aW9uLFxyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgdXBkYXRlVXNlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKCctLS0+JywgdGhpcy5kYXRhLmNvbnN0ZWxsYXRpb24pO1xyXG4gICAgQXBpLnVwZGF0ZVVzZXIoe1xyXG4gICAgICBvcGVuaWQ6IGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvLm9wZW5pZCxcclxuICAgICAgY29uc3RlbGxhdGlvbjogdGhpcy5kYXRhLmNvbnN0ZWxsYXRpb25cclxuICAgIH0pLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdlc3VsdC5jb2RlJywgcmVzdWx0LmNvZGUpXHJcbiAgICAgIGlmIChyZXN1bHQuY29kZSA9PT0gMjAwKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5zY2VuZSA9PT0gJ2hvbWUnKSB7XHJcbiAgICAgICAgICB3eC5zd2l0Y2hUYWIoe1xyXG4gICAgICAgICAgICB1cmw6ICcuLi9ob21lL2hvbWUnLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgdXJsOiAnLi4vcmVnaXN0ZXJJbmZvL3JlZ2lzdGVySW5mbycsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yid5qyh5riy5p+T5a6M5oiQXHJcbiAgICovXHJcbiAgb25SZWFkeTogZnVuY3Rpb24gKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxyXG4gICAqL1xyXG4gIG9uU2hvdzogZnVuY3Rpb24gKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdoumakOiXj1xyXG4gICAqL1xyXG4gIG9uSGlkZTogZnVuY3Rpb24gKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxyXG4gICAqL1xyXG4gIG9uVW5sb2FkOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gIH0sXHJcbn0pIl19