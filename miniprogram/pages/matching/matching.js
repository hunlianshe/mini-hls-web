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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0Y2hpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYXRjaGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFLENBQUM7Z0JBQ1QsS0FBSyxFQUFFLDZCQUE2QjtnQkFDcEMsTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsT0FBTyxFQUFFLElBQUk7YUFDZCxDQUFDO1FBQ0YsWUFBWSxFQUFFLElBQUk7UUFDbEIsUUFBUSxFQUFFLElBQUk7S0FDZjtJQUtELE1BQU0sRUFBRSxVQUFVLE9BQVk7UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVyQixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLE9BQVEsQ0FBQztnQkFDWixRQUFRLEVBQUUsS0FBSzthQUNoQixDQUFDLENBQUM7WUFDSCxVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNkLEVBQUUsQ0FBQyxVQUFVLENBQUM7b0JBQ1osR0FBRyxFQUFFLDRCQUE0QjtpQkFDbEMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ1gsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELFVBQVU7UUFDUixJQUFJLFlBQVksR0FBRyxXQUFXLENBQUMsR0FBRyxFQUFFO1lBQ2xDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ2xDLElBQUksUUFBUSxDQUFDLE1BQU0sR0FBRyxFQUFFLEVBQUU7Z0JBQ3hCLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDNUIsT0FBTzthQUNSO1lBQ0QsTUFBTSxXQUFXLEdBQUcsRUFBRSxDQUFDLGlCQUFpQixFQUFFLENBQUMsV0FBVyxDQUFBO1lBQ3RELElBQUksSUFBSSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDcEQsSUFBSSxLQUFLLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUM7WUFDcEMsUUFBUSxDQUFDLElBQUksQ0FBQztnQkFDWixLQUFLLEVBQUUsNkJBQTZCO2dCQUNwQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDdkIsT0FBTyxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUU7YUFDMUIsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLE9BQVEsQ0FBQztnQkFDWixRQUFRO2FBQ1QsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ1QsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLFlBQVk7U0FDYixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsT0FBTyxFQUFFO0lBRVQsQ0FBQztJQUVELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFFRCxNQUFNLEVBQUU7SUFFUixDQUFDO0lBRUQsUUFBUSxFQUFFO1FBQ1IsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLFlBQVksRUFBRSxJQUFJO1NBQ25CLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxpQkFBaUIsRUFBRTtJQUVuQixDQUFDO0lBS0QsYUFBYSxFQUFFO0lBRWYsQ0FBQztDQUVGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIlxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBoZWFkTGlzdDogW3tcbiAgICAgICdzcmMnOiAnLi4vLi4vcHVibGljL2ltYWdlL21hbGUucG5nJyxcbiAgICAgICdsZWZ0JzogJzUwJScsXG4gICAgICAnd2lkdGgnOiAnODAnLFxuICAgIH1dLFxuICAgIGhlYWRJbnRlcnZhbDogbnVsbCxcbiAgICBtYXRjaGluZzogdHJ1ZSxcbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cbiAgICovXG4gIG9uTG9hZDogZnVuY3Rpb24gKG9wdGlvbnM6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKG9wdGlvbnMpO1xuICAgIC8vIHRoaXMucmFuZGVySGVhZCgpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgIG1hdGNoaW5nOiBmYWxzZSxcbiAgICAgIH0pO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJy4uL21hdGNoUmVzdWx0L21hdGNoUmVzdWx0JyxcbiAgICAgICAgfSk7XG4gICAgICB9LCAxMDAwKTtcbiAgICB9LCAzNTAwKTtcbiAgfSxcblxuICByYW5kZXJIZWFkKCkge1xuICAgIGxldCBoZWFkSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBsZXQgaGVhZExpc3QgPSB0aGlzLmRhdGEuaGVhZExpc3Q7XG4gICAgICBpZiAoaGVhZExpc3QubGVuZ3RoID4gMTApIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChoZWFkSW50ZXJ2YWwpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCB3aW5kb3dXaWR0aCA9IHd4LmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93V2lkdGhcbiAgICAgIGxldCBsZWZ0ID0gODAgKyBNYXRoLnJhbmRvbSgpICogKHdpbmRvd1dpZHRoIC0gMTYwKTtcbiAgICAgIGxldCB3aWR0aCA9IDYwICsgTWF0aC5yYW5kb20oKSAqIDQwO1xuICAgICAgaGVhZExpc3QucHVzaCh7XG4gICAgICAgICdzcmMnOiAnLi4vLi4vcHVibGljL2ltYWdlL3h6cGQucG5nJyxcbiAgICAgICAgJ2xlZnQnOiBsZWZ0LnRvU3RyaW5nKCksXG4gICAgICAgICd3aWR0aCc6IHdpZHRoLnRvU3RyaW5nKCksXG4gICAgICB9KTtcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICBoZWFkTGlzdCxcbiAgICAgIH0pO1xuICAgIH0sIDIwMDApO1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgaGVhZEludGVydmFsLFxuICAgIH0pO1xuICB9LFxuXG4gIG9uUmVhZHk6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIG9uU2hvdzogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgb25IaWRlOiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICBvblVubG9hZDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgaGVhZEludGVydmFsOiBudWxsLFxuICAgIH0pO1xuICB9LFxuXG4gIG9uUHVsbERvd25SZWZyZXNoOiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog6aG16Z2i5LiK5ouJ6Kem5bqV5LqL5Lu255qE5aSE55CG5Ye95pWwXG4gICAqL1xuICBvblJlYWNoQm90dG9tOiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxufSkiXX0=