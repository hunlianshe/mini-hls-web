"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Api = require("../../../service/api.service");
const utils = require("../../../utils/utils");
const app = getApp();
Page({
    data: {
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        smsDisable: false,
        smsTime: 59,
        phone: '',
        submitDisable: false,
        totalMoney: 0,
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
        if (!utils.validateEmpty(params.money, '请输入充值金额')) {
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
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjaGFyZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZWNoYXJnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG9EQUFvRDtBQUNwRCw4Q0FBOEM7QUFHOUMsTUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFVLENBQUE7QUFFNUIsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFLEVBQUU7UUFDWixXQUFXLEVBQUUsS0FBSztRQUNsQixPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQztRQUNuRCxVQUFVLEVBQUUsS0FBSztRQUNqQixPQUFPLEVBQUUsRUFBRTtRQUNYLEtBQUssRUFBRSxFQUFFO1FBQ1QsYUFBYSxFQUFFLEtBQUs7UUFDcEIsVUFBVSxFQUFFLENBQUM7S0FDZDtJQUVELE1BQU07UUFDSixJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osUUFBUSxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUTtZQUNqQyxXQUFXLEVBQUUsSUFBSTtTQUNsQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsY0FBYyxDQUFDLENBQU07UUFDbkIsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLEtBQUssRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDdEIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELFlBQVk7UUFDVixNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEVBQUU7WUFDekMsT0FBTyxLQUFLLENBQUM7U0FDZDtJQUNILENBQUM7SUFFRCxVQUFVO1FBQ1IsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxnQ0FBZ0M7U0FDdEMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELE1BQU07UUFDSixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLGNBQWM7U0FDcEIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUtELFdBQVcsQ0FBQyxDQUFNO1FBQ2hCLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFBO1FBQzNDLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixRQUFRLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRO1lBQzNCLFdBQVcsRUFBRSxJQUFJO1NBQ2xCLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDekQsQ0FBQztJQUdELFdBQVc7UUFDVCxPQUFPLEtBQUssQ0FBQTtJQUNkLENBQUM7SUFFRCxRQUFRO1FBQ04sRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxjQUFjO1NBQ3BCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxJQUFJO1FBQ0YsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxzQkFBc0I7U0FDNUIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELFVBQVUsQ0FBQyxDQUFNO1FBQ2YsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLGFBQWEsRUFBRSxJQUFJO1NBQ3BCLENBQUMsQ0FBQztRQUNILE1BQU0sTUFBTSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFBO1FBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLEVBQUU7WUFDakQsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBVyxFQUFFLEVBQUU7WUFDeEMsSUFBSSxDQUFDLE9BQVEsQ0FBQztnQkFDWixhQUFhLEVBQUUsSUFBSTthQUNwQixDQUFDLENBQUM7WUFDSCxJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssR0FBRyxFQUFFO2dCQUN2QixFQUFFLENBQUMsVUFBVSxDQUFDO29CQUNaLEdBQUcsRUFBRSxzQkFBc0I7aUJBQzVCLENBQUMsQ0FBQzthQUNKO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxPQUFRLENBQUM7b0JBQ1osYUFBYSxFQUFFLEtBQUs7aUJBQ3JCLENBQUMsQ0FBQztnQkFDSCxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNqQztRQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELFNBQVM7SUFDVCxDQUFDO0NBRUYsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgQXBpIGZyb20gJy4uLy4uLy4uL3NlcnZpY2UvYXBpLnNlcnZpY2UnO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vLi4vLi4vdXRpbHMvdXRpbHMnO1xuXG5pbXBvcnQgeyBJTXlBcHAgfSBmcm9tICcuLi8uLi8uLi9hcHAnO1xuY29uc3QgYXBwID0gZ2V0QXBwPElNeUFwcD4oKVxuXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIHVzZXJJbmZvOiB7fSxcbiAgICBoYXNVc2VySW5mbzogZmFsc2UsXG4gICAgY2FuSVVzZTogd3guY2FuSVVzZSgnYnV0dG9uLm9wZW4tdHlwZS5nZXRVc2VySW5mbycpLFxuICAgIHNtc0Rpc2FibGU6IGZhbHNlLFxuICAgIHNtc1RpbWU6IDU5LFxuICAgIHBob25lOiAnJyxcbiAgICBzdWJtaXREaXNhYmxlOiBmYWxzZSxcbiAgICB0b3RhbE1vbmV5OiAwLFxuICB9LFxuICBcbiAgb25Mb2FkKCkge1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgdXNlckluZm86IGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvLFxuICAgICAgaGFzVXNlckluZm86IHRydWUsXG4gICAgfSk7XG4gIH0sXG5cbiAgYmluZFBob25lSW5wdXQoZTogYW55KSB7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBwaG9uZTogZS5kZXRhaWwudmFsdWVcbiAgICB9KVxuICB9LFxuXG4gIGdldFBob25lQ29kZSgpOiBhbnkge1xuICAgIGNvbnN0IHsgcGhvbmUgfSA9IHRoaXMuZGF0YTtcbiAgICBpZiAoIXV0aWxzLnZhbGlkYXRlRW1wdHkocGhvbmUsICfor7fovpPlhaXmiYvmnLrlj7cnKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSxcblxuICBnb1JlZ2lzdGVyKCk6IHZvaWQge1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiAnLi4vcmVnaXN0ZXJwaG9uZS9yZWdpc3RlcnBob25lJ1xuICAgIH0pXG4gIH0sXG5cbiAgZ29Ib21lKCk6IHZvaWQge1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiAnLi4vaG9tZS9ob21lJ1xuICAgIH0pXG4gIH0sXG5cbiAgLyoqIFxuICAgKiDvvIjmnKrmjojmnYPvvInmiYvliqjllKTotbfmjojmnYNcbiAgICovXG4gIGdldFVzZXJJbmZvKGU6IGFueSkge1xuICAgIGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gZS5kZXRhaWwudXNlckluZm9cbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIHVzZXJJbmZvOiBlLmRldGFpbC51c2VySW5mbyxcbiAgICAgIGhhc1VzZXJJbmZvOiB0cnVlXG4gICAgfSlcbiAgICB0aGlzLklzRmlyc3RUaW1lKCkgPyB0aGlzLmdvUmVnaXN0ZXIoKSA6IHRoaXMuZ29Ib21lKCk7XG4gIH0sXG5cbiAgLyoqIOaYr+WQpummluasoSAqL1xuICBJc0ZpcnN0VGltZSgpOiBCb29sZWFuIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfSxcblxuICBqdW1wT3ZlcigpOiB2b2lkIHtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogJy4uL2hvbWUvaG9tZScsXG4gICAgfSlcbiAgfSxcblxuICBuZXh0KCk6IHZvaWQge1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiAnLi4vbWF0Y2hpbmcvbWF0Y2hpbmcnLFxuICAgIH0pXG4gIH0sXG4gICBcbiAgZm9ybVN1Ym1pdChlOiBhbnkpOiBhbnkge1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgc3VibWl0RGlzYWJsZTogdHJ1ZVxuICAgIH0pOyBcbiAgICBjb25zdCBwYXJhbXMgPSBlLmRldGFpbC52YWx1ZVxuICAgIGlmICghdXRpbHMudmFsaWRhdGVFbXB0eShwYXJhbXMubW9uZXksICfor7fovpPlhaXlhYXlgLzph5Hpop0nKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyBUT0RPXG4gICAgQXBpLmFkZFBob25lKHBhcmFtcykudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICBzdWJtaXREaXNhYmxlOiB0cnVlXG4gICAgICB9KTsgIFxuICAgICAgaWYgKHJlc3VsdC5jb2RlID09PSAyMDApIHtcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiAnLi4vbWF0Y2hpbmcvbWF0Y2hpbmcnLFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgIHN1Ym1pdERpc2FibGU6IGZhbHNlXG4gICAgICAgIH0pOyBcbiAgICAgICAgdXRpbHMuc2hvd01vZGFsKHJlc3VsdC5tZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuXG4gIGZvcm1SZXNldCgpOiB2b2lkIHtcbiAgfVxuICBcbn0pXG4iXX0=