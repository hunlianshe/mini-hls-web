"use strict";
Page({
    data: {
        price: 0,
    },
    onLoad: function (options) {
        console.log(`===options===`, options);
        if (options.price) {
            this.setData({
                price: options.price
            });
        }
    },
    wxPay: function () {
        console.log("wxPay");
    },
    coinPay: function () {
        console.log("coinPay");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hvb3NlUGF5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hvb3NlUGF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxJQUFJLENBQUM7SUFLSCxJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUUsQ0FBQztLQUNUO0lBRUQsTUFBTSxFQUFFLFVBQVUsT0FBWTtRQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN0QyxJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUU7WUFDakIsSUFBSSxDQUFDLE9BQVEsQ0FBQztnQkFDWixLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7YUFDckIsQ0FBQyxDQUFBO1NBQ0g7SUFDSCxDQUFDO0lBRUQsS0FBSyxFQUFFO1FBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQsT0FBTyxFQUFFO1FBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBR0QsT0FBTyxFQUFFO0lBRVQsQ0FBQztJQUVELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFFRCxNQUFNLEVBQUU7SUFFUixDQUFDO0lBRUQsUUFBUSxFQUFFO0lBRVYsQ0FBQztJQUVELGlCQUFpQixFQUFFO0lBRW5CLENBQUM7SUFFRCxhQUFhLEVBQUU7SUFFZixDQUFDO0NBRUYsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFja2FnZU15aG9tZS9wYWdlcy9jaG9vc2VQYXkuanNcblBhZ2Uoe1xuXG4gIC8qKlxuICAgKiBQYWdlIGluaXRpYWwgZGF0YVxuICAgKi9cbiAgZGF0YToge1xuICAgIHByaWNlOiAwLFxuICB9LFxuXG4gIG9uTG9hZDogZnVuY3Rpb24gKG9wdGlvbnM6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKGA9PT1vcHRpb25zPT09YCwgb3B0aW9ucyk7XG4gICAgaWYgKG9wdGlvbnMucHJpY2UpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICBwcmljZTogb3B0aW9ucy5wcmljZVxuICAgICAgfSlcbiAgICB9XG4gIH0sXG5cbiAgd3hQYXk6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnNvbGUubG9nKFwid3hQYXlcIik7XG4gIH0sXG5cbiAgY29pblBheTogZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coXCJjb2luUGF5XCIpO1xuICB9LFxuXG5cbiAgb25SZWFkeTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgb25TaG93OiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICBvbkhpZGU6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIG9uVW5sb2FkOiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICBvblB1bGxEb3duUmVmcmVzaDogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgb25SZWFjaEJvdHRvbTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbn0pIl19