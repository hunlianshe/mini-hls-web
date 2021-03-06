"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
const loading_1 = require("./loading");
const _handleResponse = (res, { resolve, reject }) => {
    if (res.code == 401) {
        wx.navigateTo({
            url: '../login/login',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cFNlcnZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImh0dHBTZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxzQ0FBK0I7QUFDL0IsdUNBQWdDO0FBRWhDLE1BQU0sZUFBZSxHQUFHLENBQUMsR0FBUSxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBTyxFQUFFLEVBQUU7SUFDN0QsSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLEdBQUcsRUFBRTtRQUNuQixFQUFFLENBQUMsVUFBVSxDQUFDO1lBRVosR0FBRyxFQUFFLGdCQUFnQjtTQUN0QixDQUFDLENBQUE7UUFDRixPQUFNO0tBQ1A7SUFDRCxJQUFJLEdBQUcsQ0FBQyxJQUFJLEtBQUssR0FBRyxFQUFFO1FBQ3BCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNaLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQztLQUNmO0lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2YsQ0FBQyxDQUFBO0FBRUQsTUFBTSxRQUFRLEdBQUcsQ0FBQyxHQUFHLEtBQVksRUFBRSxFQUFFO0lBQ25DLElBQUksSUFBVSxDQUFDO0lBQ2YsSUFBSTtRQUNGLElBQUksR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pDLE1BQU0sVUFBVSxHQUFHO1lBQ2pCLGVBQWUsRUFBRSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUs7WUFDdkMsY0FBYyxFQUFFLGtCQUFrQjtTQUNuQyxDQUFDO1FBQ0YsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksRUFDRixNQUFNLEdBQUcsS0FBSyxFQUNkLEdBQUcsRUFDSCxJQUFJLEdBQUcsRUFBRSxFQUNULE1BQU0sRUFDTixNQUFNLEdBQUcsY0FBYyxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUEsQ0FBQyxDQUFDLEdBQzVELEdBQUcsT0FBTyxDQUFDO1FB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QUFDLElBQUksQ0FBQztJQUNwQixJQUFJLEVBQUUsU0FBUyxDQUFDLEtBQUssQ0FBQztJQUN0QixTQUFTLEVBQUUsU0FBUyxDQUFDLFVBQVUsQ0FBQztDQUNqQyxDQUFDO0FBTUYsa0JBQWUsVUFBVSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgbG9hZGluZyBmcm9tICcuL2xvYWRpbmcnO1xuXG5jb25zdCBfaGFuZGxlUmVzcG9uc2UgPSAocmVzOiBhbnksIHsgcmVzb2x2ZSwgcmVqZWN0IH06IGFueSkgPT4ge1xuICBpZiAocmVzLmNvZGUgPT0gNDAxKSB7XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAvLyB1cmw6ICcuLi9pbmRleC9pbmRleD9hdXRoPXRydWUnLFxuICAgICAgdXJsOiAnLi4vbG9naW4vbG9naW4nLFxuICAgIH0pXG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKHJlcy5jb2RlID09PSA1MDApIHtcbiAgICByZWplY3QocmVzKTtcbiAgICB0aHJvdyByZXMubXNnO1xuICB9XG4gIHJlc29sdmUocmVzKTtcbn1cblxuY29uc3QgX3JlcXVlc3QgPSAoLi4uYXJndXM6IGFueVtdKSA9PiB7XG4gIGxldCB1c2VyOiBVc2VyO1xuICB0cnkge1xuICAgIHVzZXIgPSB3eC5nZXRTdG9yYWdlU3luYygndXNlcicpO1xuICAgIGNvbnN0IGhlYWRlcl9wcmUgPSB7XG4gICAgICAnYXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIHVzZXIudG9rZW4sXG4gICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgfTtcbiAgICBsZXQgb3B0aW9ucyA9IGFyZ3VzWzBdO1xuICAgIGxldCB7XG4gICAgICBtZXRob2QgPSAnR0VUJyxcbiAgICAgIHVybCxcbiAgICAgIGRhdGEgPSB7fSxcbiAgICAgIGhlYWRlcixcbiAgICAgIHJlamVjdCA9IGZ1bmN0aW9uICgpIHsgY29uc29sZS5sb2coJ2RlZmF1bHQgcmVqZWN0IGZ1bmMnKSB9LFxuICAgIH0gPSBvcHRpb25zO1xuICAgIGxldCB7IG5lZWRMb2FkaW5nID0gJzAnIH0gPSBkYXRhO1xuICAgIGlmIChuZWVkTG9hZGluZyA9PT0gJzEnKSB7XG4gICAgICBsb2FkaW5nLnNob3coKTtcbiAgICB9XG4gICAgd3gucmVxdWVzdCh7XG4gICAgICB1cmw6IGNvbmZpZy5ob3N0VXJsICsgdXJsLFxuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICBkYXRhOiBkYXRhLFxuICAgICAgaGVhZGVyOiBPYmplY3QuYXNzaWduKHt9LCBoZWFkZXJfcHJlLCBoZWFkZXIpLFxuICAgICAgc3VjY2VzczogKHJlczogYW55KSA9PiB7XG4gICAgICAgIF9oYW5kbGVSZXNwb25zZShyZXMuZGF0YSwgb3B0aW9ucyk7XG4gICAgICB9LFxuICAgICAgZmFpbDogKHJlczogYW55KSA9PiB7XG4gICAgICAgIGlmIChyZWplY3QpIHtcbiAgICAgICAgICByZWplY3QocmVzKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgY29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgaWYgKG5lZWRMb2FkaW5nID09PSAnMScpIHtcbiAgICAgICAgICBsb2FkaW5nLmhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coJ+ivt+axguW8guW4uCcpO1xuICB9XG59O1xuXG5jb25zdCBwcm9taXNpZnkgPSAoY2FsbGJhY2s6IGFueSkgPT4ge1xuICByZXR1cm4gKG9wdGlvbnM6IGFueSwgLi4ucGFyYW1zOiBhbnlbXSkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjYWxsYmFjayhPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7IHJlc29sdmU6IHJlc29sdmUsIHJlamVjdDogcmVqZWN0IH0pLCAuLi5wYXJhbXMpO1xuICAgIH0pO1xuICB9XG59XG5cbmNvbnN0IF9nZXQgPSAoLi4uYXJndXM6IGFueSkgPT4gX3JlcXVlc3QoT2JqZWN0LmFzc2lnbih7fSwgYXJndXNbMF0sIHsgbWV0aG9kOiAnR0VUJyB9KSk7XG5jb25zdCBfcHV0ID0gKC4uLmFyZ3VzOiBhbnkpID0+IF9yZXF1ZXN0KE9iamVjdC5hc3NpZ24oe30sIGFyZ3VzWzBdLCB7IG1ldGhvZDogJ1BVVCcgfSkpO1xuY29uc3QgX3Bvc3QgPSAoLi4uYXJndXM6IGFueSkgPT4gX3JlcXVlc3QoT2JqZWN0LmFzc2lnbih7fSwgYXJndXNbMF0sIHsgbWV0aG9kOiAnUE9TVCcgfSkpO1xuY29uc3QgX3Bvc3RfZm9ybSA9ICguLi5hcmd1czogYW55KSA9PiBfcmVxdWVzdChPYmplY3QuYXNzaWduKHt9LCBhcmd1c1swXSwge1xuICBtZXRob2Q6ICdQT1NUJyxcbiAgaGVhZGVyOiB7XG4gICAgJ2F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyAnZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SnBjM01pT2lKUWQwTWdUbVYzSUZabGJuUjFjbVZ6SWl3aWFXRjBJam94TlRReE5UYzNNVEU0TENKbGVIQWlPakUyTURRM016VTFNVGdzSW1GMVpDSTZJbkIzWXk1amIyMGlMQ0p6ZFdJaU9pSlFkME1nVG1WM0lGWmxiblIxY21WeklIUmxjM1FnZEc5clpXNGlMQ0pqYkdsbGJuUk9ZVzFsSWpvaVVIZERJRTl1WlVOb1lYUWlmUS5kNF9qbFNxRG5kaXNwcm9Qaml5MXp5MV9hRUx3TVlWTGtfblFSd0NHY1RjJyxcbiAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbiAgfVxufSkpO1xuXG5sZXQgSHR0cFNlcnZlciA9IHtcbiAgZ2V0OiBwcm9taXNpZnkoX2dldCksXG4gIHB1dDogcHJvbWlzaWZ5KF9wdXQpLFxuICBwb3N0OiBwcm9taXNpZnkoX3Bvc3QpLFxuICBwb3N0X2Zvcm06IHByb21pc2lmeShfcG9zdF9mb3JtKSxcbn07XG5cbmludGVyZmFjZSBVc2VyIHtcbiAgdG9rZW46IHN0cmluZyxcbn1cblxuZXhwb3J0IGRlZmF1bHQgSHR0cFNlcnZlclxuXG5cbiJdfQ==