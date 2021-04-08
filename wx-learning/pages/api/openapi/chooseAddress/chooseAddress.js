// pages/api/openapi/chooseAddress/chooseAddress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  chooseAddress() {

    wx.chooseAddress({
      success: (res) => {
        console.log("chooseAddress-success", res);
      },
    })
  }
})