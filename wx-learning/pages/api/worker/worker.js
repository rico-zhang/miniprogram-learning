// pages/api/worker/worker.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  tap() {
    const worker = wx.createWorker('/works/myWork.js');
    worker.postMessage({
      from: 'main',
      message: 'i am main worker'
    })
    worker.onMessage(res => {
      console.log("main worker log----",res);
    })
  }
  

})