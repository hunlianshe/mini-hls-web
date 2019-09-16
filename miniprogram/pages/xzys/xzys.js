"use strict";
const constellation1 = [
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
        constellation: constellation1,
    },
    onLoad: function () {
    },
    goXzysDetail(e) {
        console.log('goXzysDetail e', e);
        let fortuneName = e.currentTarget.dataset.fortunename;
        wx.navigateTo({
            url: `../xzysDetail/xzysDetail?fortuneName=${fortuneName}`,
        });
    },
    getCharacter(e) {
        let consName = e.currentTarget.dataset.fortunename || "白羊座";
        wx.navigateTo({
            url: `../realXzysDetail/realXzysDetail?consName=${consName}&type=today`,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieHp5cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInh6eXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU0sY0FBYyxHQUFHO0lBQ3JCO1FBQ0UsRUFBRSxFQUFFLFVBQVU7UUFDZCxFQUFFLEVBQUUsS0FBSztRQUNULElBQUksRUFBRSxhQUFhO0tBQ3BCO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsT0FBTztRQUNYLEVBQUUsRUFBRSxLQUFLO1FBQ1QsSUFBSSxFQUFFLGFBQWE7S0FDcEI7SUFDRDtRQUNFLEVBQUUsRUFBRSxRQUFRO1FBQ1osRUFBRSxFQUFFLEtBQUs7UUFDVCxJQUFJLEVBQUUsYUFBYTtLQUNwQjtJQUNEO1FBQ0UsRUFBRSxFQUFFLFdBQVc7UUFDZixFQUFFLEVBQUUsS0FBSztRQUNULElBQUksRUFBRSxjQUFjO0tBQ3JCO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsUUFBUTtRQUNaLEVBQUUsRUFBRSxLQUFLO1FBQ1QsSUFBSSxFQUFFLGFBQWE7S0FDcEI7SUFDRDtRQUNFLEVBQUUsRUFBRSxLQUFLO1FBQ1QsRUFBRSxFQUFFLEtBQUs7UUFDVCxJQUFJLEVBQUUsYUFBYTtLQUNwQjtJQUNEO1FBQ0UsRUFBRSxFQUFFLE9BQU87UUFDWCxFQUFFLEVBQUUsS0FBSztRQUNULElBQUksRUFBRSxjQUFjO0tBQ3JCO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsUUFBUTtRQUNaLEVBQUUsRUFBRSxLQUFLO1FBQ1QsSUFBSSxFQUFFLGFBQWE7S0FDcEI7SUFDRDtRQUNFLEVBQUUsRUFBRSxhQUFhO1FBQ2pCLEVBQUUsRUFBRSxLQUFLO1FBQ1QsSUFBSSxFQUFFLGVBQWU7S0FDdEI7SUFDRDtRQUNFLEVBQUUsRUFBRSxTQUFTO1FBQ2IsRUFBRSxFQUFFLEtBQUs7UUFDVCxJQUFJLEVBQUUsZUFBZTtLQUN0QjtJQUNEO1FBQ0UsRUFBRSxFQUFFLFFBQVE7UUFDWixFQUFFLEVBQUUsS0FBSztRQUNULElBQUksRUFBRSxZQUFZO0tBQ25CO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsT0FBTztRQUNYLEVBQUUsRUFBRSxLQUFLO1FBQ1QsSUFBSSxFQUFFLGFBQWE7S0FDcEI7Q0FDRixDQUFDO0FBR0YsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osYUFBYSxFQUFFLGNBQWM7S0FDOUI7SUFFRCxNQUFNLEVBQUU7SUFFUixDQUFDO0lBR0QsWUFBWSxDQUFDLENBQUs7UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUNoQyxJQUFJLFdBQVcsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7UUFDdEQsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSx3Q0FBd0MsV0FBVyxFQUFFO1NBQzNELENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxZQUFZLENBQUMsQ0FBSztRQUNoQixJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxXQUFXLElBQUksS0FBSyxDQUFDO1FBQzVELEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsNkNBQTZDLFFBQVEsYUFBYTtTQUN4RSxDQUFDLENBQUE7SUFDSixDQUFDO0lBT0QsT0FBTyxFQUFFO0lBRVQsQ0FBQztJQUtELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFLRCxNQUFNLEVBQUU7SUFFUixDQUFDO0lBS0QsUUFBUSxFQUFFO0lBRVYsQ0FBQztJQUtELGlCQUFpQixFQUFFO0lBRW5CLENBQUM7SUFLRCxhQUFhLEVBQUU7SUFFZixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY29uc3RlbGxhdGlvbjEgPSBbXG4gIHtcbiAgICBlbjogJ0FxdWFyaXVzJyxcbiAgICBjaDogJ+awtOeTtuW6pycsXG4gICAgZGVzYzogJzHmnIgyMeaXpe+9njLmnIgxOeaXpSdcbiAgfSxcbiAge1xuICAgIGVuOiAnQXJpZXMnLFxuICAgIGNoOiAn55m9576K5bqnJyxcbiAgICBkZXNjOiAnM+aciDIx5pel772eNOaciDIw5pelJ1xuICB9LFxuICB7XG4gICAgZW46ICdDYW5jZXInLFxuICAgIGNoOiAn5beo6J+55bqnJyxcbiAgICBkZXNjOiAnNuaciDIy5pel772eN+aciDIy5pelJ1xuICB9LFxuICB7XG4gICAgZW46ICdDYXByaWNvcm4nLFxuICAgIGNoOiAn5pGp576v5bqnJyxcbiAgICBkZXNjOiAnMTLmnIgyMuaXpe+9njHmnIgyMOaXpSdcbiAgfSxcbiAge1xuICAgIGVuOiAnR2VtaW5pJyxcbiAgICBjaDogJ+WPjOWtkOW6pycsXG4gICAgZGVzYzogJzXmnIgyMuaXpe+9njbmnIgyMeaXpSdcbiAgfSxcbiAge1xuICAgIGVuOiAnTGVvJyxcbiAgICBjaDogJ+eLruWtkOW6pycsXG4gICAgZGVzYzogJzfmnIgyM+aXpe+9njjmnIgyM+aXpSdcbiAgfSxcbiAge1xuICAgIGVuOiAnTGlicmEnLFxuICAgIGNoOiAn5aSp56ek5bqnJyxcbiAgICBkZXNjOiAnOeaciDI05pel772eMTDmnIgyM+aXpSdcbiAgfSxcbiAge1xuICAgIGVuOiAnUGlzY2VzJyxcbiAgICBjaDogJ+WPjOmxvOW6pycsXG4gICAgZGVzYzogJzLmnIgyMOaXpe+9njPmnIgyMOaXpSdcbiAgfSxcbiAge1xuICAgIGVuOiAnU2FnaXR0YXJpdXMnLFxuICAgIGNoOiAn5bCE5omL5bqnJyxcbiAgICBkZXNjOiAnMTHmnIgyM+aXpe+9njEy5pyIMjHml6UnXG4gIH0sXG4gIHtcbiAgICBlbjogJ1Njb3JwaW8nLFxuICAgIGNoOiAn5aSp6J2O5bqnJyxcbiAgICBkZXNjOiAnMTDmnIgyNOaXpe+9njEx5pyIMjLml6UnXG4gIH0sXG4gIHtcbiAgICBlbjogJ1RhdXJ1cycsXG4gICAgY2g6ICfph5HniZvluqcnLFxuICAgIGRlc2M6ICc05pyIMjHvvZ415pyIMjHml6UnXG4gIH0sXG4gIHtcbiAgICBlbjogJ1ZpcmdvJyxcbiAgICBjaDogJ+WkhOWls+W6pycsXG4gICAgZGVzYzogJzjmnIgyNOaXpe+9njnmnIgyM+aXpSdcbiAgfVxuXTtcblxuXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIGNvbnN0ZWxsYXRpb246IGNvbnN0ZWxsYXRpb24xLFxuICB9LFxuXG4gIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqIOaYn+W6p+i/kOWKvyAqL1xuICBnb1h6eXNEZXRhaWwoZTphbnkpIHtcbiAgICBjb25zb2xlLmxvZygnZ29YenlzRGV0YWlsIGUnLCBlKVxuICAgIGxldCBmb3J0dW5lTmFtZSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmZvcnR1bmVuYW1lO1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiBgLi4veHp5c0RldGFpbC94enlzRGV0YWlsP2ZvcnR1bmVOYW1lPSR7Zm9ydHVuZU5hbWV9YCxcbiAgICB9KVxuICB9LFxuICBnZXRDaGFyYWN0ZXIoZTphbnkpIHtcbiAgICBsZXQgY29uc05hbWUgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5mb3J0dW5lbmFtZSB8fCBcIueZvee+iuW6p1wiO1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiBgLi4vcmVhbFh6eXNEZXRhaWwvcmVhbFh6eXNEZXRhaWw/Y29uc05hbWU9JHtjb25zTmFtZX0mdHlwZT10b2RheWAsXG4gICAgfSlcbiAgfSxcbiAgXG5cblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliJ3mrKHmuLLmn5PlrozmiJBcbiAgICovXG4gIG9uUmVhZHk6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxuICAgKi9cbiAgb25TaG93OiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cbiAgICovXG4gIG9uSGlkZTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Y246L29XG4gICAqL1xuICBvblVubG9hZDogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXG4gICAqL1xuICBvblB1bGxEb3duUmVmcmVzaDogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxuICAgKi9cbiAgb25SZWFjaEJvdHRvbTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG59KSJdfQ==