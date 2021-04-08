// pages/api/device/phone/makePhoneCall.js
Page({

  phoneNumber: '',
  /**
   * 页面的初始数据
   */
  data: {

  },
  getPhoenNumber(e) {
    this.phoneNumber = e.detail.value;
  },
  makePhoneCall() {
    wx.makePhoneCall({
      phoneNumber: this.phoneNumber,
      success(res) {
        console.log("makePhoneCall-success", res);
      },
      fail(res) {
        console.log("makePhoneCall-fail", res);
      },
      complete(res) {
        console.log("makePhoneCall-complete", res);
      }
    })
  }
})