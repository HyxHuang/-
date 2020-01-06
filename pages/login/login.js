// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'1996',
    password:'1'
  },
  handleTzToLg(){
    wx.navigateTo({
      url: '/pages/register/register',
    })
  },
  handleLg(){
    let {username,password} = this.data
    if(username===''){
      console.log('用户名未空')
      return false
    }
    if(password===''){
      console.log('密码未空')
      return false
    }
    let data={
    username,password
    }
    wx.request({
      url: 'https://xiaosongweb.cn/api/lg',
      method:'post',
      data,
      success:function(res){
        console.log(res);
        
        if(res.data.code===2000){
         
        }else{
      
        }
      }
      // 省略其他参数
    })
    
  },
  handleinput(e){
    let value = e.detail.value
    let type = e.currentTarget.dataset.input
    this.setData({
      [type]:value
    })
  },
  onLoad: function(options) {
  },
})