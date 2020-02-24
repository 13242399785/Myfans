// component/comment.js
var WxParse = require('../../wxParse/wxParse.js');
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    showCancel: {
      type: Boolean,
      value: true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    commentShow:true,
    imagesUpload:false,//上传图片
    imagesList:[],//图片列表
    editorShow: false,//编辑器可编辑状态
    emojisList: new Array(100),//创建表情包
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //图片控制
    imgShow(){
      this.setData({
        imagesUpload:true
      })
    },
    emojisH(){
      console.log('huoqu')
    },
    // edior
    // 初始化编辑器
    onEditorReady() {
      // let that = this;
      // console.log(wx.createSelectorQuery().select('#editors1').context)
      // wx.createSelectorQuery().select('#editors1').context(function (res) {
      //   // console.log(res)
      //   that.editorCtx = res.context
      //   if (wx.getStorageSync("content")) { // 设置~历史值
      //     that.editorCtx.insertText(wx.getStorageSync("content")) // 注意：插入的是对象
      //   }
      // }).exec();
    },
    //获取编辑器内容
    getContent() {
      let that = this;
      that.editorCtx.getContents({
        success: function (res) {
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
        fail: function (err) {
          console.log(err)
        },
        complete: function () {
          //回调结束
        }
      })
    },
    // 选择表情包
    chooseEmojis(e) {
      let index = e.target.dataset.index;
      let that = this;
      if (index < 10) {
        index = '0' + index;
      }
      that.editorCtx.insertImage({
        src: '../../wxParse/emojis/' + index + '.gif',
        width: '20px',
        height: '20px',
      })
    },
    //评论框控制
    commentC() {
      if (this.data.showCancel == true) {
        this.setData({
          showCancel: false
        })
      } else {
        this.setData({
          showCancel: true
        })
      }
    },
    //图片选择
    chooseImg() {
      let me = this;
      wx.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success(res) {
          // tempFilePath可以作为img标签的src属性显示图片
          // const tempFilePaths = res.tempFilePaths
          const images = me.data.imagesList.concat(res.tempFilePaths);
          me.setData({
            imagesUpload: true,
            emojisShow: false,
            imagesList: images.length <= 1 ? images : images.slice(0, 1)
          })
          console.log(me.data.imagesList)
        }
      })
    },
    clearImg(e) {//清理当前上传图片
      let me = this;
      let inde = e.target.dataset.inde;
      let images = me.data.imagesList.splice(inde, 1);

      this.setData({
        imagesList: me.data.imagesList
      })
      // console.log(me.data.imagesList)
    },
    
  }
})
