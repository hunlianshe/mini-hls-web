"use strict";
Page({
    data: {
        active: '1',
    },
    onLoad: function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0Y2htYWtlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hdGNobWFrZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLE1BQU0sRUFBRSxHQUFHO0tBQ1o7SUFLRCxNQUFNLEVBQUU7SUFFUixDQUFDO0lBRUQsU0FBUyxDQUFDLENBQU07UUFDZCxJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osTUFBTSxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLE1BQU07U0FDdkMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELFNBQVM7UUFDUCxNQUFNLEtBQUssR0FBRyxhQUFhLENBQUE7UUFDM0IsRUFBRSxDQUFDLGFBQWEsQ0FBQztZQUNmLFdBQVcsRUFBRSxLQUFLO1NBQ25CLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFLRCxPQUFPLEVBQUU7SUFFVCxDQUFDO0lBS0QsTUFBTSxFQUFFO0lBRVIsQ0FBQztJQUtELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFLRCxRQUFRLEVBQUU7SUFFVixDQUFDO0lBS0QsaUJBQWlCLEVBQUU7SUFFbkIsQ0FBQztJQUtELGFBQWEsRUFBRTtJQUVmLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJQYWdlKHtcbiAgZGF0YToge1xuICAgIGFjdGl2ZTogJzEnLFxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxuICAgKi9cbiAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICBzd2l0Y2hUYWIoZTogYW55KSB7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBhY3RpdmU6IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmFjdGl2ZSxcbiAgICB9KTtcbiAgfSxcbiAgcGhvbmVDYWxsKCkge1xuICAgIGNvbnN0IHBob25lID0gJzE4MDU3MzEzNzE1J1xuICAgIHd4Lm1ha2VQaG9uZUNhbGwoe1xuICAgICAgcGhvbmVOdW1iZXI6IHBob25lLFxuICAgIH0pXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yid5qyh5riy5p+T5a6M5oiQXG4gICAqL1xuICBvblJlYWR5OiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcbiAgICovXG4gIG9uU2hvdzogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXG4gICAqL1xuICBvbkhpZGU6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxuICAgKi9cbiAgb25VbmxvYWQ6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxuICAgKi9cbiAgb25QdWxsRG93blJlZnJlc2g6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcbiAgICovXG4gIG9uUmVhY2hCb3R0b206IGZ1bmN0aW9uICgpIHtcblxuICB9LFxufSkiXX0=