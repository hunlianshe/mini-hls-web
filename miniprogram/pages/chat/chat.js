"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socket_service2_1 = require("../../service/socket.service2");
const utils_1 = require("../../utils/utils");
const Api = require("../../service/api.service");
Page({
    data: {
        openid: '',
        cid: '',
        me: {},
        host: '',
        toUser: {},
        userInfo: {},
        message: '',
        pagination: { pageSize: 50, pageToken: '' },
        messageList: [],
    },
    onLoad: function (options) {
        console.log("okkkk");
        let openid = options.openid;
        let cid = options.cid;
        this.setData({
            cid: cid
        });
        console.log("openid", openid);
        console.log("cid", cid);
        const user = wx.getStorageSync('user');
        console.log("user", user);
        this.setData({
            me: user
        });
        this.getToUserInfo(openid);
        this.getMessageList();
        this.receiveMessage();
    },
    getOpenid() {
        let openid = '';
        const user = wx.getStorageSync('user');
        openid = user.openid || '';
        return openid;
    },
    receiveMessage() {
        console.log("准备接收消息");
        let socket = socket_service2_1.getSocket();
        socket.on("privateChat", (msg) => {
            console.log("接收到的消息是", msg);
        });
    },
    getToUserInfo(openid) {
        Api.getUserInfo(openid).then((result) => {
            if (result) {
                const userInfo = result.data;
                console.log('userInfo:', userInfo);
                this.setData({
                    toUser: userInfo
                });
            }
            else {
                throw new Error("获取用户信息失败");
            }
        });
    },
    sendTap() {
        socket_service2_1.sendMessage({ cid: this.data.cid, msg: this.data.message, type: 1 });
        console.log('send message:', this.data.message);
        this.setChatSession();
    },
    setChatSession() {
        let chatSession = wx.getStorageSync('chatSession');
        let dateNow = new Date();
        if (chatSession.updateTime && chatSession.updateTime.toDateString() == dateNow.toDateString()) {
            if (chatSession.openidList) {
                const index = chatSession.openidList.findIndex((openid) => openid === this.data.openid);
                if (index) {
                    return;
                }
                else {
                    chatSession = {
                        updateTime: dateNow,
                        openidList: chatSession.openidList.push(this.data.openid)
                    };
                }
            }
        }
        else {
            chatSession = {
                updateTime: dateNow,
                openidList: [this.data.openid]
            };
        }
        console.log('chatSession:', chatSession);
        wx.setStorageSync("chatSession", chatSession);
        utils_1.setRightStorage('fateChat');
    },
    inputTap(e) {
        console.log('input message:', e);
        this.setData({
            message: e.detail.detail.value
        });
    },
    uploadImage(e) {
        console.log('upload image:', e.detail);
        socket_service2_1.sendMessage({ cid: this.data.cid, msg: e.detail, type: 2 });
    },
    getMessageList() {
        Api.getMessageByCid(this.data.cid, this.data.pagination.pageSize, this.data.pagination.pageToken).then((result) => {
            console.log("result.data", result.data);
            this.setData({
                pagination: {
                    pageToken: result.data.pageToken
                }
            });
            let messageList = result.data.result;
            const dateAry = [];
            messageList.map((item) => {
                const date = utils_1.getDate(item.createdAt);
                if (dateAry.indexOf(date) == -1) {
                    item.date = date;
                    dateAry.push(date);
                }
                else {
                    item.date = '';
                }
                item.time = utils_1.getTime(item.createdAt);
                return item;
            });
            this.setData({
                messageList,
            });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNoYXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtRUFBc0U7QUFDdEUsNkNBQXNFO0FBQ3RFLGlEQUFpRDtBQUVqRCxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixNQUFNLEVBQUUsRUFBRTtRQUNWLEdBQUcsRUFBRSxFQUFFO1FBQ1AsRUFBRSxFQUFFLEVBQUU7UUFDTixJQUFJLEVBQUUsRUFBRTtRQUNSLE1BQU0sRUFBRSxFQUFFO1FBQ1YsUUFBUSxFQUFFLEVBQUU7UUFDWixPQUFPLEVBQUUsRUFBRTtRQUNYLFVBQVUsRUFBRSxFQUFDLFFBQVEsRUFBRyxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBQztRQUMxQyxXQUFXLEVBQUUsRUFBRTtLQUNoQjtJQUVELE1BQU0sRUFBRSxVQUFVLE9BQVc7UUFFM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUNwQixJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO1FBQzVCLElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFDdEIsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLEdBQUcsRUFBRSxHQUFHO1NBQ1QsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUMsTUFBTSxDQUFDLENBQUE7UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFFdEIsTUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBQyxJQUFJLENBQUMsQ0FBQTtRQUd4QixJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osRUFBRSxFQUFFLElBQUk7U0FDVCxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FB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MUIsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQVMsRUFBRSxFQUFFO2dCQUM1QixNQUFNLElBQUksR0FBRyxlQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUNyQyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7b0JBQy9CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO29CQUNqQixPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNwQjtxQkFBTTtvQkFDTCxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztpQkFDaEI7Z0JBQ0QsSUFBSSxDQUFDLElBQUksR0FBRyxlQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUNwQyxPQUFPLElBQUksQ0FBQztZQUNkLENBQUMsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLE9BQVEsQ0FBQztnQkFDWixXQUFXO2FBQ1osQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUE7SUFFSixDQUFDO0lBS0QsT0FBTyxFQUFFO0lBRVQsQ0FBQztJQUtELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFLRCxNQUFNLEVBQUU7SUFFUixDQUFDO0lBS0QsUUFBUSxFQUFFO0lBRVYsQ0FBQztJQUtELGlCQUFpQixFQUFFO0lBRW5CLENBQUM7SUFLRCxhQUFhLEVBQUU7SUFFZixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtnZXRTb2NrZXQsIHNlbmRNZXNzYWdlIH0gZnJvbSAnLi4vLi4vc2VydmljZS9zb2NrZXQuc2VydmljZTInO1xuaW1wb3J0IHsgZ2V0RGF0ZSwgZ2V0VGltZSwgc2V0UmlnaHRTdG9yYWdlIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xuaW1wb3J0ICogYXMgQXBpIGZyb20gJy4uLy4uL3NlcnZpY2UvYXBpLnNlcnZpY2UnO1xuXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIG9wZW5pZDogJycsIC8vIOaUtuS/oeS6uueahG9wZW5pZFxuICAgIGNpZDogJycsXG4gICAgbWU6IHt9LCAvL+aIkeeahOeUqOaIt+S/oeaBr1xuICAgIGhvc3Q6ICcnLCAvL+aIkeeahOeUqOaIt+S/oeaBr1xuICAgIHRvVXNlcjoge30sIC8v5o6l5pS25Lq655qE55So5oi35L+h5oGvXG4gICAgdXNlckluZm86IHt9LCAvLyDnlKjmiLfkv6Hmga9cbiAgICBtZXNzYWdlOiAnJywgIC8vIOeUqOaIt+i+k+WFpeeahOa2iOaBr1xuICAgIHBhZ2luYXRpb246IHtwYWdlU2l6ZSA6IDUwLCBwYWdlVG9rZW46ICcnfSxcbiAgICBtZXNzYWdlTGlzdDogW10sXG4gIH0sXG5cbiAgb25Mb2FkOiBmdW5jdGlvbiAob3B0aW9uczphbnkpIHtcbiAgICAvLyB0aGlzLmdldFVzZXJJbmZvKCk7XG4gICAgY29uc29sZS5sb2coXCJva2tra1wiKVxuICAgIGxldCBvcGVuaWQgPSBvcHRpb25zLm9wZW5pZDtcbiAgICBsZXQgY2lkID0gb3B0aW9ucy5jaWQ7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBjaWQ6IGNpZFxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKFwib3BlbmlkXCIsb3BlbmlkKVxuICAgIGNvbnNvbGUubG9nKFwiY2lkXCIsY2lkKVxuXG4gICAgY29uc3QgdXNlciA9IHd4LmdldFN0b3JhZ2VTeW5jKCd1c2VyJyk7XG4gICAgY29uc29sZS5sb2coXCJ1c2VyXCIsdXNlcilcbiAgICAvLyBvcGVuaWQgPSB1c2VyLm9wZW5pZCB8fCAnJztcbiAgICAvLyByZXR1cm4gb3BlbmlkO1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgbWU6IHVzZXJcbiAgICB9KTtcblxuICAgIHRoaXMuZ2V0VG9Vc2VySW5mbyhvcGVuaWQpO1xuICAgIHRoaXMuZ2V0TWVzc2FnZUxpc3QoKTtcbiAgICB0aGlzLnJlY2VpdmVNZXNzYWdlKCk7XG4gIFxuICB9LFxuXG4gIGdldE9wZW5pZCgpIHtcbiAgICBsZXQgb3BlbmlkOiBzdHJpbmcgPSAnJztcbiAgICBjb25zdCB1c2VyID0gd3guZ2V0U3RvcmFnZVN5bmMoJ3VzZXInKTtcbiAgICBvcGVuaWQgPSB1c2VyLm9wZW5pZCB8fCAnJztcbiAgICByZXR1cm4gb3BlbmlkO1xuICB9LFxuXG5cblxuICByZWNlaXZlTWVzc2FnZSgpIHtcbiAgICBjb25zb2xlLmxvZyhcIuWHhuWkh+aOpeaUtua2iOaBr1wiKVxuICAgbGV0IHNvY2tldCA9IGdldFNvY2tldCgpXG4gICBzb2NrZXQub24oXCJwcml2YXRlQ2hhdFwiLCAobXNnOmFueSkgPT4ge1xuICAgICBjb25zb2xlLmxvZyhcIuaOpeaUtuWIsOeahOa2iOaBr+aYr1wiLG1zZylcbiAgIH0pXG5cbiAgfSxcblxuICAvLyDmtojmga/lr7nmlrnnmoTkv6Hmga9cbiAgZ2V0VG9Vc2VySW5mbyhvcGVuaWQ6IHN0cmluZykge1xuICAgIEFwaS5nZXRVc2VySW5mbyhvcGVuaWQpLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IHVzZXJJbmZvID0gcmVzdWx0LmRhdGE7XG4gICAgICAgIGNvbnNvbGUubG9nKCd1c2VySW5mbzonLCB1c2VySW5mbylcbiAgICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgICAgdG9Vc2VyOiB1c2VySW5mb1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIuiOt+WPlueUqOaIt+S/oeaBr+Wksei0pVwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICAvKiog5Y+R6YCB5raI5oGv5LqL5Lu2ICovXG4gIHNlbmRUYXAoKSB7XG4gICAgLy8gVE9ET1xuICAgIC8vIHRvIGRvXG4gICAgc2VuZE1lc3NhZ2Uoe2NpZDogdGhpcy5kYXRhLmNpZCwgbXNnOiB0aGlzLmRhdGEubWVzc2FnZSwgdHlwZTogMX0pO1xuICAgIGNvbnNvbGUubG9nKCdzZW5kIG1lc3NhZ2U6JywgdGhpcy5kYXRhLm1lc3NhZ2UpO1xuICAgIHRoaXMuc2V0Q2hhdFNlc3Npb24oKTtcbiAgfSxcblxuICBzZXRDaGF0U2Vzc2lvbigpIHtcbiAgICBsZXQgY2hhdFNlc3Npb24gPSB3eC5nZXRTdG9yYWdlU3luYygnY2hhdFNlc3Npb24nKTtcbiAgICBsZXQgZGF0ZU5vdyA9IG5ldyBEYXRlKCk7XG4gICAgLy8g5Yik5pat5piv5ZCm5piv5ZCM5LiA5aSpXG4gICAgaWYgKGNoYXRTZXNzaW9uLnVwZGF0ZVRpbWUgJiYgY2hhdFNlc3Npb24udXBkYXRlVGltZS50b0RhdGVTdHJpbmcoKSA9PSBkYXRlTm93LnRvRGF0ZVN0cmluZygpKSB7XG4gICAgICAvLyDljrvph43lkI7lrZjlhaXogYrlpKnkurrliJfooahcbiAgICAgIGlmIChjaGF0U2Vzc2lvbi5vcGVuaWRMaXN0KSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gY2hhdFNlc3Npb24ub3BlbmlkTGlzdC5maW5kSW5kZXgoKG9wZW5pZDogYW55KSA9PiBvcGVuaWQgPT09IHRoaXMuZGF0YS5vcGVuaWQpXG4gICAgICAgIGlmIChpbmRleCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjaGF0U2Vzc2lvbiA9IHtcbiAgICAgICAgICAgIHVwZGF0ZVRpbWU6IGRhdGVOb3csXG4gICAgICAgICAgICBvcGVuaWRMaXN0OiBjaGF0U2Vzc2lvbi5vcGVuaWRMaXN0LnB1c2godGhpcy5kYXRhLm9wZW5pZClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY2hhdFNlc3Npb24gPSB7XG4gICAgICAgIHVwZGF0ZVRpbWU6IGRhdGVOb3csXG4gICAgICAgIG9wZW5pZExpc3Q6IFt0aGlzLmRhdGEub3BlbmlkXVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmxvZygnY2hhdFNlc3Npb246JywgY2hhdFNlc3Npb24pXG4gICAgd3guc2V0U3RvcmFnZVN5bmMoXCJjaGF0U2Vzc2lvblwiLCBjaGF0U2Vzc2lvbik7XG4gICAgc2V0UmlnaHRTdG9yYWdlKCdmYXRlQ2hhdCcpO1xuICB9LFxuXG4gIC8qKiDovpPlhaXmtojmga/lhoXlrrkgKi9cbiAgaW5wdXRUYXAoZTogYW55KSB7XG4gICAgY29uc29sZS5sb2coJ2lucHV0IG1lc3NhZ2U6JywgZSk7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBtZXNzYWdlOiBlLmRldGFpbC5kZXRhaWwudmFsdWUgLy8g6I635Y+W6L6T5YWl55qE5YC8XG4gICAgfSlcbiAgfSxcblxuICAgLyoqIOi+k+WFpea2iOaBr+WGheWuuSAqL1xuICAgdXBsb2FkSW1hZ2UoZTogYW55KSB7XG4gICAgY29uc29sZS5sb2coJ3VwbG9hZCBpbWFnZTonLCBlLmRldGFpbCk7XG4gICAgc2VuZE1lc3NhZ2Uoe2NpZDogdGhpcy5kYXRhLmNpZCwgbXNnOiBlLmRldGFpbCwgdHlwZTogMn0pXG5cbiAgICAvLyB0aGlzLnNldERhdGEhKHtcbiAgICAvLyAgIG1lc3NhZ2U6IGUuZGV0YWlsLmRldGFpbC52YWx1ZSAvLyDojrflj5bovpPlhaXnmoTlgLxcbiAgICAvLyB9KVxuICB9LFxuXG5cbiAgZ2V0TWVzc2FnZUxpc3QoKSB7XG4gICAgLy8gY29uc3QgbWVzc2FnZUxpc3Q6IGFueSA9IFtcbiAgICAvLyAgIHtcbiAgICAvLyAgICAgXCJfaWRcIjogXCI1ZjY2ZTJmODI3MzUyNDhjMzFiOTdiZDhcIixcbiAgICAvLyAgICAgXCJ0eXBlXCI6IDEsXG4gICAgLy8gICAgIFwiY2lkXCI6IFwiNWY2NmUwMjViYjk3MzUwOTQ5YzUyYTk3XCIsXG4gICAgLy8gICAgIFwibXNnXCI6IFwiaGVsbG8gbGlzYVwiLFxuICAgIC8vICAgICBcInN0YXR1c1wiOiBbXG4gICAgLy8gICAgICAge1xuICAgIC8vICAgICAgICAgXCJtc2dVblJlYWRcIjogZmFsc2UsXG4gICAgLy8gICAgICAgICBcIl9pZFwiOiBcIjVmNjZlMmY4MjczNTI0OGMzMWI5N2JkYVwiLFxuICAgIC8vICAgICAgICAgXCJvcGVuaWRcIjogXCJvSGdCNTVMSjF3R28yUXFFWXhnbzh0TE14TDRBXCJcbiAgICAvLyAgICAgICB9LFxuICAgIC8vICAgICAgIHtcbiAgICAvLyAgICAgICAgIFwibXNnVW5SZWFkXCI6IHRydWUsXG4gICAgLy8gICAgICAgICBcIl9pZFwiOiBcIjVmNjZlMmY4MjczNTI0OGMzMWI5N2JkOVwiLFxuICAgIC8vICAgICAgICAgXCJvcGVuaWRcIjogXCJvSGdCNTVBbGhLcVI3YXpyODVZWUJ3ZklFOUVRXCJcbiAgICAvLyAgICAgICB9XG4gICAgLy8gICAgIF0sXG4gICAgLy8gICAgIFwiZnJvbVwiOiBcIm9IZ0I1NUxKMXdHbzJRcUVZeGdvOHRMTXhMNEFcIixcbiAgICAvLyAgICAgXCJ1cGRhdGVkQXRcIjogXCIyMDIwLTA5LTIwVDA1OjA0OjU2LjY4OFpcIixcbiAgICAvLyAgICAgXCJjcmVhdGVkQXRcIjogXCIyMDIwLTA5LTIwVDA1OjA0OjU2LjY4OFpcIlxuICAgIC8vICAgfSxcbiAgICAvLyAgIHtcbiAgICAvLyAgICAgXCJfaWRcIjogXCI1ZjY2ZTJmODI3MzUyNDhjMzFiOTdiZDhcIixcbiAgICAvLyAgICAgXCJ0eXBlXCI6IDEsXG4gICAgLy8gICAgIFwiY2lkXCI6IFwiNWY2NmUwMjViYjk3MzUwOTQ5YzUyYTk3XCIsXG4gICAgLy8gICAgIFwibXNnXCI6IFwi5ZCD6aWt5LqG5ZCXXCIsXG4gICAgLy8gICAgIFwic3RhdHVzXCI6IFtcbiAgICAvLyAgICAgICB7XG4gICAgLy8gICAgICAgICBcIm1zZ1VuUmVhZFwiOiBmYWxzZSxcbiAgICAvLyAgICAgICAgIFwiX2lkXCI6IFwiNWY2NmUyZjgyNzM1MjQ4YzMxYjk3YmRhXCIsXG4gICAgLy8gICAgICAgICBcIm9wZW5pZFwiOiBcIm9IZ0I1NUxKMXdHbzJRcUVZeGdvOHRMTXhMNEFcIlxuICAgIC8vICAgICAgIH0sXG4gICAgLy8gICAgICAge1xuICAgIC8vICAgICAgICAgXCJtc2dVblJlYWRcIjogdHJ1ZSxcbiAgICAvLyAgICAgICAgIFwiX2lkXCI6IFwiNWY2NmUyZjgyNzM1MjQ4YzMxYjk3YmQ5XCIsXG4gICAgLy8gICAgICAgICBcIm9wZW5pZFwiOiBcIm9IZ0I1NUFsaEtxUjdhenI4NVlZQndmSUU5RVFcIlxuICAgIC8vICAgICAgIH1cbiAgICAvLyAgICAgXSxcbiAgICAvLyAgICAgXCJmcm9tXCI6IFwib0hnQjU1QWxoS3FSN2F6cjg1WVlCd2ZJRTlFUVwiLFxuICAgIC8vICAgICBcInVwZGF0ZWRBdFwiOiBcIjIwMjAtMDktMjBUMDU6MDQ6NTYuNjg4WlwiLFxuICAgIC8vICAgICBcImNyZWF0ZWRBdFwiOiBcIjIwMjAtMDktMjBUMDU6MDQ6NTYuNjg4WlwiXG4gICAgLy8gICB9LFxuICAgIC8vIF07XG4gICAgQXBpLmdldE1lc3NhZ2VCeUNpZCh0aGlzLmRhdGEuY2lkLCB0aGlzLmRhdGEucGFnaW5hdGlvbi5wYWdlU2l6ZSwgdGhpcy5kYXRhLnBhZ2luYXRpb24ucGFnZVRva2VuKS50aGVuKChyZXN1bHQ6YW55KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcInJlc3VsdC5kYXRhXCIscmVzdWx0LmRhdGEpXG4gICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICAgIHBhZ2VUb2tlbjogcmVzdWx0LmRhdGEucGFnZVRva2VuXG4gICAgICAgIH0vLyDojrflj5bovpPlhaXnmoTlgLxcbiAgICAgIH0pXG4gICAgIGxldCAgbWVzc2FnZUxpc3QgPSByZXN1bHQuZGF0YS5yZXN1bHRcbiAgICAgIGNvbnN0IGRhdGVBcnk6IGFueVtdID0gW107XG4gICAgICBtZXNzYWdlTGlzdC5tYXAoKGl0ZW06IGFueSkgPT4ge1xuICAgICAgICBjb25zdCBkYXRlID0gZ2V0RGF0ZShpdGVtLmNyZWF0ZWRBdCk7XG4gICAgICAgIGlmIChkYXRlQXJ5LmluZGV4T2YoZGF0ZSkgPT0gLTEpIHtcbiAgICAgICAgICBpdGVtLmRhdGUgPSBkYXRlO1xuICAgICAgICAgIGRhdGVBcnkucHVzaChkYXRlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtLmRhdGUgPSAnJztcbiAgICAgICAgfVxuICAgICAgICBpdGVtLnRpbWUgPSBnZXRUaW1lKGl0ZW0uY3JlYXRlZEF0KTtcbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICB9KTtcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICBtZXNzYWdlTGlzdCxcbiAgICAgIH0pO1xuICAgIH0pXG4gIFxuICB9LFxuICBcbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yid5qyh5riy5p+T5a6M5oiQXG4gICAqL1xuICBvblJlYWR5OiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcbiAgICovXG4gIG9uU2hvdzogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXG4gICAqL1xuICBvbkhpZGU6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxuICAgKi9cbiAgb25VbmxvYWQ6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxuICAgKi9cbiAgb25QdWxsRG93blJlZnJlc2g6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcbiAgICovXG4gIG9uUmVhY2hCb3R0b206IGZ1bmN0aW9uICgpIHtcblxuICB9LFxufSkiXX0=