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
    goMatchmaker() {
        wx.navigateTo({
            url: `../matchmaker/matchmaker`,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdExpc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGF0TGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUFpRDtBQUNqRCw2Q0FBNEM7QUFFNUMsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFLEVBQUU7UUFDWixZQUFZLEVBQUUsZ0NBQWdDO0tBQy9DO0lBR0QsV0FBVztRQUNULEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFXLEVBQUUsRUFBRTtZQUNyQyxJQUFJLE1BQU0sRUFBRTtnQkFDVixNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUM3QixRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBUyxFQUFFLEVBQUU7b0JBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsZUFBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDcEMsT0FBTyxJQUFJLENBQUM7Z0JBQ2QsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUE7Z0JBQ2xDLElBQUksQ0FBQyxPQUFRLENBQUM7b0JBQ1osUUFBUTtpQkFDVCxDQUFDLENBQUM7YUFDSjtpQkFBTTtnQkFDTCxNQUFNLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQzdCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsTUFBTSxFQUFFO1FBRU4sSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFHRCxNQUFNLENBQUMsQ0FBTTtRQUNYLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUMzQyxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLHVCQUF1QixNQUFNLEVBQUU7U0FDckMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUdELFlBQVk7UUFDVixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLDBCQUEwQjtTQUNoQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsT0FBTyxFQUFFO0lBQ1QsQ0FBQztJQUVELE1BQU0sRUFBRTtJQUNSLENBQUM7SUFFRCxNQUFNLEVBQUU7SUFDUixDQUFDO0lBRUQsUUFBUSxFQUFFO0lBQ1YsQ0FBQztJQUVELGlCQUFpQixFQUFFO0lBQ25CLENBQUM7SUFFRCxhQUFhLEVBQUU7SUFDZixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgQXBpIGZyb20gJy4uLy4uL3NlcnZpY2UvYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgZ2V0RGF0ZSB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJztcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICB1c2VyTGlzdDogW10sIC8vIOeUqOaIt+WIl+ihqFxuICAgIG1hdGNoZXJJbWFnZTogJy4uLy4uL3B1YmxpYy9pbWFnZS9tYXRjaGVyLnBuZycsXG4gIH0sXG5cblxuICBnZXRDaGF0TGlzdCgpIHtcbiAgICBBcGkuZ2V0Q2hhdExpc3QoKS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBjb25zdCB1c2VyTGlzdCA9IHJlc3VsdC5kYXRhO1xuICAgICAgICB1c2VyTGlzdC5tYXAoKGl0ZW06IGFueSkgPT4ge1xuICAgICAgICAgIGl0ZW0uZGF0ZSA9IGdldERhdGUoaXRlbS5jcmVhdGVkQXQpO1xuICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2coJ3VzZXJMaXN0OicsIHVzZXJMaXN0KVxuICAgICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgICB1c2VyTGlzdFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIuiOt+WPluiBiuWkqeWIl+ihqOWksei0pVwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAvL+iOt+WPluiBiuWkqeWIl+ihqFxuICAgIHRoaXMuZ2V0Q2hhdExpc3QoKTtcbiAgfSxcblxuICAvKiog5Y676IGK5aSpICovXG4gIGdvQ2hhdChlOiBhbnkpIHtcbiAgICBjb25zdCB7IG9wZW5pZCB9ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQ7XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6IGAuLi9jaGF0L2NoYXQ/b3BlbmlkPSR7b3BlbmlkfWAsXG4gICAgfSlcbiAgfSxcblxuICAvKiog57qi5aiYICovXG4gIGdvTWF0Y2htYWtlcigpIHtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogYC4uL21hdGNobWFrZXIvbWF0Y2htYWtlcmAsXG4gICAgfSlcbiAgfSxcblxuICBvblJlYWR5OiBmdW5jdGlvbiAoKSB7XG4gIH0sXG5cbiAgb25TaG93OiBmdW5jdGlvbiAoKSB7XG4gIH0sXG5cbiAgb25IaWRlOiBmdW5jdGlvbiAoKSB7XG4gIH0sXG5cbiAgb25VbmxvYWQ6IGZ1bmN0aW9uICgpIHtcbiAgfSxcblxuICBvblB1bGxEb3duUmVmcmVzaDogZnVuY3Rpb24gKCkge1xuICB9LFxuXG4gIG9uUmVhY2hCb3R0b206IGZ1bmN0aW9uICgpIHtcbiAgfSxcbn0pIl19
