// pages/api/network/websocket/websocket.js
Page({

  message: '',
  /**
   * 页面的初始数据
   */
  data: {
    responseString: "<h1>this is response content</h1>"
  },

  recordMessage(e) {
    this.message = e.detail.value;
  },
  sendMessage() {
    // wx.sendSocketMessage({
    //   data: this.message
    // });
    this.socket.send({
      data: this.message
    });
  },
  onShow() {
    // wx.connectSocket({
    //   url: 'ws://123.207.136.134:9010/ajaxchattest',
    // });
    // wx.onSocketOpen((result) => {
    //   console.log("socket连接成功");
    // });
    // wx.onSocketError((result) => {
    //   console.log(error);
    // });
    // wx.onSocketMessage((result) => {
    //   console.log("接受到服务器数据", result);
    //   this.setData({
    //     responseString: result.data
    //   });
    // });
    // wx.onSocketClose((result) => {
    //   console.log("socket已关闭");
    // });

    this.socket = wx.connectSocket({
      url: 'ws://123.207.136.134:9010/ajaxchattest',
    });
    this.socket.onOpen((result) => {
      console.log("socket连接成功");
    });
    this.socket.onError((result) => {
      console.log(error);
    });
    this.socket.onMessage((result) => {
      console.log("接受到服务器数据", result);
      this.setData({
        responseString: result.data
      });
    });
    this.socket.onClose((result) => {
      console.log("socket已关闭");
    });

  },
  onHide() {
    // wx.closeSocket();
    this.socket.close();
  }
})