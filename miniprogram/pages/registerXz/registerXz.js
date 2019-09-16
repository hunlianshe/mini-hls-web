"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Api = require("../../service/api.service");
const app = getApp();
const constellationList = [
    {
        en: 'Aquarius',
        ch: '水瓶座',
        desc: '1月21日～2月19日'
    },
    {
        en: 'Aries',
        ch: '白羊座',
        desc: '3月21日～4月20日'
    },
    {
        en: 'Cancer',
        ch: '巨蟹座',
        desc: '6月22日～7月22日'
    },
    {
        en: 'Capricorn',
        ch: '摩羯座',
        desc: '12月22日～1月20日'
    },
    {
        en: 'Gemini',
        ch: '双子座',
        desc: '5月22日～6月21日'
    },
    {
        en: 'Leo',
        ch: '狮子座',
        desc: '7月23日～8月23日'
    },
    {
        en: 'Libra',
        ch: '天秤座',
        desc: '9月24日～10月23日'
    },
    {
        en: 'Pisces',
        ch: '双鱼座',
        desc: '2月20日～3月20日'
    },
    {
        en: 'Sagittarius',
        ch: '射手座',
        desc: '11月23日～12月21日'
    },
    {
        en: 'Scorpio',
        ch: '天蝎座',
        desc: '10月24日～11月22日'
    },
    {
        en: 'Taurus',
        ch: '金牛座',
        desc: '4月21～5月21日'
    },
    {
        en: 'Virgo',
        ch: '处女座',
        desc: '8月24日～9月23日'
    }
];
Page({
    data: {
        scene: '',
        constellation: '',
        constellationList: constellationList,
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
    next() {
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
    updateUser() {
        const user = {
            openid: app.globalData.userInfo.openid,
            constellation: this.data.constellation,
        };
        Api.updateUser(user).then((result) => {
            this.setData({
                submitDisable: true
            });
            if (result.code === 200) {
                setTimeout(() => {
                    wx.switchTab({
                        url: `../myHome/myHome`,
                    });
                }, 1000);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXJYei5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlZ2lzdGVyWHoudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBaUQ7QUFFakQsTUFBTSxHQUFHLEdBQVEsTUFBTSxFQUFVLENBQUM7QUFFbEMsTUFBTSxpQkFBaUIsR0FBRztJQUN4QjtRQUNFLEVBQUUsRUFBRSxVQUFVO1FBQ2QsRUFBRSxFQUFFLEtBQUs7UUFDVCxJQUFJLEVBQUUsYUFBYTtLQUNwQjtJQUNEO1FBQ0UsRUFBRSxFQUFFLE9BQU87UUFDWCxFQUFFLEVBQUUsS0FBSztRQUNULElBQUksRUFBRSxhQUFhO0tBQ3BCO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsUUFBUTtRQUNaLEVBQUUsRUFBRSxLQUFLO1FBQ1QsSUFBSSxFQUFFLGFBQWE7S0FDcEI7SUFDRDtRQUNFLEVBQUUsRUFBRSxXQUFXO1FBQ2YsRUFBRSxFQUFFLEtBQUs7UUFDVCxJQUFJLEVBQUUsY0FBYztLQUNyQjtJQUNEO1FBQ0UsRUFBRSxFQUFFLFFBQVE7UUFDWixFQUFFLEVBQUUsS0FBSztRQUNULElBQUksRUFBRSxhQUFhO0tBQ3BCO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsS0FBSztRQUNULEVBQUUsRUFBRSxLQUFLO1FBQ1QsSUFBSSxFQUFFLGFBQWE7S0FDcEI7SUFDRDtRQUNFLEVBQUUsRUFBRSxPQUFPO1FBQ1gsRUFBRSxFQUFFLEtBQUs7UUFDVCxJQUFJLEVBQUUsY0FBYztLQUNyQjtJQUNEO1FBQ0UsRUFBRSxFQUFFLFFBQVE7UUFDWixFQUFFLEVBQUUsS0FBSztRQUNULElBQUksRUFBRSxhQUFhO0tBQ3BCO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsYUFBYTtRQUNqQixFQUFFLEVBQUUsS0FBSztRQUNULElBQUksRUFBRSxlQUFlO0tBQ3RCO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsU0FBUztRQUNiLEVBQUUsRUFBRSxLQUFLO1FBQ1QsSUFBSSxFQUFFLGVBQWU7S0FDdEI7SUFDRDtRQUNFLEVB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QUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgQXBpIGZyb20gJy4uLy4uL3NlcnZpY2UvYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgSU15QXBwIH0gZnJvbSAnLi4vLi4vYXBwJztcbmNvbnN0IGFwcDogYW55ID0gZ2V0QXBwPElNeUFwcD4oKTtcblxuY29uc3QgY29uc3RlbGxhdGlvbkxpc3QgPSBbXG4gIHtcbiAgICBlbjogJ0FxdWFyaXVzJyxcbiAgICBjaDogJ+awtOeTtuW6pycsXG4gICAgZGVzYzogJzHmnIgyMeaXpe+9njLmnIgxOeaXpSdcbiAgfSxcbiAge1xuICAgIGVuOiAnQXJpZXMnLFxuICAgIGNoOiAn55m9576K5bqnJyxcbiAgICBkZXNjOiAnM+aciDIx5pel772eNOaciDIw5pelJ1xuICB9LFxuICB7XG4gICAgZW46ICdDYW5jZXInLFxuICAgIGNoOiAn5beo6J+55bqnJyxcbiAgICBkZXNjOiAnNuaciDIy5pel772eN+aciDIy5pelJ1xuICB9LFxuICB7XG4gICAgZW46ICdDYXByaWNvcm4nLFxuICAgIGNoOiAn5pGp576v5bqnJyxcbiAgICBkZXNjOiAnMTLmnIgyMuaXpe+9njHmnIgyMOaXpSdcbiAgfSxcbiAge1xuICAgIGVuOiAnR2VtaW5pJyxcbiAgICBjaDogJ+WPjOWtkOW6pycsXG4gICAgZGVzYzogJzXmnIgyMuaXpe+9njbmnIgyMeaXpSdcbiAgfSxcbiAge1xuICAgIGVuOiAnTGVvJyxcbiAgICBjaDogJ+eLruWtkOW6pycsXG4gICAgZGVzYzogJzfmnIgyM+aXpe+9njjmnIgyM+aXpSdcbiAgfSxcbiAge1xuICAgIGVuOiAnTGlicmEnLFxuICAgIGNoOiAn5aSp56ek5bqnJyxcbiAgICBkZXNjOiAnOeaciDI05pel772eMTDmnIgyM+aXpSdcbiAgfSxcbiAge1xuICAgIGVuOiAnUGlzY2VzJyxcbiAgICBjaDogJ+WPjOmxvOW6pycsXG4gICAgZGVzYzogJzLmnIgyMOaXpe+9njPmnIgyMOaXpSdcbiAgfSxcbiAge1xuICAgIGVuOiAnU2FnaXR0YXJpdXMnLFxuICAgIGNoOiAn5bCE5omL5bqnJyxcbiAgICBkZXNjOiAnMTHmnIgyM+aXpe+9njEy5pyIMjHml6UnXG4gIH0sXG4gIHtcbiAgICBlbjogJ1Njb3JwaW8nLFxuICAgIGNoOiAn5aSp6J2O5bqnJyxcbiAgICBkZXNjOiAnMTDmnIgyNOaXpe+9njEx5pyIMjLml6UnXG4gIH0sXG4gIHtcbiAgICBlbjogJ1RhdXJ1cycsXG4gICAgY2g6ICfph5HniZvluqcnLFxuICAgIGRlc2M6ICc05pyIMjHvvZ415pyIMjHml6UnXG4gIH0sXG4gIHtcbiAgICBlbjogJ1ZpcmdvJyxcbiAgICBjaDogJ+WkhOWls+W6pycsXG4gICAgZGVzYzogJzjmnIgyNOaXpe+9njnmnIgyM+aXpSdcbiAgfVxuXTtcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBzY2VuZTogJycsXG4gICAgY29uc3RlbGxhdGlvbjogJycsXG4gICAgY29uc3RlbGxhdGlvbkxpc3Q6IGNvbnN0ZWxsYXRpb25MaXN0LFxuICB9LFxuXG4gIG9uTG9hZDogZnVuY3Rpb24gKG9wdGlvbnM6IGFueSkge1xuICAgIGlmIChvcHRpb25zLnNjZW5lKSB7XG4gICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgc2NlbmU6IG9wdGlvbnMuc2NlbmUsXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAganVtcE92ZXIoKSB7XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6ICcuLi9ob21lL2hvbWUnLFxuICAgIH0pXG4gIH0sXG5cbiAgc2VsZWN0KGU6IGFueSkge1xuICAgIGNvbnN0IHsgY29uc3RlbGxhdGlvbiB9ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQ7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBjb25zdGVsbGF0aW9uLFxuICAgIH0pO1xuICB9LFxuXG4gIG5leHQoKSB7XG4gICAgY29uc29sZS5sb2coJy0tLT4nLCB0aGlzLmRhdGEuY29uc3RlbGxhdGlvbik7XG4gICAgQXBpLnVwZGF0ZVVzZXIoe1xuICAgICAgb3BlbmlkOiBhcHAuZ2xvYmFsRGF0YS51c2VySW5mby5vcGVuaWQsXG4gICAgICBjb25zdGVsbGF0aW9uOiB0aGlzLmRhdGEuY29uc3RlbGxhdGlvblxuICAgIH0pLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnZXN1bHQuY29kZScsIHJlc3VsdC5jb2RlKVxuICAgICAgaWYgKHJlc3VsdC5jb2RlID09PSAyMDApIHtcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5zY2VuZSA9PT0gJ2hvbWUnKSB7XG4gICAgICAgICAgd3guc3dpdGNoVGFiKHtcbiAgICAgICAgICAgIHVybDogJy4uL2hvbWUvaG9tZScsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJy4uL3JlZ2lzdGVySW5mby9yZWdpc3RlckluZm8nLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICB9LFxuXG4gIHVwZGF0ZVVzZXIoKSB7XG4gICAgY29uc3QgdXNlciA9IHtcbiAgICAgIG9wZW5pZDogYXBwLmdsb2JhbERhdGEudXNlckluZm8ub3BlbmlkLFxuICAgICAgY29uc3RlbGxhdGlvbjogdGhpcy5kYXRhLmNvbnN0ZWxsYXRpb24sXG4gICAgfSBhcyBhbnk7XG4gICAgQXBpLnVwZGF0ZVVzZXIodXNlcikudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICBzdWJtaXREaXNhYmxlOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIGlmIChyZXN1bHQuY29kZSA9PT0gMjAwKSB7XG4gICAgICAgIC8vIHV0aWxzLnNob3dNb2RhbCgn5pu05paw5oiQ5YqfJylcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgd3guc3dpdGNoVGFiKHtcbiAgICAgICAgICAgIHVybDogYC4uL215SG9tZS9teUhvbWVgLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliJ3mrKHmuLLmn5PlrozmiJBcbiAgICovXG4gIG9uUmVhZHk6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxuICAgKi9cbiAgb25TaG93OiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cbiAgICovXG4gIG9uSGlkZTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Y246L29XG4gICAqL1xuICBvblVubG9hZDogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXG4gICAqL1xuICBvblB1bGxEb3duUmVmcmVzaDogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxuICAgKi9cbiAgb25SZWFjaEJvdHRvbTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG59KSJdfQ==
