// pages/api/font/loadFontFace/loadFontFace.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loaded: false,
    fontFamaly: 'BitStream Vera Serif Bold'
  },
  loadFontFace() {
    let that = this;
    wx.loadFontFace({
      family: this.data.fontFamaly,
      source: 'url("https://sungd.github.io/Pacifico.ttf")',
      success(res) {
        console.log("success", res);
        that.setData({
          loaded: true
        });
      },
      fail(res) {
        console.log("fail", res);
      },
      complete(res) {
        console.log("complete", res);
      }
    })
  },

})