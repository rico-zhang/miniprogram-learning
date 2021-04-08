// pages/api/interface/windowSize/windowSize.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },




  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.onWindowResize((res) => {
      console.log("onWindowResize", res);
    })
  },

})