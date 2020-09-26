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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0Y2hpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYXRjaGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFLENBQUM7Z0JBQ1QsS0FBSyxFQUFFLDZCQUE2QjtnQkFDcEMsTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsT0FBTyxFQUFFLElBQUk7YUFDZCxDQUFDO1FBQ0YsWUFBWSxFQUFFLElBQUk7UUFDbEIsUUFBUSxFQUFFLElBQUk7S0FDZjtJQUtELE1BQU0sRUFBRSxVQUFVLE9BQVk7UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVyQixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLE9BQVEsQ0FBQztnQkFDWixRQUFRLEVBQUUsS0FBSzthQUNoQixDQUFDLENBQUM7WUFDSCxVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNkLEVBQUUsQ0FBQyxVQUFVLENBQUM7b0JBQ1osR0FBRyxFQUFFLDRCQUE0QjtpQkFDbEMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ1gsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELFVBQVU7UUFDUixJQUFJLFlBQVksR0FBRyxXQUFXLENBQUMsR0FBRyxFQUFFO1lBQ2xDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ2xDLElBQUksUUFBUSxDQUFDLE1BQU0sR0FBRyxFQUFFLEVBQUU7Z0JBQ3hCLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDNUIsT0FBTzthQUNSO1lBQ0QsTUFBTSxXQUFXLEdBQUcsRUFBRSxDQUFDLGlCQUFpQixFQUFFLENBQUMsV0FBVyxDQUFBO1lBQ3RELElBQUksSUFBSSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDcEQsSUFBSSxLQUFLLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUM7WUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDMUIsUUFBUSxDQUFDLElBQUksQ0FBQztnQkFDWixLQUFLLEVBQUUsNkJBQTZCO2dCQUNwQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDdkIsT0FBTyxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUU7YUFDMUIsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLE9BQVEsQ0FBQztnQkFDWixRQUFRO2FBQ1QsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ1QsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLFlBQVk7U0FDYixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsT0FBTyxFQUFFO0lBRVQsQ0FBQztJQUVELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFFRCxNQUFNLEVBQUU7SUFFUixDQUFDO0lBRUQsUUFBUSxFQUFFO1FBQ1IsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLFlBQVksRUFBRSxJQUFJO1NBQ25CLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxpQkFBaUIsRUFBRTtJQUVuQixDQUFDO0lBS0QsYUFBYSxFQUFFO0lBRWYsQ0FBQztDQUVGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIlxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBoZWFkTGlzdDogW3tcbiAgICAgICdzcmMnOiAnLi4vLi4vcHVibGljL2ltYWdlL21hbGUucG5nJyxcbiAgICAgICdsZWZ0JzogJzUwJScsXG4gICAgICAnd2lkdGgnOiAnODAnLFxuICAgIH1dLFxuICAgIGhlYWRJbnRlcnZhbDogbnVsbCxcbiAgICBtYXRjaGluZzogdHJ1ZSxcbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cbiAgICovXG4gIG9uTG9hZDogZnVuY3Rpb24gKG9wdGlvbnM6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKG9wdGlvbnMpO1xuICAgIC8vIHRoaXMucmFuZGVySGVhZCgpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgIG1hdGNoaW5nOiBmYWxzZSxcbiAgICAgIH0pO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJy4uL21hdGNoUmVzdWx0L21hdGNoUmVzdWx0JyxcbiAgICAgICAgfSk7XG4gICAgICB9LCAxMDAwKTtcbiAgICB9LCAzNTAwKTtcbiAgfSxcblxuICByYW5kZXJIZWFkKCkge1xuICAgIGxldCBoZWFkSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBsZXQgaGVhZExpc3QgPSB0aGlzLmRhdGEuaGVhZExpc3Q7XG4gICAgICBpZiAoaGVhZExpc3QubGVuZ3RoID4gMTApIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChoZWFkSW50ZXJ2YWwpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCB3aW5kb3dXaWR0aCA9IHd4LmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93V2lkdGhcbiAgICAgIGxldCBsZWZ0ID0gODAgKyBNYXRoLnJhbmRvbSgpICogKHdpbmRvd1dpZHRoIC0gMTYwKTtcbiAgICAgIGxldCB3aWR0aCA9IDYwICsgTWF0aC5yYW5kb20oKSAqIDQwO1xuICAgICAgY29uc29sZS5sb2coJ2xlZnQnLCBsZWZ0KTtcbiAgICAgIGhlYWRMaXN0LnB1c2goe1xuICAgICAgICAnc3JjJzogJy4uLy4uL3B1YmxpYy9pbWFnZS94enBkLnBuZycsXG4gICAgICAgICdsZWZ0JzogbGVmdC50b1N0cmluZygpLFxuICAgICAgICAnd2lkdGgnOiB3aWR0aC50b1N0cmluZygpLFxuICAgICAgfSk7XG4gICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgaGVhZExpc3QsXG4gICAgICB9KTtcbiAgICB9LCAyMDAwKTtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIGhlYWRJbnRlcnZhbCxcbiAgICB9KTtcbiAgfSxcblxuICBvblJlYWR5OiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICBvblNob3c6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIG9uSGlkZTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgb25VbmxvYWQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIGhlYWRJbnRlcnZhbDogbnVsbCxcbiAgICB9KTtcbiAgfSxcblxuICBvblB1bGxEb3duUmVmcmVzaDogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxuICAgKi9cbiAgb25SZWFjaEJvdHRvbTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbn0pIl19