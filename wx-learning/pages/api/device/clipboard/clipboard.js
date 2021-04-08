// pages/api/device/clipboard/clipboard.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, iste ullam dolorem ipsam repudiandae sed sapiente excepturi amet placeat deserunt?'
  },
  copyTBL() {
    let that = this;
    wx.setClipboardData({
      data: this.data.detail,
      success(res) {
        console.log("setClipboardData-success", res);
        // wx.showModal({
        //   title: '提示',
        //   content: '复制成功',
        //   showCancel: false
        // })
      }
    })
  },
  show() {
    wx.getClipboardData({
      success: (res) => {
        console.log("getClipboardData-success", res);
      },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})