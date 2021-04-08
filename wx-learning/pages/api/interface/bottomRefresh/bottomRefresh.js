// pages/api/interface/bottomRefresh/bottomRefresh.js

const _newsList = ['中国的旅游消费力很大', '世界正在关注中国', '中国的旅游消费力很大', '世界正在关注中国', '中国的旅游消费力很大', '世界正在关注中国', '中国的旅游消费力很大', '世界正在关注中国', '中国的旅游消费力很大', '世界正在关注中国', '中国的旅游消费力很大', '世界正在关注中国', '中国的旅游消费力很大', '世界正在关注中国', '中国的旅游消费力很大', '世界正在关注中国', '中国的旅游消费力很大', '世界正在关注中国', '中国的旅游消费力很大', '世界正在关注中国'];

Page({
  flagNumber: 1,
  /**
   * 页面的初始数据
   */
  data: {
    newsList: _newsList,
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    // 可以在app.json的window选项中或页面配置中设置触发距离onReachBottomDistance

    if (this.flagNumber == 5) {
      //数据加载完了
      wx.showToast({
        title: '数据已经加载完毕',
        icon: "none",
        duration: 1000
      });
      return;
    }
    this.flagNumber++;

    console.log("追加数据");
    _newsList.push("中国正在腾飞");
    this.setData({
      newsList: _newsList
    });
  },

})