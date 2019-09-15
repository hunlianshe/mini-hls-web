"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Api = require("../../service/api.service");
const utils = require("../../utils/utils");
Page({
    data: {
        openid: '',
        userInfo: {},
    },
    onLoad: function (options) {
        this.setData({
            openid: options.openid,
        });
        this.getUserInfo(options.openid);
    },
    getUserInfo(openid) {
        Api.getUserInfo(openid).then((result) => {
            if (result.code == 200) {
                const userInfo = result.data;
                this.setData({
                    userInfo,
                });
            }
        });
    },
    putUsersLike() {
        const { openid } = this.data;
        Api.putUsersLike(openid).then((result) => {
            if (result.code === '200') {
                utils.showModal('收藏成功');
            }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlckRldGFpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXJEZXRhaWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBaUQ7QUFDakQsMkNBQTJDO0FBRzNDLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLE1BQU0sRUFBRSxFQUFFO1FBQ1YsUUFBUSxFQUFFLEVBQVM7S0FDcEI7SUFFRCxNQUFNLEVBQUUsVUFBVSxPQUFZO1FBQzVCLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07U0FDdkIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUdELFdBQVcsQ0FBQyxNQUFjO1FBQ3hCLEdBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBVyxFQUFFLEVBQUU7WUFDM0MsSUFBSSxNQUFNLENBQUMsSUFBSSxJQUFJLEdBQUcsRUFBRTtnQkFDdEIsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDN0IsSUFBSSxDQUFDLE9BQVEsQ0FBQztvQkFDWixRQUFRO2lCQUNULENBQUMsQ0FBQzthQUNKO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBR0QsWUFBWTtRQUNWLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzdCLEdBQUcsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBVyxFQUFFLEVBQUU7WUFDNUMsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLEtBQUssRUFBRTtnQkFDekIsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUN6QjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELE9BQU8sRUFBRTtJQUNULENBQUM7SUFHRCxNQUFNLEVBQUU7SUFDUixDQUFDO0lBS0QsTUFBTSxFQUFFO0lBRVIsQ0FBQztJQUtELFFBQVEsRUFBRTtJQUVWLENBQUM7Q0FFRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBBcGkgZnJvbSAnLi4vLi4vc2VydmljZS9hcGkuc2VydmljZSc7IFxuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xuXG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgb3BlbmlkOiAnJyxcbiAgICB1c2VySW5mbzoge30gYXMgYW55LFxuICB9LFxuXG4gIG9uTG9hZDogZnVuY3Rpb24gKG9wdGlvbnM6IGFueSkge1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgb3BlbmlkOiBvcHRpb25zLm9wZW5pZCxcbiAgICB9KTtcbiAgICB0aGlzLmdldFVzZXJJbmZvKG9wdGlvbnMub3BlbmlkKTtcbiAgfSxcblxuICAvKiog6I635Y+W55So5oi35L+h5oGvICovXG4gIGdldFVzZXJJbmZvKG9wZW5pZDogc3RyaW5nKSB7XG4gICAgQXBpLmdldFVzZXJJbmZvKG9wZW5pZCkudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcbiAgICAgICAgY29uc3QgdXNlckluZm8gPSByZXN1bHQuZGF0YTtcbiAgICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgICAgdXNlckluZm8sXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIC8qKiDlhbPms6go5pS26JePKeaOpeWPoyAqL1xuICBwdXRVc2Vyc0xpa2UoKSB7XG4gICAgY29uc3QgeyBvcGVuaWQgfSA9IHRoaXMuZGF0YTtcbiAgICBBcGkucHV0VXNlcnNMaWtlKG9wZW5pZCkudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgIGlmIChyZXN1bHQuY29kZSA9PT0gJzIwMCcpIHtcbiAgICAgICAgdXRpbHMuc2hvd01vZGFsKCfmlLbol4/miJDlip8nKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICBvblJlYWR5OiBmdW5jdGlvbiAoKSB7XG4gIH0sXG5cblxuICBvblNob3c6IGZ1bmN0aW9uICgpIHtcbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cbiAgICovXG4gIG9uSGlkZTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Y246L29XG4gICAqL1xuICBvblVubG9hZDogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbn0pIl19