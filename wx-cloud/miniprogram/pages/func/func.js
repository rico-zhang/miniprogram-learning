// pages/func/func.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  callFunc() {
    wx.cloud.callFunction({
      name: 'sum',
      data: {
        a: 10,
        b: 45
      }
    }).then(res => {
      console.log(res);
    })
  }
})