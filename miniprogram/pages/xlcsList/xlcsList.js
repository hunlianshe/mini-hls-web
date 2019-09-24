"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Api = require("../../service/api.service");
Page({
    data: {
        psyTest: [],
    },
    onLoad: function () {
        this.getPsyList();
    },
    doTest(e) {
        const { id, type, } = e.currentTarget.dataset;
        console.log('type...', type);
        if (type === '3') {
            wx.navigateTo({
                url: `../qsqy/qsqy?id=${id}`,
            });
        }
        else {
            wx.navigateTo({
                url: `../xlcsDetail/xlcsDetail?id=${id}`,
            });
        }
    },
    getPsyList() {
        Api.getPsyList().then((result) => {
            let psyTest = result.data;
            psyTest.forEach((e) => {
                e.image = `../../public/image/xlcs_${e.type}.jpg`;
            });
            this.setData({
                psyTest,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGxjc0xpc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ4bGNzTGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUFpRDtBQUdqRCxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixPQUFPLEVBQUUsRUFBRTtLQUNaO0lBRUQsTUFBTSxFQUFFO1FBQ04sSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxNQUFNLENBQUMsQ0FBTTtRQUNYLE1BQU0sRUFDSixFQUFFLEVBQ0YsSUFBSSxHQUNMLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDNUIsSUFBSSxJQUFJLEtBQUssR0FBRyxFQUFFO1lBQ2hCLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQ1osR0FBRyxFQUFFLG1CQUFtQixFQUFFLEVBQUU7YUFDN0IsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQ1osR0FBRyxFQUFFLCtCQUErQixFQUFFLEVBQUU7YUFDekMsQ0FBQyxDQUFBO1NBQ0g7SUFDSCxDQUFDO0lBR0QsVUFBVTtRQUNSLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFXLEVBQUUsRUFBRTtZQUNwQyxJQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQzFCLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFNLEVBQUUsRUFBRTtnQkFDekIsQ0FBQyxDQUFDLEtBQUssR0FBRywyQkFBMkIsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDO1lBQ3BELENBQUMsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLE9BQVEsQ0FBQztnQkFDWixPQUFPO2FBQ1IsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsT0FBTyxFQUFFO0lBRVQsQ0FBQztJQUtELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFLRCxNQUFNLEVBQUU7SUFFUixDQUFDO0lBS0QsUUFBUSxFQUFFO0lBRVYsQ0FBQztJQUtELGlCQUFpQixFQUFFO0lBRW5CLENBQUM7SUFLRCxhQUFhLEVBQUU7SUFFZixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgQXBpIGZyb20gJy4uLy4uL3NlcnZpY2UvYXBpLnNlcnZpY2UnO1xuXG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgcHN5VGVzdDogW10sXG4gIH0sXG5cbiAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5nZXRQc3lMaXN0KCk7XG4gIH0sXG5cbiAgZG9UZXN0KGU6IGFueSkge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgdHlwZSxcbiAgICB9ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQ7XG4gICAgY29uc29sZS5sb2coJ3R5cGUuLi4nLCB0eXBlKVxuICAgIGlmICh0eXBlID09PSAnMycpIHtcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAuLi9xc3F5L3FzcXk/aWQ9JHtpZH1gLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAuLi94bGNzRGV0YWlsL3hsY3NEZXRhaWw/aWQ9JHtpZH1gLFxuICAgICAgfSlcbiAgICB9XG4gIH0sXG5cbiAgLyoqIOiOt+WPluW/g+eQhua1i+ivlemimOebriAqL1xuICBnZXRQc3lMaXN0KCkge1xuICAgIEFwaS5nZXRQc3lMaXN0KCkudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgIGxldCBwc3lUZXN0ID0gcmVzdWx0LmRhdGE7XG4gICAgICBwc3lUZXN0LmZvckVhY2goKGU6IGFueSkgPT4ge1xuICAgICAgICBlLmltYWdlID0gYC4uLy4uL3B1YmxpYy9pbWFnZS94bGNzXyR7ZS50eXBlfS5qcGdgO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgcHN5VGVzdCxcbiAgICAgIH0pXG4gICAgfSlcbiAgfSxcblxuICBvblJlYWR5OiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcbiAgICovXG4gIG9uU2hvdzogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXG4gICAqL1xuICBvbkhpZGU6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxuICAgKi9cbiAgb25VbmxvYWQ6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxuICAgKi9cbiAgb25QdWxsRG93blJlZnJlc2g6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcbiAgICovXG4gIG9uUmVhY2hCb3R0b206IGZ1bmN0aW9uICgpIHtcblxuICB9LFxufSkiXX0=