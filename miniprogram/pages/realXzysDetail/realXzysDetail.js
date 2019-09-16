"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Api = require("../../service/api.service");
const zxList_1 = require("../../public/json/zxList");
Page({
    data: {
        dataIndex: 0,
        fortuneName: '',
        fortuneNameEn: 'Aquarius',
        fortuneData: {},
        xzList: zxList_1.default.data,
        date: '今日'
    },
    onLoad: function (options) {
        console.log('options', options);
        zxList_1.default.data.forEach((e) => {
            if (options.consName === e.ch) {
                this.setData({
                    fortuneNameEn: e.en,
                });
            }
        });
        this.setData({
            fortuneName: options.consName,
            date: options.type === 'today' ? '今日' : '本月',
        });
        this.getFortune(options.consName, options.type);
    },
    otherPick: function (e) {
        this.setData({
            fortuneName: zxList_1.default.data[e.detail.value].ch,
            fortuneNameEn: zxList_1.default.data[e.detail.value].en,
        });
        this.getFortune(this.data.fortuneName);
    },
    getFortune(consName, type = 'month') {
        Api.getHoroscopet(consName, type).then((result) => {
            console.log('result.data', result.data);
            let fortuneData = result.data;
            fortuneData.summary = fortuneData.summary || result.data.love;
            this.setData({
                fortuneData,
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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhbFh6eXNEZXRhaWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZWFsWHp5c0RldGFpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUFpRDtBQUNqRCxxREFBOEM7QUFFOUMsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osU0FBUyxFQUFFLENBQUM7UUFDWixXQUFXLEVBQUUsRUFBRTtRQUNmLGFBQWEsRUFBRSxVQUFVO1FBQ3pCLFdBQVcsRUFBRSxFQUFFO1FBQ2YsTUFBTSxFQUFFLGdCQUFNLENBQUMsSUFBSTtRQUNuQixJQUFJLEVBQUMsSUFBSTtLQUVWO0lBRUQsTUFBTSxFQUFFLFVBQVUsT0FBWTtRQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBQyxPQUFPLENBQUMsQ0FBQztRQUMvQixnQkFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFNLEVBQUUsRUFBRTtZQUM3QixJQUFJLE9BQU8sQ0FBQyxRQUFRLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRTtnQkFDN0IsSUFBSSxDQUFDLE9BQVEsQ0FBQztvQkFDWixhQUFhLEVBQUUsQ0FBQyxDQUFDLEVBQUU7aUJBQ3BCLENBQUMsQ0FBQzthQUNKO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osV0FBVyxFQUFFLE9BQU8sQ0FBQyxRQUFRO1lBQzdCLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJO1NBQzdDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDaEQsQ0FBQztJQUVELFNBQVMsRUFBRSxVQUFVLENBQU07UUFDekIsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLFdBQVcsRUFBRSxnQkFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDM0MsYUFBYSxFQUFFLGdCQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtTQUM5QyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUdELFVBQVUsQ0FBQyxRQUFnQixFQUFFLElBQUksR0FBQyxPQUFPO1FBQ3ZDLEdBQUcsQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQVcsRUFBRSxFQUFFO1lBQ3BELE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUN2QyxJQUFJLFdBQVcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQzlCLFdBQVcsQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDLE9BQU8sSUFBSyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQTtZQUM5RCxJQUFJLENBQUMsT0FBUSxDQUFDO2dCQUNaLFdBQVc7YUFDWixDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxPQUFPLEVBQUU7SUFFVCxDQUFDO0lBS0QsTUFBTSxFQUFFO0lBRVIsQ0FBQztJQUtELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFLRCxRQUFRLEVBQUU7SUFFVixDQUFDO0NBRUYsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgQXBpIGZyb20gJy4uLy4uL3NlcnZpY2UvYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHh6TGlzdCBmcm9tICcuLi8uLi9wdWJsaWMvanNvbi96eExpc3QnO1xuXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIGRhdGFJbmRleDogMCxcbiAgICBmb3J0dW5lTmFtZTogJycsXG4gICAgZm9ydHVuZU5hbWVFbjogJ0FxdWFyaXVzJyxcbiAgICBmb3J0dW5lRGF0YToge30sXG4gICAgeHpMaXN0OiB4ekxpc3QuZGF0YSxcbiAgICBkYXRlOifku4rml6UnXG5cbiAgfSxcblxuICBvbkxvYWQ6IGZ1bmN0aW9uIChvcHRpb25zOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZygnb3B0aW9ucycsb3B0aW9ucyk7XG4gICAgeHpMaXN0LmRhdGEuZm9yRWFjaCgoZTogYW55KSA9PiB7XG4gICAgICBpZiAob3B0aW9ucy5jb25zTmFtZSA9PT0gZS5jaCkge1xuICAgICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgICBmb3J0dW5lTmFtZUVuOiBlLmVuLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIGZvcnR1bmVOYW1lOiBvcHRpb25zLmNvbnNOYW1lLFxuICAgICAgZGF0ZTogb3B0aW9ucy50eXBlID09PSAndG9kYXknID8gJ+S7iuaXpScgOiAn5pys5pyIJyxcbiAgICB9KTtcbiAgICB0aGlzLmdldEZvcnR1bmUob3B0aW9ucy5jb25zTmFtZSxvcHRpb25zLnR5cGUpIFxuICB9LFxuXG4gIG90aGVyUGljazogZnVuY3Rpb24gKGU6IGFueSkge1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgZm9ydHVuZU5hbWU6IHh6TGlzdC5kYXRhW2UuZGV0YWlsLnZhbHVlXS5jaCxcbiAgICAgIGZvcnR1bmVOYW1lRW46IHh6TGlzdC5kYXRhW2UuZGV0YWlsLnZhbHVlXS5lbixcbiAgICB9KTtcbiAgICB0aGlzLmdldEZvcnR1bmUodGhpcy5kYXRhLmZvcnR1bmVOYW1lKTtcbiAgfSxcblxuICAvKiog6I635Y+W5a6e5pe25pif5bqn6L+Q5Yq/ICovXG4gIGdldEZvcnR1bmUoY29uc05hbWU6IHN0cmluZywgdHlwZT0nbW9udGgnKSB7XG4gICAgQXBpLmdldEhvcm9zY29wZXQoY29uc05hbWUsdHlwZSkudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdyZXN1bHQuZGF0YScsIHJlc3VsdC5kYXRhKVxuICAgICAgbGV0IGZvcnR1bmVEYXRhID0gcmVzdWx0LmRhdGE7XG4gICAgICBmb3J0dW5lRGF0YS5zdW1tYXJ5ID0gZm9ydHVuZURhdGEuc3VtbWFyeSB8fCAgcmVzdWx0LmRhdGEubG92ZVxuICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgIGZvcnR1bmVEYXRhLFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG5cbiAgb25SZWFkeTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XG4gICAqL1xuICBvblNob3c6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdoumakOiXj1xuICAgKi9cbiAgb25IaWRlOiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cbiAgICovXG4gIG9uVW5sb2FkOiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxufSkiXX0=