// pages/api/device/motionChange/motionChange.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    screen: '正面',
    alpha: 0,
    beta: 0,
    gamma: 0
  },
  startDeviceMotionListening() {
    wx.startDeviceMotionListening({
      success(res) {
        console.log("startDeviceMontionListening-success", res);
      }
    });
  },
  stopDeviceMotionListening() {
    wx.stopDeviceMotionListening({
      success(res) {
        console.log("stopDeviceMotionListening-success", res);
      }
    });
  },
  onLoad() {
    let that = this;
    wx.onDeviceMotionChange((res) => {
      let alpha = parseFloat(res.alpha);
      let beta = parseFloat(res.beta);
      let gamma = parseFloat(res.gamma);
      if (alpha > 45 && alpha < 136) {
        screen = '左侧';
      } else if (alpha > 225 && alpha < 316) {
        screen = '右侧'
      } else if (alpha > 135 && alpha < 226) {
        screen = '反面'
      } else
        screen = '正面';

      that.setData({
        alpha,
        screen,
        beta,
        gamma
      })
    })

  }
})