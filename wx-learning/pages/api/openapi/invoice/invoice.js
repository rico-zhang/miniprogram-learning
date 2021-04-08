// pages/api/openapi/invoice/invoice.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  chooseInvoiceTitle() {
    wx.chooseInvoiceTitle({
      success: (res) => {
        console.log("chooseInvoiceTitle-success", res);
      },
      fail(res) {
        console.log("chooseInvoiceTitle-fail", res);
      }
    })
  },
  chooseInvoice() {
    wx.chooseInvoice({
      success(res) {
        console.log("choooseInvoice-success", res);
      },
      fail(res) {
        console.log("chooseInvoice-fail", res);
      }
    })
  }
})