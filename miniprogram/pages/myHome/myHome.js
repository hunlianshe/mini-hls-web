"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apiServicePro = require("../../service/api.service");
Page({
    data: {
        user: {},
        userInfo: {},
        userStatistics: {},
        pageLoaded: false,
    },
    onLoad: function () {
        let _this = this;
        wx.getStorage({
            key: 'user',
            success: function (res) {
                _this.setData({
                    user: res.data
                });
            },
        });
        this.getUserInfo();
        this.setData({
            pageLoaded: true,
        });
    },
    goXlcsList() {
        wx.navigateTo({
            url: `../xlcsList/xlcsList`,
        });
    },
    register() {
        wx.navigateTo({
            url: `../register/register`,
        });
    },
    myImages() {
        wx.navigateTo({
            url: `../myImages/myImages`,
        });
    },
    getUserInfo() {
        apiServicePro.getUserInfo().then(result => {
            if (result) {
            }
        });
    },
    createShop() {
        wx.navigateTo({
            url: '../createShop/createShop',
        });
    },
    goMatchmaker() {
        wx.navigateTo({
            url: `../matchmaker/matchmaker`,
        });
    },
    goFateList() {
        wx.navigateTo({
            url: `../fateList/fateList`,
        });
    },
    goNamecard() {
        wx.navigateTo({
            url: '../nameCard/nameCard',
        });
    },
    goFeedback() {
        wx.navigateTo({
            url: '../feedback/feedback',
        });
    },
    shopQrcode() {
        wx.navigateTo({
            url: `../shopQrcode/shopQrcode`,
        });
    },
    onReady: function () {
    },
    onShow: function () {
        const { pageLoaded } = this.data;
        if (pageLoaded) {
            this.getUserInfo();
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXlIb21lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibXlIb21lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsMkRBQTREO0FBRTVELElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxFQUFFO1FBQ1IsUUFBUSxFQUFFLEVBQUU7UUFDWixjQUFjLEVBQUUsRUFBRTtRQUNsQixVQUFVLEVBQUUsS0FBSztLQUNsQjtJQUVELE1BQU0sRUFBRTtRQUNOLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQTtRQUNoQixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLE1BQU07WUFDWCxPQUFPLEVBQUUsVUFBUyxHQUFHO2dCQUNuQixLQUFLLENBQUMsT0FBUSxDQUFDO29CQUNiLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSTtpQkFDZixDQUFDLENBQUE7WUFDSixDQUFDO1NBQ0YsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixVQUFVLEVBQUUsSUFBSTtTQUNqQixDQUFDLENBQUE7SUFDSixDQUFDO0lBR0QsVUFBVTtRQUNSLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsc0JBQXNCO1NBQzVCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxRQUFRO1FBQ04sRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxzQkFBc0I7U0FDNUIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELFFBQVE7UUFDTixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLHNCQUFzQjtTQUM1QixDQUFDLENBQUE7SUFDSixDQUFDO0lBR0QsV0FBVztRQUNULGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDeEMsSUFBSSxNQUFNLEVBQUU7YUFVWDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUdELFVBQVU7UUFDUixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLDBCQUEwQjtTQUNoQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBR0QsWUFBWTtRQUNWLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsMEJBQTBCO1NBQ2hDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFHRCxVQUFVO1FBRVIsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxzQkFBc0I7U0FDNUIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUdELFVBQVU7UUFDUixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLHNCQUFzQjtTQUM1QixDQUFDLENBQUE7SUFDSixDQUFDO0lBR0QsVUFBVTtRQUNSLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsc0JBQXNCO1NBQzVCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxVQUFVO1FBQ1IsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSwwQkFBMEI7U0FDaEMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUtELE9BQU8sRUFBRTtJQUVULENBQUM7SUFLRCxNQUFNLEVBQUU7UUFDTixNQUFNLEVBQUUsVUFBVSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNqQyxJQUFJLFVBQVUsRUFBRTtZQUNkLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNwQjtJQUNILENBQUM7SUFLRCxNQUFNLEVBQUU7SUFFUixDQUFDO0lBS0QsUUFBUSxFQUFFO0lBRVYsQ0FBQztJQUtELGlCQUFpQixFQUFFO0lBRW5CLENBQUM7SUFLRCxhQUFhLEVBQUU7SUFFZixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvbXlIb21lL215SG9tZS5qc1xuXG5pbXBvcnQgYXBpU2VydmljZVBybyA9IHJlcXVpcmUoJy4uLy4uL3NlcnZpY2UvYXBpLnNlcnZpY2UnKTtcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICB1c2VyOiB7fSxcbiAgICB1c2VySW5mbzoge30sXG4gICAgdXNlclN0YXRpc3RpY3M6IHt9LFxuICAgIHBhZ2VMb2FkZWQ6IGZhbHNlLFxuICB9LFxuXG4gIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXNcbiAgICB3eC5nZXRTdG9yYWdlKHtcbiAgICAgIGtleTogJ3VzZXInLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIF90aGlzLnNldERhdGEhKHtcbiAgICAgICAgICB1c2VyOiByZXMuZGF0YVxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICB9KTtcbiAgICB0aGlzLmdldFVzZXJJbmZvKCk7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBwYWdlTG9hZGVkOiB0cnVlLFxuICAgIH0pXG4gIH0sXG5cbiAgLyoqIOW/g+eQhua1i+ivleWIl+ihqCAqL1xuICBnb1hsY3NMaXN0KCkge1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiBgLi4veGxjc0xpc3QveGxjc0xpc3RgLFxuICAgIH0pXG4gIH0sXG5cbiAgcmVnaXN0ZXIoKSB7XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6IGAuLi9yZWdpc3Rlci9yZWdpc3RlcmAsXG4gICAgfSlcbiAgfSxcblxuICBteUltYWdlcygpIHtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogYC4uL215SW1hZ2VzL215SW1hZ2VzYCxcbiAgICB9KVxuICB9LFxuXG4gIC8qKiDojrflj5bnlKjmiLfkv6Hmga/vvIjlupfpk7rkv6Hmga/vvIkgKi9cbiAgZ2V0VXNlckluZm8oKSB7XG4gICAgYXBpU2VydmljZVByby5nZXRVc2VySW5mbygpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIC8vICAgY29uc3QgdXNlckluZm8gPSByZXN1bHQuZGF0YTtcbiAgICAgIC8vICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAvLyAgICAgdXNlckluZm8sXG4gICAgICAvLyAgICAgdXNlclN0YXRpc3RpY3M6IHVzZXJJbmZvLnN0YXRpc3RpY3MsXG4gICAgICAvLyAgIH0pO1xuICAgICAgLy8gICB3eC5zZXRTdG9yYWdlKHtcbiAgICAgIC8vICAgICBrZXk6ICd1c2VyU2hvcEluZm8nLFxuICAgICAgLy8gICAgIGRhdGE6IHVzZXJJbmZvLFxuICAgICAgLy8gICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICAvKiog5Yib5bu65bqX6ZO6ICovXG4gIGNyZWF0ZVNob3AoKSB7XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6ICcuLi9jcmVhdGVTaG9wL2NyZWF0ZVNob3AnLFxuICAgIH0pXG4gIH0sXG5cbiAgLyoqIOWIm+W7uuaxvei9piAqL1xuICBnb01hdGNobWFrZXIoKTogYW55IHtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogYC4uL21hdGNobWFrZXIvbWF0Y2htYWtlcmAsXG4gICAgfSlcbiAgfSxcblxuICAvKiog5p+l55yL5bqX6ZO6ICovXG4gIGdvRmF0ZUxpc3QoKSB7XG4gICAgLy8gY29uc3QgaWQgPSB0aGlzLmRhdGEudXNlckluZm8uU2hvcC5pZDtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogYC4uL2ZhdGVMaXN0L2ZhdGVMaXN0YCxcbiAgICB9KVxuICB9LFxuXG4gIC8qKiDlkI3niYcgKi9cbiAgZ29OYW1lY2FyZCgpIHtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogJy4uL25hbWVDYXJkL25hbWVDYXJkJyxcbiAgICB9KVxuICB9LFxuXG4gIC8qKiDnlKjmiLflj43ppoggKi9cbiAgZ29GZWVkYmFjaygpIHtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogJy4uL2ZlZWRiYWNrL2ZlZWRiYWNrJyxcbiAgICB9KVxuICB9LFxuXG4gIHNob3BRcmNvZGUoKSB7XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6IGAuLi9zaG9wUXJjb2RlL3Nob3BRcmNvZGVgLFxuICAgIH0pXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yid5qyh5riy5p+T5a6M5oiQXG4gICAqL1xuICBvblJlYWR5OiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcbiAgICovXG4gIG9uU2hvdzogZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHsgcGFnZUxvYWRlZCB9ID0gdGhpcy5kYXRhO1xuICAgIGlmIChwYWdlTG9hZGVkKSB7XG4gICAgICB0aGlzLmdldFVzZXJJbmZvKCk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdoumakOiXj1xuICAgKi9cbiAgb25IaWRlOiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cbiAgICovXG4gIG9uVW5sb2FkOiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog6aG16Z2i55u45YWz5LqL5Lu25aSE55CG5Ye95pWwLS3nm5HlkKznlKjmiLfkuIvmi4nliqjkvZxcbiAgICovXG4gIG9uUHVsbERvd25SZWZyZXNoOiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog6aG16Z2i5LiK5ouJ6Kem5bqV5LqL5Lu255qE5aSE55CG5Ye95pWwXG4gICAqL1xuICBvblJlYWNoQm90dG9tOiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcbn0pIl19