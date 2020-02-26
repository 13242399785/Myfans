//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    headerImg:'https://cdn.myfans.cc/177363_0_ly4zt3ivsa.jpg',
    userInfos: {
      imgUrl:'https://cdn.myfans.cc/177363_0_me25rmzcy8.jpg?imageView2/1/w/132/h/132',
      name:'  魔法少女和精神小伙的日常'
    },
    userInfo:{},
    currentId:1,
    serchShow:false,
    floorstatus:false,//回顶部
    barrageShow:false,//弹幕
    mokeShow:false,
    navList: [{ name: '全部', typeId: 1 }, { name: '活跃', typeId:2}],//nav列表
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    selected: 0,
    color: "#444",
    selectedColor: "#444",
    activea: 'activea',
    list: [{
      iconClass: 'icon-shuaxin',
      pagePath: "pages/index/index",
      text: "刷新"
    }, {
      iconClass: 'icon-add-fill boxShow',
        pagePath: "pages/post/post",
      text: "发布"
    }, {
      // iconClass: 'icon-guanzhu',
        pagePath: "pages/member/member",
      text: "我的"
    }],
    // swiper
    backgroundList:[
      { img: 'https://cdn.myfans.cc/177363_0_auw9bcycbh.jpg?imageView2/1/w/1200/h/300' },
      { img: 'https://cdn.myfans.cc/177363_0_kd7l30hbyk.jpg?imageView2/1/w/1200/h/300' },
      { img: 'https://cdn.myfans.cc/177363_0_auw9bcycbh.jpg?imageView2/1/w/1200/h/300' },
      { img:'https://cdn.myfans.cc/177363_0_auw9bcycbh.jpg?imageView2/1/w/1200/h/300'},
    ],
    backgroundList1: [
      { img: 'https://cdn.myfans.cc/177363_0_auw9bcycbh.jpg?imageView2/1/w/1200/h/300',title:'晒出圣诞气氛',url:'' },
      { img: 'https://cdn.myfans.cc/177363_0_kd7l30hbyk.jpg?imageView2/1/w/1200/h/300',title:'上班了吗',url:''},
    ],
    allList:[//nav
      { 'name': '全部内容', 'id': 0 },
      { 'name': '精华内容', 'id': 1 },
      { 'name': '晒出圣诞气氛', 'id': 2 },
      { 'name': '梦享商户', 'id': 3 },
      { 'name': '狼人杀组局热线', 'id':4 },
      { 'name': '约个热线', 'id':5 },
      { 'name': '牵狗绳和猫砂铲使用心得', 'id': 6 },
      { 'name': '健身狂魔', 'id': 7 },
      { 'name':'精致生活大爆炸','id':8}
    ],
    // huoyue
    briskList:[
      { name: "BEABALife", logo: "https://cdn.myfans.cc/177363_8243996_rw161hdnlj.jpg?imageView2/1/w/150/h/150", info: '凤凰传奇' },
      { name: "BEABALife", logo: "http://thirdwx.qlogo.cn/mmopen/vi_32/HCxk8sr0bnUwibmKd3ricMSx7FFfu10kQc5FI5VibOhNMciaRDicDJgJ6SIwlqdx9PYDo3cxFVguC02wXSlicMETZ5xg/132", info: '凤凰传奇' },
      { name: "BEABALife", logo: "https://cdn.myfans.cc/0mk4bjmF7uo1529912125.jpg?imageView2/1/w/132/h/132", info: '凤凰传奇' },
      { name: "BEABALife", logo: "https://cdn.myfans.cc/0mk4bjmF7uo1529912125.jpg?imageView2/1/w/132/h/132", info: '凤凰传奇' },
      { name: "BEABALife", logo: "https://cdn.myfans.cc/0mk4bjmF7uo1529912125.jpg?imageView2/1/w/132/h/132", info: '凤凰传奇' },
      { name: "BEABALife", logo: "https://cdn.myfans.cc/0mk4bjmF7uo1529912125.jpg?imageView2/1/w/132/h/132", info: '凤凰传奇' },
      { name: "BEABALife", logo: "https://cdn.myfans.cc/0mk4bjmF7uo1529912125.jpg?imageView2/1/w/132/h/132", info: '凤凰传奇' },
      { name: "BEABALife", logo: "https://cdn.myfans.cc/0mk4bjmF7uo1529912125.jpg?imageView2/1/w/132/h/132", info: '凤凰传奇' },
      { name: "BEABALife", logo: "https://cdn.myfans.cc/0mk4bjmF7uo1529912125.jpg?imageView2/1/w/132/h/132", info: '凤凰传奇' },
      { name: "BEABALife", logo: "https://cdn.myfans.cc/0mk4bjmF7uo1529912125.jpg?imageView2/1/w/132/h/132",info:'凤凰传奇'},
    ],
    showIcon:false,
    showActionsheet: false,
    groups: [
      { text: '收藏', value: 1 },
      { text: '生成图片', value: 2 },
      { text: '举报', value: 3 }
    ],
    dataList:[
      { name: '我是一个整体', logo: 'https://cdn.myfans.cc/177363_8243996_rw161hdnlj.jpg?imageView2/1/w/150/h/150', id: 0, time: '时间', lable: ['标签'], title: '这是标题', topic: '#话题标签#', content: '内容标签', type: 'weitie', img: [], zang: '6', review: '12', video: 'https://cdn.myfans.cc/177363mURn3D1576742312.mp4', recommend:'stick'},
      { name: '我是一个整体', logo: 'https://cdn.myfans.cc/177363_8243996_rw161hdnlj.jpg?imageView2/1/w/150/h/150', id: 1, time: '时间', lable: ['标签'], title: '这是标题', topic: '话题标签', content: '内容标签', type: 'weitie', img: ['https://cdn.myfans.cc/0mk4bjmF7uo1529912125.jpg?imageView2/1/w/132/h/132', 'https://cdn.myfans.cc/0mk4bjmF7uo1529912125.jpg?imageView2/1/w/132/h/132'], zang: '0', review: '12' },
      { name: '我是一个整体', logo: 'https://cdn.myfans.cc/177363_8243996_rw161hdnlj.jpg?imageView2/1/w/150/h/150', id: 2, time: '时间', lable: ['标签'], title: '这是标题', topic: '话题标签', content: '内容标签', type: 'weitie', img: ['https://cdn.myfans.cc/0mk4bjmF7uo1529912125.jpg?imageView2/1/w/132/h/132'], zang: '2', review: '12' },
      { name: '我是一个整体', logo: 'https://cdn.myfans.cc/177363_8243996_rw161hdnlj.jpg?imageView2/1/w/150/h/150', id: 3, time: '时间', lable: ['标签'], title: '这是标题', topic: '话题标签', content: '内容标签', type: 'weitie', img: ['https://cdn.myfans.cc/0mk4bjmF7uo1529912125.jpg?imageView2/1/w/132/h/132', 'https://cdn.myfans.cc/0mk4bjmF7uo1529912125.jpg?imageView2/1/w/132/h/132'], zang: '6', review: '12',music:{
        name: '歌手名称', title: '歌名', src:'https://nc01-sycdn.kuwo.cn/d99e80bee42c81eeccbbcb6993833950/5e02fb8d/resource/n2/95/83/2798960634.mp3'
      } },
      { name: '我是一个整体', logo: 'https://cdn.myfans.cc/177363_8243996_rw161hdnlj.jpg?imageView2/1/w/150/h/150', id: 4, time: '时间', lable: ['标签'], title: '这是标题', topic: '话题标签', content: '内容标签', type: 'weitie', img: ['https://cdn.myfans.cc/0mk4bjmF7uo1529912125.jpg?imageView2/1/w/132/h/132', 'https://cdn.myfans.cc/0mk4bjmF7uo1529912125.jpg?imageView2/1/w/132/h/132', 'https://cdn.myfans.cc/0mk4bjmF7uo1529912125.jpg?imageView2/1/w/132/h/132', 'https://cdn.myfans.cc/0mk4bjmF7uo1529912125.jpg?imageView2/1/w/132/h/132'], zang: '6', review: '0' },
    ],
    commentShow:false,//评论框
    dmDatas: [{
      "id": 1022,
      "sex": 1,
      "content": "年芳27湖南人氏",
    }, {
      "id": 1103,
      "sex": 1,
      "content": "我是广东的妹子，喜欢旅游，性感比较开朗，想找个顾家，宠老婆，又东浪漫的男朋有，希望在着遇到有缘人～",
    }, {
      "id": 1005,
      "sex": 0,
      "content": "本人男，30岁了，北京人，有车有房，想找个漂亮的四川妹子，聊聊看",
    }, {
      "id": 1214,
      "sex": 1,
      "content": "湖北人 在北京工作。今年27 我是你的前女友 也曾拯救过地球 身高刚好169 快来找我复合吧。我不是颜控 喜欢有才华 有爱心 幽默的男生，身高175以上。理想型 李诞 一样的诗人\uD83D\uDC7B",
    }, {
      "id": 1207,
      "sex": 1,
      "content": "我今年25岁，是来自东北的妹子。平时喜欢美食、看书，想找一个178cm以上，白白净净的男生。",
    }],//弹幕
    dmData:[]
  },
  // 处理弹幕位置
  setDM: function () {
    // 处理弹幕参数
    const dmArr = [];
    const _b = this.data.dmDatas;
    for (let i = 0; i < _b.length; i++) {
      const time = Math.floor(Math.random() * 10);
      const _time = time < 6 ? 6 + i : time + i;
      console.log(time)
      const top = Math.floor(Math.random() * 80) + 2;
      const _p = {
        id: _b[i].id,
        sex: _b[i].sex,
        content: _b[i].content,
        // zanNumber: _b[i].zanNumber,
        top,
        time: _time,
      };
      dmArr.push(_p);
    }
    this.setData({
      dmData: dmArr
    });
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  //跳转详情
  goDetail(){
    wx.navigateTo({
      url: '../detail/detail'
    })
  },
  // onPullDownRefresh: function () { 
  //   wx.startPullDownRefresh()
  //   console.log('下拉');
  //   setTimeout(function(){
  //     wx.hideNavigationBarLoading(); //完成停止加载图标
  //     wx.stopPullDownRefresh();
  //   },2000)
    
  // },//监听下拉
  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
  },
  musicControl(){
    console.log(this.audioCtx)
    this.audioCtx.play()
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  switchTab(e) {
    const data = e.currentTarget.dataset
    const url = '../' + data.path;
    console.log(data.path);
    if (data.path =='pages/post/post'){
      wx.navigateTo({
        url: '../' + url
      })
    }else{
      wx.redirectTo({
        url: '../' + url
      })
    }
    this.setData({
      selected: data.index
    })
  },
  //跳转打卡
  goCheckin(){
    wx.navigateTo({
      url: '../checkin/checkin'
    })
  },
  //跳转邀请
  goInvite(){
    wx.navigateTo({
      url: '../invite/invite'
    })
  },
  //点击导航事件
  handleTap: function (e) {
    let id = e.currentTarget.id;
    if (id) {
      this.setData({
        currentId: id
      })
    }
  },
  //点击显示更多标签
  controlNavIcon() {
    let me=this;
    if (this.data.showIcon==false){
      this.setData({
        showIcon: true
      }) 
    }else{
      this.setData({
        showIcon: false
      })
    }
  },
  closeMoke: function () {
    this.setData({
      showActionsheet: false
    })
  },
  shwoMoke(e){
    console.log(e)
    if(e){
      this.setData({
        showActionsheet: true
      })
    }
  },
  //选择事件
  btnClick(e) {
    console.log(e)
    this.closeMoke()
  },
  //搜索
  souShow(){
    this.setData({
      serchShow: true
    })
  },
  cancelSou(){
    this.setData({
      serchShow: false
    })
  },
  //弹幕
  barrageC(){
    this.setDM();
    if (this.data.barrageShow==true){
      this.setData({
        barrageShow: false
      })
    }else{
      this.setData({
        barrageShow: true
      })
    }
  },
  //评论框
  commentC(){
    if (this.data.commentShow == true) {
      this.setData({
        commentShow: false
      })
    } else {
      this.setData({
        commentShow: true
      })
    }
  },
  //回到顶部
  onPageScroll: function (e) {
    if (e.scrollTop > 100) {
      this.setData({
        floorstatus: true
      });
    } else {
      this.setData({
        floorstatus: false
      });
    }
  },
  gotTop(){
    if (wx.pageScrollTo) {
      wx.pageScrollTo({
        scrollTop: 0
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能！'
      })
    }
  },
  // 弹出层
  mokeShowL(){
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
  nones(){}
})
