const store = require('store')
App({
  globalData: {
    openid: '',
    access_token: '',
    uData: '',
    baseUrl:'https://xiaosongweb.cn'
  },
  onLaunch() {
    let code = ''
    wx.login({
      success: (res) => {
        code = res.code
        wx.request({
          url: `${this.globalData.baseUrl}/api/getOpenId`,
          data: {
            code
          },
          success:(res)=> {
            if (res.data.code === 2000) {
              this.globalData.access_token = res.data.access_token
              this.globalData.openid = res.data.openid
            }
          }
        })
      }
    })
  },
})