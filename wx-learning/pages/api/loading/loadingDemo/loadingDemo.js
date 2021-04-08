// pages/api/loading/loadingDemo/loadingDemo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loadingHidden: true
  },
  controlLoading() {
    this.setData({
      loadingHidden: false
    });
    //因为loading之后 按钮不可点击 所以 设置3秒后关闭loading
    setTimeout(() => {
      this.setData({
        loadingHidden: true
      });
    }, 3000);
  },
  showToast() {
    wx.showToast({
      title: '加载中...',
      icon: 'loading',
      duration: 2000, //可以手动调用wx.hideToast 隐藏
      mask: true,
      success(res) {
        console.log("showToast-success", res);
      }
    })
  },
  showLoading() {
    wx.showLoading({
      title: '加载中...',
      mask: true,
      success(res) {
        console.log("showloading-success", res);
      }
    });
    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
  },
  showActionSheet() {
    wx.showActionSheet({
      itemList: ['A', 'B', 'C'],
      success(res) {
        console.log(res.tapIndex)
      },
      fail(res) {
        console.log(res.errMsg)
      }
    });
  },
  showModal() {
    wx.showModal({
      title: "提示",
      content: '提示内容',
      editable: true,
      success(res) {
        console.log("success", res);
      },
      fail(res) {
        console.log("fail", res);
      },
      complete(res) {
        console.log("complete", res);
      }
    })
  }
})