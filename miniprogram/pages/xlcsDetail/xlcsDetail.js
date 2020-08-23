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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGxjc0RldGFpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInhsY3NEZXRhaWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBaUQ7QUFFakQsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFLEVBQUU7UUFDWixhQUFhLEVBQUUsQ0FBQztRQUNoQixZQUFZLEVBQUUsRUFBVztRQUN6QixVQUFVLEVBQUUsRUFBVztRQUN2QixPQUFPLEVBQUUsRUFBUztRQUNsQixLQUFLLEVBQUUsRUFBRTtLQUNWO0lBRUQsTUFBTSxFQUFFLFVBQVUsT0FBWTtRQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBR0QsVUFBVSxDQUFDLEVBQVU7UUFDbkIsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFXLEVBQUUsRUFBRTtZQUN0QyxJQUFJLENBQUMsT0FBUSxDQUFDO2dCQUNaLE9BQU8sRUFBRSxNQUFNLENBQUMsSUFBSTtnQkFDcEIsWUFBWSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTzthQUNsQyxDQUFDLENBQUM7WUFDSCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ2pFLE1BQU0sS0FBSyxHQUFHLDJCQUEyQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksTUFBTSxDQUFDO1lBQ2hFLElBQUksQ0FBQyxPQUFRLENBQUM7Z0JBQ1osUUFBUTtnQkFDUixLQUFLO2FBQ04sQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsTUFBTSxDQUFDLENBQU07UUFDWCxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQ2xELE1BQU0sRUFDSixhQUFhLEVBQ2IsWUFBWSxFQUNaLFVBQVUsR0FDWCxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzlELFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNqRSxVQUFVLENBQUMsSUFBSSxDQUFDO1lBQ2QsUUFBUSxFQUFFLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxRQUFRO1lBQzlDLE1BQU0sRUFBRSxNQUFNO1NBQ2YsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxLQUFLLFlBQVksQ0FBQyxNQUFNLEVBQUU7WUFDL0MsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1lBQ2pDLE1BQU0sTUFBTSxHQUFHO2dCQUNiLEVBQUU7Z0JBQ0YsV0FBVyxFQUFFLFVBQVU7YUFDeEIsQ0FBQTtZQUNELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLEdBQUcsRUFBRTtnQkFDbEMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQVcsRUFBRSxFQUFFO29CQUN6RCxJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUU7d0JBQ2YsRUFBRSxDQUFDLFVBQVUsQ0FBQzs0QkFDWixHQUFHLEVBQUUsY0FBYzs0QkFDbkIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJOzRCQUNqQixPQUFPLEVBQUUsR0FBRyxFQUFFO2dDQUNaLEVBQUUsQ0FBQyxVQUFVLENBQUM7b0NBQ1osR0FBRyxFQUFFLHFDQUFxQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUU7aUNBQ25FLENBQUMsQ0FBQzs0QkFDTCxDQUFDO3lCQUNGLENBQUMsQ0FBQztxQkFDSjtnQkFDSCxDQUFDLENBQUMsQ0FBQTthQUNIO2lCQUFNO2dCQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3JCLEVBQUUsQ0FBQyxVQUFVLENBQUM7b0JBQ1osR0FBRyxFQUFFLDBCQUEwQjtpQkFDaEMsQ0FBQyxDQUFBO2FBQ0g7U0FDRjthQUFNO1lBQ0wsSUFBSSxDQUFDLE9BQVEsQ0FBQztnQkFDWixhQUFhLEVBQUUsYUFBYSxHQUFHLENBQUM7Z0JBQ2hDLFlBQVk7Z0JBQ1osUUFBUSxFQUFFLFlBQVksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO2dCQUN6QyxVQUFVO2FBQ1gsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgQXBpIGZyb20gJy4uLy4uL3NlcnZpY2UvYXBpLnNlcnZpY2UnO1xyXG5cclxuUGFnZSh7XHJcbiAgZGF0YToge1xyXG4gICAgcXVlc3Rpb246IHt9LFxyXG4gICAgcXVlc3Rpb25JbmRleDogMCxcclxuICAgIHF1ZXN0aW9uTGlzdDogW10gYXMgYW55W10sXHJcbiAgICBhbnN3ZXJMaXN0OiBbXSBhcyBhbnlbXSxcclxuICAgIHBzeVRlc3Q6IHt9IGFzIGFueSxcclxuICAgIGJnSW1nOiAnJyxcclxuICB9LFxyXG5cclxuICBvbkxvYWQ6IGZ1bmN0aW9uIChvcHRpb25zOiBhbnkpIHtcclxuICAgIHRoaXMuZ2V0UHN5VGVzdChvcHRpb25zLmlkKTtcclxuICB9LFxyXG5cclxuICAvKiog6I635Y+W5b+D55CG5rWL6K+V6aKY55uuICovXHJcbiAgZ2V0UHN5VGVzdChpZDogc3RyaW5nKSB7XHJcbiAgICBBcGkuZ2V0UHN5VGVzdChpZCkudGhlbigocmVzdWx0OiBhbnkpID0+IHtcclxuICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgcHN5VGVzdDogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgcXVlc3Rpb25MaXN0OiByZXN1bHQuZGF0YS5jb250ZW50LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgcXVlc3Rpb24gPSB0aGlzLmRhdGEucXVlc3Rpb25MaXN0W3RoaXMuZGF0YS5xdWVzdGlvbkluZGV4XTtcclxuICAgICAgY29uc3QgYmdJbWcgPSBgLi4vLi4vcHVibGljL2ltYWdlL3hsY3NfJHtyZXN1bHQuZGF0YS50eXBlfS5qcGdgO1xyXG4gICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICBxdWVzdGlvbixcclxuICAgICAgICBiZ0ltZyxcclxuICAgICAgfSk7XHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIHNlbGVjdChlOiBhbnkpIHtcclxuICAgIGNvbnN0IHsgb3B0aW9uLCBpbmRleCB9ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQ7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIHF1ZXN0aW9uSW5kZXgsXHJcbiAgICAgIHF1ZXN0aW9uTGlzdCxcclxuICAgICAgYW5zd2VyTGlzdCxcclxuICAgIH0gPSB0aGlzLmRhdGE7XHJcbiAgICBjb25zb2xlLmxvZyhxdWVzdGlvbkxpc3RbcXVlc3Rpb25JbmRleF0pO1xyXG4gICAgY29uc29sZS5sb2cocXVlc3Rpb25MaXN0W3F1ZXN0aW9uSW5kZXhdLmFuc3dlck9wdGlvbnNbaW5kZXhdKTtcclxuICAgIHF1ZXN0aW9uTGlzdFtxdWVzdGlvbkluZGV4XS5hbnN3ZXJPcHRpb25zW2luZGV4XS5pc1NlbGVjdCA9IHRydWU7XHJcbiAgICBhbnN3ZXJMaXN0LnB1c2goe1xyXG4gICAgICBxdWVzdGlvbjogcXVlc3Rpb25MaXN0W3F1ZXN0aW9uSW5kZXhdLnF1ZXN0aW9uLCAvLyDpopjnm65cclxuICAgICAgYW5zd2VyOiBvcHRpb24sICAvLyDnrZTmoYhcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coYW5zd2VyTGlzdCk7XHJcbiAgICBpZiAoKHF1ZXN0aW9uSW5kZXggKyAxKSA9PT0gcXVlc3Rpb25MaXN0Lmxlbmd0aCkgeyAvLyBsYXN0IHF1ZXN0aW9uXHJcbiAgICAgIGNvbnN0IGlkID0gdGhpcy5kYXRhLnBzeVRlc3QuX2lkOyAgLy8g6aKY55uuaWRcclxuICAgICAgY29uc3QgcGFyYW1zID0ge1xyXG4gICAgICAgIGlkLFxyXG4gICAgICAgIGlucHV0QW5zd2VyOiBhbnN3ZXJMaXN0LFxyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLmRhdGEucHN5VGVzdC50eXBlID09PSAnMicpIHtcclxuICAgICAgICBBcGkuZ2V0R2VuZXJhdGVDYXRPckRvZ1Jlc3VsdChwYXJhbXMpLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzdWx0LmRhdGEpIHtcclxuICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAga2V5OiAnY2F0RG9nUmVzdWx0JyxcclxuICAgICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICAgICAgICBzdWNjZXNzOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICAgICAgdXJsOiBgLi4veGxjc1Jlc3VsdDAyL3hsY3NSZXN1bHQwMj9uYW1lPSR7dGhpcy5kYXRhLnBzeVRlc3QubmFtZX1gLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfpnZ7njKvni5fmtYvor5UnKTtcclxuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgIHVybDogJy4uL3hsY3NSZXN1bHQveGxjc1Jlc3VsdCcsXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgcXVlc3Rpb25JbmRleDogcXVlc3Rpb25JbmRleCArIDEsXHJcbiAgICAgICAgcXVlc3Rpb25MaXN0LFxyXG4gICAgICAgIHF1ZXN0aW9uOiBxdWVzdGlvbkxpc3RbcXVlc3Rpb25JbmRleCArIDFdLFxyXG4gICAgICAgIGFuc3dlckxpc3QsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sXHJcbn0pIl19