// pages/api/interface/animationDemo/animationDemo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    start: '北京',
    end: '上海',
    lAnimation: null,
    rAnimation: null
  },
  trigger() {
    let that = this;
    let option = {
      duration: 100,
      timingFunction: 'ease-in'
    };
    //创建动画
    let lAnimation = wx.createAnimation(option);
    let rAnimation = wx.createAnimation(option);

    //设置动画
    lAnimation.translateX(100);
    lAnimation.opacity(0.1).step();

    rAnimation.translateX(-100);
    rAnimation.opacity(0.1).step();
    this.setData({
      lAnimation: lAnimation.export(),
      rAnimation: rAnimation.export()
    });
    setTimeout(() => {
      lAnimation.translateX(0).opacity(1).step();
      rAnimation.translateX(0).opacity(1).step();
      [this.data.start, this.data.end] = [this.data.end, this.data.start];
      this.setData({
        start: this.data.start,
        end: this.data.end,
        lAnimation: lAnimation.export(),
        rAnimation: rAnimation.export()
      })
    }, 100);

  }

})