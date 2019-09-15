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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXJYei5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlZ2lzdGVyWHoudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBaUQ7QUFJakQsTUFBTSxpQkFBaUIsR0FBRztJQUN4QjtRQUNFLEVBQUUsRUFBRSxVQUFVO1FBQ2QsRUFBRSxFQUFFLEtBQUs7UUFDVCxJQUFJLEVBQUUsYUFBYTtLQUNwQjtJQUNEO1FBQ0UsRUFBRSxFQUFFLE9BQU87UUFDWCxFQUFFLEVBQUUsS0FBSztRQUNULElBQUksRUFBRSxhQUFhO0tBQ3BCO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsUUFBUTtRQUNaLEVBQUUsRUFBRSxLQUFLO1FBQ1QsSUFBSSxFQUFFLGFBQWE7S0FDcEI7SUFDRDtRQUNFLEVBQUUsRUFBRSxXQUFXO1FBQ2YsRUFBRSxFQUFFLEtBQUs7UUFDVCxJQUFJLEVBQUUsY0FBYztLQUNyQjtJQUNEO1FBQ0UsRUFBRSxFQUFFLFFBQVE7UUFDWixFQUFFLEVBQUUsS0FBSztRQUNULElBQUksRUFBRSxhQUFhO0tBQ3BCO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsS0FBSztRQUNULEVBQUUsRUFBRSxLQUFLO1FBQ1QsSUFBSSxFQUFFLGFBQWE7S0FDcEI7SUFDRDtRQUNFLEVBQUUsRUFBRSxPQUFPO1FBQ1gsRUFBRSxFQUFFLEtBQUs7UUFDVCxJQUFJLEVBQUUsY0FBYztLQUNyQjtJQUNEO1FBQ0UsRUFBRSxFQUFFLFFBQVE7UUFDWixFQUFFLEVBQUUsS0FBSztRQUNULElBQUksRUFBRSxhQUFhO0tBQ3BCO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsYUFBYTtRQUNqQixFQUFFLEVBQUUsS0FBSztRQUNULElBQUksRUFBRSxlQUFlO0tBQ3RCO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsU0FBUztRQUNiLEVBQUUsRUFBRSxLQUFLO1FBQ1QsSUFBSSxFQUFFLGVBQWU7S0FDdEI7SUFDRDtRQUNFLEVBQUUsRUFBRSxRQUFRO1FBQ1osRUFBRSxFQUFFLEtBQUs7UUFDVCxJQUFJLEVBQUUsWUFBWTtLQUNuQjtJQUNEO1FBQ0UsRUFBRSxFQUFFLE9BQU87UUFDWCxFQUFFLEVBQUUsS0FBSztRQUNULElBQUksRUFBRSxhQUFhO0tBQ3BCO0NBQ0YsQ0FBQztBQUVGLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLEtBQUssRUFBRSxFQUFFO1FBQ1QsYUFBYSxFQUFFLEVBQUU7UUFDakIsaUJBQWlCLEVBQUUsaUJBQWlCO0tBQ3JDO0lBRUQsTUFBTSxFQUFFLFVBQVUsT0FBWTtRQUM1QixJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO1NBQ3JCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxRQUFRO1FBQ04sRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxjQUFjO1NBQ3BCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxNQUFNLENBQUMsQ0FBTTtRQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDZixNQUFNLEVBQUUsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDbEQsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLGFBQWE7U0FDZCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsSUFBSTtRQUNGLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssTUFBTSxFQUFFO1lBQzlCLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0JBQ1gsR0FBRyxFQUFFLGNBQWM7YUFDcEIsQ0FBQyxDQUFDO1lBQ0gsT0FBTztTQUNSO1FBQ0QsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSw4QkFBOEI7U0FDcEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFVBQVU7UUFDUixNQUFNLElBQUksR0FBRztZQUNYLE1BQU0sRUFBRSxnQ0FBZ0M7WUFDeEMsYUFBYSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYTtTQUNoQyxDQUFDO1FBQ1QsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFXLEVBQUUsRUFBRTtZQUN4QyxJQUFJLENBQUMsT0FBUSxDQUFDO2dCQUNaLGFBQWEsRUFBRSxJQUFJO2FBQ3BCLENBQUMsQ0FBQztZQUNILElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxHQUFHLEVBQUU7Z0JBRXZCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7b0JBQ2QsRUFBRSxDQUFDLFNBQVMsQ0FBQzt3QkFDWCxHQUFHLEVBQUUsa0JBQWtCO3FCQUN4QixDQUFDLENBQUM7Z0JBQ0wsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ1Y7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFLRCxPQUFPLEVBQUU7SUFFVCxDQUFDO0lBS0QsTUFBTSxFQUFFO0lBRVIsQ0FBQztJQUtELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFLRCxRQUFRLEVBQUU7SUFFVixDQUFDO0lBS0QsaUJBQWlCLEVBQUU7SUFFbkIsQ0FBQztJQUtELGFBQWEsRUFBRTtJQUVmLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBBcGkgZnJvbSAnLi4vLi4vc2VydmljZS9hcGkuc2VydmljZSc7XG4vLyBpbXBvcnQgeyBJTXlBcHAgfSBmcm9tICcuLi8uLi9hcHAnO1xuLy8gY29uc3QgYXBwID0gZ2V0QXBwPElNeUFwcD4oKTtcblxuY29uc3QgY29uc3RlbGxhdGlvbkxpc3QgPSBbXG4gIHtcbiAgICBlbjogJ0FxdWFyaXVzJyxcbiAgICBjaDogJ+awtOeTtuW6pycsXG4gICAgZGVzYzogJzHmnIgyMeaXpe+9njLmnIgxOeaXpSdcbiAgfSxcbiAge1xuICAgIGVuOiAnQXJpZXMnLFxuICAgIGNoOiAn55m9576K5bqnJyxcbiAgICBkZXNjOiAnM+aciDIx5pel772eNOaciDIw5pelJ1xuICB9LFxuICB7XG4gICAgZW46ICdDYW5jZXInLFxuICAgIGNoOiAn5beo6J+55bqnJyxcbiAgICBkZXNjOiAnNuaciDIy5pel772eN+aciDIy5pelJ1xuICB9LFxuICB7XG4gICAgZW46ICdDYXByaWNvcm4nLFxuICAgIGNoOiAn5pGp576v5bqnJyxcbiAgICBkZXNjOiAnMTLmnIgyMuaXpe+9njHmnIgyMOaXpSdcbiAgfSxcbiAge1xuICAgIGVuOiAnR2VtaW5pJyxcbiAgICBjaDogJ+WPjOWtkOW6pycsXG4gICAgZGVzYzogJzXmnIgyMuaXpe+9njbmnIgyMeaXpSdcbiAgfSxcbiAge1xuICAgIGVuOiAnTGVvJyxcbiAgICBjaDogJ+eLruWtkOW6pycsXG4gICAgZGVzYzogJzfmnIgyM+aXpe+9njjmnIgyM+aXpSdcbiAgfSxcbiAge1xuICAgIGVuOiAnTGlicmEnLFxuICAgIGNoOiAn5aSp56ek5bqnJyxcbiAgICBkZXNjOiAnOeaciDI05pel772eMTDmnIgyM+aXpSdcbiAgfSxcbiAge1xuICAgIGVuOiAnUGlzY2VzJyxcbiAgICBjaDogJ+WPjOmxvOW6pycsXG4gICAgZGVzYzogJzLmnIgyMOaXpe+9njPmnIgyMOaXpSdcbiAgfSxcbiAge1xuICAgIGVuOiAnU2FnaXR0YXJpdXMnLFxuICAgIGNoOiAn5bCE5omL5bqnJyxcbiAgICBkZXNjOiAnMTHmnIgyM+aXpe+9njEy5pyIMjHml6UnXG4gIH0sXG4gIHtcbiAgICBlbjogJ1Njb3JwaW8nLFxuICAgIGNoOiAn5aSp6J2O5bqnJyxcbiAgICBkZXNjOiAnMTDmnIgyNOaXpe+9njEx5pyIMjLml6UnXG4gIH0sXG4gIHtcbiAgICBlbjogJ1RhdXJ1cycsXG4gICAgY2g6ICfph5HniZvluqcnLFxuICAgIGRlc2M6ICc05pyIMjHvvZ415pyIMjHml6UnXG4gIH0sXG4gIHtcbiAgICBlbjogJ1ZpcmdvJyxcbiAgICBjaDogJ+WkhOWls+W6pycsXG4gICAgZGVzYzogJzjmnIgyNOaXpe+9njnmnIgyM+aXpSdcbiAgfVxuXTtcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBzY2VuZTogJycsXG4gICAgY29uc3RlbGxhdGlvbjogJycsXG4gICAgY29uc3RlbGxhdGlvbkxpc3Q6IGNvbnN0ZWxsYXRpb25MaXN0LFxuICB9LFxuXG4gIG9uTG9hZDogZnVuY3Rpb24gKG9wdGlvbnM6IGFueSkge1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgc2NlbmU6IG9wdGlvbnMuc2NlbmUsXG4gICAgfSk7XG4gIH0sXG5cbiAganVtcE92ZXIoKSB7XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6ICcuLi9ob21lL2hvbWUnLFxuICAgIH0pXG4gIH0sXG5cbiAgc2VsZWN0KGU6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIGNvbnN0IHsgY29uc3RlbGxhdGlvbiB9ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQ7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBjb25zdGVsbGF0aW9uLFxuICAgIH0pO1xuICB9LFxuXG4gIG5leHQoKSB7XG4gICAgaWYgKHRoaXMuZGF0YS5zY2VuZSA9PT0gJ2hvbWUnKSB7XG4gICAgICB3eC5zd2l0Y2hUYWIoe1xuICAgICAgICB1cmw6ICcuLi9ob21lL2hvbWUnLFxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiAnLi4vcmVnaXN0ZXJJbmZvL3JlZ2lzdGVySW5mbycsXG4gICAgfSk7XG4gIH0sXG5cbiAgdXBkYXRlVXNlcigpIHtcbiAgICBjb25zdCB1c2VyID0ge1xuICAgICAgb3BlbmlkOiAnYXBwLmdsb2JhbERhdGEudXNlckluZm8ub3BlbmlkJyxcbiAgICAgIGNvbnN0ZWxsYXRpb246IHRoaXMuZGF0YS5jb25zdGVsbGF0aW9uLFxuICAgIH0gYXMgYW55O1xuICAgIEFwaS51cGRhdGVVc2VyKHVzZXIpLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgc3VibWl0RGlzYWJsZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgICBpZiAocmVzdWx0LmNvZGUgPT09IDIwMCkge1xuICAgICAgICAvLyB1dGlscy5zaG93TW9kYWwoJ+abtOaWsOaIkOWKnycpXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHd4LnN3aXRjaFRhYih7XG4gICAgICAgICAgICB1cmw6IGAuLi9teUhvbWUvbXlIb21lYCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yid5qyh5riy5p+T5a6M5oiQXG4gICAqL1xuICBvblJlYWR5OiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcbiAgICovXG4gIG9uU2hvdzogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXG4gICAqL1xuICBvbkhpZGU6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxuICAgKi9cbiAgb25VbmxvYWQ6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxuICAgKi9cbiAgb25QdWxsRG93blJlZnJlc2g6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcbiAgICovXG4gIG9uUmVhY2hCb3R0b206IGZ1bmN0aW9uICgpIHtcblxuICB9LFxufSkiXX0=