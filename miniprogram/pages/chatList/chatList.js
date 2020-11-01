"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Api = require("../../service/api.service");
const utils_1 = require("../../utils/utils");
const config_1 = require("../../config");
Page({
    data: {
        host: '',
        userList: [],
        me: {},
        matcherImage: '../../public/image/matcher.png',
    },
    getChatList() {
        Api.getChatList().then((result) => {
            if (result) {
                const userList = result.data;
                userList.map((item) => {
                    item.date = utils_1.getDate(item.createdAt);
                    return item;
                });
                console.log('userList:', userList);
                this.setData({
                    userList
                });
            }
            else {
                throw new Error("获取聊天列表失败");
            }
        });
    },
    onLoad: function () {
        const user = wx.getStorageSync('user');
        console.log("user", user);
        console.log("hostUrl", config_1.default.hostUrl);
        this.setData({
            me: user,
            host: config_1.default.hostUrl,
        });
    },
    goChat(e) {
        console.log("e3wew", e.currentTarget.dataset);
        const { openid, cid } = e.currentTarget.dataset;
        wx.navigateTo({
            url: `../chat/chat?openid=${openid}&cid=${cid}`,
        });
    },
    goMatchmaker() {
        wx.navigateTo({
            url: `../matchmaker/matchmaker`,
        });
    },
    onReady: function () {
    },
    onShow: function () {
        this.getChatList();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdExpc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGF0TGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUFpRDtBQUNqRCw2Q0FBNEM7QUFDNUMseUNBQWtDO0FBRWxDLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLElBQUksRUFBQyxFQUFFO1FBQ1AsUUFBUSxFQUFFLEVBQUU7UUFDWixFQUFFLEVBQUUsRUFBRTtRQUNOLFlBQVksRUFBRSxnQ0FBZ0M7S0FDL0M7SUFHRCxXQUFXO1FBQ1QsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQVcsRUFBRSxFQUFFO1lBQ3JDLElBQUksTUFBTSxFQUFFO2dCQUNWLE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQzdCLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFTLEVBQUUsRUFBRTtvQkFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxlQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUNwQyxPQUFPLElBQUksQ0FBQztnQkFDZCxDQUFDLENBQUMsQ0FBQztnQkFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQTtnQkFDbEMsSUFBSSxDQUFDLE9BQVEsQ0FBQztvQkFDWixRQUFRO2lCQUNULENBQUMsQ0FBQzthQUNKO2lCQUFNO2dCQUNMLE1BQU0sSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDN0I7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxNQUFNLEVBQUU7UUFDTixNQUFNLElBQUksR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFDLGdCQUFNLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDckMsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLEVBQUUsRUFBRSxJQUFJO1lBQ1IsSUFBSSxFQUFFLGdCQUFNLENBQUMsT0FBTztTQUNyQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBR0QsTUFBTSxDQUFDLENBQU07UUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBQyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQzVDLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDaEQsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSx1QkFBdUIsTUFBTSxRQUFRLEdBQUcsRUFBRTtTQUNoRCxDQUFDLENBQUE7SUFDSixDQUFDO0lBR0QsWUFBWTtRQUNWLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsMEJBQTBCO1NBQ2hDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxPQUFPLEVBQUU7SUFDVCxDQUFDO0lBRUQsTUFBTSxFQUFFO1FBRU4sSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxNQUFNLEVBQUU7SUFDUixDQUFDO0lBRUQsUUFBUSxFQUFFO0lBQ1YsQ0FBQztJQUVELGlCQUFpQixFQUFFO0lBQ25CLENBQUM7SUFFRCxhQUFhLEVBQUU7SUFDZixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgQXBpIGZyb20gJy4uLy4uL3NlcnZpY2UvYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgZ2V0RGF0ZSB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vLi4vY29uZmlnJztcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBob3N0OicnLFxuICAgIHVzZXJMaXN0OiBbXSwgLy8g55So5oi35YiX6KGoXG4gICAgbWU6IHt9LCAvLyDnlKjmiLfliJfooahcbiAgICBtYXRjaGVySW1hZ2U6ICcuLi8uLi9wdWJsaWMvaW1hZ2UvbWF0Y2hlci5wbmcnLFxuICB9LFxuXG5cbiAgZ2V0Q2hhdExpc3QoKSB7XG4gICAgQXBpLmdldENoYXRMaXN0KCkudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgY29uc3QgdXNlckxpc3QgPSByZXN1bHQuZGF0YTtcbiAgICAgICAgdXNlckxpc3QubWFwKChpdGVtOiBhbnkpID0+IHtcbiAgICAgICAgICBpdGVtLmRhdGUgPSBnZXREYXRlKGl0ZW0uY3JlYXRlZEF0KTtcbiAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCd1c2VyTGlzdDonLCB1c2VyTGlzdClcbiAgICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgICAgdXNlckxpc3RcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCLojrflj5bogYrlpKnliJfooajlpLHotKVcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgdXNlciA9IHd4LmdldFN0b3JhZ2VTeW5jKCd1c2VyJyk7XG4gICAgY29uc29sZS5sb2coXCJ1c2VyXCIsdXNlcilcbiAgICBjb25zb2xlLmxvZyhcImhvc3RVcmxcIixjb25maWcuaG9zdFVybClcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIG1lOiB1c2VyLFxuICAgICAgaG9zdDogY29uZmlnLmhvc3RVcmwsXG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqIOWOu+iBiuWkqSAqL1xuICBnb0NoYXQoZTogYW55KSB7XG4gICAgY29uc29sZS5sb2coXCJlM3dld1wiLGUuY3VycmVudFRhcmdldC5kYXRhc2V0KVxuICAgIGNvbnN0IHsgb3BlbmlkLCBjaWQgfSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0O1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiBgLi4vY2hhdC9jaGF0P29wZW5pZD0ke29wZW5pZH0mY2lkPSR7Y2lkfWAsXG4gICAgfSlcbiAgfSxcblxuICAvKiog57qi5aiYICovXG4gIGdvTWF0Y2htYWtlcigpIHtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogYC4uL21hdGNobWFrZXIvbWF0Y2htYWtlcmAsXG4gICAgfSlcbiAgfSxcblxuICBvblJlYWR5OiBmdW5jdGlvbiAoKSB7XG4gIH0sXG5cbiAgb25TaG93OiBmdW5jdGlvbiAoKSB7XG4gICAgLy/ojrflj5bogYrlpKnliJfooahcbiAgICB0aGlzLmdldENoYXRMaXN0KCk7XG4gIH0sXG5cbiAgb25IaWRlOiBmdW5jdGlvbiAoKSB7XG4gIH0sXG5cbiAgb25VbmxvYWQ6IGZ1bmN0aW9uICgpIHtcbiAgfSxcblxuICBvblB1bGxEb3duUmVmcmVzaDogZnVuY3Rpb24gKCkge1xuICB9LFxuXG4gIG9uUmVhY2hCb3R0b206IGZ1bmN0aW9uICgpIHtcbiAgfSxcbn0pIl19