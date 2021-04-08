// pages/api/interface/interaction/interactionDemo.js
Page({
  mueuList: ['在线提交', '查看进度'],
  /**
   * 页面的初始数据
   */
  data: {
    isShow: false,
    title: '提交工单提问',
    content: '我的工单内容'
  },
  userTap() {
    let that = this;
    wx.showActionSheet({
      itemList: this.mueuList,
      itemColor: '#000',
      success(res) {
        if (res.tapIndex == 0) {
          //手工填写表单
          wx.navigateTo({
            url: '/pages/api/interface/interaction/workOrder',
          });
        } else {
          //查看进度
          that.setData({
            isShow: true
          })
        }
      }
    })
  },
  accelerateProgress() {
    let that = this;
    //服务器操作省略
    wx.showToast({
      title: '已经催办',
      icon: 'success',
      duration: 3000,
      success(res) {
        console.log("accelerateProgress-success", res);
      },
      fail(res) {
        console.log("accelerateProgress-fail", res);
      },
      complete(res) {
        console.log("accelerateProgress-complete", res);
        that.setData({
          isShow: false
        })
      }
    })
  },
  clearWorkOrder() {
    let that = this;
    console.log("clearWorkOrder");
    wx.showModal({
      title: '警告',
      content: '确定要撤销吗？',
      showCancel: true,
      cancelText: '考虑一下',
      confirmText: '坚决删除',
      success(res) {
        if (res.confirm) {
          wx.removeStorage({
            key: 'workOrder',
            success(res) {
              console.log("removeStorage-success", res);
              that.setData({
                title: '提交工单提问',
                content: '我的工单内容'
              });
              wx.showToast({
                title: '工单已撤销',
                duration: 1000,
                success(res) {
                  setTimeout(() => {
                    wx.redirectTo({
                      url: '/pages/api/interface/interaction/interactionDemo',
                    })
                  }, 1000);

                }
              })
            }
          })
        }
      }
    })

  },
  onShow() {
    let that =this;
    wx.getStorage({
      key: 'workOrder',
      success(res) {
        console.log("getStorage-success", res);
        that.setData({
          title:res.data.title,
          content:res.data.content
        })
      }
    })
  },
  onLoad(){
    
  }
})