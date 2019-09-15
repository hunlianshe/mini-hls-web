"use strict";
Page({
    data: {
        type: '',
        ageNumber: '',
        heightNumber: '',
        salaryNumber: '',
    },
    onLoad: function (options) {
        console.log(options);
    },
    jumpOver() {
        wx.navigateTo({
            url: '../home/home',
        });
    },
    next() {
        console.log('navicate to home');
        wx.navigateTo({
            url: '../home/home',
        });
    },
    getStandard(e) {
        const { type, value, number } = e.currentTarget.dataset;
        let ageNumber, heightNumber, salaryNumber;
        switch (type) {
            case '1':
                ageNumber = number;
                break;
            case '2':
                heightNumber = number;
                break;
            case '3':
                salaryNumber = number;
                break;
            default:
                break;
        }
        this.setData({
            ageNumber,
            heightNumber,
            salaryNumber,
        });
        console.log('type:', type);
        console.log('value:', value);
    },
    onReady: function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXJTdGFuZGFyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlZ2lzdGVyU3RhbmRhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLElBQUksRUFBQyxFQUFFO1FBQ1AsU0FBUyxFQUFFLEVBQUU7UUFDYixZQUFZLEVBQUUsRUFBRTtRQUNoQixZQUFZLEVBQUUsRUFBRTtLQUNqQjtJQUVELE1BQU0sRUFBRSxVQUFVLE9BQVk7UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQsUUFBUTtRQUNOLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsY0FBYztTQUNwQixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsSUFBSTtRQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtRQUMvQixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLGNBQWM7U0FDcEIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELFdBQVcsQ0FBQyxDQUFNO1FBQ2hCLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQ3hELElBQUksU0FBUyxFQUNYLFlBQVksRUFDWixZQUFZLENBQUM7UUFDZixRQUFRLElBQUksRUFBRTtZQUNaLEtBQUssR0FBRztnQkFDTixTQUFTLEdBQUcsTUFBTSxDQUFDO2dCQUNuQixNQUFNO1lBQ1IsS0FBSyxHQUFHO2dCQUNOLFlBQVksR0FBRyxNQUFNLENBQUM7Z0JBQ3RCLE1BQU07WUFDUixLQUFLLEdBQUc7Z0JBQ04sWUFBWSxHQUFHLE1BQU0sQ0FBQztnQkFDdEIsTUFBTTtZQUNSO2dCQUNFLE1BQU07U0FDVDtRQUNELElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixTQUFTO1lBQ1QsWUFBWTtZQUNaLFlBQVk7U0FDYixDQUFDLENBQUE7UUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsT0FBTyxFQUFFO0lBRVQsQ0FBQztJQUVELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFLRCxNQUFNLEVBQUU7SUFFUixDQUFDO0lBS0QsUUFBUSxFQUFFO0lBRVYsQ0FBQztJQUtELGlCQUFpQixFQUFFO0lBRW5CLENBQUM7SUFLRCxhQUFhLEVBQUU7SUFFZixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvcmVnaXN0ZXJTdGFuZGFyZC9yZWdpc3RlclN0YW5kYXJkLmpzXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIHR5cGU6JycsXG4gICAgYWdlTnVtYmVyOiAnJyxcbiAgICBoZWlnaHROdW1iZXI6ICcnLFxuICAgIHNhbGFyeU51bWJlcjogJycsXG4gIH0sXG5cbiAgb25Mb2FkOiBmdW5jdGlvbiAob3B0aW9uczogYW55KSB7XG4gICAgY29uc29sZS5sb2cob3B0aW9ucyk7XG4gIH0sXG5cbiAganVtcE92ZXIoKTogdm9pZCB7XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6ICcuLi9ob21lL2hvbWUnLFxuICAgIH0pXG4gIH0sXG5cbiAgbmV4dCgpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZygnbmF2aWNhdGUgdG8gaG9tZScpXG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6ICcuLi9ob21lL2hvbWUnLFxuICAgIH0pXG4gIH0sXG5cbiAgZ2V0U3RhbmRhcmQoZTogYW55KSB7XG4gICAgY29uc3QgeyB0eXBlLCB2YWx1ZSwgbnVtYmVyIH0gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldDtcbiAgICBsZXQgYWdlTnVtYmVyLFxuICAgICAgaGVpZ2h0TnVtYmVyLFxuICAgICAgc2FsYXJ5TnVtYmVyO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnMSc6XG4gICAgICAgIGFnZU51bWJlciA9IG51bWJlcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICcyJzpcbiAgICAgICAgaGVpZ2h0TnVtYmVyID0gbnVtYmVyO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJzMnOlxuICAgICAgICBzYWxhcnlOdW1iZXIgPSBudW1iZXI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgYWdlTnVtYmVyLFxuICAgICAgaGVpZ2h0TnVtYmVyLFxuICAgICAgc2FsYXJ5TnVtYmVyLFxuICAgIH0pXG4gICAgY29uc29sZS5sb2coJ3R5cGU6JywgdHlwZSk7XG4gICAgY29uc29sZS5sb2coJ3ZhbHVlOicsIHZhbHVlKTtcbiAgfSxcblxuICBvblJlYWR5OiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICBvblNob3c6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdoumakOiXj1xuICAgKi9cbiAgb25IaWRlOiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cbiAgICovXG4gIG9uVW5sb2FkOiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog6aG16Z2i55u45YWz5LqL5Lu25aSE55CG5Ye95pWwLS3nm5HlkKznlKjmiLfkuIvmi4nliqjkvZxcbiAgICovXG4gIG9uUHVsbERvd25SZWZyZXNoOiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog6aG16Z2i5LiK5ouJ6Kem5bqV5LqL5Lu255qE5aSE55CG5Ye95pWwXG4gICAqL1xuICBvblJlYWNoQm90dG9tOiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcbn0pIl19