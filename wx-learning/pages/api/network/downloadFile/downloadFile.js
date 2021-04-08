// pages/api/network/downloadFile/downloadFile.js
Page({
  downloadFileUrl: 'https://img.ivsky.com/img/tupian/t/202005/25/hongpingguo-001.jpg',
  downloadFileTask: null,
  /**
   * 页面的初始数据
   */
  data: {
    src: '',
    percent: '0'
  },
  downloadOpt() {
    let that = this;
    this.downloadFileTask = wx.downloadFile({
      url: this.downloadFileUrl,
      success(res) {
        console.log('[success]', res);
        if (res.statusCode == 200) {
          that.setData({
            src: res.tempFilePath
          });
        }
      },
      fail(res) {
        console.log('[fail]', res);
      },
      complete(res) {
        console.log('[complete]', res);
      }
    })
    this.downloadFileTask.onProgressUpdate(res => {
      console.log(res);
      that.setData({
        percent: res.progress
      });
    })
  },
  downloadAbort() {
    this.downloadFileTask.abort();
  }
})