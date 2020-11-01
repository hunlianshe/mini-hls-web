"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var host = "14592619.qcloud.la";
var socket = "http://148.70.243.198:8000";
var hostUrl = "http://148.70.243.198:8009";
let ak = 'xsiYQN0VwrBHvxmf42BGdxFiTQgqBC4w';
var fileHost = "https://test-buycarshop.oss-cn-beijing.aliyuncs.com";
var config = {
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
    uploadImageUrl: `${fileHost}`,
    AccessKeySecret: 'QaucOO51i55dLUBolkJgs7p2qBn7oC',
    OSSAccessKeyId: 'LTAIvWyXwy6LwMKi',
    timeout: 87600
};
exports.default = config;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0EsSUFBSSxJQUFJLEdBQUcsb0JBQW9CLENBQUE7QUFDL0IsSUFBSSxNQUFNLEdBQUcsNEJBQTRCLENBQUE7QUFJekMsSUFBSSxPQUFPLEdBQUcsNEJBQTRCLENBQUE7QUFDMUMsSUFBSSxFQUFFLEdBQUcsa0NBQWtDLENBQUM7QUFDNUMsSUFBSSxRQUFRLEdBQUcscURBQXFELENBQUE7QUFNcEUsSUFBSSxNQUFNLEdBQVE7SUFDaEIsSUFBSTtJQUNKLEVBQUU7SUFDRixPQUFPO0lBQ1AsTUFBTTtJQUNOLFFBQVEsRUFBRSxXQUFXLElBQUksUUFBUTtJQUVqQyxVQUFVLEVBQUUsV0FBVyxJQUFJLGNBQWM7SUFFekMsU0FBUyxFQUFFLFdBQVcsSUFBSSxTQUFTO0lBRW5DLFNBQVMsRUFBRSxXQUFXLElBQUksU0FBUztJQUVuQyxVQUFVLEVBQUUsV0FBVyxJQUFJLFVBQVU7SUFFckMsa0JBQWtCLEVBQUUsV0FBVyxJQUFJLGtCQUFrQjtJQUVyRCxhQUFhLEVBQUUsV0FBVyxJQUFJLFNBQVM7SUFFdkMsa0JBQWtCLEVBQUUsV0FBVyxJQUFJLG1CQUFtQjtJQUd0RCxjQUFjLEVBQUUsR0FBRyxRQUFRLEVBQUU7SUFDN0IsZUFBZSxFQUFFLGdDQUFnQztJQUNqRCxjQUFjLEVBQUUsa0JBQWtCO0lBQ2xDLE9BQU8sRUFBRSxLQUFLO0NBQ2YsQ0FBQztBQUVGLGtCQUFlLE1BQU0sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cbnZhciBob3N0ID0gXCIxNDU5MjYxOS5xY2xvdWQubGFcIlxudmFyIHNvY2tldCA9IFwiaHR0cDovLzE0OC43MC4yNDMuMTk4OjgwMDBcIlxuLy8gdmFyIGhvc3RVcmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwOVwiXG5cbi8vIHZhciBob3N0VXJsID0gXCJodHRwczovL3d3dy5zY3J1bXBsYW5uaW5nLmNuL3Byb2hsc1wiXG52YXIgaG9zdFVybCA9IFwiaHR0cDovLzE0OC43MC4yNDMuMTk4OjgwMDlcIlxubGV0IGFrID0gJ3hzaVlRTjBWd3JCSHZ4bWY0MkJHZHhGaVRRZ3FCQzR3JztcbnZhciBmaWxlSG9zdCA9IFwiaHR0cHM6Ly90ZXN0LWJ1eWNhcnNob3Aub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tXCJcblxuLy8gbGV0IGFrID0gJ3ZONndUT1RlbXp6SUJCOWlaME9EdEN2N3BGcnRFVWEzJztcbi8vIHZhciBob3N0VXJsID0gXCJodHRwczovL3d3dy5wZWFqcy50b3AvcHJvcWN4ZFwiO1xuLy8gdmFyIGZpbGVIb3N0ID0gXCJodHRwczovL2J1eWNhcnNob3Aub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tXCJcblxudmFyIGNvbmZpZzogYW55ID0ge1xuICBob3N0LFxuICBhayxcbiAgaG9zdFVybCxcbiAgc29ja2V0LFxuICBsb2dpblVybDogYGh0dHBzOi8vJHtob3N0fS9sb2dpbmAsXG5cbiAgcmVxdWVzdFVybDogYGh0dHBzOi8vJHtob3N0fS90ZXN0UmVxdWVzdGAsXG5cbiAgb3BlbklkVXJsOiBgaHR0cHM6Ly8ke2hvc3R9L29wZW5pZGAsXG5cbiAgdHVubmVsVXJsOiBgaHR0cHM6Ly8ke2hvc3R9L3R1bm5lbGAsXG5cbiAgcGF5bWVudFVybDogYGh0dHBzOi8vJHtob3N0fS9wYXltZW50YCxcblxuICB0ZW1wbGF0ZU1lc3NhZ2VVcmw6IGBodHRwczovLyR7aG9zdH0vdGVtcGxhdGVNZXNzYWdlYCxcblxuICB1cGxvYWRGaWxlVXJsOiBgaHR0cHM6Ly8ke2hvc3R9L3VwbG9hZGAsXG5cbiAgZG93bmxvYWRFeGFtcGxlVXJsOiBgaHR0cHM6Ly8ke2hvc3R9L3N0YXRpYy93ZWFwcC5qcGdgLFxuXG4gIC8vIGFsaXl1biBPU1MgY29uZmlnXG4gIHVwbG9hZEltYWdlVXJsOiBgJHtmaWxlSG9zdH1gLCAvLyDpu5jorqTlrZjlnKjmoLnnm67lvZXvvIzlj6/moLnmja7pnIDmsYLmlLlcbiAgQWNjZXNzS2V5U2VjcmV0OiAnUWF1Y09PNTFpNTVkTFVCb2xrSmdzN3AycUJuN29DJyxcbiAgT1NTQWNjZXNzS2V5SWQ6ICdMVEFJdld5WHd5Nkx3TUtpJyxcbiAgdGltZW91dDogODc2MDAgLy8g6L+Z5Liq5piv5LiK5Lyg5paH5Lu25pe2UG9saWN555qE5aSx5pWI5pe26Ze0XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25maWc7XG4iXX0=