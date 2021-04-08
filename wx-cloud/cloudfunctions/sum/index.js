// 云函数入口文件
const cloud = require('wx-server-sdk');

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

// 云函数入口函数
exports.main = async (event, context) => {
  console.log(event)
  console.log(context)
  console.log(cloud);
  const logger = cloud.logger();
  logger.info({
    logger: 'testlogger'
  });
  return {
    sum: event.a + event.b,
    event,
    context
  }
}