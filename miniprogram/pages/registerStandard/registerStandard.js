"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Api = require("../../service/api.service");
const utils = require("../../utils/utils");
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
        user: {},
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
        const user = wx.getStorageSync('user');
        this.setData({
            user
        });
        if (options.type === 'usercenter') {
            Api.getUserInfo(user.openid).then((result) => {
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
            openid: this.data.user.openid,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXJTdGFuZGFyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlZ2lzdGVyU3RhbmRhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBaUQ7QUFDakQsMkNBQTJDO0FBRTNDLElBQUksU0FBUyxHQUFPO0lBQ2xCLE9BQU8sRUFBQyxHQUFHO0lBQ1gsUUFBUSxFQUFDLEdBQUc7SUFDWixRQUFRLEVBQUMsR0FBRztJQUNaLFFBQVEsRUFBQyxHQUFHO0lBQ1osUUFBUSxFQUFDLEdBQUc7SUFDWixPQUFPLEVBQUMsR0FBRztDQUNaLENBQUE7QUFDRCxJQUFJLFlBQVksR0FBUTtJQUN0QixNQUFNLEVBQUUsR0FBRztJQUNYLE9BQU8sRUFBRSxHQUFHO0lBQ1osT0FBTyxFQUFFLEdBQUc7SUFDWixPQUFPLEVBQUUsR0FBRztJQUNaLE1BQU0sRUFBRSxHQUFHO0lBQ1gsT0FBTyxFQUFFLEdBQUc7Q0FDYixDQUFBO0FBR0QsSUFBSSxZQUFZLEdBQVE7SUFDdEIsT0FBTyxFQUFFLEdBQUc7SUFDWixTQUFTLEVBQUUsR0FBRztJQUNkLFNBQVMsRUFBRSxHQUFHO0lBQ2QsU0FBUyxFQUFFLEdBQUc7SUFDZCxTQUFTLEVBQUUsR0FBRztJQUNkLFFBQVEsRUFBRSxHQUFHO0NBQ2QsQ0FBQTtBQUVELElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxFQUFTO1FBQ2YsSUFBSSxFQUFDLEVBQUU7UUFDUCxTQUFTLEVBQUUsRUFBRTtRQUNiLFlBQVksRUFBRSxFQUFFO1FBQ2hCLFlBQVksRUFBRSxFQUFFO1FBQ2hCLEdBQUcsRUFBRSxFQUFFO1FBQ1AsTUFBTSxFQUFFLEVBQUU7UUFDVixNQUFNLEVBQUUsRUFBRTtRQUNWLEtBQUssRUFBQyxNQUFNO0tBQ2I7SUFFRCxNQUFNLEVBQUUsVUFBVSxPQUFZO1FBQzVCLE1BQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkMs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Q0FBQztZQUN2QyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxFQUFFO1lBQ3pDLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxHQUFHLENBQUMsVUFBVSxDQUFDO1lBQ2IsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU07WUFDN0IsVUFBVSxFQUFFO2dCQUNWLEdBQUc7Z0JBQ0gsTUFBTTtnQkFDTixNQUFNO2FBQ1A7U0FDRixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBVyxFQUFFLEVBQUU7WUFDdEIsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLEdBQUcsSUFBSSxLQUFLLEtBQUksSUFBSSxFQUFFO2dCQUN4QyxFQUFFLENBQUMsVUFBVSxDQUFDO29CQUNaLEdBQUcsRUFBRSxnQ0FBZ0M7aUJBQ3RDLENBQUMsQ0FBQzthQUNKO2lCQUFJO2dCQUNELEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUE7Z0JBQ3RCLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0JBQ0EsR0FBRyxFQUFFLGtCQUFrQjtpQkFDMUIsQ0FBQyxDQUFDO2FBQ2hCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsT0FBTyxFQUFFO0lBRVQsQ0FBQztJQUVELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFLRCxNQUFNLEVBQUU7SUFFUixDQUFDO0lBS0QsUUFBUSxFQUFFO0lBRVYsQ0FBQztJQUtELGlCQUFpQixFQUFFO0lBRW5CLENBQUM7SUFLRCxhQUFhLEVBQUU7SUFFZixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgQXBpIGZyb20gJy4uLy4uL3NlcnZpY2UvYXBpLnNlcnZpY2UnO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xuXG5sZXQgYWdlT2JqZWN0OmFueSA9IHtcbiAgJzI15bKB5Lul5LiLJzonMScsXG4gICcyNX4zMOWygSc6JzInLFxuICAnMzB+MzXlsoEnOiczJyxcbiAgJzM1fjQ15bKBJzonNCcsXG4gICc0NX41NeWygSc6JzUnLFxuICAnNTXlsoHku6XkuIonOic2J1xufVxubGV0IHNhbGFyeU9iamVjdDogYW55ID0ge1xuICAnNeWNg+S7peS4iyc6ICcxJyxcbiAgJzXljYPvvZ4x5LiHJzogJzInLFxuICAnMeS4h++9njLkuIcnOiAnMycsXG4gICcy5LiH772eNeS4hyc6ICc0JyxcbiAgJzXkuIfku6XkuIonOiAnNScsXG4gICc1NeWygeS7peS4iic6ICc2J1xufVxuXG5cbmxldCBoZWlnaHRPYmplY3Q6IGFueSA9IHtcbiAgJzE2MOS7peS4iyc6ICcxJyxcbiAgJzE2MO+9njE2NSc6ICcyJyxcbiAgJzE2Ne+9njE3MCc6ICczJyxcbiAgJzE3MO+9njE3NSc6ICc0JyxcbiAgJzE3Ne+9njE4MCc6ICc1JyxcbiAgJ1wiMTgw5Lul5LiKJzogJzYnXG59XG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgdXNlcjoge30gYXMgYW55LFxuICAgIHR5cGU6JycsXG4gICAgYWdlTnVtYmVyOiAnJyxcbiAgICBoZWlnaHROdW1iZXI6ICcnLFxuICAgIHNhbGFyeU51bWJlcjogJycsXG4gICAgYWdlOiAnJyxcbiAgICBoZWlnaHQ6ICcnLFxuICAgIHNhbGFyeTogJycsXG4gICAgdGl0bGU6J+eyvuehruWMuemFjSdcbiAgfSxcblxuICBvbkxvYWQ6IGZ1bmN0aW9uIChvcHRpb25zOiBhbnkpIHtcbiAgICBjb25zdCB1c2VyID0gd3guZ2V0U3RvcmFnZVN5bmMoJ3VzZXInKTtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIHVzZXJcbiAgICB9KVxuICAgIGlmKG9wdGlvbnMudHlwZSA9PT0gJ3VzZXJjZW50ZXInKXtcbiAgICAgIC8qKiDojrflj5bnlKjmiLfkv6Hmga8gKi9cbiAgICAgIEFwaS5nZXRVc2VySW5mbyh1c2VyLm9wZW5pZCkudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgICAgdGl0bGU6IFwi5pu05pawXCJcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjb25zdCB1c2VySW5mbyA9IHJlc3VsdC5kYXRhO1xuICAgICAgICAgIGlmICh1c2VySW5mby5vYmplY3RJbmZvICYmIHVzZXJJbmZvLm9iamVjdEluZm8uYWdlICl7XG4gICAgICAgICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgICAgICAgYWdlOiB1c2VySW5mby5vYmplY3RJbmZvLmFnZSxcbiAgICAgICAgICAgICAgYWdlTnVtYmVyOiBhZ2VPYmplY3RbdXNlckluZm8ub2JqZWN0SW5mby5hZ2VdXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHVzZXJJbmZvLm9iamVjdEluZm8gJiYgdXNlckluZm8ub2JqZWN0SW5mby5zYWxhcnkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgICAgICBzYWxhcnk6IHVzZXJJbmZvLm9iamVjdEluZm8uc2FsYXJ5LFxuICAgICAgICAgICAgICBzYWxhcnlOdW1iZXI6IHNhbGFyeU9iamVjdFt1c2VySW5mby5vYmplY3RJbmZvLnNhbGFyeV1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodXNlckluZm8ub2JqZWN0SW5mbyAmJiB1c2VySW5mby5vYmplY3RJbmZvLmhlaWdodCkge1xuICAgICAgICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgICAgICAgIGhlaWdodDogdXNlckluZm8ub2JqZWN0SW5mby5oZWlnaHQsXG4gICAgICAgICAgICAgIGhlaWdodE51bWJlcjogaGVpZ2h0T2JqZWN0W3VzZXJJbmZvLm9iamVjdEluZm8uaGVpZ2h0XVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgfVxuICB9LFxuXG4gIGp1bXBPdmVyKCk6IHZvaWQge1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiAnLi4vaG9tZS9ob21lJyxcbiAgICB9KVxuICB9LFxuIFxuXG4gIG5leHQoKTogdm9pZCB7XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6ICcuLi9ob21lL2hvbWUnLFxuICAgIH0pXG4gIH0sXG5cbiAgZ2V0U3RhbmRhcmQoZTogYW55KSB7XG4gICAgY29uc3QgeyB0eXBlLCB2YWx1ZSwgbnVtYmVyIH0gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldDtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJzEnOlxuICAgICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgICBhZ2VOdW1iZXI6IG51bWJlcixcbiAgICAgICAgICBhZ2U6IHZhbHVlLFxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICcyJzpcbiAgICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgICAgaGVpZ2h0TnVtYmVyOiBudW1iZXIsXG4gICAgICAgICAgaGVpZ2h0OiB2YWx1ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnMyc6XG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgIHNhbGFyeU51bWJlcjogbnVtYmVyLFxuICAgICAgICAgIHNhbGFyeTogdmFsdWUsXG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSxcblxuICB1cGRhdGVVc2VyKCk6IGFueSB7XG4gICAgY29uc3Qge1xuICAgICAgYWdlLFxuICAgICAgaGVpZ2h0LFxuICAgICAgc2FsYXJ5LFxuICAgICAgdGl0bGVcbiAgICB9ID0gdGhpcy5kYXRhO1xuICAgIGlmICghdXRpbHMudmFsaWRhdGVFbXB0eShhZ2UsICfor7fpgInmi6nlubTpvoTmoIflh4YnKSB8fFxuICAgICAgIXV0aWxzLnZhbGlkYXRlRW1wdHkoaGVpZ2h0LCAn6K+36YCJ5oup6Lqr6auY5qCH5YeGJykgfHxcbiAgICAgICF1dGlscy52YWxpZGF0ZUVtcHR5KHNhbGFyeSwgJ+ivt+mAieaLqeaUtuWFpeagh+WHhicpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIEFwaS51cGRhdGVVc2VyKHtcbiAgICAgIG9wZW5pZDogdGhpcy5kYXRhLnVzZXIub3BlbmlkLFxuICAgICAgb2JqZWN0SW5mbzogeyAvLyDmi6nlgbbmoIflh4ZcbiAgICAgICAgYWdlLFxuICAgICAgICBoZWlnaHQsXG4gICAgICAgIHNhbGFyeSxcbiAgICAgIH1cbiAgICB9KS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgaWYgKHJlc3VsdC5jb2RlID09PSAyMDAgJiYgdGl0bGUgIT09J+abtOaWsCcpIHtcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiAnLi4vcmVnaXN0ZXJQaG9uZS9yZWdpc3RlclBob25lJyxcbiAgICAgICAgfSk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgICB1dGlscy5zaG93TW9kYWwoJ+abtOaWsOaIkOWKnycpXG4gICAgICAgICAgIHd4LnN3aXRjaFRhYih7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGAuLi9teUhvbWUvbXlIb21lYCxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgb25SZWFkeTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgb25TaG93OiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cbiAgICovXG4gIG9uSGlkZTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Y246L29XG4gICAqL1xuICBvblVubG9hZDogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXG4gICAqL1xuICBvblB1bGxEb3duUmVmcmVzaDogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxuICAgKi9cbiAgb25SZWFjaEJvdHRvbTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG59KSJdfQ==