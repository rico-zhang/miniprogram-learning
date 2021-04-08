// pages/canvas/canvas.js

//是否使用方案1创建画布 绘制图形
const useOne = true;
Page({

  startX: 0,
  startY: 0,
  /**
   * 页面的初始数据
   */
  data: {
    pen: 2,
    color: "#00ff00"
  },
  canvasTouchStart(e) {
    this.startX = e.changedTouches[0].x;
    this.startY = e.changedTouches[0].y;
    if (useOne)
      //方案1
      this.context = wx.createContext();
    else
      //方案2
      this.context = wx.createCanvasContext('mycanvas');
    console.log(this.context);
    this.context.setStrokeStyle(this.data.color);
    this.context.setLineWidth(this.data.pen);
    this.context.setLineCap("round");
    this.context.beginPath();
  },
  canvasTouchMove(e) {
    let startX1 = e.changedTouches[0].x,
      startY1 = e.changedTouches[0].y;
    this.context.moveTo(this.startX, this.startY);
    this.context.lineTo(startX1, startY1);
    this.context.stroke();

    this.startX = startX1;
    this.startY = startY1;
    this.context.closePath();
    if (useOne)
      // 方案1
      wx.drawCanvas({
        canvasId: 'mycanvas',
        reserve: true,
        actions: this.context.getActions()
      });
    else
      //方案2
      this.context.draw(true);
  },

  canvasTouchEnd(e) {

  },
  penSelect(e) {
    let pen = e.currentTarget.dataset.pen;
    this.setData({
      pen: parseInt(pen)
    });
  },
  colorSelect(e) {
    let color = e.currentTarget.dataset.color;
    this.setData({
      color: color
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

})