// pages/api/interface/animation/animation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    boxAmimation:null
  },

  startMove() {
    this.boxAmimation = wx.createAnimation({
      duration: 400,
      timingFunction: 'ease',
      delay: 0,
    });
    this.boxAmimation.translateX(100).opacity(0.1).step();
    this.boxAmimation.translateY(100).rotateZ(45).step();
    this.setData({
      boxAmimation:this.boxAmimation.export()
    })
  }
})