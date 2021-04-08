// pages/api/interface/tabBar/tabBar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  showTabBar() {
    wx.showTabBar({
      animation: true,
    })
  },
  hideTabBar() {
    wx.hideTabBar({
      animation: true,
    })
  },
  showTabBarRedDot() {
    wx.showTabBarRedDot({
      index: 0,
    })
  },
  hideTabBarRedDot() {
    wx.hideTabBarRedDot({
      index: 0,
    })
  },
  setTabBarBadge() {
    wx.setTabBarBadge({
      index: 0,
      text: '10',
    })
  },
  removeTabBarBadge() {
    wx.removeTabBarBadge({
      index: 0,
    })
  },
  setTabBarStyle() {
    wx.setTabBarStyle({
      backgroundColor: '#f00',
    })
  },
  setTabBarItem() {
    wx.setTabBarItem({
      index: 0,
      text:'test'
    })
  },
})