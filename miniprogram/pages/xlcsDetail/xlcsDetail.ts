import * as Api from '../../service/api.service';

Page({
  data: {
    question: {},
    questionIndex: 0,
    questionList: [] as any[],
    answerList: [] as any[],
    psyTest: {} as any,
    bgImg: '',
  },

  onLoad: function (options: any) {
    this.getPsyTest(options.id);
  },

  /** 获取心理测试题目 */
  getPsyTest(id: string) {
    Api.getPsyTest(id).then((result: any) => {
      this.setData!({
        psyTest: result.data,
        questionList: result.data.content,
      });
      const question = this.data.questionList[this.data.questionIndex];
      const bgImg = `../../public/image/xlcs_${result.data.type}.jpg`;
      this.setData!({
        question,
        bgImg,
      });
    })
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
    answerList.push({
      question: questionList[questionIndex].question, // 题目
      answer: option,  // 答案
    });
    console.log(answerList);
    if ((questionIndex + 1) === questionList.length) { // last question
      const id = this.data.psyTest._id;  // 题目id
      const params = {
        id,
        inputAnswer: answerList,
      }
      if (this.data.psyTest.type === '2') {
        Api.getGenerateCatOrDogResult(params).then((result: any) => {
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
        })
      } else {
        console.log('非猫狗测试');
        wx.navigateTo({
          url: '../xlcsResult/xlcsResult',
        })
      }
    } else {
      this.setData!({
        questionIndex: questionIndex + 1,
        questionList,
        question: questionList[questionIndex + 1],
        answerList,
      });
    }
  },
})