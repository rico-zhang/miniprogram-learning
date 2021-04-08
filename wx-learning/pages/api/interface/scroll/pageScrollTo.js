// pages/api/interface/scroll/scroll.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cangotop: true
  },
  onPageScroll(e) {
    // console.log("onPageScroll", e);
    if (e.scrollTop > 100) {
      //当页面距离顶部大于60px时，显示回到顶部按钮
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
    //向下兼容
    if (wx.pageScrollTo) {
      wx.pageScrollTo({
        duration: 300,
        // scrollTop: 0,
        selector:"#top"
      })
    } else {
      wx.showToast({
        title: '提示',
        content: '当前微信版本过低,请升级',
        duration: 2000
      })
    }

  }
})