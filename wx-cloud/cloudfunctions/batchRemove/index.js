// 云函数入口文件
const cloud = require('wx-server-sdk');

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const db = cloud.database();
  const _ = db.command;
  const oldAge = event.oldAge;
  try {
    const res = await db.collection("students").where({
      age: _.gt(oldAge)
    }).remove();
    console.log("cloud-batchRemove-suc", res);
    return res;
  } catch (error) {
    console.error(error)
  }
}