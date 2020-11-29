"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Api = require("../../service/api.service");
const utils_1 = require("../../utils/utils");
const config_1 = require("../../config");
Page({
    data: {
        host: "",
        toOpenid: "",
        userList: [],
        me: {},
        matcherImage: "../../public/image/matcher.jpg",
        showDialog: false,
    },
    getChatList() {
        wx.showLoading({ title: '' });
        Api.getChatList().then((result) => {
            if (result) {
                const userList = result.data;
                userList.map((item) => {
                    item.date = utils_1.getDate(item.createdAt);
                    return item;
                });
                console.log("userList:", userList);
                this.setData({
                    userList,
                });
            }
            else {
                throw new Error("获取聊天列表失败");
            }
            wx.hideLoading();
        });
    },
    onLoad: function () {
        const user = wx.getStorageSync("user");
        console.log("user", user);
        console.log("hostUrl", config_1.default.hostUrl);
        this.setData({
            me: user,
            host: config_1.default.hostUrl,
        });
    },
    goChat(e) {
        console.log("e3wew", e.currentTarget.dataset);
        const { openids, cid } = e.currentTarget.dataset;
        console.log("openids", openids);
        this.getToUserByOpenids(openids);
        console.log("this.data.toOpenid", this.data.toOpenid);
        console.log("that.data.me.openid", this.data.me.openid);
        if (utils_1.dealFateChatIntercept(this.data.toOpenid)) {
            this.setData({
                showDialog: true,
            });
            return;
        }
        wx.navigateTo({
            url: `../chat/chat?openid=${this.data.toOpenid}&cid=${cid}`,
        });
    },
    closeDialog() {
        this.setData({
            showDialog: false,
        });
    },
    goMatchmaker() {
        wx.navigateTo({
            url: `../matchmaker/matchmaker`,
        });
    },
    getToUserByOpenids(users) {
        var that = this;
        users.forEach((user) => {
            if (that.data.me.openid !== user.openid) {
                that.setData({ toOpenid: user.openid });
            }
        });
    },
    onReady: function () { },
    onShow: function () {
        this.getChatList();
    },
    onHide: function () { },
    onUnload: function () { },
    onPullDownRefresh: function () { },
    onReachBottom: function () { },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdExpc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGF0TGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUFpRDtBQUNqRCw2Q0FBbUU7QUFDbkUseUNBQWtDO0FBRWxDLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxFQUFFO1FBQ1IsUUFBUSxFQUFFLEVBQUU7UUFDWixRQUFRLEVBQUUsRUFBRTtRQUNaLEVBQUUsRUFBRSxFQUFTO1FBQ2IsWUFBWSxFQUFFLGdDQUFnQztRQUM5QyxVQUFVLEVBQUUsS0FBSztLQUNsQjtJQUVELFdBQVc7UUFDVCxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUMsS0FBSyxFQUFFLEVBQUUsRUFBQyxDQUFDLENBQUM7UUFDNUIsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQVcsRUFBRSxFQUFFO1lBQ3JDLElBQUksTUFBTSxFQUFFO2dCQUNWLE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQzdCLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFTLEVBQUUsRUFBRTtvQkFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxlQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUNwQyxPQUFPLElBQUksQ0FBQztnQkFDZCxDQUFDLENBQUMsQ0FBQztnQkFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFDbkMsSUFBSSxDQUFDLE9BQVEsQ0FBQztvQkFDWixRQUFRO2lCQUNULENBQUMsQ0FBQzthQUNKO2lCQUFNO2dCQUNMLE1BQU0sSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDN0I7WUFDRCxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsTUFBTSxFQUFFO1FBQ04sTUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxnQkFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixFQUFFLEVBQUUsSUFBSTtZQUNSLElBQUksRUFBRSxnQkFBTSxDQUFDLE9BQU87U0FDckIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUdELE1BQU0sQ0FBQyxDQUFNO1FBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QyxNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQ2pELE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUV4RCxJQUFJLDZCQUFxQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDN0MsSUFBSSxDQUFDLE9BQVEsQ0FBQztnQkFDWixVQUFVLEVBQUUsSUFBSTthQUNqQixDQUFDLENBQUM7WUFDSCxPQUFPO1NBQ1I7UUFFRCxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLHVCQUF1QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsUUFBUSxHQUFHLEVBQUU7U0FDNUQsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osVUFBVSxFQUFFLEtBQUs7U0FDbEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUdELFlBQVk7UUFDVixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLDBCQUEwQjtTQUNoQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsa0JBQWtCLENBQUMsS0FBVTtRQUMzQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQVMsRUFBRSxFQUFFO1lBQzFCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ3ZDLElBQUksQ0FBQyxPQUFRLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7YUFDMUM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxPQUFPLEVBQUUsY0FBYSxDQUFDO0lBRXZCLE1BQU0sRUFBRTtRQUVOLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsTUFBTSxFQUFFLGNBQWEsQ0FBQztJQUV0QixRQUFRLEVBQUUsY0FBYSxDQUFDO0lBRXhCLGlCQUFpQixFQUFFLGNBQWEsQ0FBQztJQUVqQyxhQUFhLEVBQUUsY0FBYSxDQUFDO0NBQzlCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIEFwaSBmcm9tIFwiLi4vLi4vc2VydmljZS9hcGkuc2VydmljZVwiO1xuaW1wb3J0IHsgZ2V0RGF0ZSwgZGVhbEZhdGVDaGF0SW50ZXJjZXB0IH0gZnJvbSBcIi4uLy4uL3V0aWxzL3V0aWxzXCI7XG5pbXBvcnQgY29uZmlnIGZyb20gXCIuLi8uLi9jb25maWdcIjtcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBob3N0OiBcIlwiLFxuICAgIHRvT3BlbmlkOiBcIlwiLFxuICAgIHVzZXJMaXN0OiBbXSwgLy8g55So5oi35YiX6KGoXG4gICAgbWU6IHt9IGFzIGFueSwgLy8g55So5oi35YiX6KGoXG4gICAgbWF0Y2hlckltYWdlOiBcIi4uLy4uL3B1YmxpYy9pbWFnZS9tYXRjaGVyLmpwZ1wiLFxuICAgIHNob3dEaWFsb2c6IGZhbHNlLFxuICB9LFxuXG4gIGdldENoYXRMaXN0KCkge1xuICAgIHd4LnNob3dMb2FkaW5nKHt0aXRsZTogJyd9KTtcbiAgICBBcGkuZ2V0Q2hhdExpc3QoKS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBjb25zdCB1c2VyTGlzdCA9IHJlc3VsdC5kYXRhO1xuICAgICAgICB1c2VyTGlzdC5tYXAoKGl0ZW06IGFueSkgPT4ge1xuICAgICAgICAgIGl0ZW0uZGF0ZSA9IGdldERhdGUoaXRlbS5jcmVhdGVkQXQpO1xuICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJ1c2VyTGlzdDpcIiwgdXNlckxpc3QpO1xuICAgICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgICB1c2VyTGlzdCxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCLojrflj5bogYrlpKnliJfooajlpLHotKVcIik7XG4gICAgICB9XG4gICAgICB3eC5oaWRlTG9hZGluZygpO1xuICAgIH0pO1xuICB9LFxuXG4gIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHVzZXIgPSB3eC5nZXRTdG9yYWdlU3luYyhcInVzZXJcIik7XG4gICAgY29uc29sZS5sb2coXCJ1c2VyXCIsIHVzZXIpO1xuICAgIGNvbnNvbGUubG9nKFwiaG9zdFVybFwiLCBjb25maWcuaG9zdFVybCk7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBtZTogdXNlcixcbiAgICAgIGhvc3Q6IGNvbmZpZy5ob3N0VXJsLFxuICAgIH0pO1xuICB9LFxuXG4gIC8qKiDljrvogYrlpKkgKi9cbiAgZ29DaGF0KGU6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKFwiZTN3ZXdcIiwgZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQpO1xuICAgIGNvbnN0IHsgb3BlbmlkcywgY2lkIH0gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldDtcbiAgICBjb25zb2xlLmxvZyhcIm9wZW5pZHNcIiwgb3Blbmlkcyk7XG4gICAgdGhpcy5nZXRUb1VzZXJCeU9wZW5pZHMob3Blbmlkcyk7XG4gICAgY29uc29sZS5sb2coXCJ0aGlzLmRhdGEudG9PcGVuaWRcIiwgdGhpcy5kYXRhLnRvT3BlbmlkKTtcbiAgICBjb25zb2xlLmxvZyhcInRoYXQuZGF0YS5tZS5vcGVuaWRcIiwgdGhpcy5kYXRhLm1lLm9wZW5pZCk7XG5cbiAgICBpZiAoZGVhbEZhdGVDaGF0SW50ZXJjZXB0KHRoaXMuZGF0YS50b09wZW5pZCkpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICBzaG93RGlhbG9nOiB0cnVlLFxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6IGAuLi9jaGF0L2NoYXQ/b3BlbmlkPSR7dGhpcy5kYXRhLnRvT3BlbmlkfSZjaWQ9JHtjaWR9YCxcbiAgICB9KTtcbiAgfSxcblxuICBjbG9zZURpYWxvZygpIHtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIHNob3dEaWFsb2c6IGZhbHNlLFxuICAgIH0pO1xuICB9LFxuXG4gIC8qKiDnuqLlqJggKi9cbiAgZ29NYXRjaG1ha2VyKCkge1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiBgLi4vbWF0Y2htYWtlci9tYXRjaG1ha2VyYCxcbiAgICB9KTtcbiAgfSxcblxuICBnZXRUb1VzZXJCeU9wZW5pZHModXNlcnM6IGFueSkge1xuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICB1c2Vycy5mb3JFYWNoKCh1c2VyOiBhbnkpID0+IHtcbiAgICAgIGlmICh0aGF0LmRhdGEubWUub3BlbmlkICE9PSB1c2VyLm9wZW5pZCkge1xuICAgICAgICB0aGF0LnNldERhdGEhKHsgdG9PcGVuaWQ6IHVzZXIub3BlbmlkIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIG9uUmVhZHk6IGZ1bmN0aW9uICgpIHt9LFxuXG4gIG9uU2hvdzogZnVuY3Rpb24gKCkge1xuICAgIC8v6I635Y+W6IGK5aSp5YiX6KGoXG4gICAgdGhpcy5nZXRDaGF0TGlzdCgpO1xuICB9LFxuXG4gIG9uSGlkZTogZnVuY3Rpb24gKCkge30sXG5cbiAgb25VbmxvYWQ6IGZ1bmN0aW9uICgpIHt9LFxuXG4gIG9uUHVsbERvd25SZWZyZXNoOiBmdW5jdGlvbiAoKSB7fSxcblxuICBvblJlYWNoQm90dG9tOiBmdW5jdGlvbiAoKSB7fSxcbn0pO1xuIl19