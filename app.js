App({
  globalData:{
    openid:'',
    access_token:''
  },
  onLaunch(){
    let code=''
    let that=this
    wx.login({
      
      success:(res)=>{
        code=res.code
        wx.request({
          url: 'http://10.9.49.215:3333/getOpenId',
          data:{
            code 
          },
          success(res){ 
            that.globalData=res.data
          }
        })
      } 
    })
  },
})