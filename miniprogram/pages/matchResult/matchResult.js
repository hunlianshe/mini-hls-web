"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Api = require("../../service/api.service");
Page({
    data: {
        matchResult: {}
    },
    onLoad: function (options) {
        console.log(options);
        Api.getConstellationMmatchingDetailComplex().then((result) => {
            console.log('result', result);
            this.setData({
                matchResult: result.data,
            });
        }, (err) => {
            console.log('err000', err);
        });
    },
    onReady: function () {
    },
    moreMatch() {
        wx.navigateTo({
            url: '../matching/matching'
        });
    },
    userDetail() {
        wx.navigateTo({
            url: `../userDetail/userDetail?openid=${this.data.matchResult.opposite.openid}`,
        });
    },
    onShow: function () {
    },
    onHide: function () {
    },
    onUnload: function () {
    },
    onPullDownRefresh: function () {
    },
    onReachBottom: function () {
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0Y2hSZXN1bHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYXRjaFJlc3VsdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUFpRDtBQUtqRCxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixXQUFXLEVBQUMsRUFBRTtLQUNmO0lBS0QsTUFBTSxFQUFFLFVBQVUsT0FBWTtRQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JCLEdBQUcsQ0FBQyxzQ0FBc0MsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQVUsRUFBRSxFQUFFO1lBQy9ELE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFBO1lBQzdCLElBQUksQ0FBQyxPQUFRLENBQUM7Z0JBQ1osV0FBVyxFQUFFLE1BQU0sQ0FBQyxJQUFJO2FBQ3pCLENBQUMsQ0FBQztRQUNMLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUE7UUFDNUIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBS0QsT0FBTyxFQUFFO0lBRVQsQ0FBQztJQUVELFNBQVM7UUFDUCxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLHNCQUFzQjtTQUM1QixDQUFDLENBQUE7SUFDSixDQUFDO0lBR0QsVUFBVTtRQUNSLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsbUNBQW1DLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUU7U0FDaEYsQ0FBQyxDQUFBO0lBSUosQ0FBQztJQVFELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFLRCxNQUFNLEVBQUU7SUFFUixDQUFDO0lBS0QsUUFBUSxFQUFFO0lBRVYsQ0FBQztJQUtELGlCQUFpQixFQUFFO0lBRW5CLENBQUM7SUFLRCxhQUFhLEVBQUU7SUFFZixDQUFDO0NBRUYsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgQXBpIGZyb20gJy4uLy4uL3NlcnZpY2UvYXBpLnNlcnZpY2UnO1xuXG5cblxuLy8gcGFnZXMvbWF0Y2hSZXN1bHQvbWF0Y2hSZXN1bHQuanNcblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgbWF0Y2hSZXN1bHQ6e31cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cbiAgICovXG4gIG9uTG9hZDogZnVuY3Rpb24gKG9wdGlvbnM6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKG9wdGlvbnMpO1xuICAgIEFwaS5nZXRDb25zdGVsbGF0aW9uTW1hdGNoaW5nRGV0YWlsQ29tcGxleCgpLnRoZW4oKHJlc3VsdDphbnkpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdyZXN1bHQnLCByZXN1bHQpXG4gICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgbWF0Y2hSZXN1bHQ6IHJlc3VsdC5kYXRhLFxuICAgICAgfSk7XG4gICAgfSwgKGVycikgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2VycjAwMCcsIGVycilcbiAgICB9KTtcbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliJ3mrKHmuLLmn5PlrozmiJBcbiAgICovXG4gIG9uUmVhZHk6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIG1vcmVNYXRjaCgpe1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiAnLi4vbWF0Y2hpbmcvbWF0Y2hpbmcnXG4gICAgfSlcbiAgfSxcblxuICAvKiog6K+m5oOFICovXG4gIHVzZXJEZXRhaWwoKSB7XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6IGAuLi91c2VyRGV0YWlsL3VzZXJEZXRhaWw/b3BlbmlkPSR7dGhpcy5kYXRhLm1hdGNoUmVzdWx0Lm9wcG9zaXRlLm9wZW5pZH1gLFxuICAgIH0pXG4gICAgLy8gd3gubmF2aWdhdGVUbyh7XG4gICAgLy8gICB1cmw6ICcuLi9yZWdpc3RlclBob25lL3JlZ2lzdGVyUGhvbmUnLFxuICAgIC8vIH0pXG4gIH0sXG5cblxuXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XG4gICAqL1xuICBvblNob3c6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdoumakOiXj1xuICAgKi9cbiAgb25IaWRlOiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cbiAgICovXG4gIG9uVW5sb2FkOiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog6aG16Z2i55u45YWz5LqL5Lu25aSE55CG5Ye95pWwLS3nm5HlkKznlKjmiLfkuIvmi4nliqjkvZxcbiAgICovXG4gIG9uUHVsbERvd25SZWZyZXNoOiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog6aG16Z2i5LiK5ouJ6Kem5bqV5LqL5Lu255qE5aSE55CG5Ye95pWwXG4gICAqL1xuICBvblJlYWNoQm90dG9tOiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxufSkiXX0=