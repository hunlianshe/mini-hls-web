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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGxjc0RldGFpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInhsY3NEZXRhaWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBaUQ7QUFFakQsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFLEVBQUU7UUFDWixhQUFhLEVBQUUsQ0FBQztRQUNoQixZQUFZLEVBQUUsRUFBVztRQUN6QixVQUFVLEVBQUUsRUFBVztRQUN2QixPQUFPLEVBQUUsRUFBUztRQUNsQixLQUFLLEVBQUUsRUFBRTtLQUNWO0lBRUQsTUFBTSxFQUFFLFVBQVUsT0FBWTtRQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBR0QsVUFBVSxDQUFDLEVBQVU7UUFDbkIsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFXLEVBQUUsRUFBRTtZQUN0QyxJQUFJLENBQUMsT0FBUSxDQUFDO2dCQUNaLE9BQU8sRUFBRSxNQUFNLENBQUMsSUFBSTtnQkFDcEIsWUFBWSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTzthQUNsQyxDQUFDLENBQUM7WUFDSCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ2pFLE1BQU0sS0FBSyxHQUFHLDJCQUEyQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksTUFBTSxDQUFDO1lBQ2hFLElBQUksQ0FBQyxPQUFRLENBQUM7Z0JBQ1osUUFBUTtnQkFDUixLQUFLO2FBQ04sQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsTUFBTSxDQUFDLENBQU07UUFDWCxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQ2xELE1BQU0sRUFDSixhQUFhLEVBQ2IsWUFBWSxFQUNaLFVBQVUsR0FDWCxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzlELFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNqRSxVQUFVLENBQUMsSUFBSSxDQUFDO1lBQ2QsUUFBUSxFQUFFLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxRQUFRO1lBQzlDLE1BQU0sRUFBRSxNQUFNO1NBQ2YsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxLQUFLLFlBQVksQ0FBQyxNQUFNLEVBQUU7WUFDL0MsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1lBQ2pDLE1BQU0sTUFBTSxHQUFHO2dCQUNiLEVBQUU7Z0JBQ0YsV0FBVyxFQUFFLFVBQVU7YUFDeEIsQ0FBQTtZQUNELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLEdBQUcsRUFBRTtnQkFDbEMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQVcsRUFBRSxFQUFFO29CQUN6RCxJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUU7d0JBQ2YsRUFBRSxDQUFDLFVBQVUsQ0FBQzs0QkFDWixHQUFHLEVBQUUsY0FBYzs0QkFDbkIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJOzRCQUNqQixPQUFPLEVBQUUsR0FBRyxFQUFFO2dDQUNaLEVBQUUsQ0FBQyxVQUFVLENBQUM7b0NBQ1osR0FBRyxFQUFFLHFDQUFxQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUU7aUNBQ25FLENBQUMsQ0FBQzs0QkFDTCxDQUFDO3lCQUNGLENBQUMsQ0FBQztxQkFDSjtnQkFDSCxDQUFDLENBQUMsQ0FBQTthQUNIO2lCQUFNO2dCQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3JCLEVBQUUsQ0FBQyxVQUFVLENBQUM7b0JBQ1osR0FBRyxFQUFFLDBCQUEwQjtpQkFDaEMsQ0FBQyxDQUFBO2FBQ0g7U0FDRjthQUFNO1lBQ0wsSUFBSSxDQUFDLE9BQVEsQ0FBQztnQkFDWixhQUFhLEVBQUUsYUFBYSxHQUFHLENBQUM7Z0JBQ2hDLFlBQVk7Z0JBQ1osUUFBUSxFQUFFLFlBQVksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO2dCQUN6QyxVQUFVO2FBQ1gsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgQXBpIGZyb20gJy4uLy4uL3NlcnZpY2UvYXBpLnNlcnZpY2UnO1xuXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIHF1ZXN0aW9uOiB7fSxcbiAgICBxdWVzdGlvbkluZGV4OiAwLFxuICAgIHF1ZXN0aW9uTGlzdDogW10gYXMgYW55W10sXG4gICAgYW5zd2VyTGlzdDogW10gYXMgYW55W10sXG4gICAgcHN5VGVzdDoge30gYXMgYW55LFxuICAgIGJnSW1nOiAnJyxcbiAgfSxcblxuICBvbkxvYWQ6IGZ1bmN0aW9uIChvcHRpb25zOiBhbnkpIHtcbiAgICB0aGlzLmdldFBzeVRlc3Qob3B0aW9ucy5pZCk7XG4gIH0sXG5cbiAgLyoqIOiOt+WPluW/g+eQhua1i+ivlemimOebriAqL1xuICBnZXRQc3lUZXN0KGlkOiBzdHJpbmcpIHtcbiAgICBBcGkuZ2V0UHN5VGVzdChpZCkudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICBwc3lUZXN0OiByZXN1bHQuZGF0YSxcbiAgICAgICAgcXVlc3Rpb25MaXN0OiByZXN1bHQuZGF0YS5jb250ZW50LFxuICAgICAgfSk7XG4gICAgICBjb25zdCBxdWVzdGlvbiA9IHRoaXMuZGF0YS5xdWVzdGlvbkxpc3RbdGhpcy5kYXRhLnF1ZXN0aW9uSW5kZXhdO1xuICAgICAgY29uc3QgYmdJbWcgPSBgLi4vLi4vcHVibGljL2ltYWdlL3hsY3NfJHtyZXN1bHQuZGF0YS50eXBlfS5wbmdgO1xuICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgIHF1ZXN0aW9uLFxuICAgICAgICBiZ0ltZyxcbiAgICAgIH0pO1xuICAgIH0pXG4gIH0sXG5cbiAgc2VsZWN0KGU6IGFueSkge1xuICAgIGNvbnN0IHsgb3B0aW9uLCBpbmRleCB9ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQ7XG4gICAgY29uc3Qge1xuICAgICAgcXVlc3Rpb25JbmRleCxcbiAgICAgIHF1ZXN0aW9uTGlzdCxcbiAgICAgIGFuc3dlckxpc3QsXG4gICAgfSA9IHRoaXMuZGF0YTtcbiAgICBjb25zb2xlLmxvZyhxdWVzdGlvbkxpc3RbcXVlc3Rpb25JbmRleF0pO1xuICAgIGNvbnNvbGUubG9nKHF1ZXN0aW9uTGlzdFtxdWVzdGlvbkluZGV4XS5hbnN3ZXJPcHRpb25zW2luZGV4XSk7XG4gICAgcXVlc3Rpb25MaXN0W3F1ZXN0aW9uSW5kZXhdLmFuc3dlck9wdGlvbnNbaW5kZXhdLmlzU2VsZWN0ID0gdHJ1ZTtcbiAgICBhbnN3ZXJMaXN0LnB1c2goe1xuICAgICAgcXVlc3Rpb246IHF1ZXN0aW9uTGlzdFtxdWVzdGlvbkluZGV4XS5xdWVzdGlvbiwgLy8g6aKY55uuXG4gICAgICBhbnN3ZXI6IG9wdGlvbiwgIC8vIOetlOahiFxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKGFuc3dlckxpc3QpO1xuICAgIGlmICgocXVlc3Rpb25JbmRleCArIDEpID09PSBxdWVzdGlvbkxpc3QubGVuZ3RoKSB7IC8vIGxhc3QgcXVlc3Rpb25cbiAgICAgIGNvbnN0IGlkID0gdGhpcy5kYXRhLnBzeVRlc3QuX2lkOyAgLy8g6aKY55uuaWRcbiAgICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgICAgaWQsXG4gICAgICAgIGlucHV0QW5zd2VyOiBhbnN3ZXJMaXN0LFxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuZGF0YS5wc3lUZXN0LnR5cGUgPT09ICcyJykge1xuICAgICAgICBBcGkuZ2V0R2VuZXJhdGVDYXRPckRvZ1Jlc3VsdChwYXJhbXMpLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKHJlc3VsdC5kYXRhKSB7XG4gICAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcbiAgICAgICAgICAgICAga2V5OiAnY2F0RG9nUmVzdWx0JyxcbiAgICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgIHVybDogYC4uL3hsY3NSZXN1bHQwMi94bGNzUmVzdWx0MDI/bmFtZT0ke3RoaXMuZGF0YS5wc3lUZXN0Lm5hbWV9YCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ+mdnueMq+eLl+a1i+ivlScpO1xuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICcuLi94bGNzUmVzdWx0L3hsY3NSZXN1bHQnLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgcXVlc3Rpb25JbmRleDogcXVlc3Rpb25JbmRleCArIDEsXG4gICAgICAgIHF1ZXN0aW9uTGlzdCxcbiAgICAgICAgcXVlc3Rpb246IHF1ZXN0aW9uTGlzdFtxdWVzdGlvbkluZGV4ICsgMV0sXG4gICAgICAgIGFuc3dlckxpc3QsXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG59KSJdfQ==