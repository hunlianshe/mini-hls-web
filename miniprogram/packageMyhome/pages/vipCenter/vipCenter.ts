import { BAIJIN, HUANGTONG, RIGHTLIST } from "./config/vipService";
import { dealWithVipPriceInfo, dealWithVipRightList } from "./config/utils";
import { getVipInfo } from "../../../service/api.service";

Page({
  data: {
    BJ: BAIJIN,
    HT: HUANGTONG,
    rightList: RIGHTLIST,
    swiper: {
      indicatorDots: true,
      vertical: false,
      autoplay: false,
      interval: 2000,
      duration: 500,
    },
    currentRight: 0, // 0-huangtong 1-baijin
    currentPrice: 0, // 0-huangtong 1-baijin
  },
  onLoad: function () {
    // 获取vip权益
    getVipInfo().then((res: any) => {
      const priceList = dealWithVipPriceInfo(res.data);
      const vipRightInfo = dealWithVipRightList(res.data);
      console.log(priceList);
      console.log(vipRightInfo);
    });
  },

  getVipInfo(): any {},

  /** 充值 */
  goRecharge(): any {
    wx.navigateTo({
      url: `../../../packageMyhome/pages/recharge/recharge`,
    });
  },

  swiperChange(e: any) {
    console.log(e.detail.current);
    this.setData!({
      currentRight: e.detail.current,
    });
  },

  selectPrice(e: any) {
    console.log(e.currentTarget.dataset);
    const { BJ, HT } = this.data;
    let currentPrice = 0;
    const { selectIndex, currentRight } = e.currentTarget.dataset;
    const priceList = currentRight === 0 ? HT.priceList : BJ.priceList;
    priceList.forEach((item, index) => {
      if (index === selectIndex) {
        item.select = true;
      } else {
        item.select = false;
      }
    });
    if (currentRight === 0) {
      HT.priceList = priceList;
      currentPrice = HT.priceList[selectIndex].value;
    } else {
      currentPrice = BJ.priceList[selectIndex].value;
      BJ.priceList = priceList;
    }
    this.setData!({
      BJ,
      HT,
      currentPrice,
    });

    console.log(this.data.HT.priceList);
    console.log(this.data.BJ.priceList);
  },

  onReady: function () {},

  onShow: function () {},

  onHide: function () {},

  onUnload: function () {},

  onPullDownRefresh: function () {},

  onReachBottom: function () {},
});
