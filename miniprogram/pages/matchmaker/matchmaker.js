"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const serviceConfig_1 = require("./serviceConfig");
Page({
    data: {
        active: '1',
        serviceConfig: serviceConfig_1.default,
    },
    onLoad: function () {
        console.log(serviceConfig_1.default);
    },
    switchTab(e) {
        this.setData({
            active: e.currentTarget.dataset.active,
        });
    },
    phoneCall() {
        const phone = '18057313715';
        wx.makePhoneCall({
            phoneNumber: phone,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0Y2htYWtlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hdGNobWFrZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBNEM7QUFFNUMsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osTUFBTSxFQUFFLEdBQUc7UUFDWCxhQUFhLEVBQUUsdUJBQWE7S0FDN0I7SUFFRCxNQUFNLEVBQUU7UUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUFhLENBQUMsQ0FBQTtJQUM1QixDQUFDO0lBRUQsU0FBUyxDQUFDLENBQU07UUFDZCxJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osTUFBTSxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLE1BQU07U0FDdkMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELFNBQVM7UUFDUCxNQUFNLEtBQUssR0FBRyxhQUFhLENBQUE7UUFDM0IsRUFBRSxDQUFDLGFBQWEsQ0FBQztZQUNmLFdBQVcsRUFBRSxLQUFLO1NBQ25CLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxPQUFPLEVBQUU7SUFFVCxDQUFDO0lBRUQsTUFBTSxFQUFFO0lBRVIsQ0FBQztJQUVELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFFRCxRQUFRLEVBQUU7SUFFVixDQUFDO0lBRUQsaUJBQWlCLEVBQUU7SUFFbkIsQ0FBQztJQUVELGFBQWEsRUFBRTtJQUVmLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2VydmljZUNvbmZpZyBmcm9tICcuL3NlcnZpY2VDb25maWcnO1xuXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIGFjdGl2ZTogJzEnLFxuICAgIHNlcnZpY2VDb25maWc6IHNlcnZpY2VDb25maWcsXG4gIH0sXG5cbiAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2coc2VydmljZUNvbmZpZylcbiAgfSxcblxuICBzd2l0Y2hUYWIoZTogYW55KSB7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBhY3RpdmU6IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmFjdGl2ZSxcbiAgICB9KTtcbiAgfSxcbiAgcGhvbmVDYWxsKCkge1xuICAgIGNvbnN0IHBob25lID0gJzE4MDU3MzEzNzE1J1xuICAgIHd4Lm1ha2VQaG9uZUNhbGwoe1xuICAgICAgcGhvbmVOdW1iZXI6IHBob25lLFxuICAgIH0pXG4gIH0sXG5cbiAgb25SZWFkeTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgb25TaG93OiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICBvbkhpZGU6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIG9uVW5sb2FkOiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICBvblB1bGxEb3duUmVmcmVzaDogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgb25SZWFjaEJvdHRvbTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG59KSJdfQ==