// pages/api/interface/getMenuButtonBoundingClientRect/getMenuButtonBoundingClientRect.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  getMenuButtonBoundingClientRect() {
    const res = wx.getMenuButtonBoundingClientRect();
    console.log(res);
  }
})