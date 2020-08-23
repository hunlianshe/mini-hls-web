"use strict";
Page({
    data: {
        headList: [{
                'src': '../../public/image/male.png',
                'left': '50%',
                'width': '80',
            }],
        headInterval: null,
        matching: true,
    },
    onLoad: function (options) {
        console.log(options);
        setTimeout(() => {
            this.setData({
                matching: false,
            });
            setTimeout(() => {
                wx.navigateTo({
                    url: '../matchResult/matchResult',
                });
            }, 1000);
        }, 3500);
    },
    randerHead() {
        let headInterval = setInterval(() => {
            let headList = this.data.headList;
            if (headList.length > 10) {
                clearInterval(headInterval);
                return;
            }
            const windowWidth = wx.getSystemInfoSync().windowWidth;
            let left = 80 + Math.random() * (windowWidth - 160);
            let width = 60 + Math.random() * 40;
            console.log('left', left);
            headList.push({
                'src': '../../public/image/xzpd.png',
                'left': left.toString(),
                'width': width.toString(),
            });
            this.setData({
                headList,
            });
        }, 2000);
        this.setData({
            headInterval,
        });
    },
    onReady: function () {
    },
    onShow: function () {
    },
    onHide: function () {
    },
    onUnload: function () {
        this.setData({
            headInterval: null,
        });
    },
    onPullDownRefresh: function () {
    },
    onReachBottom: function () {
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0Y2hpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYXRjaGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFLENBQUM7Z0JBQ1QsS0FBSyxFQUFFLDZCQUE2QjtnQkFDcEMsTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsT0FBTyxFQUFFLElBQUk7YUFDZCxDQUFDO1FBQ0YsWUFBWSxFQUFFLElBQUk7UUFDbEIsUUFBUSxFQUFFLElBQUk7S0FDZjtJQUtELE1BQU0sRUFBRSxVQUFVLE9BQVk7UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVyQixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLE9BQVEsQ0FBQztnQkFDWixRQUFRLEVBQUUsS0FBSzthQUNoQixDQUFDLENBQUM7WUFDSCxVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNkLEVBQUUsQ0FBQyxVQUFVLENBQUM7b0JBQ1osR0FBRyxFQUFFLDRCQUE0QjtpQkFDbEMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ1gsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELFVBQVU7UUFDUixJQUFJLFlBQVksR0FBRyxXQUFXLENBQUMsR0FBRyxFQUFFO1lBQ2xDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ2xDLElBQUksUUFBUSxDQUFDLE1BQU0sR0FBRyxFQUFFLEVBQUU7Z0JBQ3hCLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDNUIsT0FBTzthQUNSO1lBQ0QsTUFBTSxXQUFXLEdBQUcsRUFBRSxDQUFDLGlCQUFpQixFQUFFLENBQUMsV0FBVyxDQUFBO1lBQ3RELElBQUksSUFBSSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDcEQsSUFBSSxLQUFLLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUM7WUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDMUIsUUFBUSxDQUFDLElBQUksQ0FBQztnQkFDWixLQUFLLEVBQUUsNkJBQTZCO2dCQUNwQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDdkIsT0FBTyxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUU7YUFDMUIsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLE9BQVEsQ0FBQztnQkFDWixRQUFRO2FBQ1QsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ1QsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLFlBQVk7U0FDYixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsT0FBTyxFQUFFO0lBRVQsQ0FBQztJQUVELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFFRCxNQUFNLEVBQUU7SUFFUixDQUFDO0lBRUQsUUFBUSxFQUFFO1FBQ1IsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLFlBQVksRUFBRSxJQUFJO1NBQ25CLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxpQkFBaUIsRUFBRTtJQUVuQixDQUFDO0lBS0QsYUFBYSxFQUFFO0lBRWYsQ0FBQztDQUVGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5QYWdlKHtcclxuICBkYXRhOiB7XHJcbiAgICBoZWFkTGlzdDogW3tcclxuICAgICAgJ3NyYyc6ICcuLi8uLi9wdWJsaWMvaW1hZ2UvbWFsZS5wbmcnLFxyXG4gICAgICAnbGVmdCc6ICc1MCUnLFxyXG4gICAgICAnd2lkdGgnOiAnODAnLFxyXG4gICAgfV0sXHJcbiAgICBoZWFkSW50ZXJ2YWw6IG51bGwsXHJcbiAgICBtYXRjaGluZzogdHJ1ZSxcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxyXG4gICAqL1xyXG4gIG9uTG9hZDogZnVuY3Rpb24gKG9wdGlvbnM6IGFueSkge1xyXG4gICAgY29uc29sZS5sb2cob3B0aW9ucyk7XHJcbiAgICAvLyB0aGlzLnJhbmRlckhlYWQoKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICBtYXRjaGluZzogZmFsc2UsXHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgIHVybDogJy4uL21hdGNoUmVzdWx0L21hdGNoUmVzdWx0JyxcclxuICAgICAgICB9KTtcclxuICAgICAgfSwgMTAwMCk7XHJcbiAgICB9LCAzNTAwKTtcclxuICB9LFxyXG5cclxuICByYW5kZXJIZWFkKCkge1xyXG4gICAgbGV0IGhlYWRJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgbGV0IGhlYWRMaXN0ID0gdGhpcy5kYXRhLmhlYWRMaXN0O1xyXG4gICAgICBpZiAoaGVhZExpc3QubGVuZ3RoID4gMTApIHtcclxuICAgICAgICBjbGVhckludGVydmFsKGhlYWRJbnRlcnZhbCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHdpbmRvd1dpZHRoID0gd3guZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dXaWR0aFxyXG4gICAgICBsZXQgbGVmdCA9IDgwICsgTWF0aC5yYW5kb20oKSAqICh3aW5kb3dXaWR0aCAtIDE2MCk7XHJcbiAgICAgIGxldCB3aWR0aCA9IDYwICsgTWF0aC5yYW5kb20oKSAqIDQwO1xyXG4gICAgICBjb25zb2xlLmxvZygnbGVmdCcsIGxlZnQpO1xyXG4gICAgICBoZWFkTGlzdC5wdXNoKHtcclxuICAgICAgICAnc3JjJzogJy4uLy4uL3B1YmxpYy9pbWFnZS94enBkLnBuZycsXHJcbiAgICAgICAgJ2xlZnQnOiBsZWZ0LnRvU3RyaW5nKCksXHJcbiAgICAgICAgJ3dpZHRoJzogd2lkdGgudG9TdHJpbmcoKSxcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgIGhlYWRMaXN0LFxyXG4gICAgICB9KTtcclxuICAgIH0sIDIwMDApO1xyXG4gICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgIGhlYWRJbnRlcnZhbCxcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIG9uUmVhZHk6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgb25TaG93OiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIG9uSGlkZTogZnVuY3Rpb24gKCkge1xyXG5cclxuICB9LFxyXG5cclxuICBvblVubG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgIGhlYWRJbnRlcnZhbDogbnVsbCxcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIG9uUHVsbERvd25SZWZyZXNoOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxyXG4gICAqL1xyXG4gIG9uUmVhY2hCb3R0b206IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgfSxcclxuXHJcbn0pIl19