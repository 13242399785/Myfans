// pages/personal/info/info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    infoList:[
      { name: '评论', icon: 'icon-comment', url:'../../../pages/personal/getcomment/getcomment'},
      { name: '点赞', icon: 'icon-zan', url: '../../../pages/personal/getzan/getzan' },
      { name: '收款', icon: 'icon-shoukuan', url: '../../../pages/personal/gathering/gathering'},
      { name: '联系圈子', icon: 'icon-comiisquanzi', url: '../../../pages/personal/contact/contact'},
    ]
  },
  goTap(e){
    const data = e.currentTarget.dataset
    const url = data.url;
    wx.navigateTo({
      url: url
    })
    console.log(url)
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