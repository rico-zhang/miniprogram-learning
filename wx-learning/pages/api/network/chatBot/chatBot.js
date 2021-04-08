// pages/api/network/chatBot/chatBot.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "lets chat",
    headLeft: "https://img2.baidu.com/it/u=2829069552,3265850931&fm=11&fmt=auto&gp=0.jpg",
    headRight: "",
    says: [{
      robot: '我是小七,来跟我聊天吧!',
      isay: '你好'
    }]
  },
  converSation(e) {
    let that = this,
      obj = {},
      isay = e.type == "confirm" ? e.detail.value : e.detail.value.says,
      says = this.data.says,
      key = '91f295a26ab94ae894335eb9662307c4'; //图灵机器人 apikey

    //发送
    wx.request({
      url: 'http://www.tuling123.com/openapi/api?key=' + key + "&info=" + isay,
      success(res) {
        let tuling = res.data.text;
        obj.robot = tuling;
        obj.isay = isay;
        says.push(obj)
        that.setData({
          says: says
        })
      }
    })
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
    let that = this;
    wx.getUserInfo({
      success(res) {
        that.setData({
          headRight: res.userInfo.avatarUrl
        });
      }
    })
  },

})