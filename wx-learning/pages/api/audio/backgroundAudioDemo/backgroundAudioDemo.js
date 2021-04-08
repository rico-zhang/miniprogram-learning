// pages/api/audio/backgroundAudioDemo/backgroundAudioDemo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isPlaying: false,
    changedImg: false,
    music: {
      url: 'http://music.163.com/song/media/outer/url?id=1293886117.mp3',
      title: '此时此刻',
      coverImgUrl: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000'
    }
  },
  audioTap() {
    if (this.data.isPlaying) {
      wx.pauseBackgroundAudio({})
    } else {
      let music = this.data.music;
      wx.playBackgroundAudio({
        dataUrl: music.url,
        title: music.title,
        coverImgUrl: music.coverImgUrl,
      });
    }
  },
  stopTap() {
    if (this.isPlaying)
      wx.stopBackgroundAudio();
    else
      wx.showToast({
        title: '音乐还未播放',
        icon:'error',
        duration: 800
      })
  },
  postionTap(e) {
    let how = e.target.dataset.how;
    wx.getBackgroundAudioPlayerState({
      success: (result) => {
        if (result.status == 1) {
          //正在播放
          let duration = result.duration;
          let currentPosition = result.currentPosition;
          let title = "";
          if (how === "-1") {
            //快退
            currentPosition -= 10;
            if (currentPosition < 0)
              currentPosition = 0;
            title = "快退10秒";
          } else {
            //快进
            currentPosition += 10;
            if (currentPosition > duration)
              currentPosition = duration - 1;
            title = "快进10秒";
          }
          console.log(currentPosition);
          wx.seekBackgroundAudio({
            position: currentPosition,
          });
          wx.showToast({
            title,
            duration: 500
          });
        } else {
          wx.showToast({
            title: '音乐未播放',
            duration: 800
          });
        }
      },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.onAudioState();
  },

  onAudioState() {
    let that = this;
    wx.onBackgroundAudioPlay((res) => {
      that.setData({
        isPlaying: true,
        changedImg: true
      });
      console.log("on play");
    });
    wx.onBackgroundAudioPause((res) => {
      that.setData({
        isPlaying: false
      });
      console.log("on pause");
    });
    wx.onBackgroundAudioStop((res) => {
      that.setData({
        isPlaying: false,
        changedImg: false
      });
    });
  }
})