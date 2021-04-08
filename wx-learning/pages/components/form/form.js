// pages/form/form.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [{
      name: 'tom',
      value: 'cha'
    }, {
      name: 'mary',
      value: 'cha',
      checked: true
    }, {
      name: 'alice',
      value: 'usa'
    }],
    country: ['美国', '中国', '英国', '日本'],
    pickerIndex: 0,
    multiArray: [
      ['中国', '北京'],
      ['美国', '纽约', '洛杉矶'],
      ['英国', '伦敦', '开普敦']
    ],
    multiIndex: [0, 0, 0],
    time: "10:00",
    date: "2020-02-01",
    region: ['河南省','安阳市','龙安区']
  },
  formSubmit(e) {
    console.log(e.detail.value);
  },
  formReset(e) {
    console.log(e);
  },
  checkGroupChange(e) {
    console.log(e);
  },
  statusChange(e) {
    console.log(e.detail);
  },
  inputEvent(e) {
    console.log(e);
  },
  pickerChange(e) {
    this.setData({
      pickerIndex: e.detail.value
    })
  },
  MultiPickerChange(e) {
    console.log(e);
  },
  MultiPickerColumnChange(e) {
    console.log(e);
  },
  timePickerChange(e) {
    this.setData({
      time: e.detail.value
    });
  },
  datePickerChange(e) {
    this.setData({
      date: e.detail.value
    });
  },
  regionPickerChange(e) {
    console.log(e.detail);
    this.setData({
      region: e.detail.value
    });
  },
  sliderChange(e){
    console.log(e.detail.value);
  },
  switchChange(e){
    console.log(e.detail.value);
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

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})