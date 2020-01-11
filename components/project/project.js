const moment = require('moment')
const app = getApp()
Component({
  properties: {
    projectMessage: {
      type: Object
    }
  },
  data: {
    percent: 0.9,
    userMessage: {}
  },
  observers: {
    'projectMessage': function (value) {
      this.getAvatar(value)
    }
  },

  methods: {
    drawCircle() {
      let ctx1 = wx.createCanvasContext('firstCanvas', this)
      let ctx2 = wx.createCanvasContext('secondCanvas', this)
      ctx1.arc(50, 50, 40, 0, 2 * Math.PI, true)
      ctx1.setStrokeStyle("#ececed")
      ctx1.setLineWidth(5)
      ctx1.stroke()
      ctx1.draw()
      ctx2.arc(50, 50, 40, -Math.PI / 2, 2 * Math.PI * (this.data.percent/100) - (1 / 2) * Math.PI, false)
      ctx2.setStrokeStyle("#1c66ff")
      ctx2.setFontSize(16)
      ctx2.fillText(this.data.percent + '%', 35, 55)
      ctx2.setLineWidth(5)
      ctx2.stroke()
      ctx2.draw()
    },
    getAvatar(user) {
      let that = this
      wx.request({
          url: `${app.globalData.baseUrl}/api/userMore`,
          method: 'post',
          data: {
            u: user.member
          },
          success(res) {
            that.setData({
                userMessage: {
                  ...that.data.projectMessage,
                  ...res.data
                }
              }, () => {
                let {
                  start_time,
                  end_time
                } = that.data.userMessage
                let now = moment(moment().format('YYYY-MM-DD'))
                let m1 = moment(start_time)
                let m2 = moment(end_time)
                let fromNow = now.diff(m1, 'day')
                let fromEnd = m2.diff(m1, 'day')
                if (fromEnd === 0) {
                  that.setData({
                    percent: 1
                  }, () => {
                    that.drawCircle()
                  })
                } else {
                that.setData({
                  percent: (fromNow / fromEnd).toFixed(2) >= 1 ? 100 : parseInt((fromNow / fromEnd).toFixed(2)*100)
                }, () => {
                  that.drawCircle()
                })
              }
            })
        }
      })
  }
}
})