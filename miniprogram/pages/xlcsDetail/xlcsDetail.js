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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGxjc0RldGFpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInhsY3NEZXRhaWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBaUQ7QUFFakQsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFLEVBQUU7UUFDWixhQUFhLEVBQUUsQ0FBQztRQUNoQixZQUFZLEVBQUUsRUFBVztRQUN6QixVQUFVLEVBQUUsRUFBYztRQUMxQixPQUFPLEVBQUUsRUFBRTtRQUNYLEtBQUssRUFBRSxFQUFFO0tBQ1Y7SUFFRCxNQUFNLEVBQUUsVUFBVSxPQUFZO1FBQzVCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxNQUFNLENBQUMsQ0FBTTtRQUNYLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDbEQsTUFBTSxFQUNKLGFBQWEsRUFDYixZQUFZLEVBQ1osVUFBVSxHQUNYLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDOUQsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2pFLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxLQUFLLFlBQVksQ0FBQyxNQUFNLEVBQUU7WUFDL0MsRUFBRSxDQUFDLFVBQVUsQ0FBQztnQkFDWixHQUFHLEVBQUUsMEJBQTBCO2FBQ2hDLENBQUMsQ0FBQTtTQUNIO2FBQU07WUFDTCxJQUFJLENBQUMsT0FBUSxDQUFDO2dCQUNaLGFBQWEsRUFBRSxhQUFhLEdBQUcsQ0FBQztnQkFDaEMsWUFBWTtnQkFDWixRQUFRLEVBQUUsWUFBWSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7Z0JBQ3pDLFVBQVU7YUFDWCxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFHRCxVQUFVLENBQUMsRUFBVTtRQUNuQixHQUFHLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQVcsRUFBRSxFQUFFO1lBQ3RDLElBQUksQ0FBQyxPQUFRLENBQUM7Z0JBQ1osT0FBTyxFQUFFLE1BQU0sQ0FBQyxJQUFJO2dCQUNwQixZQUFZLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPO2FBQ2xDLENBQUMsQ0FBQztZQUNILE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDakUsTUFBTSxLQUFLLEdBQUcsMkJBQTJCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxNQUFNLENBQUM7WUFDaEUsSUFBSSxDQUFDLE9BQVEsQ0FBQztnQkFDWixRQUFRO2dCQUNSLEtBQUs7YUFDTixDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBBcGkgZnJvbSAnLi4vLi4vc2VydmljZS9hcGkuc2VydmljZSc7XG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgcXVlc3Rpb246IHt9LFxuICAgIHF1ZXN0aW9uSW5kZXg6IDAsXG4gICAgcXVlc3Rpb25MaXN0OiBbXSBhcyBhbnlbXSxcbiAgICBhbnN3ZXJMaXN0OiBbXSBhcyBzdHJpbmdbXSxcbiAgICBwc3lUZXN0OiBbXSxcbiAgICBiZ0ltZzogJycsXG4gIH0sXG5cbiAgb25Mb2FkOiBmdW5jdGlvbiAob3B0aW9uczogYW55KSB7XG4gICAgdGhpcy5nZXRQc3lUZXN0KG9wdGlvbnMuaWQpO1xuICB9LFxuXG4gIHNlbGVjdChlOiBhbnkpIHtcbiAgICBjb25zdCB7IG9wdGlvbiwgaW5kZXggfSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0O1xuICAgIGNvbnN0IHtcbiAgICAgIHF1ZXN0aW9uSW5kZXgsXG4gICAgICBxdWVzdGlvbkxpc3QsXG4gICAgICBhbnN3ZXJMaXN0LFxuICAgIH0gPSB0aGlzLmRhdGE7XG4gICAgY29uc29sZS5sb2cocXVlc3Rpb25MaXN0W3F1ZXN0aW9uSW5kZXhdKTtcbiAgICBjb25zb2xlLmxvZyhxdWVzdGlvbkxpc3RbcXVlc3Rpb25JbmRleF0uYW5zd2VyT3B0aW9uc1tpbmRleF0pO1xuICAgIHF1ZXN0aW9uTGlzdFtxdWVzdGlvbkluZGV4XS5hbnN3ZXJPcHRpb25zW2luZGV4XS5pc1NlbGVjdCA9IHRydWU7XG4gICAgYW5zd2VyTGlzdC5wdXNoKG9wdGlvbik7XG4gICAgY29uc29sZS5sb2coYW5zd2VyTGlzdCk7XG4gICAgaWYgKChxdWVzdGlvbkluZGV4ICsgMSkgPT09IHF1ZXN0aW9uTGlzdC5sZW5ndGgpIHsgLy8gbGFzdCBxdWVzdGlvblxuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4uL3hsY3NSZXN1bHQveGxjc1Jlc3VsdCcsXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgcXVlc3Rpb25JbmRleDogcXVlc3Rpb25JbmRleCArIDEsXG4gICAgICAgIHF1ZXN0aW9uTGlzdCxcbiAgICAgICAgcXVlc3Rpb246IHF1ZXN0aW9uTGlzdFtxdWVzdGlvbkluZGV4ICsgMV0sXG4gICAgICAgIGFuc3dlckxpc3QsXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqIOiOt+WPluW/g+eQhua1i+ivlemimOebriAqL1xuICBnZXRQc3lUZXN0KGlkOiBzdHJpbmcpIHtcbiAgICBBcGkuZ2V0UHN5VGVzdChpZCkudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICBwc3lUZXN0OiByZXN1bHQuZGF0YSxcbiAgICAgICAgcXVlc3Rpb25MaXN0OiByZXN1bHQuZGF0YS5jb250ZW50LFxuICAgICAgfSk7XG4gICAgICBjb25zdCBxdWVzdGlvbiA9IHRoaXMuZGF0YS5xdWVzdGlvbkxpc3RbdGhpcy5kYXRhLnF1ZXN0aW9uSW5kZXhdO1xuICAgICAgY29uc3QgYmdJbWcgPSBgLi4vLi4vcHVibGljL2ltYWdlL3hsY3NfJHtyZXN1bHQuZGF0YS50eXBlfS5wbmdgO1xuICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgIHF1ZXN0aW9uLFxuICAgICAgICBiZ0ltZyxcbiAgICAgIH0pO1xuICAgIH0pXG4gIH0sXG59KSJdfQ==