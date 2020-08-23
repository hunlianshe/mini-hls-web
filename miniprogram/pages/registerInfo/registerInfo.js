"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Api = require("../../service/api.service");
const utils = require("../../utils/utils");
const app = getApp();
Page({
    data: {
        submitDisable: false,
        salary: '',
        salaryArray: [
            '5千以下', '5千～1万', '1万～2万', '2万～5万', '5万以上'
        ],
    },
    onLoad: function (options) {
        console.log(options);
    },
    submit(e) {
        const params = e.detail.value;
        if (!utils.validateEmpty(params.age, '请输入年龄') ||
            !utils.validateEmpty(params.height, '请输入年龄') ||
            !utils.validateEmpty(this.data.salary, '请输入收入')) {
            return false;
        }
        const openid = app.globalData.userInfo.openid;
        this.setData({
            submitDisable: true
        });
        Api.updateUser(Object.assign({ openid }, params)).then((result) => {
            wx.hideLoading();
            this.setData({
                submitDisable: true
            });
            if (result.code === 200) {
                wx.navigateTo({
                    url: `../registerStandard/registerStandard`,
                });
            }
            else {
                utils.showModal('系统异常，请稍后再试');
            }
        });
    },
    jumpOver() {
        wx.navigateTo({
            url: '../home/home',
        });
    },
    next() {
        console.log('next');
        wx.navigateTo({
            url: '../registerPhone/registerPhone',
        });
    },
    bindSalaryChange(e) {
        const { salaryArray } = this.data;
        this.setData({
            salary: salaryArray[e.detail.value]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXJJbmZvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXJJbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaURBQWlEO0FBQ2pELDJDQUEyQztBQUUzQyxNQUFNLEdBQUcsR0FBUSxNQUFNLEVBQVUsQ0FBQztBQUVsQyxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixhQUFhLEVBQUUsS0FBSztRQUNwQixNQUFNLEVBQUUsRUFBRTtRQUNWLFdBQVcsRUFBRTtZQUNYLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNO1NBQzFDO0tBQ0Y7SUFFRCxNQUFNLEVBQUUsVUFBVSxPQUFZO1FBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUdELE1BQU0sQ0FBQyxDQUFNO1FBQ1gsTUFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUM7WUFDM0MsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDO1lBQzVDLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsRUFBRTtZQUNqRCxPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsTUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBQzlDLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixhQUFhLEVBQUUsSUFBSTtTQUNwQixDQUFDLENBQUM7UUFDSCxHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxNQUFNLEVBQUUsRUFBRSxNQUFNLENBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQVcsRUFBRSxFQUFFO1lBQ3RFLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBUSxDQUFDO2dCQUNaLGFBQWEsRUFBRSxJQUFJO2FBQ3BCLENBQUMsQ0FBQztZQUNILElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxHQUFHLEVBQUU7Z0JBQ3ZCLEVBQUUsQ0FBQyxVQUFVLENBQUM7b0JBQ1osR0FBRyxFQUFFLHNDQUFzQztpQkFDNUMsQ0FBQyxDQUFDO2FBQ0o7aUJBQU07Z0JBQ0wsS0FBSyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUMvQjtRQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELFFBQVE7UUFDTixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLGNBQWM7U0FDcEIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELElBQUk7UUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BCLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsZ0NBQWdDO1NBQ3RDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFHRCxnQkFBZ0IsQ0FBQyxDQUFNO1FBQ3JCLE1BQU0sRUFBRSxXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFBO1FBQ2pDLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1NBQ3BDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFLRCxPQUFPLEVBQUU7SUFFVCxDQUFDO0lBS0QsTUFBTSxFQUFFO0lBRVIsQ0FBQztJQUtELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFLRCxRQUFRLEVBQUU7SUFFVixDQUFDO0lBS0QsaUJBQWlCLEVBQUU7SUFFbkIsQ0FBQztJQUtELGFBQWEsRUFBRTtJQUVmLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBBcGkgZnJvbSAnLi4vLi4vc2VydmljZS9hcGkuc2VydmljZSc7XHJcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJztcclxuaW1wb3J0IHsgSU15QXBwIH0gZnJvbSAnLi4vLi4vYXBwJztcclxuY29uc3QgYXBwOiBhbnkgPSBnZXRBcHA8SU15QXBwPigpO1xyXG5cclxuUGFnZSh7XHJcbiAgZGF0YToge1xyXG4gICAgc3VibWl0RGlzYWJsZTogZmFsc2UsXHJcbiAgICBzYWxhcnk6ICcnLFxyXG4gICAgc2FsYXJ5QXJyYXk6IFtcclxuICAgICAgJzXljYPku6XkuIsnLCAnNeWNg++9njHkuIcnLCAnMeS4h++9njLkuIcnLCAnMuS4h++9njXkuIcnLCAnNeS4h+S7peS4iidcclxuICAgIF0sXHJcbiAgfSxcclxuICBcclxuICBvbkxvYWQ6IGZ1bmN0aW9uIChvcHRpb25zOiBhbnkpIHtcclxuICAgIGNvbnNvbGUubG9nKG9wdGlvbnMpO1xyXG4gIH0sXHJcblxyXG4gIC8qKiDlubTpvoTouqvpq5jmlLblhaUgKi9cclxuICBzdWJtaXQoZTogYW55KTogYW55IHtcclxuICAgIGNvbnN0IHBhcmFtcyA9IGUuZGV0YWlsLnZhbHVlO1xyXG4gICAgaWYgKCF1dGlscy52YWxpZGF0ZUVtcHR5KHBhcmFtcy5hZ2UsICfor7fovpPlhaXlubTpvoQnKSB8fFxyXG4gICAgICAhdXRpbHMudmFsaWRhdGVFbXB0eShwYXJhbXMuaGVpZ2h0LCAn6K+36L6T5YWl5bm06b6EJykgfHxcclxuICAgICAgIXV0aWxzLnZhbGlkYXRlRW1wdHkodGhpcy5kYXRhLnNhbGFyeSwgJ+ivt+i+k+WFpeaUtuWFpScpKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGNvbnN0IG9wZW5pZCA9IGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvLm9wZW5pZDtcclxuICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICBzdWJtaXREaXNhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIEFwaS51cGRhdGVVc2VyKE9iamVjdC5hc3NpZ24oeyBvcGVuaWQgfSwgcGFyYW1zLCkpLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XHJcbiAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgIHN1Ym1pdERpc2FibGU6IHRydWVcclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChyZXN1bHQuY29kZSA9PT0gMjAwKSB7XHJcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICB1cmw6IGAuLi9yZWdpc3RlclN0YW5kYXJkL3JlZ2lzdGVyU3RhbmRhcmRgLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHV0aWxzLnNob3dNb2RhbCgn57O757uf5byC5bi477yM6K+356iN5ZCO5YaN6K+VJyk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAganVtcE92ZXIoKTogdm9pZCB7XHJcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgdXJsOiAnLi4vaG9tZS9ob21lJyxcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgbmV4dCgpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKCduZXh0Jyk7XHJcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgdXJsOiAnLi4vcmVnaXN0ZXJQaG9uZS9yZWdpc3RlclBob25lJyxcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgLyoqIOaciOaUtuWFpSAqL1xyXG4gIGJpbmRTYWxhcnlDaGFuZ2UoZTogYW55KSB7XHJcbiAgICBjb25zdCB7IHNhbGFyeUFycmF5IH0gPSB0aGlzLmRhdGFcclxuICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICBzYWxhcnk6IHNhbGFyeUFycmF5W2UuZGV0YWlsLnZhbHVlXVxyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliJ3mrKHmuLLmn5PlrozmiJBcclxuICAgKi9cclxuICBvblJlYWR5OiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XHJcbiAgICovXHJcbiAgb25TaG93OiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXHJcbiAgICovXHJcbiAgb25IaWRlOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Y246L29XHJcbiAgICovXHJcbiAgb25VbmxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog6aG16Z2i55u45YWz5LqL5Lu25aSE55CG5Ye95pWwLS3nm5HlkKznlKjmiLfkuIvmi4nliqjkvZxcclxuICAgKi9cclxuICBvblB1bGxEb3duUmVmcmVzaDogZnVuY3Rpb24gKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcclxuICAgKi9cclxuICBvblJlYWNoQm90dG9tOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gIH0sXHJcbn0pIl19