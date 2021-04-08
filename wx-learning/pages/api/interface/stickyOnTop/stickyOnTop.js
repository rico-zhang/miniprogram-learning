// pages/api/interface/stickyOnTop/stickyOnTop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  setTopBarText() {
    wx.setTopBarText({
      text: '小程序置顶显示',
      success(res) {
        console.log("setTopBarText-success", res);
      },
      fail(res) {
        console.log("setTopBarText-fail", res);
      }
    })
  }
})