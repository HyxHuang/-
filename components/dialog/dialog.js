const app =getApp()
Component({
  options: {
    styleIsolation: 'apply-shared'
  },
  data:{
    userList:new Array(10),
    chooseUserList:[]
  },
  lifetimes:{
    attached(){
      wx.request({
        url: `${app.globalData.baseUrl}/api/user`,
        success:(res)=>{
          this.setData({
            userList:res.data.data
          })
        }
      })
    }
  },
  methods:{
    save(){
      this.triggerEvent('Myevent',{type:'save',chooseUserList:this.data.chooseUserList})
    },
    cancle(){
      this.triggerEvent('Myevent',{type:'cancle'})
    },
    getUserList(e){
        let chooseUserList=[]
        e.detail.value.forEach(value=>{
          chooseUserList.push(this.data.userList[~~value])
        })
        this.setData({
          chooseUserList
        })
    }
  }
})