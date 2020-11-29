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
        smsTime: 59,
        phone: '',
        submitDisable: false,
    },
    onLoad() {
        const userInfo = wx.getStorageSync("userInfo");
        this.setData({
            userInfo: userInfo,
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
        wx.navigateTo({
            url: '../home/home'
        });
    },
    getUserInfo(e) {
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
        this.setData({
            submitDisable: true
        });
        const params = e.detail.value;
        if (!utils.validateEmpty(params.phone, '请输入手机号') ||
            !utils.validateEmpty(params.code, '请输入验证码')) {
            return false;
        }
        Api.addPhone(params).then((result) => {
            this.setData({
                submitDisable: true
            });
            if (result.code === 200) {
                wx.switchTab({
                    url: '../home/home',
                });
            }
            else {
                this.setData({
                    submitDisable: false
                });
                utils.showModal(result.message);
            }
        });
    },
    formReset() {
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXJQaG9uZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlZ2lzdGVyUGhvbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBaUQ7QUFDakQsMkNBQTJDO0FBRzNDLE1BQU0sR0FBRyxHQUFHLE1BQU0sRUFBVSxDQUFBO0FBRTVCLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLEtBQUssRUFBRSxhQUFhO1FBQ3BCLFFBQVEsRUFBRSxFQUFFO1FBQ1osV0FBVyxFQUFFLEtBQUs7UUFDbEIsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsOEJBQThCLENBQUM7UUFDbkQsVUFBVSxFQUFFLEtBQUs7UUFDakIsT0FBTyxFQUFFLEVBQUU7UUFDWCxLQUFLLEVBQUUsRUFBRTtRQUNULGFBQWEsRUFBRSxLQUFLO0tBQ3JCO0lBRUQsTUFBTTtRQUNKLE1BQU0sUUFBUSxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxJQUFJO1NBQ2xCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxjQUFjLENBQUMsQ0FBTTtRQUNuQixJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osS0FBSyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSztTQUN0QixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsWUFBWTtRQUNWLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsRUFBRTtZQUN6QyxPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBVyxFQUFFLEVBQUU7WUFD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QUFDLENBQUE7SUFDSixDQUFDO0lBSUQsU0FBUztJQUNULENBQUM7Q0FFRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBBcGkgZnJvbSAnLi4vLi4vc2VydmljZS9hcGkuc2VydmljZSc7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XG5cbmltcG9ydCB7IElNeUFwcCB9IGZyb20gJy4uLy4uL2FwcCc7XG5jb25zdCBhcHAgPSBnZXRBcHA8SU15QXBwPigpXG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgbW90dG86ICfngrnlh7sg4oCc57yW6K+R4oCdIOS7peaehOW7uicsXG4gICAgdXNlckluZm86IHt9LFxuICAgIGhhc1VzZXJJbmZvOiBmYWxzZSxcbiAgICBjYW5JVXNlOiB3eC5jYW5JVXNlKCdidXR0b24ub3Blbi10eXBlLmdldFVzZXJJbmZvJyksXG4gICAgc21zRGlzYWJsZTogZmFsc2UsXG4gICAgc21zVGltZTogNTksXG4gICAgcGhvbmU6ICcnLFxuICAgIHN1Ym1pdERpc2FibGU6IGZhbHNlLFxuICB9LFxuICBcbiAgb25Mb2FkKCkge1xuICAgIGNvbnN0IHVzZXJJbmZvID0gd3guZ2V0U3RvcmFnZVN5bmMoXCJ1c2VySW5mb1wiKTtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIHVzZXJJbmZvOiB1c2VySW5mbyxcbiAgICAgIGhhc1VzZXJJbmZvOiB0cnVlLFxuICAgIH0pO1xuICB9LFxuXG4gIGJpbmRQaG9uZUlucHV0KGU6IGFueSkge1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgcGhvbmU6IGUuZGV0YWlsLnZhbHVlXG4gICAgfSlcbiAgfSxcblxuICBnZXRQaG9uZUNvZGUoKTogYW55IHtcbiAgICBjb25zdCB7IHBob25lIH0gPSB0aGlzLmRhdGE7XG4gICAgaWYgKCF1dGlscy52YWxpZGF0ZUVtcHR5KHBob25lLCAn6K+36L6T5YWl5omL5py65Y+3JykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgQXBpLnNlbmRTbXMoeyBwaG9uZSB9KS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgaWYgKHJlc3VsdC5jb2RlID09PSAyMDApIHtcbiAgICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgICAgc21zRGlzYWJsZTogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBzbXNUaW1lID0gNTk7XG4gICAgICAgIGNvbnN0IHNtc0ludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgIGlmIChzbXNUaW1lID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgICAgICAgc21zRGlzYWJsZTogZmFsc2UsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChzbXNJbnRlcnZhbCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHNtc1RpbWUtLTtcbiAgICAgICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgICAgIHNtc1RpbWUsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sIDEwMDApXG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgZ29SZWdpc3RlcigpOiB2b2lkIHtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogJy4uL3JlZ2lzdGVycGhvbmUvcmVnaXN0ZXJwaG9uZSdcbiAgICB9KVxuICB9LFxuXG4gIGdvSG9tZSgpOiB2b2lkIHtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogJy4uL2hvbWUvaG9tZSdcbiAgICB9KVxuICB9LFxuXG4gIC8qKiBcbiAgICog77yI5pyq5o6I5p2D77yJ5omL5Yqo5ZSk6LW35o6I5p2DXG4gICAqL1xuICBnZXRVc2VySW5mbyhlOiBhbnkpIHtcbiAgICBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyA9IGUuZGV0YWlsLnVzZXJJbmZvXG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICB1c2VySW5mbzogZS5kZXRhaWwudXNlckluZm8sXG4gICAgICBoYXNVc2VySW5mbzogdHJ1ZVxuICAgIH0pXG4gICAgdGhpcy5Jc0ZpcnN0VGltZSgpID8gdGhpcy5nb1JlZ2lzdGVyKCkgOiB0aGlzLmdvSG9tZSgpO1xuICB9LFxuXG4gIC8qKiDmmK/lkKbpppbmrKEgKi9cbiAgSXNGaXJzdFRpbWUoKTogQm9vbGVhbiB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH0sXG5cbiAganVtcE92ZXIoKTogdm9pZCB7XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6ICcuLi9ob21lL2hvbWUnLFxuICAgIH0pXG4gIH0sXG5cbiAgbmV4dCgpOiB2b2lkIHtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogJy4uL21hdGNoaW5nL21hdGNoaW5nJyxcbiAgICB9KVxuICB9LFxuICAgXG4gIGZvcm1TdWJtaXQoZTogYW55KTogYW55IHtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIHN1Ym1pdERpc2FibGU6IHRydWVcbiAgICB9KTsgXG4gICAgY29uc3QgcGFyYW1zID0gZS5kZXRhaWwudmFsdWVcbiAgICBpZiAoIXV0aWxzLnZhbGlkYXRlRW1wdHkocGFyYW1zLnBob25lLCAn6K+36L6T5YWl5omL5py65Y+3JykgfHxcbiAgICAgICF1dGlscy52YWxpZGF0ZUVtcHR5KHBhcmFtcy5jb2RlLCAn6K+36L6T5YWl6aqM6K+B56CBJykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgQXBpLmFkZFBob25lKHBhcmFtcykudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICBzdWJtaXREaXNhYmxlOiB0cnVlXG4gICAgICB9KTsgIFxuICAgICAgaWYgKHJlc3VsdC5jb2RlID09PSAyMDApIHtcbiAgICAgICAgd3guc3dpdGNoVGFiKHtcbiAgICAgICAgICB1cmw6ICcuLi9ob21lL2hvbWUnLFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgIHN1Ym1pdERpc2FibGU6IGZhbHNlXG4gICAgICAgIH0pOyBcbiAgICAgICAgdXRpbHMuc2hvd01vZGFsKHJlc3VsdC5tZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuXG4gIC8vIGdldFVzZXJJbmZvXG5cbiAgZm9ybVJlc2V0KCk6IHZvaWQge1xuICB9XG4gIFxufSlcbiJdfQ==