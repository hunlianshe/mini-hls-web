var host = "14592619.qcloud.la";
var socket = "https://www.wxmini.top";
// var socket = "http://127.0.0.1:8000";
// var hostUrl = "http://localhost:8009";

var hostUrl = "https://www.wxmini.top/prohls";
// var hostUrl = "http://148.70.243.198:8009"
let ak = "xsiYQN0VwrBHvxmf42BGdxFiTQgqBC4w";
var fileHost = "https://test-buycarshop.oss-cn-beijing.aliyuncs.com";

// let ak = 'vN6wTOTemzzIBB9iZ0ODtCv7pFrtEUa3';
// var hostUrl = "https://www.peajs.top/proqcxd";
// var fileHost = "https://buycarshop.oss-cn-beijing.aliyuncs.com"

var config: any = {
  host,
  ak,
  hostUrl,
  socket,
  loginUrl: `https://${host}/login`,

  requestUrl: `https://${host}/testRequest`,

  openIdUrl: `https://${host}/openid`,

  tunnelUrl: `https://${host}/tunnel`,

  paymentUrl: `https://${host}/payment`,

  templateMessageUrl: `https://${host}/templateMessage`,

  uploadFileUrl: `https://${host}/upload`,

  downloadExampleUrl: `https://${host}/static/weapp.jpg`,

  // aliyun OSS config
  uploadImageUrl: `${fileHost}`, // 默认存在根目录，可根据需求改
  AccessKeySecret: "QaucOO51i55dLUBolkJgs7p2qBn7oC",
  OSSAccessKeyId: "LTAIvWyXwy6LwMKi",
  timeout: 87600, // 这个是上传文件时Policy的失效时间
};

export default config;
