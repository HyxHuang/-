
// pages/release/release.js

Page({
  data:{
    circle:[{
      latitude:'40.11717',
      longitude:"116.24533",
      color: '#FF0000DD',
      fillColor: '#7cb5ec88',
      radius: 400,
    }],
    marker:[{
      id: "1",
      latitude: 40.11717,
      longitude: 116.24533 ,
      callout:{
        content: "公司位置",
        padding: 20,
        display: 'ALWAYS',
        textAlign: 'center'
      }
    }]

  }
})