// pages/api/device/batteryInfo/batteryInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  getBatteryInfoSync() {
    let res = wx.getBatteryInfoSync();
    console.log("getBatteryInfoSync", res);
  },
  getBatteryInfo() {
    wx.getBatteryInfo({
      success: (res) => {
        console.log("getbatteryInfo-success", res);
      },
    })
  }
})