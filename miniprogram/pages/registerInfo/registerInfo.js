"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Api = require("../../service/api.service");
const utils = require("../../utils/utils");
const app = getApp();
Page({
    data: {
        submitDisable: false,
    },
    onLoad: function (options) {
        console.log(options);
    },
    submit(e) {
        const params = e.detail.value;
        if (!utils.validateEmpty(params.age, '请输入年龄') ||
            !utils.validateEmpty(params.height, '请输入年龄') ||
            !utils.validateEmpty(params.salary, '请输入收入')) {
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
                utils.showModal('更新成功');
                setTimeout(() => {
                    wx.switchTab({
                        url: `../registerStandard/registerStandard`,
                    });
                }, 1000);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXJJbmZvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXJJbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaURBQWlEO0FBQ2pELDJDQUEyQztBQUUzQyxNQUFNLEdBQUcsR0FBUSxNQUFNLEVBQVUsQ0FBQztBQUVsQyxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixhQUFhLEVBQUUsS0FBSztLQUNyQjtJQUtELE1BQU0sRUFBRSxVQUFVLE9BQVk7UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBR0QsTUFBTSxDQUFDLENBQU07UUFDWCxNQUFNLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQztZQUMzQyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUM7WUFDNUMsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLEVBQUU7WUFDOUMsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELE1BQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUM5QyxJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osYUFBYSxFQUFFLElBQUk7U0FDcEIsQ0FBQyxDQUFDO1FBQ0gsR0FBRyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsTUFBTSxFQUFFLEVBQUUsTUFBTSxDQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFXLEVBQUUsRUFBRTtZQUN0RSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQVEsQ0FBQztnQkFDWixhQUFhLEVBQUUsSUFBSTthQUNwQixDQUFDLENBQUM7WUFDSCxJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssR0FBRyxFQUFFO2dCQUN2QixLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFBO2dCQUN2QixVQUFVLENBQUMsR0FBRyxFQUFFO29CQUNkLEVBQUUsQ0FBQyxTQUFTLENBQUM7d0JBQ1gsR0FBRyxFQUFFLHNDQUFzQztxQkFDNUMsQ0FBQyxDQUFDO2dCQUNMLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQzthQUNWO2lCQUFNO2dCQUNMLEtBQUssQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDL0I7UUFDSCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxRQUFRO1FBQ04sRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxjQUFjO1NBQ3BCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxJQUFJO1FBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLGdDQUFnQztTQUN0QyxDQUFDLENBQUE7SUFDSixDQUFDO0lBS0QsT0FBTyxFQUFFO0lBRVQsQ0FBQztJQUtELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFLRCxNQUFNLEVBQUU7SUFFUixDQUFDO0lBS0QsUUFBUSxFQUFFO0lBRVYsQ0FBQztJQUtELGlCQUFpQixFQUFFO0lBRW5CLENBQUM7SUFLRCxhQUFhLEVBQUU7SUFFZixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgQXBpIGZyb20gJy4uLy4uL3NlcnZpY2UvYXBpLnNlcnZpY2UnO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xuaW1wb3J0IHsgSU15QXBwIH0gZnJvbSAnLi4vLi4vYXBwJztcbmNvbnN0IGFwcDogYW55ID0gZ2V0QXBwPElNeUFwcD4oKTtcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBzdWJtaXREaXNhYmxlOiBmYWxzZSxcbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cbiAgICovXG4gIG9uTG9hZDogZnVuY3Rpb24gKG9wdGlvbnM6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKG9wdGlvbnMpO1xuICB9LFxuXG4gIC8qKiB1cGRhdGUgKi9cbiAgc3VibWl0KGU6IGFueSk6IGFueSB7XG4gICAgY29uc3QgcGFyYW1zID0gZS5kZXRhaWwudmFsdWU7XG4gICAgaWYgKCF1dGlscy52YWxpZGF0ZUVtcHR5KHBhcmFtcy5hZ2UsICfor7fovpPlhaXlubTpvoQnKSB8fFxuICAgICAgIXV0aWxzLnZhbGlkYXRlRW1wdHkocGFyYW1zLmhlaWdodCwgJ+ivt+i+k+WFpeW5tOm+hCcpIHx8XG4gICAgICAhdXRpbHMudmFsaWRhdGVFbXB0eShwYXJhbXMuc2FsYXJ5LCAn6K+36L6T5YWl5pS25YWlJykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3Qgb3BlbmlkID0gYXBwLmdsb2JhbERhdGEudXNlckluZm8ub3BlbmlkO1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgc3VibWl0RGlzYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIEFwaS51cGRhdGVVc2VyKE9iamVjdC5hc3NpZ24oeyBvcGVuaWQgfSwgcGFyYW1zLCkpLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICB3eC5oaWRlTG9hZGluZygpO1xuICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgIHN1Ym1pdERpc2FibGU6IHRydWVcbiAgICAgIH0pO1xuICAgICAgaWYgKHJlc3VsdC5jb2RlID09PSAyMDApIHtcbiAgICAgICAgdXRpbHMuc2hvd01vZGFsKCfmm7TmlrDmiJDlip8nKVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB3eC5zd2l0Y2hUYWIoe1xuICAgICAgICAgICAgdXJsOiBgLi4vcmVnaXN0ZXJTdGFuZGFyZC9yZWdpc3RlclN0YW5kYXJkYCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB1dGlscy5zaG93TW9kYWwoJ+ezu+e7n+W8guW4uO+8jOivt+eojeWQjuWGjeivlScpO1xuICAgICAgfVxuICAgIH0pXG4gIH0sXG5cbiAganVtcE92ZXIoKTogdm9pZCB7XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6ICcuLi9ob21lL2hvbWUnLFxuICAgIH0pXG4gIH0sXG5cbiAgbmV4dCgpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZygnbmV4dCcpO1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiAnLi4vcmVnaXN0ZXJQaG9uZS9yZWdpc3RlclBob25lJyxcbiAgICB9KVxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxuICAgKi9cbiAgb25SZWFkeTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XG4gICAqL1xuICBvblNob3c6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdoumakOiXj1xuICAgKi9cbiAgb25IaWRlOiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cbiAgICovXG4gIG9uVW5sb2FkOiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog6aG16Z2i55u45YWz5LqL5Lu25aSE55CG5Ye95pWwLS3nm5HlkKznlKjmiLfkuIvmi4nliqjkvZxcbiAgICovXG4gIG9uUHVsbERvd25SZWZyZXNoOiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog6aG16Z2i5LiK5ouJ6Kem5bqV5LqL5Lu255qE5aSE55CG5Ye95pWwXG4gICAqL1xuICBvblJlYWNoQm90dG9tOiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcbn0pIl19