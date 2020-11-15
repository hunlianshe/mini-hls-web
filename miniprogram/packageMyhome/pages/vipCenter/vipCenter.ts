import { BAIJIN, HUANGTONG, RIGHTLIST } from "./config/vipService";
import { dealWithVipPriceInfo, dealWithVipRightList } from "./config/utils";
import { formatHLSTime } from "../../../utils/utils";
import { getVipInfo, vipListInfo } from "../../../service/api.service";

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
    upgradeFlag: false,
    tipFlag: false,
    upgradeInfo: {} as any,
  },
  onLoad: function (option: any) {
    const type = option.type;
    console.log(`vipCenter type:`, type);
    this.adjustVipType(type);
    // 获取用户信息
    const user = wx.getStorageSync("userInfo");
    console.log("userInfo", user);
    this.setData!({
      userInfo: {
        ...user,
        vipExpireAt: formatHLSTime(user.vipExpireAt),
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

    // 获取vip的更新信息
    if (user.vipType && user.vipType !== "platinum") {
      let _this = this;
      vipListInfo().then((res: any) => {
        if (res.code === 200) {
          this.setData!({
            upgradeInfo: res.data.upgradeInfo,
          });
          _this.checkStatus(this.data.currentRight);
        }
      });
    }else{
      this.checkStatus(this.data.currentRight);
    }
    console.log('this.data.currentRight', this.data.currentRight)
    
  },

  adjustVipType(type: string) {
    if (type === "1") {
      this.setData!({
        currentRight: 0
      })
    } else if (type === "2") {
      this.setData!({
        currentRight: 1
      })
    } else if (type === "3") {
      this.setData!({
        currentRight: 1
      })
    }
  },

  getVipInfo(): any {},

  /** 充值 */
  goRecharge(): any {
    let payInfo: any = {
      ...this.data.selectValue,
      currentPrice: this.data.currentPrice,
    };
    payInfo = JSON.stringify(payInfo);
    if (this.data.currentPrice === 0) {
      wx.showToast({
        title: "请选择会员充值方式",
        icon: "none",
        duration: 2000,
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
    this.data.HT.priceList.forEach((el) => {
      el.select = false;
    });
    this.data.BJ.priceList.forEach((el) => {
      el.select = false;
    });
    if (userInfo.vipType === "platinum" && currentRight === 0) {
      this.setData!({
        payBarStatus: {
          isShow: false,
        },
        currentPrice: 0,
        tipFlag: true,
        selectValue: {},
        HT: this.data.HT,
        BJ: this.data.BJ,
        upgradeFlag: false,
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
        tipFlag: false,
        selectValue: {},
        currentPrice: 0,
        HT: this.data.HT,
        BJ: this.data.BJ,
        upgradeFlag: false,
        currentRight: currentRight,
      });
    } else if (userInfo.vipType === "bronze" && currentRight === 1) {
      this.setData!({
        payBarStatus: {
          isShow: true,
          content: "立即升级",
        },
        currentPrice: this.data.upgradeInfo.totalPrice,
        upgradeFlag: true,
        HT: this.data.HT,
        BJ: this.data.BJ,
        selectValue: {},
        tipFlag: false,
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

  formatVipExpiredAtDate: function (date: any) {
    console.log("-----come in -------");
    return formatHLSTime(date);
  },

  onReady: function () {},

  onShow: function () {},

  onHide: function () {},

  onUnload: function () {},

  onPullDownRefresh: function () {},

  onReachBottom: function () {},
});
