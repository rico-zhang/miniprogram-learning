// pages/api/openapi/location/location.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  getLocation() {
    wx.getLocation({
      type: 'wgs84',
      altitude: 'true',
      success(res) {
        console.log("getLoaction-success", res);
        // console.log(`http://api.go2map.com/engine/api/regeocoder/json?points=${res.longitude},${res.latitude}&type=1`);
        wx.request({
          url: `http://api.go2map.com/engine/api/regeocoder/json?points=${res.longitude},${res.latitude}&type=1`,
          success(res) {
            console.log("request-success", res);
          }
        })
      }
    })
  },
  openLocation() {
    wx.openLocation({
      latitude: 34.72468,
      longitude: 113.6401,
      name: '',
      address: '',
      success(res) {
        console.log("openLocation-success", res);
      }
    })
  },
  chooseLocation() {
    wx.chooseLocation({
      success(res) {
        console.log("chooseLocation-success", res);
      }
    })
  },
  choosePoi(){
    wx.choosePoi({
      success(res){
        console.log("choosePoi-success",res);
      },
      fail(res){
        console.log("choose-fail",res);
      }
    });
  }
})