// pages/api/device/phoneContact/phoneContact.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  addPhoneContact() {
    wx.addPhoneContact({
      firstName: '张三',
      nickName: "zhangsan",
      remark: "程序员",
      mobilePhoneNumber: "15606064004",
      email: "123@qq.com"
    })
  },
  chooseContact() {
    wx.chooseContact({
      success(res) {
        console.log("chooseContact-success", res);
      },
      fail(res){
        console.log("chooseContact-fail", res);
      },
      complete(res){
        console.log("chooseContact-complete", res);
      }
    })
  }
})