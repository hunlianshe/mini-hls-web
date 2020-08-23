"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Api = require("../../service/api.service");
const utils = require("../../utils/utils");
const app = getApp();
let ageObject = {
    '25岁以下': '1',
    '25~30岁': '2',
    '30~35岁': '3',
    '35~45岁': '4',
    '45~55岁': '5',
    '55岁以上': '6'
};
let salaryObject = {
    '5千以下': '1',
    '5千～1万': '2',
    '1万～2万': '3',
    '2万～5万': '4',
    '5万以上': '5',
    '55岁以上': '6'
};
let heightObject = {
    '160以下': '1',
    '160～165': '2',
    '165～170': '3',
    '170～175': '4',
    '175～180': '5',
    '"180以上': '6'
};
Page({
    data: {
        type: '',
        ageNumber: '',
        heightNumber: '',
        salaryNumber: '',
        age: '',
        height: '',
        salary: '',
        title: '开启缘分'
    },
    onLoad: function (options) {
        if (options.type === 'usercenter') {
            console.log('app', app.globalData);
            Api.getUserInfo(app.globalData.userInfo.openid).then((result) => {
                if (result) {
                    this.setData({
                        title: "更新"
                    });
                    const userInfo = result.data;
                    console.log(' ageObject[userInfo.objectInfo.age]', ageObject[userInfo.objectInfo.age]);
                    if (userInfo.objectInfo && userInfo.objectInfo.age) {
                        this.setData({
                            age: userInfo.objectInfo.age,
                            ageNumber: ageObject[userInfo.objectInfo.age]
                        });
                    }
                    if (userInfo.objectInfo && userInfo.objectInfo.salary) {
                        this.setData({
                            salary: userInfo.objectInfo.salary,
                            salaryNumber: salaryObject[userInfo.objectInfo.salary]
                        });
                    }
                    if (userInfo.objectInfo && userInfo.objectInfo.height) {
                        this.setData({
                            height: userInfo.objectInfo.height,
                            heightNumber: heightObject[userInfo.objectInfo.height]
                        });
                    }
                }
            });
        }
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
        const { age, height, salary, title } = this.data;
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
            if (result.code === 200 && title !== '更新') {
                wx.navigateTo({
                    url: '../registerPhone/registerPhone',
                });
            }
            else {
                utils.showModal('更新成功');
                wx.switchTab({
                    url: `../myHome/myHome`,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXJTdGFuZGFyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlZ2lzdGVyU3RhbmRhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBaUQ7QUFDakQsMkNBQTJDO0FBRTNDLE1BQU0sR0FBRyxHQUFRLE1BQU0sRUFBVSxDQUFDO0FBRWxDLElBQUksU0FBUyxHQUFPO0lBQ2xCLE9BQU8sRUFBQyxHQUFHO0lBQ1gsUUFBUSxFQUFDLEdBQUc7SUFDWixRQUFRLEVBQUMsR0FBRztJQUNaLFFBQVEsRUFBQyxHQUFHO0lBQ1osUUFBUSxFQUFDLEdBQUc7SUFDWixPQUFPLEVBQUMsR0FBRztDQUNaLENBQUE7QUFDRCxJQUFJLFlBQVksR0FBUTtJQUN0QixNQUFNLEVBQUUsR0FBRztJQUNYLE9BQU8sRUFBRSxHQUFHO0lBQ1osT0FBTyxFQUFFLEdBQUc7SUFDWixPQUFPLEVBQUUsR0FBRztJQUNaLE1BQU0sRUFBRSxHQUFHO0lBQ1gsT0FBTyxFQUFFLEdBQUc7Q0FDYixDQUFBO0FBR0QsSUFBSSxZQUFZLEdBQVE7SUFDdEIsT0FBTyxFQUFFLEdBQUc7SUFDWixTQUFTLEVBQUUsR0FBRztJQUNkLFNBQVMsRUFBRSxHQUFHO0lBQ2QsU0FBUyxFQUFFLEdBQUc7SUFDZCxTQUFTLEVBQUUsR0FBRztJQUNkLFFBQVEsRUFBRSxHQUFHO0NBQ2QsQ0FBQTtBQUVELElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLElBQUksRUFBQyxFQUFFO1FBQ1AsU0FBUyxFQUFFLEVBQUU7UUFDYixZQUFZLEVBQUUsRUFBRTtRQUNoQixZQUFZLEVBQUUsRUFBRTtRQUNoQixHQUFHLEVBQUUsRUFBRTtRQUNQLE1BQU0sRUFBRSxFQUFFO1FBQ1YsTUFBTSxFQUFFLEVBQUU7UUFDVixLQUFLLEVBQUMsTUFBTTtLQUNiO0lBRUQsTUFBTSxFQUFFLFVBQVUsT0FBWTtRQUM1QixJQUFHLE9BQU8sQ0FBQyxJQUFJLEtBQUssWUFBWSxFQUFDO1lBRS9C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QUFDO0lBRUQsTUFBTSxFQUFFO0lBRVIsQ0FBQztJQUtELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFLRCxRQUFRLEVBQUU7SUFFVixDQUFDO0lBS0QsaUJBQWlCLEVBQUU7SUFFbkIsQ0FBQztJQUtELGFBQWEsRUFBRTtJQUVmLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBBcGkgZnJvbSAnLi4vLi4vc2VydmljZS9hcGkuc2VydmljZSc7XHJcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJztcclxuaW1wb3J0IHsgSU15QXBwIH0gZnJvbSAnLi4vLi4vYXBwJztcclxuY29uc3QgYXBwOiBhbnkgPSBnZXRBcHA8SU15QXBwPigpO1xyXG5cclxubGV0IGFnZU9iamVjdDphbnkgPSB7XHJcbiAgJzI15bKB5Lul5LiLJzonMScsXHJcbiAgJzI1fjMw5bKBJzonMicsXHJcbiAgJzMwfjM15bKBJzonMycsXHJcbiAgJzM1fjQ15bKBJzonNCcsXHJcbiAgJzQ1fjU15bKBJzonNScsXHJcbiAgJzU15bKB5Lul5LiKJzonNidcclxufVxyXG5sZXQgc2FsYXJ5T2JqZWN0OiBhbnkgPSB7XHJcbiAgJzXljYPku6XkuIsnOiAnMScsXHJcbiAgJzXljYPvvZ4x5LiHJzogJzInLFxyXG4gICcx5LiH772eMuS4hyc6ICczJyxcclxuICAnMuS4h++9njXkuIcnOiAnNCcsXHJcbiAgJzXkuIfku6XkuIonOiAnNScsXHJcbiAgJzU15bKB5Lul5LiKJzogJzYnXHJcbn1cclxuXHJcblxyXG5sZXQgaGVpZ2h0T2JqZWN0OiBhbnkgPSB7XHJcbiAgJzE2MOS7peS4iyc6ICcxJyxcclxuICAnMTYw772eMTY1JzogJzInLFxyXG4gICcxNjXvvZ4xNzAnOiAnMycsXHJcbiAgJzE3MO+9njE3NSc6ICc0JyxcclxuICAnMTc1772eMTgwJzogJzUnLFxyXG4gICdcIjE4MOS7peS4iic6ICc2J1xyXG59XHJcblxyXG5QYWdlKHtcclxuICBkYXRhOiB7XHJcbiAgICB0eXBlOicnLFxyXG4gICAgYWdlTnVtYmVyOiAnJyxcclxuICAgIGhlaWdodE51bWJlcjogJycsXHJcbiAgICBzYWxhcnlOdW1iZXI6ICcnLFxyXG4gICAgYWdlOiAnJyxcclxuICAgIGhlaWdodDogJycsXHJcbiAgICBzYWxhcnk6ICcnLFxyXG4gICAgdGl0bGU6J+W8gOWQr+e8mOWIhidcclxuICB9LFxyXG5cclxuICBvbkxvYWQ6IGZ1bmN0aW9uIChvcHRpb25zOiBhbnkpIHtcclxuICAgIGlmKG9wdGlvbnMudHlwZSA9PT0gJ3VzZXJjZW50ZXInKXtcclxuICAgICAgLyoqIOiOt+WPlueUqOaIt+S/oeaBryAqL1xyXG4gICAgICBjb25zb2xlLmxvZygnYXBwJyxhcHAuZ2xvYmFsRGF0YSlcclxuICAgICAgQXBpLmdldFVzZXJJbmZvKGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvLm9wZW5pZCkudGhlbigocmVzdWx0OiBhbnkpID0+IHtcclxuICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICAgICAgdGl0bGU6IFwi5pu05pawXCJcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgY29uc3QgdXNlckluZm8gPSByZXN1bHQuZGF0YTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCcgYWdlT2JqZWN0W3VzZXJJbmZvLm9iamVjdEluZm8uYWdlXScsIGFnZU9iamVjdFt1c2VySW5mby5vYmplY3RJbmZvLmFnZV0pXHJcbiAgICAgICAgICBpZiAodXNlckluZm8ub2JqZWN0SW5mbyAmJiB1c2VySW5mby5vYmplY3RJbmZvLmFnZSApe1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICAgICAgICBhZ2U6IHVzZXJJbmZvLm9iamVjdEluZm8uYWdlLFxyXG4gICAgICAgICAgICAgIGFnZU51bWJlcjogYWdlT2JqZWN0W3VzZXJJbmZvLm9iamVjdEluZm8uYWdlXVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICh1c2VySW5mby5vYmplY3RJbmZvICYmIHVzZXJJbmZvLm9iamVjdEluZm8uc2FsYXJ5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgICAgICAgIHNhbGFyeTogdXNlckluZm8ub2JqZWN0SW5mby5zYWxhcnksXHJcbiAgICAgICAgICAgICAgc2FsYXJ5TnVtYmVyOiBzYWxhcnlPYmplY3RbdXNlckluZm8ub2JqZWN0SW5mby5zYWxhcnldXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHVzZXJJbmZvLm9iamVjdEluZm8gJiYgdXNlckluZm8ub2JqZWN0SW5mby5oZWlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiB1c2VySW5mby5vYmplY3RJbmZvLmhlaWdodCxcclxuICAgICAgICAgICAgICBoZWlnaHROdW1iZXI6IGhlaWdodE9iamVjdFt1c2VySW5mby5vYmplY3RJbmZvLmhlaWdodF1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2cob3B0aW9ucyk7XHJcbiAgfSxcclxuXHJcbiAganVtcE92ZXIoKTogdm9pZCB7XHJcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgdXJsOiAnLi4vaG9tZS9ob21lJyxcclxuICAgIH0pXHJcbiAgfSxcclxuIFxyXG5cclxuICBuZXh0KCk6IHZvaWQge1xyXG4gICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgIHVybDogJy4uL2hvbWUvaG9tZScsXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIGdldFN0YW5kYXJkKGU6IGFueSkge1xyXG4gICAgY29uc3QgeyB0eXBlLCB2YWx1ZSwgbnVtYmVyIH0gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldDtcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICBjYXNlICcxJzpcclxuICAgICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICAgIGFnZU51bWJlcjogbnVtYmVyLFxyXG4gICAgICAgICAgYWdlOiB2YWx1ZSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnMic6XHJcbiAgICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgICBoZWlnaHROdW1iZXI6IG51bWJlcixcclxuICAgICAgICAgIGhlaWdodDogdmFsdWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJzMnOlxyXG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgICAgc2FsYXJ5TnVtYmVyOiBudW1iZXIsXHJcbiAgICAgICAgICBzYWxhcnk6IHZhbHVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coJ3R5cGU6JywgdHlwZSk7XHJcbiAgICBjb25zb2xlLmxvZygndmFsdWU6JywgdmFsdWUpO1xyXG4gIH0sXHJcblxyXG4gIHVwZGF0ZVVzZXIoKTogYW55IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgYWdlLFxyXG4gICAgICBoZWlnaHQsXHJcbiAgICAgIHNhbGFyeSxcclxuICAgICAgdGl0bGVcclxuICAgIH0gPSB0aGlzLmRhdGE7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGEpO1xyXG4gICAgaWYgKCF1dGlscy52YWxpZGF0ZUVtcHR5KGFnZSwgJ+ivt+mAieaLqeW5tOm+hOagh+WHhicpIHx8XHJcbiAgICAgICF1dGlscy52YWxpZGF0ZUVtcHR5KGhlaWdodCwgJ+ivt+mAieaLqei6q+mrmOagh+WHhicpIHx8XHJcbiAgICAgICF1dGlscy52YWxpZGF0ZUVtcHR5KHNhbGFyeSwgJ+ivt+mAieaLqeaUtuWFpeagh+WHhicpKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIEFwaS51cGRhdGVVc2VyKHtcclxuICAgICAgb3BlbmlkOiBhcHAuZ2xvYmFsRGF0YS51c2VySW5mby5vcGVuaWQsXHJcbiAgICAgIG9iamVjdEluZm86IHsgLy8g5oup5YG25qCH5YeGXHJcbiAgICAgICAgYWdlLFxyXG4gICAgICAgIGhlaWdodCxcclxuICAgICAgICBzYWxhcnksXHJcbiAgICAgIH1cclxuICAgIH0pLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdlc3VsdC5jb2RlJywgcmVzdWx0LmNvZGUpXHJcbiAgICAgIGlmIChyZXN1bHQuY29kZSA9PT0gMjAwICYmIHRpdGxlICE9PSfmm7TmlrAnKSB7XHJcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICB1cmw6ICcuLi9yZWdpc3RlclBob25lL3JlZ2lzdGVyUGhvbmUnLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICAgIHV0aWxzLnNob3dNb2RhbCgn5pu05paw5oiQ5YqfJylcclxuICAgICAgICAgICB3eC5zd2l0Y2hUYWIoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGAuLi9teUhvbWUvbXlIb21lYCxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgb25SZWFkeTogZnVuY3Rpb24gKCkge1xyXG5cclxuICB9LFxyXG5cclxuICBvblNob3c6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cclxuICAgKi9cclxuICBvbkhpZGU6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cclxuICAgKi9cclxuICBvblVubG9hZDogZnVuY3Rpb24gKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxyXG4gICAqL1xyXG4gIG9uUHVsbERvd25SZWZyZXNoOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxyXG4gICAqL1xyXG4gIG9uUmVhY2hCb3R0b206IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgfSxcclxufSkiXX0=