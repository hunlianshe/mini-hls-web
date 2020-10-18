"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Api = require("../../service/api.service");
Page({
    data: {
        userList: [
            {
                "_id": "5f66e025bb97350949c52a97",
                "userIds": [
                    "oHgB55LJ1wGo2QqEYxgo8tLMxL4A",
                    "oHgB55AlhKqR7azr85YYBwfIE9EQ"
                ],
                "createId": "oHgB55AlhKqR7azr85YYBwfIE9EQ",
                "createdAt": "2020-09-20T04:52:53.115Z",
                "updatedAt": "2020-09-20T07:57:43.815Z",
                "lastMessage": {
                    "cid": "5f66e025bb97350949c52a97",
                    "type": 1,
                    "msg": "hello lisa",
                    "status": [
                        {
                            "openid": "oHgB55LJ1wGo2QqEYxgo8tLMxL4A",
                            "msgUnread": true
                        },
                        {
                            "openid": "oHgB55AlhKqR7azr85YYBwfIE9EQ",
                            "msgUnread": true
                        }
                    ],
                    "from": "oV2Js5THL6EdzDahAxCTxFoXyjHk",
                    "fromName": "刘祖宽",
                    "fromAvatarUrl": "https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83erbAfZ10K9richIBTz7kDsA9lUsVyzicShXgxw9zeMfekOUk6s7JGOVtCza5veuxvibsJyOOgVICwpPQ/132"
                }
            }
        ],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdExpc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGF0TGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUFpRDtBQUdqRCxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixRQUFRLEVBQUU7WUFDUjtnQkFDRSxLQUFLLEVBQUUsMEJBQTBCO2dCQUNqQyxTQUFTLEVBQUU7b0JBQ1QsOEJBQThCO29CQUM5Qiw4QkFBOEI7aUJBQy9CO2dCQUNELFVBQVUsRUFBRSw4QkFBOEI7Z0JBQzFDLFdBQVcsRUFBRSwwQkFBMEI7Z0JBQ3ZDLFdBQVcsRUFBRSwwQkFBMEI7Z0JBQ3ZDLGFBQWEsRUFBRTtvQkFDYixLQUFLLEVBQUUsMEJBQTBCO29CQUNqQyxNQUFNLEVBQUUsQ0FBQztvQkFDVCxLQUFLLEVBQUUsWUFBWTtvQkFDbkIsUUFBUSxFQUFFO3dCQUNSOzRCQUNFLFFBQVEsRUFBRSw4QkFBOEI7NEJBQ3hDLFdBQVcsRUFBRSxJQUFJO3lCQUNsQjt3QkFDRDs0QkFDRSxRQUFRLEVBQUUsOEJBQThCOzRCQUN4QyxXQUFXLEVBQUUsSUFBSTt5QkFDbEI7cUJBQ0Y7b0JBQ0QsTUFBTSxFQUFFLDhCQUE4QjtvQkFDdEMsVUFBVSxFQUFFLEtBQUs7b0JBQ2pCLGVBQWUsRUFBRSxnSUFBZ0k7aUJBQ2xKO2FBQ0Y7U0FDRjtRQUNELFlBQVksRUFBRSxnQ0FBZ0M7S0FDL0M7SUFHRCxXQUFXO1FBQ1QsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQVcsRUFBRSxFQUFFO1lBQ3JDLElBQUksTUFBTSxFQUFFO2dCQUNWLE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFBO2dCQUNsQyxJQUFJLENBQUMsT0FBUSxDQUFDO29CQUNaLFFBQVE7aUJBQ1QsQ0FBQyxDQUFDO2FBQ0o7aUJBQU07Z0JBQ0wsTUFBTSxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUM3QjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELE1BQU0sRUFBRTtRQUVOLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBR0QsTUFBTSxDQUFDLENBQU07UUFDWCxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDM0MsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSx1QkFBdUIsTUFBTSxFQUFFO1NBQ3JDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxPQUFPLEVBQUU7SUFDVCxDQUFDO0lBRUQsTUFBTSxFQUFFO0lBQ1IsQ0FBQztJQUVELE1BQU0sRUFBRTtJQUNSLENBQUM7SUFFRCxRQUFRLEVBQUU7SUFDVixDQUFDO0lBRUQsaUJBQWlCLEVBQUU7SUFDbkIsQ0FBQztJQUVELGFBQWEsRUFBRTtJQUNmLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBBcGkgZnJvbSAnLi4vLi4vc2VydmljZS9hcGkuc2VydmljZSc7XG5cblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICB1c2VyTGlzdDogW1xuICAgICAge1xuICAgICAgICBcIl9pZFwiOiBcIjVmNjZlMDI1YmI5NzM1MDk0OWM1MmE5N1wiLFxuICAgICAgICBcInVzZXJJZHNcIjogW1xuICAgICAgICAgIFwib0hnQjU1TEoxd0dvMlFxRVl4Z284dExNeEw0QVwiLFxuICAgICAgICAgIFwib0hnQjU1QWxoS3FSN2F6cjg1WVlCd2ZJRTlFUVwiXG4gICAgICAgIF0sXG4gICAgICAgIFwiY3JlYXRlSWRcIjogXCJvSGdCNTVBbGhLcVI3YXpyODVZWUJ3ZklFOUVRXCIsXG4gICAgICAgIFwiY3JlYXRlZEF0XCI6IFwiMjAyMC0wOS0yMFQwNDo1Mjo1My4xMTVaXCIsXG4gICAgICAgIFwidXBkYXRlZEF0XCI6IFwiMjAyMC0wOS0yMFQwNzo1Nzo0My44MTVaXCIsXG4gICAgICAgIFwibGFzdE1lc3NhZ2VcIjoge1xuICAgICAgICAgIFwiY2lkXCI6IFwiNWY2NmUwMjViYjk3MzUwOTQ5YzUyYTk3XCIsXG4gICAgICAgICAgXCJ0eXBlXCI6IDEsXG4gICAgICAgICAgXCJtc2dcIjogXCJoZWxsbyBsaXNhXCIsXG4gICAgICAgICAgXCJzdGF0dXNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm9wZW5pZFwiOiBcIm9IZ0I1NUxKMXdHbzJRcUVZeGdvOHRMTXhMNEFcIixcbiAgICAgICAgICAgICAgXCJtc2dVbnJlYWRcIjogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJvcGVuaWRcIjogXCJvSGdCNTVBbGhLcVI3YXpyODVZWUJ3ZklFOUVRXCIsXG4gICAgICAgICAgICAgIFwibXNnVW5yZWFkXCI6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiZnJvbVwiOiBcIm9WMkpzNVRITDZFZHpEYWhBeENUeEZvWHlqSGtcIixcbiAgICAgICAgICBcImZyb21OYW1lXCI6IFwi5YiY56WW5a69XCIsXG4gICAgICAgICAgXCJmcm9tQXZhdGFyVXJsXCI6IFwiaHR0cHM6Ly93eC5xbG9nby5jbi9tbW9wZW4vdmlfMzIvRFlBSU9ncTgzZXJiQWZaMTBLOXJpY2hJQlR6N2tEc0E5bFVzVnl6aWNTaFhneHc5emVNZmVrT1VrNnM3SkdPVnRDemE1dmV1eHZpYnNKeU9PZ1ZJQ3dwUFEvMTMyXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF0sIC8vIOeUqOaIt+WIl+ihqFxuICAgIG1hdGNoZXJJbWFnZTogJy4uLy4uL3B1YmxpYy9pbWFnZS9tYXRjaGVyLnBuZycsXG4gIH0sXG5cblxuICBnZXRDaGF0TGlzdCgpIHtcbiAgICBBcGkuZ2V0Q2hhdExpc3QoKS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBjb25zdCB1c2VyTGlzdCA9IHJlc3VsdC5kYXRhO1xuICAgICAgICBjb25zb2xlLmxvZygndXNlckxpc3Q6JywgdXNlckxpc3QpXG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgIHVzZXJMaXN0XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwi6I635Y+W6IGK5aSp5YiX6KGo5aSx6LSlXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgIC8v6I635Y+W6IGK5aSp5YiX6KGoXG4gICAgdGhpcy5nZXRDaGF0TGlzdCgpO1xuICB9LFxuXG4gIC8qKiDljrvogYrlpKkgKi9cbiAgZ29DaGF0KGU6IGFueSkge1xuICAgIGNvbnN0IHsgb3BlbmlkIH0gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldDtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogYC4uL2NoYXQvY2hhdD9vcGVuaWQ9JHtvcGVuaWR9YCxcbiAgICB9KVxuICB9LFxuXG4gIG9uUmVhZHk6IGZ1bmN0aW9uICgpIHtcbiAgfSxcblxuICBvblNob3c6IGZ1bmN0aW9uICgpIHtcbiAgfSxcblxuICBvbkhpZGU6IGZ1bmN0aW9uICgpIHtcbiAgfSxcblxuICBvblVubG9hZDogZnVuY3Rpb24gKCkge1xuICB9LFxuXG4gIG9uUHVsbERvd25SZWZyZXNoOiBmdW5jdGlvbiAoKSB7XG4gIH0sXG5cbiAgb25SZWFjaEJvdHRvbTogZnVuY3Rpb24gKCkge1xuICB9LFxufSkiXX0=