// pages/api/interface/navigationBar/navigationBar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  setNavigationBar() {
    wx.showNavigationBarLoading();
    wx.setNavigationBarTitle({
      title: '用户正在输入...',
    });
    wx.setNavigationBarColor({
      backgroundColor: '#ffffff',
      frontColor: '#000000',
      animation: {
        duration: 1000,
        timingFunc:"easeInOut"
      }
    })
    setTimeout(() => {
      wx.hideNavigationBarLoading();
      wx.setNavigationBarTitle({
        title: '我的微信',
      });
    }, 3000);
  }
})