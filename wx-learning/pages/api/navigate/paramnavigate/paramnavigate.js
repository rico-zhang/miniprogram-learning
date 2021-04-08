// pages/api/navigate/paramnavigate/paramnavigate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  storage() {
    //设置缓存
    wx.setStorage({
      data: '101',
      key: 'storageData',
    });
    wx.navigateTo({
      url: '/pages/api/storage/storage/storage',
    })
  },
  wxapi() {
    wx.navigateTo({
      url: '/pages/api/storage/storage/storage?score=90&name=rico',
    })
  },
  wxapiEvent() {
    wx.navigateTo({
      url: '/pages/api/storage/storage/storage?idddd=1',
      events: {
        // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
        acceptDataFromOpenedPage: function (data) {
          console.log(data)
        },
        someEvent: function (data) {
          console.log(data)
        }
      },
      success: function (res) {
        console.log(res);
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('acceptDataFromOpenerPage', {
          data: 'from-acceptDataFromOpenerPage'
        })
      }
    })
  }
})