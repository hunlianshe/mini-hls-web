"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Api = require("../../service/api.service");
const utils_1 = require("../../utils/utils");
Page({
    data: {
        _active: '1',
        listLikes: [],
        showDialog: false,
    },
    onLoad: function (options) {
        this.setData({
            _active: options.type,
        });
        this.getUsersListLikes(this.data._active);
    },
    onReady: function () {
    },
    getUsersListLikes(active) {
        let type = 'likeMe';
        switch (active) {
            case '1':
                type = 'meLike';
                break;
            case '2':
                type = 'likeMe';
                break;
            case '3':
                type = 'likeEachOther';
                break;
            default:
                break;
        }
        const params = { type, };
        Api.getUsersListLikes(params).then((result) => {
            if (result) {
                const listLikes = result.data;
                listLikes.forEach((like) => {
                    if (like.photos && like.photos.length) {
                        like.avatarUrl = like.photos[0];
                    }
                });
                this.setData({
                    listLikes,
                });
            }
        });
    },
    switchTab(e) {
        const index = e.currentTarget.dataset.index;
        this.setData({
            _active: index,
        });
        let rightType = '';
        if (index == 2) {
            rightType = 'whoLikeMe';
        }
        else if (index == 3) {
            rightType = 'likeEach';
        }
        if (utils_1.dealRightIntercept(rightType)) {
            this.setData({
                showDialog: true,
            });
            return;
        }
        utils_1.setRightStorage(rightType);
        this.getUsersListLikes(this.data._active);
    },
    closeDialog() {
        this.setData({
            showDialog: false,
        });
    },
    userDetail(e) {
        const { openid } = e.currentTarget.dataset;
        wx.navigateTo({
            url: `../userDetail/userDetail?openid=${openid}`,
        });
    },
    goChat(e) {
        const { openid } = e.currentTarget.dataset;
        wx.navigateTo({
            url: `../chat/chat?openid=${openid}`,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmF0ZUxpc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmYXRlTGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUFpRDtBQUNqRCw2Q0FBd0U7QUFFeEUsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osT0FBTyxFQUFFLEdBQUc7UUFDWixTQUFTLEVBQUUsRUFBVztRQUN0QixVQUFVLEVBQUUsS0FBSztLQUNsQjtJQUVELE1BQU0sRUFBRSxVQUFVLE9BQVk7UUFDNUIsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLE9BQU8sRUFBRSxPQUFPLENBQUMsSUFBSTtTQUN0QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsT0FBTyxFQUFFO0lBQ1QsQ0FBQztJQUdELGlCQUFpQixDQUFDLE1BQWM7UUFDOUIsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDO1FBQ3BCLFFBQVEsTUFBTSxFQUFFO1lBQ2QsS0FBSyxHQUFHO2dCQUNOLElBQUksR0FBRyxRQUFRLENBQUM7Z0JBQ2hCLE1BQU07WUFDUixLQUFLLEdBQUc7Z0JBQ04sSUFBSSxHQUFHLFFBQVEsQ0FBQztnQkFDaEIsTUFBTTtZQUNSLEtBQUssR0FBRztnQkFDTixJQUFJLEdBQUcsZUFBZSxDQUFDO2dCQUN2QixNQUFNO1lBQ1I7Z0JBQ0UsTUFBTTtTQUNUO1FBQ0QsTUFBTSxNQUFNLEdBQUcsRUFBRSxJQUFJLEdBQUcsQ0FBQTtRQUN4QixHQUFHLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBVyxFQUFFLEVBQUU7WUFDakQsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsTUFBTSxTQUFTLEdBQU8sTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDbEMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQVMsRUFBRSxFQUFFO29CQUM5QixJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7d0JBQ3JDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQTtxQkFDaEM7Z0JBQ0gsQ0FBQyxDQUFDLENBQUE7Z0JBRUYsSUFBSSxDQUFDLE9BQVEsQ0FBQztvQkFDWixTQUFTO2lCQUNWLENBQUMsQ0FBQzthQUNKO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBR0QsU0FBUyxDQUFDLENBQU07UUFDZCxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDNUMsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLE9BQU8sRUFBRSxLQUFLO1NBQ2YsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ25CLElBQUksS0FBSyxJQUFJLENBQUMsRUFBRTtZQUNkLFNBQVMsR0FBRyxXQUFXLENBQUM7U0FDekI7YUFBTSxJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUU7WUFDckIsU0FBUyxHQUFHLFVBQVUsQ0FBQztTQUN4QjtRQUVELElBQUksMEJBQWtCLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDakMsSUFBSSxDQUFDLE9BQVEsQ0FBQztnQkFDWixVQUFVLEVBQUUsSUFBSTthQUNqQixDQUFDLENBQUE7WUFDRixPQUFPO1NBQ1I7UUFDRCx1QkFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLFVBQVUsRUFBRSxLQUFLO1NBQ2xCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFHRCxVQUFVLENBQUMsQ0FBTTtRQUNmLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUMzQyxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLG1DQUFtQyxNQUFNLEVBQUU7U0FDakQsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUdELE1BQU0sQ0FBQyxDQUFNO1FBQ1gsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQzNDLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsdUJBQXVCLE1BQU0sRUFBRTtTQUNyQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsTUFBTSxFQUFFO0lBRVIsQ0FBQztJQUVELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFLRCxRQUFRLEVBQUU7SUFFVixDQUFDO0lBS0QsaUJBQWlCLEVBQUU7SUFFbkIsQ0FBQztJQUtELGFBQWEsRUFBRTtJQUVmLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBBcGkgZnJvbSAnLi4vLi4vc2VydmljZS9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBkZWFsUmlnaHRJbnRlcmNlcHQsIHNldFJpZ2h0U3RvcmFnZSB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJztcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBfYWN0aXZlOiAnMScsXG4gICAgbGlzdExpa2VzOiBbXSBhcyBhbnlbXSxcbiAgICBzaG93RGlhbG9nOiBmYWxzZSxcbiAgfSxcblxuICBvbkxvYWQ6IGZ1bmN0aW9uIChvcHRpb25zOiBhbnkpIHtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIF9hY3RpdmU6IG9wdGlvbnMudHlwZSxcbiAgICB9KTtcbiAgICB0aGlzLmdldFVzZXJzTGlzdExpa2VzKHRoaXMuZGF0YS5fYWN0aXZlKTtcbiAgfSxcblxuICBvblJlYWR5OiBmdW5jdGlvbiAoKSB7XG4gIH0sXG5cbiAgLyoqIOiOt+WPluWvueW6lOWWnOasouexu+WIq+eahOeUqOaIt+WIl+ihqCAqL1xuICBnZXRVc2Vyc0xpc3RMaWtlcyhhY3RpdmU6IHN0cmluZykge1xuICAgIGxldCB0eXBlID0gJ2xpa2VNZSc7XG4gICAgc3dpdGNoIChhY3RpdmUpIHtcbiAgICAgIGNhc2UgJzEnOlxuICAgICAgICB0eXBlID0gJ21lTGlrZSc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnMic6XG4gICAgICAgIHR5cGUgPSAnbGlrZU1lJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICczJzpcbiAgICAgICAgdHlwZSA9ICdsaWtlRWFjaE90aGVyJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgY29uc3QgcGFyYW1zID0geyB0eXBlLCB9XG4gICAgQXBpLmdldFVzZXJzTGlzdExpa2VzKHBhcmFtcykudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgY29uc3QgbGlzdExpa2VzOmFueSA9IHJlc3VsdC5kYXRhO1xuICAgICAgICBsaXN0TGlrZXMuZm9yRWFjaCgobGlrZTogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKGxpa2UucGhvdG9zICYmIGxpa2UucGhvdG9zLmxlbmd0aCkge1xuICAgICAgICAgICAgbGlrZS5hdmF0YXJVcmwgPSBsaWtlLnBob3Rvc1swXVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgIGxpc3RMaWtlcyxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqIOWIh+aNonRhYiAqL1xuICBzd2l0Y2hUYWIoZTogYW55KSB7XG4gICAgY29uc3QgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIF9hY3RpdmU6IGluZGV4LFxuICAgIH0pO1xuICAgIGxldCByaWdodFR5cGUgPSAnJztcbiAgICBpZiAoaW5kZXggPT0gMikgeyAvLyDllpzmrKLmiJFcbiAgICAgIHJpZ2h0VHlwZSA9ICd3aG9MaWtlTWUnO1xuICAgIH0gZWxzZSBpZiAoaW5kZXggPT0gMykgeyAvLyDnm7jkupLllpzmrKJcbiAgICAgIHJpZ2h0VHlwZSA9ICdsaWtlRWFjaCc7XG4gICAgfVxuICAgIC8vIOWkhOeQhuaLpuaIquW5tui/lOWbnuaYr+WQpumcgOimgeiiq+aLpuaIqlxuICAgIGlmIChkZWFsUmlnaHRJbnRlcmNlcHQocmlnaHRUeXBlKSkge1xuICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgIHNob3dEaWFsb2c6IHRydWUsXG4gICAgICB9KVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzZXRSaWdodFN0b3JhZ2UocmlnaHRUeXBlKTtcbiAgICB0aGlzLmdldFVzZXJzTGlzdExpa2VzKHRoaXMuZGF0YS5fYWN0aXZlKTtcbiAgfSxcblxuICBjbG9zZURpYWxvZygpIHtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIHNob3dEaWFsb2c6IGZhbHNlLFxuICAgIH0pO1xuICB9LFxuXG4gIC8qKiDor6bmg4UgKi9cbiAgdXNlckRldGFpbChlOiBhbnkpIHtcbiAgICBjb25zdCB7IG9wZW5pZCB9ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQ7XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6IGAuLi91c2VyRGV0YWlsL3VzZXJEZXRhaWw/b3BlbmlkPSR7b3BlbmlkfWAsXG4gICAgfSlcbiAgfSxcblxuICAvKiog5Y676IGK5aSpICovXG4gIGdvQ2hhdChlOiBhbnkpIHtcbiAgICBjb25zdCB7IG9wZW5pZCB9ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQ7XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6IGAuLi9jaGF0L2NoYXQ/b3BlbmlkPSR7b3BlbmlkfWAsXG4gICAgfSlcbiAgfSxcblxuICBvblNob3c6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIG9uSGlkZTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Y246L29XG4gICAqL1xuICBvblVubG9hZDogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXG4gICAqL1xuICBvblB1bGxEb3duUmVmcmVzaDogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxuICAgKi9cbiAgb25SZWFjaEJvdHRvbTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG59KSJdfQ==