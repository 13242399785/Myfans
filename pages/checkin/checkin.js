Page({
  /**
   * 页面的初始数据
   */ 
  data: {
    curIndex:0,
    year: 0,
    month: 0,
    date: ['日', '一', '二', '三', '四', '五', '六'],
    dateArr: [],
    isToday: 0,
    isTodayWeek: false,
    todayIndex: 0,
    nowText: '今天还没有打卡，快去打卡吧～',
    rankingList:[
      { name: '名称', img:'http://thirdwx.qlogo.cn/mmopen/vi_32/PQdDfb4ibeNXJUpa9kW0avFTar23odlORpGbiapibdoQk8PQ1G7qoXMuPExlgXI0eYKF8d05MtqJrBJkvJsibb2PMQ/132',rank:1,clockIn:'15'},
      { name: '名称', img: 'http://thirdwx.qlogo.cn/mmopen/vi_32/PQdDfb4ibeNXJUpa9kW0avFTar23odlORpGbiapibdoQk8PQ1G7qoXMuPExlgXI0eYKF8d05MtqJrBJkvJsibb2PMQ/132', rank: 1, clockIn: '10' },
      { name: '名称', img: 'http://thirdwx.qlogo.cn/mmopen/vi_32/PQdDfb4ibeNXJUpa9kW0avFTar23odlORpGbiapibdoQk8PQ1G7qoXMuPExlgXI0eYKF8d05MtqJrBJkvJsibb2PMQ/132', rank: 1, clockIn: '9' },
      { name: '名称', img: 'https://cdn.myfans.cc/177363_9594201_z7maikp8vt.jpg?imageView2/1/w/150/h/150', rank: 1, clockIn: '8' },
      { name: '名称', img: 'http://thirdwx.qlogo.cn/mmopen/vi_32/PQdDfb4ibeNXJUpa9kW0avFTar23odlORpGbiapibdoQk8PQ1G7qoXMuPExlgXI0eYKF8d05MtqJrBJkvJsibb2PMQ/132', rank: 1, clockIn: '7' },
      { name: '名称', img: 'http://thirdwx.qlogo.cn/mmopen/vi_32/PQdDfb4ibeNXJUpa9kW0avFTar23odlORpGbiapibdoQk8PQ1G7qoXMuPExlgXI0eYKF8d05MtqJrBJkvJsibb2PMQ/132', rank: 1, clockIn: '6' },
      { name: '名称', img: 'http://thirdwx.qlogo.cn/mmopen/vi_32/PQdDfb4ibeNXJUpa9kW0avFTar23odlORpGbiapibdoQk8PQ1G7qoXMuPExlgXI0eYKF8d05MtqJrBJkvJsibb2PMQ/132', rank: 1, clockIn: '5' },
      { name: '名称', img: 'http://thirdwx.qlogo.cn/mmopen/vi_32/PQdDfb4ibeNXJUpa9kW0avFTar23odlORpGbiapibdoQk8PQ1G7qoXMuPExlgXI0eYKF8d05MtqJrBJkvJsibb2PMQ/132', rank: 1, clockIn: '3' },
      { name: '名称', img: 'http://thirdwx.qlogo.cn/mmopen/vi_32/PQdDfb4ibeNXJUpa9kW0avFTar23odlORpGbiapibdoQk8PQ1G7qoXMuPExlgXI0eYKF8d05MtqJrBJkvJsibb2PMQ/132', rank: 1, clockIn: '2' },
      { name: '名称', img: 'http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83erf2Td9Ue9iaXqxcOFtvIGa38TyViag5xTnibP2woh4Y0Y5UE1R2RRjCicsgiaC8sUUuNnOVxedeagROQQ/132', rank: 1, clockIn: '1' },
    ],
    currentAdd:0,//当前累计榜
  },
  addTab(e){
    this.setData({
      currentAdd: e.currentTarget.dataset.index,
      rankingList: this.data.rankingList.reverse()
    })
  },
  checkinTab(e){
    this.setData({
      curIndex: e.currentTarget.dataset.index
    })
  },
  dateInit: function (setYear, setMonth) {
    //全部时间的月份都是按0~11基准，显示月份才+1
    let dateArr = [];                       //需要遍历的日历数组数据
    let arrLen = 0;                         //dateArr的数组长度
    let now = setYear ? new Date(setYear, setMonth) : new Date();
    let year = setYear || now.getFullYear();
    let nextYear = 0;
    let month = setMonth || now.getMonth();                 //没有+1方便后面计算当月总天数
    let nextMonth = (month + 1) > 11 ? 1 : (month + 1);
    let startWeek = new Date(year + ',' + (month + 1) + ',' + 1).getDay();                          //目标月1号对应的星期
    let dayNums = new Date(year, nextMonth, 0).getDate();               //获取目标月有多少天
    let obj = {};
    let num = 0;
    if (month + 1 > 11) {
      nextYear = year + 1;
      dayNums = new Date(nextYear, nextMonth, 0).getDate();
    }
    arrLen = startWeek + dayNums;
    for (let i = 0; i < arrLen; i++) {
      if (i >= startWeek) {
        num = i - startWeek + 1;
        obj = {
          isToday: '' + year + (month + 1) + num,
          dateNum: num,
          weight: 5
        }
      } else {
        obj = {};
      }
      dateArr[i] = obj;
    }
    this.setData({
      dateArr: dateArr
    })
    let nowDate = new Date();
    let nowYear = nowDate.getFullYear();
    let nowMonth = nowDate.getMonth() + 1;
    let nowWeek = nowDate.getDay();
    let getYear = setYear || nowYear;
    let getMonth = setMonth >= 0 ? (setMonth + 1) : nowMonth;
    if (nowYear == getYear && nowMonth == getMonth) {
      this.setData({
        isTodayWeek: true,
        todayIndex: nowWeek
      })
    } else {
      this.setData({
        isTodayWeek: false,
        todayIndex: -1
      })
    }
  },
  /**
   * 上月切换
   */
  lastMonth: function () {
    //全部时间的月份都是按0~11基准，显示月份才+1
    let year = this.data.month - 2 < 0 ? this.data.year - 1 : this.data.year;
    let month = this.data.month - 2 < 0 ? 11 : this.data.month - 2;
    this.setData({
      year: year,
      month: (month + 1)
    })
    this.dateInit(year, month);
  },
  /**
   * 下月切换
   */
  nextMonth: function () {
    //全部时间的月份都是按0~11基准，显示月份才+1
    let year = this.data.month > 11 ? this.data.year + 1 : this.data.year;
    let month = this.data.month > 11 ? 0 : this.data.month;
    this.setData({
      year: year,
      month: (month + 1)
    })
    this.dateInit(year, month);
  },
  /**
   * 点击当前日期
  */
  nowLook(e){
    let y = e.currentTarget.dataset.year,
        m = e.currentTarget.dataset.month,
        d = e.currentTarget.dataset.datenum;
    console.log(y + '-' + m + '-' + d)
  },
  /**
   * 返回首页
   */
  goHome(){
    wx.redirectTo({
      url: '../index/index'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    this.dateInit();
    this.setData({
      year: year,
      month: month,
      isToday: '' + year + month + now.getDate()
    })
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