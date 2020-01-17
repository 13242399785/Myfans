// pages/personal/wallet/wallet.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    infoList: [
      { name: '帖子赞赏记录', icon: 'icon-comment', url: './appreciation/appreciation' },
      { name: '红包记录', icon: 'icon-zan', url: './packet/packet' },
      { name: '提现记录', icon: 'icon-shoukuan', url: './withdraw/withdraw' },
      { name: '悬赏记录', icon: 'icon-comiisquanzi', url:'./reward/reward'},
    ]
  },
  goTap(e){
    let url = e.currentTarget.dataset.url
    wx.navigateTo({
      url: url
    })
  },
  // 提现
  goKiting(){
    wx.navigateTo({
      url: './kiting/kiting'
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