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
        isMarriageArray: ['未婚', '离婚'],
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
        console.log(multiArray);
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
                console.log('data', this.data);
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
            !utils.validateEmpty(value.gender, '请选择性别') ||
            !utils.validateEmpty(value.birth, '请选择生日') ||
            !utils.validateEmpty(value.height, '请输入身高') ||
            !utils.validateEmpty(value.salary, '请选择收入') ||
            !utils.validateEmpty(this.data.workProvince, '请选择工作所在地') ||
            !utils.validateEmpty(this.data.education, '请选择学历') ||
            !utils.validateEmpty(this.data.isMarriage, '请选择婚姻状况') ||
            !utils.validateEmpty(this.data.hasChild, '请选择是否有孩子') ||
            !utils.validateEmpty(this.data.wantChild, '请选择是否想要孩子') ||
            !utils.validateEmpty(this.data.haveHouse, '请选择买房情况')) {
            return false;
        }
        that.doSubmit(e);
    },
    doSubmit(e) {
        const params = e.detail.value;
        console.log(e.detail.value);
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
        console.log(Object.assign(userInfo, params, dataParams));
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
        console.log('picker发送选择改变，携带值为', e.detail.value);
        this.setData({
            gender: parseInt(e.detail.value) + 1
        });
        console.log('parseInt(e.detail.value)', (parseInt(e.detail.value) + 1));
    },
    bindSalaryChange(e) {
        const { salaryArray } = this.data;
        this.setData({
            salary: salaryArray[e.detail.value]
        });
    },
    bindRegionChange: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value);
        let region = e.detail.value;
        this.setData({
            region,
            workProvince: region[0],
            workCity: region[1],
            workRegion: region[2],
        });
    },
    bindMultiPickerChange: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value);
        const { multiArray } = this.data;
        let multiIndex = e.detail.value;
        this.setData({
            multiIndex,
            jobGeneral: multiArray[0][multiIndex[0]],
            jobDetail: multiArray[1][multiIndex[1]],
        });
    },
    bindMultiPickerColumnChange: function (e) {
        console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
        const { multiArray, multiIndex } = this.data;
        multiIndex[e.detail.column] = e.detail.value;
        if (e.detail.column === 0) {
            multiArray[1] = [];
            console.log(jobJson_1.default.data[multiIndex[0] || 0].data);
            jobJson_1.default.data[multiIndex[0] || 0].data.forEach((item) => {
                multiArray[1].push(item.name);
            });
        }
        this.setData({
            multiArray,
        });
    },
    bindDateChange: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value);
        this.setData({
            date: e.detail.value
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZWdpc3Rlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLGlEQUFpRDtBQUNqRCwyQ0FBMkM7QUFDM0MsdURBQWdEO0FBRWhELE1BQU0sR0FBRyxHQUFHLE1BQU0sRUFBVSxDQUFDO0FBRTdCLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLFFBQVEsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUU7UUFDeEIsUUFBUSxFQUFFLEVBQUU7UUFDWixNQUFNLEVBQUUsRUFBRTtRQUNWLEtBQUssRUFBRSxFQUFFO1FBQ1QsTUFBTSxFQUFFLEVBQUU7UUFDVixNQUFNLEVBQUUsRUFBRTtRQUNWLE1BQU0sRUFBRSxFQUFFO1FBQ1YsUUFBUSxFQUFFLEVBQUU7UUFDWixZQUFZLEVBQUUsRUFBRTtRQUNoQixVQUFVLEVBQUUsRUFBRTtRQUNkLFVBQVUsRUFBRSxFQUFFO1FBQ2QsU0FBUyxFQUFFLEVBQUU7UUFDYixRQUFRLEVBQUUsRUFBRTtRQUNaLFNBQVMsRUFBRSxFQUFFO1FBQ2IsVUFBVSxFQUFFLEVBQUU7UUFDZCxTQUFTLEVBQUUsRUFBRTtRQUNiLFNBQVMsRUFBRSxFQUFFO1FBQ2IsV0FBVyxFQUFFLENBQUM7UUFDZCxXQUFXLEVBQUUsQ0FBQztRQUNkLE9BQU8sRUFBRSxFQUFFO1FBQ1gsYUFBYSxFQUFFLEtBQUs7UUFDcEIsZUFBZSxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQztRQUM3QixXQUFXLEVBQUUsQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDO1FBQ3RCLFdBQVcsRUFBRTtZQUNYLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNO1NBQzFDO1FBQ0QsY0FBYyxFQUFFO1lBQ2QsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSTtTQUMzQztRQUNELGFB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QUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hDLENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osVUFBVTtTQUVYLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxjQUFjLEVBQUUsVUFBVSxDQUFLO1FBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNoRCxJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSztTQUNyQixDQUFDLENBQUE7SUFDSixDQUFDO0NBRUYsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgKiBhcyBBcGkgZnJvbSAnLi4vLi4vc2VydmljZS9hcGkuc2VydmljZSc7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XG5pbXBvcnQgam9iSnNvbiBmcm9tICcuLi8uLi9wdWJsaWMvanNvbi9qb2JKc29uJztcbmltcG9ydCB7IElNeUFwcCB9IGZyb20gJy4uLy4uL2FwcCc7XG5jb25zdCBhcHAgPSBnZXRBcHA8SU15QXBwPigpO1xuXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIHVzZXJJbmZvOiB7IG9wZW5pZDogJycgfSxcbiAgICBuaWNrTmFtZTogJycsXG4gICAgZ2VuZGVyOiAnJywgXG4gICAgYmlydGg6ICcnLCAgICAgICAgICAgIC8vIOeUn+aXpVxuICAgIGhlaWdodDogJycsICAgICAgICAgICAvLyDouqvpq5hcbiAgICBzYWxhcnk6ICcnLCBcbiAgICByZWdpb246IFtdLFxuICAgIHdvcmtDaXR5OiAnJyxcbiAgICB3b3JrUHJvdmluY2U6ICcnLFxuICAgIHdvcmtSZWdpb246ICcnLFxuICAgIGlzTWFycmlhZ2U6ICcnLFxuICAgIGVkdWNhdGlvbjogJycsIFxuICAgIGhhc0NoaWxkOiAnJywgXG4gICAgd2FudENoaWxkOiAnJywgXG4gICAgam9iR2VuZXJhbDogJycsXG4gICAgam9iRGV0YWlsOiAnJyxcbiAgICBoYXZlSG91c2U6ICcnLCAgIFxuICAgIGdlbmRlckluZGV4OiAwLFxuICAgIHNhbGFyeUluZGV4OiAwLFxuICAgIGRhdGVOb3c6ICcnLFxuICAgIHN1Ym1pdERpc2FibGU6IGZhbHNlLFxuICAgIGlzTWFycmlhZ2VBcnJheTogWyfmnKrlqZonLCAn56a75amaJ10sXG4gICAgZ2VuZGVyQXJyYXk6IFsn55S3Jywn5aWzJ10sXG4gICAgc2FsYXJ5QXJyYXk6IFtcbiAgICAgICc15Y2D5Lul5LiLJywgJzXljYPvvZ4x5LiHJywgJzHkuIfvvZ4y5LiHJywgJzLkuIfvvZ415LiHJywgJzXkuIfku6XkuIonXG4gICAgXSxcbiAgICBlZHVjYXRpb25BcnJheTogW1xuICAgICAgJ+Wwj+WtpicsICfliJ3kuK0nLCAn6auY5LitJywgJ+Wkp+S4kycsICflpKflrabmnKznp5EnLCAn56GV5aOrJywgJ+WNmuWjqydcbiAgICBdLFxuICAgIGhhc0NoaWxkQXJyYXk6IFsn5ZCmJywgJ+aYryddLFxuICAgIHdhbnRDaGlsZEFycmF5OiBbJ+aYrycsICflkKYnXSxcbiAgICBoYXZlSG91c2VBcnJheTogWyflt7LkubDmiL8nLCAn5pyq5Lmw5oi/J10sXG4gICAgbXVsdGlJbmRleDogWywgXSxcbiAgICBtdWx0aUFycmF5OiBbW10sW11dIGFzIGFueSxcbiAgICBqb2JKc29uOiBqb2JKc29uLFxuICB9LFxuXG4gIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IG11bHRpQXJyYXkgPSBbW10sIFtdXSBhcyBhbnk7XG4gICAgam9iSnNvbi5kYXRhLmZvckVhY2goKGl0ZW06IGFueSkgPT4ge1xuICAgICAgbXVsdGlBcnJheVswXS5wdXNoKGl0ZW0ubmFtZSk7XG4gICAgfSk7XG4gICAgam9iSnNvbi5kYXRhWzBdLmRhdGEuZm9yRWFjaCgoaXRlbTogYW55KSA9PiB7XG4gICAgICBtdWx0aUFycmF5WzFdLnB1c2goaXRlbS5uYW1lKTtcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhtdWx0aUFycmF5KTtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIG11bHRpQXJyYXksXG4gICAgICBkYXRlTm93OiB0aGlzLmdldFlNRChuZXcgRGF0ZSgpKVxuICAgIH0pO1xuICAgIHRoaXMuZ2V0VXNlckluZm8oKTtcbiAgfSxcblxuICAvKiog55So5oi36K+m5oOFICovXG4gIGdldFVzZXJJbmZvKCkge1xuICAgIGNvbnN0IG9wZW5pZCA9IGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvLm9wZW5pZDtcbiAgICBBcGkuZ2V0VXNlckluZm8ob3BlbmlkIHx8ICcnKS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgICB1c2VySW5mbzogcmVzdWx0LmRhdGEsXG4gICAgICAgICAgbmlja05hbWU6IHJlc3VsdC5kYXRhLm5pY2tOYW1lLFxuICAgICAgICAgIGdlbmRlcjogcmVzdWx0LmRhdGEuZ2VuZGVyLFxuICAgICAgICAgIGJpcnRoOiByZXN1bHQuZGF0YS5iaXJ0aD90aGlzLmdldFlNRChyZXN1bHQuZGF0YS5iaXJ0aCk6JycsICAgICAgICAvLyDnlJ/ml6VcbiAgICAgICAgICBoZWlnaHQ6IHJlc3VsdC5kYXRhLmhlaWdodCwgICAgICAgICAgICAgICAgICAgLy8g6Lqr6auYXG4gICAgICAgICAgc2FsYXJ5OiByZXN1bHQuZGF0YS5zYWxhcnksXG4gICAgICAgICAgd29ya1Byb3ZpbmNlOiByZXN1bHQuZGF0YS53b3JrUHJvdmluY2UsXG4gICAgICAgICAgd29ya0NpdHk6IHJlc3VsdC5kYXRhLndvcmtDaXR5LFxuICAgICAgICAgIHdvcmtSZWdpb246IHJlc3VsdC5kYXRhLndvcmtSZWdpb24sICAgICAgICBcbiAgICAgICAgICBpc01hcnJpYWdlOiByZXN1bHQuZGF0YS5pc01hcnJpYWdlLCAgICAgICAgICAgLy8g5ama5ae754q25Ya1XG4gICAgICAgICAgZWR1Y2F0aW9uOiByZXN1bHQuZGF0YS5lZHVjYXRpb24sICAgICAgICAgICAgIC8vIOaVmeiCslxuICAgICAgICAgIGhhc0NoaWxkOiByZXN1bHQuZGF0YS5oYXNDaGlsZCxcbiAgICAgICAgICB3YW50Q2hpbGQ6IHJlc3VsdC5kYXRhLndhbnRDaGlsZCxcbiAgICAgICAgICBqb2JHZW5lcmFsOiByZXN1bHQuZGF0YS5qb2JHZW5lcmFsLFxuICAgICAgICAgIGpvYkRldGFpbDogcmVzdWx0LmRhdGEuam9iRGV0YWlsLFxuICAgICAgICAgIGhhdmVIb3VzZTogcmVzdWx0LmRhdGEuaGF2ZUhvdXNlLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2coJ2RhdGEnLCB0aGlzLmRhdGEpO1xuICAgICAgfVxuICAgIH0pXG4gIH0sXG5cbiAgZ2V0WU1EKGRhdGVTdHI6IGFueSkge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkYXRlU3RyKTtcbiAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIGxldCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XG4gICAgbGV0IG1vbnRoU3RyID0gbW9udGggPD0gOSA/IGAwJHttb250aH1gIDogbW9udGg7XG4gICAgbGV0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xuICAgIGxldCBkYXlTdHIgPSBkYXkgPD0gOSA/IGAwJHtkYXl9YCA6IGRheTtcbiAgICByZXR1cm4gYCR7eWVhcn0tJHttb250aFN0cn0tJHtkYXlTdHJ9YFxuICB9LFxuXG4gIC8qKiDlh4blpIfmj5DkuqQgKi9cbiAgb25TdWJtaXQoZTogYW55KTogYW55IHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgY29uc3QgdmFsdWUgPSBlLmRldGFpbC52YWx1ZTtcblxuICAgIGlmICghdXRpbHMudmFsaWRhdGVFbXB0eSh2YWx1ZS5uaWNrTmFtZSwgJ+ivt+i+k+WFpeaYteensCcpIHx8XG4gICAgICAhdXRpbHMudmFsaWRhdGVFbXB0eSh2YWx1ZS5nZW5kZXIsICfor7fpgInmi6nmgKfliKsnKSB8fFxuICAgICAgIXV0aWxzLnZhbGlkYXRlRW1wdHkodmFsdWUuYmlydGgsICfor7fpgInmi6nnlJ/ml6UnKSB8fFxuICAgICAgIXV0aWxzLnZhbGlkYXRlRW1wdHkodmFsdWUuaGVpZ2h0LCAn6K+36L6T5YWl6Lqr6auYJykgfHxcbiAgICAgICF1dGlscy52YWxpZGF0ZUVtcHR5KHZhbHVlLnNhbGFyeSwgJ+ivt+mAieaLqeaUtuWFpScpIHx8XG4gICAgICAhdXRpbHMudmFsaWRhdGVFbXB0eSh0aGlzLmRhdGEud29ya1Byb3ZpbmNlLCAn6K+36YCJ5oup5bel5L2c5omA5Zyo5ZywJykgfHxcbiAgICAgICF1dGlscy52YWxpZGF0ZUVtcHR5KHRoaXMuZGF0YS5lZHVjYXRpb24sICfor7fpgInmi6nlrabljoYnKSB8fFxuICAgICAgIXV0aWxzLnZhbGlkYXRlRW1wdHkodGhpcy5kYXRhLmlzTWFycmlhZ2UsICfor7fpgInmi6nlqZrlp7vnirblhrUnKSB8fFxuICAgICAgIXV0aWxzLnZhbGlkYXRlRW1wdHkodGhpcy5kYXRhLmhhc0NoaWxkLCAn6K+36YCJ5oup5piv5ZCm5pyJ5a2p5a2QJykgfHxcbiAgICAgICF1dGlscy52YWxpZGF0ZUVtcHR5KHRoaXMuZGF0YS53YW50Q2hpbGQsICfor7fpgInmi6nmmK/lkKbmg7PopoHlranlrZAnKSB8fFxuICAgICAgLy8gIXV0aWxzLnZhbGlkYXRlRW1wdHkodGhpcy5kYXRhLmpvYkdlbmVyYWwsICfor7fpgInmi6nogYzkuJonKSB8fFxuICAgICAgIXV0aWxzLnZhbGlkYXRlRW1wdHkodGhpcy5kYXRhLmhhdmVIb3VzZSwgJ+ivt+mAieaLqeS5sOaIv+aDheWGtScpKSB7XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB0aGF0LmRvU3VibWl0KGUpO1xuICB9LFxuXG4gIC8qKiB1cGRhdGUgKi9cbiAgZG9TdWJtaXQoZTogYW55KSB7XG4gICAgY29uc3QgcGFyYW1zID0gZS5kZXRhaWwudmFsdWU7XG4gICAgY29uc29sZS5sb2coZS5kZXRhaWwudmFsdWUpO1xuICAgIGNvbnN0IHsgdXNlckluZm8gfSA9IHRoaXMuZGF0YTtcbiAgICBjb25zdCBkYXRhUGFyYW1zID0ge1xuICAgICAgd29ya1Byb3ZpbmNlOiB0aGlzLmRhdGEud29ya1Byb3ZpbmNlLFxuICAgICAgd29ya0NpdHk6IHRoaXMuZGF0YS53b3JrQ2l0eSxcbiAgICAgIHdvcmtSZWdpb246IHRoaXMuZGF0YS53b3JrUmVnaW9uLFxuICAgICAgam9iR2VuZXJhbDogdGhpcy5kYXRhLmpvYkdlbmVyYWwsXG4gICAgICBqb2JEZXRhaWw6IHRoaXMuZGF0YS5qb2JEZXRhaWwsXG4gICAgfVxuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgc3VibWl0RGlzYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKE9iamVjdC5hc3NpZ24odXNlckluZm8sIHBhcmFtcywgZGF0YVBhcmFtcykpO1xuICAgIEFwaS51cGRhdGVVc2VyKE9iamVjdC5hc3NpZ24odXNlckluZm8sIHBhcmFtcywgZGF0YVBhcmFtcykpLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICB3eC5oaWRlTG9hZGluZygpOyBcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICBzdWJtaXREaXNhYmxlOiB0cnVlXG4gICAgICB9KTsgICAgIFxuICAgICAgaWYgKHJlc3VsdC5jb2RlID09PSAyMDApIHtcbiAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICB0aXRsZTogJ+abtOaWsOaIkOWKnycsXG4gICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgIGR1cmF0aW9uOiAxMDAwLFxuICAgICAgICAgIG1hc2s6IHRydWVcbiAgICAgICAgfSlcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgd3guc3dpdGNoVGFiKHtcbiAgICAgICAgICAgIHVybDogYC4uL215SG9tZS9teUhvbWVgLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHV0aWxzLnNob3dNb2RhbCgn57O757uf5byC5bi477yM6K+356iN5ZCO5YaN6K+VJyk7XG4gICAgICB9XG4gICAgfSlcbiAgfSxcblxuICAvKiog55Sf5pelICovXG4gIGJpbmRCaXJ0aENoYW5nZShlOiBhbnkpIHtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIGJpcnRoOiBlLmRldGFpbC52YWx1ZVxuICAgIH0pXG4gIH0sXG5cbiAgYmluZEVkdWNhdGlvbkNoYW5nZShlOiBhbnkpIHtcbiAgICBjb25zdCB7IGVkdWNhdGlvbkFycmF5IH0gPSB0aGlzLmRhdGFcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIGVkdWNhdGlvbjogZWR1Y2F0aW9uQXJyYXlbZS5kZXRhaWwudmFsdWVdXG4gICAgfSlcbiAgfSxcblxuICAvKiog5ama5ae7ICovXG4gIGJpbmRNYXJyaWFnZUNoYW5nZShlOiBhbnkpIHtcbiAgICBjb25zdCB7IGlzTWFycmlhZ2VBcnJheSB9ID0gdGhpcy5kYXRhXG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBpc01hcnJpYWdlOiBpc01hcnJpYWdlQXJyYXlbZS5kZXRhaWwudmFsdWVdXG4gICAgfSlcbiAgfSxcblxuICBiaW5kSGFzQ2hpbGRDaGFuZ2UoZTogYW55KSB7XG4gICAgY29uc3QgeyBoYXNDaGlsZEFycmF5IH0gPSB0aGlzLmRhdGFcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIGhhc0NoaWxkOiBoYXNDaGlsZEFycmF5W2UuZGV0YWlsLnZhbHVlXVxuICAgIH0pXG4gIH0sXG5cbiAgYmluZFdhbnRDaGlsZENoYW5nZShlOiBhbnkpIHtcbiAgICBjb25zdCB7IHdhbnRDaGlsZEFycmF5IH0gPSB0aGlzLmRhdGFcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIHdhbnRDaGlsZDogd2FudENoaWxkQXJyYXlbZS5kZXRhaWwudmFsdWVdXG4gICAgfSlcbiAgfSxcblxuICAvKiog5Lmw5oi/ICovXG4gIGJpbmRIYXZlSG91c2VDaGFuZ2UoZTogYW55KSB7XG4gICAgY29uc3QgeyBoYXZlSG91c2VBcnJheSB9ID0gdGhpcy5kYXRhXG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBoYXZlSG91c2U6IGhhdmVIb3VzZUFycmF5W2UuZGV0YWlsLnZhbHVlXVxuICAgIH0pXG4gIH0sXG5cbiAgLyoqIOaAp+WIqyAqL1xuICBiaW5kR2VuZGVyQ2hhbmdlKGU6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKCdwaWNrZXLlj5HpgIHpgInmi6nmlLnlj5jvvIzmkLrluKblgLzkuLonLCBlLmRldGFpbC52YWx1ZSlcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIGdlbmRlcjogcGFyc2VJbnQoZS5kZXRhaWwudmFsdWUpICsgMVxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKCdwYXJzZUludChlLmRldGFpbC52YWx1ZSknLCAocGFyc2VJbnQoZS5kZXRhaWwudmFsdWUpICsgMSkpXG4gIH0sXG5cbiAgLyoqIOaciOaUtuWFpSAqL1xuICBiaW5kU2FsYXJ5Q2hhbmdlKGU6IGFueSkge1xuICAgIGNvbnN0IHsgc2FsYXJ5QXJyYXkgfSA9IHRoaXMuZGF0YVxuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgc2FsYXJ5OiBzYWxhcnlBcnJheVtlLmRldGFpbC52YWx1ZV1cbiAgICB9KTtcbiAgfSxcblxuICAvKiog5bel5L2c5Zyw5Yy6ICovXG4gIGJpbmRSZWdpb25DaGFuZ2U6IGZ1bmN0aW9uIChlOmFueSkge1xuICAgIGNvbnNvbGUubG9nKCdwaWNrZXLlj5HpgIHpgInmi6nmlLnlj5jvvIzmkLrluKblgLzkuLonLCBlLmRldGFpbC52YWx1ZSlcbiAgICBsZXQgcmVnaW9uID0gZS5kZXRhaWwudmFsdWU7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICByZWdpb24sXG4gICAgICB3b3JrUHJvdmluY2U6IHJlZ2lvblswXSxcbiAgICAgIHdvcmtDaXR5OiByZWdpb25bMV0sXG4gICAgICB3b3JrUmVnaW9uOiByZWdpb25bMl0sXG4gICAgfSk7XG4gIH0sXG5cbiAgYmluZE11bHRpUGlja2VyQ2hhbmdlOiBmdW5jdGlvbiAoZTogYW55KSB7XG4gICAgY29uc29sZS5sb2coJ3BpY2tlcuWPkemAgemAieaLqeaUueWPmO+8jOaQuuW4puWAvOS4uicsIGUuZGV0YWlsLnZhbHVlKTtcbiAgICBjb25zdCB7IG11bHRpQXJyYXkgfSA9IHRoaXMuZGF0YTtcbiAgICBsZXQgbXVsdGlJbmRleCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgbXVsdGlJbmRleCxcbiAgICAgIGpvYkdlbmVyYWw6IG11bHRpQXJyYXlbMF1bbXVsdGlJbmRleFswXV0sXG4gICAgICBqb2JEZXRhaWw6IG11bHRpQXJyYXlbMV1bbXVsdGlJbmRleFsxXV0sXG4gICAgfSlcbiAgfSxcblxuICBiaW5kTXVsdGlQaWNrZXJDb2x1bW5DaGFuZ2U6IGZ1bmN0aW9uIChlOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZygn5L+u5pS555qE5YiX5Li6JywgZS5kZXRhaWwuY29sdW1uLCAn77yM5YC85Li6JywgZS5kZXRhaWwudmFsdWUpO1xuICAgIGNvbnN0IHsgbXVsdGlBcnJheSwgbXVsdGlJbmRleCB9ID0gdGhpcy5kYXRhO1xuICAgIG11bHRpSW5kZXhbZS5kZXRhaWwuY29sdW1uXSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgIGlmIChlLmRldGFpbC5jb2x1bW4gPT09IDApIHtcbiAgICAgIG11bHRpQXJyYXlbMV0gPSBbXTtcbiAgICAgIGNvbnNvbGUubG9nKGpvYkpzb24uZGF0YVttdWx0aUluZGV4WzBdIHx8IDBdLmRhdGEpO1xuICAgICAgam9iSnNvbi5kYXRhW211bHRpSW5kZXhbMF0gfHwgMF0uZGF0YS5mb3JFYWNoKChpdGVtOiBhbnkpID0+IHtcbiAgICAgICAgbXVsdGlBcnJheVsxXS5wdXNoKGl0ZW0ubmFtZSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBtdWx0aUFycmF5LFxuICAgICAgLy8gbXVsdGlJbmRleCxcbiAgICB9KTtcbiAgfSxcbiAgYmluZERhdGVDaGFuZ2U6IGZ1bmN0aW9uIChlOmFueSkge1xuICAgIGNvbnNvbGUubG9nKCdwaWNrZXLlj5HpgIHpgInmi6nmlLnlj5jvvIzmkLrluKblgLzkuLonLCBlLmRldGFpbC52YWx1ZSlcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIGRhdGU6IGUuZGV0YWlsLnZhbHVlXG4gICAgfSlcbiAgfSxcbiBcbn0pIl19