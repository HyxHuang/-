const app = getApp()
Page({
  data: {
    projectList: []
  },
  onShow() {
    wx.request({
      url: `${app.globalData.baseUrl}/api/pj`,
      data: {
        page: 1,
        limit: 30
      },
      success: (res) => {
        this.setData({
          projectList: res.data.data
        })
      }
    })
  },
  addProject() {
    wx.navigateTo({
      url: '/pages/subProject/subProject',
    })
  }
})