// pages/api/device/compass/compassdetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    direction: '--',
    angle: '--',
    rotate: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.startCompass({
      success: (res) => {
        console.log("startCompass-success", res);
      },
    })
    wx.onCompassChange((res) => {
      console.log("onCompassChange", res);
      let directions = res.direction.toFixed(2);
      let radios = res.direction.toFixed(0);
      that.setData({
        angle: directions,
        rotate: 360 - radios,
        direction: this.check(radios)
      });
    });
    //判断有没有罗盘
    setTimeout(() => {
      if (that.data.direction == '--' && that.data.angle == '--') {
        wx.showToast({
          title: '没有电子罗盘',
          icon: 'error',
          duration: 3000,
          mask: true
        })
      }
    }, 3000);
  },
  check(i) {
    if (15 <= i && i <= 75) {
      return '东北'
    } else if (75 < i && i < 105) {
      return '正东'
    } else if (105 <= i && i <= 165) {
      return '东南'
    } else if (165 < i && i < 195) {
      return '正南'
    } else if (195 <= i && i <= 255) {
      return '西南'
    } else if (255 < i && i < 285) {
      return '正西'
    } else if (285 <= i && i <= 345) {
      return '西北'
    } else {
      return '正北'
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '我现在在面向' + this.data.direction + "方向上,点我使用迷你指南针为您指引方向",
      path: '/pages/api/device/compass/compassdetail',
    }
  }
})