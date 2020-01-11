const app = getApp()
Page({
  data:{
    userList:[]
  },
  onLoad(){
    this.getData()
    
  },
  getData(){
    wx.request({
      url: `${this.globalData.baseUrl}/api/signAll`,
      method:'post',
      data:{
        year:2020,
        month:1
      },
      success:(res)=>{
        this.setData({
          userList:res.data.data
        })
      }
    })
  }
})