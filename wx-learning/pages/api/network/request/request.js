// pages/api/network/request/request.js
Page({
  requestUrl: 'http://www.baidu.com/s?wd=苹果',
  requestTask: null,
  /**
   * 页面的初始数据
   */
  data: {

  },

  requestOpt() {
    this.requestTask = wx.request({
      url: this.requestUrl,
      data: {},
      header: {
        'content-type': 'application/json'
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success(res) {
        console.log('[success]', res);
      },
      fail(res) {
        console.log('[fail]', res);
      },
      complete(res) {
        console.log('[complete]', res);
      }
    });
  },

  requestAbout() {
    console.log(this.requestTask);
    this.requestTask.abort();
  }
})