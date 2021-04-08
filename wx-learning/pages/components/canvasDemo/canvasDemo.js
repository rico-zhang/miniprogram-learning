// pages/canvasDemo/canvasDemo.js
Page({
  startX: 0,
  startY: 0,
  isClear: false,

  /**
   * 页面的初始数据
   */
  data: {
    pen: 3,
    color: "#000"
  },

  touchStart(e) {
    this.startX = e.changedTouches[0].x;
    this.startY = e.changedTouches[0].y;
    this.context = wx.createContext();
    if (this.isClear) {
      // 设置为画布背景颜色
      this.context.setStrokeStyle("#f8f8f8");
      this.context.setLineCap("round");
      this.context.setLineJoin("round");
      this.context.setLineWidth(20);
      this.context.save();
      this.context.arc(this.startX, this.startY, 5, 0, 2 * Math.PI, true);
      this.context.fill();
      this.context.restore();
    } else {
      this.context.setStrokeStyle(this.data.color);
      this.context.setLineWidth(this.data.pen);
      this.context.setLineCap("round");
      this.context.setLineJoin("round");
      this.context.beginPath();
    }
  },

  touchMove(e) {
    let startX1 = e.changedTouches[0].x;
    let startY1 = e.changedTouches[0].y;
    if (this.isClear) {
      this.context.save();
      this.context.moveTo(this.startX, this.startY);
      this.context.lineTo(startX1, startY1);
      this.context.stroke();
      this.context.restore();
    } else {
      this.context.setStrokeStyle(this.data.color);
      this.context.setLineWidth(this.data.pen);
      this.context.setLineCap("round");
      this.context.setLineJoin("round");
      this.context.beginPath();
      this.context.moveTo(this.startX, this.startY);
      this.context.lineTo(startX1, startY1);
      this.context.stroke();
    }
    this.startX = startX1;
    this.startY = startY1;
    wx.drawCanvas({
      canvasId: 'myCanvas',
      reserve: true,
      actions: this.context.getActions()
    });
  },

  touchEnd() {

  },

  penSelect(e) {
    const param = e.currentTarget.dataset.param;
    this.setData({
      pen: param
    });
    this.isClear = false;
  },
  colorSelect(e) {
    const param = e.currentTarget.dataset.param;
    this.setData({
      color: param
    });
    this.isClear = false;
  },
  clearCanvas() {
    this.isClear = !this.isClear;
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

})