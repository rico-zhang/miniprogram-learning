// pages/api/openapi/weyun/weyun.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  getWeRunData() {
    wx.getWeRunData({
      complete: (res) => {
        console.log("getWeRunData-complete", res);
      },
    })
  },
  shareToWeRun() {
    //小程序管理后台，「开发」-「接口设置」中自助开通该组件权限。 只针对「体育-在线健身」类目的小程序开放
    //https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/share-werun.html
    wx.shareToWeRun({
      recordList: [{
        typeId: 4001,
        number: 180
      }, {
        typeId: 3001,
        distance: 100000
      }],
      success(res) {
        wx.showToast({
          title: '打卡成功',
        })
      },
      fail(res) {
        wx.showToast({
          icon: "none",
          title: '打卡失败',
        })
      }
    })
    return;
    wx.shareToWeRun({
      recordList: [{
        typeId: '001',
        time: 10000,
        distance: 100,
        calorie: 4545,
        url: '/pages/index/index'
      }],
      complete(res) {
        console.log("shareToWeRun-complete", res);
      }
    })
  }

})