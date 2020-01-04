module.exports=(year,month)=>{
  let day=0
  if(month===4||month===6||month===9||month===11){
    day=30
  }else{
    day=31
  }
  if(year%4==0&&year%100!=0||year%400==0){
    if(month===2){
      day=29
    }
  }else{
    if(month===2){
      day=28
    }
  } 
  return day
}