// pages/api/device/wifi/wifi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wifiName: '',
    wifiPassword: '',
    wifiList: []
  },
  doConnect(e) {
    //获取用户输入的WiFi账号与密码
    this.wifiName = e.detail.value.wifiname;
    this.wifiPassword = e.detail.value.wifipassword;
    let that = this;
    //检测手机型号,获取系统信息
    wx.getSystemInfo({
      success: (res) => {
        console.log(res);
        let system = '';
        let support = true;
        if (res.platform == "android") {
          system = parseInt(res.system.substr(8));
          if (system < 6)
            support = false;
        } else if (res.platform == "ios") {
          system = parseInt(res.substr(4));
          if (system < 11.2)
            support = false;
        }
        if (!support) {
          wx.showToast({
            title: '当前手机版本不支持',
          });
          return;
        }
        that.startWifi();
      },
    })
  },
  startWifi() {
    let that = this;
    wx.startWifi({
      success: (res) => {
        console.log("startWifi-success", res);
        that.connectWifi();
      },
      fail(res) {
        console.log("startWifi-fail", res);
        wx.showToast({
          title: 'wifi开始失败',
        })
      }
    })
  },
  connectWifi() {
    wx.connectWifi({
      SSID: this.wifiName,
      password: this.wifiPassword,
      success(res) {
        console.log("connectWifi-success", res);
        wx.showToast({
          title: 'wifi连接成功',
          duration: 2000,
          icon: 'success'
        });
      },
      fail(res) {
        console.log("connectWifi-fail", res);
        wx.showToast({
          title: 'wifi连接失败',
          duration: 2000,
          icon: 'error'
        })
      }
    })
  },

  startSearch() {
    //获取系统信息
    wx.getSystemInfo({
      success: (res) => {
        const isIOS = res.platform == "ios";
        if (isIOS) {
          wx.showModal({
            title: '提示',
            content: '由于系统限制,ios用户请手动进入系统wifi页面,然后返回小程序',
            showCancel: false,
            success: (res) => {
              this.startWifiEx();
            }
          })
        } else {
          this.startWifiEx();
        }
      },
    })
  },
  startWifiEx() {
    wx.startWifi({
      success: (res) => {
        console.log("startWifiEx-success", res);
        this.getWifiList();
      },
      fail: res => {
        console.log("startWifiEx-fail", res);
      }
    })
  },
  getWifiList() {
    wx.getSetting({
      success: (res) => {
        console.log("getSetting-success", res);
        if (!res.authSetting['scope.userLocation']) {
          //注意在app.json 中设置 permission
          wx.authorize({
            scope: 'scope.userLocation',
            success: (res) => {
              console.log("authorize-success",res);
              // 用户已经同意小程序使用录音功能，后续调用 wx.userLocation 接口不会弹窗询问
              wx.onGetWifiList((result) => {
                const wifiList = result.wifiList;
                this.setData({
                  wifiList
                })
              });
              wx.getWifiList({
                success: (res) => {
                  console.log("getWifiList-success", res);
                },
                fail: res => {
                  console.log("getWifiList-fail", res);
                }
              })
            },
            fail:res=>{
              console.log("authorize-fail",res);
            }
          })
        }
      },
      fail: (res) => {
        console.log("getSetting-fail", res);
      }
    })

  }
})