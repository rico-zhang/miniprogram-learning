// pages/api/openapi/navigateToMiniPrograme/navigateToMiniPrograme.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  navigateToMiniProgram() {
    wx.navigateToMiniProgram({
      appId: 'wx3efb95b9c5579418',
      path: 'pages/index/index?id=123',
      extraData: {
        foo: 'bar'
      },
      success(res) {
        console.log("navigateToMiniProgram-success", res);
      },
      fail(res) {
        console.log("navigateToMiniProgram-fail", res);
      }
    })
  }
})