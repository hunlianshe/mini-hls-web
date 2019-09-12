"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Api = require("../../service/api.service");
Page({
    data: {
        _active: '1',
        listLikes: [],
    },
    onLoad: function (options) {
        this.setData({
            _active: options.type,
        });
    },
    onReady: function () {
        this.getUsersListLikes();
    },
    getUsersListLikes() {
        Api.getUsersListLikes().then((result) => {
            if (result) {
                const listLikes = result.data;
                this.setData({
                    listLikes,
                });
            }
        });
    },
    switchTab(e) {
        const index = e.currentTarget.dataset.index;
        this.setData({
            _active: index,
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmF0ZUxpc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmYXRlTGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUFpRDtBQUVqRCxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixPQUFPLEVBQUUsR0FBRztRQUNaLFNBQVMsRUFBRSxFQUFXO0tBQ3ZCO0lBRUQsTUFBTSxFQUFFLFVBQVUsT0FBWTtRQUM1QixJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osT0FBTyxFQUFFLE9BQU8sQ0FBQyxJQUFJO1NBQ3RCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFJRCxPQUFPLEVBQUU7UUFDUCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBR0QsaUJBQWlCO1FBQ2YsR0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBVyxFQUFFLEVBQUU7WUFDM0MsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDOUIsSUFBSSxDQUFDLE9BQVEsQ0FBQztvQkFDWixTQUFTO2lCQUNWLENBQUMsQ0FBQzthQUNKO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsU0FBUyxDQUFDLENBQU07UUFDZCxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDNUMsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLE9BQU8sRUFBRSxLQUFLO1NBQ2YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUtELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFLRCxNQUFNLEVBQUU7SUFFUixDQUFDO0lBS0QsUUFBUSxFQUFFO0lBRVYsQ0FBQztJQUtELGlCQUFpQixFQUFFO0lBRW5CLENBQUM7SUFLRCxhQUFhLEVBQUU7SUFFZixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgQXBpIGZyb20gJy4uLy4uL3NlcnZpY2UvYXBpLnNlcnZpY2UnO1xuXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIF9hY3RpdmU6ICcxJyxcbiAgICBsaXN0TGlrZXM6IFtdIGFzIGFueVtdLFxuICB9LFxuXG4gIG9uTG9hZDogZnVuY3Rpb24gKG9wdGlvbnM6IGFueSkge1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgX2FjdGl2ZTogb3B0aW9ucy50eXBlLFxuICAgIH0pXG4gIH0sXG5cbiAgXG5cbiAgb25SZWFkeTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZ2V0VXNlcnNMaXN0TGlrZXMoKTtcbiAgfSxcblxuICAvKiog6I635Y+W5a+55bqU5Zac5qyi57G75Yir55qE55So5oi35YiX6KGoICovXG4gIGdldFVzZXJzTGlzdExpa2VzKCkge1xuICAgIEFwaS5nZXRVc2Vyc0xpc3RMaWtlcygpLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IGxpc3RMaWtlcyA9IHJlc3VsdC5kYXRhO1xuICAgICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgICBsaXN0TGlrZXMsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIHN3aXRjaFRhYihlOiBhbnkpIHtcbiAgICBjb25zdCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgX2FjdGl2ZTogaW5kZXgsXG4gICAgfSlcbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcbiAgICovXG4gIG9uU2hvdzogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXG4gICAqL1xuICBvbkhpZGU6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxuICAgKi9cbiAgb25VbmxvYWQ6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxuICAgKi9cbiAgb25QdWxsRG93blJlZnJlc2g6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcbiAgICovXG4gIG9uUmVhY2hCb3R0b206IGZ1bmN0aW9uICgpIHtcblxuICB9LFxufSkiXX0=