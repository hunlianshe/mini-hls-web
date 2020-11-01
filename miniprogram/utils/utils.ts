import * as Api from '../service/api.service';


const showModal = (title?: any, content?: any) => {
  const model: any = {
    title: title ? title : '网络异常',
  }
  if (content) {
    model.content = content
  }
  wx.showModal(model)
}

const showModelAction = (title: any, success: Function) => {
  const model: any = {
    title: title ? title : '网络异常',
    success: function(_: any) {
      success()
    }
  }
  wx.showModal(model)
}

const cityReplace = (val: any) => {
  return val.replace(/市$/, '');
}

/** 校验字段不能为空 */
const validateEmpty = (value: any, desc:any) => {
  if (!value) {
    wx.showToast({
      title: desc,
      icon: 'none',
    });
    return false;
  } else {
    return true;
  }
}

/** 校验上传图片 */
const validateImages = (images:any, desc:any) => {
  if (images.length <= 0) {
    wx.showToast({
      title: desc,
      icon: 'none',
    });
    return false;
  } else {
    return true;
  }
}

/** 校验手机号码格式 */
const validatePhone = (phone:any, desc:any) => {
  const myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
  if (!myreg.test(phone)) {
    wx.showToast({
      title: desc,
      icon: 'none',
    });
    return false;
  } else {
    return true;
  }
}

const phoneCall = (e: any) => {
  const phone = e.currentTarget.dataset.phone
  wx.makePhoneCall({
    phoneNumber: phone,
  })
}

/** 2020年03月09日 */
const getDate = (dateStr: string) => {
  const date = new Date(dateStr);
  const year = date.getFullYear();
  let month: number | string = date.getMonth() + 1;
  month = month <= 9 ? `0${month}` : month;
  let day: number | string = date.getDate();
  day = day <= 9 ? `0${day}` : day;
  return `${year}年${month}月${day}日`;
};

/** 09:23 */
const getTime = (dateStr: string) => {
  const date = new Date(dateStr);
  let hours: number | string = date.getHours();
  hours = hours <= 9 ? `0${hours}` : hours;
  let minutes: number | string = date.getMinutes();
  minutes = minutes <= 9 ? `0${minutes}` : minutes;
  return `${minutes}:${minutes}`;
}

function formatTime(date: Date): string {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = (n: number) => {
  const str = n.toString()
  return str[1] ? str : '0' + str
}

/** 获取用户信息 */
const getUserInfo = () => {
  let userInfo: any = {};
  wx.getStorage({
    key: 'user', // 用户头像信息
    success: function (res) {
      const { openid } = res.data;
      userInfo = Api.getUserInfo(openid).then((result: any) => {
        if (result) {
          return result.data || {};
        }
      });
    },
  });
  return userInfo;
};


/** 处理权益拦截 */
const dealRightIntercept = (rightType: string ) => {
  let userInfo = getUserInfo();
  const { vipType = '' } = userInfo;
  let needIntercept = false; // 是否需要拦截
  let times = 0;
  let rightTypeData = wx.getStorageSync(rightType); // 从缓存中获取权益使用情况
  let timesNow = rightTypeData.times || 0;
  let rightConfig: any = wx.getStorageSync('rightConfig'); // 从缓存中读取首页中set的权益配置
  switch (vipType) {
    case '': // 普通
      times = rightConfig[0][rightType];
      console.log('读取拦截times：', times);
      needIntercept = timesNow >= times;
      break;
    case 'bronze': // 黄铜
      times = rightConfig[1][rightType];
      console.log('读取拦截times：', times);
      needIntercept = timesNow >= times;
      break;
    case 'platinum': // 白金
      times = rightConfig[2][rightType];
      console.log('读取拦截times：', times);
      needIntercept = timesNow >= times;
      break;
    default:
      needIntercept = false;
      break;
  }
  return needIntercept;
}

const setRightStorage = (rightType: string) => {
  let times = 0;
  let rightData = wx.getStorageSync(rightType);
  let dateNow = new Date();
  // 判断是否是同一天
  if (rightData.updateTime && rightData.updateTime.toDateString() == dateNow.toDateString()) {
    times = rightData.times + 1;
  }
  console.log('设置times：', times);
  wx.setStorage({
    key: rightType,
    data: {
      times,
      dateNow,
    } 
  });
}

export {
  showModal,
  showModelAction,
  cityReplace,
  validateEmpty,
  validateImages,
  validatePhone,
  phoneCall,
  getDate,
  getTime,
  formatTime,
  dealRightIntercept,
  setRightStorage,
}