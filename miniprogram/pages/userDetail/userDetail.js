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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlckRldGFpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXJEZXRhaWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBaUQ7QUFHakQsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osTUFBTSxFQUFFLEVBQUU7UUFDVixRQUFRLEVBQUUsRUFBUztLQUNwQjtJQUVELE1BQU0sRUFBRSxVQUFVLE9BQVk7UUFDNUIsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTtTQUN2QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBR0QsV0FBVyxDQUFDLE1BQWM7UUFDeEIsR0FBRyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFXLEVBQUUsRUFBRTtZQUMzQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLElBQUksR0FBRyxFQUFFO2dCQUN0QixNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUM3QixRQUFRLENBQUMsS0FBSyxHQUFJLEVBQUUsQ0FBQztnQkFDbkIsSUFBSSxRQUFRLENBQUMsR0FBRyxFQUFDO29CQUNmLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQTtpQkFDbEM7Z0JBQ0QsSUFBSSxRQUFRLENBQUMsVUFBVSxFQUFFO29CQUN2QixRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUE7aUJBQ3pDO2dCQUNELElBQUksUUFBUSxDQUFDLFNBQVMsRUFBRTtvQkFDdEIsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFBO2lCQUN4QztnQkFDRCxJQUFJLFFBQVEsQ0FBQyxTQUFTLEVBQUU7b0JBQ3RCLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQTtpQkFDeEM7Z0JBQ0QsUUFBUSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtnQkFDN0MsSUFBSSxDQUFDLE9BQVEsQ0FBQztvQkFDWixRQUFRO2lCQUNULENBQUMsQ0FBQzthQUNKO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBR0QsWUFBWTtRQUNWLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzdCLEdBQUcsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBVyxFQUFFLEVBQUU7WUFDNUMsSUFBSSxNQUFNLENBQUMsSUFBSSxJQUFJLEdBQUcsRUFBRTtnQkFDdEIsRUFBRSxDQUFDLFNBQVMsQ0FBQztvQkFDWCxLQUFLLEVBQUUsTUFBTTtvQkFDYixJQUFJLEVBQUUsU0FBUztpQkFDaEIsQ0FBQyxDQUFDO2FBQ0o7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxVQUFVO1FBQ1IsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSwwQkFBMEI7U0FDaEMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELE9BQU8sRUFBRTtJQUNULENBQUM7SUFHRCxNQUFNLEVBQUU7SUFDUixDQUFDO0lBS0QsTUFBTSxFQUFFO0lBRVIsQ0FBQztJQUtELFFBQVEsRUFBRTtJQUVWLENBQUM7Q0FFRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBBcGkgZnJvbSAnLi4vLi4vc2VydmljZS9hcGkuc2VydmljZSc7IFxuXG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgb3BlbmlkOiAnJyxcbiAgICB1c2VySW5mbzoge30gYXMgYW55LFxuICB9LFxuXG4gIG9uTG9hZDogZnVuY3Rpb24gKG9wdGlvbnM6IGFueSkge1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgb3BlbmlkOiBvcHRpb25zLm9wZW5pZCxcbiAgICB9KTtcbiAgICB0aGlzLmdldFVzZXJJbmZvKG9wdGlvbnMub3BlbmlkKTtcbiAgfSxcblxuICAvKiog6I635Y+W55So5oi35L+h5oGvICovXG4gIGdldFVzZXJJbmZvKG9wZW5pZDogc3RyaW5nKSB7XG4gICAgQXBpLmdldFVzZXJJbmZvKG9wZW5pZCkudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcbiAgICAgICAgY29uc3QgdXNlckluZm8gPSByZXN1bHQuZGF0YTtcbiAgICAgICAgdXNlckluZm8uaW50cm8gID0gW107XG4gICAgICAgICAgaWYgKHVzZXJJbmZvLmFnZSl7XG4gICAgICAgICAgICB1c2VySW5mby5pbnRyby5wdXNoKHVzZXJJbmZvLmFnZSlcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHVzZXJJbmZvLmpvYkdlbmVyYWwpIHtcbiAgICAgICAgICAgIHVzZXJJbmZvLmludHJvLnB1c2godXNlckluZm8uam9iR2VuZXJhbClcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHVzZXJJbmZvLmpvYkRldGFpbCkge1xuICAgICAgICAgICAgdXNlckluZm8uaW50cm8ucHVzaCh1c2VySW5mby5qb2JEZXRhaWwpXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh1c2VySW5mby5lZHVjYXRpb24pIHtcbiAgICAgICAgICAgIHVzZXJJbmZvLmludHJvLnB1c2godXNlckluZm8uZWR1Y2F0aW9uKVxuICAgICAgICAgIH1cbiAgICAgICAgICB1c2VySW5mby5pbnRybyA9IHVzZXJJbmZvLmludHJvLmpvaW4oJyB8ICcpXG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgIHVzZXJJbmZvLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICAvKiog5YWz5rOoKOaUtuiXjynmjqXlj6MgKi9cbiAgcHV0VXNlcnNMaWtlKCkge1xuICAgIGNvbnN0IHsgb3BlbmlkIH0gPSB0aGlzLmRhdGE7XG4gICAgQXBpLnB1dFVzZXJzTGlrZShvcGVuaWQpLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XG4gICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgdGl0bGU6ICfmlLbol4/miJDlip8nLFxuICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgbWF0Y2hNYWtlcigpIHtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogJy4uL21hdGNobWFrZXIvbWF0Y2htYWtlcicsXG4gICAgfSlcbiAgfSxcblxuICBvblJlYWR5OiBmdW5jdGlvbiAoKSB7XG4gIH0sXG5cblxuICBvblNob3c6IGZ1bmN0aW9uICgpIHtcbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cbiAgICovXG4gIG9uSGlkZTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Y246L29XG4gICAqL1xuICBvblVubG9hZDogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbn0pIl19