// pages/xlcsDetail/xlcsDetail.js
Page({

  /**
   * 页面的初始数据
   */
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
    answerList: [] as string[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    let question = this.data.questionList[this.data.questionIndex];
    this.setData!({
      question,
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
    console.log(questionList[questionIndex].options[index]);
    questionList[questionIndex].options[index].isSelect = true;
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

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },
})