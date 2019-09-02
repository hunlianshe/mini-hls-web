"use strict";
Page({
    data: {
        question: {},
        questionIndex: 0,
        questionList: [
            {
                title: '我的社交引力场',
                desc: '和朋友一起去唱歌，你喜欢坐在哪个位置？',
                options: [
                    {
                        option: 'A',
                        text: '靠门的位置',
                        isSelect: false,
                    },
                    {
                        option: 'B',
                        text: '最中间',
                        isSelect: true,
                    },
                    {
                        option: 'C',
                        text: '靠门的位置',
                        isSelect: false,
                    }
                ]
            },
            {
                title: '我的社交引力场',
                desc: '以下能让人有安全感的是？',
                options: [
                    {
                        option: 'A',
                        text: '一只小狗',
                        isSelect: false,
                    },
                    {
                        option: 'B',
                        text: '恋人的拥抱',
                        isSelect: false,
                    },
                    {
                        option: 'C',
                        text: '手机',
                        isSelect: false,
                    }
                ]
            }
        ],
        answerList: [],
    },
    onLoad: function () {
        let question = this.data.questionList[this.data.questionIndex];
        this.setData({
            question,
        });
    },
    select(e) {
        const { option, index } = e.currentTarget.dataset;
        const { questionIndex, questionList, answerList, } = this.data;
        console.log(questionList[questionIndex]);
        console.log(questionList[questionIndex].options[index]);
        questionList[questionIndex].options[index].isSelect = true;
        answerList.push(option);
        console.log(answerList);
        if ((questionIndex + 1) === questionList.length) {
            wx.navigateTo({
                url: '../xlcsResult/xlcsResult',
            });
        }
        else {
            this.setData({
                questionIndex: questionIndex + 1,
                questionList,
                question: questionList[questionIndex + 1],
                answerList,
            });
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGxjc0RldGFpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInhsY3NEZXRhaWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLElBQUksQ0FBQztJQUtILElBQUksRUFBRTtRQUNKLFFBQVEsRUFBRSxFQUFFO1FBQ1osYUFBYSxFQUFFLENBQUM7UUFDaEIsWUFBWSxFQUFFO1lBQ1o7Z0JBQ0UsS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLElBQUksRUFBRSxxQkFBcUI7Z0JBQzNCLE9BQU8sRUFBRTtvQkFDUDt3QkFDRSxNQUFNLEVBQUUsR0FBRzt3QkFDWCxJQUFJLEVBQUUsT0FBTzt3QkFDYixRQUFRLEVBQUUsS0FBSztxQkFDaEI7b0JBQ0Q7d0JBQ0UsTUFBTSxFQUFFLEdBQUc7d0JBQ1gsSUFBSSxFQUFFLEtBQUs7d0JBQ1gsUUFBUSxFQUFFLElBQUk7cUJBQ2Y7b0JBQ0Q7d0JBQ0UsTUFBTSxFQUFFLEdBQUc7d0JBQ1gsSUFBSSxFQUFFLE9BQU87d0JBQ2IsUUFBUSxFQUFFLEtBQUs7cUJBQ2hCO2lCQUNGO2FBQ0Y7WUFDRDtnQkFDRSxLQUFLLEVBQUUsU0FBUztnQkFDaEIsSUFBSSxFQUFFLGNBQWM7Z0JBQ3BCLE9BQU8sRUFBRTtvQkFDUDt3QkFDRSxNQUFNLEVBQUUsR0FBRzt3QkFDWCxJQUFJLEVBQUUsTUFBTTt3QkFDWixRQUFRLEVBQUUsS0FBSztxQkFDaEI7b0JBQ0Q7d0JBQ0UsTUFBTSxFQUFFLEdBQUc7d0JBQ1gsSUFBSSxFQUFFLE9BQU87d0JBQ2IsUUFBUSxFQUFFLEtBQUs7cUJBQ2hCO29CQUNEO3dCQUNFLE1BQU0sRUFBRSxHQUFHO3dCQUNYLElBQUksRUFBRSxJQUFJO3dCQUNWLFFBQVEsRUFBRSxLQUFLO3FCQUNoQjtpQkFDRjthQUNGO1NBQ0Y7UUFDRCxVQUFVLEVBQUUsRUFBYztLQUMzQjtJQUtELE1BQU0sRUFBRTtRQUNOLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLFFBQVE7U0FDVCxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsTUFBTSxDQUFDLENBQU07UUFDWCxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQ2xELE1BQU0sRUFDSixhQUFhLEVBQ2IsWUFBWSxFQUNaLFVBQVUsR0FDWCxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3hELFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUMzRCxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsS0FBSyxZQUFZLENBQUMsTUFBTSxFQUFFO1lBQy9DLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQ1osR0FBRyxFQUFFLDBCQUEwQjthQUNoQyxDQUFDLENBQUE7U0FDSDthQUFNO1lBQ0wsSUFBSSxDQUFDLE9BQVEsQ0FBQztnQkFDWixhQUFhLEVBQUUsYUFBYSxHQUFHLENBQUM7Z0JBQ2hDLFlBQVk7Z0JBQ1osUUFBUSxFQUFFLFlBQVksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO2dCQUN6QyxVQUFVO2FBQ1gsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBS0QsT0FBTyxFQUFFO0lBRVQsQ0FBQztJQUtELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFLRCxNQUFNLEVBQUU7SUFFUixDQUFDO0lBS0QsUUFBUSxFQUFFO0lBRVYsQ0FBQztJQUtELGlCQUFpQixFQUFFO0lBRW5CLENBQUM7SUFLRCxhQUFhLEVBQUU7SUFFZixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMveGxjc0RldGFpbC94bGNzRGV0YWlsLmpzXG5QYWdlKHtcblxuICAvKipcbiAgICog6aG16Z2i55qE5Yid5aeL5pWw5o2uXG4gICAqL1xuICBkYXRhOiB7XG4gICAgcXVlc3Rpb246IHt9LFxuICAgIHF1ZXN0aW9uSW5kZXg6IDAsXG4gICAgcXVlc3Rpb25MaXN0OiBbXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAn5oiR55qE56S+5Lqk5byV5Yqb5Zy6JyxcbiAgICAgICAgZGVzYzogJ+WSjOaci+WPi+S4gOi1t+WOu+WUseatjO+8jOS9oOWWnOasouWdkOWcqOWTquS4quS9jee9ru+8nycsXG4gICAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBvcHRpb246ICdBJyxcbiAgICAgICAgICAgIHRleHQ6ICfpnaDpl6jnmoTkvY3nva4nLFxuICAgICAgICAgICAgaXNTZWxlY3Q6IGZhbHNlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgb3B0aW9uOiAnQicsXG4gICAgICAgICAgICB0ZXh0OiAn5pyA5Lit6Ze0JyxcbiAgICAgICAgICAgIGlzU2VsZWN0OiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgb3B0aW9uOiAnQycsXG4gICAgICAgICAgICB0ZXh0OiAn6Z2g6Zeo55qE5L2N572uJyxcbiAgICAgICAgICAgIGlzU2VsZWN0OiBmYWxzZSxcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAn5oiR55qE56S+5Lqk5byV5Yqb5Zy6JyxcbiAgICAgICAgZGVzYzogJ+S7peS4i+iDveiuqeS6uuacieWuieWFqOaEn+eahOaYr++8nycsXG4gICAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBvcHRpb246ICdBJyxcbiAgICAgICAgICAgIHRleHQ6ICfkuIDlj6rlsI/ni5cnLFxuICAgICAgICAgICAgaXNTZWxlY3Q6IGZhbHNlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgb3B0aW9uOiAnQicsXG4gICAgICAgICAgICB0ZXh0OiAn5oGL5Lq655qE5oul5oqxJyxcbiAgICAgICAgICAgIGlzU2VsZWN0OiBmYWxzZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG9wdGlvbjogJ0MnLFxuICAgICAgICAgICAgdGV4dDogJ+aJi+acuicsXG4gICAgICAgICAgICBpc1NlbGVjdDogZmFsc2UsXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXSxcbiAgICBhbnN3ZXJMaXN0OiBbXSBhcyBzdHJpbmdbXSxcbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cbiAgICovXG4gIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgIGxldCBxdWVzdGlvbiA9IHRoaXMuZGF0YS5xdWVzdGlvbkxpc3RbdGhpcy5kYXRhLnF1ZXN0aW9uSW5kZXhdO1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgcXVlc3Rpb24sXG4gICAgfSlcbiAgfSxcblxuICBzZWxlY3QoZTogYW55KSB7XG4gICAgY29uc3QgeyBvcHRpb24sIGluZGV4IH0gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldDtcbiAgICBjb25zdCB7XG4gICAgICBxdWVzdGlvbkluZGV4LFxuICAgICAgcXVlc3Rpb25MaXN0LFxuICAgICAgYW5zd2VyTGlzdCxcbiAgICB9ID0gdGhpcy5kYXRhO1xuICAgIGNvbnNvbGUubG9nKHF1ZXN0aW9uTGlzdFtxdWVzdGlvbkluZGV4XSk7XG4gICAgY29uc29sZS5sb2cocXVlc3Rpb25MaXN0W3F1ZXN0aW9uSW5kZXhdLm9wdGlvbnNbaW5kZXhdKTtcbiAgICBxdWVzdGlvbkxpc3RbcXVlc3Rpb25JbmRleF0ub3B0aW9uc1tpbmRleF0uaXNTZWxlY3QgPSB0cnVlO1xuICAgIGFuc3dlckxpc3QucHVzaChvcHRpb24pO1xuICAgIGNvbnNvbGUubG9nKGFuc3dlckxpc3QpO1xuICAgIGlmICgocXVlc3Rpb25JbmRleCArIDEpID09PSBxdWVzdGlvbkxpc3QubGVuZ3RoKSB7IC8vIGxhc3QgcXVlc3Rpb25cbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuLi94bGNzUmVzdWx0L3hsY3NSZXN1bHQnLFxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgIHF1ZXN0aW9uSW5kZXg6IHF1ZXN0aW9uSW5kZXggKyAxLFxuICAgICAgICBxdWVzdGlvbkxpc3QsXG4gICAgICAgIHF1ZXN0aW9uOiBxdWVzdGlvbkxpc3RbcXVlc3Rpb25JbmRleCArIDFdLFxuICAgICAgICBhbnN3ZXJMaXN0LFxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxuICAgKi9cbiAgb25SZWFkeTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XG4gICAqL1xuICBvblNob3c6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdoumakOiXj1xuICAgKi9cbiAgb25IaWRlOiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cbiAgICovXG4gIG9uVW5sb2FkOiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog6aG16Z2i55u45YWz5LqL5Lu25aSE55CG5Ye95pWwLS3nm5HlkKznlKjmiLfkuIvmi4nliqjkvZxcbiAgICovXG4gIG9uUHVsbERvd25SZWZyZXNoOiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog6aG16Z2i5LiK5ouJ6Kem5bqV5LqL5Lu255qE5aSE55CG5Ye95pWwXG4gICAqL1xuICBvblJlYWNoQm90dG9tOiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcbn0pIl19