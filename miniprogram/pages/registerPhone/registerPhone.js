"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Api = require("../../service/api.service");
const utils = require("../../utils/utils");
const app = getApp();
Page({
    data: {
        motto: '点击 “编译” 以构建',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        smsDisable: false,
        smsTime: 0,
        phone: '',
    },
    onLoad() {
        this.setData({
            userInfo: app.globalData.userInfo,
            hasUserInfo: true,
        });
    },
    bindPhoneInput(e) {
        this.setData({
            phone: e.detail.value
        });
    },
    getPhoneCode() {
        const { phone } = this.data;
        Api.sendSms({ phone }).then((result) => {
            if (result.code === 200) {
                this.setData({
                    smsDisable: true,
                });
                let smsTime = 59;
                const smsInterval = setInterval(() => {
                    if (smsTime === 0) {
                        this.setData({
                            smsDisable: false,
                        });
                        clearInterval(smsInterval);
                        return;
                    }
                    smsTime--;
                    this.setData({
                        smsTime,
                    });
                }, 1000);
            }
        });
    },
    goRegister() {
        wx.navigateTo({
            url: '../registerphone/registerphone'
        });
    },
    goHome() {
        console.log('goHome');
        wx.navigateTo({
            url: '../home/home'
        });
    },
    getUserInfo(e) {
        console.log('getUserInfo:', e);
        app.globalData.userInfo = e.detail.userInfo;
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        });
        this.IsFirstTime() ? this.goRegister() : this.goHome();
    },
    IsFirstTime() {
        return false;
    },
    jumpOver() {
        wx.navigateTo({
            url: '../home/home',
        });
    },
    next() {
        wx.navigateTo({
            url: '../matching/matching',
        });
    },
    formSubmit(e) {
        console.log('form发生了submit事件，携带数据为：', e.detail.value);
        Api.addPhone(e.detail.value).then((result) => {
            if (result.code === 200) {
                wx.switchTab({
                    url: '../home/home',
                });
            }
            else {
                utils.showModal(result.message);
            }
        });
    },
    formReset() {
        console.log('form发生了reset事件');
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXJQaG9uZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlZ2lzdGVyUGhvbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBaUQ7QUFDakQsMkNBQTJDO0FBRzNDLE1BQU0sR0FBRyxHQUFHLE1BQU0sRUFBVSxDQUFBO0FBRTVCLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLEtBQUssRUFBRSxhQUFhO1FBQ3BCLFFBQVEsRUFBRSxFQUFFO1FBQ1osV0FBVyxFQUFFLEtBQUs7UUFDbEIsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsOEJBQThCLENBQUM7UUFDbkQsVUFBVSxFQUFFLEtBQUs7UUFDakIsT0FBTyxFQUFFLENBQUM7UUFDVixLQUFLLEVBQUUsRUFBRTtLQUNWO0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixRQUFRLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRO1lBQ2pDLFdBQVcsRUFBRSxJQUFJO1NBQ2xCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxjQUFjLENBQUMsQ0FBTTtRQUNuQixJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osS0FBSyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSztTQUN0QixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsWUFBWTtRQUNWLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzVCLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQVcsRUFBRSxFQUFFO1lBQzFDLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxHQUFHLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxPQUFRLENBQUM7b0JBQ1osVUFBVSxFQUFFLElBQUk7aUJBQ2pCLENBQUMsQ0FBQTtnQkFDRixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7Z0JBQ2pCLE1BQU0sV0FBVyxHQUFHLFdBQVcsQ0FBQyxHQUFHLEVBQUU7b0JBQ25DLElBQUksT0FBTyxLQUFLLENBQUMsRUFBRTt3QkFDakIsSUFBSSxDQUFDLE9BQVEsQ0FBQzs0QkFDWixVQUFVLEVBQUUsS0FBSzt5QkFDbEIsQ0FBQyxDQUFBO3dCQUNGLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQzt3QkFDM0IsT0FBTztxQkFDUjtvQkFDRCxPQUFPLEVBQUUsQ0FBQztvQkFDVixJQUFJLENBQUMsT0FBUSxDQUFDO3dCQUNaLE9BQU87cUJBQ1IsQ0FBQyxDQUFDO2dCQUNMLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTthQUNUO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsVUFBVTtRQUNSLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsZ0NBQWdDO1NBQ3RDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxNQUFNO1FBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUl0QixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLGNBQWM7U0FDcEIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUtELFdBQVcsQ0FBQyxDQUFNO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQy9CLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFBO1FBQzNDLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixRQUFRLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRO1lBQzNCLFdBQVcsRUFBRSxJQUFJO1NBQ2xCLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDekQsQ0FBQztJQUdELFdBQVc7UUFDVCxPQUFPLEtBQUssQ0FBQTtJQUNkLENBQUM7SUFFRCxRQUFRO1FBQ04sRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxjQUFjO1NBQ3BCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxJQUFJO1FBQ0YsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxzQkFBc0I7U0FDNUIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELFVBQVUsQ0FBQyxDQUFNO1FBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RELEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFXLEVBQUUsRUFBRTtZQUNoRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssR0FBRyxFQUFFO2dCQUN2QixFQUFFLENBQUMsU0FBUyxDQUFDO29CQUNYLEdBQUcsRUFBRSxjQUFjO2lCQUNwQixDQUFDLENBQUE7YUFDSDtpQkFBTTtnQkFDTCxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNqQztRQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELFNBQVM7UUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUE7SUFDL0IsQ0FBQztDQUdGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIEFwaSBmcm9tICcuLi8uLi9zZXJ2aWNlL2FwaS5zZXJ2aWNlJztcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJztcblxuaW1wb3J0IHsgSU15QXBwIH0gZnJvbSAnLi4vLi4vYXBwJztcbmNvbnN0IGFwcCA9IGdldEFwcDxJTXlBcHA+KClcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBtb3R0bzogJ+eCueWHuyDigJznvJbor5HigJ0g5Lul5p6E5bu6JyxcbiAgICB1c2VySW5mbzoge30sXG4gICAgaGFzVXNlckluZm86IGZhbHNlLFxuICAgIGNhbklVc2U6IHd4LmNhbklVc2UoJ2J1dHRvbi5vcGVuLXR5cGUuZ2V0VXNlckluZm8nKSxcbiAgICBzbXNEaXNhYmxlOiBmYWxzZSxcbiAgICBzbXNUaW1lOiAwLFxuICAgIHBob25lOiAnJyxcbiAgfSxcbiAgXG4gIG9uTG9hZCgpIHtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIHVzZXJJbmZvOiBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyxcbiAgICAgIGhhc1VzZXJJbmZvOiB0cnVlLFxuICAgIH0pO1xuICB9LFxuXG4gIGJpbmRQaG9uZUlucHV0KGU6IGFueSkge1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgcGhvbmU6IGUuZGV0YWlsLnZhbHVlXG4gICAgfSlcbiAgfSxcblxuICBnZXRQaG9uZUNvZGUoKSB7XG4gICAgY29uc3QgeyBwaG9uZSB9ID0gdGhpcy5kYXRhO1xuICAgIEFwaS5zZW5kU21zKHsgcGhvbmUgfSkudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgIGlmIChyZXN1bHQuY29kZSA9PT0gMjAwKSB7XG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgIHNtc0Rpc2FibGU6IHRydWUsXG4gICAgICAgIH0pXG4gICAgICAgIGxldCBzbXNUaW1lID0gNTk7XG4gICAgICAgIGNvbnN0IHNtc0ludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgIGlmIChzbXNUaW1lID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgICAgICAgc21zRGlzYWJsZTogZmFsc2UsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChzbXNJbnRlcnZhbCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHNtc1RpbWUtLTtcbiAgICAgICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgICAgIHNtc1RpbWUsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sIDEwMDApXG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgZ29SZWdpc3RlcigpOiB2b2lkIHtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogJy4uL3JlZ2lzdGVycGhvbmUvcmVnaXN0ZXJwaG9uZSdcbiAgICB9KVxuICB9LFxuXG4gIGdvSG9tZSgpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZygnZ29Ib21lJyk7XG4gICAgLy8gd3guc3dpdGNoVGFiKHtcbiAgICAvLyAgIHVybDogJy4uL2hvbWUvaG9tZSdcbiAgICAvLyB9KVxuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiAnLi4vaG9tZS9ob21lJ1xuICAgIH0pXG4gIH0sXG5cbiAgLyoqIFxuICAgKiDvvIjmnKrmjojmnYPvvInmiYvliqjllKTotbfmjojmnYNcbiAgICovXG4gIGdldFVzZXJJbmZvKGU6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKCdnZXRVc2VySW5mbzonLCBlKTtcbiAgICBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyA9IGUuZGV0YWlsLnVzZXJJbmZvXG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICB1c2VySW5mbzogZS5kZXRhaWwudXNlckluZm8sXG4gICAgICBoYXNVc2VySW5mbzogdHJ1ZVxuICAgIH0pXG4gICAgdGhpcy5Jc0ZpcnN0VGltZSgpID8gdGhpcy5nb1JlZ2lzdGVyKCkgOiB0aGlzLmdvSG9tZSgpO1xuICB9LFxuXG4gIC8qKiDmmK/lkKbpppbmrKEgKi9cbiAgSXNGaXJzdFRpbWUoKTogQm9vbGVhbiB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH0sXG5cbiAganVtcE92ZXIoKTogdm9pZCB7XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6ICcuLi9ob21lL2hvbWUnLFxuICAgIH0pXG4gIH0sXG5cbiAgbmV4dCgpOiB2b2lkIHtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogJy4uL21hdGNoaW5nL21hdGNoaW5nJyxcbiAgICB9KVxuICB9LFxuICAgXG4gIGZvcm1TdWJtaXQoZTogYW55KTogdm9pZCB7XG4gICAgY29uc29sZS5sb2coJ2Zvcm3lj5HnlJ/kuoZzdWJtaXTkuovku7bvvIzmkLrluKbmlbDmja7kuLrvvJonLCBlLmRldGFpbC52YWx1ZSk7XG4gICAgQXBpLmFkZFBob25lKGUuZGV0YWlsLnZhbHVlKS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgaWYgKHJlc3VsdC5jb2RlID09PSAyMDApIHtcbiAgICAgICAgd3guc3dpdGNoVGFiKHtcbiAgICAgICAgICB1cmw6ICcuLi9ob21lL2hvbWUnLFxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdXRpbHMuc2hvd01vZGFsKHJlc3VsdC5tZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuXG4gIGZvcm1SZXNldCgpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZygnZm9ybeWPkeeUn+S6hnJlc2V05LqL5Lu2JylcbiAgfVxuICBcblxufSlcbiJdfQ==