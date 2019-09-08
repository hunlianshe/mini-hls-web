// pages/createCar/createCar.js
import * as apiServicePro from '../../service/api.service';
import uploadImage  from '../../utils/oss';
import env from '../../config';
import * as utils from '../../utils/utils';

Page({
  data: {
    user: { openid: '' },
    nickName: '',
    gender: '', 
    birth: '',            // 生日
    height: '',           // 身高
    salary: '',  
    isMarriage: '未婚',
    education: '', 
    hasChild: '', 
    wantChild: '', 
    job: '',
    haveHouse: '',   
    genderIndex: 0,
    salaryIndex: 0,
    note: '',
    leftLenth: 300,
    indexImage: '',
    uploadIndexPath: '',
    oldImages: [],        // 更新汽车图片
    uploadImgs: [],       // 图片
    count: 9,
    city: '',             // 上牌地点
    selectValue: '',
    cityList: [],
    hotCityList: [],
    popHidden: true,
    brandList: [],
    hotBrandList: [],
    dateNow: '',
    popHiddenBrand: true,
    submitDisable: false,
    isMarriageArray: ['未婚', '离异'],
    genderArray: ['男','女'],
    salaryArray: [
      '5千以下', '5千～1万', '1万～2万', '2万～5万', '5万以上'
    ],
    educationArray: [
      '小学', '初中', '高中', '大专', '大学本科', '硕士', '博士'
    ],
    hasChildArray: ['是', '否'],
    wantChildArray: ['是', '否'],
    haveHouseArray: ['已买', '未买'],
  },

  /**
  * 生命周期函数--监听页面加载
  */
  onLoad: function () {
    let _this = this;
    wx.getStorage({
      key: 'user',
      success: function (res) {
        _this.setData!({
          user: res.data
        })
      },
    });  
    this.setData!({
      dateNow: this.getYMD(new Date())
    });
  },

  /** 汽车详情 */
  getCarDetail(id: any) {
    apiServicePro.getUserDetail(id).then((result: any) => {
      if (result) {
        this.setData!({
          brand: result.data.brand,
          brandDetail: result.data.brandDetail,         // 二级车系
          city: result.data.city,
          price: result.data.price,                     // 价格
          birth: this.getYMD(result.data.birth),        // 生日
          height: result.data.height,                   // 身高
          isMarriage: result.data.isMarriage,           // 婚姻状况
          education: result.data.education,             // 教育
          gender: result.data.gender,                   // 性别
          note: result.data.note,                       // 补充
          indexImage: result.data.indexImage,
          oldImages: result.data.images,                // 图片
        })
      }
    })
  },

  getYMD(dateStr: any) {
    const date = new Date(dateStr);
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let monthStr = month <= 9 ? `0${month}` : month;
    let day = date.getDate();
    let dayStr = day <= 9 ? `0${day}` : day;
    return `${year}-${monthStr}-${dayStr}`
  },

  /** 准备提交 */
  onSubmit(e: any): any {
    let that = this;
    const value = e.detail.value;
    const openid = this.data.user.openid;
    const aliyunServerURL = env.uploadImageUrl;

    if (!utils.validateEmpty(value.nickName, '请输入昵称') ||
        !utils.validateEmpty(value.birth, '请选择生日') ||
        !utils.validateEmpty(value.height, '请输入身高') ||
        !utils.validateEmpty(value.city, '请输选择牌照所在地') ||
        !utils.validateEmpty(value.price, '请输入价格') ||
        !utils.validateEmpty(value.gender, '请选择车况') ||
        !utils.validateEmpty(this.data.indexImage, '请上传汽车首页照片')) {
      return false;
    }

    let indexImage = this.data.indexImage;
    let uploadIndexPath = this.data.uploadIndexPath;
    if (uploadIndexPath !== '') {
      uploadImage({
        filePath: indexImage,
        dir: `images/shop/${openid}/` + indexImage.replace('http://tmp/', ''),
        success: function (res: any) {
          indexImage = `${aliyunServerURL}/${res}`;
          that.uploadAndSubmit();
        },
        fail: function () {
          that.uploadAndSubmit();
        }
      });
    } else {
      that.uploadAndSubmit();
    }
  },

  uploadAndSubmit() {
    const openid = this.data.user.openid;
    const aliyunServerURL = env.uploadImageUrl;
    let count = 0;
    let images: any[] = [];
    const uploadImgs = this.data.uploadImgs;
    wx.showLoading({
      title: '',
    })
    if (uploadImgs.length > 0) {
      for (let i = 0; i < uploadImgs.length; i++) {
        let filePath: any = uploadImgs[i];
        uploadImage({
          filePath: filePath,
          dir: `images/shop/${openid}/` + filePath.replace('http://tmp/', ''),
          success: function (res: any) {
            count++;
            images.push(`${aliyunServerURL}/${res}`);
            if (count === uploadImgs.length) {
              // if (that.data.carId !== '') {
              //   images = images.concat(that.data.oldImages);
              //   that.updateCar(e, indexImage, images, that.data.carId);
              // } else {
              //   that.doSubmit(e, indexImage, images);
              // }
            } else {
              // wx.hideLoading();
            }
          },
          fail: function () {
            wx.hideLoading();
          }
        });
      }
    } else {
      // if (that.data.carId !== '') {
      //   images = images.concat(that.data.oldImages);  // 合并编辑之前的汽车图片
      //   that.updateCar(e, indexImage, images, that.data.carId);
      // } else {
      //   that.doSubmit(e, indexImage, images);
      // }
      wx.hideLoading();
    }
  },

  /** 创建汽车 */
  doSubmit(e: any, indexImage: any, images: any) {
    const params = e.detail.value;
    this.setData!({
      submitDisable: true
    });
    apiServicePro.register(Object.assign({ images, indexImage }, params)).then((result: any) => {
      wx.hideLoading(); 
      this.setData!({
        submitDisable: true
      });     
      if (result.code === 200) {
        wx.navigateTo({
          url: `../carDetail/carDetail?id=${result.data.id}&from=creatCarPage`,
        });
      } else if (result.code === 1202) {
        utils.showModal('信息校验不通过，请核对汽车信息');
      } else {
        utils.showModal();
      }
    })
  },

  /** 更新汽车 */
  updateCar(e: any, indexImage: any, images: any, carId: any) {
    const value = e.detail.value;
    const params = Object.assign(value, {'id': carId});
    this.setData!({
      submitDisable: true
    });
    apiServicePro.updateUser(Object.assign({ images, indexImage }, params)).then((result:any) => {
      wx.hideLoading();
      this.setData!({
        submitDisable: true
      });
      if (result.code === 200) {
        wx.navigateTo({
          url: `../carDetail/carDetail?id=${result.data.id}&from=creatCarPage`,
        });
      } else if (result.code === 1202) {
        utils.showModal('信息校验不通过，请核对汽车信息');
      } else {
        utils.showModal();
      }
    })
  },

  /** 删除上传照片 */
  delImage(e: any) {
    const array = e.currentTarget.dataset.array;
    const index = e.currentTarget.dataset.index;
    if (array === 'oldImages') {
      const oldImages = this.data.oldImages;
      oldImages.splice(index, 1);
      this.setData!({
        oldImages
      });
    } else {
      const uploadImgs = this.data.uploadImgs;
      uploadImgs.splice(index, 1);
      this.setData!({
        uploadImgs
      });
    }
  },

  chooseIndexImage() {
    this.chooseImage(1, 'one');
  },

  chooseOtherImage(e: any) {
    const selectPictureNum = e.target.dataset.num;
    let count = 99 - selectPictureNum
    this.chooseImage(count, 'multi');
  },

  /** 选择图片
   *  @type multi-多张图片 one-一张图片
   */
  chooseImage(count: any, type: any) {
    const that = this;
    wx.chooseImage({
      count: count,
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res: any) {
        let uploadImgs = that.data.uploadImgs;
        if (type === 'multi') {
          that.setData!({
            uploadImgs: uploadImgs.concat(res.tempFilePaths),
          });
        } else {
          that.setData!({
            uploadIndexPath: res.tempFilePaths[0],
            indexImage: res.tempFilePaths[0],
          });
        }
      },
    })
  },

  /** 控制pickerCity */
  popPicker() {
    let popHidden = this.data.popHidden;
    this.setData!({
      popHidden: !popHidden,
    })
  },

  /** 选择城市 */
  doSelect(e: any) {
    if (e.detail.name) {
      // const cityId = this.getCityId(e.detail.name);
      this.setData!({
        popHidden: true,
        city: e.detail.name,
        // cityId,
      })
      wx.setStorage({
        key: 'city',
        data: e.detail.name,
      });
    } else {  // 取消按钮
      this.setData!({
        popHidden: true,
      })
    }
  },


  /** 控制pickBrand */
  popBrand() {
    let popHiddenBrand = this.data.popHiddenBrand;
    this.setData!({
      popHiddenBrand: !popHiddenBrand,
    });
  },

  /** 选择城市 */
  doSelectBrand(e: any) {
    if (e.detail.brand) {
      this.setData!({
        popHiddenBrand: true,
        brand: e.detail.brand,
        brandDetail: e.detail.brandDetail,
      });
      wx.setStorage({
        key: 'brand',
        data: e.detail.brand,
      });
    } else {  // 取消按钮
      this.setData!({
        popHiddenBrand: true,
      });
    }
  },

  /** 生日 */
  bindBirthChange(e: any) {
    this.setData!({
      birth: e.detail.value
    })
  },

  bindEducationChange(e: any) {
    const { educationArray } = this.data
    this.setData!({
      education: educationArray[e.detail.value]
    })
  },

  /** 婚姻 */
  bindMarriageChange(e: any) {
    const { isMarriageArray } = this.data
    this.setData!({
      isMarriage: isMarriageArray[e.detail.value]
    })
  },

  bindHasChildChange(e: any) {
    const { hasChildArray } = this.data
    this.setData!({
      hasChild: hasChildArray[e.detail.value]
    })
  },

  bindWantChildChange(e: any) {
    const { wantChildArray } = this.data
    this.setData!({
      hasChild: wantChildArray[e.detail.value]
    })
  },

  bindHaveHouseChange(e: any) {
    const { haveHouseArray } = this.data
    this.setData!({
      haveHouse: haveHouseArray[e.detail.value]
    })
  },

  /** 性别 */
  bindGenderChange(e: any) {
    const { genderArray } = this.data
    this.setData!({
      gender: genderArray[e.detail.value]
    })
  },
  /** 月收入 */
  bindSalaryChange(e: any) {
    const { salaryArray } = this.data
    this.setData!({
      salary: salaryArray[e.detail.value]
    })
  },

  inputNote(e: any) {
    const leftLenth = (300 - e.detail.value.length);
    this.setData!({
      leftLenth: leftLenth > 0 ? leftLenth : 0
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },
})