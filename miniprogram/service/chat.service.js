"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Api = require("./api.service");
const startSingleChatSession = (openid, success = () => { }, fail = () => { }) => {
    Api.startChatSession({
        userIds: [openid],
    }).then((result) => {
        if (result.code == 200) {
            console.log(`start chat session result`, result.data);
            success();
            wx.navigateTo({
                url: `../chat/chat?openid=${openid}&cid=${result.data._id}`,
            });
        }
        else {
            fail();
        }
    });
};
exports.startSingleChatSession = startSingleChatSession;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hhdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQXFDO0FBRXJDLE1BQU0sc0JBQXNCLEdBQUcsQ0FDN0IsTUFBYyxFQUNkLE9BQU8sR0FBRyxHQUFHLEVBQUUsR0FBRSxDQUFDLEVBQ2xCLElBQUksR0FBRyxHQUFHLEVBQUUsR0FBRSxDQUFDLEVBQ2YsRUFBRTtJQUNGLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQztRQUNuQixPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUM7S0FDbEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQVcsRUFBRSxFQUFFO1FBQ3RCLElBQUksTUFBTSxDQUFDLElBQUksSUFBSSxHQUFHLEVBQUU7WUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEQsT0FBTyxFQUFFLENBQUM7WUFDVixFQUFFLENBQUMsVUFBVSxDQUFDO2dCQUNaLEdBQUcsRUFBRSx1QkFBdUIsTUFBTSxRQUFRLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO2FBQzVELENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxJQUFJLEVBQUUsQ0FBQztTQUNSO0lBQ0gsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFFTyx3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBBcGkgZnJvbSBcIi4vYXBpLnNlcnZpY2VcIjtcblxuY29uc3Qgc3RhcnRTaW5nbGVDaGF0U2Vzc2lvbiA9IChcbiAgb3BlbmlkOiBzdHJpbmcsXG4gIHN1Y2Nlc3MgPSAoKSA9PiB7fSxcbiAgZmFpbCA9ICgpID0+IHt9XG4pID0+IHtcbiAgQXBpLnN0YXJ0Q2hhdFNlc3Npb24oe1xuICAgIHVzZXJJZHM6IFtvcGVuaWRdLFxuICB9KS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcbiAgICAgIGNvbnNvbGUubG9nKGBzdGFydCBjaGF0IHNlc3Npb24gcmVzdWx0YCwgcmVzdWx0LmRhdGEpO1xuICAgICAgc3VjY2VzcygpO1xuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC4uL2NoYXQvY2hhdD9vcGVuaWQ9JHtvcGVuaWR9JmNpZD0ke3Jlc3VsdC5kYXRhLl9pZH1gLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZhaWwoKTtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgc3RhcnRTaW5nbGVDaGF0U2Vzc2lvbiB9O1xuIl19