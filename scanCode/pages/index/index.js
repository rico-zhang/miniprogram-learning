// pages/index/index.js

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
    scanResult: {
      isShow: false,
      type: "",
      text: "",
      msg: ""
    }
  },
  onScan() {
    const that = this;
    wx.scanCode({
      onlyFromCamera: true,
      success(res) {
        console.log("scanCode-sucess", res);
        let msg = '';
        if (res.scanType == "WX_CODE" && res.result == "") {
          msg = "宝宝心里苦，但是宝宝不说"
        }
        that.setData({
          scanResult: {
            isShow: true,
            type: scanType[res.scanType],
            text: res.result,
            msg
          }
        });
        if (that.data.scanResult.text !== "") {
          wx.getStorage({
            key: 'scanLogs',
            complete(res) {
              console.log("getStorage-complete", res);
              let scanLogs = res.data || [];
              that.data.scanResult.date = Date.now();
              scanLogs.unshift(that.data.scanResult);
              wx.setStorageSync('scanLogs', scanLogs);
            }
          })
        }
      }
    })
  },
  onCopy(){
    //发送内容到剪切板
    wx.setClipboardData({
      data: this.data.scanResult.text,
      success(res){
        console.log("setClipboardData-success",res);
        wx.showToast({
          title: '复制成功',
          icon:"success",
          duration:2000
        })
      }
    })
  }
})