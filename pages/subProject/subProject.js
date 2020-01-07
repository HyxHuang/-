Page({
  data:{
    disabled:false,
    date:new Date().getFullYear()+'-'+(new Date().getMonth()+1)+'-'+new Date().getDate()
  },
  chooseMember(){
    this.setData({
      disabled:true
    })
  },
  bindDateChange(e){
    console.log(e)
    this.setData({
      date:e.detail.value
    })
  },
  submit(){
    console.log(1)
  },
  onMyevent(e){

    this.setData({
      disabled:false
    })
    console.log(e)
  }
})