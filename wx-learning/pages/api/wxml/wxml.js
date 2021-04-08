// pages/api/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  test() {
    let selector = wx.createSelectorQuery();
    let nodeRef = selector.select(".test");
    console.log(nodeRef);
    nodeRef.boundingClientRect(res=>{
      console.log("boundingClientRect",res);
    });
    nodeRef.context(res=>{
      console.log("context",res);
    });
    nodeRef.node(res=>{
      console.log("node",res);
    });
    selector.exec(res=>{
      console.log("exec",res);
    })
  }
})