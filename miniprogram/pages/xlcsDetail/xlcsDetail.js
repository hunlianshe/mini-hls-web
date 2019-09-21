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
    select(e) {
        const { option, index } = e.currentTarget.dataset;
        const { questionIndex, questionList, answerList, } = this.data;
        console.log(questionList[questionIndex]);
        console.log(questionList[questionIndex].answerOptions[index]);
        questionList[questionIndex].answerOptions[index].isSelect = true;
        answerList.push({
            question: questionList[questionIndex].question,
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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGxjc0RldGFpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInhsY3NEZXRhaWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBaUQ7QUFFakQsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFLEVBQUU7UUFDWixhQUFhLEVBQUUsQ0FBQztRQUNoQixZQUFZLEVBQUUsRUFBVztRQUN6QixVQUFVLEVBQUUsRUFBVztRQUN2QixPQUFPLEVBQUUsRUFBUztRQUNsQixLQUFLLEVBQUUsRUFBRTtLQUNWO0lBRUQsTUFBTSxFQUFFLFVBQVUsT0FBWTtRQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBR0QsVUFBVSxDQUFDLEVBQVU7UUFDbkIsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFXLEVBQUUsRUFBRTtZQUN0QyxJQUFJLENBQUMsT0FBUSxDQUFDO2dCQUNaLE9BQU8sRUFBRSxNQUFNLENBQUMsSUFBSTtnQkFDcEIsWUFBWSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTzthQUNsQyxDQUFDLENBQUM7WUFDSCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ2pFLE1BQU0sS0FBSyxHQUFHLDJCQUEyQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksTUFBTSxDQUFDO1lBQ2hFLElBQUksQ0FBQyxPQUFRLENBQUM7Z0JBQ1osUUFBUTtnQkFDUixLQUFLO2FBQ04sQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsTUFBTSxDQUFDLENBQU07UUFDWCxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQ2xELE1BQU0sRUFDSixhQUFhLEVBQ2IsWUFBWSxFQUNaLFVBQVUsR0FDWCxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzlELFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNqRSxVQUFVLENBQUMsSUFBSSxDQUFDO1lBQ2QsUUFBUSxFQUFFLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxRQUFRO1lBQzlDLE1BQU0sRUFBRSxNQUFNO1NBQ2YsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxLQUFLLFlBQVksQ0FBQyxNQUFNLEVBQUU7WUFDL0MsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1lBQ2pDLE1BQU0sTUFBTSxHQUFHO2dCQUNiLEVBQUU7Z0JBQ0YsV0FBVyxFQUFFLFVBQVU7YUFDeEIsQ0FBQTtZQUNELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLEdBQUcsRUFBRTtnQkFDbEMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQVcsRUFBRSxFQUFFO29CQUN6RCxJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUU7d0JBQ2YsRUFBRSxDQUFDLFVBQVUsQ0FBQzs0QkFDWixHQUFHLEVBQUUsY0FBYzs0QkFDbkIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJO3lCQUNsQixDQUFDLENBQUM7cUJBQ0o7b0JBQ0QsRUFBRSxDQUFDLFVBQVUsQ0FBQzt3QkFDWixHQUFHLEVBQUUsMEJBQTBCO3FCQUNoQyxDQUFDLENBQUE7Z0JBQ0osQ0FBQyxDQUFDLENBQUE7YUFDSDtpQkFBTTtnQkFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNyQixFQUFFLENBQUMsVUFBVSxDQUFDO29CQUNaLEdBQUcsRUFBRSwwQkFBMEI7aUJBQ2hDLENBQUMsQ0FBQTthQUNIO1NBQ0Y7YUFBTTtZQUNMLElBQUksQ0FBQyxPQUFRLENBQUM7Z0JBQ1osYUFBYSxFQUFFLGFBQWEsR0FBRyxDQUFDO2dCQUNoQyxZQUFZO2dCQUNaLFFBQVEsRUFBRSxZQUFZLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztnQkFDekMsVUFBVTthQUNYLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIEFwaSBmcm9tICcuLi8uLi9zZXJ2aWNlL2FwaS5zZXJ2aWNlJztcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBxdWVzdGlvbjoge30sXG4gICAgcXVlc3Rpb25JbmRleDogMCxcbiAgICBxdWVzdGlvbkxpc3Q6IFtdIGFzIGFueVtdLFxuICAgIGFuc3dlckxpc3Q6IFtdIGFzIGFueVtdLFxuICAgIHBzeVRlc3Q6IFtdIGFzIGFueSxcbiAgICBiZ0ltZzogJycsXG4gIH0sXG5cbiAgb25Mb2FkOiBmdW5jdGlvbiAob3B0aW9uczogYW55KSB7XG4gICAgdGhpcy5nZXRQc3lUZXN0KG9wdGlvbnMuaWQpO1xuICB9LFxuXG4gIC8qKiDojrflj5blv4PnkIbmtYvor5Xpopjnm64gKi9cbiAgZ2V0UHN5VGVzdChpZDogc3RyaW5nKSB7XG4gICAgQXBpLmdldFBzeVRlc3QoaWQpLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgcHN5VGVzdDogcmVzdWx0LmRhdGEsXG4gICAgICAgIHF1ZXN0aW9uTGlzdDogcmVzdWx0LmRhdGEuY29udGVudCxcbiAgICAgIH0pO1xuICAgICAgY29uc3QgcXVlc3Rpb24gPSB0aGlzLmRhdGEucXVlc3Rpb25MaXN0W3RoaXMuZGF0YS5xdWVzdGlvbkluZGV4XTtcbiAgICAgIGNvbnN0IGJnSW1nID0gYC4uLy4uL3B1YmxpYy9pbWFnZS94bGNzXyR7cmVzdWx0LmRhdGEudHlwZX0ucG5nYDtcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICBxdWVzdGlvbixcbiAgICAgICAgYmdJbWcsXG4gICAgICB9KTtcbiAgICB9KVxuICB9LFxuXG4gIHNlbGVjdChlOiBhbnkpIHtcbiAgICBjb25zdCB7IG9wdGlvbiwgaW5kZXggfSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0O1xuICAgIGNvbnN0IHtcbiAgICAgIHF1ZXN0aW9uSW5kZXgsXG4gICAgICBxdWVzdGlvbkxpc3QsXG4gICAgICBhbnN3ZXJMaXN0LFxuICAgIH0gPSB0aGlzLmRhdGE7XG4gICAgY29uc29sZS5sb2cocXVlc3Rpb25MaXN0W3F1ZXN0aW9uSW5kZXhdKTtcbiAgICBjb25zb2xlLmxvZyhxdWVzdGlvbkxpc3RbcXVlc3Rpb25JbmRleF0uYW5zd2VyT3B0aW9uc1tpbmRleF0pO1xuICAgIHF1ZXN0aW9uTGlzdFtxdWVzdGlvbkluZGV4XS5hbnN3ZXJPcHRpb25zW2luZGV4XS5pc1NlbGVjdCA9IHRydWU7XG4gICAgYW5zd2VyTGlzdC5wdXNoKHtcbiAgICAgIHF1ZXN0aW9uOiBxdWVzdGlvbkxpc3RbcXVlc3Rpb25JbmRleF0ucXVlc3Rpb24sIC8vIOmimOebrlxuICAgICAgYW5zd2VyOiBvcHRpb24sICAvLyDnrZTmoYhcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhhbnN3ZXJMaXN0KTtcbiAgICBpZiAoKHF1ZXN0aW9uSW5kZXggKyAxKSA9PT0gcXVlc3Rpb25MaXN0Lmxlbmd0aCkgeyAvLyBsYXN0IHF1ZXN0aW9uXG4gICAgICBjb25zdCBpZCA9IHRoaXMuZGF0YS5wc3lUZXN0Ll9pZDsgIC8vIOmimOebrmlkXG4gICAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICAgIGlkLFxuICAgICAgICBpbnB1dEFuc3dlcjogYW5zd2VyTGlzdCxcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmRhdGEucHN5VGVzdC50eXBlID09PSAnMicpIHtcbiAgICAgICAgQXBpLmdldEdlbmVyYXRlQ2F0T3JEb2dSZXN1bHQocGFyYW1zKS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChyZXN1bHQuZGF0YSkge1xuICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XG4gICAgICAgICAgICAgIGtleTogJ2NhdERvZ1Jlc3VsdCcsXG4gICAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgdXJsOiAnLi4veGxjc1Jlc3VsdC94bGNzUmVzdWx0JyxcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ+mdnueMq+eLl+a1i+ivlScpO1xuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICcuLi94bGNzUmVzdWx0L3hsY3NSZXN1bHQnLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgcXVlc3Rpb25JbmRleDogcXVlc3Rpb25JbmRleCArIDEsXG4gICAgICAgIHF1ZXN0aW9uTGlzdCxcbiAgICAgICAgcXVlc3Rpb246IHF1ZXN0aW9uTGlzdFtxdWVzdGlvbkluZGV4ICsgMV0sXG4gICAgICAgIGFuc3dlckxpc3QsXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG59KSJdfQ==