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
    selectValue: {} as any,
    payBarStatus: {
      isShow: true,
      content: "立即支付",
    },
    userInfo: {} as any,
    currentRight: 0, // 0-huangtong 1-baijin
    currentPrice: 0,
  },
  onLoad: function () {
    // 获取用户信息
    const user = wx.getStorageSync("userInfo");
    console.log("userInfo", user);
    this.setData!({
      userInfo: {
        ...user,
        vipType: "bronze",
        vipExpireAt: "2020.12.31",
      },
    });

    // 获取vip权益
    getVipInfo().then((res: any) => {
      const priceList = dealWithVipPriceInfo(res.data);
      const vipRightInfo = dealWithVipRightList(res.data);
      console.log(priceList);
      this.setData!({
        BJ: priceList.BAIJIN,
        HT: priceList.HUANGTONG,
        rightList: vipRightInfo,
      });
      console.log(`=====vipRightInfo=====`, vipRightInfo);
    });

    this.checkStatus(this.data.currentRight);
  },

  getVipInfo(): any {},

  /** 充值 */
  goRecharge(): any {
    const payInfo = JSON.stringify(this.data.selectValue);
    if (payInfo === '{}') {
      wx.showToast({
        title: '请选择会员充值方式',
        icon: 'none',
        duration: 2000
      });
      return;
    }
    wx.navigateTo({
      url: `../../../packageMyhome/pages/choosePay/choosePay?payInfo=${payInfo}`,
    });
  },

  swiperChange(e: any) {
    console.log(e.detail.current);
    this.checkStatus(e.detail.current);
  },

  checkStatus(currentRight: any) {
    const { userInfo } = this.data;
    if (userInfo.vipType === "platinum" && currentRight === 0) {
      this.setData!({
        payBarStatus: {
          isShow: false,
        },
        currentRight: currentRight,
      });
      return;
    } else if (
      (userInfo.vipType === "platinum" && currentRight === 1) ||
      (userInfo.vipType === "bronze" && currentRight === 0)
    ) {
      this.setData!({
        payBarStatus: {
          isShow: true,
          content: "立即续费",
        },
        currentRight: currentRight,
      });
    } else if (userInfo.vipType === "bronze" && currentRight === 1) {
      this.setData!({
        payBarStatus: {
          isShow: true,
          content: "立即升级",
        },
        currentRight: currentRight,
      });
    }
  },

  selectPrice(e: any) {
    const { selectIndex, currentRight } = e.currentTarget.dataset;
    console.log(e.currentTarget.dataset);
    const { BJ, HT } = this.data;
    let currentPrice = 0;
    let selectValue: any = {};

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
      selectValue = HT.priceList[selectIndex];
    } else {
      currentPrice = BJ.priceList[selectIndex].value;
      BJ.priceList = priceList;
      selectValue = BJ.priceList[selectIndex];
    }
    this.setData!({
      BJ,
      HT,
      currentPrice,
      selectValue: {
        ...selectValue,
        vipType: currentRight === 0 ? "bronze" : "platinum",
      },
    });

    console.log(this.data.HT.priceList);
    console.log(this.data.BJ.priceList);
    console.log(`vipCenter selectValue:`, selectValue);
  },

  onReady: function () {},

  onShow: function () {},

  onHide: function () {},

  onUnload: function () {},

  onPullDownRefresh: function () {},

  onReachBottom: function () {},
});
