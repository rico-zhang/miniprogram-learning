// pages/dbopt/dbopt.js
const db = wx.cloud.database();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userList: []
  },
  addUser(e) {
    const userName = e.detail.value.userName,
      userAge = parseInt(e.detail.value.userAge);
    db.collection("students").add({
      data: {
        name: userName,
        age: userAge,
        createTime: db.serverDate()
      }
    }).then(res => {
      console.log("add-suc", res);
    })
  },
  getUserRecord() {

    db.collection("students").get().then(res => {
      console.log(res);
      this.setData({
        userList: res.data
      });
    })
  },

  singleUpdate(e) {
    const userId = e.detail.value.userId;
    const userName = e.detail.value.userName,
      userAge = parseInt(e.detail.value.userAge);
    db.collection("students").doc(userId).update({
      data: {
        name: userName,
        age: userAge
      }
    }).then(res => {
      console.log("singleUpdate-suc", res);
    })
  },
  batchUpdate(e) {
    const oldAge = parseInt(e.detail.value.oldAge),
      userAge = parseInt(e.detail.value.userAge);
    const _ = db.command;
    db.collection("students").where({
      age: _.gt(oldAge)
    }).update({
      data: {
        age: userAge
      }
    }).then(res => {
      console.log("batchUpdate-suc", res);
    })
  },
  singleDelete(e) {
    const userId = e.detail.value.userId;
    db.collection("students").doc(userId).remove().then(res => {
      console.log("singleDelete-suc", res);
    })
  },
  batchDelete(e) {
    //官网上说：前端批量更新（where.update、where.remove）也随之开放（基础库 2.9.4 起）
    //但是实际测试批次删除无效
    // const oldAge = parseInt(e.detail.value.oldAge);
    // const _ = db.command;
    // db.collection("students").where({
    //   age: _.gt(oldAge)
    // }).remove().then(res => {
    //   console.log("batchDelete-suc", res);
    // })

    //调用云函数
    const oldAge = parseInt(e.detail.value.oldAge);
    wx.cloud.callFunction({
      name: 'batchRemove',
      data: {
        oldAge
      }
    }).then(res => {
      console.log("batchRemove-suc", res);
    })


  },
})