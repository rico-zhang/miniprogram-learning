// pages/api/interface/scroll/scrollViewContent.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cangotop: true,
    topNum: 0
  },
  onScrollViewScroll(e) {
    console.log(this.data.topNum);
    if (e.detail.scrollTop > 100) {
      this.setData({
        cangotop: true
      })
    } else {
      this.setData({
        cangotop: false
      })
    }
  },
  goTop() {
    this.setData({
      topNum: 0
    })
  },
})