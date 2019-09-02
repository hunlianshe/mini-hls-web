// pages/feedback/feedback.js

const apiServicePro = require('../../service/api.service');
const config = require('../../config.js');
const uploadImage = require('../../utils/oss.js');

const {
  showModal,
} = require('../../utils/utils');

Page({
  data: {
    shopId: '',
    user: {},
    qrcode: ''
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this
    wx.getStorage({
      key: 'user',
      success: function (res) {
        _this.setData({
          user: res.data
        })
      },
    });
    if (options.shopQrcode !== 'null') {
      // this.getAccessToken(options.shopId);
      console.log('options.shopQrcode', options.shopQrcode);
      this.setData({
        shopQrcode: options.shopQrcode
      })
    } else {
      this.getAccessToken(options.shopId);
    }
    this.setData({
      shopId: options.shopId
    })
  },

  /** 获取用户信息（店铺信息） */
  getAccessToken(shopId) {
    let that = this;
    apiServicePro.getAccessToken().then(result => {
      console.log('result',result)
      var qrcode = result.data;  //对数据进行转换操作
      this.setData({
        qrcode: `data:image/png;base64,${result.data}`
      })
      that.writeQrcode(qrcode);
      // if (result) {
      //   const scene = decodeURIComponent(shopId);
      //   // 生成页面的二维码
      //   wx.request({
      //     url: `https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token=${result.data.access_token}`,
      //     data: {
      //       scene: scene,
      //       page: `pages/shop/shop`
      //     },
      //     method: "POST",
      //     responseType: 'arraybuffer',  //设置响应类型
      //     success(res) {
      //       var qrcode = wx.arrayBufferToBase64(result.data);  //对数据进行转换操作
      //       that.writeQrcode(qrcode);
      //     },
      //     fail(e) {
      //       console.log(e)
      //     }
      //   })
      // }
    });
  },

  /** 将base64格式二维码数据写入临时文件 */
  writeQrcode(qrcode) {
    let shopId = this.data.shopId;
    this.fileManager = wx.getFileSystemManager();
    let that = this;
    let tempQrcodeUrl = `${wx.env.USER_DATA_PATH}/qrcode_${shopId}.png`;
    that.fileManager.writeFile({
      filePath: tempQrcodeUrl,
      data: qrcode,
      encoding: 'base64',
      success: res => {
        console.log('res: \n:', res)
        console.log(tempQrcodeUrl);
        that.uploadQrcode(tempQrcodeUrl);
      },
      fail: res => {
        console.log(res)
      }
    })
  },

  /** 上传二维码临时文件  */
  uploadQrcode(tempQrcodeUrl) {
    let that = this;
    const aliyunServerURL = config.uploadImageUrl;
    const openid = this.data.user.openid;
    uploadImage({
      filePath: tempQrcodeUrl,
      dir: `images/shop/${openid}` + tempQrcodeUrl.replace(wx.env.USER_DATA_PATH, ''),
      success: function (res) {
        const shopQrcode = `${aliyunServerURL}/${res}`;
        console.log('shopQrcode success', shopQrcode);
        that.submitShopQrcode(shopQrcode);
      },
      fail: function (res) {
        console.log('上传二维码临时文件失败');
      }
    })
  },

  /** 上传店铺二维码 */
  submitShopQrcode(shopQrcode) {
    const id = this.data.shopId;
    const params = {
      id,
      shopQrcode,
    }
    apiServicePro.updateShop(params).then((result) => {
      if (result.code === 200) {
        this.setData({
          shopQrcode,
        })
      } else {
        console.log('二维码上传成功');
      }
    })
  },

  /**  保存店铺二维码 */
  saveShopQrcode() {
    const _this = this;
    const shopQrcode = this.data.shopQrcode;
    wx.downloadFile({
      url: shopQrcode,
      success(res) {
        // 只要服务器有响应数据，就会把响应内容写入文件并进入 
        // success 回调，业务需要自行判断是否下载到了想要的内容
        if (res.statusCode === 200) {
          _this.saveImg(res.tempFilePath);
        }
      },
      file(err) {
        showModal('下载文件失败，请重试');
      }
    })
  },

  /** 保存临时文件 */
  saveImg(filePath) {
    wx.saveImageToPhotosAlbum({
      filePath: filePath, // 图片文件路径，可以是临时文件路径或永久文件路径，不支持网络图片路径
      success(res) {
        wx.showToast({
          title: '已保存到系统相册',
        })
      },
      file(err) {
        showModal('保存文件失败，请重试');
      }
    })
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})