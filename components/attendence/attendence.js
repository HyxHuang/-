let app = getApp()
Component({
  options: {
    pureDataPattern: /^_/
  },
  data: {
    _lat: 40.11717,
    _lon: 116.24533,
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),
    position: '',
    name: '',
    id: '',
    signList: [],
    currentMonth: new Date().getMonth() + 1,
    isfingerPrint: false,
    haveFingerPrint: false
  },
  properties: {
    height: String,
    titleFontSize: String,
    padding: String,
    timeFontsize: String,
    positionFontsize: String,
    dateHeight: String,
    dateWidth: String,
    lineheight: String,
    space: String,
    type: String,
    itemHeight: String
  },
  lifetimes: {
    attached() {
      this.getData()
    }
  },
  methods: {
    handleSignin(e) {
      if (e.target.dataset.type === 'noSign' && e.target.dataset.day === this.data.day + 1) {
        this.checkIsFingerPrint()
        setTimeout(()=>{
          if (this.data.isfingerPrint && this.data.haveFingerPrint) {
            this.fingerPrint()
          }
          // else if(!this.data.isfingerPrint){
          //   wx.getLocation({
          //     success:(res)=>{
          //       if(this.data.type==='attendence'){
          //         let distance=this.distance(res.latitude,res.longitude,this.data._lat,this.data._lon)
          //         if(distance<0.4){
          //           wx.showToast({
          //             title: '签到成功',
          //           })
          //         }
          //       }
          //     }
          //   })
          // }
        })
      }
    },
    distance(la1, lo1, la2, lo2) {
      let La1 = la1 * Math.PI / 180.0;
      let La2 = la2 * Math.PI / 180.0;
      let La3 = La1 - La2;
      let Lb3 = lo1 * Math.PI / 180.0 - lo2 * Math.PI / 180.0;
      let s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(La3 / 2), 2) + Math.cos(La1) * Math.cos(La2) * Math.pow(Math.sin(Lb3 / 2), 2)));
      s = s * 6378.137;//地球半径
      s = Math.round(s * 10000) / 10000;
      return s
    },
    handleChangeDate(e) {
      let currentMonth = new Date().getMonth() + 1
      let prevMonth = currentMonth - 1 === 0 ? 12 : currentMonth - 1
      let nextMonth = currentMonth + 1 === 13 ? 1 : currentMonth + 1
      if (e.target.dataset.type === 'prev') {
        var month = this.data.month - 1 === 0 ? 12 : this.data.month - 1
        var year = month === 12 ? this.data.year - 1 : this.data.year
        if (month === prevMonth) {
          this.setData({
            year,
            month
          })
          this.getData()
        }
      } else {
        var month = this.data.month + 1 === 13 ? 1 : this.data.month + 1
        var year = month === 1 ? this.data.year + 1 : this.data.year
        if (month < nextMonth) {
          this.setData({
            year,
            month
          })
          this.getData()
        }
      }
    },
    getData() {
      wx.request({
        url: 'http://10.9.49.228:9999/api/sign',
        data: {
          userId: '000016',
          year: this.data.year,
          month: this.data.month
        },
        method: 'post',
        success: (res) => {
          let { id, name, position, signList } = res.data.data
          this.setData({
            id,
            name,
            position,
            signList
          })
        }
      })
    },
    //检测设备是否支持指纹识别
    checkIsFingerPrint() {
      let that = this
      wx.checkIsSupportSoterAuthentication({
        success(res) {
          console.log(res)
          for (var i in res.supportMode) {
            if (res.supportMode[i] == 'fingerPrint') {
              console.log("支持指纹识别", res.supportMode[i]);
              that.setData({
                isfingerPrint: true
              })
              that.haveFingerPrint()
            }else{
              wx.showToast({
                title: '您的手机不支持指纹识别',
              })
            }
          }
        }
      })
    },
    //检测是否有指纹
    haveFingerPrint: function () {
      let that = this
      wx.checkIsSoterEnrolledInDevice({
        checkAuthMode: 'fingerPrint',
        success(res) {
          if (res.isEnrolled == 1) {
            that.setData({
              haveFingerPrint: true
            })
            console.log('ok')
          } else if (res.isEnrolled == 0) {
            wx.showToast({
              title: '请您录入指纹',
            })
            that.setData({
              haveFingerPrint: false
            })
          }
        },
        fail(res) {
          that.setData({
            haveFingerPrint: false
          })
        }
      })
    },
    //指纹识别
    fingerPrint() {
      wx.startSoterAuthentication({
        requestAuthModes: ['fingerPrint'],
        challenge: '123456',
        authContent: '请用指纹解锁',
        success(res) {
          let { resultJSON, resultJSONSignature } = res
          wx.request({
            url: 'http://10.9.49.215:3333/check',
            data: {
              openid: app.globalData.openid,
              access_token: app.globalData.access_token,
              resultJSON,
              resultJSONSignature
            },
            success(res) {
              if (res.data) {
                wx.showToast({
                  title: '签到成功',
                })
              } else {
                wx.showToast({
                  title: '签到失败',
                })
              }
            }
          })
        }
      })
    }
  }
})