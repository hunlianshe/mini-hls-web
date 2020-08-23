"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Api = require("../../service/api.service");
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
                userInfo.intro = [];
                if (userInfo.age) {
                    userInfo.intro.push(userInfo.age);
                }
                if (userInfo.jobGeneral) {
                    userInfo.intro.push(userInfo.jobGeneral);
                }
                if (userInfo.jobDetail) {
                    userInfo.intro.push(userInfo.jobDetail);
                }
                if (userInfo.education) {
                    userInfo.intro.push(userInfo.education);
                }
                userInfo.intro = userInfo.intro.join(' | ');
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
            if (result.code == 200) {
                wx.showToast({
                    title: '收藏成功',
                    icon: 'success',
                });
            }
        });
    },
    matchMaker() {
        wx.navigateTo({
            url: '../matchmaker/matchmaker',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlckRldGFpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXJEZXRhaWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBaUQ7QUFHakQsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osTUFBTSxFQUFFLEVBQUU7UUFDVixRQUFRLEVBQUUsRUFBUztLQUNwQjtJQUVELE1BQU0sRUFBRSxVQUFVLE9BQVk7UUFDNUIsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTtTQUN2QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBR0QsV0FBVyxDQUFDLE1BQWM7UUFDeEIsR0FBRyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFXLEVBQUUsRUFBRTtZQUMzQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLElBQUksR0FBRyxFQUFFO2dCQUN0QixNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUM3QixRQUFRLENBQUMsS0FBSyxHQUFJLEVBQUUsQ0FBQztnQkFDbkIsSUFBSSxRQUFRLENBQUMsR0FBRyxFQUFDO29CQUNmLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQTtpQkFDbEM7Z0JBQ0QsSUFBSSxRQUFRLENBQUMsVUFBVSxFQUFFO29CQUN2QixRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUE7aUJBQ3pDO2dCQUNELElBQUksUUFBUSxDQUFDLFNBQVMsRUFBRTtvQkFDdEIsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFBO2lCQUN4QztnQkFDRCxJQUFJLFFBQVEsQ0FBQyxTQUFTLEVBQUU7b0JBQ3RCLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQTtpQkFDeEM7Z0JBQ0QsUUFBUSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtnQkFDN0MsSUFBSSxDQUFDLE9BQVEsQ0FBQztvQkFDWixRQUFRO2lCQUNULENBQUMsQ0FBQzthQUNKO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBR0QsWUFBWTtRQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDNUIsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDN0IsR0FBRyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFXLEVBQUUsRUFBRTtZQUM1QyxJQUFJLE1BQU0sQ0FBQyxJQUFJLElBQUksR0FBRyxFQUFFO2dCQUN0QixFQUFFLENBQUMsU0FBUyxDQUFDO29CQUNYLEtBQUssRUFBRSxNQUFNO29CQUNiLElBQUksRUFBRSxTQUFTO2lCQUNoQixDQUFDLENBQUM7YUFDSjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFVBQVU7UUFDUixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLDBCQUEwQjtTQUNoQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsT0FBTyxFQUFFO0lBQ1QsQ0FBQztJQUdELE1BQU0sRUFBRTtJQUNSLENBQUM7SUFLRCxNQUFNLEVBQUU7SUFFUixDQUFDO0lBS0QsUUFBUSxFQUFFO0lBRVYsQ0FBQztDQUVGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIEFwaSBmcm9tICcuLi8uLi9zZXJ2aWNlL2FwaS5zZXJ2aWNlJzsgXHJcblxyXG5cclxuUGFnZSh7XHJcbiAgZGF0YToge1xyXG4gICAgb3BlbmlkOiAnJyxcclxuICAgIHVzZXJJbmZvOiB7fSBhcyBhbnksXHJcbiAgfSxcclxuXHJcbiAgb25Mb2FkOiBmdW5jdGlvbiAob3B0aW9uczogYW55KSB7XHJcbiAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgb3BlbmlkOiBvcHRpb25zLm9wZW5pZCxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5nZXRVc2VySW5mbyhvcHRpb25zLm9wZW5pZCk7XHJcbiAgfSxcclxuXHJcbiAgLyoqIOiOt+WPlueUqOaIt+S/oeaBryAqL1xyXG4gIGdldFVzZXJJbmZvKG9wZW5pZDogc3RyaW5nKSB7XHJcbiAgICBBcGkuZ2V0VXNlckluZm8ob3BlbmlkKS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xyXG4gICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgY29uc3QgdXNlckluZm8gPSByZXN1bHQuZGF0YTtcclxuICAgICAgICB1c2VySW5mby5pbnRybyAgPSBbXTtcclxuICAgICAgICAgIGlmICh1c2VySW5mby5hZ2Upe1xyXG4gICAgICAgICAgICB1c2VySW5mby5pbnRyby5wdXNoKHVzZXJJbmZvLmFnZSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICh1c2VySW5mby5qb2JHZW5lcmFsKSB7XHJcbiAgICAgICAgICAgIHVzZXJJbmZvLmludHJvLnB1c2godXNlckluZm8uam9iR2VuZXJhbClcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICh1c2VySW5mby5qb2JEZXRhaWwpIHtcclxuICAgICAgICAgICAgdXNlckluZm8uaW50cm8ucHVzaCh1c2VySW5mby5qb2JEZXRhaWwpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAodXNlckluZm8uZWR1Y2F0aW9uKSB7XHJcbiAgICAgICAgICAgIHVzZXJJbmZvLmludHJvLnB1c2godXNlckluZm8uZWR1Y2F0aW9uKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdXNlckluZm8uaW50cm8gPSB1c2VySW5mby5pbnRyby5qb2luKCcgfCAnKVxyXG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgICAgdXNlckluZm8sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIC8qKiDlhbPms6go5pS26JePKeaOpeWPoyAqL1xyXG4gIHB1dFVzZXJzTGlrZSgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdwdXRVc2Vyc0xpa2UnKTtcclxuICAgIGNvbnN0IHsgb3BlbmlkIH0gPSB0aGlzLmRhdGE7XHJcbiAgICBBcGkucHV0VXNlcnNMaWtlKG9wZW5pZCkudGhlbigocmVzdWx0OiBhbnkpID0+IHtcclxuICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICB0aXRsZTogJ+aUtuiXj+aIkOWKnycsXHJcbiAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIG1hdGNoTWFrZXIoKSB7XHJcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgdXJsOiAnLi4vbWF0Y2htYWtlci9tYXRjaG1ha2VyJyxcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgb25SZWFkeTogZnVuY3Rpb24gKCkge1xyXG4gIH0sXHJcblxyXG5cclxuICBvblNob3c6IGZ1bmN0aW9uICgpIHtcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdoumakOiXj1xyXG4gICAqL1xyXG4gIG9uSGlkZTogZnVuY3Rpb24gKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxyXG4gICAqL1xyXG4gIG9uVW5sb2FkOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gIH0sXHJcblxyXG59KSJdfQ==