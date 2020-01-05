Page({
  data:{
    dataList:{}
  },
  onLoad(){
    console.log(1)
    this.getData()
    
  },
  getData(){
    wx.request({
      url: 'http://10.9.49.228:9999/api/signAll',
      method:'post',
      data:{
        year:2020,
        month:1
      },
      success:(res)=>{
        console.log(res)
        this.setData({
          dataList:res.data.data
        })
      }
    })
  }
})