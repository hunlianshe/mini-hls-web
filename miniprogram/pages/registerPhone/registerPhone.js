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
                wx.navigateTo({
                    url: '../matching/matching',
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
        console.log('form发生了reset事件');
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXJQaG9uZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlZ2lzdGVyUGhvbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBaUQ7QUFDakQsMkNBQTJDO0FBRzNDLE1BQU0sR0FBRyxHQUFHLE1BQU0sRUFBVSxDQUFBO0FBRTVCLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLEtBQUssRUFBRSxhQUFhO1FBQ3BCLFFBQVEsRUFBRSxFQUFFO1FBQ1osV0FBVyxFQUFFLEtBQUs7UUFDbEIsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsOEJBQThCLENBQUM7UUFDbkQsVUFBVSxFQUFFLEtBQUs7UUFDakIsT0FBTyxFQUFFLEVBQUU7UUFDWCxLQUFLLEVBQUUsRUFBRTtRQUNULGFBQWEsRUFBRSxLQUFLO0tBQ3JCO0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixRQUFRLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRO1lBQ2pDLFdBQVcsRUFBRSxJQUFJO1NBQ2xCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxjQUFjLENBQUMsQ0FBTTtRQUNuQixJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osS0FBSyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSztTQUN0QixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsWUFBWTtRQUNWLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsRUFBRTtZQUN6QyxPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBVyxFQUFFLEVBQUU7WUFDMUMsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLEdBQUcsRUFB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QUFDO29CQUNaLGFBQWEsRUFBRSxLQUFLO2lCQUNyQixDQUFDLENBQUM7Z0JBQ0gsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDakM7UUFDSCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxTQUFTO1FBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO0lBQy9CLENBQUM7Q0FFRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBBcGkgZnJvbSAnLi4vLi4vc2VydmljZS9hcGkuc2VydmljZSc7XHJcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJztcclxuXHJcbmltcG9ydCB7IElNeUFwcCB9IGZyb20gJy4uLy4uL2FwcCc7XHJcbmNvbnN0IGFwcCA9IGdldEFwcDxJTXlBcHA+KClcclxuXHJcblBhZ2Uoe1xyXG4gIGRhdGE6IHtcclxuICAgIG1vdHRvOiAn54K55Ye7IOKAnOe8luivkeKAnSDku6XmnoTlu7onLFxyXG4gICAgdXNlckluZm86IHt9LFxyXG4gICAgaGFzVXNlckluZm86IGZhbHNlLFxyXG4gICAgY2FuSVVzZTogd3guY2FuSVVzZSgnYnV0dG9uLm9wZW4tdHlwZS5nZXRVc2VySW5mbycpLFxyXG4gICAgc21zRGlzYWJsZTogZmFsc2UsXHJcbiAgICBzbXNUaW1lOiA1OSxcclxuICAgIHBob25lOiAnJyxcclxuICAgIHN1Ym1pdERpc2FibGU6IGZhbHNlLFxyXG4gIH0sXHJcbiAgXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgIHVzZXJJbmZvOiBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyxcclxuICAgICAgaGFzVXNlckluZm86IHRydWUsXHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBiaW5kUGhvbmVJbnB1dChlOiBhbnkpIHtcclxuICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICBwaG9uZTogZS5kZXRhaWwudmFsdWVcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgZ2V0UGhvbmVDb2RlKCk6IGFueSB7XHJcbiAgICBjb25zdCB7IHBob25lIH0gPSB0aGlzLmRhdGE7XHJcbiAgICBpZiAoIXV0aWxzLnZhbGlkYXRlRW1wdHkocGhvbmUsICfor7fovpPlhaXmiYvmnLrlj7cnKSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBBcGkuc2VuZFNtcyh7IHBob25lIH0pLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XHJcbiAgICAgIGlmIChyZXN1bHQuY29kZSA9PT0gMjAwKSB7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgICBzbXNEaXNhYmxlOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxldCBzbXNUaW1lID0gNTk7XHJcbiAgICAgICAgY29uc3Qgc21zSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICBpZiAoc21zVGltZSA9PT0gMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc21zVGltZScsIHNtc1RpbWUpO1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICAgICAgICBzbXNEaXNhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChzbXNJbnRlcnZhbCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNtc1RpbWUtLTtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgICAgICBzbXNUaW1lLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSwgMTAwMClcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgZ29SZWdpc3RlcigpOiB2b2lkIHtcclxuICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICB1cmw6ICcuLi9yZWdpc3RlcnBob25lL3JlZ2lzdGVycGhvbmUnXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIGdvSG9tZSgpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKCdnb0hvbWUnKTtcclxuICAgIC8vIHd4LnN3aXRjaFRhYih7XHJcbiAgICAvLyAgIHVybDogJy4uL2hvbWUvaG9tZSdcclxuICAgIC8vIH0pXHJcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgdXJsOiAnLi4vaG9tZS9ob21lJ1xyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICAvKiogXHJcbiAgICog77yI5pyq5o6I5p2D77yJ5omL5Yqo5ZSk6LW35o6I5p2DXHJcbiAgICovXHJcbiAgZ2V0VXNlckluZm8oZTogYW55KSB7XHJcbiAgICBjb25zb2xlLmxvZygnZ2V0VXNlckluZm86JywgZSk7XHJcbiAgICBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyA9IGUuZGV0YWlsLnVzZXJJbmZvXHJcbiAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgdXNlckluZm86IGUuZGV0YWlsLnVzZXJJbmZvLFxyXG4gICAgICBoYXNVc2VySW5mbzogdHJ1ZVxyXG4gICAgfSlcclxuICAgIHRoaXMuSXNGaXJzdFRpbWUoKSA/IHRoaXMuZ29SZWdpc3RlcigpIDogdGhpcy5nb0hvbWUoKTtcclxuICB9LFxyXG5cclxuICAvKiog5piv5ZCm6aaW5qyhICovXHJcbiAgSXNGaXJzdFRpbWUoKTogQm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9LFxyXG5cclxuICBqdW1wT3ZlcigpOiB2b2lkIHtcclxuICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICB1cmw6ICcuLi9ob21lL2hvbWUnLFxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICBuZXh0KCk6IHZvaWQge1xyXG4gICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgIHVybDogJy4uL21hdGNoaW5nL21hdGNoaW5nJyxcclxuICAgIH0pXHJcbiAgfSxcclxuICAgXHJcbiAgZm9ybVN1Ym1pdChlOiBhbnkpOiBhbnkge1xyXG4gICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgIHN1Ym1pdERpc2FibGU6IHRydWVcclxuICAgIH0pOyBcclxuICAgIGNvbnN0IHBhcmFtcyA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICBpZiAoIXV0aWxzLnZhbGlkYXRlRW1wdHkocGFyYW1zLnBob25lLCAn6K+36L6T5YWl5omL5py65Y+3JykgfHxcclxuICAgICAgIXV0aWxzLnZhbGlkYXRlRW1wdHkocGFyYW1zLmNvZGUsICfor7fovpPlhaXpqozor4HnoIEnKSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBBcGkuYWRkUGhvbmUocGFyYW1zKS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xyXG4gICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICBzdWJtaXREaXNhYmxlOiB0cnVlXHJcbiAgICAgIH0pOyAgXHJcbiAgICAgIGlmIChyZXN1bHQuY29kZSA9PT0gMjAwKSB7XHJcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICB1cmw6ICcuLi9tYXRjaGluZy9tYXRjaGluZycsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgICBzdWJtaXREaXNhYmxlOiBmYWxzZVxyXG4gICAgICAgIH0pOyBcclxuICAgICAgICB1dGlscy5zaG93TW9kYWwocmVzdWx0Lm1lc3NhZ2UpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIGZvcm1SZXNldCgpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKCdmb3Jt5Y+R55Sf5LqGcmVzZXTkuovku7YnKVxyXG4gIH1cclxuICBcclxufSlcclxuIl19