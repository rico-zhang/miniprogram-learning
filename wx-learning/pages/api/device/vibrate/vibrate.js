// pages/api/device/vibrate/vibrate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  vibrateShort() {
    wx.vibrateShort({
      type:"medium",
      success: (res) => {
        console.log("vibrateShort-success", res);
      },
      fail(res){
        console.log("vibrateShort-fail",res);
      },
      complete(res){
        console.log("vibrateShort-complete",res);
      }
    })
  },
  vibrateLong() {
    wx.vibrateLong({
      success: (res) => {
        console.log("vibrateLong-success", res);
      },
      fail(res){
        console.log("vibrateLong-fail",res);
      },
      complete(res){
        console.log("vibrateLong-complete",res);
      }
    })
  }
})