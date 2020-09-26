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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGxjc0xpc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ4bGNzTGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUFpRDtBQUdqRCxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixPQUFPLEVBQUUsRUFBRTtLQUNaO0lBRUQsTUFBTSxFQUFFO1FBQ04sSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxNQUFNLENBQUMsQ0FBTTtRQUNYLE1BQU0sRUFDSixFQUFFLEVBQ0YsSUFBSSxHQUNMLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDNUIsSUFBSSxJQUFJLEtBQUssR0FBRyxFQUFFO1lBQ2hCLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQ1osR0FBRyxFQUFFLG1CQUFtQixFQUFFLEVBQUU7YUFDN0IsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQ1osR0FBRyxFQUFFLCtCQUErQixFQUFFLEVBQUU7YUFDekMsQ0FBQyxDQUFBO1NBQ0g7SUFDSCxDQUFDO0lBR0QsVUFBVTtRQUNSLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFXLEVBQUUsRUFBRTtZQUNwQyxJQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQzFCLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFNLEVBQUUsRUFBRTtnQkFDekIsQ0FBQyxDQUFDLEtBQUssR0FBRywyQkFBMkIsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDO1lBQ3BELENBQUMsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLE9BQVEsQ0FBQztnQkFDWixPQUFPO2FBQ1IsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsT0FBTyxFQUFFO0lBRVQsQ0FBQztJQUtELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFLRCxNQUFNLEVBQUU7SUFFUixDQUFDO0lBS0QsUUFBUSxFQUFFO0lBRVYsQ0FBQztJQUtELGlCQUFpQixFQUFFO0lBRW5CLENBQUM7SUFLRCxhQUFhLEVBQUU7SUFFZixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgQXBpIGZyb20gJy4uLy4uL3NlcnZpY2UvYXBpLnNlcnZpY2UnO1xuXG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgcHN5VGVzdDogW10sXG4gIH0sXG5cbiAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5nZXRQc3lMaXN0KCk7XG4gIH0sXG5cbiAgZG9UZXN0KGU6IGFueSkge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgdHlwZSxcbiAgICB9ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQ7XG4gICAgaWYgKHR5cGUgPT09ICczJykge1xuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC4uL3FzcXkvcXNxeT9pZD0ke2lkfWAsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC4uL3hsY3NEZXRhaWwveGxjc0RldGFpbD9pZD0ke2lkfWAsXG4gICAgICB9KVxuICAgIH1cbiAgfSxcblxuICAvKiog6I635Y+W5b+D55CG5rWL6K+V6aKY55uuICovXG4gIGdldFBzeUxpc3QoKSB7XG4gICAgQXBpLmdldFBzeUxpc3QoKS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgbGV0IHBzeVRlc3QgPSByZXN1bHQuZGF0YTtcbiAgICAgIHBzeVRlc3QuZm9yRWFjaCgoZTogYW55KSA9PiB7XG4gICAgICAgIGUuaW1hZ2UgPSBgLi4vLi4vcHVibGljL2ltYWdlL3hsY3NfJHtlLnR5cGV9LmpwZ2A7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICBwc3lUZXN0LFxuICAgICAgfSlcbiAgICB9KVxuICB9LFxuXG4gIG9uUmVhZHk6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxuICAgKi9cbiAgb25TaG93OiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cbiAgICovXG4gIG9uSGlkZTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Y246L29XG4gICAqL1xuICBvblVubG9hZDogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXG4gICAqL1xuICBvblB1bGxEb3duUmVmcmVzaDogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxuICAgKi9cbiAgb25SZWFjaEJvdHRvbTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG59KSJdfQ==