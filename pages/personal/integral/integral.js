// pages/personal/integral/integral.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cardList:[
      { name: '积分商城', icon: 'icon-jifenshangcheng', url: '../../integral/store/store' },
      { name: '兑换记录', icon: 'icon-shoukuan', url: '../../integral/record/record' },
      { name: '商城优惠券', icon: 'icon-youhuiquan', url:'../../integral/coupon/coupon'},
    ]
  },
  //跳转积分榜
  goIntegralsB(){
    wx.navigateTo({
      url: '../../integral/standings/standings'
    })
  },
  //查看积分详情
  goDetail(){
    wx.navigateTo({
      url: '../../integral/detail/detail'
    })
  },
  // goTab
  goTab(e){
    let url = e.currentTarget.dataset.url;
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