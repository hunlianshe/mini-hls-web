"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const oss_1 = require("../../utils/oss");
const config_1 = require("../../config");
let user;
const Api = require("../../service/api.service");
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
        let self = this;
        wx.getStorage({
            key: 'user',
            success: function (res) {
                console.log('res', res);
                Api.getUserInfo(res.data.openid).then((result) => {
                    console.log('1212', result);
                    if (result) {
                        user = result.data;
                        console.log(' result', result.data.photos);
                        self.setData({
                            oldImages: result.data.photos,
                        });
                    }
                });
            }
        });
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
    onSubmit() {
        let that = this;
        const openid = this.data.user.openid;
        const aliyunServerURL = config_1.default.uploadImageUrl;
        let indexImage = this.data.indexImage;
        let uploadIndexPath = this.data.uploadIndexPath;
        if (uploadIndexPath !== '') {
            console.log('are you ok...');
            oss_1.default({
                filePath: indexImage,
                dir: `images/shop/${openid}/` + indexImage.replace('http://tmp/', ''),
                success: function (res) {
                    console.log('indexImage', indexImage);
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
                        console.log("images", images);
                        wx.hideLoading();
                        if (count === uploadImgs.length) {
                            images = images.concat(that.data.oldImages);
                            that.updateUserImage(images);
                        }
                        else {
                            wx.hideLoading();
                        }
                    },
                    fail: function () {
                        wx.hideLoading();
                    }
                });
            }
        }
        else {
            images = images.concat(that.data.oldImages);
            that.updateUserImage(images);
            wx.hideLoading();
        }
    },
    updateUserImage(images) {
        console.log('images', images);
        Api.updateUser({ openid: user.openid, photos: images }).then((result) => {
            console.log("result", result);
            wx.showToast({
                title: '保存成功',
                icon: 'success',
                duration: 1000,
                mask: true
            });
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXlJbWFnZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJteUltYWdlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHlDQUEwQztBQUMxQyx5Q0FBK0I7QUFHL0IsSUFBSSxJQUFRLENBQUE7QUFFWixpREFBaUQ7QUFDakQsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFFLEVBQUUsTUFBTSxFQUFHLEVBQUUsRUFBQztRQUNwQixLQUFLLEVBQUUsRUFBRTtRQUNULE1BQU0sRUFBRSxFQUFFO1FBQ1YsS0FBSyxFQUFFLEVBQUU7UUFDVCxXQUFXLEVBQUUsRUFBRTtRQUNmLEtBQUssRUFBRSxFQUFFO1FBQ1QsUUFBUSxFQUFFLEVBQUU7UUFDWixTQUFTLEVBQUUsRUFBRTtRQUNiLGVBQWUsRUFBRSxFQUFFO1FBQ25CLFdBQVcsRUFBRSxJQUFJO1FBQ2pCLE1BQU0sRUFBRSxDQUFDO1FBQ1QsU0FBUyxFQUFFLEVBQUU7UUFDYixJQUFJLEVBQUUsRUFBRTtRQUNSLFNBQVMsRUFBRSxHQUFHO1FBQ2QsVUFBVSxFQUFFLEVBQUU7UUFDZCxlQUFlLEVBQUUsRUFBRTtRQUNuQixTQUFTLEVBQUUsRUFBRTtRQUNiLFVBQVUsRUFBRSxFQUFFO1FBQ2QsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLEVBQUUsRUFBRTtRQUVSLFdBQVcsRUFBRSxFQUFFO1FBQ2YsUUFBUSxFQUFFLEVBQUU7UUFDWixXQUFXLEVBQUUsRUFBRTtRQUNmLFNBQVMsRUFBRSxJQUFJO1FBQ2YsU0FBUyxFQUFFLEVBQUU7UUFDYixZQUFZLEVBQUUsRUFBRTtRQUNoQixPQUFPLEVBQUUsRUFBRTtRQUNYLGNBQWMsRUFBRSxJQUFJO1FBQ3BCLGFBQWEsRUFBRSxLQUFLO1FBQ3BCLFdBQVcsRUFBRTtZQUNYLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO1lBQ3pCLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLEVB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QVUsR0FBUTtnQkFDekIsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7Z0JBQ3RDLElBQUksSUFBSSxLQUFLLE9BQU8sRUFBRTtvQkFDcEIsSUFBSSxDQUFDLE9BQVEsQ0FBQzt3QkFDWixVQUFVLEVBQUUsVUFBVSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDO3FCQUNqRCxDQUFDLENBQUM7aUJBQ0o7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLE9BQVEsQ0FBQzt3QkFDWixlQUFlLEVBQUUsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7d0JBQ3JDLFVBQVUsRUFBRSxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztxQkFDakMsQ0FBQyxDQUFDO2lCQUNKO1lBQ0gsQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFLRCxPQUFPLEVBQUU7SUFFVCxDQUFDO0lBS0QsTUFBTSxFQUFFO0lBQ1IsQ0FBQztJQUtELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFLRCxRQUFRLEVBQUU7SUFFVixDQUFDO0lBS0QsaUJBQWlCLEVBQUU7SUFFbkIsQ0FBQztJQUtELGFBQWEsRUFBRTtJQUVmLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgYXBpU2VydmljZVBybyA9IHJlcXVpcmUoJy4uLy4uL3NlcnZpY2UvYXBpLnNlcnZpY2UnKTtcclxuaW1wb3J0IHVwbG9hZEltYWdlIGZyb20gJy4uLy4uL3V0aWxzL29zcyc7XHJcbmltcG9ydCBlbnYgZnJvbSAnLi4vLi4vY29uZmlnJztcclxuLy8gaW1wb3J0IHsgSU15QXBwIH0gZnJvbSAnLi4vLi4vYXBwJztcclxuLy8gY29uc3QgYXBwOmFueSA9IGdldEFwcDxJTXlBcHA+KCk7XHJcbmxldCB1c2VyOmFueVxyXG4vLyBpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XHJcbmltcG9ydCAqIGFzIEFwaSBmcm9tICcuLi8uLi9zZXJ2aWNlL2FwaS5zZXJ2aWNlJztcclxuUGFnZSh7XHJcbiAgZGF0YToge1xyXG4gICAgdXNlcjogeyBvcGVuaWQgOiAnJ30sXHJcbiAgICBjYXJJZDogJycsXHJcbiAgICBzaG9wSWQ6ICcnLFxyXG4gICAgYnJhbmQ6ICcnLCAgICAgICAgICAgIC8vIOWTgeeJjFxyXG4gICAgYnJhbmREZXRhaWw6ICcnLCAgICAgIC8vIOS6jOe6p+i9puezu1xyXG4gICAgcHJpY2U6ICcnLCAgICAgICAgICAgIC8vIOS7t+agvFxyXG4gICAgZGF0ZUNhcmQ6ICcnLCAgICAgICAgIC8vIOS4iueJjOaXtumXtFxyXG4gICAga2lsb21ldGVyOiAnJywgICAgICAgIC8vIOihjOmptumHjOeoi1xyXG4gICAgdHJhbnNmZXJzTnVtYmVyOiAnJywgIC8vIOi/h+aIt+asoeaVsFxyXG4gICAgc3RhdHVzVmFsdWU6ICflnKjllK4nLFxyXG4gICAgc3RhdHVzOiAxLFxyXG4gICAgaW50cm9kdWNlOiAnJywgICAgICAgIC8vIOi9puWGtVxyXG4gICAgbm90ZTogJycsXHJcbiAgICBsZWZ0TGVudGg6IDMwMCxcclxuICAgIGluZGV4SW1hZ2U6ICcnLFxyXG4gICAgdXBsb2FkSW5kZXhQYXRoOiAnJyxcclxuICAgIG9sZEltYWdlczogW10sICAgICAgICAvLyDmm7TmlrDmsb3ovablm77niYdcclxuICAgIHVwbG9hZEltZ3M6IFtdLCAgICAgICAvLyDlm77niYdcclxuICAgIGNvdW50OiA5LFxyXG4gICAgY2l0eTogJycsICAgICAgICAgICAgIC8vIOS4iueJjOWcsOeCuVxyXG4gICAgLy8gY2l0eUlkOiAnJyxcclxuICAgIHNlbGVjdFZhbHVlOiAnJyxcclxuICAgIGNpdHlMaXN0OiBbXSxcclxuICAgIGhvdENpdHlMaXN0OiBbXSxcclxuICAgIHBvcEhpZGRlbjogdHJ1ZSxcclxuICAgIGJyYW5kTGlzdDogW10sXHJcbiAgICBob3RCcmFuZExpc3Q6IFtdLFxyXG4gICAgZGF0ZU5vdzogJycsXHJcbiAgICBwb3BIaWRkZW5CcmFuZDogdHJ1ZSxcclxuICAgIHN1Ym1pdERpc2FibGU6IGZhbHNlLFxyXG4gICAgc3RhdHVzQXJyYXk6IFtcclxuICAgICAgeyBjb2RlOiAwLCB2YWx1ZTogJ+W3suWHuuWUricgfSxcclxuICAgICAgeyBjb2RlOiAxLCB2YWx1ZTogJ+WcqOWUricgfVxyXG4gICAgXSxcclxuICAgIGludHJvQXJyYXk6IFtcclxuICAgICAgJ0HjgIHkvJjnp4DvvIjovablhrXlpb3vvIzmsqHmnInku7vkvZXkuovmlYXvvIknLFxyXG4gICAgICAnQuOAgeiJr+Wlve+8iOacieWwkemHj+WJkOi5reaIlumSo+mHke+8iScsXHJcbiAgICAgICdD44CB5LiA6Iis77yI5pyJ6L+H5YmN5ZCO6L2756Kw5pKe5LqL5pWF77yJJyxcclxuICAgICAgJ0TjgIHovoPlt67vvIjmnInlj5HnlJ/ov4fkvKTlj4rkuLvkvZPmoYbmnrbnmoTnorDmkp7miJbovoPph43kuovmlYXvvIknXVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cclxuICAqL1xyXG4gIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgIGtleTogJ3VzZXInLFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3JlcycsIHJlcylcclxuICAgICAgICBBcGkuZ2V0VXNlckluZm8ocmVzLmRhdGEub3BlbmlkKS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJzEyMTInLCByZXN1bHQpXHJcbiAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHVzZXIgPSByZXN1bHQuZGF0YVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnIHJlc3VsdCcsIHJlc3VsdC5kYXRhLnBob3RvcylcclxuICAgICAgICAgICAgc2VsZi5zZXREYXRhISh7XHJcbiAgICAgICAgICAgICAgb2xkSW1hZ2VzOiByZXN1bHQuZGF0YS5waG90b3MsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIFxyXG4gIH0sXHJcblxyXG4gIGdldFlNRChkYXRlU3RyOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkYXRlU3RyKTtcclxuICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgICBsZXQgbW9udGg6IGFueSA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XHJcbiAgICBtb250aCAgPSBtb250aCA8PSA5ID8gYDAke21vbnRofWAgOiBtb250aDtcclxuICAgIGxldCBkYXk6IGFueSA9IGRhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgZGF5ID0gZGF5IDw9IDkgPyBgMCR7ZGF5fWAgOiBkYXk7XHJcbiAgICByZXR1cm4gYCR7eWVhcn0tJHttb250aH0tJHtkYXl9YFxyXG4gIH0sXHJcblxyXG4gIC8qKiDlh4blpIfmj5DkuqQgKi9cclxuICBvblN1Ym1pdCgpOiBhbnkge1xyXG4gICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgLy8gY29uc3QgdmFsdWUgPSBlLmRldGFpbC52YWx1ZTtcclxuICAgIGNvbnN0IG9wZW5pZCA9IHRoaXMuZGF0YS51c2VyLm9wZW5pZDtcclxuICAgIGNvbnN0IGFsaXl1blNlcnZlclVSTCA9IGVudi51cGxvYWRJbWFnZVVybDtcclxuXHJcbiAgIFxyXG5cclxuICAgIGxldCBpbmRleEltYWdlID0gdGhpcy5kYXRhLmluZGV4SW1hZ2U7XHJcbiAgICBsZXQgdXBsb2FkSW5kZXhQYXRoID0gdGhpcy5kYXRhLnVwbG9hZEluZGV4UGF0aDtcclxuICAgIGlmICh1cGxvYWRJbmRleFBhdGggIT09ICcnKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdhcmUgeW91IG9rLi4uJylcclxuICAgICAgdXBsb2FkSW1hZ2Uoe1xyXG4gICAgICAgIGZpbGVQYXRoOiBpbmRleEltYWdlLFxyXG4gICAgICAgIGRpcjogYGltYWdlcy9zaG9wLyR7b3BlbmlkfS9gICsgaW5kZXhJbWFnZS5yZXBsYWNlKCdodHRwOi8vdG1wLycsICcnKSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzOiBhbnkpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdpbmRleEltYWdlJywgaW5kZXhJbWFnZSlcclxuICAgICAgICAgIGluZGV4SW1hZ2UgPSBgJHthbGl5dW5TZXJ2ZXJVUkx9LyR7cmVzfWA7XHJcbiAgICAgICAgICB0aGF0LnVwbG9hZEFuZFN1Ym1pdCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFpbDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgdGhhdC51cGxvYWRBbmRTdWJtaXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhhdC51cGxvYWRBbmRTdWJtaXQoKTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICB1cGxvYWRBbmRTdWJtaXQoKSB7XHJcbiAgICBjb25zdCBvcGVuaWQgPSB0aGlzLmRhdGEudXNlci5vcGVuaWQ7XHJcbiAgICBjb25zdCBhbGl5dW5TZXJ2ZXJVUkwgPSBlbnYudXBsb2FkSW1hZ2VVcmw7XHJcbiAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgbGV0IGltYWdlczogYW55W10gPSBbXTtcclxuICAgIGxldCB1cGxvYWRJbWdzOiBhbnlbXSA9IHRoaXMuZGF0YS51cGxvYWRJbWdzO1xyXG4gICAgd3guc2hvd0xvYWRpbmcoe1xyXG4gICAgICB0aXRsZTogJycsXHJcbiAgICB9KVxyXG4gICAgaWYgKHVwbG9hZEltZ3MubGVuZ3RoID4gMCkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVwbG9hZEltZ3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgZmlsZVBhdGggPSB1cGxvYWRJbWdzW2ldO1xyXG4gICAgICAgIHVwbG9hZEltYWdlKHtcclxuICAgICAgICAgIGZpbGVQYXRoOiBmaWxlUGF0aCxcclxuICAgICAgICAgIGRpcjogYGltYWdlcy9zaG9wLyR7b3BlbmlkfS9gICsgZmlsZVBhdGgucmVwbGFjZSgnaHR0cDovL3RtcC8nLCAnJyksXHJcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzOiBhbnkpIHtcclxuICAgICAgICAgICAgY291bnQrKztcclxuICAgICAgICAgICAgaW1hZ2VzLnB1c2goYCR7YWxpeXVuU2VydmVyVVJMfS8ke3Jlc31gKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJpbWFnZXNcIiwgaW1hZ2VzKTtcclxuICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChjb3VudCA9PT0gdXBsb2FkSW1ncy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGltYWdlcyA9IGltYWdlcy5jb25jYXQodGhhdC5kYXRhLm9sZEltYWdlcyk7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnVwZGF0ZVVzZXJJbWFnZShpbWFnZXMpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaW1hZ2VzID0gaW1hZ2VzLmNvbmNhdCh0aGF0LmRhdGEub2xkSW1hZ2VzKTsgIC8vIOWQiOW5tue8lui+keS5i+WJjeeahOaxvei9puWbvueJh1xyXG4gICAgICAgIHRoYXQudXBkYXRlVXNlckltYWdlKGltYWdlcyk7XHJcbiAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgdXBkYXRlVXNlckltYWdlKGltYWdlczpBcnJheTxhbnk+KSB7XHJcbiAgICBjb25zb2xlLmxvZygnaW1hZ2VzJywgaW1hZ2VzKVxyXG4gICAgQXBpLnVwZGF0ZVVzZXIoeyBvcGVuaWQ6IHVzZXIub3BlbmlkLCBwaG90b3M6IGltYWdlc30pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcInJlc3VsdFwiLHJlc3VsdClcclxuICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICB0aXRsZTogJ+S/neWtmOaIkOWKnycsXHJcbiAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgIGR1cmF0aW9uOiAxMDAwLFxyXG4gICAgICAgIG1hc2s6IHRydWVcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcblxyXG4gIC8qKiDliKDpmaTkuIrkvKDnhafniYcgKi9cclxuICBkZWxJbWFnZShlOmFueSkge1xyXG4gICAgY29uc3QgYXJyYXkgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5hcnJheTtcclxuICAgIGNvbnN0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XHJcbiAgICBpZiAoYXJyYXkgPT09ICdvbGRJbWFnZXMnKSB7XHJcbiAgICAgIGNvbnN0IG9sZEltYWdlcyA9IHRoaXMuZGF0YS5vbGRJbWFnZXM7XHJcbiAgICAgIG9sZEltYWdlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICBvbGRJbWFnZXNcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCB1cGxvYWRJbWdzID0gdGhpcy5kYXRhLnVwbG9hZEltZ3M7XHJcbiAgICAgIHVwbG9hZEltZ3Muc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgdXBsb2FkSW1nc1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBjaG9vc2VJbmRleEltYWdlKCkge1xyXG4gICAgdGhpcy5jaG9vc2VJbWFnZSgxLCAnb25lJyk7XHJcbiAgfSxcclxuXHJcbiAgY2hvb3NlT3RoZXJJbWFnZShlOiBhbnkpIHtcclxuICAgIGNvbnN0IHNlbGVjdFBpY3R1cmVOdW0gPSBlLnRhcmdldC5kYXRhc2V0Lm51bTtcclxuICAgIGxldCBjb3VudCA9IDk5IC0gc2VsZWN0UGljdHVyZU51bVxyXG4gICAgdGhpcy5jaG9vc2VJbWFnZShjb3VudCwgJ211bHRpJyk7XHJcbiAgfSxcclxuXHJcbiAgLyoqIOmAieaLqeWbvueJh1xyXG4gICAqICBAdHlwZSBtdWx0aS3lpJrlvKDlm77niYcgb25lLeS4gOW8oOWbvueJh1xyXG4gICAqL1xyXG4gIGNob29zZUltYWdlKGNvdW50OiBudW1iZXIsIHR5cGU6IHN0cmluZykge1xyXG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XHJcbiAgICB3eC5jaG9vc2VJbWFnZSh7XHJcbiAgICAgIGNvdW50OiBjb3VudCxcclxuICAgICAgc2l6ZVR5cGU6IFsnb3JpZ2luYWwnLCAnY29tcHJlc3NlZCddLCAvLyDlj6/ku6XmjIflrprmmK/ljp/lm77ov5jmmK/ljovnvKnlm77vvIzpu5jorqTkuozogIXpg73mnIlcclxuICAgICAgc291cmNlVHlwZTogWydhbGJ1bScsICdjYW1lcmEnXSwgLy8g5Y+v5Lul5oyH5a6a5p2l5rqQ5piv55u45YaM6L+Y5piv55u45py677yM6buY6K6k5LqM6ICF6YO95pyJXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXM6IGFueSkge1xyXG4gICAgICAgIGxldCB1cGxvYWRJbWdzID0gdGhhdC5kYXRhLnVwbG9hZEltZ3M7XHJcbiAgICAgICAgaWYgKHR5cGUgPT09ICdtdWx0aScpIHtcclxuICAgICAgICAgIHRoYXQuc2V0RGF0YSEoe1xyXG4gICAgICAgICAgICB1cGxvYWRJbWdzOiB1cGxvYWRJbWdzLmNvbmNhdChyZXMudGVtcEZpbGVQYXRocyksXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhhdC5zZXREYXRhISh7XHJcbiAgICAgICAgICAgIHVwbG9hZEluZGV4UGF0aDogcmVzLnRlbXBGaWxlUGF0aHNbMF0sXHJcbiAgICAgICAgICAgIGluZGV4SW1hZ2U6IHJlcy50ZW1wRmlsZVBhdGhzWzBdLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxyXG4gICAqL1xyXG4gIG9uUmVhZHk6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcclxuICAgKi9cclxuICBvblNob3c6IGZ1bmN0aW9uICgpIHtcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdoumakOiXj1xyXG4gICAqL1xyXG4gIG9uSGlkZTogZnVuY3Rpb24gKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxyXG4gICAqL1xyXG4gIG9uVW5sb2FkOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXHJcbiAgICovXHJcbiAgb25QdWxsRG93blJlZnJlc2g6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog6aG16Z2i5LiK5ouJ6Kem5bqV5LqL5Lu255qE5aSE55CG5Ye95pWwXHJcbiAgICovXHJcbiAgb25SZWFjaEJvdHRvbTogZnVuY3Rpb24gKCkge1xyXG5cclxuICB9LFxyXG59KSJdfQ==