Component({
  options: {
    styleIsolation: 'apply-shared'
  },
  methods:{
    save(){
      this.triggerEvent('Myevent',{type:'save'})
    },
    cancle(){
      this.triggerEvent('Myevent',{type:'cancle'})
    },
    getUserList(e){
        console.log(e)
    }
  }
})