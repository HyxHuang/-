Page({
  data:{
    projectList:[]
  },
  onShow(){
    wx.request({
      url: 'http://10.9.49.228:9999/api/pj',
      data:{
        page:1,
        limit:30
      },
      success:(res)=>{
        this.setData({
          projectList:res.data.data
        })
      }
    })
  },
 
  addProject(){
    wx.navigateTo({
      url: '/pages/subProject/subProject',
    })
  }
})