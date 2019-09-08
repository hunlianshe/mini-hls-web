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
        wx.navigateTo({
            url: `../xlcsDetail/xlcsDetail?id=${e.currentTarget.dataset.id}`,
        });
    },
    getPsyList() {
        Api.getPsyList().then((result) => {
            this.setData({
                psyTest: result.data,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGxjc0xpc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ4bGNzTGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUFpRDtBQUdqRCxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixPQUFPLEVBQUUsRUFBRTtLQUNaO0lBRUQsTUFBTSxFQUFFO1FBQ04sSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxNQUFNLENBQUMsQ0FBTTtRQUNYLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsK0JBQStCLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRTtTQUNqRSxDQUFDLENBQUE7SUFDSixDQUFDO0lBR0QsVUFBVTtRQUNSLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFXLEVBQUUsRUFBRTtZQUNwQyxJQUFJLENBQUMsT0FBUSxDQUFDO2dCQUNaLE9BQU8sRUFBRSxNQUFNLENBQUMsSUFBSTthQUNyQixDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxPQUFPLEVBQUU7SUFFVCxDQUFDO0lBS0QsTUFBTSxFQUFFO0lBRVIsQ0FBQztJQUtELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFLRCxRQUFRLEVBQUU7SUFFVixDQUFDO0lBS0QsaUJBQWlCLEVBQUU7SUFFbkIsQ0FBQztJQUtELGFBQWEsRUFBRTtJQUVmLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBBcGkgZnJvbSAnLi4vLi4vc2VydmljZS9hcGkuc2VydmljZSc7XG5cblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBwc3lUZXN0OiBbXSxcbiAgfSxcblxuICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmdldFBzeUxpc3QoKTtcbiAgfSxcblxuICBkb1Rlc3QoZTogYW55KSB7XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6IGAuLi94bGNzRGV0YWlsL3hsY3NEZXRhaWw/aWQ9JHtlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZH1gLFxuICAgIH0pXG4gIH0sXG5cbiAgLyoqIOiOt+WPluW/g+eQhua1i+ivlemimOebriAqL1xuICBnZXRQc3lMaXN0KCkge1xuICAgIEFwaS5nZXRQc3lMaXN0KCkudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICBwc3lUZXN0OiByZXN1bHQuZGF0YSxcbiAgICAgIH0pXG4gICAgfSlcbiAgfSxcblxuICBvblJlYWR5OiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcbiAgICovXG4gIG9uU2hvdzogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXG4gICAqL1xuICBvbkhpZGU6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxuICAgKi9cbiAgb25VbmxvYWQ6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxuICAgKi9cbiAgb25QdWxsRG93blJlZnJlc2g6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcbiAgICovXG4gIG9uUmVhY2hCb3R0b206IGZ1bmN0aW9uICgpIHtcblxuICB9LFxufSkiXX0=