"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vipService_1 = require("./config/vipService");
const utils_1 = require("./config/utils");
const api_service_1 = require("../../../service/api.service");
Page({
    data: {
        BJ: vipService_1.BAIJIN,
        HT: vipService_1.HUANGTONG,
        rightList: vipService_1.RIGHTLIST,
        swiper: {
            indicatorDots: true,
            vertical: false,
            autoplay: false,
            interval: 2000,
            duration: 500,
        },
        selectValue: {},
        payBarStatus: {
            isShow: true,
            content: "立即支付",
        },
        userInfo: {},
        currentRight: 0,
        currentPrice: 0,
    },
    onLoad: function () {
        const user = wx.getStorageSync("userInfo");
        console.log("userInfo", user);
        this.setData({
            userInfo: Object.assign({}, user, { vipType: "bronze", vipExpireAt: "2020.12.31" }),
        });
        api_service_1.getVipInfo().then((res) => {
            const priceList = utils_1.dealWithVipPriceInfo(res.data);
            const vipRightInfo = utils_1.dealWithVipRightList(res.data);
            console.log(priceList);
            this.setData({
                BJ: priceList.BAIJIN,
                HT: priceList.HUANGTONG,
                rightList: vipRightInfo,
            });
            console.log(`=====vipRightInfo=====`, vipRightInfo);
        });
        this.checkStatus(this.data.currentRight);
    },
    getVipInfo() { },
    goRecharge() {
        const payInfo = JSON.stringify(this.data.selectValue);
        if (payInfo === '{}') {
            wx.showToast({
                title: '请选择会员充值方式',
                icon: 'none',
                duration: 2000
            });
            return;
        }
        wx.navigateTo({
            url: `../../../packageMyhome/pages/choosePay/choosePay?payInfo=${payInfo}`,
        });
    },
    swiperChange(e) {
        console.log(e.detail.current);
        this.checkStatus(e.detail.current);
    },
    checkStatus(currentRight) {
        const { userInfo } = this.data;
        if (userInfo.vipType === "platinum" && currentRight === 0) {
            this.setData({
                payBarStatus: {
                    isShow: false,
                },
                currentRight: currentRight,
            });
            return;
        }
        else if ((userInfo.vipType === "platinum" && currentRight === 1) ||
            (userInfo.vipType === "bronze" && currentRight === 0)) {
            this.setData({
                payBarStatus: {
                    isShow: true,
                    content: "立即续费",
                },
                currentRight: currentRight,
            });
        }
        else if (userInfo.vipType === "bronze" && currentRight === 1) {
            this.setData({
                payBarStatus: {
                    isShow: true,
                    content: "立即升级",
                },
                currentRight: currentRight,
            });
        }
    },
    selectPrice(e) {
        const { selectIndex, currentRight } = e.currentTarget.dataset;
        console.log(e.currentTarget.dataset);
        const { BJ, HT } = this.data;
        let currentPrice = 0;
        let selectValue = {};
        const priceList = currentRight === 0 ? HT.priceList : BJ.priceList;
        priceList.forEach((item, index) => {
            if (index === selectIndex) {
                item.select = true;
            }
            else {
                item.select = false;
            }
        });
        if (currentRight === 0) {
            HT.priceList = priceList;
            currentPrice = HT.priceList[selectIndex].value;
            selectValue = HT.priceList[selectIndex];
        }
        else {
            currentPrice = BJ.priceList[selectIndex].value;
            BJ.priceList = priceList;
            selectValue = BJ.priceList[selectIndex];
        }
        this.setData({
            BJ,
            HT,
            currentPrice,
            selectValue: Object.assign({}, selectValue, { vipType: currentRight === 0 ? "bronze" : "platinum" }),
        });
        console.log(this.data.HT.priceList);
        console.log(this.data.BJ.priceList);
        console.log(`vipCenter selectValue:`, selectValue);
    },
    onReady: function () { },
    onShow: function () { },
    onHide: function () { },
    onUnload: function () { },
    onPullDownRefresh: function () { },
    onReachBottom: function () { },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlwQ2VudGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmlwQ2VudGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsb0RBQW1FO0FBQ25FLDBDQUE0RTtBQUM1RSw4REFBMEQ7QUFFMUQsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osRUFBRSxFQUFFLG1CQUFNO1FBQ1YsRUFBRSxFQUFFLHNCQUFTO1FBQ2IsU0FBUyxFQUFFLHNCQUFTO1FBQ3BCLE1BQU0sRUFBRTtZQUNOLGFBQWEsRUFBRSxJQUFJO1lBQ25CLFFBQVEsRUFBRSxLQUFLO1lBQ2YsUUFBUSxFQUFFLEtBQUs7WUFDZixRQUFRLEVBQUUsSUFBSTtZQUNkLFFBQVEsRUFBRSxHQUFHO1NBQ2Q7UUFDRCxXQUFXLEVBQUUsRUFBUztRQUN0QixZQUFZLEVBQUU7WUFDWixNQUFNLEVBQUUsSUFBSTtZQUNaLE9BQU8sRUFBRSxNQUFNO1NBQ2hCO1FBQ0QsUUFBUSxFQUFFLEVBQVM7UUFDbkIsWUFBWSxFQUFFLENBQUM7UUFDZixZQUFZLEVBQUUsQ0FBQztLQUNoQjtJQUNELE1BQU0sRUFBRTtRQUVOLE1BQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLFFBQVEsb0JBQ0gsSUFBSSxJQUNQLE9BQU8sRUFBRSxRQUFRLEVBQ2pCLFdBQVcsRUFBRSxZQUFZLEdBQzFCO1NBQ0YsQ0FBQyxDQUFDO1FBR0gsd0JBQVUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQVEsRUFBRSxFQUFFO1lBQzdCLE1BQU0sU0FBUyxHQUFHLDRCQUFvQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNqRCxNQUFNLFlBQVksR0FBRyw0QkFBb0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENB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QUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCxPQUFPLEVBQUUsY0FBYSxDQUFDO0lBRXZCLE1BQU0sRUFBRSxjQUFhLENBQUM7SUFFdEIsTUFBTSxFQUFFLGNBQWEsQ0FBQztJQUV0QixRQUFRLEVBQUUsY0FBYSxDQUFDO0lBRXhCLGlCQUFpQixFQUFFLGNBQWEsQ0FBQztJQUVqQyxhQUFhLEVBQUUsY0FBYSxDQUFDO0NBQzlCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJBSUpJTiwgSFVBTkdUT05HLCBSSUdIVExJU1QgfSBmcm9tIFwiLi9jb25maWcvdmlwU2VydmljZVwiO1xuaW1wb3J0IHsgZGVhbFdpdGhWaXBQcmljZUluZm8sIGRlYWxXaXRoVmlwUmlnaHRMaXN0IH0gZnJvbSBcIi4vY29uZmlnL3V0aWxzXCI7XG5pbXBvcnQgeyBnZXRWaXBJbmZvIH0gZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2UvYXBpLnNlcnZpY2VcIjtcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBCSjogQkFJSklOLFxuICAgIEhUOiBIVUFOR1RPTkcsXG4gICAgcmlnaHRMaXN0OiBSSUdIVExJU1QsXG4gICAgc3dpcGVyOiB7XG4gICAgICBpbmRpY2F0b3JEb3RzOiB0cnVlLFxuICAgICAgdmVydGljYWw6IGZhbHNlLFxuICAgICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgaW50ZXJ2YWw6IDIwMDAsXG4gICAgICBkdXJhdGlvbjogNTAwLFxuICAgIH0sXG4gICAgc2VsZWN0VmFsdWU6IHt9IGFzIGFueSxcbiAgICBwYXlCYXJTdGF0dXM6IHtcbiAgICAgIGlzU2hvdzogdHJ1ZSxcbiAgICAgIGNvbnRlbnQ6IFwi56uL5Y2z5pSv5LuYXCIsXG4gICAgfSxcbiAgICB1c2VySW5mbzoge30gYXMgYW55LFxuICAgIGN1cnJlbnRSaWdodDogMCwgLy8gMC1odWFuZ3RvbmcgMS1iYWlqaW5cbiAgICBjdXJyZW50UHJpY2U6IDAsXG4gIH0sXG4gIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgIC8vIOiOt+WPlueUqOaIt+S/oeaBr1xuICAgIGNvbnN0IHVzZXIgPSB3eC5nZXRTdG9yYWdlU3luYyhcInVzZXJJbmZvXCIpO1xuICAgIGNvbnNvbGUubG9nKFwidXNlckluZm9cIiwgdXNlcik7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICB1c2VySW5mbzoge1xuICAgICAgICAuLi51c2VyLFxuICAgICAgICB2aXBUeXBlOiBcImJyb256ZVwiLFxuICAgICAgICB2aXBFeHBpcmVBdDogXCIyMDIwLjEyLjMxXCIsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgLy8g6I635Y+Wdmlw5p2D55uKXG4gICAgZ2V0VmlwSW5mbygpLnRoZW4oKHJlczogYW55KSA9PiB7XG4gICAgICBjb25zdCBwcmljZUxpc3QgPSBkZWFsV2l0aFZpcFByaWNlSW5mbyhyZXMuZGF0YSk7XG4gICAgICBjb25zdCB2aXBSaWdodEluZm8gPSBkZWFsV2l0aFZpcFJpZ2h0TGlzdChyZXMuZGF0YSk7XG4gICAgICBjb25zb2xlLmxvZyhwcmljZUxpc3QpO1xuICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgIEJKOiBwcmljZUxpc3QuQkFJSklOLFxuICAgICAgICBIVDogcHJpY2VMaXN0LkhVQU5HVE9ORyxcbiAgICAgICAgcmlnaHRMaXN0OiB2aXBSaWdodEluZm8sXG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKGA9PT09PXZpcFJpZ2h0SW5mbz09PT09YCwgdmlwUmlnaHRJbmZvKTtcbiAgICB9KTtcblxuICAgIHRoaXMuY2hlY2tTdGF0dXModGhpcy5kYXRhLmN1cnJlbnRSaWdodCk7XG4gIH0sXG5cbiAgZ2V0VmlwSW5mbygpOiBhbnkge30sXG5cbiAgLyoqIOWFheWAvCAqL1xuICBnb1JlY2hhcmdlKCk6IGFueSB7XG4gICAgY29uc3QgcGF5SW5mbyA9IEpTT04uc3RyaW5naWZ5KHRoaXMuZGF0YS5zZWxlY3RWYWx1ZSk7XG4gICAgaWYgKHBheUluZm8gPT09ICd7fScpIHtcbiAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgIHRpdGxlOiAn6K+36YCJ5oup5Lya5ZGY5YWF5YC85pa55byPJyxcbiAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICBkdXJhdGlvbjogMjAwMFxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiBgLi4vLi4vLi4vcGFja2FnZU15aG9tZS9wYWdlcy9jaG9vc2VQYXkvY2hvb3NlUGF5P3BheUluZm89JHtwYXlJbmZvfWAsXG4gICAgfSk7XG4gIH0sXG5cbiAgc3dpcGVyQ2hhbmdlKGU6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKGUuZGV0YWlsLmN1cnJlbnQpO1xuICAgIHRoaXMuY2hlY2tTdGF0dXMoZS5kZXRhaWwuY3VycmVudCk7XG4gIH0sXG5cbiAgY2hlY2tTdGF0dXMoY3VycmVudFJpZ2h0OiBhbnkpIHtcbiAgICBjb25zdCB7IHVzZXJJbmZvIH0gPSB0aGlzLmRhdGE7XG4gICAgaWYgKHVzZXJJbmZvLnZpcFR5cGUgPT09IFwicGxhdGludW1cIiAmJiBjdXJyZW50UmlnaHQgPT09IDApIHtcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICBwYXlCYXJTdGF0dXM6IHtcbiAgICAgICAgICBpc1Nob3c6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBjdXJyZW50UmlnaHQ6IGN1cnJlbnRSaWdodCxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICAodXNlckluZm8udmlwVHlwZSA9PT0gXCJwbGF0aW51bVwiICYmIGN1cnJlbnRSaWdodCA9PT0gMSkgfHxcbiAgICAgICh1c2VySW5mby52aXBUeXBlID09PSBcImJyb256ZVwiICYmIGN1cnJlbnRSaWdodCA9PT0gMClcbiAgICApIHtcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICBwYXlCYXJTdGF0dXM6IHtcbiAgICAgICAgICBpc1Nob3c6IHRydWUsXG4gICAgICAgICAgY29udGVudDogXCLnq4vljbPnu63otLlcIixcbiAgICAgICAgfSxcbiAgICAgICAgY3VycmVudFJpZ2h0OiBjdXJyZW50UmlnaHQsXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHVzZXJJbmZvLnZpcFR5cGUgPT09IFwiYnJvbnplXCIgJiYgY3VycmVudFJpZ2h0ID09PSAxKSB7XG4gICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgcGF5QmFyU3RhdHVzOiB7XG4gICAgICAgICAgaXNTaG93OiB0cnVlLFxuICAgICAgICAgIGNvbnRlbnQ6IFwi56uL5Y2z5Y2H57qnXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbnRSaWdodDogY3VycmVudFJpZ2h0LFxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIHNlbGVjdFByaWNlKGU6IGFueSkge1xuICAgIGNvbnN0IHsgc2VsZWN0SW5kZXgsIGN1cnJlbnRSaWdodCB9ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQ7XG4gICAgY29uc29sZS5sb2coZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQpO1xuICAgIGNvbnN0IHsgQkosIEhUIH0gPSB0aGlzLmRhdGE7XG4gICAgbGV0IGN1cnJlbnRQcmljZSA9IDA7XG4gICAgbGV0IHNlbGVjdFZhbHVlOiBhbnkgPSB7fTtcblxuICAgIGNvbnN0IHByaWNlTGlzdCA9IGN1cnJlbnRSaWdodCA9PT0gMCA/IEhULnByaWNlTGlzdCA6IEJKLnByaWNlTGlzdDtcbiAgICBwcmljZUxpc3QuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpbmRleCA9PT0gc2VsZWN0SW5kZXgpIHtcbiAgICAgICAgaXRlbS5zZWxlY3QgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXRlbS5zZWxlY3QgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoY3VycmVudFJpZ2h0ID09PSAwKSB7XG4gICAgICBIVC5wcmljZUxpc3QgPSBwcmljZUxpc3Q7XG4gICAgICBjdXJyZW50UHJpY2UgPSBIVC5wcmljZUxpc3Rbc2VsZWN0SW5kZXhdLnZhbHVlO1xuICAgICAgc2VsZWN0VmFsdWUgPSBIVC5wcmljZUxpc3Rbc2VsZWN0SW5kZXhdO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyZW50UHJpY2UgPSBCSi5wcmljZUxpc3Rbc2VsZWN0SW5kZXhdLnZhbHVlO1xuICAgICAgQkoucHJpY2VMaXN0ID0gcHJpY2VMaXN0O1xuICAgICAgc2VsZWN0VmFsdWUgPSBCSi5wcmljZUxpc3Rbc2VsZWN0SW5kZXhdO1xuICAgIH1cbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIEJKLFxuICAgICAgSFQsXG4gICAgICBjdXJyZW50UHJpY2UsXG4gICAgICBzZWxlY3RWYWx1ZToge1xuICAgICAgICAuLi5zZWxlY3RWYWx1ZSxcbiAgICAgICAgdmlwVHlwZTogY3VycmVudFJpZ2h0ID09PSAwID8gXCJicm9uemVcIiA6IFwicGxhdGludW1cIixcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGEuSFQucHJpY2VMaXN0KTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGEuQkoucHJpY2VMaXN0KTtcbiAgICBjb25zb2xlLmxvZyhgdmlwQ2VudGVyIHNlbGVjdFZhbHVlOmAsIHNlbGVjdFZhbHVlKTtcbiAgfSxcblxuICBvblJlYWR5OiBmdW5jdGlvbiAoKSB7fSxcblxuICBvblNob3c6IGZ1bmN0aW9uICgpIHt9LFxuXG4gIG9uSGlkZTogZnVuY3Rpb24gKCkge30sXG5cbiAgb25VbmxvYWQ6IGZ1bmN0aW9uICgpIHt9LFxuXG4gIG9uUHVsbERvd25SZWZyZXNoOiBmdW5jdGlvbiAoKSB7fSxcblxuICBvblJlYWNoQm90dG9tOiBmdW5jdGlvbiAoKSB7fSxcbn0pO1xuIl19