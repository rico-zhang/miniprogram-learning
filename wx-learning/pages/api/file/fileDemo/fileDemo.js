// pages/api/file/fileDemo/fileDemo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  /**
   * 保存文件
   * 保存文件到本地,会移动临时文件,保存后临时文件将不可用
   */
  saveFile() {
    wx.chooseImage({
      count: 1,
      success(res) {
        console.log("chooseimg-successs", res);
        wx.saveFile({
          tempFilePath: res.tempFilePaths[0],
          success(res) {
            console.log("savefile-successs", res);
          }
        });
        // wx.saveImageToPhotosAlbum({
        //   filePath: res.tempFilePaths[0],
        // });
        // wx.saveVideoToPhotosAlbum({
        //   filePath: res.tempFilePaths[0],
        // })
      }
    })
  },

  getFileInfo() {
    wx.chooseImage({
      count: 1,
      success(res) {
        wx.getFileInfo({
          filePath: res.tempFilePaths[0],
          success(res) {
            console.log("getfielinfo-success", res);
          }
        });
      }
    })

  },

  getSavedFileList() {
    wx.getSavedFileList({
      success(res) {
        console.log("getsavedFileList-success", res.fileList);
      }
    });
  },
  removeSavedFile() {
    wx.getSavedFileList({
      success(res) {
        console.log("getsavedFileList-success", res.fileList);
        if (res.fileList.length > 0) {
          res.fileList.forEach(item => {
            wx.removeSavedFile({
              filePath: item.filePath,
              success(res) {
                console.log("removeSavedFile-success", item.filePath, res);
              },
              fail(res) {
                console.log("removeSavedFile-fail", item.filePath, res);
              },
              complete(res) {
                console.log("removeSavedFile-complete", item.filePath, res);
              }
            });
          });
        }

      }
    });
  },
  openDocument() {
    //打开文档之前需要先下载文档
    wx.downloadFile({
      url: 'https://img.kaku.henkuai.com/o_1d925neci6741ouu1s89192cibci.pdf',
      success(res) {
        console.log("downloadFile-success", res);
        const filePath = res.tempFilePath;
        wx.openDocument({
          filePath: filePath,
          success(res) {
            console.log("openDocument-success", res);
          },
          fail(res) {
            console.log("openDocument-fail", res);
          }
        })
      }
    })
  },
  chooseMessageFile() {
    wx.chooseMessageFile({
      count: 1,
      success(res) {
        console.log(res.tempFiles[0].path);
        const filePath = res.tempFiles[0].path;
        wx.openDocument({
          filePath: filePath,
          success(res) {
            console.log("openDocument-success", res);
          },
          fail(res) {
            console.log("openDocument-fail", res);
          }
        })
      }
    })
  }
})