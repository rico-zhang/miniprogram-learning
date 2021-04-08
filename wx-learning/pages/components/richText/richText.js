// pages/richText/richText.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    richString: "<h1>标签内容</h1><hr><h2>h2<h2>",
    nodesArr: [{
      name: "h4",
      attrs: {
        style: "color:red;"
      },
      children: [{
        type: "text",
        text: "节点列表标题"
      }, {
        type: "node",
        name: "i",
        attrs: {
          style: "color:green;"
        },
        children: [{
            type: "text",
            text: "i标签"
          }
        ]
      }]
    }]
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