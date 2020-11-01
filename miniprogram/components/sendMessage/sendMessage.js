import uploadImage from '../../utils/oss';
import config from '../../config';

/**
 * 支持图片文字
 */
Component({
  properties: {
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    sendTap() {
      this.triggerEvent('sendTap', {}, {})
    },
    inputTap(e) {
      this.triggerEvent('inputTap', e, {})
    },
    chooseImage() {
      console.log('are you coming')
      const that = this;
      wx.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
          const tempFilePaths = res.tempFilePaths
          console.log('tempFilePaths',tempFilePaths)
          let dir = `images/hls/${Math.floor(Math.random()*100000)}/` + tempFilePaths[0].replace('http://tmp/','')
          console.log("dir",dir)
          uploadImage({
            filePath: tempFilePaths[0],
            dir,
            success: function (res) {
              console.log('res',res)
              console.log('config',config)
             
              that.triggerEvent('uploadImage', `${config.uploadImageUrl}/${res}`, {})

            //  var indexImage = `${aliyunServerURL}/${res}`;
              // console.log("indexImage",indexImage)
            },
            fail: function () {
            }
          });



        },
      })
    }
  },

})
