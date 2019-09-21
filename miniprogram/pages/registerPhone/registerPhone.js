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
        if (!utils.validateEmpty(phone, '请输入手机号')) {
            return false;
        }
        Api.sendSms({ phone }).then((result) => {
            if (result.code === 200) {
                this.setData({
                    smsDisable: true,
                });
                let smsTime = 59;
                const smsInterval = setInterval(() => {
                    if (smsTime === 0) {
                        console.log('smsTime', smsTime);
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
        Api.addPhone(e.detail.value).then((result) => {
            if (result.code === 200) {
                wx.switchTab({
                    url: '../matching/matching',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXJQaG9uZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlZ2lzdGVyUGhvbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBaUQ7QUFDakQsMkNBQTJDO0FBRzNDLE1BQU0sR0FBRyxHQUFHLE1BQU0sRUFBVSxDQUFBO0FBRTVCLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLEtBQUssRUFBRSxhQUFhO1FBQ3BCLFFBQVEsRUFBRSxFQUFFO1FBQ1osV0FBVyxFQUFFLEtBQUs7UUFDbEIsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsOEJBQThCLENBQUM7UUFDbkQsVUFBVSxFQUFFLEtBQUs7UUFDakIsT0FBTyxFQUFFLENBQUM7UUFDVixLQUFLLEVBQUUsRUFBRTtLQUNWO0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixRQUFRLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRO1lBQ2pDLFdBQVcsRUFBRSxJQUFJO1NBQ2xCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxjQUFjLENBQUMsQ0FBTTtRQUNuQixJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osS0FBSyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSztTQUN0QixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsWUFBWTtRQUNWLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsRUFBRTtZQUN6QyxPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBVyxFQUFFLEVBQUU7WUFDMUMsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLEdBQUcsRUFBRTtnQkFDdkIsSUFBSSxDQUFDLE9BQVEsQ0FBQztvQkFDWixVQUFVLEVBQUUsSUFBSTtpQkFDakIsQ0FBQyxDQUFDO2dCQUNILElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztnQkFDakIsTUFBTSxXQUFXLEdBQUcsV0FBVyxDQUFDLEdBQUcsRUFBRTtvQkFDbkMsSUFBSSxPQUFPLEtBQUssQ0FBQyxFQUFFO3dCQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQzt3QkFDaEMsSUFBSSxDQUFDLE9BQVEsQ0FBQzs0QkFDWixVQUFVLEVBQUUsS0FBSzt5QkFDbEIsQ0FBQyxDQUFBO3dCQUNGLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQzt3QkFDM0IsT0FBTztxQkFDUjtvQkFDRCxPQUFPLEVBQUUsQ0FBQztvQkFDVixJQUFJLENBQUMsT0FBUSxDQUFDO3dCQUNaLE9BQU87cUJBQ1IsQ0FBQyxDQUFDO2dCQUNMLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTthQUNUO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsVUFBVTtRQUNSLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsZ0NBQWdDO1NBQ3RDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxNQUFNO1FBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUl0QixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLGNBQWM7U0FDcEIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUtELFdBQVcsQ0FBQyxDQUFNO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQy9CLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFBO1FBQzNDLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixRQUFRLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRO1lBQzNCLFdBQVcsRUFBRSxJQUFJO1NBQ2xCLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDekQsQ0FBQztJQUdELFdBQVc7UUFDVCxPQUFPLEtBQUssQ0FBQTtJQUNkLENBQUM7SUFFRCxRQUFRO1FBQ04sRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxjQUFjO1NBQ3BCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxJQUFJO1FBQ0YsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxzQkFBc0I7U0FDNUIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELFVBQVUsQ0FBQyxDQUFNO1FBQ2YsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQVcsRUFBRSxFQUFFO1lBQ2hELElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxHQUFHLEVBQUU7Z0JBQ3ZCLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0JBQ1gsR0FBRyxFQUFFLHNCQUFzQjtpQkFDNUIsQ0FBQyxDQUFDO2FBQ0o7aUJBQU07Z0JBQ0wsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDakM7UUFDSCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxTQUFTO1FBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO0lBQy9CLENBQUM7Q0FFRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBBcGkgZnJvbSAnLi4vLi4vc2VydmljZS9hcGkuc2VydmljZSc7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XG5cbmltcG9ydCB7IElNeUFwcCB9IGZyb20gJy4uLy4uL2FwcCc7XG5jb25zdCBhcHAgPSBnZXRBcHA8SU15QXBwPigpXG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgbW90dG86ICfngrnlh7sg4oCc57yW6K+R4oCdIOS7peaehOW7uicsXG4gICAgdXNlckluZm86IHt9LFxuICAgIGhhc1VzZXJJbmZvOiBmYWxzZSxcbiAgICBjYW5JVXNlOiB3eC5jYW5JVXNlKCdidXR0b24ub3Blbi10eXBlLmdldFVzZXJJbmZvJyksXG4gICAgc21zRGlzYWJsZTogZmFsc2UsXG4gICAgc21zVGltZTogMCxcbiAgICBwaG9uZTogJycsXG4gIH0sXG4gIFxuICBvbkxvYWQoKSB7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICB1c2VySW5mbzogYXBwLmdsb2JhbERhdGEudXNlckluZm8sXG4gICAgICBoYXNVc2VySW5mbzogdHJ1ZSxcbiAgICB9KTtcbiAgfSxcblxuICBiaW5kUGhvbmVJbnB1dChlOiBhbnkpIHtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIHBob25lOiBlLmRldGFpbC52YWx1ZVxuICAgIH0pXG4gIH0sXG5cbiAgZ2V0UGhvbmVDb2RlKCk6IGFueSB7XG4gICAgY29uc3QgeyBwaG9uZSB9ID0gdGhpcy5kYXRhO1xuICAgIGlmICghdXRpbHMudmFsaWRhdGVFbXB0eShwaG9uZSwgJ+ivt+i+k+WFpeaJi+acuuWPtycpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIEFwaS5zZW5kU21zKHsgcGhvbmUgfSkudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgIGlmIChyZXN1bHQuY29kZSA9PT0gMjAwKSB7XG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgIHNtc0Rpc2FibGU6IHRydWUsXG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgc21zVGltZSA9IDU5O1xuICAgICAgICBjb25zdCBzbXNJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICBpZiAoc21zVGltZSA9PT0gMCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Ntc1RpbWUnLCBzbXNUaW1lKTtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgICAgICBzbXNEaXNhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBjbGVhckludGVydmFsKHNtc0ludGVydmFsKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgc21zVGltZS0tO1xuICAgICAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgICAgc21zVGltZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSwgMTAwMClcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICBnb1JlZ2lzdGVyKCk6IHZvaWQge1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiAnLi4vcmVnaXN0ZXJwaG9uZS9yZWdpc3RlcnBob25lJ1xuICAgIH0pXG4gIH0sXG5cbiAgZ29Ib21lKCk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKCdnb0hvbWUnKTtcbiAgICAvLyB3eC5zd2l0Y2hUYWIoe1xuICAgIC8vICAgdXJsOiAnLi4vaG9tZS9ob21lJ1xuICAgIC8vIH0pXG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6ICcuLi9ob21lL2hvbWUnXG4gICAgfSlcbiAgfSxcblxuICAvKiogXG4gICAqIO+8iOacquaOiOadg++8ieaJi+WKqOWUpOi1t+aOiOadg1xuICAgKi9cbiAgZ2V0VXNlckluZm8oZTogYW55KSB7XG4gICAgY29uc29sZS5sb2coJ2dldFVzZXJJbmZvOicsIGUpO1xuICAgIGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gZS5kZXRhaWwudXNlckluZm9cbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIHVzZXJJbmZvOiBlLmRldGFpbC51c2VySW5mbyxcbiAgICAgIGhhc1VzZXJJbmZvOiB0cnVlXG4gICAgfSlcbiAgICB0aGlzLklzRmlyc3RUaW1lKCkgPyB0aGlzLmdvUmVnaXN0ZXIoKSA6IHRoaXMuZ29Ib21lKCk7XG4gIH0sXG5cbiAgLyoqIOaYr+WQpummluasoSAqL1xuICBJc0ZpcnN0VGltZSgpOiBCb29sZWFuIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfSxcblxuICBqdW1wT3ZlcigpOiB2b2lkIHtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogJy4uL2hvbWUvaG9tZScsXG4gICAgfSlcbiAgfSxcblxuICBuZXh0KCk6IHZvaWQge1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiAnLi4vbWF0Y2hpbmcvbWF0Y2hpbmcnLFxuICAgIH0pXG4gIH0sXG4gICBcbiAgZm9ybVN1Ym1pdChlOiBhbnkpOiB2b2lkIHtcbiAgICBBcGkuYWRkUGhvbmUoZS5kZXRhaWwudmFsdWUpLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICBpZiAocmVzdWx0LmNvZGUgPT09IDIwMCkge1xuICAgICAgICB3eC5zd2l0Y2hUYWIoe1xuICAgICAgICAgIHVybDogJy4uL21hdGNoaW5nL21hdGNoaW5nJyxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB1dGlscy5zaG93TW9kYWwocmVzdWx0Lm1lc3NhZ2UpO1xuICAgICAgfVxuICAgIH0pXG4gIH0sXG5cbiAgZm9ybVJlc2V0KCk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKCdmb3Jt5Y+R55Sf5LqGcmVzZXTkuovku7YnKVxuICB9XG4gIFxufSlcbiJdfQ==