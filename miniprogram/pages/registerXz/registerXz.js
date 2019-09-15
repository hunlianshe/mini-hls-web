"use strict";
const constellation = [
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
        sence: '',
        constellation: constellation,
    },
    onLoad: function (options) {
        this.setData({
            sence: options.sence,
        });
    },
    jumpOver() {
        wx.navigateTo({
            url: '../home/home',
        });
    },
    next() {
        if (this.data.sence === 'home') {
            wx.switchTab({
                url: '../home/home',
            });
            return;
        }
        wx.navigateTo({
            url: '../registerInfo/registerInfo',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXJYei5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlZ2lzdGVyWHoudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE1BQU0sYUFBYSxHQUFHO0lBQ3BCO1FBQ0UsRUFBRSxFQUFFLFVBQVU7UUFDZCxFQUFFLEVBQUUsS0FBSztRQUNULElBQUksRUFBRSxhQUFhO0tBQ3BCO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsT0FBTztRQUNYLEVBQUUsRUFBRSxLQUFLO1FBQ1QsSUFBSSxFQUFFLGFBQWE7S0FDcEI7SUFDRDtRQUNFLEVBQUUsRUFBRSxRQUFRO1FBQ1osRUFBRSxFQUFFLEtBQUs7UUFDVCxJQUFJLEVBQUUsYUFBYTtLQUNwQjtJQUNEO1FBQ0UsRUFBRSxFQUFFLFdBQVc7UUFDZixFQUFFLEVBQUUsS0FBSztRQUNULElBQUksRUFBRSxjQUFjO0tBQ3JCO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsUUFBUTtRQUNaLEVBQUUsRUFBRSxLQUFLO1FBQ1QsSUFBSSxFQUFFLGFBQWE7S0FDcEI7SUFDRDtRQUNFLEVBQUUsRUFBRSxLQUFLO1FBQ1QsRUFBRSxFQUFFLEtBQUs7UUFDVCxJQUFJLEVBQUUsYUFBYTtLQUNwQjtJQUNEO1FBQ0UsRUFBRSxFQUFFLE9BQU87UUFDWCxFQUFFLEVBQUUsS0FBSztRQUNULElBQUksRUFBRSxjQUFjO0tBQ3JCO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsUUFBUTtRQUNaLEVBQUUsRUFBRSxLQUFLO1FBQ1QsSUFBSSxFQUFFLGFBQWE7S0FDcEI7SUFDRDtRQUNFLEVBQUUsRUFBRSxhQUFhO1FBQ2pCLEVBQUUsRUFBRSxLQUFLO1FBQ1QsSUFBSSxFQUFFLGVBQWU7S0FDdEI7SUFDRDtRQUNFLEVBQUUsRUFBRSxTQUFTO1FBQ2IsRUFBRSxFQUFFLEtBQUs7UUFDVCxJQUFJLEVBQUUsZUFBZTtLQUN0QjtJQUNEO1FBQ0UsRUFBRSxFQUFFLFFBQVE7UUFDWixFQUFFLEVBQUUsS0FBSztRQUNULElBQUksRUFBRSxZQUFZO0tBQ25CO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsT0FBTztRQUNYLEVBQUUsRUFBRSxLQUFLO1FBQ1QsSUFBSSxFQUFFLGFBQWE7S0FDcEI7Q0FDRixDQUFDO0FBRUYsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osS0FBSyxFQUFFLEVBQUU7UUFDVCxhQUFhLEVBQUUsYUFBYTtLQUM3QjtJQUtELE1BQU0sRUFBRSxVQUFVLE9BQVk7UUFDNUIsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSztTQUNyQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsUUFBUTtRQUNOLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsY0FBYztTQUNwQixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsSUFBSTtRQUNGLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssTUFBTSxFQUFFO1lBQzlCLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0JBQ1gsR0FBRyxFQUFFLGNBQWM7YUFDcEIsQ0FBQyxDQUFDO1lBQ0gsT0FBTztTQUNSO1FBQ0QsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSw4QkFBOEI7U0FDcEMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUtELE9BQU8sRUFBRTtJQUVULENBQUM7SUFLRCxNQUFNLEVBQUU7SUFFUixDQUFDO0lBS0QsTUFBTSxFQUFFO0lBRVIsQ0FBQztJQUtELFFBQVEsRUFBRTtJQUVWLENBQUM7SUFLRCxpQkFBaUIsRUFBRTtJQUVuQixDQUFDO0lBS0QsYUFBYSxFQUFFO0lBRWYsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgY29uc3RlbGxhdGlvbiA9IFtcbiAge1xuICAgIGVuOiAnQXF1YXJpdXMnLFxuICAgIGNoOiAn5rC055O25bqnJyxcbiAgICBkZXNjOiAnMeaciDIx5pel772eMuaciDE55pelJ1xuICB9LFxuICB7XG4gICAgZW46ICdBcmllcycsXG4gICAgY2g6ICfnmb3nvorluqcnLFxuICAgIGRlc2M6ICcz5pyIMjHml6XvvZ405pyIMjDml6UnXG4gIH0sXG4gIHtcbiAgICBlbjogJ0NhbmNlcicsXG4gICAgY2g6ICflt6jon7nluqcnLFxuICAgIGRlc2M6ICc25pyIMjLml6XvvZ435pyIMjLml6UnXG4gIH0sXG4gIHtcbiAgICBlbjogJ0NhcHJpY29ybicsXG4gICAgY2g6ICfmkannvq/luqcnLFxuICAgIGRlc2M6ICcxMuaciDIy5pel772eMeaciDIw5pelJ1xuICB9LFxuICB7XG4gICAgZW46ICdHZW1pbmknLFxuICAgIGNoOiAn5Y+M5a2Q5bqnJyxcbiAgICBkZXNjOiAnNeaciDIy5pel772eNuaciDIx5pelJ1xuICB9LFxuICB7XG4gICAgZW46ICdMZW8nLFxuICAgIGNoOiAn54uu5a2Q5bqnJyxcbiAgICBkZXNjOiAnN+aciDIz5pel772eOOaciDIz5pelJ1xuICB9LFxuICB7XG4gICAgZW46ICdMaWJyYScsXG4gICAgY2g6ICflpKnnp6TluqcnLFxuICAgIGRlc2M6ICc55pyIMjTml6XvvZ4xMOaciDIz5pelJ1xuICB9LFxuICB7XG4gICAgZW46ICdQaXNjZXMnLFxuICAgIGNoOiAn5Y+M6bG85bqnJyxcbiAgICBkZXNjOiAnMuaciDIw5pel772eM+aciDIw5pelJ1xuICB9LFxuICB7XG4gICAgZW46ICdTYWdpdHRhcml1cycsXG4gICAgY2g6ICflsITmiYvluqcnLFxuICAgIGRlc2M6ICcxMeaciDIz5pel772eMTLmnIgyMeaXpSdcbiAgfSxcbiAge1xuICAgIGVuOiAnU2NvcnBpbycsXG4gICAgY2g6ICflpKnonY7luqcnLFxuICAgIGRlc2M6ICcxMOaciDI05pel772eMTHmnIgyMuaXpSdcbiAgfSxcbiAge1xuICAgIGVuOiAnVGF1cnVzJyxcbiAgICBjaDogJ+mHkeeJm+W6pycsXG4gICAgZGVzYzogJzTmnIgyMe+9njXmnIgyMeaXpSdcbiAgfSxcbiAge1xuICAgIGVuOiAnVmlyZ28nLFxuICAgIGNoOiAn5aSE5aWz5bqnJyxcbiAgICBkZXNjOiAnOOaciDI05pel772eOeaciDIz5pelJ1xuICB9XG5dO1xuXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIHNlbmNlOiAnJyxcbiAgICBjb25zdGVsbGF0aW9uOiBjb25zdGVsbGF0aW9uLFxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxuICAgKi9cbiAgb25Mb2FkOiBmdW5jdGlvbiAob3B0aW9uczogYW55KSB7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBzZW5jZTogb3B0aW9ucy5zZW5jZSxcbiAgICB9KTtcbiAgfSxcblxuICBqdW1wT3ZlcigpOiB2b2lkIHtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogJy4uL2hvbWUvaG9tZScsXG4gICAgfSlcbiAgfSxcblxuICBuZXh0KCkge1xuICAgIGlmICh0aGlzLmRhdGEuc2VuY2UgPT09ICdob21lJykge1xuICAgICAgd3guc3dpdGNoVGFiKHtcbiAgICAgICAgdXJsOiAnLi4vaG9tZS9ob21lJyxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogJy4uL3JlZ2lzdGVySW5mby9yZWdpc3RlckluZm8nLFxuICAgIH0pXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yid5qyh5riy5p+T5a6M5oiQXG4gICAqL1xuICBvblJlYWR5OiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcbiAgICovXG4gIG9uU2hvdzogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXG4gICAqL1xuICBvbkhpZGU6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxuICAgKi9cbiAgb25VbmxvYWQ6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxuICAgKi9cbiAgb25QdWxsRG93blJlZnJlc2g6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcbiAgICovXG4gIG9uUmVhY2hCb3R0b206IGZ1bmN0aW9uICgpIHtcblxuICB9LFxufSkiXX0=