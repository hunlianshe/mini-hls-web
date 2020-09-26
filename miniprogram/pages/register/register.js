"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Api = require("../../service/api.service");
const utils = require("../../utils/utils");
const jobJson_1 = require("../../public/json/jobJson");
const app = getApp();
Page({
    data: {
        userInfo: { openid: '' },
        nickName: '',
        weChatId: '',
        gender: '',
        birth: '',
        height: '',
        salary: '',
        region: [],
        workCity: '',
        workProvince: '',
        workRegion: '',
        isMarriage: '',
        education: '',
        hasChild: '',
        wantChild: '',
        jobGeneral: '',
        jobDetail: '',
        haveHouse: '',
        genderIndex: 0,
        salaryIndex: 0,
        dateNow: '',
        submitDisable: false,
        isMarriageArray: ['未婚', '离婚', '丧偶'],
        genderArray: ['男', '女'],
        salaryArray: [
            '5千以下', '5千～1万', '1万～2万', '2万～5万', '5万以上'
        ],
        educationArray: [
            '小学', '初中', '高中', '大专', '大学本科', '硕士', '博士'
        ],
        hasChildArray: ['否', '是'],
        wantChildArray: ['是', '否'],
        haveHouseArray: ['已买房', '未买房'],
        multiIndex: [,],
        multiArray: [[], []],
        jobJson: jobJson_1.default,
    },
    onLoad: function () {
        const multiArray = [[], []];
        jobJson_1.default.data.forEach((item) => {
            multiArray[0].push(item.name);
        });
        jobJson_1.default.data[0].data.forEach((item) => {
            multiArray[1].push(item.name);
        });
        this.setData({
            multiArray,
            dateNow: this.getYMD(new Date())
        });
        this.getUserInfo();
    },
    getUserInfo() {
        const openid = app.globalData.userInfo.openid;
        Api.getUserInfo(openid || '').then((result) => {
            if (result) {
                this.setData({
                    userInfo: result.data,
                    nickName: result.data.nickName,
                    weChatId: result.data.weChatId,
                    gender: result.data.gender,
                    birth: result.data.birth ? this.getYMD(result.data.birth) : '',
                    height: result.data.height,
                    salary: result.data.salary,
                    workProvince: result.data.workProvince,
                    workCity: result.data.workCity,
                    workRegion: result.data.workRegion,
                    isMarriage: result.data.isMarriage,
                    education: result.data.education,
                    hasChild: result.data.hasChild,
                    wantChild: result.data.wantChild,
                    jobGeneral: result.data.jobGeneral,
                    jobDetail: result.data.jobDetail,
                    haveHouse: result.data.haveHouse,
                });
            }
        });
    },
    getYMD(dateStr) {
        const date = new Date(dateStr);
        const year = date.getFullYear();
        let month = date.getMonth() + 1;
        let monthStr = month <= 9 ? `0${month}` : month;
        let day = date.getDate();
        let dayStr = day <= 9 ? `0${day}` : day;
        return `${year}-${monthStr}-${dayStr}`;
    },
    onSubmit(e) {
        let that = this;
        const value = e.detail.value;
        if (!utils.validateEmpty(value.nickName, '请输入昵称') ||
            (!utils.validateEmpty(value.weChatId, '请输入微信号') ||
                !utils.validateEmpty(value.gender, '请选择性别') ||
                !utils.validateEmpty(value.birth, '请选择生日') ||
                !utils.validateEmpty(value.height, '请输入身高') ||
                !utils.validateEmpty(value.salary, '请选择收入') ||
                !utils.validateEmpty(this.data.workProvince, '请选择工作所在地') ||
                !utils.validateEmpty(this.data.education, '请选择学历') ||
                !utils.validateEmpty(this.data.isMarriage, '请选择婚姻状况') ||
                !utils.validateEmpty(this.data.hasChild, '请选择是否有孩子') ||
                !utils.validateEmpty(this.data.wantChild, '请选择是否想要孩子') ||
                !utils.validateEmpty(this.data.haveHouse, '请选择买房情况'))) {
            return false;
        }
        that.doSubmit(e);
    },
    doSubmit(e) {
        const params = e.detail.value;
        const { userInfo } = this.data;
        const dataParams = {
            workProvince: this.data.workProvince,
            workCity: this.data.workCity,
            workRegion: this.data.workRegion,
            jobGeneral: this.data.jobGeneral,
            jobDetail: this.data.jobDetail,
        };
        this.setData({
            submitDisable: true
        });
        Api.updateUser(Object.assign(userInfo, params, dataParams)).then((result) => {
            wx.hideLoading();
            this.setData({
                submitDisable: true
            });
            if (result.code === 200) {
                wx.showToast({
                    title: '更新成功',
                    icon: 'success',
                    duration: 1000,
                    mask: true
                });
                setTimeout(() => {
                    wx.switchTab({
                        url: `../myHome/myHome`,
                    });
                }, 1000);
            }
            else {
                utils.showModal('系统异常，请稍后再试');
            }
        });
    },
    bindBirthChange(e) {
        this.setData({
            birth: e.detail.value
        });
    },
    bindEducationChange(e) {
        const { educationArray } = this.data;
        this.setData({
            education: educationArray[e.detail.value]
        });
    },
    bindMarriageChange(e) {
        const { isMarriageArray } = this.data;
        this.setData({
            isMarriage: isMarriageArray[e.detail.value]
        });
    },
    bindHasChildChange(e) {
        const { hasChildArray } = this.data;
        this.setData({
            hasChild: hasChildArray[e.detail.value]
        });
    },
    bindWantChildChange(e) {
        const { wantChildArray } = this.data;
        this.setData({
            wantChild: wantChildArray[e.detail.value]
        });
    },
    bindHaveHouseChange(e) {
        const { haveHouseArray } = this.data;
        this.setData({
            haveHouse: haveHouseArray[e.detail.value]
        });
    },
    bindGenderChange(e) {
        this.setData({
            gender: parseInt(e.detail.value) + 1
        });
    },
    bindSalaryChange(e) {
        const { salaryArray } = this.data;
        this.setData({
            salary: salaryArray[e.detail.value]
        });
    },
    bindRegionChange: function (e) {
        let region = e.detail.value;
        this.setData({
            region,
            workProvince: region[0],
            workCity: region[1],
            workRegion: region[2],
        });
    },
    bindMultiPickerChange: function (e) {
        const { multiArray } = this.data;
        let multiIndex = e.detail.value;
        this.setData({
            multiIndex,
            jobGeneral: multiArray[0][multiIndex[0]],
            jobDetail: multiArray[1][multiIndex[1]],
        });
    },
    bindMultiPickerColumnChange: function (e) {
        const { multiArray, multiIndex } = this.data;
        multiIndex[e.detail.column] = e.detail.value;
        if (e.detail.column === 0) {
            multiArray[1] = [];
            jobJson_1.default.data[multiIndex[0] || 0].data.forEach((item) => {
                multiArray[1].push(item.name);
            });
        }
        this.setData({
            multiArray,
        });
    },
    bindDateChange: function (e) {
        this.setData({
            date: e.detail.value
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZWdpc3Rlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLGlEQUFpRDtBQUNqRCwyQ0FBMkM7QUFDM0MsdURBQWdEO0FBRWhELE1BQU0sR0FBRyxHQUFHLE1BQU0sRUFBVSxDQUFDO0FBRTdCLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLFFBQVEsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUU7UUFDeEIsUUFBUSxFQUFFLEVBQUU7UUFDWixRQUFRLEVBQUUsRUFBRTtRQUNaLE1BQU0sRUFBRSxFQUFFO1FBQ1YsS0FBSyxFQUFFLEVBQUU7UUFDVCxNQUFNLEVBQUUsRUFBRTtRQUNWLE1BQU0sRUFBRSxFQUFFO1FBQ1YsTUFBTSxFQUFFLEVBQUU7UUFDVixRQUFRLEVBQUUsRUFBRTtRQUNaLFlBQVksRUFBRSxFQUFFO1FBQ2hCLFVBQVUsRUFBRSxFQUFFO1FBQ2QsVUFBVSxFQUFFLEVBQUU7UUFDZCxTQUFTLEVBQUUsRUFBRTtRQUNiLFFBQVEsRUFBRSxFQUFFO1FBQ1osU0FBUyxFQUFFLEVBQUU7UUFDYixVQUFVLEVBQUUsRUFBRTtRQUNkLFNBQVMsRUFBRSxFQUFFO1FBQ2IsU0FBUyxFQUFFLEVBQUU7UUFDYixXQUFXLEVBQUUsQ0FBQztRQUNkLFdBQVcsRUFBRSxDQUFDO1FBQ2QsT0FBTyxFQUFFLEVBQUU7UUFDWCxhQUFhLEVBQUUsS0FBSztRQUNwQixlQUFlLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQztRQUNuQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDO1FBQ3RCLFdBQVcsRUFBRTtZQUNYLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNO1NBQzFDO1FBQ0QsY0FBYyxFQUFFO1lBQ2QsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFB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Q0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQzdDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3pCLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDbkIsaUJBQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFTLEVBQUUsRUFBRTtnQkFDMUQsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEMsQ0FBQyxDQUFDLENBQUM7U0FDSjtRQUNELElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixVQUFVO1NBRVgsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELGNBQWMsRUFBRSxVQUFVLENBQUs7UUFDN0IsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLElBQUksRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDckIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUVGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0ICogYXMgQXBpIGZyb20gJy4uLy4uL3NlcnZpY2UvYXBpLnNlcnZpY2UnO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xuaW1wb3J0IGpvYkpzb24gZnJvbSAnLi4vLi4vcHVibGljL2pzb24vam9iSnNvbic7XG5pbXBvcnQgeyBJTXlBcHAgfSBmcm9tICcuLi8uLi9hcHAnO1xuY29uc3QgYXBwID0gZ2V0QXBwPElNeUFwcD4oKTtcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICB1c2VySW5mbzogeyBvcGVuaWQ6ICcnIH0sXG4gICAgbmlja05hbWU6ICcnLFxuICAgIHdlQ2hhdElkOiAnJywgLy8g5b6u5L+h5Y+3XG4gICAgZ2VuZGVyOiAnJywgXG4gICAgYmlydGg6ICcnLCAgICAvLyDnlJ/ml6VcbiAgICBoZWlnaHQ6ICcnLCAgIC8vIOi6q+mrmFxuICAgIHNhbGFyeTogJycsIFxuICAgIHJlZ2lvbjogW10sXG4gICAgd29ya0NpdHk6ICcnLFxuICAgIHdvcmtQcm92aW5jZTogJycsXG4gICAgd29ya1JlZ2lvbjogJycsXG4gICAgaXNNYXJyaWFnZTogJycsXG4gICAgZWR1Y2F0aW9uOiAnJywgXG4gICAgaGFzQ2hpbGQ6ICcnLCBcbiAgICB3YW50Q2hpbGQ6ICcnLCBcbiAgICBqb2JHZW5lcmFsOiAnJyxcbiAgICBqb2JEZXRhaWw6ICcnLFxuICAgIGhhdmVIb3VzZTogJycsICAgXG4gICAgZ2VuZGVySW5kZXg6IDAsXG4gICAgc2FsYXJ5SW5kZXg6IDAsXG4gICAgZGF0ZU5vdzogJycsXG4gICAgc3VibWl0RGlzYWJsZTogZmFsc2UsXG4gICAgaXNNYXJyaWFnZUFycmF5OiBbJ+acquWpmicsICfnprvlqZonLCAn5Lin5YG2J10sXG4gICAgZ2VuZGVyQXJyYXk6IFsn55S3Jywn5aWzJ10sXG4gICAgc2FsYXJ5QXJyYXk6IFtcbiAgICAgICc15Y2D5Lul5LiLJywgJzXljYPvvZ4x5LiHJywgJzHkuIfvvZ4y5LiHJywgJzLkuIfvvZ415LiHJywgJzXkuIfku6XkuIonXG4gICAgXSxcbiAgICBlZHVjYXRpb25BcnJheTogW1xuICAgICAgJ+Wwj+WtpicsICfliJ3kuK0nLCAn6auY5LitJywgJ+Wkp+S4kycsICflpKflrabmnKznp5EnLCAn56GV5aOrJywgJ+WNmuWjqydcbiAgICBdLFxuICAgIGhhc0NoaWxkQXJyYXk6IFsn5ZCmJywgJ+aYryddLFxuICAgIHdhbnRDaGlsZEFycmF5OiBbJ+aYrycsICflkKYnXSxcbiAgICBoYXZlSG91c2VBcnJheTogWyflt7LkubDmiL8nLCAn5pyq5Lmw5oi/J10sXG4gICAgbXVsdGlJbmRleDogWywgXSxcbiAgICBtdWx0aUFycmF5OiBbW10sW11dIGFzIGFueSxcbiAgICBqb2JKc29uOiBqb2JKc29uLFxuICB9LFxuXG4gIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IG11bHRpQXJyYXkgPSBbW10sIFtdXSBhcyBhbnk7XG4gICAgam9iSnNvbi5kYXRhLmZvckVhY2goKGl0ZW06IGFueSkgPT4ge1xuICAgICAgbXVsdGlBcnJheVswXS5wdXNoKGl0ZW0ubmFtZSk7XG4gICAgfSk7XG4gICAgam9iSnNvbi5kYXRhWzBdLmRhdGEuZm9yRWFjaCgoaXRlbTogYW55KSA9PiB7XG4gICAgICBtdWx0aUFycmF5WzFdLnB1c2goaXRlbS5uYW1lKTtcbiAgICB9KTtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIG11bHRpQXJyYXksXG4gICAgICBkYXRlTm93OiB0aGlzLmdldFlNRChuZXcgRGF0ZSgpKVxuICAgIH0pO1xuICAgIHRoaXMuZ2V0VXNlckluZm8oKTtcbiAgfSxcblxuICAvKiog55So5oi36K+m5oOFICovXG4gIGdldFVzZXJJbmZvKCkge1xuICAgIGNvbnN0IG9wZW5pZCA9IGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvLm9wZW5pZDtcbiAgICBBcGkuZ2V0VXNlckluZm8ob3BlbmlkIHx8ICcnKS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgICB1c2VySW5mbzogcmVzdWx0LmRhdGEsXG4gICAgICAgICAgbmlja05hbWU6IHJlc3VsdC5kYXRhLm5pY2tOYW1lLFxuICAgICAgICAgIHdlQ2hhdElkOiByZXN1bHQuZGF0YS53ZUNoYXRJZCxcbiAgICAgICAgICBnZW5kZXI6IHJlc3VsdC5kYXRhLmdlbmRlcixcbiAgICAgICAgICBiaXJ0aDogcmVzdWx0LmRhdGEuYmlydGg/dGhpcy5nZXRZTUQocmVzdWx0LmRhdGEuYmlydGgpOicnLCAgICAgICAgLy8g55Sf5pelXG4gICAgICAgICAgaGVpZ2h0OiByZXN1bHQuZGF0YS5oZWlnaHQsICAgICAgICAgICAgICAgICAgIC8vIOi6q+mrmFxuICAgICAgICAgIHNhbGFyeTogcmVzdWx0LmRhdGEuc2FsYXJ5LFxuICAgICAgICAgIHdvcmtQcm92aW5jZTogcmVzdWx0LmRhdGEud29ya1Byb3ZpbmNlLFxuICAgICAgICAgIHdvcmtDaXR5OiByZXN1bHQuZGF0YS53b3JrQ2l0eSxcbiAgICAgICAgICB3b3JrUmVnaW9uOiByZXN1bHQuZGF0YS53b3JrUmVnaW9uLCAgICAgICAgXG4gICAgICAgICAgaXNNYXJyaWFnZTogcmVzdWx0LmRhdGEuaXNNYXJyaWFnZSwgICAgICAgICAgIC8vIOWpmuWnu+eKtuWGtVxuICAgICAgICAgIGVkdWNhdGlvbjogcmVzdWx0LmRhdGEuZWR1Y2F0aW9uLCAgICAgICAgICAgICAvLyDmlZnogrJcbiAgICAgICAgICBoYXNDaGlsZDogcmVzdWx0LmRhdGEuaGFzQ2hpbGQsXG4gICAgICAgICAgd2FudENoaWxkOiByZXN1bHQuZGF0YS53YW50Q2hpbGQsXG4gICAgICAgICAgam9iR2VuZXJhbDogcmVzdWx0LmRhdGEuam9iR2VuZXJhbCxcbiAgICAgICAgICBqb2JEZXRhaWw6IHJlc3VsdC5kYXRhLmpvYkRldGFpbCxcbiAgICAgICAgICBoYXZlSG91c2U6IHJlc3VsdC5kYXRhLmhhdmVIb3VzZSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSlcbiAgfSxcblxuICBnZXRZTUQoZGF0ZVN0cjogYW55KSB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRhdGVTdHIpO1xuICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgbGV0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMTtcbiAgICBsZXQgbW9udGhTdHIgPSBtb250aCA8PSA5ID8gYDAke21vbnRofWAgOiBtb250aDtcbiAgICBsZXQgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XG4gICAgbGV0IGRheVN0ciA9IGRheSA8PSA5ID8gYDAke2RheX1gIDogZGF5O1xuICAgIHJldHVybiBgJHt5ZWFyfS0ke21vbnRoU3RyfS0ke2RheVN0cn1gXG4gIH0sXG5cbiAgLyoqIOWHhuWkh+aPkOS6pCAqL1xuICBvblN1Ym1pdChlOiBhbnkpOiBhbnkge1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICBjb25zdCB2YWx1ZSA9IGUuZGV0YWlsLnZhbHVlO1xuXG4gICAgaWYgKCF1dGlscy52YWxpZGF0ZUVtcHR5KHZhbHVlLm5pY2tOYW1lLCAn6K+36L6T5YWl5pi156ewJykgfHxcbiAgICAgICghdXRpbHMudmFsaWRhdGVFbXB0eSh2YWx1ZS53ZUNoYXRJZCwgJ+ivt+i+k+WFpeW+ruS/oeWPtycpIHx8XG4gICAgICAhdXRpbHMudmFsaWRhdGVFbXB0eSh2YWx1ZS5nZW5kZXIsICfor7fpgInmi6nmgKfliKsnKSB8fFxuICAgICAgIXV0aWxzLnZhbGlkYXRlRW1wdHkodmFsdWUuYmlydGgsICfor7fpgInmi6nnlJ/ml6UnKSB8fFxuICAgICAgIXV0aWxzLnZhbGlkYXRlRW1wdHkodmFsdWUuaGVpZ2h0LCAn6K+36L6T5YWl6Lqr6auYJykgfHxcbiAgICAgICF1dGlscy52YWxpZGF0ZUVtcHR5KHZhbHVlLnNhbGFyeSwgJ+ivt+mAieaLqeaUtuWFpScpIHx8XG4gICAgICAhdXRpbHMudmFsaWRhdGVFbXB0eSh0aGlzLmRhdGEud29ya1Byb3ZpbmNlLCAn6K+36YCJ5oup5bel5L2c5omA5Zyo5ZywJykgfHxcbiAgICAgICF1dGlscy52YWxpZGF0ZUVtcHR5KHRoaXMuZGF0YS5lZHVjYXRpb24sICfor7fpgInmi6nlrabljoYnKSB8fFxuICAgICAgIXV0aWxzLnZhbGlkYXRlRW1wdHkodGhpcy5kYXRhLmlzTWFycmlhZ2UsICfor7fpgInmi6nlqZrlp7vnirblhrUnKSB8fFxuICAgICAgIXV0aWxzLnZhbGlkYXRlRW1wdHkodGhpcy5kYXRhLmhhc0NoaWxkLCAn6K+36YCJ5oup5piv5ZCm5pyJ5a2p5a2QJykgfHxcbiAgICAgICF1dGlscy52YWxpZGF0ZUVtcHR5KHRoaXMuZGF0YS53YW50Q2hpbGQsICfor7fpgInmi6nmmK/lkKbmg7PopoHlranlrZAnKSB8fFxuICAgICAgLy8gIXV0aWxzLnZhbGlkYXRlRW1wdHkodGhpcy5kYXRhLmpvYkdlbmVyYWwsICfor7fpgInmi6nogYzkuJonKSB8fFxuICAgICAgIXV0aWxzLnZhbGlkYXRlRW1wdHkodGhpcy5kYXRhLmhhdmVIb3VzZSwgJ+ivt+mAieaLqeS5sOaIv+aDheWGtScpKSkge1xuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdGhhdC5kb1N1Ym1pdChlKTtcbiAgfSxcblxuICAvKiogdXBkYXRlICovXG4gIGRvU3VibWl0KGU6IGFueSkge1xuICAgIGNvbnN0IHBhcmFtcyA9IGUuZGV0YWlsLnZhbHVlO1xuICAgIGNvbnN0IHsgdXNlckluZm8gfSA9IHRoaXMuZGF0YTtcbiAgICBjb25zdCBkYXRhUGFyYW1zID0ge1xuICAgICAgd29ya1Byb3ZpbmNlOiB0aGlzLmRhdGEud29ya1Byb3ZpbmNlLFxuICAgICAgd29ya0NpdHk6IHRoaXMuZGF0YS53b3JrQ2l0eSxcbiAgICAgIHdvcmtSZWdpb246IHRoaXMuZGF0YS53b3JrUmVnaW9uLFxuICAgICAgam9iR2VuZXJhbDogdGhpcy5kYXRhLmpvYkdlbmVyYWwsXG4gICAgICBqb2JEZXRhaWw6IHRoaXMuZGF0YS5qb2JEZXRhaWwsXG4gICAgfVxuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgc3VibWl0RGlzYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIEFwaS51cGRhdGVVc2VyKE9iamVjdC5hc3NpZ24odXNlckluZm8sIHBhcmFtcywgZGF0YVBhcmFtcykpLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICB3eC5oaWRlTG9hZGluZygpOyBcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICBzdWJtaXREaXNhYmxlOiB0cnVlXG4gICAgICB9KTsgICAgIFxuICAgICAgaWYgKHJlc3VsdC5jb2RlID09PSAyMDApIHtcbiAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICB0aXRsZTogJ+abtOaWsOaIkOWKnycsXG4gICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgIGR1cmF0aW9uOiAxMDAwLFxuICAgICAgICAgIG1hc2s6IHRydWVcbiAgICAgICAgfSlcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgd3guc3dpdGNoVGFiKHtcbiAgICAgICAgICAgIHVybDogYC4uL215SG9tZS9teUhvbWVgLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHV0aWxzLnNob3dNb2RhbCgn57O757uf5byC5bi477yM6K+356iN5ZCO5YaN6K+VJyk7XG4gICAgICB9XG4gICAgfSlcbiAgfSxcblxuICAvKiog55Sf5pelICovXG4gIGJpbmRCaXJ0aENoYW5nZShlOiBhbnkpIHtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIGJpcnRoOiBlLmRldGFpbC52YWx1ZVxuICAgIH0pXG4gIH0sXG5cbiAgYmluZEVkdWNhdGlvbkNoYW5nZShlOiBhbnkpIHtcbiAgICBjb25zdCB7IGVkdWNhdGlvbkFycmF5IH0gPSB0aGlzLmRhdGFcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIGVkdWNhdGlvbjogZWR1Y2F0aW9uQXJyYXlbZS5kZXRhaWwudmFsdWVdXG4gICAgfSlcbiAgfSxcblxuICAvKiog5ama5ae7ICovXG4gIGJpbmRNYXJyaWFnZUNoYW5nZShlOiBhbnkpIHtcbiAgICBjb25zdCB7IGlzTWFycmlhZ2VBcnJheSB9ID0gdGhpcy5kYXRhXG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBpc01hcnJpYWdlOiBpc01hcnJpYWdlQXJyYXlbZS5kZXRhaWwudmFsdWVdXG4gICAgfSlcbiAgfSxcblxuICBiaW5kSGFzQ2hpbGRDaGFuZ2UoZTogYW55KSB7XG4gICAgY29uc3QgeyBoYXNDaGlsZEFycmF5IH0gPSB0aGlzLmRhdGFcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIGhhc0NoaWxkOiBoYXNDaGlsZEFycmF5W2UuZGV0YWlsLnZhbHVlXVxuICAgIH0pXG4gIH0sXG5cbiAgYmluZFdhbnRDaGlsZENoYW5nZShlOiBhbnkpIHtcbiAgICBjb25zdCB7IHdhbnRDaGlsZEFycmF5IH0gPSB0aGlzLmRhdGFcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIHdhbnRDaGlsZDogd2FudENoaWxkQXJyYXlbZS5kZXRhaWwudmFsdWVdXG4gICAgfSlcbiAgfSxcblxuICAvKiog5Lmw5oi/ICovXG4gIGJpbmRIYXZlSG91c2VDaGFuZ2UoZTogYW55KSB7XG4gICAgY29uc3QgeyBoYXZlSG91c2VBcnJheSB9ID0gdGhpcy5kYXRhXG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBoYXZlSG91c2U6IGhhdmVIb3VzZUFycmF5W2UuZGV0YWlsLnZhbHVlXVxuICAgIH0pXG4gIH0sXG5cbiAgLyoqIOaAp+WIqyAqL1xuICBiaW5kR2VuZGVyQ2hhbmdlKGU6IGFueSkge1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgZ2VuZGVyOiBwYXJzZUludChlLmRldGFpbC52YWx1ZSkgKyAxXG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqIOaciOaUtuWFpSAqL1xuICBiaW5kU2FsYXJ5Q2hhbmdlKGU6IGFueSkge1xuICAgIGNvbnN0IHsgc2FsYXJ5QXJyYXkgfSA9IHRoaXMuZGF0YVxuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgc2FsYXJ5OiBzYWxhcnlBcnJheVtlLmRldGFpbC52YWx1ZV1cbiAgICB9KTtcbiAgfSxcblxuICAvKiog5bel5L2c5Zyw5Yy6ICovXG4gIGJpbmRSZWdpb25DaGFuZ2U6IGZ1bmN0aW9uIChlOmFueSkge1xuICAgIGxldCByZWdpb24gPSBlLmRldGFpbC52YWx1ZTtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIHJlZ2lvbixcbiAgICAgIHdvcmtQcm92aW5jZTogcmVnaW9uWzBdLFxuICAgICAgd29ya0NpdHk6IHJlZ2lvblsxXSxcbiAgICAgIHdvcmtSZWdpb246IHJlZ2lvblsyXSxcbiAgICB9KTtcbiAgfSxcblxuICBiaW5kTXVsdGlQaWNrZXJDaGFuZ2U6IGZ1bmN0aW9uIChlOiBhbnkpIHtcbiAgICBjb25zdCB7IG11bHRpQXJyYXkgfSA9IHRoaXMuZGF0YTtcbiAgICBsZXQgbXVsdGlJbmRleCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgbXVsdGlJbmRleCxcbiAgICAgIGpvYkdlbmVyYWw6IG11bHRpQXJyYXlbMF1bbXVsdGlJbmRleFswXV0sXG4gICAgICBqb2JEZXRhaWw6IG11bHRpQXJyYXlbMV1bbXVsdGlJbmRleFsxXV0sXG4gICAgfSlcbiAgfSxcblxuICBiaW5kTXVsdGlQaWNrZXJDb2x1bW5DaGFuZ2U6IGZ1bmN0aW9uIChlOiBhbnkpIHtcbiAgICBjb25zdCB7IG11bHRpQXJyYXksIG11bHRpSW5kZXggfSA9IHRoaXMuZGF0YTtcbiAgICBtdWx0aUluZGV4W2UuZGV0YWlsLmNvbHVtbl0gPSBlLmRldGFpbC52YWx1ZTtcbiAgICBpZiAoZS5kZXRhaWwuY29sdW1uID09PSAwKSB7XG4gICAgICBtdWx0aUFycmF5WzFdID0gW107XG4gICAgICBqb2JKc29uLmRhdGFbbXVsdGlJbmRleFswXSB8fCAwXS5kYXRhLmZvckVhY2goKGl0ZW06IGFueSkgPT4ge1xuICAgICAgICBtdWx0aUFycmF5WzFdLnB1c2goaXRlbS5uYW1lKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIG11bHRpQXJyYXksXG4gICAgICAvLyBtdWx0aUluZGV4LFxuICAgIH0pO1xuICB9LFxuICBiaW5kRGF0ZUNoYW5nZTogZnVuY3Rpb24gKGU6YW55KSB7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBkYXRlOiBlLmRldGFpbC52YWx1ZVxuICAgIH0pXG4gIH0sXG4gXG59KSJdfQ==