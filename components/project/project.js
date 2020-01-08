Component({
  properties: {

  },
  data: {
    percent: 0.9
  },
  lifetimes: {
    attached() {
      this.drawCircle()
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
      ctx2.arc(50, 50, 40, -Math.PI / 2, 2 * Math.PI * (this.data.percent) - (1 / 2) * Math.PI, false)
      ctx2.setStrokeStyle("#1c66ff")
      ctx2.setFontSize(16)
      ctx2.fillText(this.data.percent * 100 + '%', 35, 55)
      ctx2.setLineWidth(5)
      ctx2.stroke()
      ctx2.draw()
    }
  }
})