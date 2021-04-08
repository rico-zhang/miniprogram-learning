// pages/api/audio/backgroundAudioManager/backgroundAudioManager.js
Page({

  backgroundAudioManager: null,
  /**
   * 页面的初始数据
   */
  data: {

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.backgroundAudioManager = wx.getBackgroundAudioManager();
    this.backgroundAudioManager.title = '此时此刻'
    this.backgroundAudioManager.epname = '此时此刻'
    this.backgroundAudioManager.singer = '许巍'
    this.backgroundAudioManager.coverImgUrl = 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000'
    // 设置了 src 之后会自动播放
    this.backgroundAudioManager.onPlay(res => {
      console.log("paly", res);
    });
    this.backgroundAudioManager.onPause(res => {
      console.log("pause", res);
    });
    this.backgroundAudioManager.onStop(res => {
      console.log("stop", res);
    });
    this.backgroundAudioManager.onSeeking(res => {
      console.log("seeking", res);
    });
    this.backgroundAudioManager.onSeeked(res => {
      console.log("seeked", res);
    })
  },
  play() {
    if (!this.backgroundAudioManager.src)
      this.backgroundAudioManager.src = 'http://music.163.com/song/media/outer/url?id=1293886117.mp3'
    else
      this.backgroundAudioManager.play();
  },
  pause() {
    this.backgroundAudioManager.pause();
  },
  stop() {
    this.backgroundAudioManager.stop();
  },
  seek() {
    this.backgroundAudioManager.seek(20);
  }

})