// pages/file/file.js
Page({

  fileID: '',
  fileIDList: [],
  /**
   * 页面的初始数据
   */
  data: {
    chooseImg: '',
    upImg:'',
    downImg: '',
    tempImgList: []
  },
  uploadImg() {
    wx.chooseImage({
      count: 1,
      success: (res) => {
        const tempFilePath = res.tempFilePaths[0];
        this.setData({
          chooseImg: tempFilePath
        });
        console.log("uploadImg-tempFilePath", res);
        wx.cloud.uploadFile({
            cloudPath: `imgs/${tempFilePath.split('/').pop()}`,
            filePath: tempFilePath
          }).then(res => {
            console.log("wx.cloud.uploadFile-suc", res);
            this.fileID = res.fileID;
            this.fileIDList.push(res.fileID);
            this.setData({
              upImg:res.fileID
            })
          })
          .catch(res => {
            console.error("wx.cloud.uploadFile-fail", res);
          })
      }
    })
  },
  downLoadImg() {
    wx.cloud.downloadFile({
        fileID: this.fileID
      }).then(res => {
        console.log("wx.cloud.downloadFile-suc", res);
        this.setData({
          downImg: res.tempFilePath
        })
      })
      .catch(res => {
        console.error("wx.cloud.downloadFile-fail", res);
      })
  },
  deleteImg() {
    wx.cloud.deleteFile({
      fileList: this.fileIDList
    }).then(res => {
      console.log("wx.cloud.deleteFile-suc", res);
      this.fileIDList = [];
    })
  },
  getTempFileURL() {
    wx.cloud.getTempFileURL({
      fileList: this.fileIDList
    }).then(res => {
      console.log("wx.cloud.getTempFileURL-suc", res);
      this.setData({
        tempImgList: res.fileList.map(item => item.tempFileURL)
      })
    })
  }
})