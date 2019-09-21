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
                    url: '../registerStandard/registerStandard',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXJYei5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlZ2lzdGVyWHoudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBaUQ7QUFDakQscURBQThDO0FBRTlDLE1BQU0sR0FBRyxHQUFRLE1BQU0sRUFBVSxDQUFDO0FBRWxDLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLEtBQUssRUFBRSxFQUFFO1FBQ1QsYUFBYSxFQUFFLEVBQUU7UUFDakIsaUJBQWlCLEVBQUUsZ0JBQU0sQ0FBQyxJQUFJO0tBQy9CO0lBRUQsTUFBTSxFQUFFLFVBQVUsT0FBWTtRQUM1QixJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUU7WUFDakIsSUFBSSxDQUFDLE9BQVEsQ0FBQztnQkFDWixLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7YUFDckIsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRUQsUUFBUTtRQUNOLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsY0FBYztTQUNwQixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsTUFBTSxDQUFDLENBQU07UUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2YsTUFBTSxFQUFFLGFBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQ2xELElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixhQUFhO1NBQ2QsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFVBQVU7UUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzdDLEdBQUcsQ0FBQyxVQUFVLENBQUM7WUFDYixNQUFNLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsTUFBTTtZQUN0QyxhQUFhLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhO1NBQ3ZDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFXLEVBQUUsRUFBRTtZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDdEMsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLEdBQUcsRUFBRTtnQkFDdkIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxNQUFNLEVBQUU7b0JBQzlCLEVBQUUsQ0FBQyxTQUFTLENBQUM7d0JBQ1gsR0FBRyxFQUFFLGNBQWM7cUJBQ3BCLENBQUMsQ0FBQztvQkFDSCxPQUFPO2lCQUNSO2dCQUNELEVBQUUsQ0FBQyxVQUFVLENBQUM7b0JBQ1osR0FBRyxFQUFFLHNDQUFzQztpQkFDNUMsQ0FBQyxDQUFDO2FBQ0o7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFLRCxPQUFPLEVBQUU7SUFFVCxDQUFDO0lBS0QsTUFBTSxFQUFFO0lBRVIsQ0FBQztJQUtELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFLRCxRQUFRLEVBQUU7SUFFVixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgQXBpIGZyb20gJy4uLy4uL3NlcnZpY2UvYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHh6TGlzdCBmcm9tICcuLi8uLi9wdWJsaWMvanNvbi96eExpc3QnO1xuaW1wb3J0IHsgSU15QXBwIH0gZnJvbSAnLi4vLi4vYXBwJztcbmNvbnN0IGFwcDogYW55ID0gZ2V0QXBwPElNeUFwcD4oKTtcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBzY2VuZTogJycsXG4gICAgY29uc3RlbGxhdGlvbjogJycsXG4gICAgY29uc3RlbGxhdGlvbkxpc3Q6IHh6TGlzdC5kYXRhLFxuICB9LFxuXG4gIG9uTG9hZDogZnVuY3Rpb24gKG9wdGlvbnM6IGFueSkge1xuICAgIGlmIChvcHRpb25zLnNjZW5lKSB7XG4gICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgc2NlbmU6IG9wdGlvbnMuc2NlbmUsXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAganVtcE92ZXIoKSB7XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6ICcuLi9ob21lL2hvbWUnLFxuICAgIH0pXG4gIH0sXG5cbiAgc2VsZWN0KGU6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIGNvbnN0IHsgY29uc3RlbGxhdGlvbiB9ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQ7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBjb25zdGVsbGF0aW9uLFxuICAgIH0pO1xuICB9LFxuXG4gIHVwZGF0ZVVzZXIoKSB7XG4gICAgY29uc29sZS5sb2coJy0tLT4nLCB0aGlzLmRhdGEuY29uc3RlbGxhdGlvbik7XG4gICAgQXBpLnVwZGF0ZVVzZXIoe1xuICAgICAgb3BlbmlkOiBhcHAuZ2xvYmFsRGF0YS51c2VySW5mby5vcGVuaWQsXG4gICAgICBjb25zdGVsbGF0aW9uOiB0aGlzLmRhdGEuY29uc3RlbGxhdGlvblxuICAgIH0pLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnZXN1bHQuY29kZScsIHJlc3VsdC5jb2RlKVxuICAgICAgaWYgKHJlc3VsdC5jb2RlID09PSAyMDApIHtcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5zY2VuZSA9PT0gJ2hvbWUnKSB7XG4gICAgICAgICAgd3guc3dpdGNoVGFiKHtcbiAgICAgICAgICAgIHVybDogJy4uL2hvbWUvaG9tZScsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJy4uL3JlZ2lzdGVyU3RhbmRhcmQvcmVnaXN0ZXJTdGFuZGFyZCcsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxuICAgKi9cbiAgb25SZWFkeTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XG4gICAqL1xuICBvblNob3c6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdoumakOiXj1xuICAgKi9cbiAgb25IaWRlOiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cbiAgICovXG4gIG9uVW5sb2FkOiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcbn0pIl19