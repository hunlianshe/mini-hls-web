"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Api = require("../../service/api.service");
const utils = require("../../utils/utils");
Page({
    data: {
        openid: '',
        userInfo: {},
    },
    onLoad: function (options) {
        this.setData({
            openid: options.openid,
        });
        this.getUserInfo(options.openid);
    },
    getUserInfo(openid) {
        Api.getUserInfo(openid).then((result) => {
            if (result.code == 200) {
                const userInfo = result.data;
                this.setData({
                    userInfo,
                });
            }
        });
    },
    putUsersLike() {
        console.log('putUsersLike');
        const { openid } = this.data;
        Api.putUsersLike(openid).then((result) => {
            if (result.code === '200') {
                utils.showModal('收藏成功');
            }
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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlckRldGFpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXJEZXRhaWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBaUQ7QUFDakQsMkNBQTJDO0FBRzNDLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLE1BQU0sRUFBRSxFQUFFO1FBQ1YsUUFBUSxFQUFFLEVBQVM7S0FDcEI7SUFFRCxNQUFNLEVBQUUsVUFBVSxPQUFZO1FBQzVCLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07U0FDdkIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUdELFdBQVcsQ0FBQyxNQUFjO1FBQ3hCLEdBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBVyxFQUFFLEVBQUU7WUFDM0MsSUFBSSxNQUFNLENBQUMsSUFBSSxJQUFJLEdBQUcsRUFBRTtnQkFDdEIsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDN0IsSUFBSSxDQUFDLE9BQVEsQ0FBQztvQkFDWixRQUFRO2lCQUNULENBQUMsQ0FBQzthQUNKO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBR0QsWUFBWTtRQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDNUIsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDN0IsR0FBRyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFXLEVBQUUsRUFBRTtZQUM1QyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssS0FBSyxFQUFFO2dCQUN6QixLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3pCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsT0FBTyxFQUFFO0lBQ1QsQ0FBQztJQUdELE1BQU0sRUFBRTtJQUNSLENBQUM7SUFLRCxNQUFNLEVBQUU7SUFFUixDQUFDO0lBS0QsUUFBUSxFQUFFO0lBRVYsQ0FBQztDQUVGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIEFwaSBmcm9tICcuLi8uLi9zZXJ2aWNlL2FwaS5zZXJ2aWNlJzsgXG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XG5cblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBvcGVuaWQ6ICcnLFxuICAgIHVzZXJJbmZvOiB7fSBhcyBhbnksXG4gIH0sXG5cbiAgb25Mb2FkOiBmdW5jdGlvbiAob3B0aW9uczogYW55KSB7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBvcGVuaWQ6IG9wdGlvbnMub3BlbmlkLFxuICAgIH0pO1xuICAgIHRoaXMuZ2V0VXNlckluZm8ob3B0aW9ucy5vcGVuaWQpO1xuICB9LFxuXG4gIC8qKiDojrflj5bnlKjmiLfkv6Hmga8gKi9cbiAgZ2V0VXNlckluZm8ob3BlbmlkOiBzdHJpbmcpIHtcbiAgICBBcGkuZ2V0VXNlckluZm8ob3BlbmlkKS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xuICAgICAgICBjb25zdCB1c2VySW5mbyA9IHJlc3VsdC5kYXRhO1xuICAgICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgICB1c2VySW5mbyxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqIOWFs+azqCjmlLbol48p5o6l5Y+jICovXG4gIHB1dFVzZXJzTGlrZSgpIHtcbiAgICBjb25zb2xlLmxvZygncHV0VXNlcnNMaWtlJyk7XG4gICAgY29uc3QgeyBvcGVuaWQgfSA9IHRoaXMuZGF0YTtcbiAgICBBcGkucHV0VXNlcnNMaWtlKG9wZW5pZCkudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgIGlmIChyZXN1bHQuY29kZSA9PT0gJzIwMCcpIHtcbiAgICAgICAgdXRpbHMuc2hvd01vZGFsKCfmlLbol4/miJDlip8nKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICBvblJlYWR5OiBmdW5jdGlvbiAoKSB7XG4gIH0sXG5cblxuICBvblNob3c6IGZ1bmN0aW9uICgpIHtcbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cbiAgICovXG4gIG9uSGlkZTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Y246L29XG4gICAqL1xuICBvblVubG9hZDogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbn0pIl19