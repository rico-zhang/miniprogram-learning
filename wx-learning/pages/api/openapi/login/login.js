// pages/api/openapi/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  login() {
    wx.login({
      timeout: 1000,
      success(res) {
        console.log("login-success", res);
        const code = res.code;
        //后台根据appid appsecret code 获取openid session_key unionid
        //https://api.weixin.qq.com/sns/jscode2session?appid=	wxf54654314b63c7ec&secret=fb8313840784f96a61eb3b7c41588e47&js_code=071Me8000nQAtL1fdb300nZita3Me80H&grant_type=authorization_code
        wx.request({
          url: '后台接口',
          code: code,
          success(res) {
            //返回后台的身份验证信息 存储在前端缓存中 以后的业务请求 需要带上身份验证信息
          }
        })
      }
    })
  },

  //业务请求
  getcompInfo() {
    //如果仅仅是请求后台数据,不与微信后台打交道,即session_key过期对业务也无影响,则不需要检查session 
    //否则需要检查session， 如果过期 需要重新登录 获取code 再获取session_key
    wx.checkSession({
      success: (res) => {
        console.log("checkSession-success", res);
      },
      fail(res) {
        console.log("checkSession-fail", res);
        //重新登录
        //再执行此操作
        // this.login();
        // this.getcompInfo();
      }
    })
  },
  doGetComyInfo() {
    wx.request({
      url: '后台接口',
      success(res) {

      }
    })
  }
})