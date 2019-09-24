"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
const loading_1 = require("./loading");
const _handleResponse = (res, { resolve, reject }) => {
    if (res.code == 401) {
        wx.navigateTo({
            url: '../index/index?auth=true',
        });
        return;
    }
    if (res.code === 500) {
        reject(res);
        throw res.msg;
    }
    resolve(res);
};
const _request = (...argus) => {
    let user;
    try {
        user = wx.getStorageSync('user');
        console.log('user', user);
        const header_pre = {
            'authorization': 'Bearer ' + user.token,
            'content-type': 'application/json'
        };
        let options = argus[0];
        let { method = 'GET', url, data = {}, header, reject = function () { console.log('default reject func'); }, } = options;
        let { needLoading = '0' } = data;
        if (needLoading === '1') {
            loading_1.default.show();
        }
        wx.request({
            url: config_1.default.hostUrl + url,
            method: method,
            data: data,
            header: Object.assign({}, header_pre, header),
            success: (res) => {
                _handleResponse(res.data, options);
            },
            fail: (res) => {
                if (reject) {
                    reject(res);
                }
            },
            complete: () => {
                if (needLoading === '1') {
                    loading_1.default.hide();
                }
            }
        });
    }
    catch (e) {
        console.log('请求异常');
    }
};
const promisify = (callback) => {
    return (options, ...params) => {
        return new Promise((resolve, reject) => {
            callback(Object.assign({}, options, { resolve: resolve, reject: reject }), ...params);
        });
    };
};
const _get = (...argus) => _request(Object.assign({}, argus[0], { method: 'GET' }));
const _put = (...argus) => _request(Object.assign({}, argus[0], { method: 'PUT' }));
const _post = (...argus) => _request(Object.assign({}, argus[0], { method: 'POST' }));
const _post_form = (...argus) => _request(Object.assign({}, argus[0], {
    method: 'POST',
    header: {
        'authorization': 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJQd0MgTmV3IFZlbnR1cmVzIiwiaWF0IjoxNTQxNTc3MTE4LCJleHAiOjE2MDQ3MzU1MTgsImF1ZCI6InB3Yy5jb20iLCJzdWIiOiJQd0MgTmV3IFZlbnR1cmVzIHRlc3QgdG9rZW4iLCJjbGllbnROYW1lIjoiUHdDIE9uZUNoYXQifQ.d4_jlSqDndisproPjiy1zy1_aELwMYVLk_nQRwCGcTc',
        'content-type': 'application/x-www-form-urlencoded'
    }
}));
let HttpServer = {
    get: promisify(_get),
    put: promisify(_put),
    post: promisify(_post),
    post_form: promisify(_post_form),
};
exports.default = HttpServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cFNlcnZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImh0dHBTZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxzQ0FBK0I7QUFDL0IsdUNBQWdDO0FBRWhDLE1BQU0sZUFBZSxHQUFHLENBQUMsR0FBUSxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBTyxFQUFFLEVBQUU7SUFDN0QsSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLEdBQUcsRUFBRTtRQUNuQixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLDBCQUEwQjtTQUNoQyxDQUFDLENBQUE7UUFDRixPQUFNO0tBQ1A7SUFDRCxJQUFJLEdBQUcsQ0FBQyxJQUFJLEtBQUssR0FBRyxFQUFFO1FBQ3BCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNaLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQztLQUNmO0lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2YsQ0FBQyxDQUFBO0FBRUQsTUFBTSxRQUFRLEdBQUcsQ0FBQyxHQUFHLEtBQVksRUFBRSxFQUFFO0lBQ25DLElBQUksSUFBVSxDQUFDO0lBQ2YsSUFBSTtRQUNGLElBQUksR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQ3pCLE1BQU0sVUFBVSxHQUFHO1lBQ2pCLGVBQWUsRUFBRSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUs7WUFDdkMsY0FBYyxFQUFFLGtCQUFrQjtTQUNuQyxDQUFDO1FBQ0YsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksRUFDRixNQUFNLEdBQUcsS0FBSyxFQUNkLEdBQUcsRUFDSCxJQUFJLEdBQUcsRUFBRSxFQUNULE1BQU0sRUFDTixNQUFNLEdBQUcsY0FBYyxPQUFPLENBQUMsR0FBRyxDQUFD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QUFHLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQztJQUNwQixHQUFHLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQztJQUNwQixJQUFJLEVBQUUsU0FBUyxDQUFDLEtBQUssQ0FBQztJQUN0QixTQUFTLEVBQUUsU0FBUyxDQUFDLFVBQVUsQ0FBQztDQUNqQyxDQUFDO0FBTUYsa0JBQWUsVUFBVSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgbG9hZGluZyBmcm9tICcuL2xvYWRpbmcnO1xuXG5jb25zdCBfaGFuZGxlUmVzcG9uc2UgPSAocmVzOiBhbnksIHsgcmVzb2x2ZSwgcmVqZWN0IH06IGFueSkgPT4ge1xuICBpZiAocmVzLmNvZGUgPT0gNDAxKSB7XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6ICcuLi9pbmRleC9pbmRleD9hdXRoPXRydWUnLFxuICAgIH0pXG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKHJlcy5jb2RlID09PSA1MDApIHtcbiAgICByZWplY3QocmVzKTtcbiAgICB0aHJvdyByZXMubXNnO1xuICB9XG4gIHJlc29sdmUocmVzKTtcbn1cblxuY29uc3QgX3JlcXVlc3QgPSAoLi4uYXJndXM6IGFueVtdKSA9PiB7XG4gIGxldCB1c2VyOiBVc2VyO1xuICB0cnkge1xuICAgIHVzZXIgPSB3eC5nZXRTdG9yYWdlU3luYygndXNlcicpO1xuICAgIGNvbnNvbGUubG9nKCd1c2VyJywgdXNlcilcbiAgICBjb25zdCBoZWFkZXJfcHJlID0ge1xuICAgICAgJ2F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyB1c2VyLnRva2VuLFxuICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgIH07XG4gICAgbGV0IG9wdGlvbnMgPSBhcmd1c1swXTtcbiAgICBsZXQge1xuICAgICAgbWV0aG9kID0gJ0dFVCcsXG4gICAgICB1cmwsXG4gICAgICBkYXRhID0ge30sXG4gICAgICBoZWFkZXIsXG4gICAgICByZWplY3QgPSBmdW5jdGlvbiAoKSB7IGNvbnNvbGUubG9nKCdkZWZhdWx0IHJlamVjdCBmdW5jJykgfSxcbiAgICB9ID0gb3B0aW9ucztcbiAgICBsZXQgeyBuZWVkTG9hZGluZyA9ICcwJyB9ID0gZGF0YTtcbiAgICBpZiAobmVlZExvYWRpbmcgPT09ICcxJykge1xuICAgICAgbG9hZGluZy5zaG93KCk7XG4gICAgfVxuICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgdXJsOiBjb25maWcuaG9zdFVybCArIHVybCxcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgZGF0YTogZGF0YSxcbiAgICAgIGhlYWRlcjogT2JqZWN0LmFzc2lnbih7fSwgaGVhZGVyX3ByZSwgaGVhZGVyKSxcbiAgICAgIHN1Y2Nlc3M6IChyZXM6IGFueSkgPT4ge1xuICAgICAgICBfaGFuZGxlUmVzcG9uc2UocmVzLmRhdGEsIG9wdGlvbnMpO1xuICAgICAgfSxcbiAgICAgIGZhaWw6IChyZXM6IGFueSkgPT4ge1xuICAgICAgICBpZiAocmVqZWN0KSB7XG4gICAgICAgICAgcmVqZWN0KHJlcylcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgIGlmIChuZWVkTG9hZGluZyA9PT0gJzEnKSB7XG4gICAgICAgICAgbG9hZGluZy5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKCfor7fmsYLlvILluLgnKTtcbiAgfVxufTtcblxuY29uc3QgcHJvbWlzaWZ5ID0gKGNhbGxiYWNrOiBhbnkpID0+IHtcbiAgcmV0dXJuIChvcHRpb25zOiBhbnksIC4uLnBhcmFtczogYW55W10pID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY2FsbGJhY2soT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywgeyByZXNvbHZlOiByZXNvbHZlLCByZWplY3Q6IHJlamVjdCB9KSwgLi4ucGFyYW1zKTtcbiAgICB9KTtcbiAgfVxufVxuXG5jb25zdCBfZ2V0ID0gKC4uLmFyZ3VzOiBhbnkpID0+IF9yZXF1ZXN0KE9iamVjdC5hc3NpZ24oe30sIGFyZ3VzWzBdLCB7IG1ldGhvZDogJ0dFVCcgfSkpO1xuY29uc3QgX3B1dCA9ICguLi5hcmd1czogYW55KSA9PiBfcmVxdWVzdChPYmplY3QuYXNzaWduKHt9LCBhcmd1c1swXSwgeyBtZXRob2Q6ICdQVVQnIH0pKTtcbmNvbnN0IF9wb3N0ID0gKC4uLmFyZ3VzOiBhbnkpID0+IF9yZXF1ZXN0KE9iamVjdC5hc3NpZ24oe30sIGFyZ3VzWzBdLCB7IG1ldGhvZDogJ1BPU1QnIH0pKTtcbmNvbnN0IF9wb3N0X2Zvcm0gPSAoLi4uYXJndXM6IGFueSkgPT4gX3JlcXVlc3QoT2JqZWN0LmFzc2lnbih7fSwgYXJndXNbMF0sIHtcbiAgbWV0aG9kOiAnUE9TVCcsXG4gIGhlYWRlcjoge1xuICAgICdhdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgJ2V5SjBlWEFpT2lKS1YxUWlMQ0poYkdjaU9pSklVekkxTmlKOS5leUpwYzNNaU9pSlFkME1nVG1WM0lGWmxiblIxY21Weklpd2lhV0YwSWpveE5UUXhOVGMzTVRFNExDSmxlSEFpT2pFMk1EUTNNelUxTVRnc0ltRjFaQ0k2SW5CM1l5NWpiMjBpTENKemRXSWlPaUpRZDBNZ1RtVjNJRlpsYm5SMWNtVnpJSFJsYzNRZ2RHOXJaVzRpTENKamJHbGxiblJPWVcxbElqb2lVSGRESUU5dVpVTm9ZWFFpZlEuZDRfamxTcURuZGlzcHJvUGppeTF6eTFfYUVMd01ZVkxrX25RUndDR2NUYycsXG4gICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG4gIH1cbn0pKTtcblxubGV0IEh0dHBTZXJ2ZXIgPSB7XG4gIGdldDogcHJvbWlzaWZ5KF9nZXQpLFxuICBwdXQ6IHByb21pc2lmeShfcHV0KSxcbiAgcG9zdDogcHJvbWlzaWZ5KF9wb3N0KSxcbiAgcG9zdF9mb3JtOiBwcm9taXNpZnkoX3Bvc3RfZm9ybSksXG59O1xuXG5pbnRlcmZhY2UgVXNlciB7XG4gIHRva2VuOiBzdHJpbmcsXG59XG5cbmV4cG9ydCBkZWZhdWx0IEh0dHBTZXJ2ZXJcblxuXG4iXX0=