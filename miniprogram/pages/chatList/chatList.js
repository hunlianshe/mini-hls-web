"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Api = require("../../service/api.service");
const utils_1 = require("../../utils/utils");
const config_1 = require("../../config");
Page({
    data: {
        host: '',
        toOpenid: '',
        userList: [],
        me: {},
        matcherImage: '../../public/image/matcher.png',
        showDialog: false,
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
        const { openids, cid } = e.currentTarget.dataset;
        console.log("openids", openids);
        this.getToUserByOpenids(openids);
        console.log("this.data.toOpenid", this.data.toOpenid);
        console.log("that.data.me.openid", this.data.me.openid);
        let rightType = 'fateChat';
        if (utils_1.dealRightIntercept(rightType)) {
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
    getToUserByOpenids(userIds) {
        var that = this;
        userIds.forEach(userId => {
            if (that.data.me.openid !== userId) {
                that.setData({ toOpenid: userId });
            }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdExpc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGF0TGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUFpRDtBQUNqRCw2Q0FBZ0U7QUFDaEUseUNBQWtDO0FBRWxDLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLElBQUksRUFBQyxFQUFFO1FBQ1AsUUFBUSxFQUFDLEVBQUU7UUFDWCxRQUFRLEVBQUUsRUFBRTtRQUNaLEVBQUUsRUFBRSxFQUFFO1FBQ04sWUFBWSxFQUFFLGdDQUFnQztRQUM5QyxVQUFVLEVBQUUsS0FBSztLQUNsQjtJQUVELFdBQVc7UUFDVCxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBVyxFQUFFLEVBQUU7WUFDckMsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDN0IsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQVMsRUFBRSxFQUFFO29CQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLGVBQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQ3BDLE9BQU8sSUFBSSxDQUFDO2dCQUNkLENBQUMsQ0FBQyxDQUFDO2dCQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFBO2dCQUNsQyxJQUFJLENBQUMsT0FBUSxDQUFDO29CQUNaLFFBQVE7aUJBQ1QsQ0FBQyxDQUFDO2FBQ0o7aUJBQU07Z0JBQ0wsTUFBTSxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUM3QjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELE1BQU0sRUFBRTtRQUNOLE1BQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUMsSUFBSSxDQUFDLENBQUE7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUMsZ0JBQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUNyQyxJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osRUFBRSxFQUFFLElBQUk7WUFDUixJQUFJLEVBQUUsZ0JBQU0sQ0FBQyxPQUFPO1NBQ3JCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFHRCxNQUFNLENBQUMsQ0FBTTtRQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDNUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUNqRCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBQyxPQUFPLENBQUMsQ0FBQTtRQUM5QixJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ3BELE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUE7UUFFdEQsSUFBSSxTQUFTLEdBQUcsVUFBVSxDQUFDO1FBQzNCLElBQUksMEJBQWtCLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDakMsSUFBSSxDQUFDLE9BQVEsQ0FBQztnQkFDWixVQUFVLEVBQUUsSUFBSTthQUNqQixDQUFDLENBQUM7WUFDSCxPQUFPO1NBQ1I7UUFFRCxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLHVCQUF1QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsUUFBUSxHQUFHLEVBQUU7U0FDNUQsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osVUFBVSxFQUFFLEtBQUs7U0FDbEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUdELFlBQVk7UUFDVixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLDBCQUEwQjtTQUNoQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsa0JBQWtCLENBQUMsT0FBTztRQUN4QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUN2QixJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sS0FBSyxNQUFNLEVBQUM7Z0JBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBQyxRQUFRLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQTthQUNqQztRQUNILENBQUMsQ0FBQyxDQUFBO0lBRUosQ0FBQztJQUVELE9BQU8sRUFBRTtJQUNULENBQUM7SUFFRCxNQUFNLEVBQUU7UUFFTixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELE1BQU0sRUFBRTtJQUNSLENBQUM7SUFFRCxRQUFRLEVBQUU7SUFDVixDQUFDO0lBRUQsaUJBQWlCLEVBQUU7SUFDbkIsQ0FBQztJQUVELGFBQWEsRUFBRTtJQUNmLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBBcGkgZnJvbSAnLi4vLi4vc2VydmljZS9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBnZXREYXRlLCBkZWFsUmlnaHRJbnRlcmNlcHQgfSBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4uLy4uL2NvbmZpZyc7XG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgaG9zdDonJyxcbiAgICB0b09wZW5pZDonJyxcbiAgICB1c2VyTGlzdDogW10sIC8vIOeUqOaIt+WIl+ihqFxuICAgIG1lOiB7fSwgLy8g55So5oi35YiX6KGoXG4gICAgbWF0Y2hlckltYWdlOiAnLi4vLi4vcHVibGljL2ltYWdlL21hdGNoZXIucG5nJyxcbiAgICBzaG93RGlhbG9nOiBmYWxzZSxcbiAgfSxcblxuICBnZXRDaGF0TGlzdCgpIHtcbiAgICBBcGkuZ2V0Q2hhdExpc3QoKS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBjb25zdCB1c2VyTGlzdCA9IHJlc3VsdC5kYXRhO1xuICAgICAgICB1c2VyTGlzdC5tYXAoKGl0ZW06IGFueSkgPT4ge1xuICAgICAgICAgIGl0ZW0uZGF0ZSA9IGdldERhdGUoaXRlbS5jcmVhdGVkQXQpO1xuICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2coJ3VzZXJMaXN0OicsIHVzZXJMaXN0KVxuICAgICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgICB1c2VyTGlzdFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIuiOt+WPluiBiuWkqeWIl+ihqOWksei0pVwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCB1c2VyID0gd3guZ2V0U3RvcmFnZVN5bmMoJ3VzZXInKTtcbiAgICBjb25zb2xlLmxvZyhcInVzZXJcIix1c2VyKVxuICAgIGNvbnNvbGUubG9nKFwiaG9zdFVybFwiLGNvbmZpZy5ob3N0VXJsKVxuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgbWU6IHVzZXIsXG4gICAgICBob3N0OiBjb25maWcuaG9zdFVybCxcbiAgICB9KTtcbiAgfSxcblxuICAvKiog5Y676IGK5aSpICovXG4gIGdvQ2hhdChlOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZyhcImUzd2V3XCIsZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQpXG4gICAgY29uc3QgeyBvcGVuaWRzLCBjaWQgfSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0O1xuICAgIGNvbnNvbGUubG9nKFwib3Blbmlkc1wiLG9wZW5pZHMpXG4gICAgdGhpcy5nZXRUb1VzZXJCeU9wZW5pZHMob3BlbmlkcylcbiAgICBjb25zb2xlLmxvZyhcInRoaXMuZGF0YS50b09wZW5pZFwiLHRoaXMuZGF0YS50b09wZW5pZClcbiAgICBjb25zb2xlLmxvZyhcInRoYXQuZGF0YS5tZS5vcGVuaWRcIix0aGlzLmRhdGEubWUub3BlbmlkKVxuXG4gICAgbGV0IHJpZ2h0VHlwZSA9ICdmYXRlQ2hhdCc7XG4gICAgaWYgKGRlYWxSaWdodEludGVyY2VwdChyaWdodFR5cGUpKSB7XG4gICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgc2hvd0RpYWxvZzogdHJ1ZSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiBgLi4vY2hhdC9jaGF0P29wZW5pZD0ke3RoaXMuZGF0YS50b09wZW5pZH0mY2lkPSR7Y2lkfWAsXG4gICAgfSlcbiAgfSxcblxuICBjbG9zZURpYWxvZygpIHtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIHNob3dEaWFsb2c6IGZhbHNlLFxuICAgIH0pO1xuICB9LFxuXG4gIC8qKiDnuqLlqJggKi9cbiAgZ29NYXRjaG1ha2VyKCkge1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiBgLi4vbWF0Y2htYWtlci9tYXRjaG1ha2VyYCxcbiAgICB9KVxuICB9LFxuXG4gIGdldFRvVXNlckJ5T3Blbmlkcyh1c2VySWRzKXtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgdXNlcklkcy5mb3JFYWNoKHVzZXJJZCA9PiB7XG4gICAgICBpZih0aGF0LmRhdGEubWUub3BlbmlkICE9PSB1c2VySWQpe1xuICAgICAgICB0aGF0LnNldERhdGEoe3RvT3BlbmlkOiB1c2VySWR9KVxuICAgICAgfVxuICAgIH0pXG5cbiAgfSxcblxuICBvblJlYWR5OiBmdW5jdGlvbiAoKSB7XG4gIH0sXG5cbiAgb25TaG93OiBmdW5jdGlvbiAoKSB7XG4gICAgLy/ojrflj5bogYrlpKnliJfooahcbiAgICB0aGlzLmdldENoYXRMaXN0KCk7XG4gIH0sXG5cbiAgb25IaWRlOiBmdW5jdGlvbiAoKSB7XG4gIH0sXG5cbiAgb25VbmxvYWQ6IGZ1bmN0aW9uICgpIHtcbiAgfSxcblxuICBvblB1bGxEb3duUmVmcmVzaDogZnVuY3Rpb24gKCkge1xuICB9LFxuXG4gIG9uUmVhY2hCb3R0b206IGZ1bmN0aW9uICgpIHtcbiAgfSxcbn0pIl19