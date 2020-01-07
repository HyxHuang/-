// pages/notice/notice.js
import { formatDay } from '../..//utils/util.js';
Page({
  data: {
    notices: [],
    yesday: '',
    today: ''
  },
  onShow: function() {
    let that = this
    wx.request({
      url: 'http://10.9.49.228:9999/api/notice',
      method: 'get',
      data: {
        page: 1,
        limit: 8
      },
      success(res) {
        let yesday = formatDay(new Date(new Date().getTime() - 86400000))
        let today = formatDay(new Date())
        that.setData({
          notices: res.data.data,
          yesday,
          today
        })
      },
      fail(error) {
        console.log(error)
      }
    })
  }
})
