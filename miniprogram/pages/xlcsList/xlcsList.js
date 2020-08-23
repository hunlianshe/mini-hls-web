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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGxjc0xpc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ4bGNzTGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUFpRDtBQUdqRCxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixPQUFPLEVBQUUsRUFBRTtLQUNaO0lBRUQsTUFBTSxFQUFFO1FBQ04sSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxNQUFNLENBQUMsQ0FBTTtRQUNYLE1BQU0sRUFDSixFQUFFLEVBQ0YsSUFBSSxHQUNMLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDNUIsSUFBSSxJQUFJLEtBQUssR0FBRyxFQUFFO1lBQ2hCLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQ1osR0FBRyxFQUFFLG1CQUFtQixFQUFFLEVBQUU7YUFDN0IsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQ1osR0FBRyxFQUFFLCtCQUErQixFQUFFLEVBQUU7YUFDekMsQ0FBQyxDQUFBO1NBQ0g7SUFDSCxDQUFDO0lBR0QsVUFBVTtRQUNSLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFXLEVBQUUsRUFBRTtZQUNwQyxJQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQzFCLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFNLEVBQUUsRUFBRTtnQkFDekIsQ0FBQyxDQUFDLEtBQUssR0FBRywyQkFBMkIsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDO1lBQ3BELENBQUMsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLE9BQVEsQ0FBQztnQkFDWixPQUFPO2FBQ1IsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsT0FBTyxFQUFFO0lBRVQsQ0FBQztJQUtELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFLRCxNQUFNLEVBQUU7SUFFUixDQUFDO0lBS0QsUUFBUSxFQUFFO0lBRVYsQ0FBQztJQUtELGlCQUFpQixFQUFFO0lBRW5CLENBQUM7SUFLRCxhQUFhLEVBQUU7SUFFZixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgQXBpIGZyb20gJy4uLy4uL3NlcnZpY2UvYXBpLnNlcnZpY2UnO1xyXG5cclxuXHJcblBhZ2Uoe1xyXG4gIGRhdGE6IHtcclxuICAgIHBzeVRlc3Q6IFtdLFxyXG4gIH0sXHJcblxyXG4gIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5nZXRQc3lMaXN0KCk7XHJcbiAgfSxcclxuXHJcbiAgZG9UZXN0KGU6IGFueSkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBpZCxcclxuICAgICAgdHlwZSxcclxuICAgIH0gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldDtcclxuICAgIGNvbnNvbGUubG9nKCd0eXBlLi4uJywgdHlwZSlcclxuICAgIGlmICh0eXBlID09PSAnMycpIHtcclxuICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgdXJsOiBgLi4vcXNxeS9xc3F5P2lkPSR7aWR9YCxcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmw6IGAuLi94bGNzRGV0YWlsL3hsY3NEZXRhaWw/aWQ9JHtpZH1gLFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8qKiDojrflj5blv4PnkIbmtYvor5Xpopjnm64gKi9cclxuICBnZXRQc3lMaXN0KCkge1xyXG4gICAgQXBpLmdldFBzeUxpc3QoKS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xyXG4gICAgICBsZXQgcHN5VGVzdCA9IHJlc3VsdC5kYXRhO1xyXG4gICAgICBwc3lUZXN0LmZvckVhY2goKGU6IGFueSkgPT4ge1xyXG4gICAgICAgIGUuaW1hZ2UgPSBgLi4vLi4vcHVibGljL2ltYWdlL3hsY3NfJHtlLnR5cGV9LmpwZ2A7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICBwc3lUZXN0LFxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICBvblJlYWR5OiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XHJcbiAgICovXHJcbiAgb25TaG93OiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXHJcbiAgICovXHJcbiAgb25IaWRlOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Y246L29XHJcbiAgICovXHJcbiAgb25VbmxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog6aG16Z2i55u45YWz5LqL5Lu25aSE55CG5Ye95pWwLS3nm5HlkKznlKjmiLfkuIvmi4nliqjkvZxcclxuICAgKi9cclxuICBvblB1bGxEb3duUmVmcmVzaDogZnVuY3Rpb24gKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcclxuICAgKi9cclxuICBvblJlYWNoQm90dG9tOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gIH0sXHJcbn0pIl19