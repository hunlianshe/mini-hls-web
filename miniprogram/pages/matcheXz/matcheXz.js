"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zxList_1 = require("../../public/json/zxList");
const utils_1 = require("../../utils/utils");
Page({
    data: {
        dataIndex: 0,
        dataList: zxList_1.default.data,
        myFortuneName: '',
        otherFortuneName: '',
        showDialog: false,
    },
    onLoad: function (options) {
        console.log(options);
    },
    myPick: function (e) {
        this.setData({
            myFortuneName: zxList_1.default.data[e.detail.value].ch,
        });
    },
    otherPick: function (e) {
        this.setData({
            otherFortuneName: zxList_1.default.data[e.detail.value].ch,
        });
    },
    submit() {
        let rightType = 'constellationMatching';
        if (utils_1.dealRightIntercept(rightType)) {
            this.setData({
                showDialog: true,
            });
            return;
        }
        utils_1.setRightStorage(rightType);
        const { myFortuneName, otherFortuneName } = this.data;
        wx.navigateTo({
            url: `../matchXZResult/matchXZResult?me=${myFortuneName}&he=${otherFortuneName}`,
        });
    },
    closeDialog() {
        this.setData({
            showDialog: false,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0Y2hlWHouanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYXRjaGVYei50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFEQUE4QztBQUM5Qyw2Q0FBd0U7QUFFeEUsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osU0FBUyxFQUFFLENBQUM7UUFDWixRQUFRLEVBQUUsZ0JBQU0sQ0FBQyxJQUFJO1FBQ3JCLGFBQWEsRUFBRSxFQUFFO1FBQ2pCLGdCQUFnQixFQUFFLEVBQUU7UUFDcEIsVUFBVSxFQUFFLEtBQUs7S0FDbEI7SUFFRCxNQUFNLEVBQUUsVUFBVSxPQUFZO1FBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVELE1BQU0sRUFBRSxVQUFVLENBQU07UUFDdEIsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLGFBQWEsRUFBRSxnQkFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7U0FDOUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFNBQVMsRUFBRSxVQUFVLENBQU07UUFDekIsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLGdCQUFnQixFQUFFLGdCQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtTQUNqRCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsTUFBTTtRQUNKLElBQUksU0FBUyxHQUFHLHVCQUF1QixDQUFDO1FBQ3hDLElBQUksMEJBQWtCLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDakMsSUFBSSxDQUFDLE9BQVEsQ0FBQztnQkFDWixVQUFVLEVBQUUsSUFBSTthQUNqQixDQUFDLENBQUM7WUFDSCxPQUFPO1NBQ1I7UUFDRCx1QkFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRTNCLE1BQU0sRUFDSixhQUFhLEVBQ2IsZ0JBQWdCLEVBQ2pCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNkLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUscUNBQXFDLGFBQWEsT0FBTyxnQkFBZ0IsRUFBRTtTQUNqRixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixVQUFVLEVBQUUsS0FBSztTQUNsQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBS0QsTUFBTSxFQUFFO0lBRVIsQ0FBQztJQUtELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFLRCxRQUFRLEVBQUU7SUFFVixDQUFDO0lBS0QsaUJBQWlCLEVBQUU7SUFFbkIsQ0FBQztJQUtELGFBQWEsRUFBRTtJQUVmLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeHpMaXN0IGZyb20gJy4uLy4uL3B1YmxpYy9qc29uL3p4TGlzdCc7XG5pbXBvcnQgeyBkZWFsUmlnaHRJbnRlcmNlcHQsIHNldFJpZ2h0U3RvcmFnZSB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJztcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBkYXRhSW5kZXg6IDAsXG4gICAgZGF0YUxpc3Q6IHh6TGlzdC5kYXRhLFxuICAgIG15Rm9ydHVuZU5hbWU6ICcnLFxuICAgIG90aGVyRm9ydHVuZU5hbWU6ICcnLFxuICAgIHNob3dEaWFsb2c6IGZhbHNlLFxuICB9LFxuXG4gIG9uTG9hZDogZnVuY3Rpb24gKG9wdGlvbnM6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKG9wdGlvbnMpO1xuICB9LFxuXG4gIG15UGljazogZnVuY3Rpb24gKGU6IGFueSkge1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgbXlGb3J0dW5lTmFtZTogeHpMaXN0LmRhdGFbZS5kZXRhaWwudmFsdWVdLmNoLFxuICAgIH0pO1xuICB9LFxuXG4gIG90aGVyUGljazogZnVuY3Rpb24gKGU6IGFueSkge1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgb3RoZXJGb3J0dW5lTmFtZTogeHpMaXN0LmRhdGFbZS5kZXRhaWwudmFsdWVdLmNoLFxuICAgIH0pO1xuICB9LFxuXG4gIHN1Ym1pdCgpIHtcbiAgICBsZXQgcmlnaHRUeXBlID0gJ2NvbnN0ZWxsYXRpb25NYXRjaGluZyc7IC8vIOaYn+W6p+WMuemFjVxuICAgIGlmIChkZWFsUmlnaHRJbnRlcmNlcHQocmlnaHRUeXBlKSkge1xuICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgIHNob3dEaWFsb2c6IHRydWUsXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2V0UmlnaHRTdG9yYWdlKHJpZ2h0VHlwZSk7XG5cbiAgICBjb25zdCB7XG4gICAgICBteUZvcnR1bmVOYW1lLFxuICAgICAgb3RoZXJGb3J0dW5lTmFtZVxuICAgIH0gPSB0aGlzLmRhdGE7XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6IGAuLi9tYXRjaFhaUmVzdWx0L21hdGNoWFpSZXN1bHQ/bWU9JHtteUZvcnR1bmVOYW1lfSZoZT0ke290aGVyRm9ydHVuZU5hbWV9YCxcbiAgICB9KVxuICB9LFxuXG4gIGNsb3NlRGlhbG9nKCkge1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgc2hvd0RpYWxvZzogZmFsc2UsXG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XG4gICAqL1xuICBvblNob3c6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdoumakOiXj1xuICAgKi9cbiAgb25IaWRlOiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cbiAgICovXG4gIG9uVW5sb2FkOiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog6aG16Z2i55u45YWz5LqL5Lu25aSE55CG5Ye95pWwLS3nm5HlkKznlKjmiLfkuIvmi4nliqjkvZxcbiAgICovXG4gIG9uUHVsbERvd25SZWZyZXNoOiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog6aG16Z2i5LiK5ouJ6Kem5bqV5LqL5Lu255qE5aSE55CG5Ye95pWwXG4gICAqL1xuICBvblJlYWNoQm90dG9tOiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcbn0pIl19