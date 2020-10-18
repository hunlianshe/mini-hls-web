"use strict";
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
    onLoad: function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdExpc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGF0TGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFO1lBQ1I7Z0JBQ0UsS0FBSyxFQUFFLDBCQUEwQjtnQkFDakMsU0FBUyxFQUFFO29CQUNULDhCQUE4QjtvQkFDOUIsOEJBQThCO2lCQUMvQjtnQkFDRCxVQUFVLEVBQUUsOEJBQThCO2dCQUMxQyxXQUFXLEVBQUUsMEJBQTBCO2dCQUN2QyxXQUFXLEVBQUUsMEJBQTBCO2dCQUN2QyxhQUFhLEVBQUU7b0JBQ2IsS0FBSyxFQUFFLDBCQUEwQjtvQkFDakMsTUFBTSxFQUFFLENBQUM7b0JBQ1QsS0FBSyxFQUFFLFlBQVk7b0JBQ25CLFFBQVEsRUFBRTt3QkFDUjs0QkFDRSxRQUFRLEVBQUUsOEJBQThCOzRCQUN4QyxXQUFXLEVBQUUsSUFBSTt5QkFDbEI7d0JBQ0Q7NEJBQ0UsUUFBUSxFQUFFLDhCQUE4Qjs0QkFDeEMsV0FBVyxFQUFFLElBQUk7eUJBQ2xCO3FCQUNGO29CQUNELE1BQU0sRUFBRSw4QkFBOEI7b0JBQ3RDLFVBQVUsRUFBRSxLQUFLO29CQUNqQixlQUFlLEVBQUUsZ0lBQWdJO2lCQUNsSjthQUNGO1NBQ0Y7UUFDRCxZQUFZLEVBQUUsZ0NBQWdDO0tBQy9DO0lBRUQsTUFBTSxFQUFFO0lBRVIsQ0FBQztJQUdELE1BQU0sQ0FBQyxDQUFNO1FBQ1gsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQzNDLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsdUJBQXVCLE1BQU0sRUFBRTtTQUNyQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsT0FBTyxFQUFFO0lBRVQsQ0FBQztJQUVELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFFRCxNQUFNLEVBQUU7SUFFUixDQUFDO0lBS0QsUUFBUSxFQUFFO0lBRVYsQ0FBQztJQUtELGlCQUFpQixFQUFFO0lBRW5CLENBQUM7SUFLRCxhQUFhLEVBQUU7SUFFZixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIHVzZXJMaXN0OiBbXG4gICAgICB7XG4gICAgICAgIFwiX2lkXCI6IFwiNWY2NmUwMjViYjk3MzUwOTQ5YzUyYTk3XCIsXG4gICAgICAgIFwidXNlcklkc1wiOiBbXG4gICAgICAgICAgXCJvSGdCNTVMSjF3R28yUXFFWXhnbzh0TE14TDRBXCIsXG4gICAgICAgICAgXCJvSGdCNTVBbGhLcVI3YXpyODVZWUJ3ZklFOUVRXCJcbiAgICAgICAgXSxcbiAgICAgICAgXCJjcmVhdGVJZFwiOiBcIm9IZ0I1NUFsaEtxUjdhenI4NVlZQndmSUU5RVFcIixcbiAgICAgICAgXCJjcmVhdGVkQXRcIjogXCIyMDIwLTA5LTIwVDA0OjUyOjUzLjExNVpcIixcbiAgICAgICAgXCJ1cGRhdGVkQXRcIjogXCIyMDIwLTA5LTIwVDA3OjU3OjQzLjgxNVpcIixcbiAgICAgICAgXCJsYXN0TWVzc2FnZVwiOiB7XG4gICAgICAgICAgXCJjaWRcIjogXCI1ZjY2ZTAyNWJiOTczNTA5NDljNTJhOTdcIixcbiAgICAgICAgICBcInR5cGVcIjogMSxcbiAgICAgICAgICBcIm1zZ1wiOiBcImhlbGxvIGxpc2FcIixcbiAgICAgICAgICBcInN0YXR1c1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwib3BlbmlkXCI6IFwib0hnQjU1TEoxd0dvMlFxRVl4Z284dExNeEw0QVwiLFxuICAgICAgICAgICAgICBcIm1zZ1VucmVhZFwiOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm9wZW5pZFwiOiBcIm9IZ0I1NUFsaEtxUjdhenI4NVlZQndmSUU5RVFcIixcbiAgICAgICAgICAgICAgXCJtc2dVbnJlYWRcIjogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJmcm9tXCI6IFwib1YySnM1VEhMNkVkekRhaEF4Q1R4Rm9YeWpIa1wiLFxuICAgICAgICAgIFwiZnJvbU5hbWVcIjogXCLliJjnpZblrr1cIixcbiAgICAgICAgICBcImZyb21BdmF0YXJVcmxcIjogXCJodHRwczovL3d4LnFsb2dvLmNuL21tb3Blbi92aV8zMi9EWUFJT2dxODNlcmJBZloxMEs5cmljaElCVHo3a0RzQTlsVXNWeXppY1NoWGd4dzl6ZU1mZWtPVWs2czdKR09WdEN6YTV2ZXV4dmlic0p5T09nVklDd3BQUS8xMzJcIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgXSwgLy8g55So5oi35YiX6KGoXG4gICAgbWF0Y2hlckltYWdlOiAnLi4vLi4vcHVibGljL2ltYWdlL21hdGNoZXIucG5nJyxcbiAgfSxcblxuICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKiDljrvogYrlpKkgKi9cbiAgZ29DaGF0KGU6IGFueSkge1xuICAgIGNvbnN0IHsgb3BlbmlkIH0gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldDtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogYC4uL2NoYXQvY2hhdD9vcGVuaWQ9JHtvcGVuaWR9YCxcbiAgICB9KVxuICB9LFxuXG4gIG9uUmVhZHk6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIG9uU2hvdzogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgb25IaWRlOiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cbiAgICovXG4gIG9uVW5sb2FkOiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog6aG16Z2i55u45YWz5LqL5Lu25aSE55CG5Ye95pWwLS3nm5HlkKznlKjmiLfkuIvmi4nliqjkvZxcbiAgICovXG4gIG9uUHVsbERvd25SZWZyZXNoOiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog6aG16Z2i5LiK5ouJ6Kem5bqV5LqL5Lu255qE5aSE55CG5Ye95pWwXG4gICAqL1xuICBvblJlYWNoQm90dG9tOiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcbn0pIl19