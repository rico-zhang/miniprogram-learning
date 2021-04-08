// pages/api/device/scanCode/scanCode.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  scanCode1() {
    wx.scanCode({
      onlyFromCamera: true,
      success(res) {
        console.log("scanCode1-success", res);
      }
    })
  },
  scanCode2() {
    wx.scanCode({
      onlyFromCamera: false,
      success(res) {
        console.log("scanCode2-success", res);
      }
    })
  }
})