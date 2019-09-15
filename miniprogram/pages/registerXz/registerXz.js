"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Api = require("../../service/api.service");
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
            openid: 'app.globalData.userInfo.openid',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXJYei5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlZ2lzdGVyWHoudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBaUQ7QUFJakQsTUFBTSxpQkFBaUIsR0FBRztJQUN4QjtRQUNFLEVBQUUsRUFBRSxVQUFVO1FBQ2QsRUFBRSxFQUFFLEtBQUs7UUFDVCxJQUFJLEVBQUUsYUFBYTtLQUNwQjtJQUNEO1FBQ0UsRUFBRSxFQUFFLE9BQU87UUFDWCxFQUFFLEVBQUUsS0FBSztRQUNULElBQUksRUFBRSxhQUFhO0tBQ3BCO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsUUFBUTtRQUNaLEVBQUUsRUFBRSxLQUFLO1FBQ1QsSUFBSSxFQUFFLGFBQWE7S0FDcEI7SUFDRDtRQUNFLEVBQUUsRUFBRSxXQUFXO1FBQ2YsRUFBRSxFQUFFLEtBQUs7UUFDVCxJQUFJLEVBQUUsY0FBYztLQUNyQjtJQUNEO1FBQ0UsRUFBRSxFQUFFLFFBQVE7UUFDWixFQUFFLEVBQUUsS0FBSztRQUNULElBQUksRUFBRSxhQUFhO0tBQ3BCO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsS0FBSztRQUNULEVBQUUsRUFBRSxLQUFLO1FBQ1QsSUFBSSxFQUFFLGFBQWE7S0FDcEI7SUFDRDtRQUNFLEVBQUUsRUFBRSxPQUFPO1FBQ1gsRUFBRSxFQUFFLEtBQUs7UUFDVCxJQUFJLEVBQUUsY0FBYztLQUNyQjtJQUNEO1FBQ0UsRUFBRSxFQUFFLFFBQVE7UUFDWixFQUFFLEVBQUUsS0FBSztRQUNULElBQUksRUFBRSxhQUFhO0tBQ3BCO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsYUFBYTtRQUNqQixFQUFFLEVBQUUsS0FBSztRQUNULElBQUksRUFBRSxlQUFlO0tBQ3RCO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsU0FBUztRQUNiLEVBQUUsRUFBRSxLQUFLO1FBQ1QsSUFBSSxFQUFFLGVBQWU7S0FDdEI7SUFDRDtRQUNFLEVBQUUsRUFBRSxRQUFRO1FBQ1osRUFBRSxFQUFFLEtBQUs7UUFDVCxJQUFJLEVBQUUsWUFBWTtLQUNuQjtJQUNEO1FBQ0UsRUFBRSxFQUFFLE9BQU87UUFDWCxFQUFFLEVBQUUsS0FBSztRQUNULElBQUksRUFBRSxhQUFhO0tBQ3BCO0NBQ0YsQ0FBQztBQUVGLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLEtBQUssRUFBRSxFQUFFO1FBQ1QsYUFBYSxFQUFFLEVBQUU7UUFDakIsaUJBQWlCLEVBQUUsaUJBQWlCO0tBQ3JDO0lBRUQsTUFBTSxFQUFFLFVBQVUsT0FBWTtRQUM1QixJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO1NBQ3JCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxRQUFRO1FBQ04sRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxjQUFjO1NBQ3BCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxNQUFNLENBQUMsQ0FBTTtRQUNYLE1BQU0sRUFBRSxhQUFhLEVBQUUsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUNsRCxJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osYUFBYTtTQUNkLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxJQUFJO1FBQ0YsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxNQUFNLEVBQUU7WUFDOUIsRUFBRSxDQUFDLFNBQVMsQ0FBQztnQkFDWCxHQUFHLEVBQUUsY0FBYzthQUNwQixDQUFDLENBQUM7WUFDSCxPQUFPO1NBQ1I7UUFDRCxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLDhCQUE4QjtTQUNwQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsVUFBVTtRQUNSLE1BQU0sSUFBSSxHQUFHO1lBQ1gsTUFBTSxFQUFFLGdDQUFnQztZQUN4QyxhQUFhLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhO1NBQ2hDLENBQUM7UUFDVCxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQVcsRUFBRSxFQUFFO1lBQ3hDLElBQUksQ0FBQyxPQUFRLENBQUM7Z0JBQ1osYUFBYSxFQUFFLElBQUk7YUFDcEIsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLEdBQUcsRUFBRTtnQkFFdkIsVUFBVSxDQUFDLEdBQUcsRUFBRTtvQkFDZCxFQUFFLENBQUMsU0FBUyxDQUFDO3dCQUNYLEdBQUcsRUFBRSxrQkFBa0I7cUJBQ3hCLENBQUMsQ0FBQztnQkFDTCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDVjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUtELE9BQU8sRUFBRTtJQUVULENBQUM7SUFLRCxNQUFNLEVBQUU7SUFFUixDQUFDO0lBS0QsTUFBTSxFQUFFO0lBRVIsQ0FBQztJQUtELFFBQVEsRUFBRTtJQUVWLENBQUM7SUFLRCxpQkFBaUIsRUFBRTtJQUVuQixDQUFDO0lBS0QsYUFBYSxFQUFFO0lBRWYsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIEFwaSBmcm9tICcuLi8uLi9zZXJ2aWNlL2FwaS5zZXJ2aWNlJztcbi8vIGltcG9ydCB7IElNeUFwcCB9IGZyb20gJy4uLy4uL2FwcCc7XG4vLyBjb25zdCBhcHAgPSBnZXRBcHA8SU15QXBwPigpO1xuXG5jb25zdCBjb25zdGVsbGF0aW9uTGlzdCA9IFtcbiAge1xuICAgIGVuOiAnQXF1YXJpdXMnLFxuICAgIGNoOiAn5rC055O25bqnJyxcbiAgICBkZXNjOiAnMeaciDIx5pel772eMuaciDE55pelJ1xuICB9LFxuICB7XG4gICAgZW46ICdBcmllcycsXG4gICAgY2g6ICfnmb3nvorluqcnLFxuICAgIGRlc2M6ICcz5pyIMjHml6XvvZ405pyIMjDml6UnXG4gIH0sXG4gIHtcbiAgICBlbjogJ0NhbmNlcicsXG4gICAgY2g6ICflt6jon7nluqcnLFxuICAgIGRlc2M6ICc25pyIMjLml6XvvZ435pyIMjLml6UnXG4gIH0sXG4gIHtcbiAgICBlbjogJ0NhcHJpY29ybicsXG4gICAgY2g6ICfmkannvq/luqcnLFxuICAgIGRlc2M6ICcxMuaciDIy5pel772eMeaciDIw5pelJ1xuICB9LFxuICB7XG4gICAgZW46ICdHZW1pbmknLFxuICAgIGNoOiAn5Y+M5a2Q5bqnJyxcbiAgICBkZXNjOiAnNeaciDIy5pel772eNuaciDIx5pelJ1xuICB9LFxuICB7XG4gICAgZW46ICdMZW8nLFxuICAgIGNoOiAn54uu5a2Q5bqnJyxcbiAgICBkZXNjOiAnN+aciDIz5pel772eOOaciDIz5pelJ1xuICB9LFxuICB7XG4gICAgZW46ICdMaWJyYScsXG4gICAgY2g6ICflpKnnp6TluqcnLFxuICAgIGRlc2M6ICc55pyIMjTml6XvvZ4xMOaciDIz5pelJ1xuICB9LFxuICB7XG4gICAgZW46ICdQaXNjZXMnLFxuICAgIGNoOiAn5Y+M6bG85bqnJyxcbiAgICBkZXNjOiAnMuaciDIw5pel772eM+aciDIw5pelJ1xuICB9LFxuICB7XG4gICAgZW46ICdTYWdpdHRhcml1cycsXG4gICAgY2g6ICflsITmiYvluqcnLFxuICAgIGRlc2M6ICcxMeaciDIz5pel772eMTLmnIgyMeaXpSdcbiAgfSxcbiAge1xuICAgIGVuOiAnU2NvcnBpbycsXG4gICAgY2g6ICflpKnonY7luqcnLFxuICAgIGRlc2M6ICcxMOaciDI05pel772eMTHmnIgyMuaXpSdcbiAgfSxcbiAge1xuICAgIGVuOiAnVGF1cnVzJyxcbiAgICBjaDogJ+mHkeeJm+W6pycsXG4gICAgZGVzYzogJzTmnIgyMe+9njXmnIgyMeaXpSdcbiAgfSxcbiAge1xuICAgIGVuOiAnVmlyZ28nLFxuICAgIGNoOiAn5aSE5aWz5bqnJyxcbiAgICBkZXNjOiAnOOaciDI05pel772eOeaciDIz5pelJ1xuICB9XG5dO1xuXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIHNjZW5lOiAnJyxcbiAgICBjb25zdGVsbGF0aW9uOiAnJyxcbiAgICBjb25zdGVsbGF0aW9uTGlzdDogY29uc3RlbGxhdGlvbkxpc3QsXG4gIH0sXG5cbiAgb25Mb2FkOiBmdW5jdGlvbiAob3B0aW9uczogYW55KSB7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBzY2VuZTogb3B0aW9ucy5zY2VuZSxcbiAgICB9KTtcbiAgfSxcblxuICBqdW1wT3ZlcigpIHtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogJy4uL2hvbWUvaG9tZScsXG4gICAgfSlcbiAgfSxcblxuICBzZWxlY3QoZTogYW55KSB7XG4gICAgY29uc3QgeyBjb25zdGVsbGF0aW9uIH0gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldDtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIGNvbnN0ZWxsYXRpb24sXG4gICAgfSk7XG4gIH0sXG5cbiAgbmV4dCgpIHtcbiAgICBpZiAodGhpcy5kYXRhLnNjZW5lID09PSAnaG9tZScpIHtcbiAgICAgIHd4LnN3aXRjaFRhYih7XG4gICAgICAgIHVybDogJy4uL2hvbWUvaG9tZScsXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6ICcuLi9yZWdpc3RlckluZm8vcmVnaXN0ZXJJbmZvJyxcbiAgICB9KTtcbiAgfSxcblxuICB1cGRhdGVVc2VyKCkge1xuICAgIGNvbnN0IHVzZXIgPSB7XG4gICAgICBvcGVuaWQ6ICdhcHAuZ2xvYmFsRGF0YS51c2VySW5mby5vcGVuaWQnLFxuICAgICAgY29uc3RlbGxhdGlvbjogdGhpcy5kYXRhLmNvbnN0ZWxsYXRpb24sXG4gICAgfSBhcyBhbnk7XG4gICAgQXBpLnVwZGF0ZVVzZXIodXNlcikudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICBzdWJtaXREaXNhYmxlOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIGlmIChyZXN1bHQuY29kZSA9PT0gMjAwKSB7XG4gICAgICAgIC8vIHV0aWxzLnNob3dNb2RhbCgn5pu05paw5oiQ5YqfJylcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgd3guc3dpdGNoVGFiKHtcbiAgICAgICAgICAgIHVybDogYC4uL215SG9tZS9teUhvbWVgLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliJ3mrKHmuLLmn5PlrozmiJBcbiAgICovXG4gIG9uUmVhZHk6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxuICAgKi9cbiAgb25TaG93OiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cbiAgICovXG4gIG9uSGlkZTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Y246L29XG4gICAqL1xuICBvblVubG9hZDogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXG4gICAqL1xuICBvblB1bGxEb3duUmVmcmVzaDogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxuICAgKi9cbiAgb25SZWFjaEJvdHRvbTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG59KSJdfQ==