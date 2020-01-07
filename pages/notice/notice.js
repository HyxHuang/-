// pages/notice/notice.js

import { formatDay } from '../..//utils/util.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    notices: [],
    yesday: '',
    today: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let that = this
    wx.request({
      url: 'http://10.9.49.228:9999/api/notice',
      method:'get',
      data:{
        page:1,
        limit:8
      },
      success(res){
        let yesday = formatDay(new Date(new Date().getTime() - 86400000))
        let today = formatDay(new Date())
        that.setData({
          notices:res.data.data,
          yesday,
          today
        })
      },
      fail(error){
        console.log(error)
      }
    })

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})