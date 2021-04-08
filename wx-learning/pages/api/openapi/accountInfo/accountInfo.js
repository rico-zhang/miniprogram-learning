// pages/api/openapi/accountInfo/accountInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  getAccountInfo() {
    const res = wx.getAccountInfoSync();
    console.log(res);
  }
})