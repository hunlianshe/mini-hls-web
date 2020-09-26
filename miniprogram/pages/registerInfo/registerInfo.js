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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXJJbmZvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXJJbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaURBQWlEO0FBQ2pELDJDQUEyQztBQUUzQyxNQUFNLEdBQUcsR0FBUSxNQUFNLEVBQVUsQ0FBQztBQUVsQyxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixhQUFhLEVBQUUsS0FBSztRQUNwQixNQUFNLEVBQUUsRUFBRTtRQUNWLFdBQVcsRUFBRTtZQUNYLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNO1NBQzFDO0tBQ0Y7SUFFRCxNQUFNLEVBQUUsVUFBVSxPQUFZO1FBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUdELE1BQU0sQ0FBQyxDQUFNO1FBQ1gsTUFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUM7WUFDM0MsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDO1lBQzVDLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsRUFBRTtZQUNqRCxPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsTUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBQzlDLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixhQUFhLEVBQUUsSUFBSTtTQUNwQixDQUFDLENBQUM7UUFDSCxHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxNQUFNLEVBQUUsRUFBRSxNQUFNLENBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQVcsRUFBRSxFQUFFO1lBQ3RFLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBUSxDQUFDO2dCQUNaLGFBQWEsRUFBRSxJQUFJO2FBQ3BCLENBQUMsQ0FBQztZQUNILElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxHQUFHLEVBQUU7Z0JBQ3ZCLEVBQUUsQ0FBQyxVQUFVLENBQUM7b0JBQ1osR0FBRyxFQUFFLHNDQUFzQztpQkFDNUMsQ0FBQyxDQUFDO2FBQ0o7aUJBQU07Z0JBQ0wsS0FBSyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUMvQjtRQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELFFBQVE7UUFDTixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLGNBQWM7U0FDcEIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELElBQUk7UUFDRixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLGdDQUFnQztTQUN0QyxDQUFDLENBQUE7SUFDSixDQUFDO0lBR0QsZ0JBQWdCLENBQUMsQ0FBTTtRQUNyQixNQUFNLEVBQUUsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQTtRQUNqQyxJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztTQUNwQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBS0QsT0FBTyxFQUFFO0lBRVQsQ0FBQztJQUtELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFLRCxNQUFNLEVBQUU7SUFFUixDQUFDO0lBS0QsUUFBUSxFQUFFO0lBRVYsQ0FBQztJQUtELGlCQUFpQixFQUFFO0lBRW5CLENBQUM7SUFLRCxhQUFhLEVBQUU7SUFFZixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgQXBpIGZyb20gJy4uLy4uL3NlcnZpY2UvYXBpLnNlcnZpY2UnO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xuaW1wb3J0IHsgSU15QXBwIH0gZnJvbSAnLi4vLi4vYXBwJztcbmNvbnN0IGFwcDogYW55ID0gZ2V0QXBwPElNeUFwcD4oKTtcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBzdWJtaXREaXNhYmxlOiBmYWxzZSxcbiAgICBzYWxhcnk6ICcnLFxuICAgIHNhbGFyeUFycmF5OiBbXG4gICAgICAnNeWNg+S7peS4iycsICc15Y2D772eMeS4hycsICcx5LiH772eMuS4hycsICcy5LiH772eNeS4hycsICc15LiH5Lul5LiKJ1xuICAgIF0sXG4gIH0sXG4gIFxuICBvbkxvYWQ6IGZ1bmN0aW9uIChvcHRpb25zOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZyhvcHRpb25zKTtcbiAgfSxcblxuICAvKiog5bm06b6E6Lqr6auY5pS25YWlICovXG4gIHN1Ym1pdChlOiBhbnkpOiBhbnkge1xuICAgIGNvbnN0IHBhcmFtcyA9IGUuZGV0YWlsLnZhbHVlO1xuICAgIGlmICghdXRpbHMudmFsaWRhdGVFbXB0eShwYXJhbXMuYWdlLCAn6K+36L6T5YWl5bm06b6EJykgfHxcbiAgICAgICF1dGlscy52YWxpZGF0ZUVtcHR5KHBhcmFtcy5oZWlnaHQsICfor7fovpPlhaXlubTpvoQnKSB8fFxuICAgICAgIXV0aWxzLnZhbGlkYXRlRW1wdHkodGhpcy5kYXRhLnNhbGFyeSwgJ+ivt+i+k+WFpeaUtuWFpScpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IG9wZW5pZCA9IGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvLm9wZW5pZDtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIHN1Ym1pdERpc2FibGU6IHRydWVcbiAgICB9KTtcbiAgICBBcGkudXBkYXRlVXNlcihPYmplY3QuYXNzaWduKHsgb3BlbmlkIH0sIHBhcmFtcywpKS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgd3guaGlkZUxvYWRpbmcoKTtcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICBzdWJtaXREaXNhYmxlOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIGlmIChyZXN1bHQuY29kZSA9PT0gMjAwKSB7XG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogYC4uL3JlZ2lzdGVyU3RhbmRhcmQvcmVnaXN0ZXJTdGFuZGFyZGAsXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdXRpbHMuc2hvd01vZGFsKCfns7vnu5/lvILluLjvvIzor7fnqI3lkI7lho3or5UnKTtcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuXG4gIGp1bXBPdmVyKCk6IHZvaWQge1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiAnLi4vaG9tZS9ob21lJyxcbiAgICB9KVxuICB9LFxuXG4gIG5leHQoKTogdm9pZCB7XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6ICcuLi9yZWdpc3RlclBob25lL3JlZ2lzdGVyUGhvbmUnLFxuICAgIH0pXG4gIH0sXG5cbiAgLyoqIOaciOaUtuWFpSAqL1xuICBiaW5kU2FsYXJ5Q2hhbmdlKGU6IGFueSkge1xuICAgIGNvbnN0IHsgc2FsYXJ5QXJyYXkgfSA9IHRoaXMuZGF0YVxuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgc2FsYXJ5OiBzYWxhcnlBcnJheVtlLmRldGFpbC52YWx1ZV1cbiAgICB9KTtcbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliJ3mrKHmuLLmn5PlrozmiJBcbiAgICovXG4gIG9uUmVhZHk6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxuICAgKi9cbiAgb25TaG93OiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cbiAgICovXG4gIG9uSGlkZTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Y246L29XG4gICAqL1xuICBvblVubG9hZDogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXG4gICAqL1xuICBvblB1bGxEb3duUmVmcmVzaDogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxuICAgKi9cbiAgb25SZWFjaEJvdHRvbTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG59KSJdfQ==