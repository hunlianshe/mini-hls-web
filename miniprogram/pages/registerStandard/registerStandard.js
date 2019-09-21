"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Api = require("../../service/api.service");
const utils = require("../../utils/utils");
const app = getApp();
Page({
    data: {
        type: '',
        ageNumber: '',
        heightNumber: '',
        salaryNumber: '',
        age: '',
        height: '',
        salary: '',
    },
    onLoad: function (options) {
        console.log(options);
    },
    jumpOver() {
        wx.navigateTo({
            url: '../home/home',
        });
    },
    next() {
        wx.navigateTo({
            url: '../home/home',
        });
    },
    getStandard(e) {
        const { type, value, number } = e.currentTarget.dataset;
        switch (type) {
            case '1':
                this.setData({
                    ageNumber: number,
                    age: value,
                });
                break;
            case '2':
                this.setData({
                    heightNumber: number,
                    height: value,
                });
                break;
            case '3':
                this.setData({
                    salaryNumber: number,
                    salary: value,
                });
                break;
            default:
                break;
        }
        console.log('type:', type);
        console.log('value:', value);
    },
    updateUser() {
        const { age, height, salary, } = this.data;
        console.log(this.data);
        if (!utils.validateEmpty(age, '请选择年龄标准') ||
            !utils.validateEmpty(height, '请选择身高标准') ||
            !utils.validateEmpty(salary, '请选择收入标准')) {
            return false;
        }
        Api.updateUser({
            openid: app.globalData.userInfo.openid,
            objectInfo: {
                age,
                height,
                salary,
            }
        }).then((result) => {
            console.log('esult.code', result.code);
            if (result.code === 200) {
                wx.navigateTo({
                    url: '../registerPhone/registerPhone',
                });
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
    onPullDownRefresh: function () {
    },
    onReachBottom: function () {
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXJTdGFuZGFyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlZ2lzdGVyU3RhbmRhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBaUQ7QUFDakQsMkNBQTJDO0FBRTNDLE1BQU0sR0FBRyxHQUFRLE1BQU0sRUFBVSxDQUFDO0FBRWxDLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLElBQUksRUFBQyxFQUFFO1FBQ1AsU0FBUyxFQUFFLEVBQUU7UUFDYixZQUFZLEVBQUUsRUFBRTtRQUNoQixZQUFZLEVBQUUsRUFBRTtRQUNoQixHQUFHLEVBQUUsRUFBRTtRQUNQLE1BQU0sRUFBRSxFQUFFO1FBQ1YsTUFBTSxFQUFFLEVBQUU7S0FDWDtJQUVELE1BQU0sRUFBRSxVQUFVLE9BQVk7UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQsUUFBUTtRQUNOLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsY0FBYztTQUNwQixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsSUFBSTtRQUNGLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsY0FBYztTQUNwQixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsV0FBVyxDQUFDLENBQU07UUFDaEIsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDeEQsUUFBUSxJQUFJLEVBQUU7WUFDWixLQUFLLEdBQUc7Z0JBQ04sSUFBSSxDQUFDLE9BQVEsQ0FBQztvQkFDWixTQUFTLEVBQUUsTUFBTTtvQkFDakIsR0FBRyxFQUFFLEtBQUs7aUJBQ1gsQ0FBQyxDQUFDO2dCQUNILE1BQU07WUFDUixLQUFLLEdBQUc7Z0JBQ04sSUFBSSxDQUFDLE9BQVEsQ0FBQztvQkFDWixZQUFZLEVBQUUsTUFBTTtvQkFDcEIsTUFBTSxFQUFFLEtBQUs7aUJBQ2QsQ0FBQyxDQUFDO2dCQUNILE1BQU07WUFDUixLQUFLLEdBQUc7Z0JBQ04sSUFBSSxDQUFDLE9BQVEsQ0FBQztvQkFDWixZQUFZLEVBQUUsTUFBTTtvQkFDcEIsTUFBTSxFQUFFLEtBQUs7aUJBQ2QsQ0FBQyxDQUFDO2dCQUNILE1BQU07WUFDUjtnQkFDRSxNQUFNO1NBQ1Q7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsVUFBVTtRQUNSLE1BQU0sRUFDSixHQUFHLEVBQ0gsTUFBTSxFQUNOLE1BQU0sR0FDUCxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDO1lBQ3RDLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDO1lBQ3ZDLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLEVBQUU7WUFDekMsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELEdBQUcsQ0FBQyxVQUFVLENBQUM7WUFDYixNQUFNLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsTUFBTTtZQUN0QyxVQUFVLEVBQUU7Z0JBQ1YsR0FBRztnQkFDSCxNQUFNO2dCQUNOLE1BQU07YUFDUDtTQUNGLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFXLEVBQUUsRUFBRTtZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDdEMsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLEdBQUcsRUFBRTtnQkFDdkIsRUFBRSxDQUFDLFVBQVUsQ0FBQztvQkFDWixHQUFHLEVBQUUsZ0NBQWdDO2lCQUN0QyxDQUFDLENBQUM7YUFDSjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELE9BQU8sRUFBRTtJQUVULENBQUM7SUFFRCxNQUFNLEVBQUU7SUFFUixDQUFDO0lBS0QsTUFBTSxFQUFFO0lBRVIsQ0FBQztJQUtELFFBQVEsRUFBRTtJQUVWLENBQUM7SUFLRCxpQkFBaUIsRUFBRTtJQUVuQixDQUFDO0lBS0QsYUFBYSxFQUFFO0lBRWYsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIEFwaSBmcm9tICcuLi8uLi9zZXJ2aWNlL2FwaS5zZXJ2aWNlJztcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJztcbmltcG9ydCB7IElNeUFwcCB9IGZyb20gJy4uLy4uL2FwcCc7XG5jb25zdCBhcHA6IGFueSA9IGdldEFwcDxJTXlBcHA+KCk7XG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgdHlwZTonJyxcbiAgICBhZ2VOdW1iZXI6ICcnLFxuICAgIGhlaWdodE51bWJlcjogJycsXG4gICAgc2FsYXJ5TnVtYmVyOiAnJyxcbiAgICBhZ2U6ICcnLFxuICAgIGhlaWdodDogJycsXG4gICAgc2FsYXJ5OiAnJyxcbiAgfSxcblxuICBvbkxvYWQ6IGZ1bmN0aW9uIChvcHRpb25zOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZyhvcHRpb25zKTtcbiAgfSxcblxuICBqdW1wT3ZlcigpOiB2b2lkIHtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogJy4uL2hvbWUvaG9tZScsXG4gICAgfSlcbiAgfSxcblxuICBuZXh0KCk6IHZvaWQge1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiAnLi4vaG9tZS9ob21lJyxcbiAgICB9KVxuICB9LFxuXG4gIGdldFN0YW5kYXJkKGU6IGFueSkge1xuICAgIGNvbnN0IHsgdHlwZSwgdmFsdWUsIG51bWJlciB9ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQ7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICcxJzpcbiAgICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgICAgYWdlTnVtYmVyOiBudW1iZXIsXG4gICAgICAgICAgYWdlOiB2YWx1ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnMic6XG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgIGhlaWdodE51bWJlcjogbnVtYmVyLFxuICAgICAgICAgIGhlaWdodDogdmFsdWUsXG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJzMnOlxuICAgICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgICBzYWxhcnlOdW1iZXI6IG51bWJlcixcbiAgICAgICAgICBzYWxhcnk6IHZhbHVlLFxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ3R5cGU6JywgdHlwZSk7XG4gICAgY29uc29sZS5sb2coJ3ZhbHVlOicsIHZhbHVlKTtcbiAgfSxcblxuICB1cGRhdGVVc2VyKCk6IGFueSB7XG4gICAgY29uc3Qge1xuICAgICAgYWdlLFxuICAgICAgaGVpZ2h0LFxuICAgICAgc2FsYXJ5LFxuICAgIH0gPSB0aGlzLmRhdGE7XG4gICAgY29uc29sZS5sb2codGhpcy5kYXRhKTtcbiAgICBpZiAoIXV0aWxzLnZhbGlkYXRlRW1wdHkoYWdlLCAn6K+36YCJ5oup5bm06b6E5qCH5YeGJykgfHxcbiAgICAgICF1dGlscy52YWxpZGF0ZUVtcHR5KGhlaWdodCwgJ+ivt+mAieaLqei6q+mrmOagh+WHhicpIHx8XG4gICAgICAhdXRpbHMudmFsaWRhdGVFbXB0eShzYWxhcnksICfor7fpgInmi6nmlLblhaXmoIflh4YnKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBBcGkudXBkYXRlVXNlcih7XG4gICAgICBvcGVuaWQ6IGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvLm9wZW5pZCxcbiAgICAgIG9iamVjdEluZm86IHsgLy8g5oup5YG25qCH5YeGXG4gICAgICAgIGFnZSxcbiAgICAgICAgaGVpZ2h0LFxuICAgICAgICBzYWxhcnksXG4gICAgICB9XG4gICAgfSkudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdlc3VsdC5jb2RlJywgcmVzdWx0LmNvZGUpXG4gICAgICBpZiAocmVzdWx0LmNvZGUgPT09IDIwMCkge1xuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICcuLi9yZWdpc3RlclBob25lL3JlZ2lzdGVyUGhvbmUnLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICBvblJlYWR5OiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICBvblNob3c6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdoumakOiXj1xuICAgKi9cbiAgb25IaWRlOiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cbiAgICovXG4gIG9uVW5sb2FkOiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog6aG16Z2i55u45YWz5LqL5Lu25aSE55CG5Ye95pWwLS3nm5HlkKznlKjmiLfkuIvmi4nliqjkvZxcbiAgICovXG4gIG9uUHVsbERvd25SZWZyZXNoOiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog6aG16Z2i5LiK5ouJ6Kem5bqV5LqL5Lu255qE5aSE55CG5Ye95pWwXG4gICAqL1xuICBvblJlYWNoQm90dG9tOiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcbn0pIl19