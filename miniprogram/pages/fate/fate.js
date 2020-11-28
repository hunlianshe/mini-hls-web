"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Api = require("../../service/api.service");
const utils_1 = require("../../utils/utils");
const topMenuList_1 = require("./topMenuList");
const app = getApp();
Page({
    data: {
        userInfo: {},
        userList: [],
        curruserList: [],
        dataAlready: false,
        currentCity: "",
        selectValue: "",
        currentQrcode: "",
        currentPhone: "",
        phone: "",
        popHidden: true,
        pageLoaded: false,
        popWechat: false,
        currentPage: 1,
        pageSize: 10,
        totalCount: 0,
        pullDown: false,
        pullUp: false,
        showDialog: false,
        topMenuContent: {
            ageArray: topMenuList_1.getAgeMenuList(),
            heightArray: topMenuList_1.getHeightMenuList(),
            salaryArray: ["5千以下", "5千～1万", "1万～2万", "2万～5万", "5万以上"],
        },
        showSelect: false,
        optionType: '',
        selection: '',
    },
    onLoad() {
        let _this = this;
        wx.getStorage({
            key: "user",
            success: function (res) {
                _this.setData({
                    userInfo: res.data,
                });
            },
        });
        this.getUserList({});
        this.setData({
            pageLoaded: true,
        });
    },
    userDetail(e) {
        const { openid } = e.currentTarget.dataset;
        wx.navigateTo({
            url: `../userDetail/userDetail?openid=${openid}`,
        });
    },
    getUserList(params) {
        const { objectId } = params;
        Api.getUserList(params)
            .then((result) => {
            this.setData({
                dataAlready: true,
            });
            if (result.code === 200) {
                let dataList = objectId ? this.data.userList : [];
                dataList = dataList.concat(result.data);
                dataList.map((data) => {
                    if (data.age && !data.age.toString().includes("岁")) {
                        data.age = data.age + "岁";
                    }
                });
                dataList.map((item) => {
                    if (item.photos && item.photos.length === 0) {
                        item.photos.push(item.avatarUrl);
                    }
                    item.intro = [];
                    if (item.age) {
                        item.intro.push(item.age);
                    }
                    if (item.jobGeneral) {
                        item.intro.push(item.jobGeneral);
                    }
                    if (item.jobDetail) {
                        item.intro.push(item.jobDetail);
                    }
                    if (item.education) {
                        item.intro.push(item.education);
                    }
                    item.intro = item.intro.join(" | ");
                });
                const { currentPage } = this.data;
                this.setData({
                    userList: dataList,
                    currentPage: currentPage + 1,
                });
            }
        })
            .catch((err) => {
            console.log("get user List", err);
        });
    },
    goMatch() {
        let rightType = "fateMatch";
        if (utils_1.dealRightIntercept(rightType)) {
            this.setData({
                showDialog: true,
            });
            return;
        }
        utils_1.setRightStorage(rightType);
        let userInfo = app.globalData.userInfo;
        if (userInfo && userInfo.phone) {
            wx.navigateTo({
                url: "../matching/matching",
            });
        }
        else {
            wx.navigateTo({
                url: "../registerXz/registerXz",
            });
        }
    },
    onShow: function () {
        const { pageLoaded } = this.data;
        if (pageLoaded) {
            this.getUserList({});
        }
    },
    onPullDownRefresh: function () { },
    onReachBottom: function () {
        let rightType = "fateWatch";
        const { userList, currentPage, pageSize } = this.data;
        if (currentPage > 2 && utils_1.dealRightIntercept(rightType)) {
            this.setData({
                showDialog: true,
            });
            return;
        }
        utils_1.setRightStorage(rightType, currentPage * pageSize);
        const lastId = userList.length > 0 ? userList[userList.length - 1]._id : "";
        const { optionType, selection } = this.data;
        const params = this.dealWithRequestParameter(optionType, selection);
        params.objectId = lastId;
        this.getUserList(params);
    },
    closeDialog() {
        this.setData({
            showDialog: false,
        });
    },
    openSelect(e) {
        const optionTypedata = e.target.dataset.optionType;
        const { optionType } = this.data;
        if (optionTypedata === optionType) {
            this.setData({
                showSelect: false,
                optionType: '',
            });
            return;
        }
        this.setData({
            showSelect: true,
            optionType: optionTypedata,
        });
    },
    chooseTap(e) {
        const selection = e.target.dataset.selection;
        console.log(selection);
        this.setData({
            selection,
        });
        const { optionType } = this.data;
        const params = this.dealWithRequestParameter(optionType, selection);
        this.getUserList(params);
    },
    dealWithRequestParameter(optionType, selection) {
        const reqParams = {};
        switch (optionType) {
            case 'ageArray':
                reqParams.age = topMenuList_1.ageMenuList[selection];
                break;
            case 'heightArray':
                reqParams.height = topMenuList_1.heightMenuList[selection];
                break;
            case 'salaryArray':
                reqParams.salary = selection;
                break;
        }
        return reqParams;
    },
    onShareAppMessage: function (options) {
        console.log("onShareAppMessage options", options);
        return {};
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBaUQ7QUFDakQsNkNBQXdFO0FBRXhFLCtDQUE0RjtBQUM1RixNQUFNLEdBQUcsR0FBRyxNQUFNLEVBQVUsQ0FBQztBQUU3QixJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixRQUFRLEVBQUUsRUFBRTtRQUNaLFFBQVEsRUFBRSxFQUFXO1FBQ3JCLFlBQVksRUFBRSxFQUFFO1FBQ2hCLFdBQVcsRUFBRSxLQUFLO1FBQ2xCLFdBQVcsRUFBRSxFQUFFO1FBQ2YsV0FBVyxFQUFFLEVBQUU7UUFDZixhQUFhLEVBQUUsRUFBRTtRQUNqQixZQUFZLEVBQUUsRUFBRTtRQUNoQixLQUFLLEVBQUUsRUFBRTtRQUNULFNBQVMsRUFBRSxJQUFJO1FBQ2YsVUFBVSxFQUFFLEtBQUs7UUFDakIsU0FBUyxFQUFFLEtBQUs7UUFDaEIsV0FBVyxFQUFFLENBQUM7UUFDZCxRQUFRLEVBQUUsRUFBRTtRQUNaLFVBQVUsRUFBRSxDQUFDO1FBQ2IsUUFBUSxFQUFFLEtBQUs7UUFDZixNQUFNLEVBQUUsS0FBSztRQUNiLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLGNBQWMsRUFBRTtZQUNkLFFBQVEsRUFBRSw0QkFBYyxFQUFFO1lBQzFCLFdBQVcsRUFBRSwrQkFBaUIsRUFBRTtZQUNoQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDO1NBQ3pEO1FBQ0QsVUFBVSxFQUFFLEtBQUs7UUFDakIsVUFBVSxFQUFFLEVBQUU7UUFDZCxTQUFTLEVBQUUsRUFBRTtLQUNkO0lBRUQsTUFBTTtRQUNKLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztRQUNqQixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLE1BQU07WUFDWCxPQUFPLEVBQUUsVUFBVSxHQUFHO2dCQUNwQixLQUFL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ZXNDb250ZW50IjpbImltcG9ydCAqIGFzIEFwaSBmcm9tICcuLi8uLi9zZXJ2aWNlL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IGRlYWxSaWdodEludGVyY2VwdCwgc2V0UmlnaHRTdG9yYWdlIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xuaW1wb3J0IHsgSU15QXBwIH0gZnJvbSAnLi4vLi4vYXBwJztcbmltcG9ydCB7Z2V0QWdlTWVudUxpc3QsIGdldEhlaWdodE1lbnVMaXN0LCBhZ2VNZW51TGlzdCwgaGVpZ2h0TWVudUxpc3R9IGZyb20gJy4vdG9wTWVudUxpc3QnXG5jb25zdCBhcHAgPSBnZXRBcHA8SU15QXBwPigpO1xuXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIHVzZXJJbmZvOiB7fSxcbiAgICB1c2VyTGlzdDogW10gYXMgYW55W10sXG4gICAgY3VycnVzZXJMaXN0OiBbXSxcbiAgICBkYXRhQWxyZWFkeTogZmFsc2UsXG4gICAgY3VycmVudENpdHk6IFwiXCIsXG4gICAgc2VsZWN0VmFsdWU6IFwiXCIsXG4gICAgY3VycmVudFFyY29kZTogXCJcIixcbiAgICBjdXJyZW50UGhvbmU6IFwiXCIsXG4gICAgcGhvbmU6IFwiXCIsXG4gICAgcG9wSGlkZGVuOiB0cnVlLFxuICAgIHBhZ2VMb2FkZWQ6IGZhbHNlLFxuICAgIHBvcFdlY2hhdDogZmFsc2UsXG4gICAgY3VycmVudFBhZ2U6IDEsXG4gICAgcGFnZVNpemU6IDEwLCAvLyBkZWZhdWx0XG4gICAgdG90YWxDb3VudDogMCxcbiAgICBwdWxsRG93bjogZmFsc2UsXG4gICAgcHVsbFVwOiBmYWxzZSxcbiAgICBzaG93RGlhbG9nOiBmYWxzZSxcbiAgICB0b3BNZW51Q29udGVudDoge1xuICAgICAgYWdlQXJyYXk6IGdldEFnZU1lbnVMaXN0KCksXG4gICAgICBoZWlnaHRBcnJheTogZ2V0SGVpZ2h0TWVudUxpc3QoKSxcbiAgICAgIHNhbGFyeUFycmF5OiBbXCI15Y2D5Lul5LiLXCIsIFwiNeWNg++9njHkuIdcIiwgXCIx5LiH772eMuS4h1wiLCBcIjLkuIfvvZ415LiHXCIsIFwiNeS4h+S7peS4ilwiXSxcbiAgICB9LFxuICAgIHNob3dTZWxlY3Q6IGZhbHNlLFxuICAgIG9wdGlvblR5cGU6ICcnLFxuICAgIHNlbGVjdGlvbjogJycsXG4gIH0sXG5cbiAgb25Mb2FkKCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgd3guZ2V0U3RvcmFnZSh7XG4gICAgICBrZXk6IFwidXNlclwiLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICBfdGhpcy5zZXREYXRhISh7XG4gICAgICAgICAgdXNlckluZm86IHJlcy5kYXRhLFxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgdGhpcy5nZXRVc2VyTGlzdCh7fSk7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBwYWdlTG9hZGVkOiB0cnVlLFxuICAgIH0pO1xuICB9LFxuXG4gIC8qKiDor6bmg4UgKi9cbiAgdXNlckRldGFpbChlOiBhbnkpIHtcbiAgICBjb25zdCB7IG9wZW5pZCB9ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQ7XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6IGAuLi91c2VyRGV0YWlsL3VzZXJEZXRhaWw/b3BlbmlkPSR7b3BlbmlkfWAsXG4gICAgfSk7XG4gICAgLy8gd3gubmF2aWdhdGVUbyh7XG4gICAgLy8gICB1cmw6ICcuLi9yZWdpc3RlclBob25lL3JlZ2lzdGVyUGhvbmUnLFxuICAgIC8vIH0pXG4gIH0sXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvYmplY3RJZFxuICAgKiBwYWdlU2l6ZSDpu5jorqQgMTBcbiAgICovXG4gIGdldFVzZXJMaXN0KHBhcmFtczogYW55KSB7XG4gICAgLy8gY29uc3QgcGFyYW1zID0geyBvYmplY3RJZCB9O1xuICAgIGNvbnN0IHsgb2JqZWN0SWQgfSA9IHBhcmFtcztcbiAgICBBcGkuZ2V0VXNlckxpc3QocGFyYW1zKVxuICAgICAgLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgIGRhdGFBbHJlYWR5OiB0cnVlLFxuICAgICAgICB9KVxuICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT09IDIwMCkge1xuICAgICAgICAgIGxldCBkYXRhTGlzdCA9IG9iamVjdElkID8gdGhpcy5kYXRhLnVzZXJMaXN0IDogW107XG4gICAgICAgICAgZGF0YUxpc3QgPSBkYXRhTGlzdC5jb25jYXQocmVzdWx0LmRhdGEpO1xuICAgICAgICAgIGRhdGFMaXN0Lm1hcCgoZGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYgKGRhdGEuYWdlICYmICFkYXRhLmFnZS50b1N0cmluZygpLmluY2x1ZGVzKFwi5bKBXCIpKSB7XG4gICAgICAgICAgICAgIGRhdGEuYWdlID0gZGF0YS5hZ2UgKyBcIuWygVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGRhdGFMaXN0Lm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0ucGhvdG9zICYmIGl0ZW0ucGhvdG9zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICBpdGVtLnBob3Rvcy5wdXNoKGl0ZW0uYXZhdGFyVXJsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGl0ZW0uaW50cm8gPSBbXTtcbiAgICAgICAgICAgIGlmIChpdGVtLmFnZSkge1xuICAgICAgICAgICAgICBpdGVtLmludHJvLnB1c2goaXRlbS5hZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGl0ZW0uam9iR2VuZXJhbCkge1xuICAgICAgICAgICAgICBpdGVtLmludHJvLnB1c2goaXRlbS5qb2JHZW5lcmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpdGVtLmpvYkRldGFpbCkge1xuICAgICAgICAgICAgICBpdGVtLmludHJvLnB1c2goaXRlbS5qb2JEZXRhaWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGl0ZW0uZWR1Y2F0aW9uKSB7XG4gICAgICAgICAgICAgIGl0ZW0uaW50cm8ucHVzaChpdGVtLmVkdWNhdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpdGVtLmludHJvID0gaXRlbS5pbnRyby5qb2luKFwiIHwgXCIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNvbnN0IHsgY3VycmVudFBhZ2UgfSA9IHRoaXMuZGF0YTtcbiAgICAgICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgICAgIHVzZXJMaXN0OiBkYXRhTGlzdCxcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlOiBjdXJyZW50UGFnZSArIDEsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImdldCB1c2VyIExpc3RcIiwgZXJyKTtcbiAgICAgIH0pO1xuICB9LFxuXG4gIGdvTWF0Y2goKSB7XG4gICAgbGV0IHJpZ2h0VHlwZSA9IFwiZmF0ZU1hdGNoXCI7IC8vIOe8mOWIhuWMuemFjVxuICAgIGlmIChkZWFsUmlnaHRJbnRlcmNlcHQocmlnaHRUeXBlKSkge1xuICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgIHNob3dEaWFsb2c6IHRydWUsXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2V0UmlnaHRTdG9yYWdlKHJpZ2h0VHlwZSk7XG5cbiAgICBsZXQgdXNlckluZm8gPSBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbztcbiAgICBpZiAodXNlckluZm8gJiYgdXNlckluZm8ucGhvbmUpIHtcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IFwiLi4vbWF0Y2hpbmcvbWF0Y2hpbmdcIixcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiBcIi4uL3JlZ2lzdGVyWHovcmVnaXN0ZXJYelwiLFxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIG9uU2hvdzogZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHsgcGFnZUxvYWRlZCB9ID0gdGhpcy5kYXRhO1xuICAgIGlmIChwYWdlTG9hZGVkKSB7XG4gICAgICB0aGlzLmdldFVzZXJMaXN0KHt9KTtcbiAgICB9XG4gIH0sXG5cbiAgb25QdWxsRG93blJlZnJlc2g6IGZ1bmN0aW9uICgpIHt9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcbiAgICovXG4gIG9uUmVhY2hCb3R0b206IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgcmlnaHRUeXBlID0gXCJmYXRlV2F0Y2hcIjsgLy8g57yY5YiG5LiL5ruR5p+l55yL6ZmQ5Yi2XG4gICAgY29uc3QgeyB1c2VyTGlzdCwgY3VycmVudFBhZ2UsIHBhZ2VTaXplIH0gPSB0aGlzLmRhdGE7XG4gICAgaWYgKGN1cnJlbnRQYWdlID4gMiAmJiBkZWFsUmlnaHRJbnRlcmNlcHQocmlnaHRUeXBlKSkge1xuICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgIHNob3dEaWFsb2c6IHRydWUsXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2V0UmlnaHRTdG9yYWdlKHJpZ2h0VHlwZSwgY3VycmVudFBhZ2UgKiBwYWdlU2l6ZSk7XG4gICAgY29uc3QgbGFzdElkID0gdXNlckxpc3QubGVuZ3RoID4gMCA/IHVzZXJMaXN0W3VzZXJMaXN0Lmxlbmd0aCAtIDFdLl9pZCA6IFwiXCI7XG4gICAgXG4gICAgY29uc3QgeyBvcHRpb25UeXBlLCBzZWxlY3Rpb24gfSA9IHRoaXMuZGF0YTtcbiAgICBjb25zdCBwYXJhbXMgPSB0aGlzLmRlYWxXaXRoUmVxdWVzdFBhcmFtZXRlcihvcHRpb25UeXBlLCBzZWxlY3Rpb24pO1xuICAgIHBhcmFtcy5vYmplY3RJZCA9IGxhc3RJZDtcbiAgICB0aGlzLmdldFVzZXJMaXN0KHBhcmFtcyk7XG4gIH0sXG5cbiAgY2xvc2VEaWFsb2coKSB7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBzaG93RGlhbG9nOiBmYWxzZSxcbiAgICB9KTtcbiAgfSxcblxuICAvLyB0eXBlOiBhZ2VBcnJheSwgaGVpZ2h0QXJyYXksIHNhbGFyeUFycmF5XG4gIG9wZW5TZWxlY3QoZTogYW55KSB7XG4gICAgY29uc3Qgb3B0aW9uVHlwZWRhdGEgPSBlLnRhcmdldC5kYXRhc2V0Lm9wdGlvblR5cGU7XG4gICAgY29uc3QgeyBvcHRpb25UeXBlIH0gPSB0aGlzLmRhdGE7XG4gICAgaWYgKG9wdGlvblR5cGVkYXRhID09PSBvcHRpb25UeXBlKSB7XG4gICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgc2hvd1NlbGVjdDogZmFsc2UsXG4gICAgICAgIG9wdGlvblR5cGU6ICcnLFxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgc2hvd1NlbGVjdDogdHJ1ZSxcbiAgICAgIG9wdGlvblR5cGU6IG9wdGlvblR5cGVkYXRhLFxuICAgIH0pO1xuICB9LFxuXG4gIGNob29zZVRhcChlOiBhbnkpIHtcbiAgICBjb25zdCBzZWxlY3Rpb24gPSBlLnRhcmdldC5kYXRhc2V0LnNlbGVjdGlvbjtcbiAgICBjb25zb2xlLmxvZyhzZWxlY3Rpb24pO1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgc2VsZWN0aW9uLFxuICAgIH0pO1xuICAgIGNvbnN0IHsgb3B0aW9uVHlwZSB9ID0gdGhpcy5kYXRhO1xuICAgIGNvbnN0IHBhcmFtcyA9IHRoaXMuZGVhbFdpdGhSZXF1ZXN0UGFyYW1ldGVyKG9wdGlvblR5cGUsIHNlbGVjdGlvbik7XG4gICAgdGhpcy5nZXRVc2VyTGlzdChwYXJhbXMpO1xuICB9LFxuXG4gIC8qXG4gICAg5qC55o2u6YCJ5oup55qE5bm06b6ELCDouqvpq5gsIOaUtuWFpeiMg+WbtCwg6L2s5o2i5oiQ5a+55bqU6K+35rGC5Y+C5pWwXG4gICAgVG9EbzpcbiAgICAgIOmhtemdouS4iuW5tOm+hCwg6Lqr6auYLCDmlLblhaXojIPlm7TpgInmi6lcbiAgKi9cbiAgZGVhbFdpdGhSZXF1ZXN0UGFyYW1ldGVyKG9wdGlvblR5cGU6IHN0cmluZywgc2VsZWN0aW9uOiBzdHJpbmcpIHtcbiAgICAvLyBnZXQgc2VsZWN0T3B0aW9ucyBmcm9tIHRoaXMuZGF0YVxuICAgIC8vIGNvbnN0IGFnZVNlbGVjdGlvbiA9IFwiXCI7XG4gICAgLy8gY29uc3QgaGVpZ2h0U2VsZWN0aW9uID0gXCJcIjtcbiAgICAvLyBjb25zdCBzYWxhcnlTZWxlY3Rpb24gPSBcIlwiO1xuICAgIGNvbnN0IHJlcVBhcmFtczogYW55ID0ge307XG4gICAgLy8gYWdlQXJyYXksIGhlaWdodEFycmF5LCBzYWxhcnlBcnJheVxuICAgIHN3aXRjaChvcHRpb25UeXBlKSB7XG4gICAgICBjYXNlICdhZ2VBcnJheSc6XG4gICAgICAgIHJlcVBhcmFtcy5hZ2UgPSBhZ2VNZW51TGlzdFtzZWxlY3Rpb25dO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2hlaWdodEFycmF5JzpcbiAgICAgICAgcmVxUGFyYW1zLmhlaWdodCA9IGhlaWdodE1lbnVMaXN0W3NlbGVjdGlvbl1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzYWxhcnlBcnJheSc6XG4gICAgICAgIHJlcVBhcmFtcy5zYWxhcnkgPSBzZWxlY3Rpb247XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gcmVxUGFyYW1zO1xuICB9LFxuXG4gIC8qKlxuICAgKiDnlKjmiLfngrnlh7vlj7PkuIrop5LliIbkuqtcbiAgICovXG4gIG9uU2hhcmVBcHBNZXNzYWdlOiBmdW5jdGlvbiAoXG4gICAgb3B0aW9ucz86IFBhZ2UuSVNoYXJlQXBwTWVzc2FnZU9wdGlvbiB8IHVuZGVmaW5lZFxuICApOiBQYWdlLklDdXN0b21TaGFyZUNvbnRlbnQge1xuICAgIGNvbnNvbGUubG9nKFwib25TaGFyZUFwcE1lc3NhZ2Ugb3B0aW9uc1wiLCBvcHRpb25zKTtcbiAgICByZXR1cm4ge307XG4gIH0sXG59KTsiXX0=