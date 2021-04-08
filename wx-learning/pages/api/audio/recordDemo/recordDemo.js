// pages/api/audio/recordDemo/recordDemo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentImgIndex: 0,
    isSpeaking: true,
    voices: []
  },
  touchDown() {
    console.log("手指按下了");
    console.log('new date', new Date());
    let _this = this;
    this.setData({
      isSpeaking: true
    });
    speakIng.call(this);

    wx.startRecord({
      success: (result) => {
        let tempFilePath = result.tempFilePath;
        console.log(tempFilePath);
        //持久保存
        wx.saveFile({
          tempFilePath: tempFilePath,
          success(res) {
            let saveFilePath = res.savedFilePath;
            console.log(saveFilePath);
          }
        });
        //成功提示
        wx.showToast({
          title: '恭喜,录音成功',
          icon: 'success',
          duration: 1000
        });
        //获取录音音频列表
        wx.getSavedFileList({
          success: (result) => {
            let voices = [];
            for (let i = 0; i < result.fileList.length; i++) {
              const item = result.fileList[i];
              let {
                createTime,
                size,
                filePath
              } = item;
              size = (size / 1024).toFixed(2);
              let voice = {
                filePath,
                createTime,
                size
              };
              voices.push(voice);
              this.setData({
                voices
              });
            }
          },
          fail(res) {
            wx.showModal({
              title: '提示',
              content: '录音的姿势不对',
              showCancel: false,
              success(res) {
                if (res.confirm) {
                  console.log("你已经知道了");
                }
              }
            })
          }
        })
      },
    })
  },
  touchUp() {
    console.log("手指松开");
    this.setData({
      isSpeaking: false
    });
    clearInterval(this.timer);
    wx.stopRecord();
  },
  gotoPlay(e) {
    let filePath = e.currentTarget.dataset.key;
    wx.showToast({
      title: '开始播放',
      icon:"success",
      duration:1000
    });
    wx.playVoice({
      filePath: filePath,
      success(){
        wx.showToast({
          title: '播放结束',
          icon:"success",
          duration:1000
        })
      }
    })
  }
})

function speakIng() {
  let _this = this;
  let i = 1;
  _this.timer = setInterval(() => {
    i++;
    i = i % 5;
    _this.setData({
      currentImgIndex: i
    });
    console.log(i);
  }, 200);
}