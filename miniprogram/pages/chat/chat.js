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
        this.getToUserInfo();
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
    getToUserInfo() {
        const openid = this.getOpenid();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNoYXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtRUFBc0U7QUFDdEUsNkNBQXFEO0FBQ3JELGlEQUFpRDtBQUVqRCxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixNQUFNLEVBQUUsRUFBRTtRQUNWLEdBQUcsRUFBRSxFQUFFO1FBQ1AsRUFBRSxFQUFFLEVBQUU7UUFDTixJQUFJLEVBQUUsRUFBRTtRQUNSLE1BQU0sRUFBRSxFQUFFO1FBQ1YsUUFBUSxFQUFFLEVBQUU7UUFDWixPQUFPLEVBQUUsRUFBRTtRQUNYLFVBQVUsRUFBRSxFQUFDLFFBQVEsRUFBRyxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBQztRQUMxQyxXQUFXLEVBQUUsRUFBRTtLQUNoQjtJQUVELE1BQU0sRUFBRSxVQUFVLE9BQVc7UUFFM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUNwQixJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO1FBQzVCLElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFDdEIsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLEdBQUcsRUFBRSxHQUFHO1NBQ1QsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUMsTUFBTSxDQUFDLENBQUE7UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFFdEIsTUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBQyxJQUFJLENBQUMsQ0FBQTtRQUd4QixJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osRUFBRSxFQUFFLElBQUk7U0FDVCxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFD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QUNqQzthQUNGLENBQUMsQ0FBQTtZQUNILElBQUssV0FBVyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFBO1lBQ3BDLE1BQU0sT0FBTyxHQUFVLEVBQUUsQ0FBQztZQUMxQixXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBUyxFQUFFLEVBQUU7Z0JBQzVCLE1BQU0sSUFBSSxHQUFHLGVBQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3JDLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtvQkFDL0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7b0JBQ2pCLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ3BCO3FCQUFNO29CQUNMLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO2lCQUNoQjtnQkFDRCxJQUFJLENBQUMsSUFBSSxHQUFHLGVBQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3BDLE9BQU8sSUFBSSxDQUFDO1lBQ2QsQ0FBQyxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsT0FBUSxDQUFDO2dCQUNaLFdBQVc7YUFDWixDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQTtJQUVKLENBQUM7SUFLRCxPQUFPLEVBQUU7SUFFVCxDQUFDO0lBS0QsTUFBTSxFQUFFO0lBRVIsQ0FBQztJQUtELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFLRCxRQUFRLEVBQUU7SUFFVixDQUFDO0lBS0QsaUJBQWlCLEVBQUU7SUFFbkIsQ0FBQztJQUtELGFBQWEsRUFBRTtJQUVmLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2dldFNvY2tldCwgc2VuZE1lc3NhZ2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlL3NvY2tldC5zZXJ2aWNlMic7XG5pbXBvcnQgeyBnZXREYXRlLCBnZXRUaW1lIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xuaW1wb3J0ICogYXMgQXBpIGZyb20gJy4uLy4uL3NlcnZpY2UvYXBpLnNlcnZpY2UnO1xuXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIG9wZW5pZDogJycsXG4gICAgY2lkOiAnJyxcbiAgICBtZToge30sIC8v5oiR55qE55So5oi35L+h5oGvXG4gICAgaG9zdDogJycsIC8v5oiR55qE55So5oi35L+h5oGvXG4gICAgdG9Vc2VyOiB7fSwgLy/mjqXmlLbkurrnmoTnlKjmiLfkv6Hmga9cbiAgICB1c2VySW5mbzoge30sIC8vIOeUqOaIt+S/oeaBr1xuICAgIG1lc3NhZ2U6ICcnLCAgLy8g55So5oi36L6T5YWl55qE5raI5oGvXG4gICAgcGFnaW5hdGlvbjoge3BhZ2VTaXplIDogNTAsIHBhZ2VUb2tlbjogJyd9LFxuICAgIG1lc3NhZ2VMaXN0OiBbXSxcbiAgfSxcblxuICBvbkxvYWQ6IGZ1bmN0aW9uIChvcHRpb25zOmFueSkge1xuICAgIC8vIHRoaXMuZ2V0VXNlckluZm8oKTtcbiAgICBjb25zb2xlLmxvZyhcIm9ra2trXCIpXG4gICAgbGV0IG9wZW5pZCA9IG9wdGlvbnMub3BlbmlkO1xuICAgIGxldCBjaWQgPSBvcHRpb25zLmNpZDtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIGNpZDogY2lkXG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coXCJvcGVuaWRcIixvcGVuaWQpXG4gICAgY29uc29sZS5sb2coXCJjaWRcIixjaWQpXG5cbiAgICBjb25zdCB1c2VyID0gd3guZ2V0U3RvcmFnZVN5bmMoJ3VzZXInKTtcbiAgICBjb25zb2xlLmxvZyhcInVzZXJcIix1c2VyKVxuICAgIC8vIG9wZW5pZCA9IHVzZXIub3BlbmlkIHx8ICcnO1xuICAgIC8vIHJldHVybiBvcGVuaWQ7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBtZTogdXNlclxuICAgIH0pO1xuXG4gICAgdGhpcy5nZXRUb1VzZXJJbmZvKCk7XG4gICAgdGhpcy5nZXRNZXNzYWdlTGlzdCgpO1xuICAgIHRoaXMucmVjZWl2ZU1lc3NhZ2UoKTtcbiAgXG4gIH0sXG5cbiAgZ2V0T3BlbmlkKCkge1xuICAgIGxldCBvcGVuaWQ6IHN0cmluZyA9ICcnO1xuICAgIGNvbnN0IHVzZXIgPSB3eC5nZXRTdG9yYWdlU3luYygndXNlcicpO1xuICAgIG9wZW5pZCA9IHVzZXIub3BlbmlkIHx8ICcnO1xuICAgIHJldHVybiBvcGVuaWQ7XG4gIH0sXG5cblxuXG4gIHJlY2VpdmVNZXNzYWdlKCkge1xuICAgIGNvbnNvbGUubG9nKFwi5YeG5aSH5o6l5pS25raI5oGvXCIpXG4gICBsZXQgc29ja2V0ID0gZ2V0U29ja2V0KClcbiAgIHNvY2tldC5vbihcInByaXZhdGVDaGF0XCIsIChtc2c6YW55KSA9PiB7XG4gICAgIGNvbnNvbGUubG9nKFwi5o6l5pS25Yiw55qE5raI5oGv5pivXCIsbXNnKVxuICAgfSlcblxuICB9LFxuXG4gIGdldFRvVXNlckluZm8oKSB7XG4gICAgY29uc3Qgb3BlbmlkID0gdGhpcy5nZXRPcGVuaWQoKTtcbiAgICBBcGkuZ2V0VXNlckluZm8ob3BlbmlkKS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBjb25zdCB1c2VySW5mbyA9IHJlc3VsdC5kYXRhO1xuICAgICAgICBjb25zb2xlLmxvZygndXNlckluZm86JywgdXNlckluZm8pXG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgIHRvVXNlcjogdXNlckluZm9cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCLojrflj5bnlKjmiLfkv6Hmga/lpLHotKVcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqIOWPkemAgea2iOaBr+S6i+S7tiAqL1xuICBzZW5kVGFwKCkge1xuICAgIC8vIFRPRE9cbiAgICAvLyB0byBkb1xuICAgIHNlbmRNZXNzYWdlKHtjaWQ6IHRoaXMuZGF0YS5jaWQsIG1zZzogdGhpcy5kYXRhLm1lc3NhZ2UsIHR5cGU6IDF9KVxuICAgIGNvbnNvbGUubG9nKCdzZW5kIG1lc3NhZ2U6JywgdGhpcy5kYXRhLm1lc3NhZ2UpO1xuICB9LFxuXG4gIC8qKiDovpPlhaXmtojmga/lhoXlrrkgKi9cbiAgaW5wdXRUYXAoZTogYW55KSB7XG4gICAgY29uc29sZS5sb2coJ2lucHV0IG1lc3NhZ2U6JywgZSk7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBtZXNzYWdlOiBlLmRldGFpbC5kZXRhaWwudmFsdWUgLy8g6I635Y+W6L6T5YWl55qE5YC8XG4gICAgfSlcbiAgfSxcblxuICAgLyoqIOi+k+WFpea2iOaBr+WGheWuuSAqL1xuICAgdXBsb2FkSW1hZ2UoZTogYW55KSB7XG4gICAgY29uc29sZS5sb2coJ3VwbG9hZCBpbWFnZTonLCBlLmRldGFpbCk7XG4gICAgc2VuZE1lc3NhZ2Uoe2NpZDogdGhpcy5kYXRhLmNpZCwgbXNnOiBlLmRldGFpbCwgdHlwZTogMn0pXG5cbiAgICAvLyB0aGlzLnNldERhdGEhKHtcbiAgICAvLyAgIG1lc3NhZ2U6IGUuZGV0YWlsLmRldGFpbC52YWx1ZSAvLyDojrflj5bovpPlhaXnmoTlgLxcbiAgICAvLyB9KVxuICB9LFxuXG5cbiAgZ2V0TWVzc2FnZUxpc3QoKSB7XG4gICAgLy8gY29uc3QgbWVzc2FnZUxpc3Q6IGFueSA9IFtcbiAgICAvLyAgIHtcbiAgICAvLyAgICAgXCJfaWRcIjogXCI1ZjY2ZTJmODI3MzUyNDhjMzFiOTdiZDhcIixcbiAgICAvLyAgICAgXCJ0eXBlXCI6IDEsXG4gICAgLy8gICAgIFwiY2lkXCI6IFwiNWY2NmUwMjViYjk3MzUwOTQ5YzUyYTk3XCIsXG4gICAgLy8gICAgIFwibXNnXCI6IFwiaGVsbG8gbGlzYVwiLFxuICAgIC8vICAgICBcInN0YXR1c1wiOiBbXG4gICAgLy8gICAgICAge1xuICAgIC8vICAgICAgICAgXCJtc2dVblJlYWRcIjogZmFsc2UsXG4gICAgLy8gICAgICAgICBcIl9pZFwiOiBcIjVmNjZlMmY4MjczNTI0OGMzMWI5N2JkYVwiLFxuICAgIC8vICAgICAgICAgXCJvcGVuaWRcIjogXCJvSGdCNTVMSjF3R28yUXFFWXhnbzh0TE14TDRBXCJcbiAgICAvLyAgICAgICB9LFxuICAgIC8vICAgICAgIHtcbiAgICAvLyAgICAgICAgIFwibXNnVW5SZWFkXCI6IHRydWUsXG4gICAgLy8gICAgICAgICBcIl9pZFwiOiBcIjVmNjZlMmY4MjczNTI0OGMzMWI5N2JkOVwiLFxuICAgIC8vICAgICAgICAgXCJvcGVuaWRcIjogXCJvSGdCNTVBbGhLcVI3YXpyODVZWUJ3ZklFOUVRXCJcbiAgICAvLyAgICAgICB9XG4gICAgLy8gICAgIF0sXG4gICAgLy8gICAgIFwiZnJvbVwiOiBcIm9IZ0I1NUxKMXdHbzJRcUVZeGdvOHRMTXhMNEFcIixcbiAgICAvLyAgICAgXCJ1cGRhdGVkQXRcIjogXCIyMDIwLTA5LTIwVDA1OjA0OjU2LjY4OFpcIixcbiAgICAvLyAgICAgXCJjcmVhdGVkQXRcIjogXCIyMDIwLTA5LTIwVDA1OjA0OjU2LjY4OFpcIlxuICAgIC8vICAgfSxcbiAgICAvLyAgIHtcbiAgICAvLyAgICAgXCJfaWRcIjogXCI1ZjY2ZTJmODI3MzUyNDhjMzFiOTdiZDhcIixcbiAgICAvLyAgICAgXCJ0eXBlXCI6IDEsXG4gICAgLy8gICAgIFwiY2lkXCI6IFwiNWY2NmUwMjViYjk3MzUwOTQ5YzUyYTk3XCIsXG4gICAgLy8gICAgIFwibXNnXCI6IFwi5ZCD6aWt5LqG5ZCXXCIsXG4gICAgLy8gICAgIFwic3RhdHVzXCI6IFtcbiAgICAvLyAgICAgICB7XG4gICAgLy8gICAgICAgICBcIm1zZ1VuUmVhZFwiOiBmYWxzZSxcbiAgICAvLyAgICAgICAgIFwiX2lkXCI6IFwiNWY2NmUyZjgyNzM1MjQ4YzMxYjk3YmRhXCIsXG4gICAgLy8gICAgICAgICBcIm9wZW5pZFwiOiBcIm9IZ0I1NUxKMXdHbzJRcUVZeGdvOHRMTXhMNEFcIlxuICAgIC8vICAgICAgIH0sXG4gICAgLy8gICAgICAge1xuICAgIC8vICAgICAgICAgXCJtc2dVblJlYWRcIjogdHJ1ZSxcbiAgICAvLyAgICAgICAgIFwiX2lkXCI6IFwiNWY2NmUyZjgyNzM1MjQ4YzMxYjk3YmQ5XCIsXG4gICAgLy8gICAgICAgICBcIm9wZW5pZFwiOiBcIm9IZ0I1NUFsaEtxUjdhenI4NVlZQndmSUU5RVFcIlxuICAgIC8vICAgICAgIH1cbiAgICAvLyAgICAgXSxcbiAgICAvLyAgICAgXCJmcm9tXCI6IFwib0hnQjU1QWxoS3FSN2F6cjg1WVlCd2ZJRTlFUVwiLFxuICAgIC8vICAgICBcInVwZGF0ZWRBdFwiOiBcIjIwMjAtMDktMjBUMDU6MDQ6NTYuNjg4WlwiLFxuICAgIC8vICAgICBcImNyZWF0ZWRBdFwiOiBcIjIwMjAtMDktMjBUMDU6MDQ6NTYuNjg4WlwiXG4gICAgLy8gICB9LFxuICAgIC8vIF07XG4gICAgQXBpLmdldE1lc3NhZ2VCeUNpZCh0aGlzLmRhdGEuY2lkLCB0aGlzLmRhdGEucGFnaW5hdGlvbi5wYWdlU2l6ZSwgdGhpcy5kYXRhLnBhZ2luYXRpb24ucGFnZVRva2VuKS50aGVuKChyZXN1bHQ6YW55KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcInJlc3VsdC5kYXRhXCIscmVzdWx0LmRhdGEpXG4gICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICAgIHBhZ2VUb2tlbjogcmVzdWx0LmRhdGEucGFnZVRva2VuXG4gICAgICAgIH0vLyDojrflj5bovpPlhaXnmoTlgLxcbiAgICAgIH0pXG4gICAgIGxldCAgbWVzc2FnZUxpc3QgPSByZXN1bHQuZGF0YS5yZXN1bHRcbiAgICAgIGNvbnN0IGRhdGVBcnk6IGFueVtdID0gW107XG4gICAgICBtZXNzYWdlTGlzdC5tYXAoKGl0ZW06IGFueSkgPT4ge1xuICAgICAgICBjb25zdCBkYXRlID0gZ2V0RGF0ZShpdGVtLmNyZWF0ZWRBdCk7XG4gICAgICAgIGlmIChkYXRlQXJ5LmluZGV4T2YoZGF0ZSkgPT0gLTEpIHtcbiAgICAgICAgICBpdGVtLmRhdGUgPSBkYXRlO1xuICAgICAgICAgIGRhdGVBcnkucHVzaChkYXRlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtLmRhdGUgPSAnJztcbiAgICAgICAgfVxuICAgICAgICBpdGVtLnRpbWUgPSBnZXRUaW1lKGl0ZW0uY3JlYXRlZEF0KTtcbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICB9KTtcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICBtZXNzYWdlTGlzdCxcbiAgICAgIH0pO1xuICAgIH0pXG4gIFxuICB9LFxuICBcbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yid5qyh5riy5p+T5a6M5oiQXG4gICAqL1xuICBvblJlYWR5OiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcbiAgICovXG4gIG9uU2hvdzogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXG4gICAqL1xuICBvbkhpZGU6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxuICAgKi9cbiAgb25VbmxvYWQ6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxuICAgKi9cbiAgb25QdWxsRG93blJlZnJlc2g6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcbiAgICovXG4gIG9uUmVhY2hCb3R0b206IGZ1bmN0aW9uICgpIHtcblxuICB9LFxufSkiXX0=