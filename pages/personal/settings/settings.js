// pages/personal/settings/settings.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: '2000-01-01',
    sexList:['男','女','保密'],
    sex:'保密',
    userName:'名称',
    inputVal:'',
    mokeShow:false,
  },
  //性别
  bindSex(e){
    this.setData({
      sex: this.data.sexList[e.detail.value]
    })
  },
  //日期 
  bindDateChange: function (e) {
    console.log(e)
    this.setData({
      date: e.detail.value
    })
  },
  //修改名称
  changeName(e){
    this.setData({
      userName: this.data.inputVal,
      mokeShow: false,
      inputVal:''
    })
  },
  //input框值
  getInputValue(e){
    this.setData({
      inputVal: e.detail.value
    })
    console.log(e.detail)
  },
  //x
  mokeControl(){
    if(this.data.mokeShow==false){
      this.setData({
        mokeShow: true
      })
    }else{
      this.setData({
        mokeShow: false
      })
    }
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