const store = require('store')
App({
  globalData: {
    openid: '',
    access_token: '',
    uData: ''
  },
  onLaunch() {
    let code = ''
    let that = this
    wx.login({
      success: (res) => {
        code = res.code
        wx.request({
          url: 'http://10.9.49.228:9999/api/getOpenId',
          data: {
            code
          },
          success(res) {
            if (res.data.code === 2000) {
              that.globalData = res.data
            }
          }
        })
      }
    })
  },
})