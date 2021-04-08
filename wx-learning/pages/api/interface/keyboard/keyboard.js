// pages/api/interface/keyboard/keyboard.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  hideKeyboard() {
    wx.hideKeyboard({
      success: (res) => {
        console.log("hideKeyboard-success", res);
      },
    })
  },
  getSeletedTextRange() {
    wx.getSelectedTextRange({
      success: (res) => {
        console.log("getSelectedTextRange-success",res);
      },
      fail(res){
        console.log("getSelectedTextRange-fail",res);
      },
      complete(res){
        console.log("getSelectedTextRange-complete",res);
      }
    })
  },



  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.onKeyboardHeightChange((res) => {
      console.log("onKeyboardHeightChange", res);
    });
    // wx.offKeyboardHeightChange()
  },

})