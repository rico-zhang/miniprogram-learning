// pages/api/image/imageDemo/imageDemo.js
Page({
  chooseImages: [],
  /**
   * 页面的初始数据
   */
  data: {
    updateImages: [],
    downloadImageUrl: ''
  },
  chooseImage() {
    let that = this;
    wx.chooseImage({
      count: 3,
      sizeType: ["compressed"],
      success(res) {
        console.log("选择图片成功",res);
        that.chooseImages = res.tempFilePaths;
        that.setData({
          updateImages: res.tempFilePaths
        })
      }
    })
  },

  getImageInfo() {
    wx.getImageInfo({
      src: this.chooseImages[0],
      success(res) {
        console.log("获取图片信息成功",res);
      }
    })
  },
  previewImage() {
    wx.previewImage({
      urls: this.chooseImages,
      current: this.chooseImages[1]
    })
  },
  downloadImage() {
    let that = this;
    wx.downloadFile({
      url: 'https://img0.baidu.com/it/u=3564967106,2094760514&fm=26&fmt=auto&gp=0.jpg',
      success(res) {
        console.log("下载成功",res);
        that.setData({
          downloadImageUrl: res.tempFilePath
        });
      }
    })
  },
  saveImage(){
    wx.saveImageToPhotosAlbum({
      filePath: this.data.downloadImageUrl,
      success(res){
        console.log("保存成功",res);
      }
    })
  }
})