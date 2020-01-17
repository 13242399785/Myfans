Component({
  data: {
    selected: 0,
    color: "#444",
    selectedColor: "#444",
    activea:'activea',
    list: [{
      iconClass:'icon-shezhi',
      pagePath: "pages/index/index",
      text: "刷新"
    }, {
        iconClass: 'icon-add-fill boxShow',
        pagePath: "pages/logs/logs",
        text: "发布"
    }, {
        // iconClass: 'icon-guanzhu',
        pagePath: "pages/tab-bar/tab-bar",
        text: "我的"
    }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = '../'+data.path;
      wx.navigateTo({
        url: '../'+url
      })
      this.setData({
        selected: data.index
      })
    }
  }
})