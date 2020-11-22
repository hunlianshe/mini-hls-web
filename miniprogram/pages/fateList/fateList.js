"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Api = require("../../service/api.service");
const utils_1 = require("../../utils/utils");
const ChatService = require("../../service/chat.service");
Page({
    data: {
        _active: "1",
        listLikes: [],
        showDialog: false,
    },
    onLoad: function (options) {
        this.setData({
            _active: options.type,
        });
        this.getUsersListLikes(this.data._active);
    },
    onReady: function () { },
    getUsersListLikes(active) {
        let type = "likeMe";
        switch (active) {
            case "1":
                type = "meLike";
                break;
            case "2":
                type = "likeMe";
                break;
            case "3":
                type = "likeEachOther";
                break;
            default:
                break;
        }
        const params = { type };
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
        let rightType = "";
        if (index == 2) {
            rightType = "whoLikeMe";
        }
        else if (index == 3) {
            rightType = "likeEach";
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
        console.log("come in..... user detail");
        const { openid } = e.currentTarget.dataset;
        wx.navigateTo({
            url: `../userDetail/userDetail?openid=${openid}`,
        });
    },
    goChat(e) {
        console.log("come in..... go to chat");
        const { openid } = e.currentTarget.dataset;
        console.log(`fateList openid:`, e.currentTarget);
        if (utils_1.dealFateChatIntercept(openid)) {
            this.setData({
                showDialog: true,
            });
            return;
        }
        ChatService.startSingleChatSession(openid);
    },
    onShow: function () { },
    onHide: function () { },
    onUnload: function () { },
    onPullDownRefresh: function () { },
    onReachBottom: function () { },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmF0ZUxpc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmYXRlTGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUFpRDtBQUNqRCw2Q0FJMkI7QUFFM0IsMERBQTBEO0FBRTFELElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLE9BQU8sRUFBRSxHQUFHO1FBQ1osU0FBUyxFQUFFLEVBQVc7UUFDdEIsVUFBVSxFQUFFLEtBQUs7S0FDbEI7SUFFRCxNQUFNLEVBQUUsVUFBVSxPQUFZO1FBQzVCLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixPQUFPLEVBQUUsT0FBTyxDQUFDLElBQUk7U0FDdEIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELE9BQU8sRUFBRSxjQUFhLENBQUM7SUFHdkIsaUJBQWlCLENBQUMsTUFBYztRQUM5QixJQUFJLElBQUksR0FBRyxRQUFRLENBQUM7UUFDcEIsUUFBUSxNQUFNLEVBQUU7WUFDZCxLQUFLLEdBQUc7Z0JBQ04sSUFBSSxHQUFHLFFBQVEsQ0FBQztnQkFDaEIsTUFBTTtZQUNSLEtBQUssR0FBRztnQkFDTixJQUFJLEdBQUcsUUFBUSxDQUFDO2dCQUNoQixNQUFNO1lBQ1IsS0FBSyxHQUFHO2dCQUNOLElBQUksR0FBRyxlQUFlLENBQUM7Z0JBQ3ZCLE1BQU07WUFDUjtnQkFDRSxNQUFNO1NBQ1Q7UUFDRCxNQUFNLE1BQU0sR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDO1FBQ3hCLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFXLEVBQUUsRUFBRTtZQUNqRCxJQUFJLE1BQU0sRUFBRTtnQkFDVixNQUFNLFNBQVMsR0FBUSxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNuQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBUyxFQUFFLEVBQUU7b0JBQzlCLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTt3QkFDckMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUNqQztnQkFDSCxDQUFDLENBQUMsQ0FBQztnQkFFSCxJQUFJLENBQUMsT0FBUSxDQUFDO29CQUNaLFNBQVM7aUJBQ1YsQ0FBQyxDQUFDO2FBQ0o7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFHRCxTQUFTLENBQUMsQ0FBTTtRQUNkLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUM1QyxJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osT0FBTyxFQUFFLEtBQUs7U0FDZixDQUFDLENBQUM7UUFDSCxJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO1lBRWQsU0FBUyxHQUFHLFdBQVcsQ0FBQztTQUN6QjthQUFNLElBQUksS0FBSyxJQUFJLENBQUMsRUFBRTtZQUVyQixTQUFTLEdBQUcsVUFBVSxDQUFDO1NBQ3hCO1FBRUQsSUFBSSwwQkFBa0IsQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNqQyxJQUFJLENBQUMsT0FBUSxDQUFDO2dCQUNaLFVBQVUsRUFBRSxJQUFJO2FBQ2pCLENBQUMsQ0FBQztZQUNILE9BQU87U0FDUjtRQUNELHVCQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osVUFBVSxFQUFFLEtBQUs7U0FDbEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUdELFVBQVUsQ0FBQyxDQUFNO1FBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBQ3hDLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUMzQyxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLG1DQUFtQyxNQUFNLEVBQUU7U0FDakQsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUdELE1BQU0sQ0FBQyxDQUFNO1FBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQ3ZDLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNqRCxJQUFJLDZCQUFxQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxPQUFRLENBQUM7Z0JBQ1osVUFBVSxFQUFFLElBQUk7YUFDakIsQ0FBQyxDQUFDO1lBQ0gsT0FBTztTQUNSO1FBRUQsV0FBVyxDQUFDLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBYzdDLENBQUM7SUFFRCxNQUFNLEVBQUUsY0FBYSxDQUFDO0lBRXRCLE1BQU0sRUFBRSxjQUFhLENBQUM7SUFLdEIsUUFBUSxFQUFFLGNBQWEsQ0FBQztJQUt4QixpQkFBaUIsRUFBRSxjQUFhLENBQUM7SUFLakMsYUFBYSxFQUFFLGNBQWEsQ0FBQztDQUM5QixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBBcGkgZnJvbSAnLi4vLi4vc2VydmljZS9hcGkuc2VydmljZSc7XG5pbXBvcnQge1xuICBkZWFsUmlnaHRJbnRlcmNlcHQsXG4gIHNldFJpZ2h0U3RvcmFnZSxcbiAgZGVhbEZhdGVDaGF0SW50ZXJjZXB0LFxufSBmcm9tIFwiLi4vLi4vdXRpbHMvdXRpbHNcIjtcblxuaW1wb3J0ICogYXMgQ2hhdFNlcnZpY2UgZnJvbSAnLi4vLi4vc2VydmljZS9jaGF0LnNlcnZpY2UnO1xuXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIF9hY3RpdmU6IFwiMVwiLFxuICAgIGxpc3RMaWtlczogW10gYXMgYW55W10sXG4gICAgc2hvd0RpYWxvZzogZmFsc2UsXG4gIH0sXG5cbiAgb25Mb2FkOiBmdW5jdGlvbiAob3B0aW9uczogYW55KSB7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBfYWN0aXZlOiBvcHRpb25zLnR5cGUsXG4gICAgfSk7XG4gICAgdGhpcy5nZXRVc2Vyc0xpc3RMaWtlcyh0aGlzLmRhdGEuX2FjdGl2ZSk7XG4gIH0sXG5cbiAgb25SZWFkeTogZnVuY3Rpb24gKCkge30sXG5cbiAgLyoqIOiOt+WPluWvueW6lOWWnOasouexu+WIq+eahOeUqOaIt+WIl+ihqCAqL1xuICBnZXRVc2Vyc0xpc3RMaWtlcyhhY3RpdmU6IHN0cmluZykge1xuICAgIGxldCB0eXBlID0gXCJsaWtlTWVcIjtcbiAgICBzd2l0Y2ggKGFjdGl2ZSkge1xuICAgICAgY2FzZSBcIjFcIjpcbiAgICAgICAgdHlwZSA9IFwibWVMaWtlXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIjJcIjpcbiAgICAgICAgdHlwZSA9IFwibGlrZU1lXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIjNcIjpcbiAgICAgICAgdHlwZSA9IFwibGlrZUVhY2hPdGhlclwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjb25zdCBwYXJhbXMgPSB7IHR5cGUgfTtcbiAgICBBcGkuZ2V0VXNlcnNMaXN0TGlrZXMocGFyYW1zKS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBjb25zdCBsaXN0TGlrZXM6IGFueSA9IHJlc3VsdC5kYXRhO1xuICAgICAgICBsaXN0TGlrZXMuZm9yRWFjaCgobGlrZTogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKGxpa2UucGhvdG9zICYmIGxpa2UucGhvdG9zLmxlbmd0aCkge1xuICAgICAgICAgICAgbGlrZS5hdmF0YXJVcmwgPSBsaWtlLnBob3Rvc1swXTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgIGxpc3RMaWtlcyxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqIOWIh+aNonRhYiAqL1xuICBzd2l0Y2hUYWIoZTogYW55KSB7XG4gICAgY29uc3QgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIF9hY3RpdmU6IGluZGV4LFxuICAgIH0pO1xuICAgIGxldCByaWdodFR5cGUgPSBcIlwiO1xuICAgIGlmIChpbmRleCA9PSAyKSB7XG4gICAgICAvLyDllpzmrKLmiJFcbiAgICAgIHJpZ2h0VHlwZSA9IFwid2hvTGlrZU1lXCI7XG4gICAgfSBlbHNlIGlmIChpbmRleCA9PSAzKSB7XG4gICAgICAvLyDnm7jkupLllpzmrKJcbiAgICAgIHJpZ2h0VHlwZSA9IFwibGlrZUVhY2hcIjtcbiAgICB9XG4gICAgLy8g5aSE55CG5oum5oiq5bm26L+U5Zue5piv5ZCm6ZyA6KaB6KKr5oum5oiqXG4gICAgaWYgKGRlYWxSaWdodEludGVyY2VwdChyaWdodFR5cGUpKSB7XG4gICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgc2hvd0RpYWxvZzogdHJ1ZSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzZXRSaWdodFN0b3JhZ2UocmlnaHRUeXBlKTtcbiAgICB0aGlzLmdldFVzZXJzTGlzdExpa2VzKHRoaXMuZGF0YS5fYWN0aXZlKTtcbiAgfSxcblxuICBjbG9zZURpYWxvZygpIHtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIHNob3dEaWFsb2c6IGZhbHNlLFxuICAgIH0pO1xuICB9LFxuXG4gIC8qKiDor6bmg4UgKi9cbiAgdXNlckRldGFpbChlOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZyhcImNvbWUgaW4uLi4uLiB1c2VyIGRldGFpbFwiKTtcbiAgICBjb25zdCB7IG9wZW5pZCB9ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQ7XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6IGAuLi91c2VyRGV0YWlsL3VzZXJEZXRhaWw/b3BlbmlkPSR7b3BlbmlkfWAsXG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqIOWOu+iBiuWkqSAqL1xuICBnb0NoYXQoZTogYW55KSB7XG4gICAgY29uc29sZS5sb2coXCJjb21lIGluLi4uLi4gZ28gdG8gY2hhdFwiKTtcbiAgICBjb25zdCB7IG9wZW5pZCB9ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQ7XG4gICAgY29uc29sZS5sb2coYGZhdGVMaXN0IG9wZW5pZDpgLCBlLmN1cnJlbnRUYXJnZXQpO1xuICAgIGlmIChkZWFsRmF0ZUNoYXRJbnRlcmNlcHQob3BlbmlkKSkge1xuICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgIHNob3dEaWFsb2c6IHRydWUsXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBDaGF0U2VydmljZS5zdGFydFNpbmdsZUNoYXRTZXNzaW9uKG9wZW5pZCk7XG4gICAgLy8gQXBpLnN0YXJ0Q2hhdFNlc3Npb24oe1xuICAgIC8vICAgdXNlcklkczogW3RoaXMuZGF0YS5vcGVuaWRdXG4gICAgLy8gfSkudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAvLyAgIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coYHN0YXJ0IGNoYXQgc2Vzc2lvbiByZXN1bHRgLCByZXN1bHQuZGF0YSk7XG4gICAgLy8gICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgIC8vICAgICAgIHVybDogYC4uL2NoYXQvY2hhdD9vcGVuaWQ9JHt0aGlzLmRhdGEub3BlbmlkfSZjaWQ9JHtyZXN1bHQuZGF0YS5faWR9YCxcbiAgICAvLyAgICAgfSlcbiAgICAvLyAgIH1cbiAgICAvLyB9KVxuICAgIC8vIHd4Lm5hdmlnYXRlVG8oe1xuICAgIC8vICAgdXJsOiBgLi4vY2hhdC9jaGF0P29wZW5pZD0ke29wZW5pZH1gLFxuICAgIC8vIH0pXG4gIH0sXG5cbiAgb25TaG93OiBmdW5jdGlvbiAoKSB7fSxcblxuICBvbkhpZGU6IGZ1bmN0aW9uICgpIHt9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxuICAgKi9cbiAgb25VbmxvYWQ6IGZ1bmN0aW9uICgpIHt9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxuICAgKi9cbiAgb25QdWxsRG93blJlZnJlc2g6IGZ1bmN0aW9uICgpIHt9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcbiAgICovXG4gIG9uUmVhY2hCb3R0b206IGZ1bmN0aW9uICgpIHt9LFxufSk7Il19