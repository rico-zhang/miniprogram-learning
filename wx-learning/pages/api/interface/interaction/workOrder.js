// pages/api/interface/interaction/workOrder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  formSubmit(e) {
    console.log(e);
    let title = e.detail.value.title;
    let content = e.detail.value.content;
    //服务器操作省略

    //缓存到本地存储
    wx, wx.setStorage({
      data: {
        title,
        content
      },
      key: 'workOrder',
      success(res) {
        console.log("setStorage-success", res);
        wx.showToast({
          title: '工单提交完成',
          duration: 2000,
          success(res) {
            setTimeout(() => {
              wx.redirectTo({
                url: '/pages/api/interface/interaction/interactionDemo',
              });
            }, 1000);

          }
        })
      }
    });
  }
})