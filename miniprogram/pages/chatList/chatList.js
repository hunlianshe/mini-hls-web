"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Api = require("../../service/api.service");
Page({
    data: {
        userList: [],
        matcherImage: '../../public/image/matcher.png',
    },
    getChatList() {
        Api.getChatList().then((result) => {
            if (result) {
                const userList = result.data;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdExpc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGF0TGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUFpRDtBQUdqRCxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixRQUFRLEVBQUUsRUFBRTtRQUNaLFlBQVksRUFBRSxnQ0FBZ0M7S0FDL0M7SUFHRCxXQUFXO1FBQ1QsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQVcsRUFBRSxFQUFFO1lBQ3JDLElBQUksTUFBTSxFQUFFO2dCQUNWLE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFBO2dCQUNsQyxJQUFJLENBQUMsT0FBUSxDQUFDO29CQUNaLFFBQVE7aUJBQ1QsQ0FBQyxDQUFDO2FBQ0o7aUJBQU07Z0JBQ0wsTUFBTSxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUM3QjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELE1BQU0sRUFBRTtRQUVOLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBR0QsTUFBTSxDQUFDLENBQU07UUFDWCxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDM0MsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSx1QkFBdUIsTUFBTSxFQUFFO1NBQ3JDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxPQUFPLEVBQUU7SUFDVCxDQUFDO0lBRUQsTUFBTSxFQUFFO0lBQ1IsQ0FBQztJQUVELE1BQU0sRUFBRTtJQUNSLENBQUM7SUFFRCxRQUFRLEVBQUU7SUFDVixDQUFDO0lBRUQsaUJBQWlCLEVBQUU7SUFDbkIsQ0FBQztJQUVELGFBQWEsRUFBRTtJQUNmLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBBcGkgZnJvbSAnLi4vLi4vc2VydmljZS9hcGkuc2VydmljZSc7XG5cblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICB1c2VyTGlzdDogW10sIC8vIOeUqOaIt+WIl+ihqFxuICAgIG1hdGNoZXJJbWFnZTogJy4uLy4uL3B1YmxpYy9pbWFnZS9tYXRjaGVyLnBuZycsXG4gIH0sXG5cblxuICBnZXRDaGF0TGlzdCgpIHtcbiAgICBBcGkuZ2V0Q2hhdExpc3QoKS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBjb25zdCB1c2VyTGlzdCA9IHJlc3VsdC5kYXRhO1xuICAgICAgICBjb25zb2xlLmxvZygndXNlckxpc3Q6JywgdXNlckxpc3QpXG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgIHVzZXJMaXN0XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwi6I635Y+W6IGK5aSp5YiX6KGo5aSx6LSlXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgIC8v6I635Y+W6IGK5aSp5YiX6KGoXG4gICAgdGhpcy5nZXRDaGF0TGlzdCgpO1xuICB9LFxuXG4gIC8qKiDljrvogYrlpKkgKi9cbiAgZ29DaGF0KGU6IGFueSkge1xuICAgIGNvbnN0IHsgb3BlbmlkIH0gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldDtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogYC4uL2NoYXQvY2hhdD9vcGVuaWQ9JHtvcGVuaWR9YCxcbiAgICB9KVxuICB9LFxuXG4gIG9uUmVhZHk6IGZ1bmN0aW9uICgpIHtcbiAgfSxcblxuICBvblNob3c6IGZ1bmN0aW9uICgpIHtcbiAgfSxcblxuICBvbkhpZGU6IGZ1bmN0aW9uICgpIHtcbiAgfSxcblxuICBvblVubG9hZDogZnVuY3Rpb24gKCkge1xuICB9LFxuXG4gIG9uUHVsbERvd25SZWZyZXNoOiBmdW5jdGlvbiAoKSB7XG4gIH0sXG5cbiAgb25SZWFjaEJvdHRvbTogZnVuY3Rpb24gKCkge1xuICB9LFxufSkiXX0=