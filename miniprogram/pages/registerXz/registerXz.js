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
        this.setData({
            scene: options.scene,
        });
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
        if (this.data.scene === 'home') {
            wx.switchTab({
                url: '../home/home',
            });
            return;
        }
        wx.navigateTo({
            url: '../registerInfo/registerInfo',
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
    onPullDownRefresh: function () {
    },
    onReachBottom: function () {
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXJYei5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlZ2lzdGVyWHoudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBaUQ7QUFFakQsTUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFVLENBQUM7QUFFN0IsTUFBTSxpQkFBaUIsR0FBRztJQUN4QjtRQUNFLEVBQUUsRUFBRSxVQUFVO1FBQ2QsRUFBRSxFQUFFLEtBQUs7UUFDVCxJQUFJLEVBQUUsYUFBYTtLQUNwQjtJQUNEO1FBQ0UsRUFBRSxFQUFFLE9BQU87UUFDWCxFQUFFLEVBQUUsS0FBSztRQUNULElBQUksRUFBRSxhQUFhO0tBQ3BCO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsUUFBUTtRQUNaLEVBQUUsRUFBRSxLQUFLO1FBQ1QsSUFBSSxFQUFFLGFBQWE7S0FDcEI7SUFDRDtRQUNFLEVBQUUsRUFBRSxXQUFXO1FBQ2YsRUFBRSxFQUFFLEtBQUs7UUFDVCxJQUFJLEVBQUUsY0FBYztLQUNyQjtJQUNEO1FBQ0UsRUFBRSxFQUFFLFFBQVE7UUFDWixFQUFFLEVBQUUsS0FBSztRQUNULElBQUksRUFBRSxhQUFhO0tBQ3BCO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsS0FBSztRQUNULEVBQUUsRUFBRSxLQUFLO1FBQ1QsSUFBSSxFQUFFLGFBQWE7S0FDcEI7SUFDRDtRQUNFLEVBQUUsRUFBRSxPQUFPO1FBQ1gsRUFBRSxFQUFFLEtBQUs7UUFDVCxJQUFJLEVBQUUsY0FBYztLQUNyQjtJQUNEO1FBQ0UsRUFBRSxFQUFFLFFBQVE7UUFDWixFQUFFLEVBQUUsS0FBSztRQUNULElBQUksRUFBRSxhQUFhO0tBQ3BCO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsYUFBYTtRQUNqQixFQUFFLEVBQUUsS0FBSztRQUNULElBQUksRUFBRSxlQUFlO0tBQ3RCO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsU0FBUztRQUNiLEVBQUUsRUFBRSxLQUFLO1FBQ1QsSUFBSSxFQUFFLGVBQWU7S0FDdEI7SUFDRDtRQUNFLEVBQUUsRUFBRSxRQUFRO1FBQ1osRUFBRSxFQUFFLEtBQUs7UUFDVCxJQUFJLEVBQUUsWUFBWTtLQUNuQjtJQUNEO1FBQ0UsRUFBRSxFQUFFLE9BQU87UUFDWCxFQUFFLEVBQUUsS0FBSztRQUNULElBQUksRUFBRSxhQUFhO0tBQ3BCO0NBQ0YsQ0FBQztBQUVGLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLEtBQUssRUFBRSxFQUFFO1FBQ1QsYUFBYSxFQUFFLEVBQUU7UUFDakIsaUJBQWlCLEVBQUUsaUJBQWlCO0tBQ3JDO0lBRUQsTUFBTSxFQUFFLFVBQVUsT0FBWTtRQUM1QixJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO1NBQ3JCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxRQUFRO1FBQ04sRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxjQUFjO1NBQ3BCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxNQUFNLENBQUMsQ0FBTTtRQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDZixNQUFNLEVBQUUsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDbEQsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLGFBQWE7U0FDZCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsSUFBSTtRQUNGLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssTUFBTSxFQUFFO1lBQzlCLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0JBQ1gsR0FBRyxFQUFFLGNBQWM7YUFDcEIsQ0FBQyxDQUFDO1lBQ0gsT0FBTztTQUNSO1FBQ0QsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSw4QkFBOEI7U0FDcEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFVBQVU7UUFDUixNQUFNLElBQUksR0FBRztZQUNYLE1BQU0sRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxNQUFNO1lBQ3RDLGFBQWEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWE7U0FDaEMsQ0FBQztRQUNULEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBVyxFQUFFLEVBQUU7WUFDeEMsSUFBSSxDQUFDLE9BQVEsQ0FBQztnQkFDWixhQUFhLEVBQUUsSUFBSTthQUNwQixDQUFDLENBQUM7WUFDSCxJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssR0FBRyxFQUFFO2dCQUV2QixVQUFVLENBQUMsR0FBRyxFQUFFO29CQUNkLEVBQUUsQ0FBQyxTQUFTLENBQUM7d0JBQ1gsR0FBRyxFQUFFLGtCQUFrQjtxQkFDeEIsQ0FBQyxDQUFDO2dCQUNMLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQzthQUNWO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBS0QsT0FBTyxFQUFFO0lBRVQsQ0FBQztJQUtELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFLRCxNQUFNLEVBQUU7SUFFUixDQUFDO0lBS0QsUUFBUSxFQUFFO0lBRVYsQ0FBQztJQUtELGlCQUFpQixFQUFFO0lBRW5CLENBQUM7SUFLRCxhQUFhLEVBQUU7SUFFZixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgQXBpIGZyb20gJy4uLy4uL3NlcnZpY2UvYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgSU15QXBwIH0gZnJvbSAnLi4vLi4vYXBwJztcbmNvbnN0IGFwcCA9IGdldEFwcDxJTXlBcHA+KCk7XG5cbmNvbnN0IGNvbnN0ZWxsYXRpb25MaXN0ID0gW1xuICB7XG4gICAgZW46ICdBcXVhcml1cycsXG4gICAgY2g6ICfmsLTnk7bluqcnLFxuICAgIGRlc2M6ICcx5pyIMjHml6XvvZ4y5pyIMTnml6UnXG4gIH0sXG4gIHtcbiAgICBlbjogJ0FyaWVzJyxcbiAgICBjaDogJ+eZvee+iuW6pycsXG4gICAgZGVzYzogJzPmnIgyMeaXpe+9njTmnIgyMOaXpSdcbiAgfSxcbiAge1xuICAgIGVuOiAnQ2FuY2VyJyxcbiAgICBjaDogJ+W3qOifueW6pycsXG4gICAgZGVzYzogJzbmnIgyMuaXpe+9njfmnIgyMuaXpSdcbiAgfSxcbiAge1xuICAgIGVuOiAnQ2Fwcmljb3JuJyxcbiAgICBjaDogJ+aRqee+r+W6pycsXG4gICAgZGVzYzogJzEy5pyIMjLml6XvvZ4x5pyIMjDml6UnXG4gIH0sXG4gIHtcbiAgICBlbjogJ0dlbWluaScsXG4gICAgY2g6ICflj4zlrZDluqcnLFxuICAgIGRlc2M6ICc15pyIMjLml6XvvZ425pyIMjHml6UnXG4gIH0sXG4gIHtcbiAgICBlbjogJ0xlbycsXG4gICAgY2g6ICfni67lrZDluqcnLFxuICAgIGRlc2M6ICc35pyIMjPml6XvvZ445pyIMjPml6UnXG4gIH0sXG4gIHtcbiAgICBlbjogJ0xpYnJhJyxcbiAgICBjaDogJ+WkqeenpOW6pycsXG4gICAgZGVzYzogJznmnIgyNOaXpe+9njEw5pyIMjPml6UnXG4gIH0sXG4gIHtcbiAgICBlbjogJ1Bpc2NlcycsXG4gICAgY2g6ICflj4zpsbzluqcnLFxuICAgIGRlc2M6ICcy5pyIMjDml6XvvZ4z5pyIMjDml6UnXG4gIH0sXG4gIHtcbiAgICBlbjogJ1NhZ2l0dGFyaXVzJyxcbiAgICBjaDogJ+WwhOaJi+W6pycsXG4gICAgZGVzYzogJzEx5pyIMjPml6XvvZ4xMuaciDIx5pelJ1xuICB9LFxuICB7XG4gICAgZW46ICdTY29ycGlvJyxcbiAgICBjaDogJ+WkqeidjuW6pycsXG4gICAgZGVzYzogJzEw5pyIMjTml6XvvZ4xMeaciDIy5pelJ1xuICB9LFxuICB7XG4gICAgZW46ICdUYXVydXMnLFxuICAgIGNoOiAn6YeR54mb5bqnJyxcbiAgICBkZXNjOiAnNOaciDIx772eNeaciDIx5pelJ1xuICB9LFxuICB7XG4gICAgZW46ICdWaXJnbycsXG4gICAgY2g6ICflpITlpbPluqcnLFxuICAgIGRlc2M6ICc45pyIMjTml6XvvZ455pyIMjPml6UnXG4gIH1cbl07XG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgc2NlbmU6ICcnLFxuICAgIGNvbnN0ZWxsYXRpb246ICcnLFxuICAgIGNvbnN0ZWxsYXRpb25MaXN0OiBjb25zdGVsbGF0aW9uTGlzdCxcbiAgfSxcblxuICBvbkxvYWQ6IGZ1bmN0aW9uIChvcHRpb25zOiBhbnkpIHtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIHNjZW5lOiBvcHRpb25zLnNjZW5lLFxuICAgIH0pO1xuICB9LFxuXG4gIGp1bXBPdmVyKCkge1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiAnLi4vaG9tZS9ob21lJyxcbiAgICB9KVxuICB9LFxuXG4gIHNlbGVjdChlOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgICBjb25zdCB7IGNvbnN0ZWxsYXRpb24gfSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0O1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgY29uc3RlbGxhdGlvbixcbiAgICB9KTtcbiAgfSxcblxuICBuZXh0KCkge1xuICAgIGlmICh0aGlzLmRhdGEuc2NlbmUgPT09ICdob21lJykge1xuICAgICAgd3guc3dpdGNoVGFiKHtcbiAgICAgICAgdXJsOiAnLi4vaG9tZS9ob21lJyxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogJy4uL3JlZ2lzdGVySW5mby9yZWdpc3RlckluZm8nLFxuICAgIH0pO1xuICB9LFxuXG4gIHVwZGF0ZVVzZXIoKSB7XG4gICAgY29uc3QgdXNlciA9IHtcbiAgICAgIG9wZW5pZDogYXBwLmdsb2JhbERhdGEudXNlckluZm8ub3BlbmlkLFxuICAgICAgY29uc3RlbGxhdGlvbjogdGhpcy5kYXRhLmNvbnN0ZWxsYXRpb24sXG4gICAgfSBhcyBhbnk7XG4gICAgQXBpLnVwZGF0ZVVzZXIodXNlcikudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICBzdWJtaXREaXNhYmxlOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIGlmIChyZXN1bHQuY29kZSA9PT0gMjAwKSB7XG4gICAgICAgIC8vIHV0aWxzLnNob3dNb2RhbCgn5pu05paw5oiQ5YqfJylcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgd3guc3dpdGNoVGFiKHtcbiAgICAgICAgICAgIHVybDogYC4uL215SG9tZS9teUhvbWVgLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliJ3mrKHmuLLmn5PlrozmiJBcbiAgICovXG4gIG9uUmVhZHk6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxuICAgKi9cbiAgb25TaG93OiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cbiAgICovXG4gIG9uSGlkZTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Y246L29XG4gICAqL1xuICBvblVubG9hZDogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXG4gICAqL1xuICBvblB1bGxEb3duUmVmcmVzaDogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxuICAgKi9cbiAgb25SZWFjaEJvdHRvbTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG59KSJdfQ==