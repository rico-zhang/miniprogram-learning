// pages/api/audio/recordManager/recordManager.js
Page({
  tempFileVoice: '',
  /**
   * 页面的初始数据
   */
  data: {

  },
  recordVoice() {
    wx.startRecord({
      success: (res) => {
        console.log("start success", res);
        this.tempFileVoice = res.tempFilePath;
      },
      fail: (res) => {
        console.log("start fail", res);
      }
    });
    setTimeout(() => {
      wx.stopRecord({
        success: (res) => {
          console.log("stop success", res);
          this.tempFileVoice = res.tempFilePath;
        },
        fail: (res) => {
          console.log("stop fail", res);
        }
      })
    }, 5000);
  },
  playVoice() {
    wx.playVoice({
      filePath: this.tempFileVoice,
    })
  }

})