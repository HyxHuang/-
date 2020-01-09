Component({
  options: {
    styleIsolation: 'apply-shared'
  },
  data:{
    userList:[
      {
        id:'1',
        name:'hjj1',
        avatar:'/assets/images/img_03.png'
      },
      {
        id:'2',
        name:'hjj2',
        avatar:'/assets/images/img_03.png'
      },
      {
        id:'3',
        name:'hjj3',
        avatar:'/assets/images/img_03.png'
      }
    ],
    chooseUserList:[]
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