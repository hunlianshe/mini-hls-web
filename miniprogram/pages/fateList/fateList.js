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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmF0ZUxpc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmYXRlTGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUFpRDtBQUVqRCxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixPQUFPLEVBQUUsR0FBRztRQUNaLFNBQVMsRUFBRSxFQUFXO0tBQ3ZCO0lBRUQsTUFBTSxFQUFFLFVBQVUsT0FBWTtRQUM1QixJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osT0FBTyxFQUFFLE9BQU8sQ0FBQyxJQUFJO1NBQ3RCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFJRCxPQUFPLEVBQUU7SUFDVCxDQUFDO0lBR0QsaUJBQWlCLENBQUMsTUFBYztRQUM5QixJQUFJLElBQUksR0FBRyxRQUFRLENBQUM7UUFDcEIsUUFBUSxNQUFNLEVBQUU7WUFDZCxLQUFLLEdBQUc7Z0JBQ04sSUFBSSxHQUFHLFFBQVEsQ0FBQztnQkFDaEIsTUFBTTtZQUNSLEtBQUssR0FBRztnQkFDTixJQUFJLEdBQUcsUUFBUSxDQUFDO2dCQUNoQixNQUFNO1lBQ1IsS0FBSyxHQUFHO2dCQUNOLElBQUksR0FBRyxlQUFlLENBQUM7Z0JBQ3ZCLE1BQU07WUFDUjtnQkFDRSxNQUFNO1NBQ1Q7UUFDRCxNQUFNLE1BQU0sR0FBRyxFQUFFLElBQUksR0FBRyxDQUFBO1FBQ3hCLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFXLEVBQUUsRUFBRTtZQUNqRCxJQUFJLE1BQU0sRUFBRTtnQkFDVixNQUFNLFNBQVMsR0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNsQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBUyxFQUFFLEVBQUU7b0JBQzlCLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTt3QkFDckMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFBO3FCQUNoQztnQkFDSCxDQUFDLENBQUMsQ0FBQTtnQkFFRixJQUFJLENBQUMsT0FBUSxDQUFDO29CQUNaLFNBQVM7aUJBQ1YsQ0FBQyxDQUFDO2FBQ0o7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFHRCxTQUFTLENBQUMsQ0FBTTtRQUNkLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUM1QyxJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osT0FBTyxFQUFFLEtBQUs7U0FDZixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBR0QsVUFBVSxDQUFDLENBQU07UUFDZixNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDM0MsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxtQ0FBbUMsTUFBTSxFQUFFO1NBQ2pELENBQUMsQ0FBQTtJQUlKLENBQUM7SUFNRCxNQUFNLEVBQUU7SUFFUixDQUFDO0lBS0QsTUFBTSxFQUFFO0lBRVIsQ0FBQztJQUtELFFBQVEsRUFBRTtJQUVWLENBQUM7SUFLRCxpQkFBaUIsRUFBRTtJQUVuQixDQUFDO0lBS0QsYUFBYSxFQUFFO0lBRWYsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIEFwaSBmcm9tICcuLi8uLi9zZXJ2aWNlL2FwaS5zZXJ2aWNlJztcclxuXHJcblBhZ2Uoe1xyXG4gIGRhdGE6IHtcclxuICAgIF9hY3RpdmU6ICcxJyxcclxuICAgIGxpc3RMaWtlczogW10gYXMgYW55W10sXHJcbiAgfSxcclxuXHJcbiAgb25Mb2FkOiBmdW5jdGlvbiAob3B0aW9uczogYW55KSB7XHJcbiAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgX2FjdGl2ZTogb3B0aW9ucy50eXBlLFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmdldFVzZXJzTGlzdExpa2VzKHRoaXMuZGF0YS5fYWN0aXZlKTtcclxuICB9LFxyXG5cclxuICBcclxuXHJcbiAgb25SZWFkeTogZnVuY3Rpb24gKCkge1xyXG4gIH0sXHJcblxyXG4gIC8qKiDojrflj5blr7nlupTllpzmrKLnsbvliKvnmoTnlKjmiLfliJfooaggKi9cclxuICBnZXRVc2Vyc0xpc3RMaWtlcyhhY3RpdmU6IHN0cmluZykge1xyXG4gICAgbGV0IHR5cGUgPSAnbGlrZU1lJztcclxuICAgIHN3aXRjaCAoYWN0aXZlKSB7XHJcbiAgICAgIGNhc2UgJzEnOlxyXG4gICAgICAgIHR5cGUgPSAnbGlrZU1lJztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnMic6XHJcbiAgICAgICAgdHlwZSA9ICdtZUxpa2UnO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICczJzpcclxuICAgICAgICB0eXBlID0gJ2xpa2VFYWNoT3RoZXInO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcGFyYW1zID0geyB0eXBlLCB9XHJcbiAgICBBcGkuZ2V0VXNlcnNMaXN0TGlrZXMocGFyYW1zKS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xyXG4gICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgY29uc3QgbGlzdExpa2VzOmFueSA9IHJlc3VsdC5kYXRhO1xyXG4gICAgICAgIGxpc3RMaWtlcy5mb3JFYWNoKChsaWtlOiBhbnkpID0+IHtcclxuICAgICAgICAgIGlmIChsaWtlLnBob3RvcyAmJiBsaWtlLnBob3Rvcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgbGlrZS5hdmF0YXJVcmwgPSBsaWtlLnBob3Rvc1swXVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgICBsaXN0TGlrZXMsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIC8qKiDliIfmjaJ0YWIgKi9cclxuICBzd2l0Y2hUYWIoZTogYW55KSB7XHJcbiAgICBjb25zdCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xyXG4gICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgIF9hY3RpdmU6IGluZGV4LFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmdldFVzZXJzTGlzdExpa2VzKHRoaXMuZGF0YS5fYWN0aXZlKTtcclxuICB9LFxyXG5cclxuICAvKiog6K+m5oOFICovXHJcbiAgdXNlckRldGFpbChlOiBhbnkpIHtcclxuICAgIGNvbnN0IHsgb3BlbmlkIH0gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldDtcclxuICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICB1cmw6IGAuLi91c2VyRGV0YWlsL3VzZXJEZXRhaWw/b3BlbmlkPSR7b3BlbmlkfWAsXHJcbiAgICB9KVxyXG4gICAgLy8gd3gubmF2aWdhdGVUbyh7XHJcbiAgICAvLyAgIHVybDogJy4uL3JlZ2lzdGVyUGhvbmUvcmVnaXN0ZXJQaG9uZScsXHJcbiAgICAvLyB9KVxyXG4gIH0sXHJcblxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxyXG4gICAqL1xyXG4gIG9uU2hvdzogZnVuY3Rpb24gKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdoumakOiXj1xyXG4gICAqL1xyXG4gIG9uSGlkZTogZnVuY3Rpb24gKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxyXG4gICAqL1xyXG4gIG9uVW5sb2FkOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXHJcbiAgICovXHJcbiAgb25QdWxsRG93blJlZnJlc2g6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog6aG16Z2i5LiK5ouJ6Kem5bqV5LqL5Lu255qE5aSE55CG5Ye95pWwXHJcbiAgICovXHJcbiAgb25SZWFjaEJvdHRvbTogZnVuY3Rpb24gKCkge1xyXG5cclxuICB9LFxyXG59KSJdfQ==