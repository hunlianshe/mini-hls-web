"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Api = require("../../service/api.service");
Page({
    data: {
        _active: '1',
        listLikes: [],
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
                type = 'likeMe';
                break;
            case '2':
                type = 'meLike';
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
                listLikes.forEach(like => {
                  console.log('111',like.photos)
                    if (like.photos && like.photos.length) {
                        like.avatarUrl = like.photos[0];
                      console.log('like.avatarUrl ', like.avatarUrl )
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
        this.getUsersListLikes(this.data._active);
    },
    userDetail(e) {
        const { openid } = e.currentTarget.dataset;
        wx.navigateTo({
            url: `../userDetail/userDetail?openid=${openid}`,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmF0ZUxpc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmYXRlTGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUFpRDtBQUVqRCxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixPQUFPLEVBQUUsR0FBRztRQUNaLFNBQVMsRUFBRSxFQUFXO0tBQ3ZCO0lBRUQsTUFBTSxFQUFFLFVBQVUsT0FBWTtRQUM1QixJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osT0FBTyxFQUFFLE9BQU8sQ0FBQyxJQUFJO1NBQ3RCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFJRCxPQUFPLEVBQUU7SUFDVCxDQUFDO0lBR0QsaUJBQWlCLENBQUMsTUFBYztRQUM5QixJQUFJLElBQUksR0FBRyxRQUFRLENBQUM7UUFDcEIsUUFBUSxNQUFNLEVBQUU7WUFDZCxLQUFLLEdBQUc7Z0JBQ04sSUFBSSxHQUFHLFFBQVEsQ0FBQztnQkFDaEIsTUFBTTtZQUNSLEtBQUssR0FBRztnQkFDTixJQUFJLEdBQUcsUUFBUSxDQUFDO2dCQUNoQixNQUFNO1lBQ1IsS0FBSyxHQUFHO2dCQUNOLElBQUksR0FBRyxlQUFlLENBQUM7Z0JBQ3ZCLE1BQU07WUFDUjtnQkFDRSxNQUFNO1NBQ1Q7UUFDRCxNQUFNLE1BQU0sR0FBRyxFQUFFLElBQUksR0FBRyxDQUFBO1FBQ3hCLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFXLEVBQUUsRUFBRTtZQUNqRCxJQUFJLE1BQU0sRUFBRTtnQkFDVixNQUFNLFNBQVMsR0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNsQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUN2QixJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7d0JBQ3JDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQTtxQkFDaEM7Z0JBQ0gsQ0FBQyxDQUFDLENBQUE7Z0JBRUYsSUFBSSxDQUFDLE9BQVEsQ0FBQztvQkFDWixTQUFTO2lCQUNWLENBQUMsQ0FBQzthQUNKO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBR0QsU0FBUyxDQUFDLENBQU07UUFDZCxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDNUMsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLE9BQU8sRUFBRSxLQUFLO1NBQ2YsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUdELFVBQVUsQ0FBQyxDQUFNO1FBQ2YsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQzNDLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsbUNBQW1DLE1BQU0sRUFBRTtTQUNqRCxDQUFDLENBQUE7SUFJSixDQUFDO0lBTUQsTUFBTSxFQUFFO0lBRVIsQ0FBQztJQUtELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFLRCxRQUFRLEVBQUU7SUFFVixDQUFDO0lBS0QsaUJBQWlCLEVBQUU7SUFFbkIsQ0FBQztJQUtELGFBQWEsRUFBRTtJQUVmLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBBcGkgZnJvbSAnLi4vLi4vc2VydmljZS9hcGkuc2VydmljZSc7XG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgX2FjdGl2ZTogJzEnLFxuICAgIGxpc3RMaWtlczogW10gYXMgYW55W10sXG4gIH0sXG5cbiAgb25Mb2FkOiBmdW5jdGlvbiAob3B0aW9uczogYW55KSB7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBfYWN0aXZlOiBvcHRpb25zLnR5cGUsXG4gICAgfSk7XG4gICAgdGhpcy5nZXRVc2Vyc0xpc3RMaWtlcyh0aGlzLmRhdGEuX2FjdGl2ZSk7XG4gIH0sXG5cbiAgXG5cbiAgb25SZWFkeTogZnVuY3Rpb24gKCkge1xuICB9LFxuXG4gIC8qKiDojrflj5blr7nlupTllpzmrKLnsbvliKvnmoTnlKjmiLfliJfooaggKi9cbiAgZ2V0VXNlcnNMaXN0TGlrZXMoYWN0aXZlOiBzdHJpbmcpIHtcbiAgICBsZXQgdHlwZSA9ICdsaWtlTWUnO1xuICAgIHN3aXRjaCAoYWN0aXZlKSB7XG4gICAgICBjYXNlICcxJzpcbiAgICAgICAgdHlwZSA9ICdsaWtlTWUnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJzInOlxuICAgICAgICB0eXBlID0gJ21lTGlrZSc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnMyc6XG4gICAgICAgIHR5cGUgPSAnbGlrZUVhY2hPdGhlcic7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtcyA9IHsgdHlwZSwgfVxuICAgIEFwaS5nZXRVc2Vyc0xpc3RMaWtlcyhwYXJhbXMpLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IGxpc3RMaWtlczphbnkgPSByZXN1bHQuZGF0YTtcbiAgICAgICAgbGlzdExpa2VzLmZvckVhY2gobGlrZSA9PiB7XG4gICAgICAgICAgaWYgKGxpa2UucGhvdG9zICYmIGxpa2UucGhvdG9zLmxlbmd0aCkge1xuICAgICAgICAgICAgbGlrZS5hdmF0YXJVcmwgPSBsaWtlLnBob3Rvc1swXVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgIGxpc3RMaWtlcyxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqIOWIh+aNonRhYiAqL1xuICBzd2l0Y2hUYWIoZTogYW55KSB7XG4gICAgY29uc3QgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIF9hY3RpdmU6IGluZGV4LFxuICAgIH0pO1xuICAgIHRoaXMuZ2V0VXNlcnNMaXN0TGlrZXModGhpcy5kYXRhLl9hY3RpdmUpO1xuICB9LFxuXG4gIC8qKiDor6bmg4UgKi9cbiAgdXNlckRldGFpbChlOiBhbnkpIHtcbiAgICBjb25zdCB7IG9wZW5pZCB9ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQ7XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6IGAuLi91c2VyRGV0YWlsL3VzZXJEZXRhaWw/b3BlbmlkPSR7b3BlbmlkfWAsXG4gICAgfSlcbiAgICAvLyB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAvLyAgIHVybDogJy4uL3JlZ2lzdGVyUGhvbmUvcmVnaXN0ZXJQaG9uZScsXG4gICAgLy8gfSlcbiAgfSxcblxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxuICAgKi9cbiAgb25TaG93OiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cbiAgICovXG4gIG9uSGlkZTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Y246L29XG4gICAqL1xuICBvblVubG9hZDogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXG4gICAqL1xuICBvblB1bGxEb3duUmVmcmVzaDogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxuICAgKi9cbiAgb25SZWFjaEJvdHRvbTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG59KSJdfQ==