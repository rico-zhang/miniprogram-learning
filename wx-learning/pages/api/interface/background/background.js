// pages/api/interface/background/background.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  setBackgroundColor() {
    //注意在app.json 中设置enablePullDownRefresh为true 才可以下拉显示背景
    wx.setBackgroundColor({
      backgroundColor: '#ff0000',
    })
  },
  setBackgroundTextStyle() {
    //注意在app.json 中设置enablePullDownRefresh为true 才可以下拉显示背景
    wx.setBackgroundTextStyle({
      textStyle: 'light',
    })
  }
})