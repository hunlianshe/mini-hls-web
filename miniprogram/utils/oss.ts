import env from '../config';

import Base64 from  './Base64';
import * as utils from '../utils/utils';

// require('./hmac.js');
// require('./sha1.js');
import Crypto from './crypto';

const uploadFile = function (params:any) {
  if (!params.filePath || params.filePath.length < 9) {
    wx.showModal({
      title: '图片错误',
      content: '请重试',
      showCancel: false,
    })
    return;
  }
  const aliyunFileKey = params.dir;
  const aliyunServerURL = env.uploadImageUrl;
  const accessid = env.OSSAccessKeyId;
  const policyBase64 = getPolicyBase64();
  const signature = getSignature(policyBase64);

  wx.uploadFile({
    url: aliyunServerURL,
    filePath: params.filePath,
    name: 'file',
    formData: {
      //'name': "picture.png",
      'key': aliyunFileKey,
      'policy': policyBase64,
      'OSSAccessKeyId': accessid,
      'signature': signature,
      'success_action_status': '200',
    },
    success: function (res) {
      if (res.statusCode != 200) {
        if (params.fail) {
          params.fail(res)
        }
        return;
      }
      if (params.success) {
        params.success(aliyunFileKey);
      }
    },
    fail: function (err: any) {
      utils.showModal();
      err.wxaddinfo = aliyunServerURL;
      if (params.fail) {
        params.fail(err)
      };
    },
  })
}

const getPolicyBase64 = function () {
  let date = new Date();
  date.setHours(date.getHours() + env.timeout);
  let srcT = date.toISOString();
  const policyText = {
    "expiration": srcT, //设置该Policy的失效时间
    "conditions": [
      ["content-length-range", 0, 5 * 1024 * 1024] // 设置上传文件的大小限制,5mb
    ]
  };

  const policyBase64 = Base64.encode(JSON.stringify(policyText));
  return policyBase64;
}

const getSignature = function (policyBase64:any) {
  const accesskey = env.AccessKeySecret;
  const bytes = Crypto.HMAC(Crypto.SHA1, policyBase64, accesskey, {
    asBytes: true
  });
  const signature = Crypto.util.bytesToBase64(bytes);

  return signature;
}

export default uploadFile;
