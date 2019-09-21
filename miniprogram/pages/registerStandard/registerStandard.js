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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXJTdGFuZGFyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlZ2lzdGVyU3RhbmRhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBaUQ7QUFDakQsMkNBQTJDO0FBRTNDLE1BQU0sR0FBRyxHQUFRLE1BQU0sRUFBVSxDQUFDO0FBRWxDLElBQUksU0FBUyxHQUFPO0lBQ2xCLE9BQU8sRUFBQyxHQUFHO0lBQ1gsUUFBUSxFQUFDLEdBQUc7SUFDWixRQUFRLEVBQUMsR0FBRztJQUNaLFFBQVEsRUFBQyxHQUFHO0lBQ1osUUFBUSxFQUFDLEdBQUc7SUFDWixPQUFPLEVBQUMsR0FBRztDQUNaLENBQUE7QUFDRCxJQUFJLFlBQVksR0FBUTtJQUN0QixNQUFNLEVBQUUsR0FBRztJQUNYLE9BQU8sRUFBRSxHQUFHO0lBQ1osT0FBTyxFQUFFLEdBQUc7SUFDWixPQUFPLEVBQUUsR0FBRztJQUNaLE1BQU0sRUFBRSxHQUFHO0lBQ1gsT0FBTyxFQUFFLEdBQUc7Q0FDYixDQUFBO0FBR0QsSUFBSSxZQUFZLEdBQVE7SUFDdEIsT0FBTyxFQUFFLEdBQUc7SUFDWixTQUFTLEVBQUUsR0FBRztJQUNkLFNBQVMsRUFBRSxHQUFHO0lBQ2QsU0FBUyxFQUFFLEdBQUc7SUFDZCxTQUFTLEVBQUUsR0FBRztJQUNkLFFBQVEsRUFBRSxHQUFHO0NBQ2QsQ0FBQTtBQUVELElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLElBQUksRUFBQyxFQUFFO1FBQ1AsU0FBUyxFQUFFLEVBQUU7UUFDYixZQUFZLEVBQUUsRUFBRTtRQUNoQixZQUFZLEVBQUUsRUFBRTtRQUNoQixHQUFHLEVBQUUsRUFBRTtRQUNQLE1BQU0sRUFBRSxFQUFFO1FBQ1YsTUFBTSxFQUFFLEVBQUU7UUFDVixLQUFLLEVBQUMsTUFBTTtLQUNiO0lBRUQsTUFBTSxFQUFFLFVBQVUsT0FBWTtRQUM1QixJQUFHLE9BQU8sQ0FBQyxJQUFJLEtBQUssWUFBWSxFQUFDO1lBRS9C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QUFDO0lBRUQsTUFBTSxFQUFFO0lBRVIsQ0FBQztJQUtELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFLRCxRQUFRLEVBQUU7SUFFVixDQUFDO0lBS0QsaUJBQWlCLEVBQUU7SUFFbkIsQ0FBQztJQUtELGFBQWEsRUFBRTtJQUVmLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBBcGkgZnJvbSAnLi4vLi4vc2VydmljZS9hcGkuc2VydmljZSc7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XG5pbXBvcnQgeyBJTXlBcHAgfSBmcm9tICcuLi8uLi9hcHAnO1xuY29uc3QgYXBwOiBhbnkgPSBnZXRBcHA8SU15QXBwPigpO1xuXG5sZXQgYWdlT2JqZWN0OmFueSA9IHtcbiAgJzI15bKB5Lul5LiLJzonMScsXG4gICcyNX4zMOWygSc6JzInLFxuICAnMzB+MzXlsoEnOiczJyxcbiAgJzM1fjQ15bKBJzonNCcsXG4gICc0NX41NeWygSc6JzUnLFxuICAnNTXlsoHku6XkuIonOic2J1xufVxubGV0IHNhbGFyeU9iamVjdDogYW55ID0ge1xuICAnNeWNg+S7peS4iyc6ICcxJyxcbiAgJzXljYPvvZ4x5LiHJzogJzInLFxuICAnMeS4h++9njLkuIcnOiAnMycsXG4gICcy5LiH772eNeS4hyc6ICc0JyxcbiAgJzXkuIfku6XkuIonOiAnNScsXG4gICc1NeWygeS7peS4iic6ICc2J1xufVxuXG5cbmxldCBoZWlnaHRPYmplY3Q6IGFueSA9IHtcbiAgJzE2MOS7peS4iyc6ICcxJyxcbiAgJzE2MO+9njE2NSc6ICcyJyxcbiAgJzE2Ne+9njE3MCc6ICczJyxcbiAgJzE3MO+9njE3NSc6ICc0JyxcbiAgJzE3Ne+9njE4MCc6ICc1JyxcbiAgJ1wiMTgw5Lul5LiKJzogJzYnXG59XG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgdHlwZTonJyxcbiAgICBhZ2VOdW1iZXI6ICcnLFxuICAgIGhlaWdodE51bWJlcjogJycsXG4gICAgc2FsYXJ5TnVtYmVyOiAnJyxcbiAgICBhZ2U6ICcnLFxuICAgIGhlaWdodDogJycsXG4gICAgc2FsYXJ5OiAnJyxcbiAgICB0aXRsZTon5byA5ZCv57yY5YiGJ1xuICB9LFxuXG4gIG9uTG9hZDogZnVuY3Rpb24gKG9wdGlvbnM6IGFueSkge1xuICAgIGlmKG9wdGlvbnMudHlwZSA9PT0gJ3VzZXJjZW50ZXInKXtcbiAgICAgIC8qKiDojrflj5bnlKjmiLfkv6Hmga8gKi9cbiAgICAgIGNvbnNvbGUubG9nKCdhcHAnLGFwcC5nbG9iYWxEYXRhKVxuICAgICAgQXBpLmdldFVzZXJJbmZvKGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvLm9wZW5pZCkudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgICAgdGl0bGU6IFwi5pu05pawXCJcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjb25zdCB1c2VySW5mbyA9IHJlc3VsdC5kYXRhO1xuICAgICAgICAgIGNvbnNvbGUubG9nKCcgYWdlT2JqZWN0W3VzZXJJbmZvLm9iamVjdEluZm8uYWdlXScsIGFnZU9iamVjdFt1c2VySW5mby5vYmplY3RJbmZvLmFnZV0pXG4gICAgICAgICAgaWYgKHVzZXJJbmZvLm9iamVjdEluZm8gJiYgdXNlckluZm8ub2JqZWN0SW5mby5hZ2UgKXtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgICAgICBhZ2U6IHVzZXJJbmZvLm9iamVjdEluZm8uYWdlLFxuICAgICAgICAgICAgICBhZ2VOdW1iZXI6IGFnZU9iamVjdFt1c2VySW5mby5vYmplY3RJbmZvLmFnZV1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodXNlckluZm8ub2JqZWN0SW5mbyAmJiB1c2VySW5mby5vYmplY3RJbmZvLnNhbGFyeSkge1xuICAgICAgICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgICAgICAgIHNhbGFyeTogdXNlckluZm8ub2JqZWN0SW5mby5zYWxhcnksXG4gICAgICAgICAgICAgIHNhbGFyeU51bWJlcjogc2FsYXJ5T2JqZWN0W3VzZXJJbmZvLm9iamVjdEluZm8uc2FsYXJ5XVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh1c2VySW5mby5vYmplY3RJbmZvICYmIHVzZXJJbmZvLm9iamVjdEluZm8uaGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiB1c2VySW5mby5vYmplY3RJbmZvLmhlaWdodCxcbiAgICAgICAgICAgICAgaGVpZ2h0TnVtYmVyOiBoZWlnaHRPYmplY3RbdXNlckluZm8ub2JqZWN0SW5mby5oZWlnaHRdXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICB9XG4gICAgY29uc29sZS5sb2cob3B0aW9ucyk7XG4gIH0sXG5cbiAganVtcE92ZXIoKTogdm9pZCB7XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6ICcuLi9ob21lL2hvbWUnLFxuICAgIH0pXG4gIH0sXG4gXG5cbiAgbmV4dCgpOiB2b2lkIHtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogJy4uL2hvbWUvaG9tZScsXG4gICAgfSlcbiAgfSxcblxuICBnZXRTdGFuZGFyZChlOiBhbnkpIHtcbiAgICBjb25zdCB7IHR5cGUsIHZhbHVlLCBudW1iZXIgfSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0O1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnMSc6XG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgIGFnZU51bWJlcjogbnVtYmVyLFxuICAgICAgICAgIGFnZTogdmFsdWUsXG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJzInOlxuICAgICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgICBoZWlnaHROdW1iZXI6IG51bWJlcixcbiAgICAgICAgICBoZWlnaHQ6IHZhbHVlLFxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICczJzpcbiAgICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgICAgc2FsYXJ5TnVtYmVyOiBudW1iZXIsXG4gICAgICAgICAgc2FsYXJ5OiB2YWx1ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCd0eXBlOicsIHR5cGUpO1xuICAgIGNvbnNvbGUubG9nKCd2YWx1ZTonLCB2YWx1ZSk7XG4gIH0sXG5cbiAgdXBkYXRlVXNlcigpOiBhbnkge1xuICAgIGNvbnN0IHtcbiAgICAgIGFnZSxcbiAgICAgIGhlaWdodCxcbiAgICAgIHNhbGFyeSxcbiAgICAgIHRpdGxlXG4gICAgfSA9IHRoaXMuZGF0YTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGEpO1xuICAgIGlmICghdXRpbHMudmFsaWRhdGVFbXB0eShhZ2UsICfor7fpgInmi6nlubTpvoTmoIflh4YnKSB8fFxuICAgICAgIXV0aWxzLnZhbGlkYXRlRW1wdHkoaGVpZ2h0LCAn6K+36YCJ5oup6Lqr6auY5qCH5YeGJykgfHxcbiAgICAgICF1dGlscy52YWxpZGF0ZUVtcHR5KHNhbGFyeSwgJ+ivt+mAieaLqeaUtuWFpeagh+WHhicpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIEFwaS51cGRhdGVVc2VyKHtcbiAgICAgIG9wZW5pZDogYXBwLmdsb2JhbERhdGEudXNlckluZm8ub3BlbmlkLFxuICAgICAgb2JqZWN0SW5mbzogeyAvLyDmi6nlgbbmoIflh4ZcbiAgICAgICAgYWdlLFxuICAgICAgICBoZWlnaHQsXG4gICAgICAgIHNhbGFyeSxcbiAgICAgIH1cbiAgICB9KS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2VzdWx0LmNvZGUnLCByZXN1bHQuY29kZSlcbiAgICAgIGlmIChyZXN1bHQuY29kZSA9PT0gMjAwICYmIHRpdGxlICE9PSfmm7TmlrAnKSB7XG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJy4uL3JlZ2lzdGVyUGhvbmUvcmVnaXN0ZXJQaG9uZScsXG4gICAgICAgIH0pO1xuICAgICAgfWVsc2V7XG4gICAgICAgICAgdXRpbHMuc2hvd01vZGFsKCfmm7TmlrDmiJDlip8nKVxuICAgICAgICAgICB3eC5zd2l0Y2hUYWIoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBgLi4vbXlIb21lL215SG9tZWAsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIG9uUmVhZHk6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIG9uU2hvdzogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXG4gICAqL1xuICBvbkhpZGU6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxuICAgKi9cbiAgb25VbmxvYWQ6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxuICAgKi9cbiAgb25QdWxsRG93blJlZnJlc2g6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcbiAgICovXG4gIG9uUmVhY2hCb3R0b206IGZ1bmN0aW9uICgpIHtcblxuICB9LFxufSkiXX0=