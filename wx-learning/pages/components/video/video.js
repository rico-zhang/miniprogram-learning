// pages/video/video.js
function getRandomColor() {
  let min = 0,
    max = parseInt("ffffff", 16),
    color = Math.floor(Math.random() * max) + min;
  return "#" + color.toString(16);
}
Page({
  inputValue: '',
  /**
   * 页面的初始数据
   */
  data: {
    src: "",
    danmuList: [{
        text: '这是我看的最好看的片子',
        color: '#f00',
        time: 1
      },
      {
        text: '感觉拍的不错',
        color: '#0f0',
        time: 3
      }
    ]
  },

  getVideo() {
    let that = this;
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: ['front', 'back'],
      success(res) {
        console.log(res);
        that.setData({
          src: res.tempFilePath
        });
      }
    })
  },

  inputBlur(event) {
    this.inputValue = event.detail.value;
  },
  sendDanmu() {
    this.videoContext.sendDanmu({
      text:this.inputValue,
      color:getRandomColor()
    });
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
    this.videoContext = wx.createVideoContext('muvideo');
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