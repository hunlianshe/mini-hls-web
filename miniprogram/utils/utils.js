"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Api = require("../service/api.service");
const showModal = (title, content) => {
    const model = {
        title: title ? title : "网络异常",
    };
    if (content) {
        model.content = content;
    }
    wx.showModal(model);
};
exports.showModal = showModal;
const showModelAction = (title, success) => {
    const model = {
        title: title ? title : "网络异常",
        success: function (_) {
            success();
        },
    };
    wx.showModal(model);
};
exports.showModelAction = showModelAction;
const cityReplace = (val) => {
    return val.replace(/市$/, "");
};
exports.cityReplace = cityReplace;
const validateEmpty = (value, desc) => {
    if (!value) {
        wx.showToast({
            title: desc,
            icon: "none",
        });
        return false;
    }
    else {
        return true;
    }
};
exports.validateEmpty = validateEmpty;
const validateImages = (images, desc) => {
    if (images.length <= 0) {
        wx.showToast({
            title: desc,
            icon: "none",
        });
        return false;
    }
    else {
        return true;
    }
};
exports.validateImages = validateImages;
const validatePhone = (phone, desc) => {
    const myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
    if (!myreg.test(phone)) {
        wx.showToast({
            title: desc,
            icon: "none",
        });
        return false;
    }
    else {
        return true;
    }
};
exports.validatePhone = validatePhone;
const phoneCall = (e) => {
    const phone = e.currentTarget.dataset.phone;
    wx.makePhoneCall({
        phoneNumber: phone,
    });
};
exports.phoneCall = phoneCall;
const getDate = (dateStr) => {
    if (!dateStr) {
        return '';
    }
    const date = new Date(dateStr);
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    month = month <= 9 ? `0${month}` : month;
    let day = date.getDate();
    day = day <= 9 ? `0${day}` : day;
    return `${year}年${month}月${day}日`;
};
exports.getDate = getDate;
const getTime = (dateStr) => {
    const date = new Date(dateStr);
    let hours = date.getHours();
    hours = hours <= 9 ? `0${hours}` : hours;
    let minutes = date.getMinutes();
    minutes = minutes <= 9 ? `0${minutes}` : minutes;
    return `${hours}:${minutes}`;
};
exports.getTime = getTime;
function formatTime(date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    return ([year, month, day].map(formatNumber).join("/") +
        " " +
        [hour, minute, second].map(formatNumber).join(":"));
}
exports.formatTime = formatTime;
function formatHLSTime(dateStr) {
    if (dateStr === '') {
        return '';
    }
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    console.log(`-------`, year, month, day);
    return [year, month, day].map(formatNumber).join(".");
}
exports.formatHLSTime = formatHLSTime;
const formatNumber = (n) => {
    const str = n.toString();
    return str[1] ? str : "0" + str;
};
const getUserInfo = () => {
    let userInfo = {};
    wx.getStorage({
        key: "user",
        success: function (res) {
            const { openid } = res.data;
            userInfo = Api.getUserInfo(openid).then((result) => {
                console.log("result", result);
                if (result) {
                    return result.data || {};
                }
            });
        },
    });
    return userInfo;
};
exports.getUserInfo = getUserInfo;
const dealRightIntercept = (rightType) => {
    const userInfo = wx.getStorageSync("userInfo");
    console.log("userInfo", userInfo);
    const { vipType = "" } = userInfo;
    let needIntercept = false;
    let times = 0;
    let rightTypeData = wx.getStorageSync(rightType);
    let timesNow = rightTypeData.times || 0;
    let rightConfig = wx.getStorageSync("rightConfig");
    switch (vipType) {
        case "":
            times = rightConfig[0][rightType];
            console.log("读取拦截times：", times);
            needIntercept = timesNow >= times;
            break;
        case "bronze":
            times = rightConfig[1][rightType];
            console.log("读取拦截times：", times);
            console.log("xianzaitimes：", timesNow);
            needIntercept = timesNow >= times;
            break;
        case "platinum":
            times = rightConfig[2][rightType];
            console.log("读取拦截times：", times);
            needIntercept = timesNow >= times;
            break;
        default:
            needIntercept = false;
            break;
    }
    return needIntercept;
};
exports.dealRightIntercept = dealRightIntercept;
const setRightStorage = (rightType, value = 0) => {
    let times = 0;
    let rightData = wx.getStorageSync(rightType);
    let dateNow = new Date();
    if (rightData.updateTime &&
        rightData.updateTime.toDateString() == dateNow.toDateString()) {
        times = rightData.times + 1;
    }
    if (value) {
        times = value;
    }
    console.log("设置times：", times);
    wx.setStorage({
        key: rightType,
        data: {
            times,
            dateNow,
        },
    });
};
exports.setRightStorage = setRightStorage;
const dealFateChatIntercept = (toOpenid) => {
    let rightType = 'fateChat';
    const userInfo = wx.getStorageSync("userInfo");
    const { vipType = "" } = userInfo;
    let needIntercept = false;
    let times = 0;
    let chatSession = wx.getStorageSync('chatSession');
    console.log("chatSession>>>>", chatSession);
    let openidList = chatSession.openidList || [];
    let timesNow = openidList.length;
    let rightConfig = wx.getStorageSync("rightConfig");
    const findIndex = openidList.findIndex((openid) => openid === toOpenid);
    switch (vipType) {
        case "":
            times = rightConfig[0][rightType];
            console.log("读取拦截times：", times);
            if (timesNow < times || findIndex !== -1) {
                needIntercept = false;
            }
            else {
                needIntercept = true;
            }
            break;
        case "bronze":
            times = rightConfig[1][rightType];
            console.log("读取拦截times：", times);
            console.log("timesNow:", timesNow);
            if (timesNow < times || findIndex !== -1) {
                needIntercept = false;
            }
            else {
                needIntercept = true;
            }
            break;
        case "platinum":
            times = rightConfig[2][rightType];
            console.log("读取拦截times：", times);
            if (timesNow < times || findIndex !== -1) {
                needIntercept = false;
            }
            else {
                needIntercept = true;
            }
            break;
        default:
            needIntercept = false;
            break;
    }
    return needIntercept;
};
exports.dealFateChatIntercept = dealFateChatIntercept;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUE4QztBQUU5QyxNQUFNLFNBQVMsR0FBRyxDQUFDLEtBQVcsRUFBRSxPQUFhLEVBQUUsRUFBRTtJQUMvQyxNQUFNLEtBQUssR0FBUTtRQUNqQixLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU07S0FDOUIsQ0FBQztJQUNGLElBQUksT0FBTyxFQUFFO1FBQ1gsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7S0FDekI7SUFDRCxFQUFFLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3RCLENBQUMsQ0FBQztBQXVQQSw4QkFBUztBQXJQWCxNQUFNLGVBQWUsR0FBRyxDQUFDLEtBQVUsRUFBRSxPQUFpQixFQUFFLEVBQUU7SUFDeEQsTUFBTSxLQUFLLEdBQVE7UUFDakIsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNO1FBQzdCLE9BQU8sRUFBRSxVQUFVLENBQU07WUFDdkIsT0FBTyxFQUFFLENBQUM7UUFDWixDQUFDO0tBQ0YsQ0FBQztJQUNGLEVBQUUsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDdEIsQ0FBQyxDQUFDO0FBOE9BLDBDQUFlO0FBNU9qQixNQUFNLFdBQVcsR0FBRyxDQUFDLEdBQVEsRUFBRSxFQUFFO0lBQy9CLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDL0IsQ0FBQyxDQUFDO0FBMk9BLGtDQUFXO0FBeE9iLE1BQU0sYUFBYSxHQUFHLENBQUMsS0FBVSxFQUFFLElBQVMsRUFBRSxFQUFFO0lBQzlDLElBQUksQ0FBQyxLQUFLLEVBQUU7UUFDVixFQUFFLENBQUMsU0FBUyxDQUFDO1lBQ1gsS0FBSyxFQUFFLElBQUk7WUFDWCxJQUFJLEVBQUUsTUFBTTtTQUNiLENBQUMsQ0FBQztRQUNILE9BQU8sS0FBSyxDQUFDO0tBQ2Q7U0FBTTtRQUNMLE9BQU8sSUFBSSxDQUFDO0tBQ2I7QUFDSCxDQUFDLENBQUM7QUErTkEsc0NBQWE7QUE1TmYsTUFBTSxjQUFjLEdBQUcsQ0FBQyxNQUFXLEVBQUUsSUFBUyxFQUFFLEVBQUU7SUFDaEQsSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtRQUN0QixFQUFFLENBQUMsU0FBUyxDQUFDO1lBQ1gsS0FBSyxFQUFFLElBQUk7WUFDWCxJQUFJLEVBQUUsTUFBTTtTQUNiLENBQUMsQ0FBQztRQUNILE9BQU8sS0FBSyxDQUFDO0tBQ2Q7U0FBTTtRQUNMLE9BQU8sSUFBSSxDQUFDO0tBQ2I7QUFDSCxDQUFDLENBQUM7QUFtTkEsd0NBQWM7QUFoTmhCLE1BQU0sYUFBYSxHQUFHLENBQUMsS0FBVSxFQUFFLElBQVMsRUFBRSxFQUFFO0lBQzlDLE1BQU0sS0FBSyxHQUFHLDBCQUEwQixDQUFDO0lBQ3pDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ3RCLEVBQUUsQ0FBQyxTQUFTLENBQUM7WUFDWCxLQUFLLEVBQUUsSUFBSTtZQUNYLElBQUksRUFBRSxNQUFNO1NBQ2IsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxLQUFLLENBQUM7S0FDZDtTQUFNO1FBQ0wsT0FBTyxJQUFJLENBQUM7S0FDYjtBQUNILENBQUMsQ0FBQztBQXNNQSxzQ0FBYTtBQXBNZixNQUFNLFNBQVMsR0FBRyxDQUFDLENBQU0sRUFBRSxFQUFFO0lBQzNCLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztJQUM1QyxFQUFFLENBQUMsYUFBYSxDQUFDO1FBQ2YsV0FBVyxFQUFFLEtBQUs7S0FDbkIsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBZ01BLDhCQUFTO0FBN0xYLE1BQU0sT0FBTyxHQUFHLENBQUMsT0FBZSxFQUFFLEVBQUU7SUFDbEMsSUFBSSxDQUFDLE9BQU8sRUFBRTtRQUNaLE9BQU8sRUFBRSxDQUFDO0tBQ1g7SUFDRCxNQUFNLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMvQixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDaEMsSUFBSSxLQUFLLEdBQW9CLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDakQsS0FBSyxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUN6QyxJQUFJLEdBQUcsR0FBb0IsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDakMsT0FBTyxHQUFHLElBQUksSUFBSSxLQUFLLElBQUksR0FBRyxHQUFHLENBQUM7QUFDcEMsQ0FBQyxDQUFDO0FBbUxBLDBCQUFPO0FBaExULE1BQU0sT0FBTyxHQUFHLENBQUMsT0FBZSxFQUFFLEVBQUU7SUFDbEMsTUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDL0IsSUFBSSxLQUFLLEdBQW9CLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM3QyxLQUFLLEdBQUcsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ3pDLElBQUksT0FBTyxHQUFvQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDakQsT0FBTyxHQUFHLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztJQUNqRCxPQUFPLEdBQUcsS0FBSyxJQUFJLE9BQU8sRUFBRSxDQUFDO0FBQy9CLENBQUMsQ0FBQztBQTBLQSwwQkFBTztBQXhLVCxTQUFTLFVBQVUsQ0FBQyxJQUFVO0lBQzVCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNoQyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ2xDLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMzQixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDN0IsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ2pDLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUVqQyxPQUFPLENBQ0wsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQzlDLEdBQUc7UUFDSCxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FDbkQsQ0FBQztBQUNKLENBQUM7QUE0SkMsZ0NBQVU7QUExSlosU0FBUyxhQUFhLENBQUMsT0FBZTtJQUNwQyxJQUFJLE9BQU8sS0FBSyxFQUFFLEVBQUU7UUFDbEIsT0FBTyxFQUFFLENBQUM7S0FDWDtJQUNELE1BQU0sSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQy9CLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNoQyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ2xDLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3pDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDeEQsQ0FBQztBQW9KQyxzQ0FBYTtBQWxKZixNQUFNLFlBQVksR0FBRyxDQUFDLENBQVMsRUFBRSxFQUFFO0lBQ2pDLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQ2xDLENBQUMsQ0FBQztBQUdGLE1BQU0sV0FBVyxHQUFHLEdBQUcsRUFBRTtJQUN2QixJQUFJLFFBQVEsR0FBUSxFQUFFLENBQUM7SUFDdkIsRUFBRSxDQUFDLFVBQVUsQ0FBQztRQUNaLEdBQUcsRUFBRSxNQUFNO1FBQ1gsT0FBTyxFQUFFLFVBQVUsR0FBRztZQUNwQixNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztZQUM1QixRQUFRLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFXLEVBQUUsRUFBRTtnQkFDdEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUMsTUFBTSxDQUFDLENBQUE7Z0JBQzVCLElBQUksTUFBTSxFQUFFO29CQUNWLE9BQU8sTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7aUJBQzFCO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO0tBQ0YsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxRQUFRLENBQUM7QUFDbEIsQ0FBQyxDQUFDO0FBOEhBLGtDQUFXO0FBM0hiLE1BQU0sa0JBQWtCLEdBQUcsQ0FBQyxTQUFpQixFQUFFLEVBQUU7SUFDL0MsTUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNsQyxNQUFNLEVBQUUsT0FBTyxHQUFHLEVBQUUsRUFBRSxHQUFHLFFBQVEsQ0FBQztJQUNsQyxJQUFJLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDMUIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ2QsSUFBSSxhQUFhLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNqRCxJQUFJLFFBQVEsR0FBRyxhQUFhLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztJQUN4QyxJQUFJLFdBQVcsR0FBUSxFQUFFLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3hELFFBQVEsT0FBTyxFQUFFO1FBQ2YsS0FBSyxFQUFFO1lBQ0wsS0FBSyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNqQyxhQUFhLEdBQUcsUUFBUSxJQUFJLEtBQUssQ0FBQztZQUNsQyxNQUFNO1FBQ1IsS0FBSyxRQUFRO1lBQ1gsS0FBSyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUN2QyxhQUFhLEdBQUcsUUFBUSxJQUFJLEtBQUssQ0FBQztZQUNsQyxNQUFNO1FBQ1IsS0FBSyxVQUFVO1lBQ2IsS0FBSyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNqQyxhQUFhLEdBQUcsUUFBUSxJQUFJLEtBQUssQ0FBQztZQUNsQyxNQUFNO1FBQ1I7WUFDRSxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLE1BQU07S0FDVDtJQUNELE9BQU8sYUFBYSxDQUFDO0FBQ3ZCLENBQUMsQ0FBQztBQXdGQSxnREFBa0I7QUF0RnBCLE1BQU0sZUFBZSxHQUFHLENBQUMsU0FBaUIsRUFBRSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEVBQUU7SUFDdkQsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ2QsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM3QyxJQUFJLE9BQU8sR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0lBRXpCLElBQ0UsU0FBUyxDQUFDLFVBQVU7UUFDcEIsU0FBUyxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsSUFBSSxPQUFPLENBQUMsWUFBWSxFQUFFLEVBQzdEO1FBQ0EsS0FBSyxHQUFHLFNBQVMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0tBQzdCO0lBQ0QsSUFBSSxLQUFLLEVBQUU7UUFDVCxLQUFLLEdBQUcsS0FBSyxDQUFDO0tBQ2Y7SUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMvQixFQUFFLENBQUMsVUFBVSxDQUFDO1FBQ1osR0FBRyxFQUFFLFNBQVM7UUFDZCxJQUFJLEVBQUU7WUFDSixLQUFLO1lBQ0wsT0FBTztTQUNSO0tBQ0YsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBaUVBLDBDQUFlO0FBNURqQixNQUFNLHFCQUFxQixHQUFHLENBQUMsUUFBZ0IsRUFBRSxFQUFFO0lBQ2pELElBQUksU0FBUyxHQUFHLFVBQVUsQ0FBQztJQUMzQixNQUFNLFFBQVEsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQy9DLE1BQU0sRUFBRSxPQUFPLEdBQUcsRUFBRSxFQUFFLEdBQUcsUUFBUSxDQUFDO0lBQ2xDLElBQUksYUFBYSxHQUFHLEtBQUssQ0FBQztJQUMxQixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDZCxJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDNUMsSUFBSSxVQUFVLEdBQUcsV0FBVyxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUM7SUFDOUMsSUFBSSxRQUFRLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQztJQUNqQyxJQUFJLFdBQVcsR0FBUSxFQUFFLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3hELE1BQU0sU0FBUyxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFXLEVBQUUsRUFBRSxDQUFDLE1BQU0sS0FBSyxRQUFRLENBQUMsQ0FBQTtJQUM1RSxRQUFRLE9BQU8sRUFBRTtRQUNmLEtBQUssRUFBRTtZQUNMLEtBQUssR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDakMsSUFBSSxRQUFRLEdBQUcsS0FBSyxJQUFJLFNBQVMsS0FBSyxDQUFDLENBQUMsRUFBRTtnQkFDeEMsYUFBYSxHQUFHLEtBQUssQ0FBQTthQUN0QjtpQkFBTTtnQkFDTCxhQUFhLEdBQUcsSUFBSSxDQUFDO2FBQ3RCO1lBQ0QsTUFBTTtRQUNSLEtBQUssUUFBUTtZQUNYLEtBQUssR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDbkMsSUFBSSxRQUFRLEdBQUcsS0FBSyxJQUFJLFNBQVMsS0FBSyxDQUFDLENBQUMsRUFBRTtnQkFDeEMsYUFBYSxHQUFHLEtBQUssQ0FBQTthQUN0QjtpQkFBTTtnQkFDTCxhQUFhLEdBQUcsSUFBSSxDQUFDO2FBQ3RCO1lBQ0QsTUFBTTtRQUNSLEtBQUssVUFBVTtZQUNiLEtBQUssR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDakMsSUFBSSxRQUFRLEdBQUcsS0FBSyxJQUFJLFNBQVMsS0FBSyxDQUFDLENBQUMsRUFBRTtnQkFDeEMsYUFBYSxHQUFHLEtBQUssQ0FBQTthQUN0QjtpQkFBTTtnQkFDTCxhQUFhLEdBQUcsSUFBSSxDQUFDO2FBQ3RCO1lBQ0QsTUFBTTtRQUNSO1lBQ0UsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUN0QixNQUFNO0tBQ1Q7SUFDRCxPQUFPLGFBQWEsQ0FBQztBQUN2QixDQUFDLENBQUM7QUFlQSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBBcGkgZnJvbSBcIi4uL3NlcnZpY2UvYXBpLnNlcnZpY2VcIjtcblxuY29uc3Qgc2hvd01vZGFsID0gKHRpdGxlPzogYW55LCBjb250ZW50PzogYW55KSA9PiB7XG4gIGNvbnN0IG1vZGVsOiBhbnkgPSB7XG4gICAgdGl0bGU6IHRpdGxlID8gdGl0bGUgOiBcIue9kee7nOW8guW4uFwiLFxuICB9O1xuICBpZiAoY29udGVudCkge1xuICAgIG1vZGVsLmNvbnRlbnQgPSBjb250ZW50O1xuICB9XG4gIHd4LnNob3dNb2RhbChtb2RlbCk7XG59O1xuXG5jb25zdCBzaG93TW9kZWxBY3Rpb24gPSAodGl0bGU6IGFueSwgc3VjY2VzczogRnVuY3Rpb24pID0+IHtcbiAgY29uc3QgbW9kZWw6IGFueSA9IHtcbiAgICB0aXRsZTogdGl0bGUgPyB0aXRsZSA6IFwi572R57uc5byC5bi4XCIsXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKF86IGFueSkge1xuICAgICAgc3VjY2VzcygpO1xuICAgIH0sXG4gIH07XG4gIHd4LnNob3dNb2RhbChtb2RlbCk7XG59O1xuXG5jb25zdCBjaXR5UmVwbGFjZSA9ICh2YWw6IGFueSkgPT4ge1xuICByZXR1cm4gdmFsLnJlcGxhY2UoL+W4giQvLCBcIlwiKTtcbn07XG5cbi8qKiDmoKHpqozlrZfmrrXkuI3og73kuLrnqbogKi9cbmNvbnN0IHZhbGlkYXRlRW1wdHkgPSAodmFsdWU6IGFueSwgZGVzYzogYW55KSA9PiB7XG4gIGlmICghdmFsdWUpIHtcbiAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgdGl0bGU6IGRlc2MsXG4gICAgICBpY29uOiBcIm5vbmVcIixcbiAgICB9KTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cbi8qKiDmoKHpqozkuIrkvKDlm77niYcgKi9cbmNvbnN0IHZhbGlkYXRlSW1hZ2VzID0gKGltYWdlczogYW55LCBkZXNjOiBhbnkpID0+IHtcbiAgaWYgKGltYWdlcy5sZW5ndGggPD0gMCkge1xuICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICB0aXRsZTogZGVzYyxcbiAgICAgIGljb246IFwibm9uZVwiLFxuICAgIH0pO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuLyoqIOagoemqjOaJi+acuuWPt+eggeagvOW8jyAqL1xuY29uc3QgdmFsaWRhdGVQaG9uZSA9IChwaG9uZTogYW55LCBkZXNjOiBhbnkpID0+IHtcbiAgY29uc3QgbXlyZWcgPSAvXlsxXVszLDQsNSw3LDhdWzAtOV17OX0kLztcbiAgaWYgKCFteXJlZy50ZXN0KHBob25lKSkge1xuICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICB0aXRsZTogZGVzYyxcbiAgICAgIGljb246IFwibm9uZVwiLFxuICAgIH0pO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuY29uc3QgcGhvbmVDYWxsID0gKGU6IGFueSkgPT4ge1xuICBjb25zdCBwaG9uZSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnBob25lO1xuICB3eC5tYWtlUGhvbmVDYWxsKHtcbiAgICBwaG9uZU51bWJlcjogcGhvbmUsXG4gIH0pO1xufTtcblxuLyoqIDIwMjDlubQwM+aciDA55pelICovXG5jb25zdCBnZXREYXRlID0gKGRhdGVTdHI6IHN0cmluZykgPT4ge1xuICBpZiAoIWRhdGVTdHIpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRhdGVTdHIpO1xuICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICBsZXQgbW9udGg6IG51bWJlciB8IHN0cmluZyA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XG4gIG1vbnRoID0gbW9udGggPD0gOSA/IGAwJHttb250aH1gIDogbW9udGg7XG4gIGxldCBkYXk6IG51bWJlciB8IHN0cmluZyA9IGRhdGUuZ2V0RGF0ZSgpO1xuICBkYXkgPSBkYXkgPD0gOSA/IGAwJHtkYXl9YCA6IGRheTtcbiAgcmV0dXJuIGAke3llYXJ95bm0JHttb250aH3mnIgke2RheX3ml6VgO1xufTtcblxuLyoqIDA5OjIzICovXG5jb25zdCBnZXRUaW1lID0gKGRhdGVTdHI6IHN0cmluZykgPT4ge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoZGF0ZVN0cik7XG4gIGxldCBob3VyczogbnVtYmVyIHwgc3RyaW5nID0gZGF0ZS5nZXRIb3VycygpO1xuICBob3VycyA9IGhvdXJzIDw9IDkgPyBgMCR7aG91cnN9YCA6IGhvdXJzO1xuICBsZXQgbWludXRlczogbnVtYmVyIHwgc3RyaW5nID0gZGF0ZS5nZXRNaW51dGVzKCk7XG4gIG1pbnV0ZXMgPSBtaW51dGVzIDw9IDkgPyBgMCR7bWludXRlc31gIDogbWludXRlcztcbiAgcmV0dXJuIGAke2hvdXJzfToke21pbnV0ZXN9YDtcbn07XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWUoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gIGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMTtcbiAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XG4gIGNvbnN0IGhvdXIgPSBkYXRlLmdldEhvdXJzKCk7XG4gIGNvbnN0IG1pbnV0ZSA9IGRhdGUuZ2V0TWludXRlcygpO1xuICBjb25zdCBzZWNvbmQgPSBkYXRlLmdldFNlY29uZHMoKTtcblxuICByZXR1cm4gKFxuICAgIFt5ZWFyLCBtb250aCwgZGF5XS5tYXAoZm9ybWF0TnVtYmVyKS5qb2luKFwiL1wiKSArXG4gICAgXCIgXCIgK1xuICAgIFtob3VyLCBtaW51dGUsIHNlY29uZF0ubWFwKGZvcm1hdE51bWJlcikuam9pbihcIjpcIilcbiAgKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0SExTVGltZShkYXRlU3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoZGF0ZVN0ciA9PT0gJycpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRhdGVTdHIpO1xuICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XG4gIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xuICBjb25zb2xlLmxvZyhgLS0tLS0tLWAsIHllYXIsIG1vbnRoLCBkYXkpO1xuICByZXR1cm4gW3llYXIsIG1vbnRoLCBkYXldLm1hcChmb3JtYXROdW1iZXIpLmpvaW4oXCIuXCIpO1xufVxuXG5jb25zdCBmb3JtYXROdW1iZXIgPSAobjogbnVtYmVyKSA9PiB7XG4gIGNvbnN0IHN0ciA9IG4udG9TdHJpbmcoKTtcbiAgcmV0dXJuIHN0clsxXSA/IHN0ciA6IFwiMFwiICsgc3RyO1xufTtcblxuLyoqIOiOt+WPlueUqOaIt+S/oeaBryAqL1xuY29uc3QgZ2V0VXNlckluZm8gPSAoKSA9PiB7XG4gIGxldCB1c2VySW5mbzogYW55ID0ge307XG4gIHd4LmdldFN0b3JhZ2Uoe1xuICAgIGtleTogXCJ1c2VyXCIsIC8vIOeUqOaIt+WktOWDj+S/oeaBr1xuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgIGNvbnN0IHsgb3BlbmlkIH0gPSByZXMuZGF0YTtcbiAgICAgIHVzZXJJbmZvID0gQXBpLmdldFVzZXJJbmZvKG9wZW5pZCkudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXN1bHRcIixyZXN1bHQpXG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRhdGEgfHwge307XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gIH0pO1xuICByZXR1cm4gdXNlckluZm87XG59O1xuXG4vKiog5aSE55CG5p2D55uK5oum5oiqICovXG5jb25zdCBkZWFsUmlnaHRJbnRlcmNlcHQgPSAocmlnaHRUeXBlOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgdXNlckluZm8gPSB3eC5nZXRTdG9yYWdlU3luYyhcInVzZXJJbmZvXCIpO1xuICBjb25zb2xlLmxvZyhcInVzZXJJbmZvXCIsIHVzZXJJbmZvKTtcbiAgY29uc3QgeyB2aXBUeXBlID0gXCJcIiB9ID0gdXNlckluZm87XG4gIGxldCBuZWVkSW50ZXJjZXB0ID0gZmFsc2U7IC8vIOaYr+WQpumcgOimgeaLpuaIqlxuICBsZXQgdGltZXMgPSAwO1xuICBsZXQgcmlnaHRUeXBlRGF0YSA9IHd4LmdldFN0b3JhZ2VTeW5jKHJpZ2h0VHlwZSk7IC8vIOS7jue8k+WtmOS4reiOt+WPluadg+ebiuS9v+eUqOaDheWGtVxuICBsZXQgdGltZXNOb3cgPSByaWdodFR5cGVEYXRhLnRpbWVzIHx8IDA7XG4gIGxldCByaWdodENvbmZpZzogYW55ID0gd3guZ2V0U3RvcmFnZVN5bmMoXCJyaWdodENvbmZpZ1wiKTsgLy8g5LuO57yT5a2Y5Lit6K+75Y+W6aaW6aG15Litc2V055qE5p2D55uK6YWN572uXG4gIHN3aXRjaCAodmlwVHlwZSkge1xuICAgIGNhc2UgXCJcIjogLy8g5pmu6YCaXG4gICAgICB0aW1lcyA9IHJpZ2h0Q29uZmlnWzBdW3JpZ2h0VHlwZV07XG4gICAgICBjb25zb2xlLmxvZyhcIuivu+WPluaLpuaIqnRpbWVz77yaXCIsIHRpbWVzKTtcbiAgICAgIG5lZWRJbnRlcmNlcHQgPSB0aW1lc05vdyA+PSB0aW1lcztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJicm9uemVcIjogLy8g6buE6ZOcXG4gICAgICB0aW1lcyA9IHJpZ2h0Q29uZmlnWzFdW3JpZ2h0VHlwZV07XG4gICAgICBjb25zb2xlLmxvZyhcIuivu+WPluaLpuaIqnRpbWVz77yaXCIsIHRpbWVzKTtcbiAgICAgIGNvbnNvbGUubG9nKFwieGlhbnphaXRpbWVz77yaXCIsIHRpbWVzTm93KTtcbiAgICAgIG5lZWRJbnRlcmNlcHQgPSB0aW1lc05vdyA+PSB0aW1lcztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJwbGF0aW51bVwiOiAvLyDnmb3ph5FcbiAgICAgIHRpbWVzID0gcmlnaHRDb25maWdbMl1bcmlnaHRUeXBlXTtcbiAgICAgIGNvbnNvbGUubG9nKFwi6K+75Y+W5oum5oiqdGltZXPvvJpcIiwgdGltZXMpO1xuICAgICAgbmVlZEludGVyY2VwdCA9IHRpbWVzTm93ID49IHRpbWVzO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIG5lZWRJbnRlcmNlcHQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICB9XG4gIHJldHVybiBuZWVkSW50ZXJjZXB0O1xufTtcblxuY29uc3Qgc2V0UmlnaHRTdG9yYWdlID0gKHJpZ2h0VHlwZTogc3RyaW5nLCB2YWx1ZSA9IDApID0+IHtcbiAgbGV0IHRpbWVzID0gMDtcbiAgbGV0IHJpZ2h0RGF0YSA9IHd4LmdldFN0b3JhZ2VTeW5jKHJpZ2h0VHlwZSk7XG4gIGxldCBkYXRlTm93ID0gbmV3IERhdGUoKTtcbiAgLy8g5Yik5pat5piv5ZCm5piv5ZCM5LiA5aSpXG4gIGlmIChcbiAgICByaWdodERhdGEudXBkYXRlVGltZSAmJlxuICAgIHJpZ2h0RGF0YS51cGRhdGVUaW1lLnRvRGF0ZVN0cmluZygpID09IGRhdGVOb3cudG9EYXRlU3RyaW5nKClcbiAgKSB7XG4gICAgdGltZXMgPSByaWdodERhdGEudGltZXMgKyAxO1xuICB9XG4gIGlmICh2YWx1ZSkge1xuICAgIHRpbWVzID0gdmFsdWU7XG4gIH1cbiAgY29uc29sZS5sb2coXCLorr7nva50aW1lc++8mlwiLCB0aW1lcyk7XG4gIHd4LnNldFN0b3JhZ2Uoe1xuICAgIGtleTogcmlnaHRUeXBlLFxuICAgIGRhdGE6IHtcbiAgICAgIHRpbWVzLFxuICAgICAgZGF0ZU5vdyxcbiAgICB9LFxuICB9KTtcbn07XG5cbi8qKiDnvJjliIbogYrlpKnmi6bmiKrljZXni6zlpITnkIZcbiAqIOWIpOaWreW9k+WkqeiBiuWkqeS6uuWIl+ihqFxuICovXG5jb25zdCBkZWFsRmF0ZUNoYXRJbnRlcmNlcHQgPSAodG9PcGVuaWQ6IHN0cmluZykgPT4ge1xuICBsZXQgcmlnaHRUeXBlID0gJ2ZhdGVDaGF0JztcbiAgY29uc3QgdXNlckluZm8gPSB3eC5nZXRTdG9yYWdlU3luYyhcInVzZXJJbmZvXCIpO1xuICBjb25zdCB7IHZpcFR5cGUgPSBcIlwiIH0gPSB1c2VySW5mbztcbiAgbGV0IG5lZWRJbnRlcmNlcHQgPSBmYWxzZTsgLy8g5piv5ZCm6ZyA6KaB5oum5oiqXG4gIGxldCB0aW1lcyA9IDA7XG4gIGxldCBjaGF0U2Vzc2lvbiA9IHd4LmdldFN0b3JhZ2VTeW5jKCdjaGF0U2Vzc2lvbicpO1xuICBjb25zb2xlLmxvZyhcImNoYXRTZXNzaW9uPj4+PlwiLCBjaGF0U2Vzc2lvbik7XG4gIGxldCBvcGVuaWRMaXN0ID0gY2hhdFNlc3Npb24ub3BlbmlkTGlzdCB8fCBbXTtcbiAgbGV0IHRpbWVzTm93ID0gb3BlbmlkTGlzdC5sZW5ndGg7XG4gIGxldCByaWdodENvbmZpZzogYW55ID0gd3guZ2V0U3RvcmFnZVN5bmMoXCJyaWdodENvbmZpZ1wiKTsgLy8g5LuO57yT5a2Y5Lit6K+75Y+W6aaW6aG15Litc2V055qE5p2D55uK6YWN572uXG4gIGNvbnN0IGZpbmRJbmRleCA9IG9wZW5pZExpc3QuZmluZEluZGV4KChvcGVuaWQ6IGFueSkgPT4gb3BlbmlkID09PSB0b09wZW5pZClcbiAgc3dpdGNoICh2aXBUeXBlKSB7XG4gICAgY2FzZSBcIlwiOiAvLyDmma7pgJpcbiAgICAgIHRpbWVzID0gcmlnaHRDb25maWdbMF1bcmlnaHRUeXBlXTtcbiAgICAgIGNvbnNvbGUubG9nKFwi6K+75Y+W5oum5oiqdGltZXPvvJpcIiwgdGltZXMpO1xuICAgICAgaWYgKHRpbWVzTm93IDwgdGltZXMgfHwgZmluZEluZGV4ICE9PSAtMSkge1xuICAgICAgICBuZWVkSW50ZXJjZXB0ID0gZmFsc2VcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5lZWRJbnRlcmNlcHQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImJyb256ZVwiOiAvLyDpu4Tpk5xcbiAgICAgIHRpbWVzID0gcmlnaHRDb25maWdbMV1bcmlnaHRUeXBlXTtcbiAgICAgIGNvbnNvbGUubG9nKFwi6K+75Y+W5oum5oiqdGltZXPvvJpcIiwgdGltZXMpO1xuICAgICAgY29uc29sZS5sb2coXCJ0aW1lc05vdzpcIiwgdGltZXNOb3cpO1xuICAgICAgaWYgKHRpbWVzTm93IDwgdGltZXMgfHwgZmluZEluZGV4ICE9PSAtMSkge1xuICAgICAgICBuZWVkSW50ZXJjZXB0ID0gZmFsc2VcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5lZWRJbnRlcmNlcHQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcInBsYXRpbnVtXCI6IC8vIOeZvemHkVxuICAgICAgdGltZXMgPSByaWdodENvbmZpZ1syXVtyaWdodFR5cGVdO1xuICAgICAgY29uc29sZS5sb2coXCLor7vlj5bmi6bmiKp0aW1lc++8mlwiLCB0aW1lcyk7XG4gICAgICBpZiAodGltZXNOb3cgPCB0aW1lcyB8fCBmaW5kSW5kZXggIT09IC0xKSB7XG4gICAgICAgIG5lZWRJbnRlcmNlcHQgPSBmYWxzZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmVlZEludGVyY2VwdCA9IHRydWU7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgbmVlZEludGVyY2VwdCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gIH1cbiAgcmV0dXJuIG5lZWRJbnRlcmNlcHQ7XG59O1xuXG5leHBvcnQge1xuICBzaG93TW9kYWwsXG4gIHNob3dNb2RlbEFjdGlvbixcbiAgY2l0eVJlcGxhY2UsXG4gIHZhbGlkYXRlRW1wdHksXG4gIHZhbGlkYXRlSW1hZ2VzLFxuICB2YWxpZGF0ZVBob25lLFxuICBwaG9uZUNhbGwsXG4gIGdldERhdGUsXG4gIGdldFRpbWUsXG4gIGZvcm1hdFRpbWUsXG4gIGRlYWxSaWdodEludGVyY2VwdCxcbiAgc2V0UmlnaHRTdG9yYWdlLFxuICBkZWFsRmF0ZUNoYXRJbnRlcmNlcHQsXG4gIGZvcm1hdEhMU1RpbWUsXG4gIGdldFVzZXJJbmZvXG59O1xuIl19