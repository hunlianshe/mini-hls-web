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
    onShow: function () { },
    onHide: function () { },
    onUnload: function () { },
    onPullDownRefresh: function () { },
    onReachBottom: function () { },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmF0ZUxpc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmYXRlTGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUFpRDtBQUNqRCw2Q0FBd0U7QUFFeEUsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osT0FBTyxFQUFFLEdBQUc7UUFDWixTQUFTLEVBQUUsRUFBVztRQUN0QixVQUFVLEVBQUUsS0FBSztLQUNsQjtJQUVELE1BQU0sRUFBRSxVQUFVLE9BQVk7UUFDNUIsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLE9BQU8sRUFBRSxPQUFPLENBQUMsSUFBSTtTQUN0QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsT0FBTyxFQUFFO0lBQ1QsQ0FBQztJQUdELGlCQUFpQixDQUFDLE1BQWM7UUFDOUIsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDO1FBQ3BCLFFBQVEsTUFBTSxFQUFFO1lBQ2QsS0FBSyxHQUFHO2dCQUNOLElBQUksR0FBRyxRQUFRLENBQUM7Z0JBQ2hCLE1BQU07WUFDUixLQUFLLEdBQUc7Z0JBQ04sSUFBSSxHQUFHLFFBQVEsQ0FBQztnQkFDaEIsTUFBTTtZQUNSLEtBQUssR0FBRztnQkFDTixJQUFJLEdBQUcsZUFBZSxDQUFDO2dCQUN2QixNQUFNO1lBQ1I7Z0JBQ0UsTUFBTTtTQUNUO1FBQ0QsTUFBTSxNQUFNLEdBQUcsRUFBRSxJQUFJLEdBQUcsQ0FBQTtRQUN4QixHQUFHLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBVyxFQUFFLEVBQUU7WUFDakQsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsTUFBTSxTQUFTLEdBQU8sTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDbEMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQVMsRUFBRSxFQUFFO29CQUM5QixJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7d0JBQ3JDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQTtxQkFDaEM7Z0JBQ0gsQ0FBQyxDQUFDLENBQUE7Z0JBRUYsSUFBSSxDQUFDLE9BQVEsQ0FBQztvQkFDWixTQUFTO2lCQUNWLENBQUMsQ0FBQzthQUNKO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBR0QsU0FBUyxDQUFDLENBQU07UUFDZCxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDNUMsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLE9BQU8sRUFBRSxLQUFLO1NBQ2YsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ25CLElBQUksS0FBSyxJQUFJLENBQUMsRUFBRTtZQUNkLFNBQVMsR0FBRyxXQUFXLENBQUM7U0FDekI7YUFBTSxJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUU7WUFDckIsU0FBUyxHQUFHLFVBQVUsQ0FBQztTQUN4QjtRQUVELElBQUksMEJBQWtCLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDakMsSUFBSSxDQUFDLE9BQVEsQ0FBQztnQkFDWixVQUFVLEVBQUUsSUFBSTthQUNqQixDQUFDLENBQUE7WUFDRixPQUFPO1NBQ1I7UUFDRCx1QkFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLFVBQVUsRUFBRSxLQUFLO1NBQ2xCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFHRCxVQUFVLENBQUMsQ0FBTTtRQUNmLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUMzQyxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLG1DQUFtQyxNQUFNLEVBQUU7U0FDakQsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUdELE1BQU0sQ0FBQyxDQUFNO1FBQ1gsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQzNDLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsdUJBQXVCLE1BQU0sRUFBRTtTQUNyQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsTUFBTSxFQUFFLGNBQWEsQ0FBQztJQUV0QixNQUFNLEVBQUUsY0FBYSxDQUFDO0lBS3RCLFFBQVEsRUFBRSxjQUFhLENBQUM7SUFLeEIsaUJBQWlCLEVBQUUsY0FBYSxDQUFDO0lBS2pDLGFBQWEsRUFBRSxjQUFhLENBQUM7Q0FDOUIsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgQXBpIGZyb20gJy4uLy4uL3NlcnZpY2UvYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgZGVhbFJpZ2h0SW50ZXJjZXB0LCBzZXRSaWdodFN0b3JhZ2UgfSBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgX2FjdGl2ZTogJzEnLFxuICAgIGxpc3RMaWtlczogW10gYXMgYW55W10sXG4gICAgc2hvd0RpYWxvZzogZmFsc2UsXG4gIH0sXG5cbiAgb25Mb2FkOiBmdW5jdGlvbiAob3B0aW9uczogYW55KSB7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBfYWN0aXZlOiBvcHRpb25zLnR5cGUsXG4gICAgfSk7XG4gICAgdGhpcy5nZXRVc2Vyc0xpc3RMaWtlcyh0aGlzLmRhdGEuX2FjdGl2ZSk7XG4gIH0sXG5cbiAgb25SZWFkeTogZnVuY3Rpb24gKCkge1xuICB9LFxuXG4gIC8qKiDojrflj5blr7nlupTllpzmrKLnsbvliKvnmoTnlKjmiLfliJfooaggKi9cbiAgZ2V0VXNlcnNMaXN0TGlrZXMoYWN0aXZlOiBzdHJpbmcpIHtcbiAgICBsZXQgdHlwZSA9ICdsaWtlTWUnO1xuICAgIHN3aXRjaCAoYWN0aXZlKSB7XG4gICAgICBjYXNlICcxJzpcbiAgICAgICAgdHlwZSA9ICdtZUxpa2UnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJzInOlxuICAgICAgICB0eXBlID0gJ2xpa2VNZSc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnMyc6XG4gICAgICAgIHR5cGUgPSAnbGlrZUVhY2hPdGhlcic7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtcyA9IHsgdHlwZSwgfVxuICAgIEFwaS5nZXRVc2Vyc0xpc3RMaWtlcyhwYXJhbXMpLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IGxpc3RMaWtlczphbnkgPSByZXN1bHQuZGF0YTtcbiAgICAgICAgbGlzdExpa2VzLmZvckVhY2goKGxpa2U6IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChsaWtlLnBob3RvcyAmJiBsaWtlLnBob3Rvcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGxpa2UuYXZhdGFyVXJsID0gbGlrZS5waG90b3NbMF1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgICBsaXN0TGlrZXMsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIC8qKiDliIfmjaJ0YWIgKi9cbiAgc3dpdGNoVGFiKGU6IGFueSkge1xuICAgIGNvbnN0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBfYWN0aXZlOiBpbmRleCxcbiAgICB9KTtcbiAgICBsZXQgcmlnaHRUeXBlID0gJyc7XG4gICAgaWYgKGluZGV4ID09IDIpIHsgLy8g5Zac5qyi5oiRXG4gICAgICByaWdodFR5cGUgPSAnd2hvTGlrZU1lJztcbiAgICB9IGVsc2UgaWYgKGluZGV4ID09IDMpIHsgLy8g55u45LqS5Zac5qyiXG4gICAgICByaWdodFR5cGUgPSAnbGlrZUVhY2gnO1xuICAgIH1cbiAgICAvLyDlpITnkIbmi6bmiKrlubbov5Tlm57mmK/lkKbpnIDopoHooqvmi6bmiKpcbiAgICBpZiAoZGVhbFJpZ2h0SW50ZXJjZXB0KHJpZ2h0VHlwZSkpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICBzaG93RGlhbG9nOiB0cnVlLFxuICAgICAgfSlcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2V0UmlnaHRTdG9yYWdlKHJpZ2h0VHlwZSk7XG4gICAgdGhpcy5nZXRVc2Vyc0xpc3RMaWtlcyh0aGlzLmRhdGEuX2FjdGl2ZSk7XG4gIH0sXG5cbiAgY2xvc2VEaWFsb2coKSB7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBzaG93RGlhbG9nOiBmYWxzZSxcbiAgICB9KTtcbiAgfSxcblxuICAvKiog6K+m5oOFICovXG4gIHVzZXJEZXRhaWwoZTogYW55KSB7XG4gICAgY29uc3QgeyBvcGVuaWQgfSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0O1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiBgLi4vdXNlckRldGFpbC91c2VyRGV0YWlsP29wZW5pZD0ke29wZW5pZH1gLFxuICAgIH0pXG4gIH0sXG5cbiAgLyoqIOWOu+iBiuWkqSAqL1xuICBnb0NoYXQoZTogYW55KSB7XG4gICAgY29uc3QgeyBvcGVuaWQgfSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0O1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiBgLi4vY2hhdC9jaGF0P29wZW5pZD0ke29wZW5pZH1gLFxuICAgIH0pXG4gIH0sXG5cbiAgb25TaG93OiBmdW5jdGlvbiAoKSB7fSxcblxuICBvbkhpZGU6IGZ1bmN0aW9uICgpIHt9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxuICAgKi9cbiAgb25VbmxvYWQ6IGZ1bmN0aW9uICgpIHt9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxuICAgKi9cbiAgb25QdWxsRG93blJlZnJlc2g6IGZ1bmN0aW9uICgpIHt9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcbiAgICovXG4gIG9uUmVhY2hCb3R0b206IGZ1bmN0aW9uICgpIHt9LFxufSkiXX0=