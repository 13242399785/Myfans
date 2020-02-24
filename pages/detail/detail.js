// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentId:'0',
    listName:false,
    showActionsheet:false,//弹窗插件显示
    commentShow:false,
    groups: [//弹窗详情
      { text: '收藏', value: 1 },
      { text: '生成图片', value: 2 },
      { text: '举报', value: 3 }
    ],
    groups1: [//回复弹窗
      { text: '回复', value: 1 },
    ],
    commentList:[
      { content: '内容', time: 'time', floor: 15,author_info: { name: '名称', img:'https://cdn.myfans.cc/177363_9594201_z7maikp8vt.jpg?imageView2/1/w/150/h/150'}},
      { content: '内容', time: 'time', floor: 15, author_info: { name: '名称', img: 'https://cdn.myfans.cc/177363_9594201_z7maikp8vt.jpg?imageView2/1/w/150/h/150' } },
      { content: '内容', time: 'time', floor: 15, author_info: { name: '名称', img: 'https://cdn.myfans.cc/177363_9594201_z7maikp8vt.jpg?imageView2/1/w/150/h/150' } }
    ],
    zanList:[
      { img: 'http://thirdqq.qlogo.cn/g?b=oidb&k=Q9dyo26SEeSQGw3ForMyyw&s=100&t=1500092207', name: '华仔' },
      { img: 'https://cdn.myfans.cc/177363_9594201_z7maikp8vt.jpg?imageView2/1/w/150/h/150', name: '华仔' },
      { img:'http://thirdqq.qlogo.cn/g?b=oidb&k=Q9dyo26SEeSQGw3ForMyyw&s=100&t=1500092207',name:'华仔'},
    ]
  },
  //控制弹窗
  showActionsheet(){
    this.setData({
      listName:true,
      showActionsheet: true
    })
    console.log(this.data.listName)
  },
  hidenActionsheet() {
    this.setData({
      showActionsheet: false
    })
  },
  //回复弹窗
  showActionsheet1() {
    this.setData({
      listName: false,
      showActionsheet: true
    })
    console.log(this.data.listName)
  },
  //点击选项
  btnClick(e) {
    if (this.data.listName==true){
      this.hidenActionsheet();
    }else{
      this.hidenActionsheet();
      this.showComment();
    }
    console.log(e)
  },
  //评论框事件
  showComment(e){
    this.setData({
      commentShow:true
    })
  },
  hidenComment(){
    this.setData({
      commentShow: false
    })
  },
  commentTab(e){
    let id=e.currentTarget.dataset.id;
    this.setData({
      currentId: id
    })
  },
  //返回上一页
  goBack(){
    wx.navigateBack();
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