// pages/personCenter/personCenter.js
Page({

  personName: '',
  password: '',
  gender: '',
  hobby: '',
  birthday: '',
  workYears: '',
  isMember: false,
  /**
   * 页面的初始数据
   */
  data: {

  },
  nameBlur(e) {
    this.personName = e.detail.value;
  },
  passwordBlur(e) {
    this.password = e.detail.value;
  },
  genderChange(e) {
    this.gender = e.detail.value == 1 ? 'male' : 'famale';
  },
  hobbyChange(e) {
    this.hobby = e.detail.value;
  },
  birthdayChange(e) {
    this.birthday = e.detail.value;
  },
  studyYearChange(e) {
    this.workYears = e.detail.value;
  },
  isMemberChange(e) {
    this.isMember = e.detail.value;
  },
  regFormSubmit(e) {
    let memberData = {
      personName: this.personName,
      password: this.password,
      gender: this.gender,
      hobby: this.hobby,
      workYears: this.workYears,
      birthday: this.birthday,
      isMember: this.isMember
    };
    if (memberData.personName == "") {
      wx.showModal({
        title: 'error',
        content: '请填写name'
      })
      return;
    }
    //向服务器提交数据
    console.log(memberData);
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