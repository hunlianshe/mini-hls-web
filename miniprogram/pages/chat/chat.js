"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socket_service2_1 = require("../../service/socket.service2");
const utils_1 = require("../../utils/utils");
const Api = require("../../service/api.service");
const ChatService = require("../../service/chat.service");
Page({
    data: {
        openid: '',
        cid: '',
        me: {},
        host: '',
        toUser: {},
        userInfo: {},
        message: '',
        pagination: { pageSize: 10, pageToken: '' },
        messageList: [],
    },
    onLoad: function (options) {
        console.log("okkkk");
        console.log(options);
        let openid = options.openid;
        let cid = options.cid;
        this.setData({
            cid: cid,
            openid: openid,
        });
        console.log("openid", openid);
        console.log("cid", cid);
        console.log("cid", cid);
        const user = wx.getStorageSync('user');
        console.log("user", user);
        this.setData({
            me: user
        });
        this.readAllMessage();
        this.getToUserInfo(openid);
        const { pagination } = this.data;
        this.getMessageList(pagination.pageSize, pagination.pageToken);
        this.receiveMessage();
    },
    readAllMessage() {
        ChatService.updateMsgToReadStatus(this.data.cid);
    },
    getOpenid() {
        let openid = '';
        const user = wx.getStorageSync('user');
        openid = user.openid || '';
        return openid;
    },
    receiveMessage() {
        function getRandom(num) {
            return Math.floor((Math.random() + Math.floor(Math.random() * 9 + 1)) * Math.pow(10, num - 1));
        }
        console.log("准备接收消息");
        let socket = socket_service2_1.getSocket();
        socket.on("privateChat", (msg) => {
            console.log("接收到的消息是", msg);
            var messageList = this.data.messageList;
            console.log("getRandom(10)", getRandom(10));
            msg._id = getRandom(10);
            messageList.push(msg);
            console.log("`item${messageList.length}`", messageList.length);
            this.setData({ messageList });
            let toLast = `item${messageList.length}`;
            console.log('toLast', toLast);
            this.setData({
                scrollTop: 1000 * messageList.length
            });
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
        if (chatSession && chatSession.updateTime && new Date(chatSession.updateTime).toDateString() == dateNow.toDateString()) {
            if (chatSession.openidList && chatSession.openidList.length > 0) {
                const index = chatSession.openidList.findIndex((openid) => openid === this.data.openid);
                if (index !== -1) {
                    return;
                }
                else {
                    let openidList = chatSession.openidList.push(this.data.openid);
                    chatSession = {
                        updateTime: dateNow,
                        openidList,
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
    getMessageList(pageSize, pageToken) {
        Api.getMessageByCid(this.data.cid, pageSize, pageToken).then((result) => {
            console.log("result.data", result.data);
            let resultList = result.data.result;
            let lastId = result.data.nextPageToken;
            this.setData({
                pagination: {
                    pageToken: lastId,
                    pageSize: 10
                }
            });
            const dateAry = [];
            resultList = resultList.reverse();
            let { messageList } = this.data;
            messageList = resultList.concat(messageList);
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
                messageList
            });
        });
    },
    onPageScroll: function (res) {
        const { pagination } = this.data;
        if (res.scrollTop === 0 && pagination.pageToken !== '') {
            this.getMessageList(pagination.pageSize, pagination.pageToken);
        }
    },
    onReady: function () {
    },
    onShow: function () {
    },
    onHide: function () {
    },
    onUnload: function () {
        console.log('chat page unload', this.data.cid);
        ChatService.updateMsgToReadStatus(this.data.cid);
    },
    onPullDownRefresh: function () {
    },
    onReachBottom: function () {
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNoYXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtRUFBc0U7QUFDdEUsNkNBQXNFO0FBQ3RFLGlEQUFpRDtBQUNqRCwwREFBMEQ7QUFFMUQsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osTUFBTSxFQUFFLEVBQUU7UUFDVixHQUFHLEVBQUUsRUFBRTtRQUNQLEVBQUUsRUFBRSxFQUFFO1FBQ04sSUFBSSxFQUFFLEVBQUU7UUFDUixNQUFNLEVBQUUsRUFBRTtRQUNWLFFBQVEsRUFBRSxFQUFFO1FBQ1osT0FBTyxFQUFFLEVBQUU7UUFDWCxVQUFVLEVBQUUsRUFBQyxRQUFRLEVBQUcsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUM7UUFDMUMsV0FBVyxFQUFFLEVBQUU7S0FDaEI7SUFFRCxNQUFNLEVBQUUsVUFBVSxPQUFXO1FBRTNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUNwQixJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO1FBQzVCLElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFDdEIsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLEdBQUcsRUFBRSxHQUFHO1lBQ1IsTUFBTSxFQUFFLE1BQU07U0FDZixDQUFDLENBQUM7UUFFSCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBQyxNQUFNLENBQUMsQ0FBQTtRQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUV0QixNQUFNLElBQUksR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZDLE9BQU8sQ0FBQyxHQUFH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VSxHQUFRO1FBRTlCLE1BQU0sRUFBRSxVQUFVLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ2pDLElBQUksR0FBRyxDQUFDLFNBQVMsS0FBSyxDQUFDLElBQUksVUFBVSxDQUFDLFNBQVMsS0FBSyxFQUFFLEVBQUU7WUFDdEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNoRTtJQUNILENBQUM7SUFLRCxPQUFPLEVBQUU7SUFFVCxDQUFDO0lBS0QsTUFBTSxFQUFFO0lBRVIsQ0FBQztJQUtELE1BQU0sRUFBRTtJQUNSLENBQUM7SUFLRCxRQUFRLEVBQUU7UUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDL0MsV0FBVyxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUtELGlCQUFpQixFQUFFO0lBQ25CLENBQUM7SUFLRCxhQUFhLEVBQUU7SUFDZixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtnZXRTb2NrZXQsIHNlbmRNZXNzYWdlIH0gZnJvbSAnLi4vLi4vc2VydmljZS9zb2NrZXQuc2VydmljZTInO1xuaW1wb3J0IHsgZ2V0RGF0ZSwgZ2V0VGltZSwgc2V0UmlnaHRTdG9yYWdlIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xuaW1wb3J0ICogYXMgQXBpIGZyb20gJy4uLy4uL3NlcnZpY2UvYXBpLnNlcnZpY2UnO1xuaW1wb3J0ICogYXMgQ2hhdFNlcnZpY2UgZnJvbSAnLi4vLi4vc2VydmljZS9jaGF0LnNlcnZpY2UnO1xuXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIG9wZW5pZDogJycsIC8vIOaUtuS/oeS6uueahG9wZW5pZFxuICAgIGNpZDogJycsXG4gICAgbWU6IHt9LCAvLyDmiJHnmoTnlKjmiLfkv6Hmga9cbiAgICBob3N0OiAnJywgLy8g5oiR55qE55So5oi35L+h5oGvXG4gICAgdG9Vc2VyOiB7fSwgLy8g5o6l5pS25Lq655qE55So5oi35L+h5oGvXG4gICAgdXNlckluZm86IHt9LCAvLyDnlKjmiLfkv6Hmga9cbiAgICBtZXNzYWdlOiAnJywgIC8vIOeUqOaIt+i+k+WFpeeahOa2iOaBr1xuICAgIHBhZ2luYXRpb246IHtwYWdlU2l6ZSA6IDEwLCBwYWdlVG9rZW46ICcnfSxcbiAgICBtZXNzYWdlTGlzdDogW10sXG4gIH0sXG5cbiAgb25Mb2FkOiBmdW5jdGlvbiAob3B0aW9uczphbnkpIHtcbiAgICAvLyB0aGlzLmdldFVzZXJJbmZvKCk7XG4gICAgY29uc29sZS5sb2coXCJva2tra1wiKVxuICAgIGNvbnNvbGUubG9nKG9wdGlvbnMpXG4gICAgbGV0IG9wZW5pZCA9IG9wdGlvbnMub3BlbmlkO1xuICAgIGxldCBjaWQgPSBvcHRpb25zLmNpZDtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIGNpZDogY2lkLFxuICAgICAgb3BlbmlkOiBvcGVuaWQsXG4gICAgfSk7XG5cbiAgICBjb25zb2xlLmxvZyhcIm9wZW5pZFwiLG9wZW5pZClcbiAgICBjb25zb2xlLmxvZyhcImNpZFwiLGNpZClcbiAgICBjb25zb2xlLmxvZyhcImNpZFwiLGNpZClcblxuICAgIGNvbnN0IHVzZXIgPSB3eC5nZXRTdG9yYWdlU3luYygndXNlcicpO1xuICAgIGNvbnNvbGUubG9nKFwidXNlclwiLHVzZXIpXG4gICAgLy8gb3BlbmlkID0gdXNlci5vcGVuaWQgfHwgJyc7XG4gICAgLy8gcmV0dXJuIG9wZW5pZDtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIG1lOiB1c2VyXG4gICAgfSk7XG4gICAgdGhpcy5yZWFkQWxsTWVzc2FnZSgpO1xuXG4gICAgdGhpcy5nZXRUb1VzZXJJbmZvKG9wZW5pZCk7XG4gICAgY29uc3QgeyBwYWdpbmF0aW9uIH0gPSB0aGlzLmRhdGE7XG4gICAgdGhpcy5nZXRNZXNzYWdlTGlzdChwYWdpbmF0aW9uLnBhZ2VTaXplLCBwYWdpbmF0aW9uLnBhZ2VUb2tlbik7XG4gICAgdGhpcy5yZWNlaXZlTWVzc2FnZSgpO1xuICB9LFxuXG4gIC8vIOiuvue9rua2iOaBr+W3suivu1xuICByZWFkQWxsTWVzc2FnZSgpIHtcbiAgICBDaGF0U2VydmljZS51cGRhdGVNc2dUb1JlYWRTdGF0dXModGhpcy5kYXRhLmNpZCk7XG4gIH0sXG5cbiAgZ2V0T3BlbmlkKCkge1xuICAgIGxldCBvcGVuaWQ6IHN0cmluZyA9ICcnO1xuICAgIGNvbnN0IHVzZXIgPSB3eC5nZXRTdG9yYWdlU3luYygndXNlcicpO1xuICAgIG9wZW5pZCA9IHVzZXIub3BlbmlkIHx8ICcnO1xuICAgIHJldHVybiBvcGVuaWQ7XG4gIH0sXG5cblxuXG4gIHJlY2VpdmVNZXNzYWdlKCkge1xuICAgIGZ1bmN0aW9uIGdldFJhbmRvbShudW06IGFueSl7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKStNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqOSsxKSkqTWF0aC5wb3coMTAsbnVtLTEpKTtcbiAgfVxuICAgIGNvbnNvbGUubG9nKFwi5YeG5aSH5o6l5pS25raI5oGvXCIpXG4gICBsZXQgc29ja2V0ID0gZ2V0U29ja2V0KClcbiAgIHNvY2tldC5vbihcInByaXZhdGVDaGF0XCIsIChtc2c6YW55KSA9PiB7XG4gICAgIGNvbnNvbGUubG9nKFwi5o6l5pS25Yiw55qE5raI5oGv5pivXCIsbXNnKVxuICAgICB2YXIgbWVzc2FnZUxpc3Q6IGFueSA9IHRoaXMuZGF0YS5tZXNzYWdlTGlzdDtcbiAgICAgY29uc29sZS5sb2coXCJnZXRSYW5kb20oMTApXCIsZ2V0UmFuZG9tKDEwKSk7XG4gICAgIG1zZy5faWQgPSBnZXRSYW5kb20oMTApXG4gICAgIG1lc3NhZ2VMaXN0LnB1c2gobXNnKTtcbiAgICAgY29uc29sZS5sb2coXCJgaXRlbSR7bWVzc2FnZUxpc3QubGVuZ3RofWBcIixtZXNzYWdlTGlzdC5sZW5ndGgpXG4gICAgIHRoaXMuc2V0RGF0YSEoe21lc3NhZ2VMaXN0fSlcbiAgICAgbGV0IHRvTGFzdCA9IGBpdGVtJHttZXNzYWdlTGlzdC5sZW5ndGh9YFxuICAgICBjb25zb2xlLmxvZygndG9MYXN0Jyx0b0xhc3QpXG4gICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgc2Nyb2xsVG9wOiAxMDAwICogbWVzc2FnZUxpc3QubGVuZ3RoICAvLyDov5nph4zmiJHku6znmoTljZXlr7nor53ljLrln5/mnIDpq5gxMDAw77yM5Y+W5LqG5pyA5aSn5YC877yM5bqU6K+l5pyJ5pa55rOV5Y+W5Yiw57K+56Gu55qEXG4gICAgfSk7XG5cbiAgIH0pXG5cbiAgfSxcblxuICAvLyDmtojmga/lr7nmlrnnmoTkv6Hmga9cbiAgZ2V0VG9Vc2VySW5mbyhvcGVuaWQ6IHN0cmluZykge1xuICAgIEFwaS5nZXRVc2VySW5mbyhvcGVuaWQpLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IHVzZXJJbmZvID0gcmVzdWx0LmRhdGE7XG4gICAgICAgIGNvbnNvbGUubG9nKCd1c2VySW5mbzonLCB1c2VySW5mbylcbiAgICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgICAgdG9Vc2VyOiB1c2VySW5mb1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIuiOt+WPlueUqOaIt+S/oeaBr+Wksei0pVwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICAvKiog5Y+R6YCB5raI5oGv5LqL5Lu2ICovXG4gIHNlbmRUYXAoKSB7XG4gICAgc2VuZE1lc3NhZ2Uoe2NpZDogdGhpcy5kYXRhLmNpZCwgbXNnOiB0aGlzLmRhdGEubWVzc2FnZSwgdHlwZTogMX0pO1xuICAgIGNvbnNvbGUubG9nKCdzZW5kIG1lc3NhZ2U6JywgdGhpcy5kYXRhLm1lc3NhZ2UpO1xuXG4gICAgdGhpcy5zZXRDaGF0U2Vzc2lvbigpO1xuICB9LFxuXG4gIHNldENoYXRTZXNzaW9uKCkge1xuXG4gICAgbGV0IGNoYXRTZXNzaW9uID0gd3guZ2V0U3RvcmFnZVN5bmMoJ2NoYXRTZXNzaW9uJyk7XG4gICAgbGV0IGRhdGVOb3cgPSBuZXcgRGF0ZSgpO1xuICAgIC8vIOWIpOaWreaYr+WQpuaYr+WQjOS4gOWkqVxuICAgIGlmIChjaGF0U2Vzc2lvbiAmJiBjaGF0U2Vzc2lvbi51cGRhdGVUaW1lICYmIG5ldyBEYXRlKGNoYXRTZXNzaW9uLnVwZGF0ZVRpbWUpLnRvRGF0ZVN0cmluZygpID09IGRhdGVOb3cudG9EYXRlU3RyaW5nKCkpIHtcbiAgICAgIC8vIOWOu+mHjeWQjuWtmOWFpeiBiuWkqeS6uuWIl+ihqFxuICAgICAgaWYgKGNoYXRTZXNzaW9uLm9wZW5pZExpc3QgJiYgY2hhdFNlc3Npb24ub3BlbmlkTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gY2hhdFNlc3Npb24ub3BlbmlkTGlzdC5maW5kSW5kZXgoKG9wZW5pZDogYW55KSA9PiBvcGVuaWQgPT09IHRoaXMuZGF0YS5vcGVuaWQpXG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IG9wZW5pZExpc3QgPSBjaGF0U2Vzc2lvbi5vcGVuaWRMaXN0LnB1c2godGhpcy5kYXRhLm9wZW5pZCk7XG4gICAgICAgICAgY2hhdFNlc3Npb24gPSB7XG4gICAgICAgICAgICB1cGRhdGVUaW1lOiBkYXRlTm93LFxuICAgICAgICAgICAgb3BlbmlkTGlzdCxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY2hhdFNlc3Npb24gPSB7XG4gICAgICAgIHVwZGF0ZVRpbWU6IGRhdGVOb3csXG4gICAgICAgIG9wZW5pZExpc3Q6IFt0aGlzLmRhdGEub3BlbmlkXVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmxvZygnY2hhdFNlc3Npb246JywgY2hhdFNlc3Npb24pXG4gICAgd3guc2V0U3RvcmFnZVN5bmMoXCJjaGF0U2Vzc2lvblwiLCBjaGF0U2Vzc2lvbik7XG4gIH0sXG5cbiAgLyoqIOi+k+WFpea2iOaBr+WGheWuuSAqL1xuICBpbnB1dFRhcChlOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZygnaW5wdXQgbWVzc2FnZTonLCBlKTtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIG1lc3NhZ2U6IGUuZGV0YWlsLmRldGFpbC52YWx1ZSAvLyDojrflj5bovpPlhaXnmoTlgLxcbiAgICB9KVxuICB9LFxuXG4gICAvKiog6L6T5YWl5raI5oGv5YaF5a65ICovXG4gICB1cGxvYWRJbWFnZShlOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZygndXBsb2FkIGltYWdlOicsIGUuZGV0YWlsKTtcbiAgICBzZW5kTWVzc2FnZSh7Y2lkOiB0aGlzLmRhdGEuY2lkLCBtc2c6IGUuZGV0YWlsLCB0eXBlOiAyfSlcbiAgfSxcblxuICBnZXRNZXNzYWdlTGlzdChwYWdlU2l6ZTogbnVtYmVyLCBwYWdlVG9rZW46IHN0cmluZykge1xuICAgIEFwaS5nZXRNZXNzYWdlQnlDaWQodGhpcy5kYXRhLmNpZCwgcGFnZVNpemUsIHBhZ2VUb2tlbikudGhlbigocmVzdWx0OmFueSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJyZXN1bHQuZGF0YVwiLHJlc3VsdC5kYXRhKVxuICAgICAgbGV0IHJlc3VsdExpc3QgPSByZXN1bHQuZGF0YS5yZXN1bHQ7XG4gICAgICBsZXQgbGFzdElkID0gcmVzdWx0LmRhdGEubmV4dFBhZ2VUb2tlbjtcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgICAgcGFnZVRva2VuOiBsYXN0SWQsXG4gICAgICAgICAgcGFnZVNpemU6IDEwXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBjb25zdCBkYXRlQXJ5OiBhbnlbXSA9IFtdO1xuICAgICAgcmVzdWx0TGlzdCA9IHJlc3VsdExpc3QucmV2ZXJzZSgpO1xuICAgICAgbGV0IHsgbWVzc2FnZUxpc3QgfSA9IHRoaXMuZGF0YTtcbiAgICAgIG1lc3NhZ2VMaXN0ID0gcmVzdWx0TGlzdC5jb25jYXQobWVzc2FnZUxpc3QpO1xuICAgICAgbWVzc2FnZUxpc3QubWFwKChpdGVtOiBhbnkpID0+IHtcbiAgICAgICAgY29uc3QgZGF0ZSA9IGdldERhdGUoaXRlbS5jcmVhdGVkQXQpO1xuICAgICAgICBpZiAoZGF0ZUFyeS5pbmRleE9mKGRhdGUpID09IC0xKSB7XG4gICAgICAgICAgaXRlbS5kYXRlID0gZGF0ZTtcbiAgICAgICAgICBkYXRlQXJ5LnB1c2goZGF0ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbS5kYXRlID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgaXRlbS50aW1lID0gZ2V0VGltZShpdGVtLmNyZWF0ZWRBdCk7XG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgbWVzc2FnZUxpc3RcbiAgICAgIH0pO1xuICAgIH0pXG4gIFxuICB9LFxuXG4gIG9uUGFnZVNjcm9sbDogZnVuY3Rpb24gKHJlczogYW55KSB7XG4gICAvLyDpobXpnaLmu5rliqjml7bmiafooYxcbiAgICBjb25zdCB7IHBhZ2luYXRpb24gfSA9IHRoaXMuZGF0YTtcbiAgICBpZiAocmVzLnNjcm9sbFRvcCA9PT0gMCAmJiBwYWdpbmF0aW9uLnBhZ2VUb2tlbiAhPT0gJycpIHtcbiAgICAgIHRoaXMuZ2V0TWVzc2FnZUxpc3QocGFnaW5hdGlvbi5wYWdlU2l6ZSwgcGFnaW5hdGlvbi5wYWdlVG9rZW4pO1xuICAgIH1cbiAgfSxcbiAgXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxuICAgKi9cbiAgb25SZWFkeTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XG4gICAqL1xuICBvblNob3c6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdoumakOiXj1xuICAgKi9cbiAgb25IaWRlOiBmdW5jdGlvbiAoKSB7XG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Y246L29XG4gICAqL1xuICBvblVubG9hZDogZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKCdjaGF0IHBhZ2UgdW5sb2FkJywgdGhpcy5kYXRhLmNpZCk7XG4gICAgQ2hhdFNlcnZpY2UudXBkYXRlTXNnVG9SZWFkU3RhdHVzKHRoaXMuZGF0YS5jaWQpO1xuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxuICAgKi9cbiAgb25QdWxsRG93blJlZnJlc2g6IGZ1bmN0aW9uICgpIHtcbiAgfSxcblxuICAvKipcbiAgICog6aG16Z2i5LiK5ouJ6Kem5bqV5LqL5Lu255qE5aSE55CG5Ye95pWwXG4gICAqL1xuICBvblJlYWNoQm90dG9tOiBmdW5jdGlvbiAoKSB7XG4gIH0sXG59KSJdfQ==