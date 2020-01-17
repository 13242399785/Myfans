// pages/personal/personal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList: [
      { name: '我是一个整体', logo: 'https://cdn.myfans.cc/177363_8243996_rw161hdnlj.jpg?imageView2/1/w/150/h/150', id: 0, time: '时间', lable: ['标签'], title: '这是标题', topic: '#话题标签#', content: '内容标签', type: 'weitie', img: [], zang: '6', review: '12', video: 'https://cdn.myfans.cc/177363mURn3D1576742312.mp4', recommend: 'stick' },
      { name: '我是一个整体', logo: 'https://cdn.myfans.cc/177363_8243996_rw161hdnlj.jpg?imageView2/1/w/150/h/150', id: 1, time: '时间', lable: ['标签'], title: '这是标题', topic: '话题标签', content: '内容标签', type: 'weitie', img: ['https://cdn.myfans.cc/0mk4bjmF7uo1529912125.jpg?imageView2/1/w/132/h/132', 'https://cdn.myfans.cc/0mk4bjmF7uo1529912125.jpg?imageView2/1/w/132/h/132'], zang: '0', review: '12' },
      { name: '我是一个整体', logo: 'https://cdn.myfans.cc/177363_8243996_rw161hdnlj.jpg?imageView2/1/w/150/h/150', id: 2, time: '时间', lable: ['标签'], title: '这是标题', topic: '话题标签', content: '内容标签', type: 'weitie', img: ['https://cdn.myfans.cc/0mk4bjmF7uo1529912125.jpg?imageView2/1/w/132/h/132'], zang: '2', review: '12' },
      {
        name: '我是一个整体', logo: 'https://cdn.myfans.cc/177363_8243996_rw161hdnlj.jpg?imageView2/1/w/150/h/150', id: 3, time: '时间', lable: ['标签'], title: '这是标题', topic: '话题标签', content: '内容标签', type: 'weitie', img: ['https://cdn.myfans.cc/0mk4bjmF7uo1529912125.jpg?imageView2/1/w/132/h/132', 'https://cdn.myfans.cc/0mk4bjmF7uo1529912125.jpg?imageView2/1/w/132/h/132'], zang: '6', review: '12', music: {
          name: '歌手名称', title: '歌名', src: 'https://nc01-sycdn.kuwo.cn/d99e80bee42c81eeccbbcb6993833950/5e02fb8d/resource/n2/95/83/2798960634.mp3'
        }
      },
      { name: '我是一个整体', logo: 'https://cdn.myfans.cc/177363_8243996_rw161hdnlj.jpg?imageView2/1/w/150/h/150', id: 4, time: '时间', lable: ['标签'], title: '这是标题', topic: '话题标签', content: '内容标签', type: 'weitie', img: ['https://cdn.myfans.cc/0mk4bjmF7uo1529912125.jpg?imageView2/1/w/132/h/132', 'https://cdn.myfans.cc/0mk4bjmF7uo1529912125.jpg?imageView2/1/w/132/h/132', 'https://cdn.myfans.cc/0mk4bjmF7uo1529912125.jpg?imageView2/1/w/132/h/132', 'https://cdn.myfans.cc/0mk4bjmF7uo1529912125.jpg?imageView2/1/w/132/h/132'], zang: '6', review: '0' },
    ],
    groups: [
      { text: '编辑帖子', value: 1 },
      { text: '删除', value: 2 },
    ],
    showActionsheet:false,
  },
  // 跳转关注
  goAttention(){
    wx.navigateTo({
      url: '../attention/attention'
    })
  },
  //选择帖子
  shwoMoke(e) {
    console.log(e)
    if (e) {
      this.setData({
        showActionsheet: true
      })
    }
  },
  //选择事件
  btnClick(e) {
    // console.log(e)
    this.closeMoke()
  },
  //关闭选项
  closeMoke: function () {
    this.setData({
      showActionsheet: false
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