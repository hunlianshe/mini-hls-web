// import { IMyApp } from '../../app';
// import * as Api from '../../service/api.service';
// const Api = require('../../service/api/api-promisify.service');
// const {
//   cityReplace,
//   showModal,
// } = require('../../utils/utils');

// const app = getApp<IMyApp>();

Page({
  data: {
    shopList: [],
    currShopList: [],
    dataAlready: false,
    currentCity: '',
    selectValue: '',
    currentQrcode: '',
    currentPhone: '',
    phone: '',
    popHidden: true,
    pageLoaded: false,
    popWechat: false,
    currentPage: 1,
    pageSize: 10,
    totalCount: 0,
    pullDown: false,
    pullUp: false,
  },

  onLoad() {
    // let _this = this;
    // wx.getStorage({
    //   key: 'currentCity',
    //   success: function(res) {
    //     _this.setData!({
    //       currentCity: res.data,
    //     });
    //   },
    // });
    // this.getShopList({needLoading: '1'});
    // this.setData!({
    //   pageLoaded: true,
    // })
  },

  /** 详情 */
  userDetail() {
    // wx.navigateTo({
    //   url: `../userDetail/userDetail`,
    // })
    wx.navigateTo({
      url: '../registerPhone/registerPhone',
    })
  },

  /** 店铺首页 */
  goShop(e: any) {
    wx.navigateTo({
      url: `../shop/shop?id=${e.currentTarget.dataset.id}`,
    })
  },

  /** 汽车详情 */
  goCarDetail(e: any) {
    wx.navigateTo({
      url: `../carDetail/carDetail?id=${e.currentTarget.dataset.id}`,
    })
  },

  /** 首页搜索 */
  doSearch(e: any) {
    const keyword = e.detail.value;
    const params = {
      keyword,
      needLoading: '1',
    }
    this.getShopList(params);
    this.setData!({
      keyword,
      pullDown: false,
      pullUp: false,
    })
  },

  /**
   * 获取店铺列表 分页加载
   * @param {Object} params 
   */
  getShopList(params: any) {
    const totalCount = this.data.totalCount;
    const pageSize = this.data.pageSize;
    let currentPage = this.data.currentPage;
    // let lastPage = this.data.currentPage;
    const pullDown = this.data.pullDown;
    const pullUp = this.data.pullUp;
    if (pullDown && !pullUp && currentPage > 1) { // 下拉分页加载
      --currentPage;
    } else if (!pullDown && pullUp) {            // 上拉加载
      let totalSize = pageSize * (currentPage + 1);
      if (totalSize > totalCount && currentPage > 1) {
        console.log('total size:', pageSize * (currentPage + 1));
        return;
      }
      ++currentPage;
    } else {  // 其他情况，视为重新加载
      console.log('其他情况，视为重新加载');
      currentPage = 1;
    }
    let p = {
      // keyword: this.data.keyword,
      city: this.data.currentCity,
      currentPage,
      limit: pageSize,
    }
    console.log('Object.assign(p, params): ', Object.assign(p, params));
    // Api.getShopList(Object.assign(p, params)).then((result) => {
    //   if (result.code === 200) {
    //     let preShopList = lastPage > 1 ? this.data.currShopList : [];
    //     let dataAlready = true;
    //     let shopList = result.data.rows;
    //     let totalCount = result.data.count;
    //     if (pullDown) {
    //       shopList = shopList.concat(preShopList);  // 显示上一页数据和当前页数据（共两页）
    //     } else {
    //       shopList = preShopList.concat(shopList);  // 显示上一页数据和当前页数据（共两页）
    //     }
    //     this.setData!({
    //       dataAlready,
    //       shopList,
    //       currShopList: result.data.rows,  // 保留当前页数据
    //       totalCount,
    //       currentPage,
    //     });
    //     console.log(shopList.length);
    //   }
    // }).catch((err) => {
    //   console.log('get Shop List', err);
    // })
  },

  /** 控制picker */
  popPicker() {
    let popHidden = this.data.popHidden;
    this.setData!({
      popHidden: !popHidden,
    })
  },

  /** 选择城市 */
  doSelect(e: any) {
    if (e.detail.name) {
      this.setData!({
        popHidden: true,
        currentCity: e.detail.name,
        pullDown: false,
        pullUp: false,
        currentPage: 1,     // 更换城市
      })
      let params = {
        city: e.detail.name,
        needLoading: '1',
      }
      this.getShopList(params);
      wx.setStorage({
        key: 'currentCity',
        data: e.detail.name,
      });
    } else {  // 取消按钮
      this.setData!({
        popHidden: true,
      })
    }
  },

  /** 打开微信二维码弹框 */
  popWechat(e: any) {
    const currentQrcode = e.currentTarget.dataset.qrcode;
    const currentPhone = e.currentTarget.dataset.phone;
    this.setData!({
      currentQrcode,
      currentPhone,
      popWechat: true
    })
  },

  /** 关闭微信二维码弹框 */
  closeWechat() {
    this.setData!({
      popWechat: false
    })
  },

  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // const { pageLoaded } = this.data;
    // if (pageLoaded) {
    //   this.getShopList({}, '0');
    // }
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
   * 下拉刷新
   */
  onPullDownRefresh: function () {
    this.setData!({
      pullDown: true,
      pullUp: false
    });
    this.getShopList({ needLoading: '1' });
    wx.stopPullDownRefresh();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.setData!({
      pullDown: false,
      pullUp: true
    });
    this.getShopList({ needLoading: '1' });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (options?: Page.IShareAppMessageOption | undefined): Page.ICustomShareContent {
    console.log('onShareAppMessage options', options);
    return {};
  }
})