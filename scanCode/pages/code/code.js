// pages/code/code.js

//获取应用实例
const app = getApp();

// 扫描类型
const scanType = {
  'WX_CODE': '微信小程序',
  'QR_CODE': '二维码',
  'EAN_8': '条形码（EAN_8）',
  'EAN_13': '条形码（EAN_13）',
  'UPC_A': '条形码（UPC_A）',
  'UPC_E': '条形码（UPC_E）',
  'CODE_25': '条形码（CODE_25）',
  'CODE_39': '条形码（CODE_39）',
  'CODE_128': '条形码（CODE_128）',
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    codeText: '',
    imgTempFilePath: ''
  },
  bindInput(e) {
    this.setData({
      codeText: e.detail.value
    })
  },
  onGenerate() {
    let that = this;
    wx.downloadFile({
      url: `https://api.qrserver.com/v1/create-qr-code/?data=${this.data.codeText}`,
      success(res) {
        console.log("downloadFile-success", res);
        that.setData({
          imgTempFilePath: res.tempFilePath
        })
      },
      fail(res) {
        console.log("downloadFile-fail", res);
      }
    })
  }
})