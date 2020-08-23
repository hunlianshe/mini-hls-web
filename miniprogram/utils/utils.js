"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.phoneCall = exports.validatePhone = exports.validateImages = exports.validateEmpty = exports.cityReplace = exports.showModal = void 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxNQUFNLFNBQVMsR0FBRyxDQUFDLEtBQVcsRUFBRSxPQUFhLEVBQUUsRUFBRTtJQUMvQyxFQUFFLENBQUMsU0FBUyxDQUFDO1FBQ1gsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNO1FBQzdCLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsWUFBWTtLQUMxQyxDQUFDLENBQUE7QUFDSixDQUFDLENBQUE7QUFzREMsOEJBQVM7QUFwRFgsTUFBTSxXQUFXLEdBQUcsQ0FBQyxHQUFRLEVBQUUsRUFBRTtJQUMvQixPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQy9CLENBQUMsQ0FBQTtBQW1EQyxrQ0FBVztBQWhEYixNQUFNLGFBQWEsR0FBRyxDQUFDLEtBQVUsRUFBRSxJQUFRLEVBQUUsRUFBRTtJQUM3QyxJQUFJLENBQUMsS0FBSyxFQUFFO1FBQ1YsRUFBRSxDQUFDLFNBQVMsQ0FBQztZQUNYLEtBQUssRUFBRSxJQUFJO1lBQ1gsSUFBSSxFQUFFLE1BQU07U0FDYixDQUFDLENBQUM7UUFDSCxPQUFPLEtBQUssQ0FBQztLQUNkO1NBQU07UUFDTCxPQUFPLElBQUksQ0FBQztLQUNiO0FBQ0gsQ0FBQyxDQUFBO0FBdUNDLHNDQUFhO0FBcENmLE1BQU0sY0FBYyxHQUFHLENBQUMsTUFBVSxFQUFFLElBQVEsRUFBRSxFQUFFO0lBQzlDLElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7UUFDdEIsRUFBRSxDQUFDLFNBQVMsQ0FBQztZQUNYLEtBQUssRUFBRSxJQUFJO1lBQ1gsSUFBSSxFQUFFLE1BQU07U0FDYixDQUFDLENBQUM7UUFDSCxPQUFPLEtBQUssQ0FBQztLQUNkO1NBQU07UUFDTCxPQUFPLElBQUksQ0FBQztLQUNiO0FBQ0gsQ0FBQyxDQUFBO0FBMkJDLHdDQUFjO0FBeEJoQixNQUFNLGFBQWEsR0FBRyxDQUFDLEtBQVMsRUFBRSxJQUFRLEVBQUUsRUFBRTtJQUM1QyxNQUFNLEtBQUssR0FBRywwQkFBMEIsQ0FBQztJQUN6QyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUN0QixFQUFFLENBQUMsU0FBUyxDQUFDO1lBQ1gsS0FBSyxFQUFFLElBQUk7WUFDWCxJQUFJLEVBQUUsTUFBTTtTQUNiLENBQUMsQ0FBQztRQUNILE9BQU8sS0FBSyxDQUFDO0tBQ2Q7U0FBTTtRQUNMLE9BQU8sSUFBSSxDQUFDO0tBQ2I7QUFDSCxDQUFDLENBQUE7QUFjQyxzQ0FBYTtBQVpmLE1BQU0sU0FBUyxHQUFHLENBQUMsQ0FBTSxFQUFFLEVBQUU7SUFDM0IsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFBO0lBQzNDLEVBQUUsQ0FBQyxhQUFhLENBQUM7UUFDZixXQUFXLEVBQUUsS0FBSztLQUNuQixDQUFDLENBQUE7QUFDSixDQUFDLENBQUE7QUFRQyw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCBzaG93TW9kYWwgPSAodGl0bGU/OiBhbnksIGNvbnRlbnQ/OiBhbnkpID0+IHtcclxuICB3eC5zaG93TW9kYWwoe1xyXG4gICAgdGl0bGU6IHRpdGxlID8gdGl0bGUgOiAn572R57uc5byC5bi4JyxcclxuICAgIGNvbnRlbnQ6IGNvbnRlbnQgPyBjb250ZW50IDogJ+e9kee7nOW8guW4uO+8jOivt+eojeWQjuWGjeivlScsXHJcbiAgfSlcclxufVxyXG5cclxuY29uc3QgY2l0eVJlcGxhY2UgPSAodmFsOiBhbnkpID0+IHtcclxuICByZXR1cm4gdmFsLnJlcGxhY2UoL+W4giQvLCAnJyk7XHJcbn1cclxuXHJcbi8qKiDmoKHpqozlrZfmrrXkuI3og73kuLrnqbogKi9cclxuY29uc3QgdmFsaWRhdGVFbXB0eSA9ICh2YWx1ZTogYW55LCBkZXNjOmFueSkgPT4ge1xyXG4gIGlmICghdmFsdWUpIHtcclxuICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgIHRpdGxlOiBkZXNjLFxyXG4gICAgICBpY29uOiAnbm9uZScsXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG59XHJcblxyXG4vKiog5qCh6aqM5LiK5Lyg5Zu+54mHICovXHJcbmNvbnN0IHZhbGlkYXRlSW1hZ2VzID0gKGltYWdlczphbnksIGRlc2M6YW55KSA9PiB7XHJcbiAgaWYgKGltYWdlcy5sZW5ndGggPD0gMCkge1xyXG4gICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgdGl0bGU6IGRlc2MsXHJcbiAgICAgIGljb246ICdub25lJyxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn1cclxuXHJcbi8qKiDmoKHpqozmiYvmnLrlj7fnoIHmoLzlvI8gKi9cclxuY29uc3QgdmFsaWRhdGVQaG9uZSA9IChwaG9uZTphbnksIGRlc2M6YW55KSA9PiB7XHJcbiAgY29uc3QgbXlyZWcgPSAvXlsxXVszLDQsNSw3LDhdWzAtOV17OX0kLztcclxuICBpZiAoIW15cmVnLnRlc3QocGhvbmUpKSB7XHJcbiAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICB0aXRsZTogZGVzYyxcclxuICAgICAgaWNvbjogJ25vbmUnLFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgcGhvbmVDYWxsID0gKGU6IGFueSkgPT4ge1xyXG4gIGNvbnN0IHBob25lID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQucGhvbmVcclxuICB3eC5tYWtlUGhvbmVDYWxsKHtcclxuICAgIHBob25lTnVtYmVyOiBwaG9uZSxcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIHNob3dNb2RhbCxcclxuICBjaXR5UmVwbGFjZSxcclxuICB2YWxpZGF0ZUVtcHR5LFxyXG4gIHZhbGlkYXRlSW1hZ2VzLFxyXG4gIHZhbGlkYXRlUGhvbmUsXHJcbiAgcGhvbmVDYWxsXHJcbn0iXX0=