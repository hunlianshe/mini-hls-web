import * as Api from '../../service/api.service';
import * as utils from '../../utils/utils';
import { IMyApp } from '../../app';
const app: any = getApp<IMyApp>();

let ageObject:any = {
  '25岁以下':'1',
  '25~30岁':'2',
  '30~35岁':'3',
  '35~45岁':'4',
  '45~55岁':'5',
  '55岁以上':'6'
}
let salaryObject: any = {
  '5千以下': '1',
  '5千～1万': '2',
  '1万～2万': '3',
  '2万～5万': '4',
  '5万以上': '5',
  '55岁以上': '6'
}


let heightObject: any = {
  '160以下': '1',
  '160～165': '2',
  '165～170': '3',
  '170～175': '4',
  '175～180': '5',
  '"180以上': '6'
}

Page({
  data: {
    type:'',
    ageNumber: '',
    heightNumber: '',
    salaryNumber: '',
    age: '',
    height: '',
    salary: '',
    title:'精确匹配'
  },

  onLoad: function (options: any) {
    if(options.type === 'usercenter'){
      /** 获取用户信息 */
      Api.getUserInfo(app.globalData.userInfo.openid).then((result: any) => {
        if (result) {
          this.setData!({
            title: "更新"
          });
          const userInfo = result.data;
          if (userInfo.objectInfo && userInfo.objectInfo.age ){
            this.setData!({
              age: userInfo.objectInfo.age,
              ageNumber: ageObject[userInfo.objectInfo.age]
            });
          }
          if (userInfo.objectInfo && userInfo.objectInfo.salary) {
            this.setData!({
              salary: userInfo.objectInfo.salary,
              salaryNumber: salaryObject[userInfo.objectInfo.salary]
            });
          }
          if (userInfo.objectInfo && userInfo.objectInfo.height) {
            this.setData!({
              height: userInfo.objectInfo.height,
              heightNumber: heightObject[userInfo.objectInfo.height]
            });
          }

        }
      });

    }
  },

  jumpOver(): void {
    wx.navigateTo({
      url: '../home/home',
    })
  },
 

  next(): void {
    wx.navigateTo({
      url: '../home/home',
    })
  },

  getStandard(e: any) {
    const { type, value, number } = e.currentTarget.dataset;
    switch (type) {
      case '1':
        this.setData!({
          ageNumber: number,
          age: value,
        });
        break;
      case '2':
        this.setData!({
          heightNumber: number,
          height: value,
        });
        break;
      case '3':
        this.setData!({
          salaryNumber: number,
          salary: value,
        });
        break;
      default:
        break;
    }
  },

  updateUser(): any {
    const {
      age,
      height,
      salary,
      title
    } = this.data;
    if (!utils.validateEmpty(age, '请选择年龄标准') ||
      !utils.validateEmpty(height, '请选择身高标准') ||
      !utils.validateEmpty(salary, '请选择收入标准')) {
      return false;
    }
    Api.updateUser({
      openid: app.globalData.userInfo.openid,
      objectInfo: { // 择偶标准
        age,
        height,
        salary,
      }
    }).then((result: any) => {
      if (result.code === 200 && title !=='更新') {
        wx.navigateTo({
          url: '../registerPhone/registerPhone',
        });
      }else{
          utils.showModal('更新成功')
           wx.switchTab({
                        url: `../myHome/myHome`,
                    });
      }
    });
  },

  onReady: function () {

  },

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