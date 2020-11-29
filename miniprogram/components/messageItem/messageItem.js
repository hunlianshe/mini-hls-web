
Component({
  properties: {
    messageItem: {
      type: Object,
      value: {},
    },
   
    toUser: {
      type: Object,
      value: {},
    },
    me: {
      type: Object,
      value: {},
    },
    isRight: {
      type: Boolean,
      value: true,
    }
  },

  data: {
    imagePreview: false,
  },

  methods: {
    _openImage: function() {
      console.log('openImageopenImage')
      this.setData({
        imagePreview: true,
      });
    },
    _close: function() {
      this.setData({
        imagePreview: false,
      });
    },
  }
})
