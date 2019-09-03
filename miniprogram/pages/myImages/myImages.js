"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const oss_1 = require("../../utils/oss");
const config_1 = require("../../config");
const utils = require("../../utils/utils");
Page({
    data: {
        user: { openid: '' },
        carId: '',
        shopId: '',
        brand: '',
        brandDetail: '',
        price: '',
        dateCard: '',
        kilometer: '',
        transfersNumber: '',
        statusValue: '在售',
        status: 1,
        introduce: '',
        note: '',
        leftLenth: 300,
        indexImage: '',
        uploadIndexPath: '',
        oldImages: [],
        uploadImgs: [],
        count: 9,
        city: '',
        selectValue: '',
        cityList: [],
        hotCityList: [],
        popHidden: true,
        brandList: [],
        hotBrandList: [],
        dateNow: '',
        popHiddenBrand: true,
        submitDisable: false,
        statusArray: [
            { code: 0, value: '已出售' },
            { code: 1, value: '在售' }
        ],
        introArray: [
            'A、优秀（车况好，没有任何事故）',
            'B、良好（有少量剐蹭或钣金）',
            'C、一般（有过前后轻碰撞事故）',
            'D、较差（有发生过伤及主体框架的碰撞或较重事故）'
        ]
    },
    onLoad: function () {
    },
    getYMD(dateStr) {
        const date = new Date(dateStr);
        const year = date.getFullYear();
        let month = date.getMonth() + 1;
        month = month <= 9 ? `0${month}` : month;
        let day = date.getDate();
        day = day <= 9 ? `0${day}` : day;
        return `${year}-${month}-${day}`;
    },
    onSubmit(e) {
        let that = this;
        const value = e.detail.value;
        const openid = this.data.user.openid;
        const aliyunServerURL = config_1.default.uploadImageUrl;
        if (!utils.validateEmpty(value.brand, '请选择品牌车系') ||
            !utils.validateEmpty(value.dateCard, '请选择上牌日期') ||
            !utils.validateEmpty(value.kilometer, '请输入行驶里程') ||
            !utils.validateEmpty(value.city, '请输选择牌照所在地') ||
            !utils.validateEmpty(value.price, '请输入价格') ||
            !utils.validateEmpty(value.transfersNumber, '请输入过户次数') ||
            !utils.validateEmpty(value.introduce, '请选择车况') ||
            !utils.validateEmpty(this.data.indexImage, '请上传汽车首页照片') ||
            !utils.validateImages(this.data.oldImages.concat(this.data.uploadImgs), '请上传汽车照片')) {
            return false;
        }
        let indexImage = this.data.indexImage;
        let uploadIndexPath = this.data.uploadIndexPath;
        if (uploadIndexPath !== '') {
            oss_1.default({
                filePath: indexImage,
                dir: `images/shop/${openid}/` + indexImage.replace('http://tmp/', ''),
                success: function (res) {
                    indexImage = `${aliyunServerURL}/${res}`;
                    that.uploadAndSubmit();
                },
                fail: function () {
                    that.uploadAndSubmit();
                }
            });
        }
        else {
            that.uploadAndSubmit();
        }
    },
    uploadAndSubmit() {
        const openid = this.data.user.openid;
        const aliyunServerURL = config_1.default.uploadImageUrl;
        let that = this;
        let count = 0;
        let images = [];
        let uploadImgs = this.data.uploadImgs;
        wx.showLoading({
            title: '',
        });
        if (uploadImgs.length > 0) {
            for (let i = 0; i < uploadImgs.length; i++) {
                let filePath = uploadImgs[i];
                oss_1.default({
                    filePath: filePath,
                    dir: `images/shop/${openid}/` + filePath.replace('http://tmp/', ''),
                    success: function (res) {
                        count++;
                        images.push(`${aliyunServerURL}/${res}`);
                        if (count === uploadImgs.length) {
                            if (that.data.carId !== '') {
                                images = images.concat(that.data.oldImages);
                            }
                            else {
                            }
                        }
                        else {
                        }
                    },
                    fail: function () {
                        wx.hideLoading();
                    }
                });
            }
        }
        else {
            if (that.data.carId !== '') {
                images = images.concat(that.data.oldImages);
            }
            else {
            }
            wx.hideLoading();
        }
    },
    delImage(e) {
        const array = e.currentTarget.dataset.array;
        const index = e.currentTarget.dataset.index;
        if (array === 'oldImages') {
            const oldImages = this.data.oldImages;
            oldImages.splice(index, 1);
            this.setData({
                oldImages
            });
        }
        else {
            const uploadImgs = this.data.uploadImgs;
            uploadImgs.splice(index, 1);
            this.setData({
                uploadImgs
            });
        }
    },
    chooseIndexImage() {
        this.chooseImage(1, 'one');
    },
    chooseOtherImage(e) {
        const selectPictureNum = e.target.dataset.num;
        let count = 99 - selectPictureNum;
        this.chooseImage(count, 'multi');
    },
    chooseImage(count, type) {
        const that = this;
        wx.chooseImage({
            count: count,
            sizeType: ['original', 'compressed'],
            sourceType: ['album', 'camera'],
            success: function (res) {
                let uploadImgs = that.data.uploadImgs;
                if (type === 'multi') {
                    that.setData({
                        uploadImgs: uploadImgs.concat(res.tempFilePaths),
                    });
                }
                else {
                    that.setData({
                        uploadIndexPath: res.tempFilePaths[0],
                        indexImage: res.tempFilePaths[0],
                    });
                }
            },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXlJbWFnZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJteUltYWdlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHlDQUEwQztBQUMxQyx5Q0FBK0I7QUFDL0IsMkNBQTJDO0FBRTNDLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxFQUFFLE1BQU0sRUFBRyxFQUFFLEVBQUM7UUFDcEIsS0FBSyxFQUFFLEVBQUU7UUFDVCxNQUFNLEVBQUUsRUFBRTtRQUNWLEtBQUssRUFBRSxFQUFFO1FBQ1QsV0FBVyxFQUFFLEVBQUU7UUFDZixLQUFLLEVBQUUsRUFBRTtRQUNULFFBQVEsRUFBRSxFQUFFO1FBQ1osU0FBUyxFQUFFLEVBQUU7UUFDYixlQUFlLEVBQUUsRUFBRTtRQUNuQixXQUFXLEVBQUUsSUFBSTtRQUNqQixNQUFNLEVBQUUsQ0FBQztRQUNULFNBQVMsRUFBRSxFQUFFO1FBQ2IsSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUUsR0FBRztRQUNkLFVBQVUsRUFBRSxFQUFFO1FBQ2QsZUFBZSxFQUFFLEVBQUU7UUFDbkIsU0FBUyxFQUFFLEVBQUU7UUFDYixVQUFVLEVBQUUsRUFBRTtRQUNkLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxFQUFFLEVBQUU7UUFFUixXQUFXLEVBQUUsRUFBRTtRQUNmLFFBQVEsRUFBRSxFQUFFO1FBQ1osV0FBVyxFQUFFLEVBQUU7UUFDZixTQUFTLEVBQUUsSUFBSTtRQUNmLFNBQVMsRUFBRSxFQUFFO1FBQ2IsWUFBWSxFQUFFLEVBQUU7UUFDaEIsT0FBTyxFQUFFLEVBQUU7UUFDWCxjQUFjLEVBQUUsSUFBSTtRQUNwQixhQUFhLEVBQUUsS0FBSztRQUNwQixXQUFXLEVBQUU7WUFDWCxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtZQUN6QixFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtTQUN6QjtR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QUFDO0lBS0QsTUFBTSxFQUFFO0lBRVIsQ0FBQztJQUtELFFBQVEsRUFBRTtJQUVWLENBQUM7SUFLRCxpQkFBaUIsRUFBRTtJQUVuQixDQUFDO0lBS0QsYUFBYSxFQUFFO0lBRWYsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBhcGlTZXJ2aWNlUHJvID0gcmVxdWlyZSgnLi4vLi4vc2VydmljZS9hcGkuc2VydmljZScpO1xuaW1wb3J0IHVwbG9hZEltYWdlIGZyb20gJy4uLy4uL3V0aWxzL29zcyc7XG5pbXBvcnQgZW52IGZyb20gJy4uLy4uL2NvbmZpZyc7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgdXNlcjogeyBvcGVuaWQgOiAnJ30sXG4gICAgY2FySWQ6ICcnLFxuICAgIHNob3BJZDogJycsXG4gICAgYnJhbmQ6ICcnLCAgICAgICAgICAgIC8vIOWTgeeJjFxuICAgIGJyYW5kRGV0YWlsOiAnJywgICAgICAvLyDkuoznuqfovabns7tcbiAgICBwcmljZTogJycsICAgICAgICAgICAgLy8g5Lu35qC8XG4gICAgZGF0ZUNhcmQ6ICcnLCAgICAgICAgIC8vIOS4iueJjOaXtumXtFxuICAgIGtpbG9tZXRlcjogJycsICAgICAgICAvLyDooYzpqbbph4znqItcbiAgICB0cmFuc2ZlcnNOdW1iZXI6ICcnLCAgLy8g6L+H5oi35qyh5pWwXG4gICAgc3RhdHVzVmFsdWU6ICflnKjllK4nLFxuICAgIHN0YXR1czogMSxcbiAgICBpbnRyb2R1Y2U6ICcnLCAgICAgICAgLy8g6L2m5Ya1XG4gICAgbm90ZTogJycsXG4gICAgbGVmdExlbnRoOiAzMDAsXG4gICAgaW5kZXhJbWFnZTogJycsXG4gICAgdXBsb2FkSW5kZXhQYXRoOiAnJyxcbiAgICBvbGRJbWFnZXM6IFtdLCAgICAgICAgLy8g5pu05paw5rG96L2m5Zu+54mHXG4gICAgdXBsb2FkSW1nczogW10sICAgICAgIC8vIOWbvueJh1xuICAgIGNvdW50OiA5LFxuICAgIGNpdHk6ICcnLCAgICAgICAgICAgICAvLyDkuIrniYzlnLDngrlcbiAgICAvLyBjaXR5SWQ6ICcnLFxuICAgIHNlbGVjdFZhbHVlOiAnJyxcbiAgICBjaXR5TGlzdDogW10sXG4gICAgaG90Q2l0eUxpc3Q6IFtdLFxuICAgIHBvcEhpZGRlbjogdHJ1ZSxcbiAgICBicmFuZExpc3Q6IFtdLFxuICAgIGhvdEJyYW5kTGlzdDogW10sXG4gICAgZGF0ZU5vdzogJycsXG4gICAgcG9wSGlkZGVuQnJhbmQ6IHRydWUsXG4gICAgc3VibWl0RGlzYWJsZTogZmFsc2UsXG4gICAgc3RhdHVzQXJyYXk6IFtcbiAgICAgIHsgY29kZTogMCwgdmFsdWU6ICflt7Llh7rllK4nIH0sXG4gICAgICB7IGNvZGU6IDEsIHZhbHVlOiAn5Zyo5ZSuJyB9XG4gICAgXSxcbiAgICBpbnRyb0FycmF5OiBbXG4gICAgICAnQeOAgeS8mOengO+8iOi9puWGteWlve+8jOayoeacieS7u+S9leS6i+aVhe+8iScsXG4gICAgICAnQuOAgeiJr+Wlve+8iOacieWwkemHj+WJkOi5reaIlumSo+mHke+8iScsXG4gICAgICAnQ+OAgeS4gOiIrO+8iOaciei/h+WJjeWQjui9u+eisOaSnuS6i+aVhe+8iScsXG4gICAgICAnROOAgei+g+W3ru+8iOacieWPkeeUn+i/h+S8pOWPiuS4u+S9k+ahhuaetueahOeisOaSnuaIlui+g+mHjeS6i+aVhe+8iSddXG4gIH0sXG5cbiAgLyoqXG4gICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cbiAgKi9cbiAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XG4gIH0sXG5cbiAgZ2V0WU1EKGRhdGVTdHI6IHN0cmluZykge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkYXRlU3RyKTtcbiAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIGxldCBtb250aDogYW55ID0gZGF0ZS5nZXRNb250aCgpICsgMTtcbiAgICBtb250aCAgPSBtb250aCA8PSA5ID8gYDAke21vbnRofWAgOiBtb250aDtcbiAgICBsZXQgZGF5OiBhbnkgPSBkYXRlLmdldERhdGUoKTtcbiAgICBkYXkgPSBkYXkgPD0gOSA/IGAwJHtkYXl9YCA6IGRheTtcbiAgICByZXR1cm4gYCR7eWVhcn0tJHttb250aH0tJHtkYXl9YFxuICB9LFxuXG4gIC8qKiDlh4blpIfmj5DkuqQgKi9cbiAgb25TdWJtaXQoZTogYW55KTogYW55IHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgY29uc3QgdmFsdWUgPSBlLmRldGFpbC52YWx1ZTtcbiAgICBjb25zdCBvcGVuaWQgPSB0aGlzLmRhdGEudXNlci5vcGVuaWQ7XG4gICAgY29uc3QgYWxpeXVuU2VydmVyVVJMID0gZW52LnVwbG9hZEltYWdlVXJsO1xuXG4gICAgaWYgKCF1dGlscy52YWxpZGF0ZUVtcHR5KHZhbHVlLmJyYW5kLCAn6K+36YCJ5oup5ZOB54mM6L2m57O7JykgfHxcbiAgICAgICAgIXV0aWxzLnZhbGlkYXRlRW1wdHkodmFsdWUuZGF0ZUNhcmQsICfor7fpgInmi6nkuIrniYzml6XmnJ8nKSB8fFxuICAgICAgICAhdXRpbHMudmFsaWRhdGVFbXB0eSh2YWx1ZS5raWxvbWV0ZXIsICfor7fovpPlhaXooYzpqbbph4znqIsnKSB8fFxuICAgICAgICAhdXRpbHMudmFsaWRhdGVFbXB0eSh2YWx1ZS5jaXR5LCAn6K+36L6T6YCJ5oup54mM54Wn5omA5Zyo5ZywJykgfHxcbiAgICAgICAgIXV0aWxzLnZhbGlkYXRlRW1wdHkodmFsdWUucHJpY2UsICfor7fovpPlhaXku7fmoLwnKSB8fFxuICAgICAgICAhdXRpbHMudmFsaWRhdGVFbXB0eSh2YWx1ZS50cmFuc2ZlcnNOdW1iZXIsICfor7fovpPlhaXov4fmiLfmrKHmlbAnKSB8fFxuICAgICAgICAhdXRpbHMudmFsaWRhdGVFbXB0eSh2YWx1ZS5pbnRyb2R1Y2UsICfor7fpgInmi6novablhrUnKSB8fFxuICAgICAgICAhdXRpbHMudmFsaWRhdGVFbXB0eSh0aGlzLmRhdGEuaW5kZXhJbWFnZSwgJ+ivt+S4iuS8oOaxvei9pummlumhteeFp+eJhycpIHx8XG4gICAgICAgICF1dGlscy52YWxpZGF0ZUltYWdlcyh0aGlzLmRhdGEub2xkSW1hZ2VzLmNvbmNhdCh0aGlzLmRhdGEudXBsb2FkSW1ncyksICfor7fkuIrkvKDmsb3ovabnhafniYcnKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGxldCBpbmRleEltYWdlID0gdGhpcy5kYXRhLmluZGV4SW1hZ2U7XG4gICAgbGV0IHVwbG9hZEluZGV4UGF0aCA9IHRoaXMuZGF0YS51cGxvYWRJbmRleFBhdGg7XG4gICAgaWYgKHVwbG9hZEluZGV4UGF0aCAhPT0gJycpIHtcbiAgICAgIHVwbG9hZEltYWdlKHtcbiAgICAgICAgZmlsZVBhdGg6IGluZGV4SW1hZ2UsXG4gICAgICAgIGRpcjogYGltYWdlcy9zaG9wLyR7b3BlbmlkfS9gICsgaW5kZXhJbWFnZS5yZXBsYWNlKCdodHRwOi8vdG1wLycsICcnKSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlczogYW55KSB7XG4gICAgICAgICAgaW5kZXhJbWFnZSA9IGAke2FsaXl1blNlcnZlclVSTH0vJHtyZXN9YDtcbiAgICAgICAgICB0aGF0LnVwbG9hZEFuZFN1Ym1pdCgpO1xuICAgICAgICB9LFxuICAgICAgICBmYWlsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdGhhdC51cGxvYWRBbmRTdWJtaXQoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoYXQudXBsb2FkQW5kU3VibWl0KCk7XG4gICAgfVxuICB9LFxuXG4gIHVwbG9hZEFuZFN1Ym1pdCgpIHtcbiAgICBjb25zdCBvcGVuaWQgPSB0aGlzLmRhdGEudXNlci5vcGVuaWQ7XG4gICAgY29uc3QgYWxpeXVuU2VydmVyVVJMID0gZW52LnVwbG9hZEltYWdlVXJsO1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICBsZXQgY291bnQgPSAwO1xuICAgIGxldCBpbWFnZXM6IGFueVtdID0gW107XG4gICAgbGV0IHVwbG9hZEltZ3M6IGFueVtdID0gdGhpcy5kYXRhLnVwbG9hZEltZ3M7XG4gICAgd3guc2hvd0xvYWRpbmcoe1xuICAgICAgdGl0bGU6ICcnLFxuICAgIH0pXG4gICAgaWYgKHVwbG9hZEltZ3MubGVuZ3RoID4gMCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1cGxvYWRJbWdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBmaWxlUGF0aCA9IHVwbG9hZEltZ3NbaV07XG4gICAgICAgIHVwbG9hZEltYWdlKHtcbiAgICAgICAgICBmaWxlUGF0aDogZmlsZVBhdGgsXG4gICAgICAgICAgZGlyOiBgaW1hZ2VzL3Nob3AvJHtvcGVuaWR9L2AgKyBmaWxlUGF0aC5yZXBsYWNlKCdodHRwOi8vdG1wLycsICcnKSxcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzOiBhbnkpIHtcbiAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICBpbWFnZXMucHVzaChgJHthbGl5dW5TZXJ2ZXJVUkx9LyR7cmVzfWApO1xuICAgICAgICAgICAgaWYgKGNvdW50ID09PSB1cGxvYWRJbWdzLmxlbmd0aCkge1xuICAgICAgICAgICAgICBpZiAodGhhdC5kYXRhLmNhcklkICE9PSAnJykge1xuICAgICAgICAgICAgICAgIGltYWdlcyA9IGltYWdlcy5jb25jYXQodGhhdC5kYXRhLm9sZEltYWdlcyk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gdGhhdC5kb1N1Ym1pdChlLCBpbmRleEltYWdlLCBpbWFnZXMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyB3eC5oaWRlTG9hZGluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhhdC5kYXRhLmNhcklkICE9PSAnJykge1xuICAgICAgICBpbWFnZXMgPSBpbWFnZXMuY29uY2F0KHRoYXQuZGF0YS5vbGRJbWFnZXMpOyAgLy8g5ZCI5bm257yW6L6R5LmL5YmN55qE5rG96L2m5Zu+54mHXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB0aGF0LmRvU3VibWl0KGUsIGluZGV4SW1hZ2UsIGltYWdlcyk7XG4gICAgICB9XG4gICAgICB3eC5oaWRlTG9hZGluZygpO1xuICAgIH1cbiAgfSxcblxuXG4gIC8qKiDliKDpmaTkuIrkvKDnhafniYcgKi9cbiAgZGVsSW1hZ2UoZTphbnkpIHtcbiAgICBjb25zdCBhcnJheSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmFycmF5O1xuICAgIGNvbnN0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgaWYgKGFycmF5ID09PSAnb2xkSW1hZ2VzJykge1xuICAgICAgY29uc3Qgb2xkSW1hZ2VzID0gdGhpcy5kYXRhLm9sZEltYWdlcztcbiAgICAgIG9sZEltYWdlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgIG9sZEltYWdlc1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHVwbG9hZEltZ3MgPSB0aGlzLmRhdGEudXBsb2FkSW1ncztcbiAgICAgIHVwbG9hZEltZ3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICB1cGxvYWRJbWdzXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgY2hvb3NlSW5kZXhJbWFnZSgpIHtcbiAgICB0aGlzLmNob29zZUltYWdlKDEsICdvbmUnKTtcbiAgfSxcblxuICBjaG9vc2VPdGhlckltYWdlKGU6IGFueSkge1xuICAgIGNvbnN0IHNlbGVjdFBpY3R1cmVOdW0gPSBlLnRhcmdldC5kYXRhc2V0Lm51bTtcbiAgICBsZXQgY291bnQgPSA5OSAtIHNlbGVjdFBpY3R1cmVOdW1cbiAgICB0aGlzLmNob29zZUltYWdlKGNvdW50LCAnbXVsdGknKTtcbiAgfSxcblxuICAvKiog6YCJ5oup5Zu+54mHXG4gICAqICBAdHlwZSBtdWx0aS3lpJrlvKDlm77niYcgb25lLeS4gOW8oOWbvueJh1xuICAgKi9cbiAgY2hvb3NlSW1hZ2UoY291bnQ6IG51bWJlciwgdHlwZTogc3RyaW5nKSB7XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgd3guY2hvb3NlSW1hZ2Uoe1xuICAgICAgY291bnQ6IGNvdW50LFxuICAgICAgc2l6ZVR5cGU6IFsnb3JpZ2luYWwnLCAnY29tcHJlc3NlZCddLCAvLyDlj6/ku6XmjIflrprmmK/ljp/lm77ov5jmmK/ljovnvKnlm77vvIzpu5jorqTkuozogIXpg73mnIlcbiAgICAgIHNvdXJjZVR5cGU6IFsnYWxidW0nLCAnY2FtZXJhJ10sIC8vIOWPr+S7peaMh+Wumuadpea6kOaYr+ebuOWGjOi/mOaYr+ebuOacuu+8jOm7mOiupOS6jOiAhemDveaciVxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlczogYW55KSB7XG4gICAgICAgIGxldCB1cGxvYWRJbWdzID0gdGhhdC5kYXRhLnVwbG9hZEltZ3M7XG4gICAgICAgIGlmICh0eXBlID09PSAnbXVsdGknKSB7XG4gICAgICAgICAgdGhhdC5zZXREYXRhISh7XG4gICAgICAgICAgICB1cGxvYWRJbWdzOiB1cGxvYWRJbWdzLmNvbmNhdChyZXMudGVtcEZpbGVQYXRocyksXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhhdC5zZXREYXRhISh7XG4gICAgICAgICAgICB1cGxvYWRJbmRleFBhdGg6IHJlcy50ZW1wRmlsZVBhdGhzWzBdLFxuICAgICAgICAgICAgaW5kZXhJbWFnZTogcmVzLnRlbXBGaWxlUGF0aHNbMF0sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSlcbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliJ3mrKHmuLLmn5PlrozmiJBcbiAgICovXG4gIG9uUmVhZHk6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxuICAgKi9cbiAgb25TaG93OiBmdW5jdGlvbiAoKSB7XG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXG4gICAqL1xuICBvbkhpZGU6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxuICAgKi9cbiAgb25VbmxvYWQ6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxuICAgKi9cbiAgb25QdWxsRG93blJlZnJlc2g6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcbiAgICovXG4gIG9uUmVhY2hCb3R0b206IGZ1bmN0aW9uICgpIHtcblxuICB9LFxufSkiXX0=