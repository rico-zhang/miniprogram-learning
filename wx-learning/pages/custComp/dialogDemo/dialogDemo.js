// pages/custComp/test/test.js
Page({
  dialog: null,

  /**
   * 页面的初始数据
   */
  data: {
  },
  showDialog() {
    this.dialog.showDialog();
  },
  cancelEvent() {
    console.log("cancelEvent");
  },
  confirmEvent() {
    console.log("confirmEvent");
  },
  onReady() {
    this.dialog = this.selectComponent("#dialog");
  }
})