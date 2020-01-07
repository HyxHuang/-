Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '1',
    email: '1',
    username: '9033',
    password: '123456'
  },
  handleTzToLg() {
    wx.navigateTo({
      url: '/pages/login/login',
    })
  },
  handleRg() {
    let {
      name,
      email,
      username,
      password
    } = this.data
    if (name === '') {
      console.log('姓名未空')
      return false
    }
    if (email === '') {
      console.log('邮箱未空')
      return false
    }
    if (username === '') {
      console.log('用户名未空')
      return false
    }
    if (password === '') {
      console.log('密码未空')
      return false
    }
    let data = {
      name,
      email,
      username,
      password
    }
    wx.request({
      url: 'http://10.9.49.228:9999/api/rg',
      method: 'post',
      data,
      success: function (res) {
        console.log(res.data);
        if (res.data.code === 2000) {
          wx.showToast({
            title: '恭喜注册成功',
            icon: 'success',
            duration: 1500
          })
          setTimeout(function(){
            wx.navigateTo({
              url: '/pages/login/login'
            })
          },1500)

        } else {  
          wx.showToast({
            title: '用户名已经存在',
            icon: 'none',
            duration: 2000
          })
        }
      }
      // 省略其他参数
    })


  },
  handleinput(e) {
    let value = e.detail.value
    let type = e.currentTarget.dataset.input
    this.setData({
      [type]: value
    })
  },
  onLoad: function (options) {
    // Do some initialize when page load
    console.log(122);
  },

})