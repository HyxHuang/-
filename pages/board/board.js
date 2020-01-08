const store = require('store')
let app = getApp()
Page({
  data: {
    boardList: [{
        id: 1,
        txt: '所有项目',
        number: 12
      },
      {
        id: 2,
        txt: '进行中的项目',
        number: 12
      },
      {
        id: 3,
        txt: '所有员工',
        number: 12
      },
      {
        id: 4,
        txt: '所有通告',
        number: 12
      },
      {
        id: 5,
        txt: '总计休假天数',
        number: 12
      },
    ],
    proList: [{
        id: 1,
        title: '简单销售(pos)',
        des: '项目进行中',
        start_time: '2018-8-18',
        end_time: '2018-10-1'
      },
      {
        id: 2,
        title: '团队管理(pos)',
        des: '项目进行中',
        start_time: '2018-8-18',
        end_time: '2018-10-1'
      },
      {
        id: 3,
        title: '数据统计模板(pos)',
        des: '项目进行中',
        start_time: '2018-8-18',
        end_time: '2018-10-1'
      }, {
        id: 4,
        title: '餐馆UI设计(pos)',
        des: '项目进行中',
        start_time: '2018-8-18',
        end_time: '2018-10-1'
      }
    ]
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
  }
})