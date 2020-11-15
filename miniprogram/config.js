"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var host = "14592619.qcloud.la";
var socket = "http://148.70.243.198:8001";
var hostUrl = "http://148.70.243.198:8009";
let ak = "xsiYQN0VwrBHvxmf42BGdxFiTQgqBC4w";
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
    AccessKeySecret: "QaucOO51i55dLUBolkJgs7p2qBn7oC",
    OSSAccessKeyId: "LTAIvWyXwy6LwMKi",
    timeout: 87600,
};
exports.default = config;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSSxJQUFJLEdBQUcsb0JBQW9CLENBQUM7QUFDaEMsSUFBSSxNQUFNLEdBQUcsNEJBQTRCLENBQUM7QUFJMUMsSUFBSSxPQUFPLEdBQUcsNEJBQTRCLENBQUE7QUFDMUMsSUFBSSxFQUFFLEdBQUcsa0NBQWtDLENBQUM7QUFDNUMsSUFBSSxRQUFRLEdBQUcscURBQXFELENBQUM7QUFNckUsSUFBSSxNQUFNLEdBQVE7SUFDaEIsSUFBSTtJQUNKLEVBQUU7SUFDRixPQUFPO0lBQ1AsTUFBTTtJQUNOLFFBQVEsRUFBRSxXQUFXLElBQUksUUFBUTtJQUVqQyxVQUFVLEVBQUUsV0FBVyxJQUFJLGNBQWM7SUFFekMsU0FBUyxFQUFFLFdBQVcsSUFBSSxTQUFTO0lBRW5DLFNBQVMsRUFBRSxXQUFXLElBQUksU0FBUztJQUVuQyxVQUFVLEVBQUUsV0FBVyxJQUFJLFVBQVU7SUFFckMsa0JBQWtCLEVBQUUsV0FBVyxJQUFJLGtCQUFrQjtJQUVyRCxhQUFhLEVBQUUsV0FBVyxJQUFJLFNBQVM7SUFFdkMsa0JBQWtCLEVBQUUsV0FBVyxJQUFJLG1CQUFtQjtJQUd0RCxjQUFjLEVBQUUsR0FBRyxRQUFRLEVBQUU7SUFDN0IsZUFBZSxFQUFFLGdDQUFnQztJQUNqRCxjQUFjLEVBQUUsa0JBQWtCO0lBQ2xDLE9BQU8sRUFBRSxLQUFLO0NBQ2YsQ0FBQztBQUVGLGtCQUFlLE1BQU0sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbInZhciBob3N0ID0gXCIxNDU5MjYxOS5xY2xvdWQubGFcIjtcbnZhciBzb2NrZXQgPSBcImh0dHA6Ly8xNDguNzAuMjQzLjE5ODo4MDAxXCI7XG4vLyB2YXIgaG9zdFVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDA5XCI7XG5cbi8vIHZhciBob3N0VXJsID0gXCJodHRwczovL3d3dy5zY3J1bXBsYW5uaW5nLmNuL3Byb2hsc1wiO1xudmFyIGhvc3RVcmwgPSBcImh0dHA6Ly8xNDguNzAuMjQzLjE5ODo4MDA5XCJcbmxldCBhayA9IFwieHNpWVFOMFZ3ckJIdnhtZjQyQkdkeEZpVFFncUJDNHdcIjtcbnZhciBmaWxlSG9zdCA9IFwiaHR0cHM6Ly90ZXN0LWJ1eWNhcnNob3Aub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tXCI7XG5cbi8vIGxldCBhayA9ICd2TjZ3VE9UZW16eklCQjlpWjBPRHRDdjdwRnJ0RVVhMyc7XG4vLyB2YXIgaG9zdFVybCA9IFwiaHR0cHM6Ly93d3cucGVhanMudG9wL3Byb3FjeGRcIjtcbi8vIHZhciBmaWxlSG9zdCA9IFwiaHR0cHM6Ly9idXljYXJzaG9wLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbVwiXG5cbnZhciBjb25maWc6IGFueSA9IHtcbiAgaG9zdCxcbiAgYWssXG4gIGhvc3RVcmwsXG4gIHNvY2tldCxcbiAgbG9naW5Vcmw6IGBodHRwczovLyR7aG9zdH0vbG9naW5gLFxuXG4gIHJlcXVlc3RVcmw6IGBodHRwczovLyR7aG9zdH0vdGVzdFJlcXVlc3RgLFxuXG4gIG9wZW5JZFVybDogYGh0dHBzOi8vJHtob3N0fS9vcGVuaWRgLFxuXG4gIHR1bm5lbFVybDogYGh0dHBzOi8vJHtob3N0fS90dW5uZWxgLFxuXG4gIHBheW1lbnRVcmw6IGBodHRwczovLyR7aG9zdH0vcGF5bWVudGAsXG5cbiAgdGVtcGxhdGVNZXNzYWdlVXJsOiBgaHR0cHM6Ly8ke2hvc3R9L3RlbXBsYXRlTWVzc2FnZWAsXG5cbiAgdXBsb2FkRmlsZVVybDogYGh0dHBzOi8vJHtob3N0fS91cGxvYWRgLFxuXG4gIGRvd25sb2FkRXhhbXBsZVVybDogYGh0dHBzOi8vJHtob3N0fS9zdGF0aWMvd2VhcHAuanBnYCxcblxuICAvLyBhbGl5dW4gT1NTIGNvbmZpZ1xuICB1cGxvYWRJbWFnZVVybDogYCR7ZmlsZUhvc3R9YCwgLy8g6buY6K6k5a2Y5Zyo5qC555uu5b2V77yM5Y+v5qC55o2u6ZyA5rGC5pS5XG4gIEFjY2Vzc0tleVNlY3JldDogXCJRYXVjT081MWk1NWRMVUJvbGtKZ3M3cDJxQm43b0NcIixcbiAgT1NTQWNjZXNzS2V5SWQ6IFwiTFRBSXZXeVh3eTZMd01LaVwiLFxuICB0aW1lb3V0OiA4NzYwMCwgLy8g6L+Z5Liq5piv5LiK5Lyg5paH5Lu25pe2UG9saWN555qE5aSx5pWI5pe26Ze0XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25maWc7XG4iXX0=