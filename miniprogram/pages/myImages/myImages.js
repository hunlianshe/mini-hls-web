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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXlJbWFnZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJteUltYWdlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHlDQUEwQztBQUMxQyx5Q0FBK0I7QUFHL0IsSUFBSSxJQUFRLENBQUE7QUFFWixpREFBaUQ7QUFDakQsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFFLEVBQUUsTUFBTSxFQUFHLEVBQUUsRUFBQztRQUNwQixLQUFLLEVBQUUsRUFBRTtRQUNULE1BQU0sRUFBRSxFQUFFO1FBQ1YsS0FBSyxFQUFFLEVBQUU7UUFDVCxXQUFXLEVBQUUsRUFBRTtRQUNmLEtBQUssRUFBRSxFQUFFO1FBQ1QsUUFBUSxFQUFFLEVBQUU7UUFDWixTQUFTLEVBQUUsRUFBRTtRQUNiLGVBQWUsRUFBRSxFQUFFO1FBQ25CLFdBQVcsRUFBRSxJQUFJO1FBQ2pCLE1BQU0sRUFBRSxDQUFDO1FBQ1QsU0FBUyxFQUFFLEVBQUU7UUFDYixJQUFJLEVBQUUsRUFBRTtRQUNSLFNBQVMsRUFBRSxHQUFHO1FBQ2QsVUFBVSxFQUFFLEVBQUU7UUFDZCxlQUFlLEVBQUUsRUFBRTtRQUNuQixTQUFTLEVBQUUsRUFBRTtRQUNiLFVBQVUsRUFBRSxFQUFFO1FBQ2QsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLEVBQUUsRUFBRTtRQUVSLFdBQVcsRUFBRSxFQUFFO1FBQ2YsUUFBUSxFQUFFLEVBQUU7UUFDWixXQUFXLEVBQUUsRUFBRTtRQUNmLFNBQVMsRUFBRSxJQUFJO1FBQ2YsU0FBUyxFQUFFLEVBQUU7UUFDYixZQUFZLEVBQUUsRUFBRTtRQUNoQixPQUFPLEVBQUUsRUFBRTtRQUNYLGNBQWMsRUFBRSxJQUFJO1FBQ3BCLGFBQWEsRUFBRSxLQUFLO1FBQ3BCLFdBQVcsRUFBRTtZQUNYLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO1lBQ3pCLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLEVB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QVUsR0FBUTtnQkFDekIsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7Z0JBQ3RDLElBQUksSUFBSSxLQUFLLE9BQU8sRUFBRTtvQkFDcEIsSUFBSSxDQUFDLE9BQVEsQ0FBQzt3QkFDWixVQUFVLEVBQUUsVUFBVSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDO3FCQUNqRCxDQUFDLENBQUM7aUJBQ0o7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLE9BQVEsQ0FBQzt3QkFDWixlQUFlLEVBQUUsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7d0JBQ3JDLFVBQVUsRUFBRSxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztxQkFDakMsQ0FBQyxDQUFDO2lCQUNKO1lBQ0gsQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFLRCxPQUFPLEVBQUU7SUFFVCxDQUFDO0lBS0QsTUFBTSxFQUFFO0lBQ1IsQ0FBQztJQUtELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFLRCxRQUFRLEVBQUU7SUFFVixDQUFDO0lBS0QsaUJBQWlCLEVBQUU7SUFFbkIsQ0FBQztJQUtELGFBQWEsRUFBRTtJQUVmLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgYXBpU2VydmljZVBybyA9IHJlcXVpcmUoJy4uLy4uL3NlcnZpY2UvYXBpLnNlcnZpY2UnKTtcbmltcG9ydCB1cGxvYWRJbWFnZSBmcm9tICcuLi8uLi91dGlscy9vc3MnO1xuaW1wb3J0IGVudiBmcm9tICcuLi8uLi9jb25maWcnO1xuLy8gaW1wb3J0IHsgSU15QXBwIH0gZnJvbSAnLi4vLi4vYXBwJztcbi8vIGNvbnN0IGFwcDphbnkgPSBnZXRBcHA8SU15QXBwPigpO1xubGV0IHVzZXI6YW55XG4vLyBpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XG5pbXBvcnQgKiBhcyBBcGkgZnJvbSAnLi4vLi4vc2VydmljZS9hcGkuc2VydmljZSc7XG5QYWdlKHtcbiAgZGF0YToge1xuICAgIHVzZXI6IHsgb3BlbmlkIDogJyd9LFxuICAgIGNhcklkOiAnJyxcbiAgICBzaG9wSWQ6ICcnLFxuICAgIGJyYW5kOiAnJywgICAgICAgICAgICAvLyDlk4HniYxcbiAgICBicmFuZERldGFpbDogJycsICAgICAgLy8g5LqM57qn6L2m57O7XG4gICAgcHJpY2U6ICcnLCAgICAgICAgICAgIC8vIOS7t+agvFxuICAgIGRhdGVDYXJkOiAnJywgICAgICAgICAvLyDkuIrniYzml7bpl7RcbiAgICBraWxvbWV0ZXI6ICcnLCAgICAgICAgLy8g6KGM6am26YeM56iLXG4gICAgdHJhbnNmZXJzTnVtYmVyOiAnJywgIC8vIOi/h+aIt+asoeaVsFxuICAgIHN0YXR1c1ZhbHVlOiAn5Zyo5ZSuJyxcbiAgICBzdGF0dXM6IDEsXG4gICAgaW50cm9kdWNlOiAnJywgICAgICAgIC8vIOi9puWGtVxuICAgIG5vdGU6ICcnLFxuICAgIGxlZnRMZW50aDogMzAwLFxuICAgIGluZGV4SW1hZ2U6ICcnLFxuICAgIHVwbG9hZEluZGV4UGF0aDogJycsXG4gICAgb2xkSW1hZ2VzOiBbXSwgICAgICAgIC8vIOabtOaWsOaxvei9puWbvueJh1xuICAgIHVwbG9hZEltZ3M6IFtdLCAgICAgICAvLyDlm77niYdcbiAgICBjb3VudDogOSxcbiAgICBjaXR5OiAnJywgICAgICAgICAgICAgLy8g5LiK54mM5Zyw54K5XG4gICAgLy8gY2l0eUlkOiAnJyxcbiAgICBzZWxlY3RWYWx1ZTogJycsXG4gICAgY2l0eUxpc3Q6IFtdLFxuICAgIGhvdENpdHlMaXN0OiBbXSxcbiAgICBwb3BIaWRkZW46IHRydWUsXG4gICAgYnJhbmRMaXN0OiBbXSxcbiAgICBob3RCcmFuZExpc3Q6IFtdLFxuICAgIGRhdGVOb3c6ICcnLFxuICAgIHBvcEhpZGRlbkJyYW5kOiB0cnVlLFxuICAgIHN1Ym1pdERpc2FibGU6IGZhbHNlLFxuICAgIHN0YXR1c0FycmF5OiBbXG4gICAgICB7IGNvZGU6IDAsIHZhbHVlOiAn5bey5Ye65ZSuJyB9LFxuICAgICAgeyBjb2RlOiAxLCB2YWx1ZTogJ+WcqOWUricgfVxuICAgIF0sXG4gICAgaW50cm9BcnJheTogW1xuICAgICAgJ0HjgIHkvJjnp4DvvIjovablhrXlpb3vvIzmsqHmnInku7vkvZXkuovmlYXvvIknLFxuICAgICAgJ0LjgIHoia/lpb3vvIjmnInlsJHph4/liZDoua3miJbpkqPph5HvvIknLFxuICAgICAgJ0PjgIHkuIDoiKzvvIjmnInov4fliY3lkI7ovbvnorDmkp7kuovmlYXvvIknLFxuICAgICAgJ0TjgIHovoPlt67vvIjmnInlj5HnlJ/ov4fkvKTlj4rkuLvkvZPmoYbmnrbnmoTnorDmkp7miJbovoPph43kuovmlYXvvIknXVxuICB9LFxuXG4gIC8qKlxuICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XG4gICovXG4gIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICB3eC5nZXRTdG9yYWdlKHtcbiAgICAgIGtleTogJ3VzZXInLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICBjb25zb2xlLmxvZygncmVzJywgcmVzKVxuICAgICAgICBBcGkuZ2V0VXNlckluZm8ocmVzLmRhdGEub3BlbmlkKS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCcxMjEyJywgcmVzdWx0KVxuICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgIHVzZXIgPSByZXN1bHQuZGF0YVxuICAgICAgICAgICAgY29uc29sZS5sb2coJyByZXN1bHQnLCByZXN1bHQuZGF0YS5waG90b3MpXG4gICAgICAgICAgICBzZWxmLnNldERhdGEhKHtcbiAgICAgICAgICAgICAgb2xkSW1hZ2VzOiByZXN1bHQuZGF0YS5waG90b3MsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pXG4gIFxuICB9LFxuXG4gIGdldFlNRChkYXRlU3RyOiBzdHJpbmcpIHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoZGF0ZVN0cik7XG4gICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICBsZXQgbW9udGg6IGFueSA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XG4gICAgbW9udGggID0gbW9udGggPD0gOSA/IGAwJHttb250aH1gIDogbW9udGg7XG4gICAgbGV0IGRheTogYW55ID0gZGF0ZS5nZXREYXRlKCk7XG4gICAgZGF5ID0gZGF5IDw9IDkgPyBgMCR7ZGF5fWAgOiBkYXk7XG4gICAgcmV0dXJuIGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fWBcbiAgfSxcblxuICAvKiog5YeG5aSH5o+Q5LqkICovXG4gIG9uU3VibWl0KCk6IGFueSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIC8vIGNvbnN0IHZhbHVlID0gZS5kZXRhaWwudmFsdWU7XG4gICAgY29uc3Qgb3BlbmlkID0gdGhpcy5kYXRhLnVzZXIub3BlbmlkO1xuICAgIGNvbnN0IGFsaXl1blNlcnZlclVSTCA9IGVudi51cGxvYWRJbWFnZVVybDtcblxuICAgXG5cbiAgICBsZXQgaW5kZXhJbWFnZSA9IHRoaXMuZGF0YS5pbmRleEltYWdlO1xuICAgIGxldCB1cGxvYWRJbmRleFBhdGggPSB0aGlzLmRhdGEudXBsb2FkSW5kZXhQYXRoO1xuICAgIGlmICh1cGxvYWRJbmRleFBhdGggIT09ICcnKSB7XG4gICAgICBjb25zb2xlLmxvZygnYXJlIHlvdSBvay4uLicpXG4gICAgICB1cGxvYWRJbWFnZSh7XG4gICAgICAgIGZpbGVQYXRoOiBpbmRleEltYWdlLFxuICAgICAgICBkaXI6IGBpbWFnZXMvc2hvcC8ke29wZW5pZH0vYCArIGluZGV4SW1hZ2UucmVwbGFjZSgnaHR0cDovL3RtcC8nLCAnJyksXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXM6IGFueSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdpbmRleEltYWdlJywgaW5kZXhJbWFnZSlcbiAgICAgICAgICBpbmRleEltYWdlID0gYCR7YWxpeXVuU2VydmVyVVJMfS8ke3Jlc31gO1xuICAgICAgICAgIHRoYXQudXBsb2FkQW5kU3VibWl0KCk7XG4gICAgICAgIH0sXG4gICAgICAgIGZhaWw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0aGF0LnVwbG9hZEFuZFN1Ym1pdCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhhdC51cGxvYWRBbmRTdWJtaXQoKTtcbiAgICB9XG4gIH0sXG5cbiAgdXBsb2FkQW5kU3VibWl0KCkge1xuICAgIGNvbnN0IG9wZW5pZCA9IHRoaXMuZGF0YS51c2VyLm9wZW5pZDtcbiAgICBjb25zdCBhbGl5dW5TZXJ2ZXJVUkwgPSBlbnYudXBsb2FkSW1hZ2VVcmw7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgbGV0IGltYWdlczogYW55W10gPSBbXTtcbiAgICBsZXQgdXBsb2FkSW1nczogYW55W10gPSB0aGlzLmRhdGEudXBsb2FkSW1ncztcbiAgICB3eC5zaG93TG9hZGluZyh7XG4gICAgICB0aXRsZTogJycsXG4gICAgfSlcbiAgICBpZiAodXBsb2FkSW1ncy5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVwbG9hZEltZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGZpbGVQYXRoID0gdXBsb2FkSW1nc1tpXTtcbiAgICAgICAgdXBsb2FkSW1hZ2Uoe1xuICAgICAgICAgIGZpbGVQYXRoOiBmaWxlUGF0aCxcbiAgICAgICAgICBkaXI6IGBpbWFnZXMvc2hvcC8ke29wZW5pZH0vYCArIGZpbGVQYXRoLnJlcGxhY2UoJ2h0dHA6Ly90bXAvJywgJycpLFxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXM6IGFueSkge1xuICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgIGltYWdlcy5wdXNoKGAke2FsaXl1blNlcnZlclVSTH0vJHtyZXN9YCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImltYWdlc1wiLCBpbWFnZXMpO1xuICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGNvdW50ID09PSB1cGxvYWRJbWdzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGltYWdlcyA9IGltYWdlcy5jb25jYXQodGhhdC5kYXRhLm9sZEltYWdlcyk7XG4gICAgICAgICAgICAgICAgdGhhdC51cGRhdGVVc2VySW1hZ2UoaW1hZ2VzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaW1hZ2VzID0gaW1hZ2VzLmNvbmNhdCh0aGF0LmRhdGEub2xkSW1hZ2VzKTsgIC8vIOWQiOW5tue8lui+keS5i+WJjeeahOaxvei9puWbvueJh1xuICAgICAgICB0aGF0LnVwZGF0ZVVzZXJJbWFnZShpbWFnZXMpO1xuICAgICAgd3guaGlkZUxvYWRpbmcoKTtcbiAgICB9XG4gIH0sXG5cbiAgdXBkYXRlVXNlckltYWdlKGltYWdlczpBcnJheTxhbnk+KSB7XG4gICAgY29uc29sZS5sb2coJ2ltYWdlcycsIGltYWdlcylcbiAgICBBcGkudXBkYXRlVXNlcih7IG9wZW5pZDogdXNlci5vcGVuaWQsIHBob3RvczogaW1hZ2VzfSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcInJlc3VsdFwiLHJlc3VsdClcbiAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgIHRpdGxlOiAn5L+d5a2Y5oiQ5YqfJyxcbiAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICBkdXJhdGlvbjogMTAwMCxcbiAgICAgICAgbWFzazogdHJ1ZVxuICAgICAgfSlcbiAgICB9KVxuICB9LFxuXG5cbiAgLyoqIOWIoOmZpOS4iuS8oOeFp+eJhyAqL1xuICBkZWxJbWFnZShlOmFueSkge1xuICAgIGNvbnN0IGFycmF5ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuYXJyYXk7XG4gICAgY29uc3QgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICBpZiAoYXJyYXkgPT09ICdvbGRJbWFnZXMnKSB7XG4gICAgICBjb25zdCBvbGRJbWFnZXMgPSB0aGlzLmRhdGEub2xkSW1hZ2VzO1xuICAgICAgb2xkSW1hZ2VzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgb2xkSW1hZ2VzXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdXBsb2FkSW1ncyA9IHRoaXMuZGF0YS51cGxvYWRJbWdzO1xuICAgICAgdXBsb2FkSW1ncy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgIHVwbG9hZEltZ3NcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICBjaG9vc2VJbmRleEltYWdlKCkge1xuICAgIHRoaXMuY2hvb3NlSW1hZ2UoMSwgJ29uZScpO1xuICB9LFxuXG4gIGNob29zZU90aGVySW1hZ2UoZTogYW55KSB7XG4gICAgY29uc3Qgc2VsZWN0UGljdHVyZU51bSA9IGUudGFyZ2V0LmRhdGFzZXQubnVtO1xuICAgIGxldCBjb3VudCA9IDk5IC0gc2VsZWN0UGljdHVyZU51bVxuICAgIHRoaXMuY2hvb3NlSW1hZ2UoY291bnQsICdtdWx0aScpO1xuICB9LFxuXG4gIC8qKiDpgInmi6nlm77niYdcbiAgICogIEB0eXBlIG11bHRpLeWkmuW8oOWbvueJhyBvbmUt5LiA5byg5Zu+54mHXG4gICAqL1xuICBjaG9vc2VJbWFnZShjb3VudDogbnVtYmVyLCB0eXBlOiBzdHJpbmcpIHtcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICB3eC5jaG9vc2VJbWFnZSh7XG4gICAgICBjb3VudDogY291bnQsXG4gICAgICBzaXplVHlwZTogWydvcmlnaW5hbCcsICdjb21wcmVzc2VkJ10sIC8vIOWPr+S7peaMh+WumuaYr+WOn+Wbvui/mOaYr+WOi+e8qeWbvu+8jOm7mOiupOS6jOiAhemDveaciVxuICAgICAgc291cmNlVHlwZTogWydhbGJ1bScsICdjYW1lcmEnXSwgLy8g5Y+v5Lul5oyH5a6a5p2l5rqQ5piv55u45YaM6L+Y5piv55u45py677yM6buY6K6k5LqM6ICF6YO95pyJXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzOiBhbnkpIHtcbiAgICAgICAgbGV0IHVwbG9hZEltZ3MgPSB0aGF0LmRhdGEudXBsb2FkSW1ncztcbiAgICAgICAgaWYgKHR5cGUgPT09ICdtdWx0aScpIHtcbiAgICAgICAgICB0aGF0LnNldERhdGEhKHtcbiAgICAgICAgICAgIHVwbG9hZEltZ3M6IHVwbG9hZEltZ3MuY29uY2F0KHJlcy50ZW1wRmlsZVBhdGhzKSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGF0LnNldERhdGEhKHtcbiAgICAgICAgICAgIHVwbG9hZEluZGV4UGF0aDogcmVzLnRlbXBGaWxlUGF0aHNbMF0sXG4gICAgICAgICAgICBpbmRleEltYWdlOiByZXMudGVtcEZpbGVQYXRoc1swXSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9KVxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxuICAgKi9cbiAgb25SZWFkeTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XG4gICAqL1xuICBvblNob3c6IGZ1bmN0aW9uICgpIHtcbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cbiAgICovXG4gIG9uSGlkZTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Y246L29XG4gICAqL1xuICBvblVubG9hZDogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXG4gICAqL1xuICBvblB1bGxEb3duUmVmcmVzaDogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxuICAgKi9cbiAgb25SZWFjaEJvdHRvbTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG59KSJdfQ==