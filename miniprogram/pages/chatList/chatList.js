"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Api = require("../../service/api.service");
const utils_1 = require("../../utils/utils");
Page({
    data: {
        userList: [],
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
        this.getChatList();
    },
    goChat(e) {
        const { openid } = e.currentTarget.dataset;
        wx.navigateTo({
            url: `../chat/chat?openid=${openid}`,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdExpc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGF0TGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUFpRDtBQUNqRCw2Q0FBNEM7QUFFNUMsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFLEVBQUU7UUFDWixZQUFZLEVBQUUsZ0NBQWdDO0tBQy9DO0lBR0QsV0FBVztRQUNULEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFXLEVBQUUsRUFBRTtZQUNyQyxJQUFJLE1BQU0sRUFBRTtnQkFDVixNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUM3QixRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBUyxFQUFFLEVBQUU7b0JBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsZUFBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDcEMsT0FBTyxJQUFJLENBQUM7Z0JBQ2QsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUE7Z0JBQ2xDLElBQUksQ0FBQyxPQUFRLENBQUM7b0JBQ1osUUFBUTtpQkFDVCxDQUFDLENBQUM7YUFDSjtpQkFBTTtnQkFDTCxNQUFNLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQzdCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsTUFBTSxFQUFFO1FBRU4sSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFHRCxNQUFNLENBQUMsQ0FBTTtRQUNYLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUMzQyxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLHVCQUF1QixNQUFNLEVBQUU7U0FDckMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELE9BQU8sRUFBRTtJQUNULENBQUM7SUFFRCxNQUFNLEVBQUU7SUFDUixDQUFDO0lBRUQsTUFBTSxFQUFFO0lBQ1IsQ0FBQztJQUVELFFBQVEsRUFBRTtJQUNWLENBQUM7SUFFRCxpQkFBaUIsRUFBRTtJQUNuQixDQUFDO0lBRUQsYUFBYSxFQUFFO0lBQ2YsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIEFwaSBmcm9tICcuLi8uLi9zZXJ2aWNlL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IGdldERhdGUgfSBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgdXNlckxpc3Q6IFtdLCAvLyDnlKjmiLfliJfooahcbiAgICBtYXRjaGVySW1hZ2U6ICcuLi8uLi9wdWJsaWMvaW1hZ2UvbWF0Y2hlci5wbmcnLFxuICB9LFxuXG5cbiAgZ2V0Q2hhdExpc3QoKSB7XG4gICAgQXBpLmdldENoYXRMaXN0KCkudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgY29uc3QgdXNlckxpc3QgPSByZXN1bHQuZGF0YTtcbiAgICAgICAgdXNlckxpc3QubWFwKChpdGVtOiBhbnkpID0+IHtcbiAgICAgICAgICBpdGVtLmRhdGUgPSBnZXREYXRlKGl0ZW0uY3JlYXRlZEF0KTtcbiAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCd1c2VyTGlzdDonLCB1c2VyTGlzdClcbiAgICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgICAgdXNlckxpc3RcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCLojrflj5bogYrlpKnliJfooajlpLHotKVcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgLy/ojrflj5bogYrlpKnliJfooahcbiAgICB0aGlzLmdldENoYXRMaXN0KCk7XG4gIH0sXG5cbiAgLyoqIOWOu+iBiuWkqSAqL1xuICBnb0NoYXQoZTogYW55KSB7XG4gICAgY29uc3QgeyBvcGVuaWQgfSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0O1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiBgLi4vY2hhdC9jaGF0P29wZW5pZD0ke29wZW5pZH1gLFxuICAgIH0pXG4gIH0sXG5cbiAgb25SZWFkeTogZnVuY3Rpb24gKCkge1xuICB9LFxuXG4gIG9uU2hvdzogZnVuY3Rpb24gKCkge1xuICB9LFxuXG4gIG9uSGlkZTogZnVuY3Rpb24gKCkge1xuICB9LFxuXG4gIG9uVW5sb2FkOiBmdW5jdGlvbiAoKSB7XG4gIH0sXG5cbiAgb25QdWxsRG93blJlZnJlc2g6IGZ1bmN0aW9uICgpIHtcbiAgfSxcblxuICBvblJlYWNoQm90dG9tOiBmdW5jdGlvbiAoKSB7XG4gIH0sXG59KSJdfQ==