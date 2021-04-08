// pages/api/storage/storageDemo/storageDemo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  setStorage() {
    wx.setStorage({
      key: 'name',
      data: {
        id: 1,
        name: "rico"
      },
      success(res) {
        console.log("setStorage-success", res);
      }
    })
  },
  getStorage() {
    wx.getStorage({
      key: 'name',
      success(res) {
        console.log("getStorage-success", res);
      },
      fail(res) {
        console.log("getStorage-fail", res);
      }
    })
  },
  removeStorage() {
    wx.removeStorage({
      key: 'name',
      success(res) {
        console.log("removeStorage-success", res);
      }
    });
  },
  getStorageInfo(res) {
    wx.getStorageInfo({
      success: (res) => {
        console.log("getStorageInfo-success", res);
      },
    })
  },
  clearStorage() {
    wx.clearStorage({
      success: (res) => {
        console.log("clearStorage-success", res);
      },
    })
  },
  onLoad(options) {
    console.log("onload-options---url的路径参数",options);
    wx.getStorage({
      key: 'storageData',
      success(res) {
        console.log("获取成功", res);
      },
      fail(res) {
        console.log("获取失败", res);
      }
    });

    //通过事件传递参数
    const eventChannel = this.getOpenerEventChannel();
    eventChannel.emit('acceptDataFromOpenedPage', {data: 'test'});
    eventChannel.emit('someEvent', {data: 'test'});
    // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
    eventChannel.on('acceptDataFromOpenerPage', function(data) {
      console.log("acceptDataFromOpenerPage",data)
    })
  }
})