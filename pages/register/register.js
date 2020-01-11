const app =getApp()
Page({
  data: {
    name: '',
    email: '',
    username: '',
    password: ''
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
      url: `${app.globalData.baseUrl}/api/rg`,
      method: 'post',
      data,
      success: function (res) {
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
  }

})