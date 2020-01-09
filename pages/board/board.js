const store = require('store')
let app = getApp()
Page({
  data: {
    boardList: [],
    proList: [],
    absence_person:[],
    noticeData:[]
  },
  diao() {
    wx.login({
      complete: (res) => {
        this.zwyz(res.code)
      },
    })
  },
  zwyz(code) {
    console.log(store.get('tk'));
    wx.startSoterAuthentication({
      requestAuthModes: ['fingerPrint'],
      challenge: '123456',
      authContent: '请用指纹解锁',
      success(res) {
        let {
          resultJSON,
          resultJSONSignature
        } = res
        console.log(code);
        wx.request({
          url: 'http://10.9.49.228:9999/api/zwyz',
          data: {
            code: code,
            resultJSON,
            resultJSONSignature
          },
          success(res) {
            if (res.data.code === 2000) {
              wx.showToast({
                title: '恭喜打卡成功111',
                icon: 'none',
                duration: 2000
              })
            }
          }
        })
      }
    })
  },

  onLoad() {
    let that = this
    let {id}=app.globalData.uData
    wx.request({
      url: 'http://10.9.49.228:9999/api/infoC',
      data:{
        userId:id
      },
      success(res) {
        if (res.data.code !== 2000) {
          return false
        }
        console.log(res.data.list);
        let {
          pj_num,
          ongPj_num,
          user_num,
          notice_num,
          leave_day,
          pjData,
          absence_person,
          noticeData
        } = res.data.list
        let boardList = [{
            id: 1,
            txt: '所有项目',
            number: pj_num
          },
          {
            id: 2,
            txt: '进行中的项目',
            number: ongPj_num
          },
          {
            id: 3,
            txt: '所有员工',
            number: user_num
          },
          {
            id: 4,
            txt: '所有通告',
            number: notice_num
          },
          {
            id: 5,
            txt: '本月休假天数',
            number: leave_day
          },
        ]
        that.setData({
          boardList,
          proList: pjData,
          absence_person,
          noticeData
        })
      }
    })
  }
})