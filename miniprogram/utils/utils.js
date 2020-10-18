"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const showModal = (title, content) => {
    wx.showModal({
        title: title ? title : '网络异常',
        content: content ? content : '网络异常，请稍后再试',
    });
};
exports.showModal = showModal;
const cityReplace = (val) => {
    return val.replace(/市$/, '');
};
exports.cityReplace = cityReplace;
const validateEmpty = (value, desc) => {
    if (!value) {
        wx.showToast({
            title: desc,
            icon: 'none',
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
            icon: 'none',
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
            icon: 'none',
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
    return `${minutes}:${minutes}`;
};
exports.getTime = getTime;
function formatTime(date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':');
}
exports.formatTime = formatTime;
const formatNumber = (n) => {
    const str = n.toString();
    return str[1] ? str : '0' + str;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLE1BQU0sU0FBUyxHQUFHLENBQUMsS0FBVyxFQUFFLE9BQWEsRUFBRSxFQUFFO0lBQy9DLEVBQUUsQ0FBQyxTQUFTLENBQUM7UUFDWCxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU07UUFDN0IsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxZQUFZO0tBQzFDLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQTtBQTJGQyw4QkFBUztBQXpGWCxNQUFNLFdBQVcsR0FBRyxDQUFDLEdBQVEsRUFBRSxFQUFFO0lBQy9CLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDL0IsQ0FBQyxDQUFBO0FBd0ZDLGtDQUFXO0FBckZiLE1BQU0sYUFBYSxHQUFHLENBQUMsS0FBVSxFQUFFLElBQVEsRUFBRSxFQUFFO0lBQzdDLElBQUksQ0FBQyxLQUFLLEVBQUU7UUFDVixFQUFFLENBQUMsU0FBUyxDQUFDO1lBQ1gsS0FBSyxFQUFFLElBQUk7WUFDWCxJQUFJLEVBQUUsTUFBTTtTQUNiLENBQUMsQ0FBQztRQUNILE9BQU8sS0FBSyxDQUFDO0tBQ2Q7U0FBTTtRQUNMLE9BQU8sSUFBSSxDQUFDO0tBQ2I7QUFDSCxDQUFDLENBQUE7QUE0RUMsc0NBQWE7QUF6RWYsTUFBTSxjQUFjLEdBQUcsQ0FBQyxNQUFVLEVBQUUsSUFBUSxFQUFFLEVBQUU7SUFDOUMsSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtRQUN0QixFQUFFLENBQUMsU0FBUyxDQUFDO1lBQ1gsS0FBSyxFQUFFLElBQUk7WUFDWCxJQUFJLEVBQUUsTUFBTTtTQUNiLENBQUMsQ0FBQztRQUNILE9BQU8sS0FBSyxDQUFDO0tBQ2Q7U0FB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RSxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7QUFDbEgsQ0FBQztBQWdCQyxnQ0FBVTtBQWRaLE1BQU0sWUFBWSxHQUFHLENBQUMsQ0FBUyxFQUFFLEVBQUU7SUFDakMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFBO0lBQ3hCLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUE7QUFDakMsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCBzaG93TW9kYWwgPSAodGl0bGU/OiBhbnksIGNvbnRlbnQ/OiBhbnkpID0+IHtcbiAgd3guc2hvd01vZGFsKHtcbiAgICB0aXRsZTogdGl0bGUgPyB0aXRsZSA6ICfnvZHnu5zlvILluLgnLFxuICAgIGNvbnRlbnQ6IGNvbnRlbnQgPyBjb250ZW50IDogJ+e9kee7nOW8guW4uO+8jOivt+eojeWQjuWGjeivlScsXG4gIH0pXG59XG5cbmNvbnN0IGNpdHlSZXBsYWNlID0gKHZhbDogYW55KSA9PiB7XG4gIHJldHVybiB2YWwucmVwbGFjZSgv5biCJC8sICcnKTtcbn1cblxuLyoqIOagoemqjOWtl+auteS4jeiDveS4uuepuiAqL1xuY29uc3QgdmFsaWRhdGVFbXB0eSA9ICh2YWx1ZTogYW55LCBkZXNjOmFueSkgPT4ge1xuICBpZiAoIXZhbHVlKSB7XG4gICAgd3guc2hvd1RvYXN0KHtcbiAgICAgIHRpdGxlOiBkZXNjLFxuICAgICAgaWNvbjogJ25vbmUnLFxuICAgIH0pO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuXG4vKiog5qCh6aqM5LiK5Lyg5Zu+54mHICovXG5jb25zdCB2YWxpZGF0ZUltYWdlcyA9IChpbWFnZXM6YW55LCBkZXNjOmFueSkgPT4ge1xuICBpZiAoaW1hZ2VzLmxlbmd0aCA8PSAwKSB7XG4gICAgd3guc2hvd1RvYXN0KHtcbiAgICAgIHRpdGxlOiBkZXNjLFxuICAgICAgaWNvbjogJ25vbmUnLFxuICAgIH0pO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuXG4vKiog5qCh6aqM5omL5py65Y+356CB5qC85byPICovXG5jb25zdCB2YWxpZGF0ZVBob25lID0gKHBob25lOmFueSwgZGVzYzphbnkpID0+IHtcbiAgY29uc3QgbXlyZWcgPSAvXlsxXVszLDQsNSw3LDhdWzAtOV17OX0kLztcbiAgaWYgKCFteXJlZy50ZXN0KHBob25lKSkge1xuICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICB0aXRsZTogZGVzYyxcbiAgICAgIGljb246ICdub25lJyxcbiAgICB9KTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cblxuY29uc3QgcGhvbmVDYWxsID0gKGU6IGFueSkgPT4ge1xuICBjb25zdCBwaG9uZSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnBob25lXG4gIHd4Lm1ha2VQaG9uZUNhbGwoe1xuICAgIHBob25lTnVtYmVyOiBwaG9uZSxcbiAgfSlcbn1cblxuLyoqIDIwMjDlubQwM+aciDA55pelICovXG5jb25zdCBnZXREYXRlID0gKGRhdGVTdHI6IHN0cmluZykgPT4ge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoZGF0ZVN0cik7XG4gIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gIGxldCBtb250aDogbnVtYmVyIHwgc3RyaW5nID0gZGF0ZS5nZXRNb250aCgpICsgMTtcbiAgbW9udGggPSBtb250aCA8PSA5ID8gYDAke21vbnRofWAgOiBtb250aDtcbiAgbGV0IGRheTogbnVtYmVyIHwgc3RyaW5nID0gZGF0ZS5nZXREYXRlKCk7XG4gIGRheSA9IGRheSA8PSA5ID8gYDAke2RheX1gIDogZGF5O1xuICByZXR1cm4gYCR7eWVhcn3lubQke21vbnRofeaciCR7ZGF5feaXpWA7XG59O1xuXG4vKiogMDk6MjMgKi9cbmNvbnN0IGdldFRpbWUgPSAoZGF0ZVN0cjogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkYXRlU3RyKTtcbiAgbGV0IGhvdXJzOiBudW1iZXIgfCBzdHJpbmcgPSBkYXRlLmdldEhvdXJzKCk7XG4gIGhvdXJzID0gaG91cnMgPD0gOSA/IGAwJHtob3Vyc31gIDogaG91cnM7XG4gIGxldCBtaW51dGVzOiBudW1iZXIgfCBzdHJpbmcgPSBkYXRlLmdldE1pbnV0ZXMoKTtcbiAgbWludXRlcyA9IG1pbnV0ZXMgPD0gOSA/IGAwJHttaW51dGVzfWAgOiBtaW51dGVzO1xuICByZXR1cm4gYCR7bWludXRlc306JHttaW51dGVzfWA7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWUoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKClcbiAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxXG4gIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpXG4gIGNvbnN0IGhvdXIgPSBkYXRlLmdldEhvdXJzKClcbiAgY29uc3QgbWludXRlID0gZGF0ZS5nZXRNaW51dGVzKClcbiAgY29uc3Qgc2Vjb25kID0gZGF0ZS5nZXRTZWNvbmRzKClcblxuICByZXR1cm4gW3llYXIsIG1vbnRoLCBkYXldLm1hcChmb3JtYXROdW1iZXIpLmpvaW4oJy8nKSArICcgJyArIFtob3VyLCBtaW51dGUsIHNlY29uZF0ubWFwKGZvcm1hdE51bWJlcikuam9pbignOicpXG59XG5cbmNvbnN0IGZvcm1hdE51bWJlciA9IChuOiBudW1iZXIpID0+IHtcbiAgY29uc3Qgc3RyID0gbi50b1N0cmluZygpXG4gIHJldHVybiBzdHJbMV0gPyBzdHIgOiAnMCcgKyBzdHJcbn1cblxuZXhwb3J0IHtcbiAgc2hvd01vZGFsLFxuICBjaXR5UmVwbGFjZSxcbiAgdmFsaWRhdGVFbXB0eSxcbiAgdmFsaWRhdGVJbWFnZXMsXG4gIHZhbGlkYXRlUGhvbmUsXG4gIHBob25lQ2FsbCxcbiAgZ2V0RGF0ZSxcbiAgZ2V0VGltZSxcbiAgZm9ybWF0VGltZSxcbn0iXX0=