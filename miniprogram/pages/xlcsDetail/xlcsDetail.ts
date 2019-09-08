import * as Api from '../../service/api.service';

Page({
  data: {
    question: {},
    questionIndex: 0,
    questionList: [] as any[],
    answerList: [] as string[],
    psyTest: [],
  },

  onLoad: function (options: any) {
    this.getPsyTest(options.id);
  },

  select(e: any) {
    const { option, index } = e.currentTarget.dataset;
    const {
      questionIndex,
      questionList,
      answerList,
    } = this.data;
    console.log(questionList[questionIndex]);
    console.log(questionList[questionIndex].answerOptions[index]);
    questionList[questionIndex].answerOptions[index].isSelect = true;
    answerList.push(option);
    console.log(answerList);
    if ((questionIndex + 1) === questionList.length) { // last question
      wx.navigateTo({
        url: '../xlcsResult/xlcsResult',
      })
    } else {
      this.setData!({
        questionIndex: questionIndex + 1,
        questionList,
        question: questionList[questionIndex + 1],
        answerList,
      });
    }
  },

  /** 获取心理测试题目 */
  getPsyTest(id: string) {
    Api.getPsyTest(id).then((result: any) => {
      this.setData!({
        psyTest: result.data,
        questionList: result.data.content,
      });
      let question = this.data.questionList[this.data.questionIndex];
      this.setData!({
        question,
      });
    })
  },
})