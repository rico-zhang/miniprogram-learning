// pages/api/audio/recordManager/recordManager.js
const recordrManager = wx.getRecorderManager();
const innerAudioContext = wx.createInnerAudioContext();
Page({
  tempFilePath: '',
  /**
   * 页面的初始数据
   */
  data: {

  },
  start() {
    const options = {
      duration: 10000, //录音时长 ms
      sampleRate: 16000, //采样率
      numberOfChannels: 1, //通道数
      encodeBitRate: 96000, //编码采样率
      format: 'mp3', //音频格式 有效值 aac/mp3
      frameSize: 50 //帧大小 kb
    };
    recordrManager.start(options);
    recordrManager.onStart((res) => {
      console.log("record start", res);
    });
    recordrManager.onError((res) => {
      console.log("record error", res);
    });
  },
  stop() {
    recordrManager.stop();
    recordrManager.onStop((res) => {
      console.log("record stop", res);
      this.tempFilePath = res.tempFilePath;
    });
  },
  play() {
    innerAudioContext.autoplay = true;
    innerAudioContext.src = this.tempFilePath;
    innerAudioContext.onPlay((res) => {
      console.log("开始播放", res);
    });
    innerAudioContext.onError((res) => {
      console.log("播放错误", res);
    });
  }
})