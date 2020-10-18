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
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjaGFyZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZWNoYXJnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG9EQUFvRDtBQUNwRCw4Q0FBOEM7QUFHOUMsTUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFVLENBQUE7QUFFNUIsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFLEVBQUU7UUFDWixXQUFXLEVBQUUsS0FBSztRQUNsQixPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQztRQUNuRCxVQUFVLEVBQUUsS0FBSztRQUNqQixPQUFPLEVBQUUsRUFBRTtRQUNYLEtBQUssRUFBRSxFQUFFO1FBQ1QsYUFBYSxFQUFFLEtBQUs7S0FDckI7SUFFRCxNQUFNO1FBQ0osSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLFFBQVEsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVE7WUFDakMsV0FBVyxFQUFFLElBQUk7U0FDbEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGNBQWMsQ0FBQyxDQUFNO1FBQ25CLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixLQUFLLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQ3RCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxZQUFZO1FBQ1YsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxFQUFFO1lBQ3pDLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7SUFDSCxDQUFDO0lBRUQsVUFBVTtRQUNSLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsZ0NBQWdDO1NBQ3RDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxNQUFNO1FBQ0osRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxjQUFjO1NBQ3BCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFLRCxXQUFXLENBQUMsQ0FBTTtRQUNoQixHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQTtRQUMzQyxJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osUUFBUSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUTtZQUMzQixXQUFXLEVBQUUsSUFBSTtTQUNsQixDQUFDLENBQUE7UUFDRixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3pELENBQUM7SUFHRCxXQUFXO1FBQ1QsT0FBTyxLQUFLLENBQUE7SUFDZCxDQUFDO0lBRUQsUUFBUTtRQUNOLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsY0FBYztTQUNwQixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsSUFBSTtRQUNGLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsc0JBQXNCO1NBQzVCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxVQUFVLENBQUMsQ0FBTTtRQUNmLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixhQUFhLEVBQUUsSUFBSTtTQUNwQixDQUFDLENBQUM7UUFDSCxNQUFNLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQTtRQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQztZQUM5QyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsRUFBRTtZQUM3QyxPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFXLEVBQUUsRUFBRTtZQUN4QyxJQUFJLENBQUMsT0FBUSxDQUFDO2dCQUNaLGFBQWEsRUFBRSxJQUFJO2FBQ3BCLENBQUMsQ0FBQztZQUNILElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxHQUFHLEVBQUU7Z0JBQ3ZCLEVBQUUsQ0FBQyxVQUFVLENBQUM7b0JBQ1osR0FBRyxFQUFFLHNCQUFzQjtpQkFDNUIsQ0FBQyxDQUFDO2FBQ0o7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLE9BQVEsQ0FBQztvQkFDWixhQUFhLEVBQUUsS0FBSztpQkFDckIsQ0FBQyxDQUFDO2dCQUNILEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ2pDO1FBQ0gsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsU0FBUztJQUNULENBQUM7Q0FFRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBBcGkgZnJvbSAnLi4vLi4vLi4vc2VydmljZS9hcGkuc2VydmljZSc7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi8uLi8uLi91dGlscy91dGlscyc7XG5cbmltcG9ydCB7IElNeUFwcCB9IGZyb20gJy4uLy4uLy4uL2FwcCc7XG5jb25zdCBhcHAgPSBnZXRBcHA8SU15QXBwPigpXG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgdXNlckluZm86IHt9LFxuICAgIGhhc1VzZXJJbmZvOiBmYWxzZSxcbiAgICBjYW5JVXNlOiB3eC5jYW5JVXNlKCdidXR0b24ub3Blbi10eXBlLmdldFVzZXJJbmZvJyksXG4gICAgc21zRGlzYWJsZTogZmFsc2UsXG4gICAgc21zVGltZTogNTksXG4gICAgcGhvbmU6ICcnLFxuICAgIHN1Ym1pdERpc2FibGU6IGZhbHNlLFxuICB9LFxuICBcbiAgb25Mb2FkKCkge1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgdXNlckluZm86IGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvLFxuICAgICAgaGFzVXNlckluZm86IHRydWUsXG4gICAgfSk7XG4gIH0sXG5cbiAgYmluZFBob25lSW5wdXQoZTogYW55KSB7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBwaG9uZTogZS5kZXRhaWwudmFsdWVcbiAgICB9KVxuICB9LFxuXG4gIGdldFBob25lQ29kZSgpOiBhbnkge1xuICAgIGNvbnN0IHsgcGhvbmUgfSA9IHRoaXMuZGF0YTtcbiAgICBpZiAoIXV0aWxzLnZhbGlkYXRlRW1wdHkocGhvbmUsICfor7fovpPlhaXmiYvmnLrlj7cnKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSxcblxuICBnb1JlZ2lzdGVyKCk6IHZvaWQge1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiAnLi4vcmVnaXN0ZXJwaG9uZS9yZWdpc3RlcnBob25lJ1xuICAgIH0pXG4gIH0sXG5cbiAgZ29Ib21lKCk6IHZvaWQge1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiAnLi4vaG9tZS9ob21lJ1xuICAgIH0pXG4gIH0sXG5cbiAgLyoqIFxuICAgKiDvvIjmnKrmjojmnYPvvInmiYvliqjllKTotbfmjojmnYNcbiAgICovXG4gIGdldFVzZXJJbmZvKGU6IGFueSkge1xuICAgIGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gZS5kZXRhaWwudXNlckluZm9cbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIHVzZXJJbmZvOiBlLmRldGFpbC51c2VySW5mbyxcbiAgICAgIGhhc1VzZXJJbmZvOiB0cnVlXG4gICAgfSlcbiAgICB0aGlzLklzRmlyc3RUaW1lKCkgPyB0aGlzLmdvUmVnaXN0ZXIoKSA6IHRoaXMuZ29Ib21lKCk7XG4gIH0sXG5cbiAgLyoqIOaYr+WQpummluasoSAqL1xuICBJc0ZpcnN0VGltZSgpOiBCb29sZWFuIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfSxcblxuICBqdW1wT3ZlcigpOiB2b2lkIHtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogJy4uL2hvbWUvaG9tZScsXG4gICAgfSlcbiAgfSxcblxuICBuZXh0KCk6IHZvaWQge1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiAnLi4vbWF0Y2hpbmcvbWF0Y2hpbmcnLFxuICAgIH0pXG4gIH0sXG4gICBcbiAgZm9ybVN1Ym1pdChlOiBhbnkpOiBhbnkge1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgc3VibWl0RGlzYWJsZTogdHJ1ZVxuICAgIH0pOyBcbiAgICBjb25zdCBwYXJhbXMgPSBlLmRldGFpbC52YWx1ZVxuICAgIGlmICghdXRpbHMudmFsaWRhdGVFbXB0eShwYXJhbXMucGhvbmUsICfor7fovpPlhaXmiYvmnLrlj7cnKSB8fFxuICAgICAgIXV0aWxzLnZhbGlkYXRlRW1wdHkocGFyYW1zLmNvZGUsICfor7fovpPlhaXpqozor4HnoIEnKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBBcGkuYWRkUGhvbmUocGFyYW1zKS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgIHN1Ym1pdERpc2FibGU6IHRydWVcbiAgICAgIH0pOyAgXG4gICAgICBpZiAocmVzdWx0LmNvZGUgPT09IDIwMCkge1xuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICcuLi9tYXRjaGluZy9tYXRjaGluZycsXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgICAgc3VibWl0RGlzYWJsZTogZmFsc2VcbiAgICAgICAgfSk7IFxuICAgICAgICB1dGlscy5zaG93TW9kYWwocmVzdWx0Lm1lc3NhZ2UpO1xuICAgICAgfVxuICAgIH0pXG4gIH0sXG5cbiAgZm9ybVJlc2V0KCk6IHZvaWQge1xuICB9XG4gIFxufSlcbiJdfQ==