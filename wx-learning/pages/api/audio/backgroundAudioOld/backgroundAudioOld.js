// pages/api/audio/backgroundAudioOld/backgroundAudioOld.js
const audioUrl = "http://music.163.com/song/media/outer/url?id=1293886117.mp3";
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  play() {
    wx.playBackgroundAudio({
      dataUrl: audioUrl,
      title: '李荣浩',
      coverImgUrl: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000'
    })
  },
  pause() {
    wx.pauseBackgroundAudio({
      success: (res) => {},
    })
  },
  stop() {
    wx.stopBackgroundAudio({
      success: (res) => {},
    })
  },
  seek() {
    wx.seekBackgroundAudio({
      position: 20,
    })
  },
  onReady() {
    wx.onBackgroundAudioPause((res) => {
      console.log("pause", res);
    });
    wx.onBackgroundAudioPlay((res) => {
      console.log("play", res);
    });
    wx.onBackgroundAudioStop((res) => {
      console.log("stop", res);
    })
  }
})