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
                type = 'meLick';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmF0ZUxpc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmYXRlTGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUFpRDtBQUVqRCxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixPQUFPLEVBQUUsR0FBRztRQUNaLFNBQVMsRUFBRSxFQUFXO0tBQ3ZCO0lBRUQsTUFBTSxFQUFFLFVBQVUsT0FBWTtRQUM1QixJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osT0FBTyxFQUFFLE9BQU8sQ0FBQyxJQUFJO1NBQ3RCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFJRCxPQUFPLEVBQUU7SUFDVCxDQUFDO0lBR0QsaUJBQWlCLENBQUMsTUFBYztRQUM5QixJQUFJLElBQUksR0FBRyxRQUFRLENBQUM7UUFDcEIsUUFBUSxNQUFNLEVBQUU7WUFDZCxLQUFLLEdBQUc7Z0JBQ04sSUFBSSxHQUFHLFFBQVEsQ0FBQztnQkFDaEIsTUFBTTtZQUNSLEtBQUssR0FBRztnQkFDTixJQUFJLEdBQUcsUUFBUSxDQUFDO2dCQUNoQixNQUFNO1lBQ1IsS0FBSyxHQUFHO2dCQUNOLElBQUksR0FBRyxlQUFlLENBQUM7Z0JBQ3ZCLE1BQU07WUFDUjtnQkFDRSxNQUFNO1NBQ1Q7UUFDRCxNQUFNLE1BQU0sR0FBRyxFQUFFLElBQUksR0FBRyxDQUFBO1FBQ3hCLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFXLEVBQUUsRUFBRTtZQUNqRCxJQUFJLE1BQU0sRUFBRTtnQkFDVixNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUM5QixJQUFJLENBQUMsT0FBUSxDQUFDO29CQUNaLFNBQVM7aUJBQ1YsQ0FBQyxDQUFDO2FBQ0o7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFHRCxTQUFTLENBQUMsQ0FBTTtRQUNkLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUM1QyxJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osT0FBTyxFQUFFLEtBQUs7U0FDZixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBS0QsTUFBTSxFQUFFO0lBRVIsQ0FBQztJQUtELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFLRCxRQUFRLEVBQUU7SUFFVixDQUFDO0lBS0QsaUJBQWlCLEVBQUU7SUFFbkIsQ0FBQztJQUtELGFBQWEsRUFBRTtJQUVmLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBBcGkgZnJvbSAnLi4vLi4vc2VydmljZS9hcGkuc2VydmljZSc7XG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgX2FjdGl2ZTogJzEnLFxuICAgIGxpc3RMaWtlczogW10gYXMgYW55W10sXG4gIH0sXG5cbiAgb25Mb2FkOiBmdW5jdGlvbiAob3B0aW9uczogYW55KSB7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBfYWN0aXZlOiBvcHRpb25zLnR5cGUsXG4gICAgfSk7XG4gICAgdGhpcy5nZXRVc2Vyc0xpc3RMaWtlcyh0aGlzLmRhdGEuX2FjdGl2ZSk7XG4gIH0sXG5cbiAgXG5cbiAgb25SZWFkeTogZnVuY3Rpb24gKCkge1xuICB9LFxuXG4gIC8qKiDojrflj5blr7nlupTllpzmrKLnsbvliKvnmoTnlKjmiLfliJfooaggKi9cbiAgZ2V0VXNlcnNMaXN0TGlrZXMoYWN0aXZlOiBzdHJpbmcpIHtcbiAgICBsZXQgdHlwZSA9ICdsaWtlTWUnO1xuICAgIHN3aXRjaCAoYWN0aXZlKSB7XG4gICAgICBjYXNlICcxJzpcbiAgICAgICAgdHlwZSA9ICdsaWtlTWUnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJzInOlxuICAgICAgICB0eXBlID0gJ21lTGljayc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnMyc6XG4gICAgICAgIHR5cGUgPSAnbGlrZUVhY2hPdGhlcic7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtcyA9IHsgdHlwZSwgfVxuICAgIEFwaS5nZXRVc2Vyc0xpc3RMaWtlcyhwYXJhbXMpLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IGxpc3RMaWtlcyA9IHJlc3VsdC5kYXRhO1xuICAgICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgICBsaXN0TGlrZXMsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIC8qKiDliIfmjaJ0YWIgKi9cbiAgc3dpdGNoVGFiKGU6IGFueSkge1xuICAgIGNvbnN0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBfYWN0aXZlOiBpbmRleCxcbiAgICB9KTtcbiAgICB0aGlzLmdldFVzZXJzTGlzdExpa2VzKHRoaXMuZGF0YS5fYWN0aXZlKTtcbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcbiAgICovXG4gIG9uU2hvdzogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXG4gICAqL1xuICBvbkhpZGU6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxuICAgKi9cbiAgb25VbmxvYWQ6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxuICAgKi9cbiAgb25QdWxsRG93blJlZnJlc2g6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcbiAgICovXG4gIG9uUmVhY2hCb3R0b206IGZ1bmN0aW9uICgpIHtcblxuICB9LFxufSkiXX0=