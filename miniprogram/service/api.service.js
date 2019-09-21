"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const httpServer_1 = require("./httpServer");
const getOpenid = (code) => httpServer_1.default.get({ url: `/users/openidfromwx/${code}` });
exports.getOpenid = getOpenid;
const register = (user) => httpServer_1.default.post({ url: '/users/register', data: user });
exports.register = register;
const getUserInfo = (openid) => httpServer_1.default.get({ url: `/users/getUserInfo/${openid}` });
exports.getUserInfo = getUserInfo;
const updateUser = (user) => httpServer_1.default.post({ url: `/users/updateUserInfo`, data: user });
exports.updateUser = updateUser;
const addPhone = (data) => httpServer_1.default.post({ url: `/users/addPhone`, data, });
exports.addPhone = addPhone;
const sendSms = (data) => httpServer_1.default.post({ url: `/users/sendSms`, data, });
exports.sendSms = sendSms;
const putUsersLike = (openid) => httpServer_1.default.put({ url: `/users/like/${openid}` });
exports.putUsersLike = putUsersLike;
const getUsersLikeCount = () => httpServer_1.default.get({ url: `/users/like/count` });
exports.getUsersLikeCount = getUsersLikeCount;
const getUsersListLikes = (data) => httpServer_1.default.post({ url: `/users/listLikes`, data, });
exports.getUsersListLikes = getUsersListLikes;
const getUserList = (data) => httpServer_1.default.post({ url: `/users/listUsers`, data, });
exports.getUserList = getUserList;
const getPsyList = () => httpServer_1.default.get({ url: `/psychological-test/list` });
exports.getPsyList = getPsyList;
const getPsyTest = (id) => httpServer_1.default.get({ url: `/psychological-test/${id}` });
exports.getPsyTest = getPsyTest;
const getFortune = (fortuneName) => httpServer_1.default.get({ url: `/fortune/${fortuneName}` });
exports.getFortune = getFortune;
const getHoroscopet = (consName, type = 'today') => httpServer_1.default.get({ url: `/fortune/horoscope/realtime?consName=${consName}&type=${type}` });
exports.getHoroscopet = getHoroscopet;
const getConstellationStory = (consName) => httpServer_1.default.get({ url: `/constellation-story/listStory/${consName}` });
exports.getConstellationStory = getConstellationStory;
const getConstellationMmatchingDetail = (me, he) => httpServer_1.default.get({ url: `/fortune/constellationMmatching/detail?me=${me}&he=${he}` });
exports.getConstellationMmatchingDetail = getConstellationMmatchingDetail;
const getGenerateCatOrDogResult = (data) => httpServer_1.default.post({ url: `/psychological-test/generateCatOrDogResult`, data });
exports.getGenerateCatOrDogResult = getGenerateCatOrDogResult;
const getAccessToken = () => httpServer_1.default.get({ url: '/mini/getAccessToken' });
exports.getAccessToken = getAccessToken;
const getUserDetail = (id) => httpServer_1.default.get({ url: `/user/getUserInfo?id=${id}` });
exports.getUserDetail = getUserDetail;
const getCityList = (params) => httpServer_1.default.post({ url: `/user/district`, data: params });
exports.getCityList = getCityList;
const getAllDistrict = (params) => httpServer_1.default.post({ url: `/user/allDistrict`, data: params });
exports.getAllDistrict = getAllDistrict;
const createShop = (params) => httpServer_1.default.post({ url: `/shop/createShop`, data: params });
exports.createShop = createShop;
const updateShop = (params) => httpServer_1.default.post({ url: `/shop/updateShop`, data: params });
exports.updateShop = updateShop;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcGkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLDZDQUFzQztBQVF0QyxNQUFNLFNBQVMsR0FBRyxDQUFDLElBQVksRUFBRSxFQUFFLENBQUMsb0JBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsdUJBQXVCLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztBQWlJekYsOEJBQVM7QUF6SFgsTUFBTSxRQUFRLEdBQUcsQ0FBQyxJQUFVLEVBQUUsRUFBRSxDQUFDLG9CQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLGlCQUFpQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBMEh2Riw0QkFBUTtBQXBIVixNQUFNLFdBQVcsR0FBRyxDQUFDLE1BQWMsRUFBRSxFQUFFLENBQUMsb0JBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsc0JBQXNCLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztBQXdIOUYsa0NBQVc7QUFsSGIsTUFBTSxVQUFVLEdBQUcsQ0FBQyxJQUFTLEVBQUUsRUFBRSxDQUFDLG9CQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLHVCQUF1QixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBK0c5RixnQ0FBVTtBQXpHWixNQUFNLFFBQVEsR0FBRyxDQUFDLElBQVMsRUFBRSxFQUFFLENBQUMsb0JBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsaUJBQWlCLEVBQUUsSUFBSSxHQUFHLENBQUMsQ0FBQztBQTJHakYsNEJBQVE7QUFyR1YsTUFBTSxPQUFPLEdBQUcsQ0FBQyxJQUFTLEVBQUUsRUFBRSxDQUFDLG9CQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLGdCQUFnQixFQUFFLElBQUksR0FBRyxDQUFDLENBQUM7QUFvRy9FLDBCQUFP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QW5DYixNQUFNLGNBQWMsR0FBRyxDQUFDLE1BQVcsRUFBRSxFQUFFLENBQUMsb0JBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsbUJBQW1CLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7QUFvQ2xHLHdDQUFjO0FBOUJoQixNQUFNLFVBQVUsR0FBRyxDQUFDLE1BQVcsRUFBRSxFQUFFLENBQUMsb0JBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7QUErQjdGLGdDQUFVO0FBekJaLE1BQU0sVUFBVSxHQUFHLENBQUMsTUFBVyxFQUFFLEVBQUUsQ0FBQyxvQkFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxrQkFBa0IsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztBQTBCN0YsZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIGltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCBodHRwU2VydmVyIGZyb20gJy4vaHR0cFNlcnZlcic7XG5cbmltcG9ydCBVc2VyIGZyb20gJy4uL2ludGVyZmFjZS91c2VyJztcblxuLyoqXG4gKiDku47lvq7kv6Hojrflj5ZvcGVuaWRcbiAqIEBwYXJhbSB7Y29kZTogd3gubG9naW4oKS5jb2RlfVxuICovXG5jb25zdCBnZXRPcGVuaWQgPSAoY29kZTogc3RyaW5nKSA9PiBodHRwU2VydmVyLmdldCh7IHVybDogYC91c2Vycy9vcGVuaWRmcm9td3gvJHtjb2RlfWAgfSk7XG5cbi8vIGNvbnN0IGdldE9wZW5pZCA9IChjb2RlOiBzdHJpbmcpID0+IGh0dHBTZXJ2ZXIuZ2V0KHsgdXJsOiAnL21pbmkvZ2V0T3BlbmlkP2NvZGU9JyArIGNvZGUgfSk7XG5cbi8qKlxuICog5Yib5bu655So5oi3LOeUqOaIt+aOiOadg+aXtuS9v+eUqFxuICogQHBhcmFtIHt1c2VyOiBVc2VyIH1cbiAqL1xuY29uc3QgcmVnaXN0ZXIgPSAodXNlcjogVXNlcikgPT4gaHR0cFNlcnZlci5wb3N0KHsgdXJsOiAnL3VzZXJzL3JlZ2lzdGVyJywgZGF0YTogdXNlciB9KTtcblxuLyoqXG4gKiDojrflj5bnlKjmiLfkv6Hmga9cbiAqIEBwYXJhbSB7fVxuICovXG5jb25zdCBnZXRVc2VySW5mbyA9IChvcGVuaWQ6IHN0cmluZykgPT4gaHR0cFNlcnZlci5nZXQoeyB1cmw6IGAvdXNlcnMvZ2V0VXNlckluZm8vJHtvcGVuaWR9YCB9KTtcblxuLyoqXG4gKiDmm7TmlrDnlKjmiLfkv6Hmga9cbiAqIEBwYXJhbSB7fVxuICovXG5jb25zdCB1cGRhdGVVc2VyID0gKHVzZXI6IGFueSkgPT4gaHR0cFNlcnZlci5wb3N0KHsgdXJsOiBgL3VzZXJzL3VwZGF0ZVVzZXJJbmZvYCwgZGF0YTogdXNlciB9KTtcblxuLyoqXG4gKiDmiYvmnLrlj7fms6jlhoxcbiAqIEBwYXJhbSB7fVxuICovXG5jb25zdCBhZGRQaG9uZSA9IChkYXRhOiBhbnkpID0+IGh0dHBTZXJ2ZXIucG9zdCh7IHVybDogYC91c2Vycy9hZGRQaG9uZWAsIGRhdGEsIH0pO1xuXG4vKipcbiAqIOWPkemAgeefreS/oemqjOivgeeggVxuICogQHBhcmFtIHt9XG4gKi9cbmNvbnN0IHNlbmRTbXMgPSAoZGF0YTogYW55KSA9PiBodHRwU2VydmVyLnBvc3QoeyB1cmw6IGAvdXNlcnMvc2VuZFNtc2AsIGRhdGEsIH0pO1xuXG4vKipcbiAqIOWFs+azqCjmlLbol48p5o6l5Y+jXG4gKi9cbmNvbnN0IHB1dFVzZXJzTGlrZSA9IChvcGVuaWQ6IHN0cmluZykgPT4gaHR0cFNlcnZlci5wdXQoeyB1cmw6IGAvdXNlcnMvbGlrZS8ke29wZW5pZH1gIH0pO1xuXG4vKipcbiAqIOiOt+WPluWWnOasoueahOexu+WIq+WSjOaVsOmHj1xuICovXG5jb25zdCBnZXRVc2Vyc0xpa2VDb3VudCA9ICgpID0+IGh0dHBTZXJ2ZXIuZ2V0KHsgdXJsOiBgL3VzZXJzL2xpa2UvY291bnRgIH0pO1xuXG4vKipcbiAqIOiOt+WPluWvueW6lOWWnOasouexu+WIq+eahOeUqOaIt+WIl+ihqFxuICovXG5jb25zdCBnZXRVc2Vyc0xpc3RMaWtlcyA9IChkYXRhOiBhbnkpID0+IGh0dHBTZXJ2ZXIucG9zdCh7IHVybDogYC91c2Vycy9saXN0TGlrZXNgLCBkYXRhLCB9KTtcblxuLyoqXG4gKiDojrflj5bnlKjmiLfliJfooahcbiAqL1xuY29uc3QgZ2V0VXNlckxpc3QgPSAoZGF0YTogYW55KSA9PiBodHRwU2VydmVyLnBvc3QoeyB1cmw6IGAvdXNlcnMvbGlzdFVzZXJzYCwgZGF0YSwgfSk7XG5cbi8qKlxuICog6I635Y+W5b+D6YeM5rWL6K+V55qE6aKY55uu5YiX6KGoXG4gKi9cbmNvbnN0IGdldFBzeUxpc3QgPSAoKSA9PiBodHRwU2VydmVyLmdldCh7IHVybDogYC9wc3ljaG9sb2dpY2FsLXRlc3QvbGlzdGAgfSk7XG5cbi8qKlxuICog6I635Y+W5b+D6YeM5rWL6K+V55qE6aKY55uu5YiX6KGoXG4gKi9cbmNvbnN0IGdldFBzeVRlc3QgPSAoaWQ6IHN0cmluZykgPT4gaHR0cFNlcnZlci5nZXQoeyB1cmw6IGAvcHN5Y2hvbG9naWNhbC10ZXN0LyR7aWR9YCB9KTtcblxuLyoqXG4gKiDojrflj5bmmJ/luqfor6bop6NcbiAqL1xuY29uc3QgZ2V0Rm9ydHVuZSA9IChmb3J0dW5lTmFtZTogc3RyaW5nKSA9PiBodHRwU2VydmVyLmdldCh7IHVybDogYC9mb3J0dW5lLyR7Zm9ydHVuZU5hbWV9YCB9KTtcblxuLyoqXG4gKiDmmJ/luqfov5Dlir/or6bop6NcbiAqL1xuY29uc3QgZ2V0SG9yb3Njb3BldCA9IChjb25zTmFtZTogc3RyaW5nLCB0eXBlID0gJ3RvZGF5JykgPT4gaHR0cFNlcnZlci5nZXQoeyB1cmw6IGAvZm9ydHVuZS9ob3Jvc2NvcGUvcmVhbHRpbWU/Y29uc05hbWU9JHtjb25zTmFtZX0mdHlwZT0ke3R5cGV9YCB9KTtcblxuLyoqXG4gKiDmmJ/luqfmlYXkuotcbiAqL1xuY29uc3QgZ2V0Q29uc3RlbGxhdGlvblN0b3J5ID0gKGNvbnNOYW1lOiBzdHJpbmcpID0+IGh0dHBTZXJ2ZXIuZ2V0KHsgdXJsOiBgL2NvbnN0ZWxsYXRpb24tc3RvcnkvbGlzdFN0b3J5LyR7Y29uc05hbWV9YCB9KTtcblxuLyoqXG4gKiDmmJ/luqfljLnphY1cbiAqL1xuY29uc3QgZ2V0Q29uc3RlbGxhdGlvbk1tYXRjaGluZ0RldGFpbCA9IChtZTogc3RyaW5nLCBoZTogc3RyaW5nKSA9PiBodHRwU2VydmVyLmdldCh7IHVybDogYC9mb3J0dW5lL2NvbnN0ZWxsYXRpb25NbWF0Y2hpbmcvZGV0YWlsP21lPSR7bWV9JmhlPSR7aGV9YCB9KTtcblxuLyoqXG4gKiDojrflj5bnjKvni5fljLnphY1cbiAqL1xuY29uc3QgZ2V0R2VuZXJhdGVDYXRPckRvZ1Jlc3VsdCA9IChkYXRhOiBhbnkpID0+IGh0dHBTZXJ2ZXIucG9zdCh7IHVybDogYC9wc3ljaG9sb2dpY2FsLXRlc3QvZ2VuZXJhdGVDYXRPckRvZ1Jlc3VsdGAsIGRhdGEgfSk7XG5cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbmNvbnN0IGdldEFjY2Vzc1Rva2VuID0gKCkgPT4gaHR0cFNlcnZlci5nZXQoeyB1cmw6ICcvbWluaS9nZXRBY2Nlc3NUb2tlbicgfSk7XG5cblxuLy8gY29uc3QgcmVnaXN0ZXIgPSAodXNlcjogYW55KSA9PiBodHRwU2VydmVyLnBvc3QoeyB1cmw6ICcvdXNlci9pbnNlcnRVc2VyJywgZGF0YTogdXNlciB9KTtcblxuLyoqXG4gKiDojrflj5bnlKjmiLfkv6Hmga9cbiAqIEBwYXJhbSB7fVxuICovXG5jb25zdCBnZXRVc2VyRGV0YWlsID0gKGlkOiBhbnkpID0+IGh0dHBTZXJ2ZXIuZ2V0KHsgdXJsOiBgL3VzZXIvZ2V0VXNlckluZm8/aWQ9JHtpZH1gIH0pO1xuXG4vKipcbiAqIOiOt+WPluWfjuW4guWIl+ihqFxuICogQHBhcmFtIHt9XG4gKi9cbmNvbnN0IGdldENpdHlMaXN0ID0gKHBhcmFtczogYW55KSA9PiBodHRwU2VydmVyLnBvc3QoeyB1cmw6IGAvdXNlci9kaXN0cmljdGAsIGRhdGE6IHBhcmFtcyB9KTtcblxuLyoqXG4gKiDojrflj5bln47luILliJfooahcbiAqIEBwYXJhbSB7fVxuICovXG5jb25zdCBnZXRBbGxEaXN0cmljdCA9IChwYXJhbXM6IGFueSkgPT4gaHR0cFNlcnZlci5wb3N0KHsgdXJsOiBgL3VzZXIvYWxsRGlzdHJpY3RgLCBkYXRhOiBwYXJhbXMgfSk7XG5cbi8qKlxuICog5Yib5bu65bqX6ZO6XG4gKiBAcGFyYW0ge31cbiAqL1xuY29uc3QgY3JlYXRlU2hvcCA9IChwYXJhbXM6IGFueSkgPT4gaHR0cFNlcnZlci5wb3N0KHsgdXJsOiBgL3Nob3AvY3JlYXRlU2hvcGAsIGRhdGE6IHBhcmFtcyB9KTtcblxuLyoqXG4gKiDmm7TmlrDlupfpk7pcbiAqIEBwYXJhbSB7fVxuICovXG5jb25zdCB1cGRhdGVTaG9wID0gKHBhcmFtczogYW55KSA9PiBodHRwU2VydmVyLnBvc3QoeyB1cmw6IGAvc2hvcC91cGRhdGVTaG9wYCwgZGF0YTogcGFyYW1zIH0pO1xuXG5cbmV4cG9ydCB7XG4gIGdldE9wZW5pZCxcbiAgcmVnaXN0ZXIsXG4gIHVwZGF0ZVVzZXIsXG4gIHNlbmRTbXMsXG4gIGFkZFBob25lLFxuICBnZXRVc2VySW5mbyxcbiAgcHV0VXNlcnNMaWtlLFxuICBnZXRVc2Vyc0xpa2VDb3VudCwgXG4gIGdldFVzZXJzTGlzdExpa2VzLFxuICBnZXRVc2VyTGlzdCxcbiAgZ2V0UHN5TGlzdCxcbiAgZ2V0UHN5VGVzdCxcbiAgZ2V0Rm9ydHVuZSxcbiAgZ2V0SG9yb3Njb3BldCxcbiAgZ2V0Q29uc3RlbGxhdGlvblN0b3J5LFxuICBnZXRDb25zdGVsbGF0aW9uTW1hdGNoaW5nRGV0YWlsLFxuICBnZXRHZW5lcmF0ZUNhdE9yRG9nUmVzdWx0LFxuXG4gIGdldEFjY2Vzc1Rva2VuLFxuICBnZXRDaXR5TGlzdCxcbiAgZ2V0QWxsRGlzdHJpY3QsXG4gIGNyZWF0ZVNob3AsXG4gIHVwZGF0ZVNob3AsXG4gIGdldFVzZXJEZXRhaWwsXG4gIC8vIHJlZ2lzdGVyLFxufVxuXG4iXX0=