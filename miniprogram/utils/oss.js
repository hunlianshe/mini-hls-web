"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
const Base64_1 = require("./Base64");
const utils = require("../utils/utils");
const crypto_1 = require("./crypto");
const uploadFile = function (params) {
    if (!params.filePath || params.filePath.length < 9) {
        wx.showModal({
            title: '图片错误',
            content: '请重试',
            showCancel: false,
        });
        return;
    }
    const aliyunFileKey = params.dir;
    const aliyunServerURL = config_1.default.uploadImageUrl;
    const accessid = config_1.default.OSSAccessKeyId;
    const policyBase64 = getPolicyBase64();
    const signature = getSignature(policyBase64);
    wx.uploadFile({
        url: aliyunServerURL,
        filePath: params.filePath,
        name: 'file',
        formData: {
            'key': aliyunFileKey,
            'policy': policyBase64,
            'OSSAccessKeyId': accessid,
            'signature': signature,
            'success_action_status': '200',
        },
        success: function (res) {
            if (res.statusCode != 200) {
                if (params.fail) {
                    params.fail(res);
                }
                return;
            }
            if (params.success) {
                params.success(aliyunFileKey);
            }
        },
        fail: function (err) {
            utils.showModal();
            err.wxaddinfo = aliyunServerURL;
            if (params.fail) {
                params.fail(err);
            }
            ;
        },
    });
};
const getPolicyBase64 = function () {
    let date = new Date();
    date.setHours(date.getHours() + config_1.default.timeout);
    let srcT = date.toISOString();
    const policyText = {
        "expiration": srcT,
        "conditions": [
            ["content-length-range", 0, 5 * 1024 * 1024]
        ]
    };
    const policyBase64 = Base64_1.default.encode(JSON.stringify(policyText));
    return policyBase64;
};
const getSignature = function (policyBase64) {
    const accesskey = config_1.default.AccessKeySecret;
    const bytes = crypto_1.default.HMAC(crypto_1.default.SHA1, policyBase64, accesskey, {
        asBytes: true
    });
    const signature = crypto_1.default.util.bytesToBase64(bytes);
    return signature;
};
exports.default = uploadFile;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3NzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsib3NzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTRCO0FBRTVCLHFDQUErQjtBQUMvQix3Q0FBd0M7QUFJeEMscUNBQThCO0FBRTlCLE1BQU0sVUFBVSxHQUFHLFVBQVUsTUFBVTtJQUNyQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDbEQsRUFBRSxDQUFDLFNBQVMsQ0FBQztZQUNYLEtBQUssRUFBRSxNQUFNO1lBQ2IsT0FBTyxFQUFFLEtBQUs7WUFDZCxVQUFVLEVBQUUsS0FBSztTQUNsQixDQUFDLENBQUE7UUFDRixPQUFPO0tBQ1I7SUFDRCxNQUFNLGFBQWEsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDO0lBQ2pDLE1BQU0sZUFBZSxHQUFHLGdCQUFHLENBQUMsY0FBYyxDQUFDO0lBQzNDLE1BQU0sUUFBUSxHQUFHLGdCQUFHLENBQUMsY0FBYyxDQUFDO0lBQ3BDLE1BQU0sWUFBWSxHQUFHLGVBQWUsRUFBRSxDQUFDO0lBQ3ZDLE1BQU0sU0FBUyxHQUFHLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUU3QyxFQUFFLENBQUMsVUFBVSxDQUFDO1FBQ1osR0FBRyxFQUFFLGVBQWU7UUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1FBQ3pCLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFO1lBRVIsS0FBSyxFQUFFLGFBQWE7WUFDcEIsUUFBUSxFQUFFLFlBQVk7WUFDdEIsZ0JBQWdCLEVBQUUsUUFBUTtZQUMxQixXQUFXLEVBQUUsU0FBUztZQUN0Qix1QkFBdUIsRUFBRSxLQUFLO1NBQy9CO1FBQ0QsT0FBTyxFQUFFLFVBQVUsR0FBRztZQUNwQixJQUFJLEdBQUcsQ0FBQyxVQUFVLElBQUksR0FBRyxFQUFFO2dCQUN6QixJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUU7b0JBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtpQkFDakI7Z0JBQ0QsT0FBTzthQUNSO1lBQ0QsSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFO2dCQUNsQixNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQy9CO1FBQ0gsQ0FBQztRQUNELElBQUksRUFBRSxVQUFVLEdBQVE7WUFDdEIsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxTQUFTLEdBQUcsZUFBZSxDQUFDO1lBQ2hDLElBQUksTUFBTSxDQUFDLElBQUksRUFBRTtnQkFDZixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO2FBQ2pCO1lBQUEsQ0FBQztRQUNKLENBQUM7S0FDRixDQUFDLENBQUE7QUFDSixDQUFDLENBQUE7QUFFRCxNQUFNLGVBQWUsR0FBRztJQUN0QixJQUFJLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0lBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLGdCQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0MsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzlCLE1BQU0sVUFBVSxHQUFHO1FBQ2pCLFlBQVksRUFBRSxJQUFJO1FBQ2xCLFlBQVksRUFBRTtZQUNaLENBQUMsc0JBQXNCLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQzdDO0tBQ0YsQ0FBQztJQUVGLE1BQU0sWUFBWSxHQUFHLGdCQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUMvRCxPQUFPLFlBQVksQ0FBQztBQUN0QixDQUFDLENBQUE7QUFFRCxNQUFNLFlBQVksR0FBRyxVQUFVLFlBQWdCO0lBQzdDLE1BQU0sU0FBUyxHQUFHLGdCQUFHLENBQUMsZUFBZSxDQUFDO0lBQ3RDLE1BQU0sS0FBSyxHQUFHLGdCQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFNLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUU7UUFDOUQsT0FBTyxFQUFFLElBQUk7S0FDZCxDQUFDLENBQUM7SUFDSCxNQUFNLFNBQVMsR0FBRyxnQkFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFbkQsT0FBTyxTQUFTLENBQUM7QUFDbkIsQ0FBQyxDQUFBO0FBRUQsa0JBQWUsVUFBVSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGVudiBmcm9tICcuLi9jb25maWcnO1xuXG5pbXBvcnQgQmFzZTY0IGZyb20gICcuL0Jhc2U2NCc7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscy91dGlscyc7XG5cbi8vIHJlcXVpcmUoJy4vaG1hYy5qcycpO1xuLy8gcmVxdWlyZSgnLi9zaGExLmpzJyk7XG5pbXBvcnQgQ3J5cHRvIGZyb20gJy4vY3J5cHRvJztcblxuY29uc3QgdXBsb2FkRmlsZSA9IGZ1bmN0aW9uIChwYXJhbXM6YW55KSB7XG4gIGlmICghcGFyYW1zLmZpbGVQYXRoIHx8IHBhcmFtcy5maWxlUGF0aC5sZW5ndGggPCA5KSB7XG4gICAgd3guc2hvd01vZGFsKHtcbiAgICAgIHRpdGxlOiAn5Zu+54mH6ZSZ6K+vJyxcbiAgICAgIGNvbnRlbnQ6ICfor7fph43or5UnLFxuICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXG4gICAgfSlcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgYWxpeXVuRmlsZUtleSA9IHBhcmFtcy5kaXI7XG4gIGNvbnN0IGFsaXl1blNlcnZlclVSTCA9IGVudi51cGxvYWRJbWFnZVVybDtcbiAgY29uc3QgYWNjZXNzaWQgPSBlbnYuT1NTQWNjZXNzS2V5SWQ7XG4gIGNvbnN0IHBvbGljeUJhc2U2NCA9IGdldFBvbGljeUJhc2U2NCgpO1xuICBjb25zdCBzaWduYXR1cmUgPSBnZXRTaWduYXR1cmUocG9saWN5QmFzZTY0KTtcblxuICB3eC51cGxvYWRGaWxlKHtcbiAgICB1cmw6IGFsaXl1blNlcnZlclVSTCxcbiAgICBmaWxlUGF0aDogcGFyYW1zLmZpbGVQYXRoLFxuICAgIG5hbWU6ICdmaWxlJyxcbiAgICBmb3JtRGF0YToge1xuICAgICAgLy8nbmFtZSc6IFwicGljdHVyZS5wbmdcIixcbiAgICAgICdrZXknOiBhbGl5dW5GaWxlS2V5LFxuICAgICAgJ3BvbGljeSc6IHBvbGljeUJhc2U2NCxcbiAgICAgICdPU1NBY2Nlc3NLZXlJZCc6IGFjY2Vzc2lkLFxuICAgICAgJ3NpZ25hdHVyZSc6IHNpZ25hdHVyZSxcbiAgICAgICdzdWNjZXNzX2FjdGlvbl9zdGF0dXMnOiAnMjAwJyxcbiAgICB9LFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgIGlmIChyZXMuc3RhdHVzQ29kZSAhPSAyMDApIHtcbiAgICAgICAgaWYgKHBhcmFtcy5mYWlsKSB7XG4gICAgICAgICAgcGFyYW1zLmZhaWwocmVzKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChwYXJhbXMuc3VjY2Vzcykge1xuICAgICAgICBwYXJhbXMuc3VjY2VzcyhhbGl5dW5GaWxlS2V5KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGZhaWw6IGZ1bmN0aW9uIChlcnI6IGFueSkge1xuICAgICAgdXRpbHMuc2hvd01vZGFsKCk7XG4gICAgICBlcnIud3hhZGRpbmZvID0gYWxpeXVuU2VydmVyVVJMO1xuICAgICAgaWYgKHBhcmFtcy5mYWlsKSB7XG4gICAgICAgIHBhcmFtcy5mYWlsKGVycilcbiAgICAgIH07XG4gICAgfSxcbiAgfSlcbn1cblxuY29uc3QgZ2V0UG9saWN5QmFzZTY0ID0gZnVuY3Rpb24gKCkge1xuICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gIGRhdGUuc2V0SG91cnMoZGF0ZS5nZXRIb3VycygpICsgZW52LnRpbWVvdXQpO1xuICBsZXQgc3JjVCA9IGRhdGUudG9JU09TdHJpbmcoKTtcbiAgY29uc3QgcG9saWN5VGV4dCA9IHtcbiAgICBcImV4cGlyYXRpb25cIjogc3JjVCwgLy/orr7nva7or6VQb2xpY3nnmoTlpLHmlYjml7bpl7RcbiAgICBcImNvbmRpdGlvbnNcIjogW1xuICAgICAgW1wiY29udGVudC1sZW5ndGgtcmFuZ2VcIiwgMCwgNSAqIDEwMjQgKiAxMDI0XSAvLyDorr7nva7kuIrkvKDmlofku7bnmoTlpKflsI/pmZDliLYsNW1iXG4gICAgXVxuICB9O1xuXG4gIGNvbnN0IHBvbGljeUJhc2U2NCA9IEJhc2U2NC5lbmNvZGUoSlNPTi5zdHJpbmdpZnkocG9saWN5VGV4dCkpO1xuICByZXR1cm4gcG9saWN5QmFzZTY0O1xufVxuXG5jb25zdCBnZXRTaWduYXR1cmUgPSBmdW5jdGlvbiAocG9saWN5QmFzZTY0OmFueSkge1xuICBjb25zdCBhY2Nlc3NrZXkgPSBlbnYuQWNjZXNzS2V5U2VjcmV0O1xuICBjb25zdCBieXRlcyA9IENyeXB0by5ITUFDKENyeXB0by5TSEExLCBwb2xpY3lCYXNlNjQsIGFjY2Vzc2tleSwge1xuICAgIGFzQnl0ZXM6IHRydWVcbiAgfSk7XG4gIGNvbnN0IHNpZ25hdHVyZSA9IENyeXB0by51dGlsLmJ5dGVzVG9CYXNlNjQoYnl0ZXMpO1xuXG4gIHJldHVybiBzaWduYXR1cmU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVwbG9hZEZpbGU7XG4iXX0=