"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Api = require("../../service/api.service");
Page({
    data: {
        matchResult: {},
    },
    onLoad: function (options) {
        console.log(options);
        Api.getConstellationMmatchingDetailComplex().then((result) => {
            console.log('result', result);
            this.setData({
                matchResult: result.data,
            });
        }, (err) => {
            console.log('err000', err);
        });
    },
    onReady: function () {
    },
    moreMatch() {
        wx.navigateTo({
            url: '../matching/matching'
        });
    },
    userDetail() {
        wx.navigateTo({
            url: `../userDetail/userDetail?openid=${this.data.matchResult.opposite.openid}`,
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0Y2hSZXN1bHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYXRjaFJlc3VsdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUFpRDtBQUtqRCxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixXQUFXLEVBQUUsRUFBUztLQUN2QjtJQUtELE1BQU0sRUFBRSxVQUFVLE9BQVk7UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQixHQUFHLENBQUMsc0NBQXNDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFVLEVBQUUsRUFBRTtZQUMvRCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQTtZQUM3QixJQUFJLENBQUMsT0FBUSxDQUFDO2dCQUNaLFdBQVcsRUFBRSxNQUFNLENBQUMsSUFBSTthQUN6QixDQUFDLENBQUM7UUFDTCxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQzVCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUtELE9BQU8sRUFBRTtJQUVULENBQUM7SUFFRCxTQUFTO1FBQ1AsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxzQkFBc0I7U0FDNUIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUdELFVBQVU7UUFDUixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLG1DQUFtQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFO1NBQ2hGLENBQUMsQ0FBQTtJQUlKLENBQUM7SUFRRCxNQUFNLEVBQUU7SUFFUixDQUFDO0lBS0QsTUFBTSxFQUFFO0lBRVIsQ0FBQztJQUtELFFBQVEsRUFBRTtJQUVWLENBQUM7SUFLRCxpQkFBaUIsRUFBRTtJQUVuQixDQUFDO0lBS0QsYUFBYSxFQUFFO0lBRWYsQ0FBQztDQUVGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIEFwaSBmcm9tICcuLi8uLi9zZXJ2aWNlL2FwaS5zZXJ2aWNlJztcblxuXG5cbi8vIHBhZ2VzL21hdGNoUmVzdWx0L21hdGNoUmVzdWx0LmpzXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIG1hdGNoUmVzdWx0OiB7fSBhcyBhbnksXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XG4gICAqL1xuICBvbkxvYWQ6IGZ1bmN0aW9uIChvcHRpb25zOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZyhvcHRpb25zKTtcbiAgICBBcGkuZ2V0Q29uc3RlbGxhdGlvbk1tYXRjaGluZ0RldGFpbENvbXBsZXgoKS50aGVuKChyZXN1bHQ6YW55KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygncmVzdWx0JywgcmVzdWx0KVxuICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgIG1hdGNoUmVzdWx0OiByZXN1bHQuZGF0YSxcbiAgICAgIH0pO1xuICAgIH0sIChlcnIpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdlcnIwMDAnLCBlcnIpXG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yid5qyh5riy5p+T5a6M5oiQXG4gICAqL1xuICBvblJlYWR5OiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICBtb3JlTWF0Y2goKXtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogJy4uL21hdGNoaW5nL21hdGNoaW5nJ1xuICAgIH0pXG4gIH0sXG5cbiAgLyoqIOivpuaDhSAqL1xuICB1c2VyRGV0YWlsKCkge1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiBgLi4vdXNlckRldGFpbC91c2VyRGV0YWlsP29wZW5pZD0ke3RoaXMuZGF0YS5tYXRjaFJlc3VsdC5vcHBvc2l0ZS5vcGVuaWR9YCxcbiAgICB9KVxuICAgIC8vIHd4Lm5hdmlnYXRlVG8oe1xuICAgIC8vICAgdXJsOiAnLi4vcmVnaXN0ZXJQaG9uZS9yZWdpc3RlclBob25lJyxcbiAgICAvLyB9KVxuICB9LFxuXG5cblxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxuICAgKi9cbiAgb25TaG93OiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cbiAgICovXG4gIG9uSGlkZTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Y246L29XG4gICAqL1xuICBvblVubG9hZDogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXG4gICAqL1xuICBvblB1bGxEb3duUmVmcmVzaDogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxuICAgKi9cbiAgb25SZWFjaEJvdHRvbTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbn0pIl19