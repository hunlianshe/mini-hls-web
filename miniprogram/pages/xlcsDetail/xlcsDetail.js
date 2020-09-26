"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Api = require("../../service/api.service");
Page({
    data: {
        question: {},
        questionIndex: 0,
        questionList: [],
        answerList: [],
        psyTest: {},
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
            const bgImg = `../../public/image/xlcs_${result.data.type}.jpg`;
            this.setData({
                question,
                bgImg,
            });
        });
    },
    select(e) {
        const { option, index } = e.currentTarget.dataset;
        const { questionIndex, questionList, answerList, } = this.data;
        questionList[questionIndex].answerOptions[index].isSelect = true;
        answerList.push({
            question: questionList[questionIndex].question,
            answer: option,
        });
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
                            success: () => {
                                wx.navigateTo({
                                    url: `../xlcsResult02/xlcsResult02?name=${this.data.psyTest.name}`,
                                });
                            }
                        });
                    }
                });
            }
            else {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGxjc0RldGFpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInhsY3NEZXRhaWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBaUQ7QUFFakQsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFLEVBQUU7UUFDWixhQUFhLEVBQUUsQ0FBQztRQUNoQixZQUFZLEVBQUUsRUFBVztRQUN6QixVQUFVLEVBQUUsRUFBVztRQUN2QixPQUFPLEVBQUUsRUFBUztRQUNsQixLQUFLLEVBQUUsRUFBRTtLQUNWO0lBRUQsTUFBTSxFQUFFLFVBQVUsT0FBWTtRQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBR0QsVUFBVSxDQUFDLEVBQVU7UUFDbkIsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFXLEVBQUUsRUFBRTtZQUN0QyxJQUFJLENBQUMsT0FBUSxDQUFDO2dCQUNaLE9BQU8sRUFBRSxNQUFNLENBQUMsSUFBSTtnQkFDcEIsWUFBWSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTzthQUNsQyxDQUFDLENBQUM7WUFDSCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ2pFLE1BQU0sS0FBSyxHQUFHLDJCQUEyQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksTUFBTSxDQUFDO1lBQ2hFLElBQUksQ0FBQyxPQUFRLENBQUM7Z0JBQ1osUUFBUTtnQkFDUixLQUFLO2FBQ04sQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsTUFBTSxDQUFDLENBQU07UUFDWCxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQ2xELE1BQU0sRUFDSixhQUFhLEVBQ2IsWUFBWSxFQUNaLFVBQVUsR0FDWCxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDZCxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDakUsVUFBVSxDQUFDLElBQUksQ0FBQztZQUNkLFFBQVEsRUFBRSxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUMsUUFBUTtZQUM5QyxNQUFNLEVBQUUsTUFBTTtTQUNmLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLEtBQUssWUFBWSxDQUFDLE1BQU0sRUFBRTtZQUMvQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7WUFDakMsTUFBTSxNQUFNLEdBQUc7Z0JBQ2IsRUFBRTtnQkFDRixXQUFXLEVBQUUsVUFBVTthQUN4QixDQUFBO1lBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssR0FBRyxFQUFFO2dCQUNsQyxHQUFHLENBQUMseUJBQXlCLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBVyxFQUFFLEVBQUU7b0JBQ3pELElBQUksTUFBTSxDQUFDLElBQUksRUFBRTt3QkFDZixFQUFFLENBQUMsVUFBVSxDQUFDOzRCQUNaLEdBQUcsRUFBRSxjQUFjOzRCQUNuQixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUk7NEJBQ2pCLE9BQU8sRUFBRSxHQUFHLEVBQUU7Z0NBQ1osRUFBRSxDQUFDLFVBQVUsQ0FBQztvQ0FDWixHQUFHLEVBQUUscUNBQXFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTtpQ0FDbkUsQ0FBQyxDQUFDOzRCQUNMLENBQUM7eUJBQ0YsQ0FBQyxDQUFDO3FCQUNKO2dCQUNILENBQUMsQ0FBQyxDQUFBO2FBQ0g7aUJBQU07Z0JBQ0wsRUFBRSxDQUFDLFVBQVUsQ0FBQztvQkFDWixHQUFHLEVBQUUsMEJBQTBCO2lCQUNoQyxDQUFDLENBQUE7YUFDSDtTQUNGO2FBQU07WUFDTCxJQUFJLENBQUMsT0FBUSxDQUFDO2dCQUNaLGFBQWEsRUFBRSxhQUFhLEdBQUcsQ0FBQztnQkFDaEMsWUFBWTtnQkFDWixRQUFRLEVBQUUsWUFBWSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7Z0JBQ3pDLFVBQVU7YUFDWCxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBBcGkgZnJvbSAnLi4vLi4vc2VydmljZS9hcGkuc2VydmljZSc7XG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgcXVlc3Rpb246IHt9LFxuICAgIHF1ZXN0aW9uSW5kZXg6IDAsXG4gICAgcXVlc3Rpb25MaXN0OiBbXSBhcyBhbnlbXSxcbiAgICBhbnN3ZXJMaXN0OiBbXSBhcyBhbnlbXSxcbiAgICBwc3lUZXN0OiB7fSBhcyBhbnksXG4gICAgYmdJbWc6ICcnLFxuICB9LFxuXG4gIG9uTG9hZDogZnVuY3Rpb24gKG9wdGlvbnM6IGFueSkge1xuICAgIHRoaXMuZ2V0UHN5VGVzdChvcHRpb25zLmlkKTtcbiAgfSxcblxuICAvKiog6I635Y+W5b+D55CG5rWL6K+V6aKY55uuICovXG4gIGdldFBzeVRlc3QoaWQ6IHN0cmluZykge1xuICAgIEFwaS5nZXRQc3lUZXN0KGlkKS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgIHBzeVRlc3Q6IHJlc3VsdC5kYXRhLFxuICAgICAgICBxdWVzdGlvbkxpc3Q6IHJlc3VsdC5kYXRhLmNvbnRlbnQsXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHF1ZXN0aW9uID0gdGhpcy5kYXRhLnF1ZXN0aW9uTGlzdFt0aGlzLmRhdGEucXVlc3Rpb25JbmRleF07XG4gICAgICBjb25zdCBiZ0ltZyA9IGAuLi8uLi9wdWJsaWMvaW1hZ2UveGxjc18ke3Jlc3VsdC5kYXRhLnR5cGV9LmpwZ2A7XG4gICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgcXVlc3Rpb24sXG4gICAgICAgIGJnSW1nLFxuICAgICAgfSk7XG4gICAgfSlcbiAgfSxcblxuICBzZWxlY3QoZTogYW55KSB7XG4gICAgY29uc3QgeyBvcHRpb24sIGluZGV4IH0gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldDtcbiAgICBjb25zdCB7XG4gICAgICBxdWVzdGlvbkluZGV4LFxuICAgICAgcXVlc3Rpb25MaXN0LFxuICAgICAgYW5zd2VyTGlzdCxcbiAgICB9ID0gdGhpcy5kYXRhO1xuICAgIHF1ZXN0aW9uTGlzdFtxdWVzdGlvbkluZGV4XS5hbnN3ZXJPcHRpb25zW2luZGV4XS5pc1NlbGVjdCA9IHRydWU7XG4gICAgYW5zd2VyTGlzdC5wdXNoKHtcbiAgICAgIHF1ZXN0aW9uOiBxdWVzdGlvbkxpc3RbcXVlc3Rpb25JbmRleF0ucXVlc3Rpb24sIC8vIOmimOebrlxuICAgICAgYW5zd2VyOiBvcHRpb24sICAvLyDnrZTmoYhcbiAgICB9KTtcbiAgICBpZiAoKHF1ZXN0aW9uSW5kZXggKyAxKSA9PT0gcXVlc3Rpb25MaXN0Lmxlbmd0aCkgeyAvLyBsYXN0IHF1ZXN0aW9uXG4gICAgICBjb25zdCBpZCA9IHRoaXMuZGF0YS5wc3lUZXN0Ll9pZDsgIC8vIOmimOebrmlkXG4gICAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICAgIGlkLFxuICAgICAgICBpbnB1dEFuc3dlcjogYW5zd2VyTGlzdCxcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmRhdGEucHN5VGVzdC50eXBlID09PSAnMicpIHtcbiAgICAgICAgQXBpLmdldEdlbmVyYXRlQ2F0T3JEb2dSZXN1bHQocGFyYW1zKS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChyZXN1bHQuZGF0YSkge1xuICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XG4gICAgICAgICAgICAgIGtleTogJ2NhdERvZ1Jlc3VsdCcsXG4gICAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgICAgICAgICAgICBzdWNjZXNzOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICB1cmw6IGAuLi94bGNzUmVzdWx0MDIveGxjc1Jlc3VsdDAyP25hbWU9JHt0aGlzLmRhdGEucHN5VGVzdC5uYW1lfWAsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJy4uL3hsY3NSZXN1bHQveGxjc1Jlc3VsdCcsXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICBxdWVzdGlvbkluZGV4OiBxdWVzdGlvbkluZGV4ICsgMSxcbiAgICAgICAgcXVlc3Rpb25MaXN0LFxuICAgICAgICBxdWVzdGlvbjogcXVlc3Rpb25MaXN0W3F1ZXN0aW9uSW5kZXggKyAxXSxcbiAgICAgICAgYW5zd2VyTGlzdCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbn0pIl19