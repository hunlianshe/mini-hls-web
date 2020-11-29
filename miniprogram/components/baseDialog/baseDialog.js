Component({
  properties: {
    showDialog: {
      type: Boolean,
      value: false,
    },
    title: {
      type: String,
      value: '暂无权限',
    },
    descText: {
      type: String,
      value: '您还不是会员，开通会员后可查看喜欢你的人',
    },
    ensureText: {
      type: String,
      value: '去开通',
    },
    cancelText: {
      type: String,
      value: '取消',
    },
    clickUrl: {
      type: String,
      value: '../../packageMyhome/pages/vipCenter/vipCenter',
    },
  },

  data: {
    showDl: false,
  },

  observers: {
    'showDialog': function () {
      // 每次 setData 都触发
      console.log('this.data.showDialog observers:');
      console.log(this.data.showDialog);
    },
  },

  lifetimes: {
    show: function () {
      let showDl = this.data.showDialog;
      console.log(showDl);
      this.setDate({
        showDl,
      });
    },
  },

  methods: {
    // 点击确定
    ensureTap() {
      this.triggerEvent('closeDialog', {}, {})
      wx.navigateTo({
        url: this.properties.clickUrl,
      });
    },
    closeDialog() {
      this.triggerEvent('closeDialog', {}, {})
    },
  }
})
