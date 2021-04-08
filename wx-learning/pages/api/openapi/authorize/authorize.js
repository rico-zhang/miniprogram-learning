// pages/api/openapi/authorize/authorize.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  authorize() {
    // 可以通过 wx.getSetting 先查询一下用户是否授权了 "scope.record" 这个 scope
    wx.getSetting({
      success(res) {
        console.log("getSetting-success",res);
        if (!res.authSetting['scope.record']) {
          wx.authorize({
            scope: 'scope.record',
            success(res) {
              // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
              console.log("authorize-success",res);
              wx.startRecord()
            }
          })
        }
      }
    })
  }
})