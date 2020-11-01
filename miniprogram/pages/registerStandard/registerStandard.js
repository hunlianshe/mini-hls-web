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
        title: '精确匹配'
    },
    onLoad: function (options) {
        if (options.type === 'usercenter') {
            Api.getUserInfo(app.globalData.userInfo.openid).then((result) => {
                if (result) {
                    this.setData({
                        title: "更新"
                    });
                    const userInfo = result.data;
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
    },
    updateUser() {
        const { age, height, salary, title } = this.data;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXJTdGFuZGFyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlZ2lzdGVyU3RhbmRhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBaUQ7QUFDakQsMkNBQTJDO0FBRTNDLE1BQU0sR0FBRyxHQUFRLE1BQU0sRUFBVSxDQUFDO0FBRWxDLElBQUksU0FBUyxHQUFPO0lBQ2xCLE9BQU8sRUFBQyxHQUFHO0lBQ1gsUUFBUSxFQUFDLEdBQUc7SUFDWixRQUFRLEVBQUMsR0FBRztJQUNaLFFBQVEsRUFBQyxHQUFHO0lBQ1osUUFBUSxFQUFDLEdBQUc7SUFDWixPQUFPLEVBQUMsR0FBRztDQUNaLENBQUE7QUFDRCxJQUFJLFlBQVksR0FBUTtJQUN0QixNQUFNLEVBQUUsR0FBRztJQUNYLE9BQU8sRUFBRSxHQUFHO0lBQ1osT0FBTyxFQUFFLEdBQUc7SUFDWixPQUFPLEVBQUUsR0FBRztJQUNaLE1BQU0sRUFBRSxHQUFHO0lBQ1gsT0FBTyxFQUFFLEdBQUc7Q0FDYixDQUFBO0FBR0QsSUFBSSxZQUFZLEdBQVE7SUFDdEIsT0FBTyxFQUFFLEdBQUc7SUFDWixTQUFTLEVBQUUsR0FBRztJQUNkLFNBQVMsRUFBRSxHQUFHO0lBQ2QsU0FBUyxFQUFFLEdBQUc7SUFDZCxTQUFTLEVBQUUsR0FBRztJQUNkLFFBQVEsRUFBRSxHQUFHO0NBQ2QsQ0FBQTtBQUVELElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLElBQUksRUFBQyxFQUFFO1FBQ1AsU0FBUyxFQUFFLEVBQUU7UUFDYixZQUFZLEVBQUUsRUFBRTtRQUNoQixZQUFZLEVBQUUsRUFBRTtRQUNoQixHQUFHLEVBQUUsRUFBRTtRQUNQLE1BQU0sRUFBRSxFQUFFO1FBQ1YsTUFBTSxFQUFFLEVBQUU7UUFDVixLQUFLLEVBQUMsTUFBTTtLQUNiO0lBRUQsTUFBTSxFQUFFLFVBQVUsT0FBWTtRQUM1QixJQUFHLE9BQU8sQ0FBQyxJQUFJLEtBQUssWUFBWSxFQUFDO1lBRS9C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TyxLQUFLLENBQUM7U0FDZDtRQUNELEdBQUcsQ0FBQyxVQUFVLENBQUM7WUFDYixNQUFNLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsTUFBTTtZQUN0QyxVQUFVLEVBQUU7Z0JBQ1YsR0FBRztnQkFDSCxNQUFNO2dCQUNOLE1BQU07YUFDUDtTQUNGLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFXLEVBQUUsRUFBRTtZQUN0QixJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssR0FBRyxJQUFJLEtBQUssS0FBSSxJQUFJLEVBQUU7Z0JBQ3hDLEVBQUUsQ0FBQyxVQUFVLENBQUM7b0JBQ1osR0FBRyxFQUFFLGdDQUFnQztpQkFDdEMsQ0FBQyxDQUFDO2FBQ0o7aUJBQUk7Z0JBQ0QsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQTtnQkFDdEIsRUFBRSxDQUFDLFNBQVMsQ0FBQztvQkFDQSxHQUFHLEVBQUUsa0JBQWtCO2lCQUMxQixDQUFDLENBQUM7YUFDaEI7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxPQUFPLEVBQUU7SUFFVCxDQUFDO0lBRUQsTUFBTSxFQUFFO0lBRVIsQ0FBQztJQUtELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFLRCxRQUFRLEVBQUU7SUFFVixDQUFDO0lBS0QsaUJBQWlCLEVBQUU7SUFFbkIsQ0FBQztJQUtELGFBQWEsRUFBRTtJQUVmLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBBcGkgZnJvbSAnLi4vLi4vc2VydmljZS9hcGkuc2VydmljZSc7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XG5pbXBvcnQgeyBJTXlBcHAgfSBmcm9tICcuLi8uLi9hcHAnO1xuY29uc3QgYXBwOiBhbnkgPSBnZXRBcHA8SU15QXBwPigpO1xuXG5sZXQgYWdlT2JqZWN0OmFueSA9IHtcbiAgJzI15bKB5Lul5LiLJzonMScsXG4gICcyNX4zMOWygSc6JzInLFxuICAnMzB+MzXlsoEnOiczJyxcbiAgJzM1fjQ15bKBJzonNCcsXG4gICc0NX41NeWygSc6JzUnLFxuICAnNTXlsoHku6XkuIonOic2J1xufVxubGV0IHNhbGFyeU9iamVjdDogYW55ID0ge1xuICAnNeWNg+S7peS4iyc6ICcxJyxcbiAgJzXljYPvvZ4x5LiHJzogJzInLFxuICAnMeS4h++9njLkuIcnOiAnMycsXG4gICcy5LiH772eNeS4hyc6ICc0JyxcbiAgJzXkuIfku6XkuIonOiAnNScsXG4gICc1NeWygeS7peS4iic6ICc2J1xufVxuXG5cbmxldCBoZWlnaHRPYmplY3Q6IGFueSA9IHtcbiAgJzE2MOS7peS4iyc6ICcxJyxcbiAgJzE2MO+9njE2NSc6ICcyJyxcbiAgJzE2Ne+9njE3MCc6ICczJyxcbiAgJzE3MO+9njE3NSc6ICc0JyxcbiAgJzE3Ne+9njE4MCc6ICc1JyxcbiAgJ1wiMTgw5Lul5LiKJzogJzYnXG59XG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgdHlwZTonJyxcbiAgICBhZ2VOdW1iZXI6ICcnLFxuICAgIGhlaWdodE51bWJlcjogJycsXG4gICAgc2FsYXJ5TnVtYmVyOiAnJyxcbiAgICBhZ2U6ICcnLFxuICAgIGhlaWdodDogJycsXG4gICAgc2FsYXJ5OiAnJyxcbiAgICB0aXRsZTon57K+56Gu5Yy56YWNJ1xuICB9LFxuXG4gIG9uTG9hZDogZnVuY3Rpb24gKG9wdGlvbnM6IGFueSkge1xuICAgIGlmKG9wdGlvbnMudHlwZSA9PT0gJ3VzZXJjZW50ZXInKXtcbiAgICAgIC8qKiDojrflj5bnlKjmiLfkv6Hmga8gKi9cbiAgICAgIEFwaS5nZXRVc2VySW5mbyhhcHAuZ2xvYmFsRGF0YS51c2VySW5mby5vcGVuaWQpLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgICAgIHRpdGxlOiBcIuabtOaWsFwiXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY29uc3QgdXNlckluZm8gPSByZXN1bHQuZGF0YTtcbiAgICAgICAgICBpZiAodXNlckluZm8ub2JqZWN0SW5mbyAmJiB1c2VySW5mby5vYmplY3RJbmZvLmFnZSApe1xuICAgICAgICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgICAgICAgIGFnZTogdXNlckluZm8ub2JqZWN0SW5mby5hZ2UsXG4gICAgICAgICAgICAgIGFnZU51bWJlcjogYWdlT2JqZWN0W3VzZXJJbmZvLm9iamVjdEluZm8uYWdlXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh1c2VySW5mby5vYmplY3RJbmZvICYmIHVzZXJJbmZvLm9iamVjdEluZm8uc2FsYXJ5KSB7XG4gICAgICAgICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgICAgICAgc2FsYXJ5OiB1c2VySW5mby5vYmplY3RJbmZvLnNhbGFyeSxcbiAgICAgICAgICAgICAgc2FsYXJ5TnVtYmVyOiBzYWxhcnlPYmplY3RbdXNlckluZm8ub2JqZWN0SW5mby5zYWxhcnldXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHVzZXJJbmZvLm9iamVjdEluZm8gJiYgdXNlckluZm8ub2JqZWN0SW5mby5oZWlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgICAgICBoZWlnaHQ6IHVzZXJJbmZvLm9iamVjdEluZm8uaGVpZ2h0LFxuICAgICAgICAgICAgICBoZWlnaHROdW1iZXI6IGhlaWdodE9iamVjdFt1c2VySW5mby5vYmplY3RJbmZvLmhlaWdodF1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgIH1cbiAgfSxcblxuICBqdW1wT3ZlcigpOiB2b2lkIHtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogJy4uL2hvbWUvaG9tZScsXG4gICAgfSlcbiAgfSxcbiBcblxuICBuZXh0KCk6IHZvaWQge1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiAnLi4vaG9tZS9ob21lJyxcbiAgICB9KVxuICB9LFxuXG4gIGdldFN0YW5kYXJkKGU6IGFueSkge1xuICAgIGNvbnN0IHsgdHlwZSwgdmFsdWUsIG51bWJlciB9ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQ7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICcxJzpcbiAgICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgICAgYWdlTnVtYmVyOiBudW1iZXIsXG4gICAgICAgICAgYWdlOiB2YWx1ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnMic6XG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgIGhlaWdodE51bWJlcjogbnVtYmVyLFxuICAgICAgICAgIGhlaWdodDogdmFsdWUsXG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJzMnOlxuICAgICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgICBzYWxhcnlOdW1iZXI6IG51bWJlcixcbiAgICAgICAgICBzYWxhcnk6IHZhbHVlLFxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0sXG5cbiAgdXBkYXRlVXNlcigpOiBhbnkge1xuICAgIGNvbnN0IHtcbiAgICAgIGFnZSxcbiAgICAgIGhlaWdodCxcbiAgICAgIHNhbGFyeSxcbiAgICAgIHRpdGxlXG4gICAgfSA9IHRoaXMuZGF0YTtcbiAgICBpZiAoIXV0aWxzLnZhbGlkYXRlRW1wdHkoYWdlLCAn6K+36YCJ5oup5bm06b6E5qCH5YeGJykgfHxcbiAgICAgICF1dGlscy52YWxpZGF0ZUVtcHR5KGhlaWdodCwgJ+ivt+mAieaLqei6q+mrmOagh+WHhicpIHx8XG4gICAgICAhdXRpbHMudmFsaWRhdGVFbXB0eShzYWxhcnksICfor7fpgInmi6nmlLblhaXmoIflh4YnKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBBcGkudXBkYXRlVXNlcih7XG4gICAgICBvcGVuaWQ6IGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvLm9wZW5pZCxcbiAgICAgIG9iamVjdEluZm86IHsgLy8g5oup5YG25qCH5YeGXG4gICAgICAgIGFnZSxcbiAgICAgICAgaGVpZ2h0LFxuICAgICAgICBzYWxhcnksXG4gICAgICB9XG4gICAgfSkudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgIGlmIChyZXN1bHQuY29kZSA9PT0gMjAwICYmIHRpdGxlICE9PSfmm7TmlrAnKSB7XG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJy4uL3JlZ2lzdGVyUGhvbmUvcmVnaXN0ZXJQaG9uZScsXG4gICAgICAgIH0pO1xuICAgICAgfWVsc2V7XG4gICAgICAgICAgdXRpbHMuc2hvd01vZGFsKCfmm7TmlrDmiJDlip8nKVxuICAgICAgICAgICB3eC5zd2l0Y2hUYWIoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBgLi4vbXlIb21lL215SG9tZWAsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIG9uUmVhZHk6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIG9uU2hvdzogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXG4gICAqL1xuICBvbkhpZGU6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxuICAgKi9cbiAgb25VbmxvYWQ6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxuICAgKi9cbiAgb25QdWxsRG93blJlZnJlc2g6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcbiAgICovXG4gIG9uUmVhY2hCb3R0b206IGZ1bmN0aW9uICgpIHtcblxuICB9LFxufSkiXX0=