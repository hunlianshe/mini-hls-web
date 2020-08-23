"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Api = require("../../service/api.service");
const app = getApp();
Page({
    data: {
        userInfo: { constellation: '' },
        psyTest: [],
        currShopList: [],
        dataAlready: false,
        currentCity: '',
        selectValue: '',
        currentQrcode: '',
        currentPhone: '',
        phone: '',
        popHidden: true,
        pageLoaded: false,
        popWechat: false,
        currentPage: 1,
        pageSize: 10,
        totalCount: 0,
        pullDown: false,
        pullUp: false,
        horoscopeData: {},
    },
    onLoad() {
        let _this = this;
        wx.getStorage({
            key: 'user',
            success: function (res) {
                _this.setData({
                    userInfo: res.data,
                });
                _this.getUserInfo();
                _this.getPsyList();
            },
        });
    },
    goXzys() {
        wx.navigateTo({
            url: `../xzys/xzys`,
        });
    },
    goXlcsList() {
        wx.navigateTo({
            url: `../xlcsList/xlcsList`,
        });
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
    goMatch() {
        wx.navigateTo({
            url: `../matcheXz/matcheXz`,
        });
    },
    getPsyList() {
        Api.getPsyList().then((result) => {
            this.setData({
                psyTest: result.data,
            });
        });
    },
    getHoroscopet(e) {
        const consName = this.data.userInfo.constellation ? this.data.userInfo.constellation : '白羊座';
        const { type } = e.currentTarget.dataset;
        wx.navigateTo({
            url: '../realXzysDetail/realXzysDetail?consName=' + consName + '&type=' + type
        });
    },
    getUserInfo() {
        const { openid } = this.data.userInfo;
        Api.getUserInfo(openid || '').then((result) => {
            if (result) {
                const userInfo = result.data;
                app.globalData.userInfo = result.data;
                console.log('Object.assign({openid}, result.data)', Object.assign({ openid }, result.data));
                wx.setStorage({
                    key: 'userInfo',
                    data: Object.assign({ openid }, result.data),
                });
                this.setData({
                    userInfo,
                    pageLoaded: true,
                });
            }
        });
    },
    topInfo() {
        wx.navigateTo({
            url: '../bar/index'
        });
    },
    onReady: function () {
    },
    onShow: function () {
        // if (this.data.pageLoaded === true) {
        //     this.getUserInfo();
        // }
        const _this = this;
        wx.getStorage({
            key: 'user',
            success: function (res) {
                _this.setData({
                    userInfo: res.data,
                });
                _this.getUserInfo();
                _this.getPsyList();
            },
        });
        _this.getPsyList();
    },
    onHide: function () {
    },
    onUnload: function () {
    },
    onPullDownRefresh: function () {
        this.setData({
            pullDown: true,
            pullUp: false
        });
        wx.stopPullDownRefresh();
    },
    onReachBottom: function () {
        this.setData({
            pullDown: false,
            pullUp: true
        });
    },
    onShareAppMessage: function (options) {
        console.log('onShareAppMessage options', options);
        return {};
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBaUQ7QUFFakQsTUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFVLENBQUM7QUFLN0IsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFLEVBQUUsYUFBYSxFQUFFLEVBQUUsRUFBVTtRQUN2QyxPQUFPLEVBQUUsRUFBRTtRQUNYLFlBQVksRUFBRSxFQUFFO1FBQ2hCLFdBQVcsRUFBRSxLQUFLO1FBQ2xCLFdBQVcsRUFBRSxFQUFFO1FBQ2YsV0FBVyxFQUFFLEVBQUU7UUFDZixhQUFhLEVBQUUsRUFBRTtRQUNqQixZQUFZLEVBQUUsRUFBRTtRQUNoQixLQUFLLEVBQUUsRUFBRTtRQUNULFNBQVMsRUFBRSxJQUFJO1FBQ2YsVUFBVSxFQUFFLEtBQUs7UUFDakIsU0FBUyxFQUFFLEtBQUs7UUFDaEIsV0FBVyxFQUFFLENBQUM7UUFDZCxRQUFRLEVBQUUsRUFBRTtRQUNaLFVBQVUsRUFBRSxDQUFDO1FBQ2IsUUFBUSxFQUFFLEtBQUs7UUFDZixNQUFNLEVBQUUsS0FBSztRQUNiLGFBQWEsRUFBRSxFQUFlO0tBQy9CO0lBRUQsTUFBTTtRQUNKLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztRQUNqQixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLE1BQU07WUFDWCxPQUFPLEVBQUUsVUFBUyxHQUFHO2dCQUNuQixLQUFLLENBQUMsT0FBUSxDQUFDO29CQUNiLFFBQVEsRUFBRSxHQUFHLENBQUMsSUFBSTtpQkFDbkIsQ0FBQyxDQUFDO2dCQUNILEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDcEIsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3JCLENBQUM7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBSUQsTUFBTTtRQUNKLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUs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QVcsRUFBRSxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQztJQUtELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFLRCxRQUFRLEVBQUU7SUFFVixDQUFDO0lBS0QsaUJBQWlCLEVBQUU7UUFDakIsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLFFBQVEsRUFBRSxJQUFJO1lBQ2QsTUFBTSxFQUFFLEtBQUs7U0FDZCxDQUFDLENBQUM7UUFDSCxFQUFFLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBS0QsYUFBYSxFQUFFO1FBQ2IsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLFFBQVEsRUFBRSxLQUFLO1lBQ2YsTUFBTSxFQUFFLElBQUk7U0FDYixDQUFDLENBQUM7SUFDTCxDQUFDO0lBS0QsaUJBQWlCLEVBQUUsVUFBVSxPQUFpRDtRQUM1RSxPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2xELE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIEFwaSBmcm9tICcuLi8uLi9zZXJ2aWNlL2FwaS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSU15QXBwIH0gZnJvbSAnLi4vLi4vYXBwJztcclxuY29uc3QgYXBwID0gZ2V0QXBwPElNeUFwcD4oKTtcclxuXHJcbmltcG9ydCBIb3Jvc2NvcGUgZnJvbSAnLi4vLi4vaW50ZXJmYWNlL2hvcm9zY29wZSc7XHJcbmltcG9ydCBVc2VyIGZyb20gJy4uLy4uL2ludGVyZmFjZS91c2VyJztcclxuXHJcblBhZ2Uoe1xyXG4gIGRhdGE6IHtcclxuICAgIHVzZXJJbmZvOiB7IGNvbnN0ZWxsYXRpb246ICcnIH0gYXMgVXNlcixcclxuICAgIHBzeVRlc3Q6IFtdLFxyXG4gICAgY3VyclNob3BMaXN0OiBbXSxcclxuICAgIGRhdGFBbHJlYWR5OiBmYWxzZSxcclxuICAgIGN1cnJlbnRDaXR5OiAnJyxcclxuICAgIHNlbGVjdFZhbHVlOiAnJyxcclxuICAgIGN1cnJlbnRRcmNvZGU6ICcnLFxyXG4gICAgY3VycmVudFBob25lOiAnJyxcclxuICAgIHBob25lOiAnJyxcclxuICAgIHBvcEhpZGRlbjogdHJ1ZSxcclxuICAgIHBhZ2VMb2FkZWQ6IGZhbHNlLFxyXG4gICAgcG9wV2VjaGF0OiBmYWxzZSxcclxuICAgIGN1cnJlbnRQYWdlOiAxLFxyXG4gICAgcGFnZVNpemU6IDEwLFxyXG4gICAgdG90YWxDb3VudDogMCxcclxuICAgIHB1bGxEb3duOiBmYWxzZSxcclxuICAgIHB1bGxVcDogZmFsc2UsXHJcbiAgICBob3Jvc2NvcGVEYXRhOiB7fSBhcyBIb3Jvc2NvcGUsXHJcbiAgfSxcclxuXHJcbiAgb25Mb2FkICgpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAga2V5OiAndXNlcicsXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgIF90aGlzLnNldERhdGEhKHtcclxuICAgICAgICAgIHVzZXJJbmZvOiByZXMuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBfdGhpcy5nZXRVc2VySW5mbygpO1xyXG4gICAgICAgIF90aGlzLmdldFBzeUxpc3QoKTtcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgXHJcbiAgXHJcbiAgLyoqIOaYn+W6p+i/kOWKvyAqL1xyXG4gIGdvWHp5cygpIHtcclxuICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICB1cmw6IGAuLi94enlzL3h6eXNgLFxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICAvKiog5b+D55CG5rWL6K+V5YiX6KGoICovXHJcbiAgZ29YbGNzTGlzdCgpIHtcclxuICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICB1cmw6IGAuLi94bGNzTGlzdC94bGNzTGlzdGAsXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgXHJcbiAgLyoqIOW/g+eQhua1i+ivlSAqL1xyXG4gIGRvVGVzdChlOiBhbnkpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgaWQsXHJcbiAgICAgIHR5cGUsXHJcbiAgICB9ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQ7XHJcbiAgICBpZiAodHlwZSA9PT0gJzMnKSB7XHJcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgIHVybDogYC4uL3FzcXkvcXNxeT9pZD0ke2lkfWAsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgdXJsOiBgLi4veGxjc0RldGFpbC94bGNzRGV0YWlsP2lkPSR7aWR9YCxcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvKiog5pif5bqn5Yy56YWNICovXHJcbiAgZ29NYXRjaCgpIHtcclxuICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICB1cmw6IGAuLi9tYXRjaGVYei9tYXRjaGVYemAsXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIC8qKiDojrflj5blv4PnkIbmtYvor5UgKi9cclxuICBnZXRQc3lMaXN0KCkge1xyXG4gICAgQXBpLmdldFBzeUxpc3QoKS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xyXG4gICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICBwc3lUZXN0OiByZXN1bHQuZGF0YSxcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgLyoqIOi/kOWKv+WIhuaekCAgKi9cclxuICBnZXRIb3Jvc2NvcGV0KGU6IGFueSkge1xyXG4gICAgY29uc3QgY29uc05hbWUgPSB0aGlzLmRhdGEudXNlckluZm8uY29uc3RlbGxhdGlvbiA/IHRoaXMuZGF0YS51c2VySW5mby5jb25zdGVsbGF0aW9uIDogJ+eZvee+iuW6pyc7XHJcbiAgICBjb25zdCB7IHR5cGUgfSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0O1xyXG4gICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgIHVybDogJy4uL3JlYWxYenlzRGV0YWlsL3JlYWxYenlzRGV0YWlsP2NvbnNOYW1lPScrY29uc05hbWUrJyZ0eXBlPScrdHlwZVxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICAvKiog6I635Y+W55So5oi36K+m57uG5L+h5oGvICovXHJcbiAgZ2V0VXNlckluZm8oKSB7XHJcbiAgICBjb25zdCB7IG9wZW5pZCB9ID0gdGhpcy5kYXRhLnVzZXJJbmZvO1xyXG4gICAgQXBpLmdldFVzZXJJbmZvKG9wZW5pZCB8fCAnJykudGhlbigocmVzdWx0OiBhbnkpID0+IHtcclxuICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgIGNvbnN0IHVzZXJJbmZvID0gcmVzdWx0LmRhdGE7XHJcbiAgICAgICAgYXBwLmdsb2JhbERhdGEudXNlckluZm8gPSByZXN1bHQuZGF0YTtcclxuICAgICAgICBjb25zb2xlLmxvZygnT2JqZWN0LmFzc2lnbih7b3BlbmlkfSwgcmVzdWx0LmRhdGEpJywgT2JqZWN0LmFzc2lnbih7b3BlbmlkfSwgcmVzdWx0LmRhdGEpKTtcclxuICAgICAgICB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAgICAgIGtleTogJ3VzZXJJbmZvJyxcclxuICAgICAgICAgIGRhdGE6IE9iamVjdC5hc3NpZ24oe29wZW5pZH0sIHJlc3VsdC5kYXRhKSxcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICAgIHVzZXJJbmZvLFxyXG4gICAgICAgICAgcGFnZUxvYWRlZDogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgdG9wSW5mbygpIHtcclxuICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICB1cmw6ICcuLi9iYXIvaW5kZXgnXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIG9uUmVhZHk6IGZ1bmN0aW9uICgpIHtcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxyXG4gICAqL1xyXG4gIG9uU2hvdzogZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHRoaXMuZGF0YS5wYWdlTG9hZGVkID09PSB0cnVlKSB7XHJcbiAgICAgIHRoaXMuZ2V0VXNlckluZm8oKTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdoumakOiXj1xyXG4gICAqL1xyXG4gIG9uSGlkZTogZnVuY3Rpb24gKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxyXG4gICAqL1xyXG4gIG9uVW5sb2FkOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOS4i+aLieWIt+aWsFxyXG4gICAqL1xyXG4gIG9uUHVsbERvd25SZWZyZXNoOiBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgcHVsbERvd246IHRydWUsXHJcbiAgICAgIHB1bGxVcDogZmFsc2VcclxuICAgIH0pO1xyXG4gICAgd3guc3RvcFB1bGxEb3duUmVmcmVzaCgpO1xyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxyXG4gICAqL1xyXG4gIG9uUmVhY2hCb3R0b206IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICBwdWxsRG93bjogZmFsc2UsXHJcbiAgICAgIHB1bGxVcDogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55So5oi354K55Ye75Y+z5LiK6KeS5YiG5LqrXHJcbiAgICovXHJcbiAgb25TaGFyZUFwcE1lc3NhZ2U6IGZ1bmN0aW9uIChvcHRpb25zPzogUGFnZS5JU2hhcmVBcHBNZXNzYWdlT3B0aW9uIHwgdW5kZWZpbmVkKTogUGFnZS5JQ3VzdG9tU2hhcmVDb250ZW50IHtcclxuICAgIGNvbnNvbGUubG9nKCdvblNoYXJlQXBwTWVzc2FnZSBvcHRpb25zJywgb3B0aW9ucyk7XHJcbiAgICByZXR1cm4ge307XHJcbiAgfVxyXG59KSJdfQ==