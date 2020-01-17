// pages/member/member.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selected: 0,
    color: "#444",
    selectedColor: "#444",
    activea: 'activea',
    list: [{
      iconClass: 'icon-zhuye mycommunity',
      pagePath: "pages/index/index",
      text: "社区"
    }, {
      iconClass: 'icon-add-fill boxShow',
        pagePath: "pages/post/post",
      text: "发布"
    }, {
      // iconClass: 'icon-guanzhu',
        pagePath: "pages/member/member",
      text: "我的"
    }],
    cardList:[
      {
        title:'我的',list:[
          { icon: 'icon-pinglun', name: '我的评论', url: '../../pages/personal/comment/comment' },
          { icon: 'icon-dianzan', name: '我的点赞', url: '../../pages/personal/zan/zan'},
          { icon: 'icon-shoucang', name: '我的收藏', url: '../../pages/personal/collect/collect' }, 
          { icon: 'icon-guanzhu', name: '我的关注', url: '../../pages/personal/attention/attention'}
      ]},
      {
        title: '发现', list: [
          { icon: 'icon-jifenshangcheng', name: '积分商城', url: '../integral/store/store'},
          // { icon: 'icon-shoukuan', name: '社区抽奖' },
          { icon: 'icon-shequhuodong', name: '社区活动', url: '../personal/events/events' },
          { icon: 'icon-yaoqing', name: '邀请好友' },
          { icon: 'icon-caiquan', name: '擂主大奖赛', url: '../personal/winner/winner'  },
          { icon: 'icon-youhuiquan', name: '商城优惠券', url: '../integral/coupon/coupon' }
        ]
      },
       {
        title: '设置', list: [
          { icon: 'icon-shezhi', name: '基础设置', url: '../personal/settings/settings' },
          { icon: 'icon-tousu', name: '投诉', url: '../personal/complaint/complaint' },
        ]
      }
    ] 
  },
  switchTab(e) {
    const data = e.currentTarget.dataset
    const url = '../' + data.path;
    if (data.path == 'pages/post/post') {
      wx.navigateTo({
        url: '../' + url
      })
    } else {
      wx.redirectTo({
        url: '../' + url
      })
    }
    this.setData({
      selected: data.index
    })
  },
  //跳转个人中心页面
  goPersonal(){
    wx.navigateTo({
      url: '../personal/personal/personal'
    })
  },
  //跳转积分
  goIntegrals(){
    console.log(111)
    wx.navigateTo({
      url: '../personal/integral/integral'
    })
  },
  //钱包
  goWallet(){
    wx.navigateTo({
      url: '../personal/wallet/wallet'
    })
  },
  //跳转我的信息
  goInfo(){
    wx.navigateTo({
      url: '../personal/info/info'
    })
  },
  //跳转对应页面
  goTap(e){
    console.log(e.currentTarget.dataset)
    const data = e.currentTarget.dataset;
    const url = data.url;
    wx.navigateTo({
      url: url
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})