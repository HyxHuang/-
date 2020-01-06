
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'1',
    email:'1',
    username:'1996',
    password:'1'
  },
  handleTzToLg(){
    wx.navigateTo({
      url: '/pages/login/login',
    })
  },
  handleRg(){
    let {name,email,username,password} = this.data
    if(name===''){
      console.log('姓名未空')
      return false
    }
    if(email===''){
      console.log('邮箱未空')
      return false
    }
    if(username===''){
      console.log('用户名未空')
      return false
    }
    if(password===''){
      console.log('密码未空')
      return false
    }
    let data={
      name,email,username,password
    }
    wx.request({
      url: 'https://xiaosongweb.cn/api/rg',
      method:'post',
      data,
      success:function(res){
        if(res.data.code===2000){
          wx.navigateTo({
            url: '/pages/login/login'
          })
        }else{
          console.log(res.data);
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
    // Do some initialize when page load
    console.log(122);
  },

})