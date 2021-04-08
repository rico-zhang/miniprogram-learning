// pages/api/openapi/setting/setting.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  openSetting() {
    wx.openSetting({
      withSubscriptions: true,
      success(res) {
        console.log("openSetting-success", res);
      },
      fail(res) {
        console.log("openSetting-fail", res);
      },
      complete(res) {
        console.log("openSetting-complete", res);
      }
    })
  },

  getSetting() {
    wx.getSetting({
      withSubscriptions: true,
      success(res) {
        console.log("getSetting-success", res);
      }
    })
  }
})