"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const httpServer_1 = require("./httpServer");
const getOpenid = (code) => httpServer_1.default.get({ url: `/users/openidfromwx/${code}` });
exports.getOpenid = getOpenid;
const register = (user) => httpServer_1.default.post({ url: '/users/register', data: user });
exports.register = register;
const getUserInfo = (id) => httpServer_1.default.get({ url: `/users/getUserInfo/${id}` });
exports.getUserInfo = getUserInfo;
const updateUser = (user) => httpServer_1.default.post({ url: `/users/updateUserInfo`, data: user });
exports.updateUser = updateUser;
const putUsersLike = (openid) => httpServer_1.default.put({ url: `/users/like/${openid}` });
exports.putUsersLike = putUsersLike;
const getUsersLikeCount = () => httpServer_1.default.get({ url: `/users/like/count` });
exports.getUsersLikeCount = getUsersLikeCount;
const getUsersListLikes = () => httpServer_1.default.post({ url: `/users/listLikes` });
exports.getUsersListLikes = getUsersListLikes;
const getPsyList = () => httpServer_1.default.get({ url: `/psychological-test/list` });
exports.getPsyList = getPsyList;
const getPsyTest = (id) => httpServer_1.default.get({ url: `/psychological-test/${id}` });
exports.getPsyTest = getPsyTest;
const getFortune = (fortuneName) => httpServer_1.default.get({ url: `/fortune/${fortuneName}` });
exports.getFortune = getFortune;
const getHoroscopet = (consName, type) => httpServer_1.default.get({ url: `/horoscope/realtime?consName=${consName}&type=${type}` });
exports.getHoroscopet = getHoroscopet;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcGkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLDZDQUFzQztBQVF0QyxNQUFNLFNBQVMsR0FBRyxDQUFDLElBQVksRUFBRSxFQUFFLENBQUMsb0JBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsdUJBQXVCLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztBQWlHekYsOEJBQVM7QUF6RlgsTUFBTSxRQUFRLEdBQUcsQ0FBQyxJQUFVLEVBQUUsRUFBRSxDQUFDLG9CQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLGlCQUFpQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBMEZ2Riw0QkFBUTtBQXBGVixNQUFNLFdBQVcsR0FBRyxDQUFDLEVBQVUsRUFBRSxFQUFFLENBQUMsb0JBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsc0JBQXNCLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQXNGdEYsa0NBQVc7QUFoRmIsTUFBTSxVQUFVLEdBQUcsQ0FBQyxJQUFVLEVBQUUsRUFBRSxDQUFDLG9CQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLHVCQUF1QixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBK0UvRixnQ0FBVTtBQTFFWixNQUFNLFlBQVksR0FBRyxDQUFDLE1BQWMsRUFBRSxFQUFFLENBQUMsb0JBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsZUFBZSxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7QUE0RXhGLG9DQUFZO0FBdkVkLE1BQU0saUJBQWlCLEdBQUcsR0FBRyxFQUFFLENBQUMsb0JBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDO0FBd0UzRSw4Q0FBaUI7QUFuRW5CLE1BQU0saUJBQWlCLEdBQUcsR0FBRyxFQUFFLENBQUMsb0JBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDO0FBb0UzRSw4Q0FBaUI7QUEvRG5CLE1BQU0sVUFBVSxHQUFHLEdBQUcsRUFBRSxDQUFDLG9CQUFVLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLDBCQUEwQixFQUFFLENBQUMsQ0FBQztBQWdFM0UsZ0NBQVU7QUEzRFosTUFBTSxVQUFVLEdBQUcsQ0FBQyxFQUFVLEVBQUUsRUFBRSxDQUFDLG9CQUFVLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLHVCQUF1QixFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7QUE0RHRGLGdDQUFVO0FBdkRaLE1BQU0sVUFBVSxHQUFHLENBQUMsV0FBbUIsRUFBRSxFQUFFLENBQUMsb0JBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsWUFBWSxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7QUF3RDdGLGdDQUFVO0FBbkRaLE1BQU0sYUFBYSxHQUFHLENBQUMsUUFBZ0IsRUFBRSxJQUFZLEVBQUUsRUFBRSxDQUFDLG9CQUFVLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLGdDQUFnQyxRQUFRLFNBQVMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBb0R6SSxzQ0FBYTtBQTlDZixNQUFNLGNBQWMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxvQkFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxzQkFBc0IsRUFBRSxDQUFDLENBQUM7QUFnRDNFLHdDQUFjO0FBdkNoQixNQUFNLGFBQWEsR0FBRyxDQUFDLEVBQU8sRUFBRSxFQUFFLENBQUMsb0JBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsd0JBQXdCLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQTRDdkYsc0NBQWE7QUF2Q2YsTUFBTSxXQUFXLEdBQUcsQ0FBQyxNQUFXLEVBQUUsRUFBRSxDQUFDLG9CQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0FBbUM1RixrQ0FBVztBQTdCYixNQUFNLGNBQWMsR0FBRyxDQUFDLE1BQVcsRUFBRSxFQUFFLENBQUMsb0JBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsbUJBQW1CLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7QUE4QmxHLHdDQUFjO0FBeEJoQixNQUFNLFVBQVUsR0FBRyxDQUFDLE1BQVcsRUFBRSxFQUFFLENBQUMsb0JBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7QUF5QjdGLGdDQUFVO0FBbkJaLE1BQU0sVUFBVSxHQUFHLENBQUMsTUFBVyxFQUFFLEVBQUUsQ0FBQyxvQkFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxrQkFBa0IsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztBQW9CN0YsZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIGltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCBodHRwU2VydmVyIGZyb20gJy4vaHR0cFNlcnZlcic7XG5cbmltcG9ydCBVc2VyIGZyb20gJy4uL2ludGVyZmFjZS91c2VyJztcblxuLyoqXG4gKiDku47lvq7kv6Hojrflj5ZvcGVuaWRcbiAqIEBwYXJhbSB7Y29kZTogd3gubG9naW4oKS5jb2RlfVxuICovXG5jb25zdCBnZXRPcGVuaWQgPSAoY29kZTogc3RyaW5nKSA9PiBodHRwU2VydmVyLmdldCh7IHVybDogYC91c2Vycy9vcGVuaWRmcm9td3gvJHtjb2RlfWAgfSk7XG5cbi8vIGNvbnN0IGdldE9wZW5pZCA9IChjb2RlOiBzdHJpbmcpID0+IGh0dHBTZXJ2ZXIuZ2V0KHsgdXJsOiAnL21pbmkvZ2V0T3BlbmlkP2NvZGU9JyArIGNvZGUgfSk7XG5cbi8qKlxuICog5Yib5bu655So5oi3LOeUqOaIt+aOiOadg+aXtuS9v+eUqFxuICogQHBhcmFtIHt1c2VyOiBVc2VyIH1cbiAqL1xuY29uc3QgcmVnaXN0ZXIgPSAodXNlcjogVXNlcikgPT4gaHR0cFNlcnZlci5wb3N0KHsgdXJsOiAnL3VzZXJzL3JlZ2lzdGVyJywgZGF0YTogdXNlciB9KTtcblxuLyoqXG4gKiDojrflj5bnlKjmiLfkv6Hmga9cbiAqIEBwYXJhbSB7fVxuICovXG5jb25zdCBnZXRVc2VySW5mbyA9IChpZDogc3RyaW5nKSA9PiBodHRwU2VydmVyLmdldCh7IHVybDogYC91c2Vycy9nZXRVc2VySW5mby8ke2lkfWAgfSk7XG5cbi8qKlxuICog5pu05paw55So5oi35L+h5oGvXG4gKiBAcGFyYW0ge31cbiAqL1xuY29uc3QgdXBkYXRlVXNlciA9ICh1c2VyOiBVc2VyKSA9PiBodHRwU2VydmVyLnBvc3QoeyB1cmw6IGAvdXNlcnMvdXBkYXRlVXNlckluZm9gLCBkYXRhOiB1c2VyIH0pO1xuXG4vKipcbiAqIOWFs+azqCjmlLbol48p5o6l5Y+jXG4gKi9cbmNvbnN0IHB1dFVzZXJzTGlrZSA9IChvcGVuaWQ6IHN0cmluZykgPT4gaHR0cFNlcnZlci5wdXQoeyB1cmw6IGAvdXNlcnMvbGlrZS8ke29wZW5pZH1gIH0pO1xuXG4vKipcbiAqIOiOt+WPluWWnOasoueahOexu+WIq+WSjOaVsOmHj1xuICovXG5jb25zdCBnZXRVc2Vyc0xpa2VDb3VudCA9ICgpID0+IGh0dHBTZXJ2ZXIuZ2V0KHsgdXJsOiBgL3VzZXJzL2xpa2UvY291bnRgIH0pO1xuXG4vKipcbiAqIOiOt+WPluWvueW6lOWWnOasouexu+WIq+eahOeUqOaIt+WIl+ihqFxuICovXG5jb25zdCBnZXRVc2Vyc0xpc3RMaWtlcyA9ICgpID0+IGh0dHBTZXJ2ZXIucG9zdCh7IHVybDogYC91c2Vycy9saXN0TGlrZXNgIH0pO1xuXG4vKipcbiAqIOiOt+WPluW/g+mHjOa1i+ivleeahOmimOebruWIl+ihqFxuICovXG5jb25zdCBnZXRQc3lMaXN0ID0gKCkgPT4gaHR0cFNlcnZlci5nZXQoeyB1cmw6IGAvcHN5Y2hvbG9naWNhbC10ZXN0L2xpc3RgIH0pO1xuXG4vKipcbiAqIOiOt+WPluW/g+mHjOa1i+ivleeahOmimOebruWIl+ihqFxuICovXG5jb25zdCBnZXRQc3lUZXN0ID0gKGlkOiBzdHJpbmcpID0+IGh0dHBTZXJ2ZXIuZ2V0KHsgdXJsOiBgL3BzeWNob2xvZ2ljYWwtdGVzdC8ke2lkfWAgfSk7XG5cbi8qKlxuICog6I635Y+W5pif5bqn6K+m6KejXG4gKi9cbmNvbnN0IGdldEZvcnR1bmUgPSAoZm9ydHVuZU5hbWU6IHN0cmluZykgPT4gaHR0cFNlcnZlci5nZXQoeyB1cmw6IGAvZm9ydHVuZS8ke2ZvcnR1bmVOYW1lfWAgfSk7XG5cbi8qKlxuICog5pif5bqn6L+Q5Yq/6K+m6KejXG4gKi9cbmNvbnN0IGdldEhvcm9zY29wZXQgPSAoY29uc05hbWU6IHN0cmluZywgdHlwZTogc3RyaW5nKSA9PiBodHRwU2VydmVyLmdldCh7IHVybDogYC9ob3Jvc2NvcGUvcmVhbHRpbWU/Y29uc05hbWU9JHtjb25zTmFtZX0mdHlwZT0ke3R5cGV9YCB9KTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5jb25zdCBnZXRBY2Nlc3NUb2tlbiA9ICgpID0+IGh0dHBTZXJ2ZXIuZ2V0KHsgdXJsOiAnL21pbmkvZ2V0QWNjZXNzVG9rZW4nIH0pO1xuXG5cbi8vIGNvbnN0IHJlZ2lzdGVyID0gKHVzZXI6IGFueSkgPT4gaHR0cFNlcnZlci5wb3N0KHsgdXJsOiAnL3VzZXIvaW5zZXJ0VXNlcicsIGRhdGE6IHVzZXIgfSk7XG5cbi8qKlxuICog6I635Y+W55So5oi35L+h5oGvXG4gKiBAcGFyYW0ge31cbiAqL1xuY29uc3QgZ2V0VXNlckRldGFpbCA9IChpZDogYW55KSA9PiBodHRwU2VydmVyLmdldCh7IHVybDogYC91c2VyL2dldFVzZXJJbmZvP2lkPSR7aWR9YCB9KTtcbi8qKlxuICog6I635Y+W5Z+O5biC5YiX6KGoXG4gKiBAcGFyYW0ge31cbiAqL1xuY29uc3QgZ2V0Q2l0eUxpc3QgPSAocGFyYW1zOiBhbnkpID0+IGh0dHBTZXJ2ZXIucG9zdCh7IHVybDogYC91c2VyL2Rpc3RyaWN0YCwgZGF0YTogcGFyYW1zIH0pO1xuXG4vKipcbiAqIOiOt+WPluWfjuW4guWIl+ihqFxuICogQHBhcmFtIHt9XG4gKi9cbmNvbnN0IGdldEFsbERpc3RyaWN0ID0gKHBhcmFtczogYW55KSA9PiBodHRwU2VydmVyLnBvc3QoeyB1cmw6IGAvdXNlci9hbGxEaXN0cmljdGAsIGRhdGE6IHBhcmFtcyB9KTtcblxuLyoqXG4gKiDliJvlu7rlupfpk7pcbiAqIEBwYXJhbSB7fVxuICovXG5jb25zdCBjcmVhdGVTaG9wID0gKHBhcmFtczogYW55KSA9PiBodHRwU2VydmVyLnBvc3QoeyB1cmw6IGAvc2hvcC9jcmVhdGVTaG9wYCwgZGF0YTogcGFyYW1zIH0pO1xuXG4vKipcbiAqIOabtOaWsOW6l+mTulxuICogQHBhcmFtIHt9XG4gKi9cbmNvbnN0IHVwZGF0ZVNob3AgPSAocGFyYW1zOiBhbnkpID0+IGh0dHBTZXJ2ZXIucG9zdCh7IHVybDogYC9zaG9wL3VwZGF0ZVNob3BgLCBkYXRhOiBwYXJhbXMgfSk7XG5cblxuZXhwb3J0IHtcbiAgZ2V0T3BlbmlkLFxuICByZWdpc3RlcixcbiAgdXBkYXRlVXNlcixcbiAgZ2V0VXNlckluZm8sXG4gIHB1dFVzZXJzTGlrZSxcbiAgZ2V0VXNlcnNMaWtlQ291bnQsIFxuICBnZXRVc2Vyc0xpc3RMaWtlcyxcbiAgZ2V0UHN5TGlzdCxcbiAgZ2V0UHN5VGVzdCxcbiAgZ2V0Rm9ydHVuZSxcbiAgZ2V0SG9yb3Njb3BldCxcblxuICBnZXRBY2Nlc3NUb2tlbixcbiAgZ2V0Q2l0eUxpc3QsXG4gIGdldEFsbERpc3RyaWN0LFxuICBjcmVhdGVTaG9wLFxuICB1cGRhdGVTaG9wLFxuICBnZXRVc2VyRGV0YWlsLFxuICAvLyByZWdpc3Rlcixcbn1cblxuIl19