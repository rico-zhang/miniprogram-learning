// pages/api/interface/refreshDemo/refreshDemo.js
let url = 'http://www.imooc.com/course/ajaxlist',
  page = 0,
  page_size = 5,
  sort = 'last',
  is_easy = 0,
  lange_id = 0,
  pos_id = 0,
  unlearn = 0;

let loadMore = (that) => {
  that.setData({
    hidden: false
  });
  wx.request({
    url: url,
    data: {
      page: page,
      page_size: page_size,
      sort: sort,
      is_easy: is_easy,
      lange_id: lange_id,
      pos_id: pos_id,
      unlearn: unlearn
    },
    success(res) {
      let list = [...that.data.list, ...res.data.list];
      that.setData({
        list,
        hidden: true
      });
      page++;
    }
  })
}


Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollHeight: 0,
    list: [],
    hidden: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // scroll-view 必须设置高度,需要在页面的onLoad中设置
    let that = this;
    wx.getSystemInfo({
      success: (res) => {
        that.setData({
          scrollHeight: res.windowHeight
        })
      },
    });


    //请求数据
    loadMore(that);
  },

  downLoad(res) {
    console.log("toLower", res);
    loadMore(this);
  },
  topLoad(res) {
    console.log("toUpper", res);
    page = 0;
    this.setData({
      list: []
    })
    loadMore(this);
  },
  scroll() {

  }

})