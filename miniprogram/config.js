"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var host = "14592619.qcloud.la";
var socket = "http://148.70.243.198";
var hostUrl = "http://localhost:8009";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0EsSUFBSSxJQUFJLEdBQUcsb0JBQW9CLENBQUE7QUFDL0IsSUFBSSxNQUFNLEdBQUcsdUJBQXVCLENBQUE7QUFJcEMsSUFBSSxPQUFPLEdBQUcsdUJBQXVCLENBQUE7QUFDckMsSUFBSSxFQUFFLEdBQUcsa0NBQWtDLENBQUM7QUFDNUMsSUFBSSxRQUFRLEdBQUcscURBQXFELENBQUE7QUFNcEUsSUFBSSxNQUFNLEdBQVE7SUFDaEIsSUFBSTtJQUNKLEVBQUU7SUFDRixPQUFPO0lBQ1AsTUFBTTtJQUNOLFFBQVEsRUFBRSxXQUFXLElBQUksUUFBUTtJQUVqQyxVQUFVLEVBQUUsV0FBVyxJQUFJLGNBQWM7SUFFekMsU0FBUyxFQUFFLFdBQVcsSUFBSSxTQUFTO0lBRW5DLFNBQVMsRUFBRSxXQUFXLElBQUksU0FBUztJQUVuQyxVQUFVLEVBQUUsV0FBVyxJQUFJLFVBQVU7SUFFckMsa0JBQWtCLEVBQUUsV0FBVyxJQUFJLGtCQUFrQjtJQUVyRCxhQUFhLEVBQUUsV0FBVyxJQUFJLFNBQVM7SUFFdkMsa0JBQWtCLEVBQUUsV0FBVyxJQUFJLG1CQUFtQjtJQUd0RCxjQUFjLEVBQUUsR0FBRyxRQUFRLEVBQUU7SUFDN0IsZUFBZSxFQUFFLGdDQUFnQztJQUNqRCxjQUFjLEVBQUUsa0JBQWtCO0lBQ2xDLE9BQU8sRUFBRSxLQUFLO0NBQ2YsQ0FBQztBQUVGLGtCQUFlLE1BQU0sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cbnZhciBob3N0ID0gXCIxNDU5MjYxOS5xY2xvdWQubGFcIlxudmFyIHNvY2tldCA9IFwiaHR0cDovLzE0OC43MC4yNDMuMTk4XCJcbi8vIHZhciBob3N0VXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjgwMDlcIlxuXG4vLyB2YXIgaG9zdFVybCA9IFwiaHR0cHM6Ly93d3cuc2NydW1wbGFubmluZy5jbi9wcm9obHNcIlxudmFyIGhvc3RVcmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwOVwiXG5sZXQgYWsgPSAneHNpWVFOMFZ3ckJIdnhtZjQyQkdkeEZpVFFncUJDNHcnO1xudmFyIGZpbGVIb3N0ID0gXCJodHRwczovL3Rlc3QtYnV5Y2Fyc2hvcC5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb21cIlxuXG4vLyBsZXQgYWsgPSAndk42d1RPVGVtenpJQkI5aVowT0R0Q3Y3cEZydEVVYTMnO1xuLy8gdmFyIGhvc3RVcmwgPSBcImh0dHBzOi8vd3d3LnBlYWpzLnRvcC9wcm9xY3hkXCI7XG4vLyB2YXIgZmlsZUhvc3QgPSBcImh0dHBzOi8vYnV5Y2Fyc2hvcC5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb21cIlxuXG52YXIgY29uZmlnOiBhbnkgPSB7XG4gIGhvc3QsXG4gIGFrLFxuICBob3N0VXJsLFxuICBzb2NrZXQsXG4gIGxvZ2luVXJsOiBgaHR0cHM6Ly8ke2hvc3R9L2xvZ2luYCxcblxuICByZXF1ZXN0VXJsOiBgaHR0cHM6Ly8ke2hvc3R9L3Rlc3RSZXF1ZXN0YCxcblxuICBvcGVuSWRVcmw6IGBodHRwczovLyR7aG9zdH0vb3BlbmlkYCxcblxuICB0dW5uZWxVcmw6IGBodHRwczovLyR7aG9zdH0vdHVubmVsYCxcblxuICBwYXltZW50VXJsOiBgaHR0cHM6Ly8ke2hvc3R9L3BheW1lbnRgLFxuXG4gIHRlbXBsYXRlTWVzc2FnZVVybDogYGh0dHBzOi8vJHtob3N0fS90ZW1wbGF0ZU1lc3NhZ2VgLFxuXG4gIHVwbG9hZEZpbGVVcmw6IGBodHRwczovLyR7aG9zdH0vdXBsb2FkYCxcblxuICBkb3dubG9hZEV4YW1wbGVVcmw6IGBodHRwczovLyR7aG9zdH0vc3RhdGljL3dlYXBwLmpwZ2AsXG5cbiAgLy8gYWxpeXVuIE9TUyBjb25maWdcbiAgdXBsb2FkSW1hZ2VVcmw6IGAke2ZpbGVIb3N0fWAsIC8vIOm7mOiupOWtmOWcqOagueebruW9le+8jOWPr+agueaNrumcgOaxguaUuVxuICBBY2Nlc3NLZXlTZWNyZXQ6ICdRYXVjT081MWk1NWRMVUJvbGtKZ3M3cDJxQm43b0MnLFxuICBPU1NBY2Nlc3NLZXlJZDogJ0xUQUl2V3lYd3k2THdNS2knLFxuICB0aW1lb3V0OiA4NzYwMCAvLyDov5nkuKrmmK/kuIrkvKDmlofku7bml7ZQb2xpY3nnmoTlpLHmlYjml7bpl7Rcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZztcbiJdfQ==