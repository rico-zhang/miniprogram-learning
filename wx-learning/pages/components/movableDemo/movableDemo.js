// pages/movableDemo/movableDemo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [],
    startX: 0,
    startY: 0
  },

  /**
   * 手指触摸动作开始，记录起点x坐标
   */
  touchStart(e) {
    this.data.items.forEach((item, index) => {
      if (item.isTouchMove) {
        item.isTouchMove = false;
      }
    });
    this.setData({
      startX: e.changedTouches[0].clientX,
      startY: e.changedTouches[0].clientY,
      items: this.data.items
    });
  },
  touchMove(e) {
    let index = e.currentTarget.dataset.index,
      startX = this.data.startX,
      startY = this.data.startY,
      touchMoveX = e.changedTouches[0].clientX,
      touchMoveY = e.changedTouches[0].clientY,
      angle = getAngle({
        x: startX,
        y: startY
      }, {
        x: touchMoveX,
        y: touchMoveY
      });
    this.data.items.forEach((item, i) => {
      item.isTouchMove = false;
      if (Math.abs(angle) > 30) return;
      if (i == index) {
        if (touchMoveX > startX) //右滑
          item.isTouchMove = false;
        else
          item.isTouchMove = true;
      }
    });
    this.setData({
      items: this.data.items
    });
  },
  goDetail() {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    for (let i = 0; i < 10; i++) {
      this.data.items.push({
        content: i + '向左滑动删除,向左滑动删除,向左滑动删除,向左滑动删除,向左滑动删除,'
      });
    }
    this.setData({
      items: this.data.items
    });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})

function getAngle(start, end) {
  let _x = end.x - start.x,
    _y = end.y - start.y;
  return 360 * Math.atan(_y / _x) / (2 * Math.PI);
}