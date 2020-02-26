// pages/discover/invite/invite.js
import promisify from '../../utils/promise.util'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1579241540704&di=1ccfa2be46296ff2512363cef4d34060&imgtype=jpg&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D792843848%2C2552580181%26fm%3D214%26gp%3D0.jpg",
    name:'',//微信呢称
    avatarUrl:''//微信头像
  },
  onLoad: function (options) {
    //注意：图片的域名需要在后台配置  
    let that = this;
    //获取授权信息
    var app = getApp();
    this.setData({
      name: app.globalData.userInfo.nickName,
      avatarUrl: app.globalData.userInfo.avatarUrl
    })
    wx.getImageInfo({
      src: that.data.avatarUrl,
      success: function (sres) {       //访问存放微信用户头像的Url 
        wx.saveImageToPhotosAlbum({   //下载用户头像并保存到相册（默认为手机相册weixin目录下）
          filePath: sres.path,
        })
      }
    })
    console.log(app.globalData.userInfo)
    // canvas
    const wxGetImageInfo = promisify.promisify(wx.getImageInfo);
    that.canvasImg();
    
  },
  canvasImg() {
    const ctx = wx.createCanvasContext('myCanvas');
    // const grd = ctx.createLinearGradient(0, 0, 300, 0);//创建了一个线性的渐变颜色 前两个参数起点横纵坐标，后两个参数终点横纵坐标
    // grd.addColorStop(0, '#000');
    // grd.addColorStop(1, '#fff');
    ctx.setFillStyle('#fff');                             //为创建的canvans上下文添充颜色  如果没有设置 fillStyle，默认颜色为 black。
    ctx.fillRect(0, 0, 300, 400);
    ctx.drawImage('../../common/images/timg.jpg', 0, 0, 300, 280);   //里面的参数无非就是图片放置的位置即图片的横纵坐标，图片的宽高
    //呢称和文字
    ctx.setFillStyle("#59563d");
    ctx.setFontSize(16);                               //字大小
    ctx.setTextAlign('center');                        //是否居中显示，参考点画布中线
    ctx.fillText("作者：" + this.data.name, 150, 100);
    ctx.fillText("作者：" + this.data.name, 150,100);
    ctx.fillText('叮~收到一份邀请卡，快来看看吧？', 150, 250);            //150:canvas画布宽300，取1/2，中间，280：纵向位置
    ctx.save(); 
    ctx.setFontSize(20);
    ctx.setTextAlign('center');
    ctx.fillText("邀请您加入", 150, 160);
    //画头像
    let cx=30+25;
    let cy=320+25;
    ctx.arc(cx,cy,25,0,2*Math.PI);
    ctx.clip();
    ctx.drawImage(this.data.avatarUrl,30,320,52,52);//需要先保存头像图片到本地
    ctx.drawImage('../../common/images/qr.jpg', 90, 280, 120, 120);
    ctx.draw();
  },
  //保存图片
  saveImg() {
    wx.canvasToTempFilePath({
      x: 0,
      y: 0,
      width: 300,                     //画布宽高
      height: 400,
      destWidth: 600,                 //画布宽高*dpr 以iphone6为准
      destHeight: 800,
      canvasId: 'myCanvas',
      success: function (res) {
        console.log(res.tempFilePath) //生成的临时图片路径
        wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
          success: function (res) {
            console.log(res);
            wx.showToast({
              title: '保存成功',
            })
          }
        })
      }
    })
  },
  //获取用户信息
  onGotUserInfo: function (e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.userInfo)
    console.log(e.detail.rawData)
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