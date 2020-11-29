import * as Api from '../../service/api.service';
import { dealRightIntercept, setRightStorage } from '../../utils/utils';
import { IMyApp } from '../../app';
import {getAgeMenuList, getHeightMenuList, ageMenuList, heightMenuList} from './topMenuList'
const app = getApp<IMyApp>();

Page({
  data: {
    userInfo: {},
    userList: [] as any[],
    curruserList: [],
    dataAlready: false,
    currentCity: "",
    selectValue: "",
    currentQrcode: "",
    currentPhone: "",
    phone: "",
    popHidden: true,
    pageLoaded: false,
    popWechat: false,
    currentPage: 1,
    pageSize: 10, // default
    totalCount: 0,
    pullDown: false,
    pullUp: false,
    showDialog: false,
    topMenuContent: {
      ageArray: getAgeMenuList(),
      heightArray: getHeightMenuList(),
      salaryArray: ["5千以下", "5千～1万", "1万～2万", "2万～5万", "5万以上"],
    },
    showSelect: false,
    optionType: '',
    selection: '',
  },

  onLoad() {
    let _this = this;
    wx.getStorage({
      key: "user",
      success: function (res) {
        _this.setData!({
          userInfo: res.data,
        });
      },
    });
    this.getUserList({});
    this.setData!({
      pageLoaded: true,
    });
  },

  /** 详情 */
  userDetail(e: any) {
    const { openid } = e.currentTarget.dataset;
    wx.navigateTo({
      url: `../userDetail/userDetail?openid=${openid}`,
    });
    // wx.navigateTo({
    //   url: '../registerPhone/registerPhone',
    // })
  },

  /**
   * @param {string} objectId
   * pageSize 默认 10
   */
  getUserList(params: any) {
    // const params = { objectId };
    const { objectId } = params;
    Api.getUserList(params)
      .then((result: any) => {
        this.setData!({
          dataAlready: true,
        })
        if (result.code === 200) {
          let dataList = objectId ? this.data.userList : [];
          dataList = dataList.concat(result.data);
          dataList.map((data) => {
            if (data.age && !data.age.toString().includes("岁")) {
              data.age = data.age + "岁";
            }
          });
          dataList.map((item) => {
            if (item.photos && item.photos.length === 0) {
              item.photos.push(item.avatarUrl);
            }
            item.intro = [];
            if (item.age) {
              item.intro.push(item.age);
            }
            if (item.jobGeneral) {
              item.intro.push(item.jobGeneral);
            }
            if (item.jobDetail) {
              item.intro.push(item.jobDetail);
            }
            if (item.education) {
              item.intro.push(item.education);
            }
            item.intro = item.intro.join(" | ");
          });
          const { currentPage } = this.data;
          this.setData!({
            userList: dataList,
            currentPage: currentPage + 1,
          });
        }
      })
      .catch((err) => {
        console.log("get user List", err);
      });
  },

  goMatch() {
    let rightType = "fateMatch"; // 缘分匹配
    if (dealRightIntercept(rightType)) {
      this.setData!({
        showDialog: true,
      });
      return;
    }
    setRightStorage(rightType);

    let userInfo = app.globalData.userInfo;
    if (userInfo && userInfo.phone) {
      wx.navigateTo({
        url: "../matching/matching",
      });
    } else {
      wx.navigateTo({
        url: "../registerXz/registerXz",
      });
    }
  },

  onShow: function () {
    const { pageLoaded } = this.data;
    if (pageLoaded) {
      this.getUserList({});
    }
  },

  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    let rightType = "fateWatch"; // 缘分下滑查看限制
    const { userList, currentPage, pageSize } = this.data;
    if (currentPage > 2 && dealRightIntercept(rightType)) {
      this.setData!({
        showDialog: true,
      });
      return;
    }
    setRightStorage(rightType, currentPage * pageSize);
    const lastId = userList.length > 0 ? userList[userList.length - 1]._id : "";
    
    const { optionType, selection } = this.data;
    const params = this.dealWithRequestParameter(optionType, selection);
    params.objectId = lastId;
    this.getUserList(params);
  },

  closeDialog() {
    this.setData!({
      showDialog: false,
    });
  },

  // type: ageArray, heightArray, salaryArray
  openSelect(e: any) {
    const optionTypedata = e.target.dataset.optionType;
    const { optionType } = this.data;
    if (optionTypedata === optionType) {
      this.setData!({
        showSelect: false,
        optionType: '',
      });
      return;
    }
    this.setData!({
      showSelect: true,
      optionType: optionTypedata,
    });
  },

  chooseTap(e: any) {
    const selectionData = e.target.dataset.selection;
    const { selection } = this.data;
    console.log(selection);
    this.setData!({
      selection: selectionData === selection ? '' : selectionData,
    });
    const { optionType } = this.data;
    const params = this.dealWithRequestParameter(optionType, selection);
    this.getUserList(params);
  },

  /*
    根据选择的年龄, 身高, 收入范围, 转换成对应请求参数
    ToDo:
      页面上年龄, 身高, 收入范围选择
  */
  dealWithRequestParameter(optionType: string, selection: string) {
    // get selectOptions from this.data
    // const ageSelection = "";
    // const heightSelection = "";
    // const salarySelection = "";
    const reqParams: any = {};
    // ageArray, heightArray, salaryArray
    switch(optionType) {
      case 'ageArray':
        reqParams.age = ageMenuList[selection];
        break;
      case 'heightArray':
        reqParams.height = heightMenuList[selection]
        break;
      case 'salaryArray':
        reqParams.salary = selection;
        break;
    }
    return reqParams;
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (
    options?: Page.IShareAppMessageOption | undefined
  ): Page.ICustomShareContent {
    console.log("onShareAppMessage options", options);
    return {};
  },
});