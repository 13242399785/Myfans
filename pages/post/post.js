// pages/post.js
var WxParse = require('../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topicShow:false, 
    topicName:'',
    topicName1:'',
    topicId: 0,
    linkShow:false,//链接弹出框
    linkContent:false,//链接主体
    linkSrc: '',//输入的链接
    imagesUpload:false,//上传图片
    imageLink:false,
    voiceShow:false,//音频
    voicePlay:0,//是否录音
    voiceFilePath:'',//音频
    recordingTime: 0,//录音计时
    setInter: "",//录音
    voiceTime:'0:00',
    voiceControl:'',//当前录音播放实例
    vioceManager:'',//当前录音实例
    videoShow:false,
    videoSrc:'',
    allList: [//nav
      { 'name': '精华内容', 'id': 1 },
      { 'name': '晒出圣诞气氛', 'id': 2 },
      { 'name': '梦享商户', 'id': 3 },
      { 'name': '狼人杀组局热线', 'id': 4 },
      { 'name': '约个热线', 'id': 5 },
      { 'name': '牵狗绳和猫砂铲使用心得', 'id': 6 },
      { 'name': '健身狂魔', 'id': 7 },
      { 'name': '精致生活大爆炸', 'id': 8 }
    ],
    locationText:'开启定位',
    imagesList:[],//图片上传
    emojisList: new Array(100),//创建表情包
    emojisShow:false,//表情显示
    editorShow:false,//编辑器可编辑状态
    editorBlueGet:false,
    content: '',
  },
  // 自定义事件
  topicS:function(){
    this.setData({
      topicShow: true, 
    })
  },
  //选择话题
  chooseTopic(e){
    // console.log(e.target.dataset.id)
    // console.log(e.target.dataset.name)
    this.setData({
      topicId: e.target.dataset.id,
      topicName1: e.target.dataset.name
    })
  },
  //取消话题
  topicH: function () {
    this.setData({
      topicId: '',//需要存储传过来的话题
      topicShow: false,
    })
  },
  //确认话题
  sureTopc(){
    let me=this;
    this.setData({
      topicShow: false,
      topicName: me.data.topicName1
    })
  },
  //时间转换
  formatSeconds(value){
    console.log(value)
    var secondTime = parseInt(value); // 秒
    var minuteTime = 0; // 分
    var hourTime = 0; // 小时
    if(secondTime > 60) { //如果秒数大于60，将秒数转换成整数
      //获取分钟，除以60取整数，得到整数分钟
      minuteTime = parseInt(secondTime / 60);
      //获取秒数，秒数取佘，得到整数秒数
      secondTime = parseInt(secondTime % 60);
      //如果分钟大于60，将分钟转换成小时
      if (minuteTime > 60) {
        //获取小时，获取分钟除以60，得到整数小时
        hourTime = parseInt(minuteTime / 60);
        //获取小时后取佘的分，获取分钟除以60取佘的分
        minuteTime = parseInt(minuteTime % 60);
      }
    }
    let result;
    //时间的展示方式为00:00
    if (secondTime < 10) {
      result = "0" + parseInt(secondTime);
    } else {
      result = "" + parseInt(secondTime);
    }
    if (minuteTime > 0) {
      if (minuteTime < 10) {
        result = "0" + parseInt(minuteTime) + ":" + result;
      } else {
        result = "" + parseInt(minuteTime) + ":" + result;
      }
    } else {
     result = "00:" + result;
    }
    //限制时长最多为三分钟
    if (hourTime > 0) {
      result = "" + parseInt(hourTime) + ":" + result;
    }
    return result;
  },
  //销毁录音
  clearVioce(){
    clearInterval(this.data.setInter);
  },
  // 录音
  voiceC:function(){
    if (this.data.voiceShow==false){
      this.setData({
        voiceShow:true,
        imageLink:false,
        emojisShow:false,
      })
    }else{
      this.setData({
        voiceShow: false
      })
    }
  },
  emojisH:function(){
    this.setData({
      emojisShow: false,
    })
  },
  //视频选择
  uploadVideo(){
    let that=this;
    wx.chooseVideo({
      sourceType: ['album'],
      success:function(res){
        console.log(res)
        that.setData({
          videoShow:true,
          emojisShow: false,
          imageLink: false,
          videoSrc: res.tempFilePath
        })
      }
    })
  },
  //录音计时器
  recordingTimer: function () {
    let that = this;
    console.log(this.formatSeconds(2))
    //将计时器赋值给setInter
    that.data.setInter = setInterval(()=>{
        let time = that.data.recordingTime + 1;
        let now = that.formatSeconds(time);
        that.setData({
          recordingTime: time,
          voiceTime: now
        })
      }, 1000);
  },
  //清除录音
  clearVioce:function(){
    this.setData({
      voicePlay:0,
      voiceTime:'00:00',
      recordingTime:0
    })
  },
  //录音事件
  voiceStart(){
    console.log(this.data.voicePlay)
    let me = this;
    // const recorderManager = wx.getRecorderManager()
    // const innerAudioContext = wx.createInnerAudioContext()
    if (this.data.voicePlay==0){//未开始录音
      this.setData({
        voicePlay: 1
      })
      const options = {
        duration: 120000,//指定录音的时长，单位 ms
        sampleRate: 16000,//采样率
        numberOfChannels: 1,//录音通道数
        encodeBitRate: 96000,//编码码率
        format: 'mp3',//音频格式，有效值 aac/mp3
        frameSize: 50,//指定帧大小，单位 KB
      }
      //开始录音计时   
      me.recordingTimer();
      me.data.vioceManager.start(options)
      me.data.vioceManager.onStart(() => {
        console.log('开始录音')
      })
      me.data.vioceManager.onError((res) => {
        console.log(res);
      })
    }else if(this.data.voicePlay == 1){//停止录音
      console.log('停止录音')
      this.setData({
        voicePlay: 2
      })
      //停止录音计时
      clearInterval(this.data.setInter)
      me.data.vioceManager.stop();
      me.data.vioceManager.onStop((res) => {
        console.log('recorder stop', res)
        me.data.voiceFilePath = res.tempFilePath
      })
    }else if(this.data.voicePlay == 2){//播放录音
      console.log(me.data.voiceControl)
      me.data.voiceControl.autoplay = true;
      me.data.voiceControl.src = me.data.voiceFilePath;
      me.data.voiceControl.play();
      me.data.voiceControl.onPlay(() => {
        console.log('开始播放')
      })
      me.data.voiceControl.onError((res) => {
        console.log(res.errMsg)
        console.log(res.errCode)
      })
      this.setData({
        voicePlay: 3
      })
      //监听播放结束
      me.data.voiceControl.onEnded((res)=>{
        console.log('播放结束')
        me.setData({
          voicePlay: 2
        })
      })
      console.log('开始播放')
    }else{//
      me.data.voiceControl.stop();
      me.data.voiceControl.onStop((res) => {
        console.log('停止播放!');
      })
      this.setData({
        voicePlay: 2
      })
    }
    //错误回调
    this.data.vioceManager.onError((res) => {
      console.log(res);
    })  
  },
  //编辑框
  emojisC:function(){
    if (this.data.emojisShow==false){
      this.setData({
        emojisShow: true,
        editorShow: true,
      })
    }else{
      this.setData({
        emojisShow: false,
        editorShow: false,
      })
    }
  },
  // 获取焦点
  emojisH(e){
    let that=this;
    this.setData({
      emojisShow: false,
      editorShow:false,
      editorBlueGet:true,
    })
  },
  // 失去焦点
  editorBlur(){
    this.setData({
      editorBlueGet: false
    })
  },
  topicControl(){

  },
  //链接框控制
  linkC(){
    if(this.data.linkShow==true){
      this.setData({
        linkShow:false
      })
    }else{
      this.setData({
        linkShow: true,
        emojisShow:false,
        imageLink:false,
      })
    }
  },
  bindLinkName(e){
    console.log(e.detail.value)
    this.setData({
      linkSrc: e.detail.value
    })
  },
  //确定添加链接
  commitLink(){
    if (this.data.linkSrc != '') {
      let reg = /^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+).)+([A-Za-z0-9-~\/])+$/;
      if (!reg.test(this.data.linkSrc)) {
        wx.showToast({
          title: '请输入正确的链接！',
          icon: 'none',
          duration: 2000
        })
        return;
      }else{
        this.setData({
          linkContent:true,
          linkShow:false,
        })
      }
    }
  },
  //清除连接
  clearLink(){
    this.setData({
      linkContent: false,
      linkSrc:''
    })
  },
  //获取定位
  locationGet: function () {
    this.setData({
      locationText:'...'
    })
    let vm = this;
    wx.getSetting({
      success: (res) => {
        // res.authSetting['scope.userLocation'] == undefined    表示 初始化进入该页面
        // res.authSetting['scope.userLocation'] == false    表示 非初始化进入该页面,且未授权
        // res.authSetting['scope.userLocation'] == true    表示 地理位置授权
        // 拒绝授权后再次进入重新授权
        if (res.authSetting['scope.userLocation'] != undefined && res.authSetting['scope.userLocation'] != true) {
          // console.log('authSetting:status:拒绝授权后再次进入重新授权', res.authSetting['scope.userLocation'])
          wx.showModal({
            title: '',
            content: '需要获取你的地理位置，请确认授权',
            success: function (res) {
              if (res.cancel) {
                wx.showToast({
                  title: '拒绝授权',
                  icon: 'none'
                })
                setTimeout(() => {
                  wx.navigateBack()
                }, 1500)
              } else if (res.confirm) {
                wx.openSetting({
                  success: function (dataAu) {
                    // console.log('dataAu:success', dataAu)
                    if (dataAu.authSetting["scope.userLocation"] == true) {
                      //再次授权，调用wx.getLocation的API
                      vm.getLocation(dataAu)
                    } else {
                      wx.showToast({
                        title: '授权失败',
                        icon: 'none'
                      })
                      setTimeout(() => {
                        wx.navigateBack()
                      }, 1500)
                    }
                  }
                })
              }
            }
          })
        }
        // 初始化进入，未授权
        else if (res.authSetting['scope.userLocation'] == undefined) {
          // console.log('authSetting:status:初始化进入，未授权', res.authSetting['scope.userLocation'])
          //调用wx.getLocation的API
          vm.getLocation(res)
        }
        // 已授权
        else if (res.authSetting['scope.userLocation']) {
          // console.log('authSetting:status:已授权', res.authSetting['scope.userLocation'])
          //调用wx.getLocation的API
          vm.getLocation(res)
        }
      }
    })
  },
  // 微信获得经纬度
  getLocation: function (userLocation) {
    let vm = this
    wx.getLocation({
      type: "wgs84",
      success: function (res) {
        // console.log('getLocation:success', res)
        var latitude = res.latitude
        var longitude = res.longitude
        vm.getDaiShu(latitude, longitude)
      },
      fail: function (res) {
        // console.log('getLocation:fail', res)
        if (res.errMsg === 'getLocation:fail:auth denied') {
          wx.showToast({
            title: '拒绝授权',
            icon: 'none'
          })
          setTimeout(() => {
            wx.navigateBack()
          }, 1500)
          return
        }
        if (!userLocation || !userLocation.authSetting['scope.userLocation']) {
          vm.getUserLocation()
        } else if (userLocation.authSetting['scope.userLocation']) {
          wx.showModal({
            title: '',
            content: '请在系统设置中打开定位服务',
            showCancel: false,
            success: result => {
              if (result.confirm) {
                wx.navigateBack()
              }
            }
          })
        } else {
          wx.showToast({
            title: '授权失败',
            icon: 'none'
          })
          setTimeout(() => {
            wx.navigateBack()
          }, 1500)
        }
      }
    })
  },
  getDaiShu: function (i, j) {
    // console.log(i, j)
    let me=this;
    let getAddressUrl ='https://apis.map.qq.com/ws/geocoder/v1/?location=' + i + "," + j + "&key=SKJBZ-C5KW5-43HI6-QDES3-57ZSV-KWBEX"
    wx.request({
      url: getAddressUrl,
      success: function (result) {
        console.log(result.data.result.address )
        me.setData({
          locationText: result.data.result.address
        })
      }
    })
  },
  //选择图片
  chooseImg(){
    let me=this;
    wx.chooseImage({
      count: 9,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        // const tempFilePaths = res.tempFilePaths
        const images = me.data.imagesList.concat(res.tempFilePaths);
        me.setData({
          imagesUpload:true,
          imageLink:true,
          emojisShow: false,
          imagesList: images.length <= 9 ? images : images.slice(0, 9) 
        })
        console.log(me.data.imagesList)
      }
    })
  },
  clearImg(e){//清理当前上传图片
    let me=this;
    let inde=e.target.dataset.inde;
    let images = me.data.imagesList.splice(inde, 1);
    
    this.setData({
      imagesList: me.data.imagesList
    })
    // console.log(me.data.imagesList)
  },
  // 选择表情包
  chooseEmojis(e){ 
    let index = e.target.dataset.index;
    let that = this;
    if(index<10){
      index='0'+index;
    }
    that.editorCtx.insertImage({
      src: 'http://192.168.5.147:5001/emojis/' +index+'.gif',
      width: '20px',
      height: '20px',
    })
    this.setData({
      editorShow: true,
    })
  },

  // edior
  // 初始化编辑器
  onEditorReady() {
    let that=this;
    console.log(wx.createSelectorQuery().select('#editors'))
    wx.createSelectorQuery().select('#editors').context(function (res) {
      that.editorCtx = res.context    
      if (wx.getStorageSync("content")) { // 设置~历史值
        that.editorCtx.insertText(wx.getStorageSync("content")) // 注意：插入的是对象
      }

    }).exec();
  },
  //获取编辑器内容
  getContent(){
    let that =this;
    that.editorCtx.getContents({
      success:function(res){
        let article = res.html;
        WxParse.wxParse('article', 'html', article, that, 5);
        console.log(res)//内容html模式
        // that.editorCtx1.setContents({//设定内容
        //   html:res.html,
        //   success:function(res){
        //     console.log(res)
        //   }
        // })
      },
      fail:function(err){
        console.log(err)
      },
      complete:function(){
        //回调结束
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that=this;
    //录音初始化
    let innerAudioContext = wx.createInnerAudioContext();
    const recorderManager = wx.getRecorderManager()
    this.data.voiceControl = innerAudioContext;
    this.data.vioceManager = recorderManager;
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