"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Api = require("../../service/api.service");
Page({
    data: {
        question: {},
        questionIndex: 0,
        questionList: [],
        answerList: [],
        psyTest: [],
        bgImg: '',
    },
    onLoad: function (options) {
        this.getPsyTest(options.id);
    },
    select(e) {
        const { option, index } = e.currentTarget.dataset;
        const { questionIndex, questionList, answerList, } = this.data;
        console.log(questionList[questionIndex]);
        console.log(questionList[questionIndex].answerOptions[index]);
        questionList[questionIndex].answerOptions[index].isSelect = true;
        answerList.push({
            question: questionList[questionIndex].name,
            answer: option,
        });
        console.log(answerList);
        if ((questionIndex + 1) === questionList.length) {
            const id = this.data.psyTest._id;
            const params = {
                id,
                inputAnswer: answerList,
            };
            if (this.data.psyTest.type === '2') {
                Api.getGenerateCatOrDogResult(params).then((result) => {
                    if (result.data) {
                        wx.setStorage({
                            key: 'catDogResult',
                            data: result.data,
                        });
                    }
                    wx.navigateTo({
                        url: '../xlcsResult/xlcsResult',
                    });
                });
            }
            else {
                console.log('非猫狗测试');
                wx.navigateTo({
                    url: '../xlcsResult/xlcsResult',
                });
            }
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
    getPsyTest(id) {
        Api.getPsyTest(id).then((result) => {
            this.setData({
                psyTest: result.data,
                questionList: result.data.content,
            });
            const question = this.data.questionList[this.data.questionIndex];
            const bgImg = `../../public/image/xlcs_${result.data.type}.png`;
            this.setData({
                question,
                bgImg,
            });
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGxjc0RldGFpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInhsY3NEZXRhaWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBaUQ7QUFFakQsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFLEVBQUU7UUFDWixhQUFhLEVBQUUsQ0FBQztRQUNoQixZQUFZLEVBQUUsRUFBVztRQUN6QixVQUFVLEVBQUUsRUFBVztRQUN2QixPQUFPLEVBQUUsRUFBUztRQUNsQixLQUFLLEVBQUUsRUFBRTtLQUNWO0lBRUQsTUFBTSxFQUFFLFVBQVUsT0FBWTtRQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsTUFBTSxDQUFDLENBQU07UUFDWCxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQ2xELE1BQU0sRUFDSixhQUFhLEVBQ2IsWUFBWSxFQUNaLFVBQVUsR0FDWCxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzlELFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNqRSxVQUFVLENBQUMsSUFBSSxDQUFDO1lBQ2QsUUFBUSxFQUFFLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJO1lBQzFDLE1BQU0sRUFBRSxNQUFNO1NBQ2YsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxLQUFLLFlBQVksQ0FBQyxNQUFNLEVBQUU7WUFDL0MsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1lBQ2pDLE1BQU0sTUFBTSxHQUFHO2dCQUNiLEVBQUU7Z0JBQ0YsV0FBVyxFQUFFLFVBQVU7YUFDeEIsQ0FBQTtZQUNELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLEdBQUcsRUFBRTtnQkFDbEMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQVcsRUFBRSxFQUFFO29CQUN6RCxJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUU7d0JBQ2YsRUFBRSxDQUFDLFVBQVUsQ0FBQzs0QkFDWixHQUFHLEVBQUUsY0FBYzs0QkFDbkIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJO3lCQUNsQixDQUFDLENBQUM7cUJBQ0o7b0JBQ0QsRUFBRSxDQUFDLFVBQVUsQ0FBQzt3QkFDWixHQUFHLEVBQUUsMEJBQTBCO3FCQUNoQyxDQUFDLENBQUE7Z0JBQ0osQ0FBQyxDQUFDLENBQUE7YUFDSDtpQkFBTTtnQkFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNyQixFQUFFLENBQUMsVUFBVSxDQUFDO29CQUNaLEdBQUcsRUFBRSwwQkFBMEI7aUJBQ2hDLENBQUMsQ0FBQTthQUNIO1NBQ0Y7YUFBTTtZQUNMLElBQUksQ0FBQyxPQUFRLENBQUM7Z0JBQ1osYUFBYSxFQUFFLGFBQWEsR0FBRyxDQUFDO2dCQUNoQyxZQUFZO2dCQUNaLFFBQVEsRUFBRSxZQUFZLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztnQkFDekMsVUFBVTthQUNYLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUdELFVBQVUsQ0FBQyxFQUFVO1FBQ25CLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBVyxFQUFFLEVBQUU7WUFDdEMsSUFBSSxDQUFDLE9BQVEsQ0FBQztnQkFDWixPQUFPLEVBQUUsTUFBTSxDQUFDLElBQUk7Z0JBQ3BCLFlBQVksRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU87YUFDbEMsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNqRSxNQUFNLEtBQUssR0FBRywyQkFBMkIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLE1BQU0sQ0FBQztZQUNoRSxJQUFJLENBQUMsT0FBUSxDQUFDO2dCQUNaLFFBQVE7Z0JBQ1IsS0FBSzthQUNOLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIEFwaSBmcm9tICcuLi8uLi9zZXJ2aWNlL2FwaS5zZXJ2aWNlJztcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBxdWVzdGlvbjoge30sXG4gICAgcXVlc3Rpb25JbmRleDogMCxcbiAgICBxdWVzdGlvbkxpc3Q6IFtdIGFzIGFueVtdLFxuICAgIGFuc3dlckxpc3Q6IFtdIGFzIGFueVtdLFxuICAgIHBzeVRlc3Q6IFtdIGFzIGFueSxcbiAgICBiZ0ltZzogJycsXG4gIH0sXG5cbiAgb25Mb2FkOiBmdW5jdGlvbiAob3B0aW9uczogYW55KSB7XG4gICAgdGhpcy5nZXRQc3lUZXN0KG9wdGlvbnMuaWQpO1xuICB9LFxuXG4gIHNlbGVjdChlOiBhbnkpIHtcbiAgICBjb25zdCB7IG9wdGlvbiwgaW5kZXggfSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0O1xuICAgIGNvbnN0IHtcbiAgICAgIHF1ZXN0aW9uSW5kZXgsXG4gICAgICBxdWVzdGlvbkxpc3QsXG4gICAgICBhbnN3ZXJMaXN0LFxuICAgIH0gPSB0aGlzLmRhdGE7XG4gICAgY29uc29sZS5sb2cocXVlc3Rpb25MaXN0W3F1ZXN0aW9uSW5kZXhdKTtcbiAgICBjb25zb2xlLmxvZyhxdWVzdGlvbkxpc3RbcXVlc3Rpb25JbmRleF0uYW5zd2VyT3B0aW9uc1tpbmRleF0pO1xuICAgIHF1ZXN0aW9uTGlzdFtxdWVzdGlvbkluZGV4XS5hbnN3ZXJPcHRpb25zW2luZGV4XS5pc1NlbGVjdCA9IHRydWU7XG4gICAgYW5zd2VyTGlzdC5wdXNoKHtcbiAgICAgIHF1ZXN0aW9uOiBxdWVzdGlvbkxpc3RbcXVlc3Rpb25JbmRleF0ubmFtZSwgLy8g6aKY55uuXG4gICAgICBhbnN3ZXI6IG9wdGlvbiwgIC8vIOetlOahiFxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKGFuc3dlckxpc3QpO1xuICAgIGlmICgocXVlc3Rpb25JbmRleCArIDEpID09PSBxdWVzdGlvbkxpc3QubGVuZ3RoKSB7IC8vIGxhc3QgcXVlc3Rpb25cbiAgICAgIGNvbnN0IGlkID0gdGhpcy5kYXRhLnBzeVRlc3QuX2lkOyAgLy8g6aKY55uuaWRcbiAgICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgICAgaWQsXG4gICAgICAgIGlucHV0QW5zd2VyOiBhbnN3ZXJMaXN0LFxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuZGF0YS5wc3lUZXN0LnR5cGUgPT09ICcyJykge1xuICAgICAgICBBcGkuZ2V0R2VuZXJhdGVDYXRPckRvZ1Jlc3VsdChwYXJhbXMpLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKHJlc3VsdC5kYXRhKSB7XG4gICAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcbiAgICAgICAgICAgICAga2V5OiAnY2F0RG9nUmVzdWx0JyxcbiAgICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICB1cmw6ICcuLi94bGNzUmVzdWx0L3hsY3NSZXN1bHQnLFxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygn6Z2e54yr54uX5rWL6K+VJyk7XG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJy4uL3hsY3NSZXN1bHQveGxjc1Jlc3VsdCcsXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICBxdWVzdGlvbkluZGV4OiBxdWVzdGlvbkluZGV4ICsgMSxcbiAgICAgICAgcXVlc3Rpb25MaXN0LFxuICAgICAgICBxdWVzdGlvbjogcXVlc3Rpb25MaXN0W3F1ZXN0aW9uSW5kZXggKyAxXSxcbiAgICAgICAgYW5zd2VyTGlzdCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvKiog6I635Y+W5b+D55CG5rWL6K+V6aKY55uuICovXG4gIGdldFBzeVRlc3QoaWQ6IHN0cmluZykge1xuICAgIEFwaS5nZXRQc3lUZXN0KGlkKS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgIHBzeVRlc3Q6IHJlc3VsdC5kYXRhLFxuICAgICAgICBxdWVzdGlvbkxpc3Q6IHJlc3VsdC5kYXRhLmNvbnRlbnQsXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHF1ZXN0aW9uID0gdGhpcy5kYXRhLnF1ZXN0aW9uTGlzdFt0aGlzLmRhdGEucXVlc3Rpb25JbmRleF07XG4gICAgICBjb25zdCBiZ0ltZyA9IGAuLi8uLi9wdWJsaWMvaW1hZ2UveGxjc18ke3Jlc3VsdC5kYXRhLnR5cGV9LnBuZ2A7XG4gICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgcXVlc3Rpb24sXG4gICAgICAgIGJnSW1nLFxuICAgICAgfSk7XG4gICAgfSlcbiAgfSxcbn0pIl19