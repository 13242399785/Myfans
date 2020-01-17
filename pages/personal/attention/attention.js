// pages/personal/attention/attention.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    attentionList: ['我的关注', '我的粉丝'],
    curIndex:0,
    fansList:[
      { name: '名称', headImg: 'http://thirdwx.qlogo.cn/mmopen/vi_32/A8I3u40xQlB5scptEDal4xibBNkz5WHGXLbegvcbWtICwKdwicqCibfv7GG8dCh6ibkGWHf9ywN8icsJUWhialbVM1Eg/132', time: '2019-06-12 12:28' }, { name: '名称', headImg: 'http://thirdwx.qlogo.cn/mmopen/vi_32/A8I3u40xQlB5scptEDal4xibBNkz5WHGXLbegvcbWtICwKdwicqCibfv7GG8dCh6ibkGWHf9ywN8icsJUWhialbVM1Eg/132', time: '2019-06-12 12:28' }, { name: '名称', headImg: 'http://thirdwx.qlogo.cn/mmopen/vi_32/A8I3u40xQlB5scptEDal4xibBNkz5WHGXLbegvcbWtICwKdwicqCibfv7GG8dCh6ibkGWHf9ywN8icsJUWhialbVM1Eg/132', time: '2019-06-12 12:28' },
    ],
    fansList1:[]
  },
  tabHandel(e){
    this.setData({
      curIndex: e.currentTarget.dataset.index
    })
    console.log(e.currentTarget.dataset.index)
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