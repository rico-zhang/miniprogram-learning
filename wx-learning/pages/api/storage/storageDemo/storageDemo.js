// pages/api/storage/storageDemo/storageDemo.js
Page({
  inputValue: '',
  /**
   * 页面的初始数据
   */
  data: {

  },
  getInput(e) {
    this.inputValue = e.detail.value;
  },
  storageData() {
    wx.setStorageSync('storageData', this.inputValue)
  }
})