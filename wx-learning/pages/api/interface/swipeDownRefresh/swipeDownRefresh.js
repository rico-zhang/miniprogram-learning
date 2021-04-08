// pages/api/interface/swipeDownRefresh/swipeDownRefresh.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  startDrop() {
    wx.startPullDownRefresh({
      success: (res) => {
        console.log("startPullDownRefresh-success", res);
      },
    })
  },
  stopDrop() {
    wx.stopPullDownRefresh({
      success: (res) => {
        console.log("stopPullDownRefresh-success", res);
      },
    })
  },
  onPullDownRefresh() {
   //下拉刷新  处理相关逻辑 然后调用stopPullDownRefresh关闭刷新
   setTimeout(() => {
     wx.stopPullDownRefresh();
   }, 3000);
  }
})