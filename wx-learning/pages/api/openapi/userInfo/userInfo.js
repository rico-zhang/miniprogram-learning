// pages/api/openapi/userInfo/userInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  getUserProfile() {
    wx.getUserProfile({
      lang: 'zh_ch',
      desc: '完善信息',
      complete(res) {
        console.log("getUserProfile-complete", res);
      }
    })
  },

  getUserInfo() {
    wx.getUserInfo({
      lang: 'en',
      withCredentials: true,
      success(res) {
        console.log("getUserInfo-success", res);
      },
      fail(res) {
        console.log("getUserInfo-fail", res);
      },
      complete(res) {
        console.log("getuserInfo-complete", res);
      }
    })
  }

})