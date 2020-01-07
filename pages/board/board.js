// pages/board/board.js
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
  }
})