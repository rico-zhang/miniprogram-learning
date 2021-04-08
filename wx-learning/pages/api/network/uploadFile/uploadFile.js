// pages/api/network/uploadFile/uploadFile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  imgChoose() {
    wx.chooseImage({
      count: 0,
      success(res) {
        const tempFilePaths = res.tempFilePaths;
        console.log(tempFilePaths);
        const uploadFileTask = wx.uploadFile({
          url: 'http://www.xxx/com',//此处需要真实的url地址
          filePath: tempFilePaths[0],
          name: 'pic1',
          timeout:1000,
          success(res) {
            console.log("[success]", res)
          },
          fail(res) {
            console.log("[fail]", res);
          },
          complete(res) {
            console.log("[complete]", res);
          }
        });
        console.log(uploadFileTask);
      }
    });

  }
})