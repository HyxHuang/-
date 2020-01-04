const calendar=require('../../utils/calendar.js')
Component({
  options: {
    pureDataPattern: /^_/ 
  },
  data:{
    _lat:40.11717  ,
    _lon:116.24533,
    year:new Date().getFullYear(),
    month:new Date().getMonth()+1,
    day:0
  },
  properties:{
    height:String,
    titleFontSize:String,
    padding:String,
    timeFontsize:String,
    positionFontsize:String,
    dateHeight:String,
    dateWidth:String,
    lineheight:String,
    space:String,
    type:String
  },
  lifetimes:{
    attached(){
      let day=calendar(this.data.year,this.data.month)
      this.setData({
        day
      })
      this.getData()
    }
    
  },
  methods:{
    handleClick(){
      wx.getLocation({
        success:(res)=>{
          if(this.data.type==='attendence'){
            let distance=this.distance(res.latitude,res.longitude,this.data._lat,this.data._lon)
            if(distance<0.4){
              console.log('签到成功')
            }
          }
        }
      })
    },
    distance(la1, lo1, la2, lo2){
      let La1 = la1 * Math.PI / 180.0;
      let La2 = la2 * Math.PI / 180.0;
      let La3 = La1 - La2;
      let Lb3 = lo1 * Math.PI / 180.0 - lo2 * Math.PI / 180.0;
      let s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(La3 / 2), 2) + Math.cos(La1) * Math.cos(La2) * Math.pow(Math.sin(Lb3 / 2), 2)));
      s = s * 6378.137;//地球半径
      s = Math.round(s * 10000) / 10000;
      return s
    },
    handleChangeDate(e){
      console.log()
      if(e.target.dataset.type==='prev'){
        var month=this.data.month-1===0?12:this.data.month-1
        var year=month===12?this.data.year-1:this.data.year
      }else{
        var month=this.data.month+1===13?1:this.data.month+1
        var year=month===1?this.data.year+1:this.data.year
      }
      this.setData({
        year,
        month
      })
      let day=calendar(this.data.year,this.data.month)
      this.setData({
        day
      })
    },
    getData(){
      wx.request({
        url: 'http://10.9.49.228:9999/api/sign',
        data:{
          userId:'000016',
          year:'2020',
          month:'2'
        },
        method:'post',
        success(res){
          console.log(res)
        }
      })
    }
  }
})