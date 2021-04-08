// pages/api/openapi/dataReport/dataReport.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  reportMonitor() {
    //测试没有效果
    wx.reportMonitor('0', 10);
    console.log("数据上报成功");
  }
})