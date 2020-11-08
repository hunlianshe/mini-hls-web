"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Api = require("../../../service/api.service");
const utils = require("../../../utils/utils");
const app = getApp();
Page({
    data: {
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse("button.open-type.getUserInfo"),
        smsDisable: false,
        smsTime: 59,
        phone: "",
        submitDisable: false,
        totalMoney: 0,
    },
    onLoad() {
        console.log(`userinfo: `, app.globalData.userInfo);
        const userInfo = wx.getStorageSync("userInfo");
        this.setData({
            userInfo: app.globalData.userInfo,
            totalMoney: userInfo.coin,
            hasUserInfo: true,
        });
    },
    bindPhoneInput(e) {
        this.setData({
            phone: e.detail.value,
        });
    },
    getPhoneCode() {
        const { phone } = this.data;
        if (!utils.validateEmpty(phone, "请输入手机号")) {
            return false;
        }
    },
    goRegister() {
        wx.navigateTo({
            url: "../registerphone/registerphone",
        });
    },
    goHome() {
        wx.navigateTo({
            url: "../home/home",
        });
    },
    getUserInfo(e) {
        app.globalData.userInfo = e.detail.userInfo;
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true,
        });
        this.IsFirstTime() ? this.goRegister() : this.goHome();
    },
    IsFirstTime() {
        return false;
    },
    jumpOver() {
        wx.navigateTo({
            url: "../home/home",
        });
    },
    next() {
        wx.navigateTo({
            url: "../matching/matching",
        });
    },
    formSubmit(e) {
        this.setData({
            submitDisable: true,
        });
        const params = e.detail.value;
        if (!utils.validateEmpty(params.money, "请输入充值金额")) {
            return false;
        }
        Api.rechargeMoney(Object.assign({}, params, { money: +params.money })).then((result) => {
            console.log(`recharge money request:`, result);
            this.setData({
                submitDisable: true,
            });
            this.callWxForPay(result.data);
        });
    },
    callWxForPay(data) {
        const _this = this;
        wx.requestPayment({
            timeStamp: data.timeStamp,
            nonceStr: data.nonceStr,
            package: "prepay_id=" + data.prepayId,
            signType: "MD5",
            paySign: data.paySign,
            success(res) {
                console.log(`付款成功: `, res);
            },
            fail(res) {
                console.log(`付款失败: `, res);
            },
            complete(res) {
                console.log(`付款结束complete: `, res);
                Api.checkOrderStatus(data.orderNum).then((result) => {
                    if (result && result.code === 200) {
                        console.log(`check order result`);
                        utils.showModelAction("支付成功", () => {
                            wx.navigateBack({
                                delta: 1,
                            });
                        });
                        _this.setData({
                            submitDisable: false,
                        });
                    }
                    else {
                        _this.setData({
                            submitDisable: false,
                        });
                        utils.showModal("支付失败", result.message);
                    }
                });
            },
        });
    },
    formReset() { },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjaGFyZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZWNoYXJnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG9EQUFvRDtBQUNwRCw4Q0FBOEM7QUFHOUMsTUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFVLENBQUM7QUFFN0IsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFLEVBQUU7UUFDWixXQUFXLEVBQUUsS0FBSztRQUNsQixPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQztRQUNuRCxVQUFVLEVBQUUsS0FBSztRQUNqQixPQUFPLEVBQUUsRUFBRTtRQUNYLEtBQUssRUFBRSxFQUFFO1FBQ1QsYUFBYSxFQUFFLEtBQUs7UUFDcEIsVUFBVSxFQUFFLENBQUM7S0FDZDtJQUVELE1BQU07UUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25ELE1BQU0sUUFBUSxHQUFRLEVBQUUsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLFFBQVEsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVE7WUFDakMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxJQUFJO1lBQ3pCLFdBQVcsRUFBRSxJQUFJO1NBQ2xCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxjQUFjLENBQUMsQ0FBTTtRQUNuQixJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osS0FBSyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSztTQUN0QixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsWUFBWTtRQUNWLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsRUFB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QUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssR0FBRyxFQUFFO3dCQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7d0JBS2xDLEtBQUssQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRTs0QkFDakMsRUFBRSxDQUFDLFlBQVksQ0FBQztnQ0FDZCxLQUFLLEVBQUUsQ0FBQzs2QkFDVCxDQUFDLENBQUM7d0JBQ0wsQ0FBQyxDQUFDLENBQUM7d0JBQ0gsS0FBSyxDQUFDLE9BQVEsQ0FBQzs0QkFDYixhQUFhLEVBQUUsS0FBSzt5QkFDckIsQ0FBQyxDQUFDO3FCQUNKO3lCQUFNO3dCQUNMLEtBQUssQ0FBQyxPQUFRLENBQUM7NEJBQ2IsYUFBYSxFQUFFLEtBQUs7eUJBQ3JCLENBQUMsQ0FBQzt3QkFDSCxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7cUJBQ3pDO2dCQUNILENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxTQUFTLEtBQVUsQ0FBQztDQUNyQixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBBcGkgZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2UvYXBpLnNlcnZpY2VcIjtcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gXCIuLi8uLi8uLi91dGlscy91dGlsc1wiO1xuXG5pbXBvcnQgeyBJTXlBcHAgfSBmcm9tIFwiLi4vLi4vLi4vYXBwXCI7XG5jb25zdCBhcHAgPSBnZXRBcHA8SU15QXBwPigpO1xuXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIHVzZXJJbmZvOiB7fSxcbiAgICBoYXNVc2VySW5mbzogZmFsc2UsXG4gICAgY2FuSVVzZTogd3guY2FuSVVzZShcImJ1dHRvbi5vcGVuLXR5cGUuZ2V0VXNlckluZm9cIiksXG4gICAgc21zRGlzYWJsZTogZmFsc2UsXG4gICAgc21zVGltZTogNTksXG4gICAgcGhvbmU6IFwiXCIsXG4gICAgc3VibWl0RGlzYWJsZTogZmFsc2UsXG4gICAgdG90YWxNb25leTogMCxcbiAgfSxcblxuICBvbkxvYWQoKSB7XG4gICAgY29uc29sZS5sb2coYHVzZXJpbmZvOiBgLCBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyk7XG4gICAgY29uc3QgdXNlckluZm86IGFueSA9IHd4LmdldFN0b3JhZ2VTeW5jKFwidXNlckluZm9cIik7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICB1c2VySW5mbzogYXBwLmdsb2JhbERhdGEudXNlckluZm8sXG4gICAgICB0b3RhbE1vbmV5OiB1c2VySW5mby5jb2luLFxuICAgICAgaGFzVXNlckluZm86IHRydWUsXG4gICAgfSk7XG4gIH0sXG5cbiAgYmluZFBob25lSW5wdXQoZTogYW55KSB7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBwaG9uZTogZS5kZXRhaWwudmFsdWUsXG4gICAgfSk7XG4gIH0sXG5cbiAgZ2V0UGhvbmVDb2RlKCk6IGFueSB7XG4gICAgY29uc3QgeyBwaG9uZSB9ID0gdGhpcy5kYXRhO1xuICAgIGlmICghdXRpbHMudmFsaWRhdGVFbXB0eShwaG9uZSwgXCLor7fovpPlhaXmiYvmnLrlj7dcIikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0sXG5cbiAgZ29SZWdpc3RlcigpOiB2b2lkIHtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogXCIuLi9yZWdpc3RlcnBob25lL3JlZ2lzdGVycGhvbmVcIixcbiAgICB9KTtcbiAgfSxcblxuICBnb0hvbWUoKTogdm9pZCB7XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6IFwiLi4vaG9tZS9ob21lXCIsXG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIO+8iOacquaOiOadg++8ieaJi+WKqOWUpOi1t+aOiOadg1xuICAgKi9cbiAgZ2V0VXNlckluZm8oZTogYW55KSB7XG4gICAgYXBwLmdsb2JhbERhdGEudXNlckluZm8gPSBlLmRldGFpbC51c2VySW5mbztcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIHVzZXJJbmZvOiBlLmRldGFpbC51c2VySW5mbyxcbiAgICAgIGhhc1VzZXJJbmZvOiB0cnVlLFxuICAgIH0pO1xuICAgIHRoaXMuSXNGaXJzdFRpbWUoKSA/IHRoaXMuZ29SZWdpc3RlcigpIDogdGhpcy5nb0hvbWUoKTtcbiAgfSxcblxuICAvKiog5piv5ZCm6aaW5qyhICovXG4gIElzRmlyc3RUaW1lKCk6IEJvb2xlYW4ge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSxcblxuICBqdW1wT3ZlcigpOiB2b2lkIHtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogXCIuLi9ob21lL2hvbWVcIixcbiAgICB9KTtcbiAgfSxcblxuICBuZXh0KCk6IHZvaWQge1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiBcIi4uL21hdGNoaW5nL21hdGNoaW5nXCIsXG4gICAgfSk7XG4gIH0sXG5cbiAgZm9ybVN1Ym1pdChlOiBhbnkpOiBhbnkge1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgc3VibWl0RGlzYWJsZTogdHJ1ZSxcbiAgICB9KTtcbiAgICBjb25zdCBwYXJhbXMgPSBlLmRldGFpbC52YWx1ZTtcbiAgICBpZiAoIXV0aWxzLnZhbGlkYXRlRW1wdHkocGFyYW1zLm1vbmV5LCBcIuivt+i+k+WFpeWFheWAvOmHkeminVwiKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyBUT0RPXG4gICAgQXBpLnJlY2hhcmdlTW9uZXkoe1xuICAgICAgLi4ucGFyYW1zLFxuICAgICAgbW9uZXk6ICtwYXJhbXMubW9uZXksXG4gICAgfSkudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGByZWNoYXJnZSBtb25leSByZXF1ZXN0OmAsIHJlc3VsdCk7XG4gICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgc3VibWl0RGlzYWJsZTogdHJ1ZSxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5jYWxsV3hGb3JQYXkocmVzdWx0LmRhdGEpO1xuICAgICAgLy8gaWYgKHJlc3VsdC5jb2RlID09PSAyMDApIHtcbiAgICAgIC8vICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAvLyAgICAgdXJsOiAnLi4vbWF0Y2hpbmcvbWF0Y2hpbmcnLFxuICAgICAgLy8gICB9KTtcbiAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAvLyAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgLy8gICAgIHN1Ym1pdERpc2FibGU6IGZhbHNlXG4gICAgICAvLyAgIH0pO1xuICAgICAgLy8gICB1dGlscy5zaG93TW9kYWwocmVzdWx0Lm1lc3NhZ2UpO1xuICAgICAgLy8gfVxuICAgIH0pO1xuICB9LFxuXG4gIGNhbGxXeEZvclBheShkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG4gICAgd3gucmVxdWVzdFBheW1lbnQoe1xuICAgICAgdGltZVN0YW1wOiBkYXRhLnRpbWVTdGFtcCxcbiAgICAgIG5vbmNlU3RyOiBkYXRhLm5vbmNlU3RyLFxuICAgICAgLy8gcGFja2FnZTogZGF0YS5wYWNrYWdlLFxuICAgICAgcGFja2FnZTogXCJwcmVwYXlfaWQ9XCIgKyBkYXRhLnByZXBheUlkLFxuICAgICAgc2lnblR5cGU6IFwiTUQ1XCIsXG4gICAgICBwYXlTaWduOiBkYXRhLnBheVNpZ24sXG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICBjb25zb2xlLmxvZyhg5LuY5qy+5oiQ5YqfOiBgLCByZXMpO1xuICAgICAgfSxcbiAgICAgIGZhaWwocmVzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGDku5jmrL7lpLHotKU6IGAsIHJlcyk7XG4gICAgICB9LFxuICAgICAgY29tcGxldGUocmVzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGDku5jmrL7nu5PmnZ9jb21wbGV0ZTogYCwgcmVzKTtcbiAgICAgICAgLy8g5LuY5qy+5oiQ5Yqf55u05o6l5pu05pawXG4gICAgICAgIEFwaS5jaGVja09yZGVyU3RhdHVzKGRhdGEub3JkZXJOdW0pLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuY29kZSA9PT0gMjAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgY2hlY2sgb3JkZXIgcmVzdWx0YCk7XG4gICAgICAgICAgICAvLyDot7PovazorqLljZXor6bmg4VcbiAgICAgICAgICAgIC8vIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgLy8gICB1cmw6IGAuLi8uLi8uLi9wYWdlcy9teUhvbWUvbXlIb21lYCxcbiAgICAgICAgICAgIC8vIH0pXG4gICAgICAgICAgICB1dGlscy5zaG93TW9kZWxBY3Rpb24oXCLmlK/ku5jmiJDlip9cIiwgKCkgPT4ge1xuICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgICAgICAgIGRlbHRhOiAxLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgX3RoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgICAgICBzdWJtaXREaXNhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfdGhpcy5zZXREYXRhISh7XG4gICAgICAgICAgICAgIHN1Ym1pdERpc2FibGU6IGZhbHNlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB1dGlscy5zaG93TW9kYWwoXCLmlK/ku5jlpLHotKVcIiwgcmVzdWx0Lm1lc3NhZ2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9LFxuXG4gIGZvcm1SZXNldCgpOiB2b2lkIHt9LFxufSk7XG4iXX0=