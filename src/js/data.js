require('../css/data.less')
const echarts = require("echarts")
document.ready(function () {
  let user = JSON.parse(localStorage.getItem('user'))
    let tiemerDom = document.querySelector('.times')
    let calorieDom = document.querySelector('.calorie')


    console.log(1111);
    console.log(echarts);
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'));

    // 指定图表的配置项和数据
    var option = {
        title: {
            text: '近7天运动时长'
        },
        tooltip: {},
        legend: {
            data: ['时长']
        },
        xAxis: {
            data: ['11-5', '11-6', '11-7', '11-8', '11-9', '11-10', '11-11']
        },
        yAxis: {},
        series: [{
            name: '时长',
            type: 'bar',
            data: [30, 59, 30, 120, 90, 90, 60]
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

    var myChart1 = echarts.init(document.getElementById('main2'));
    var option = {
        title: {
            text: '运动分类',
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: '50%',
                data: [
                    { value: 1048, name: '跑步' },
                    { value: 735, name: '骑行' },
                    { value: 580, name: '训练' },

                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }

        ]

    };
    myChart1.setOption(option);

    $http.get('/users/mysportsBadge', { userId: user.userId }, function (res) {
        if (res.status == 0) {
          calorieDom.textContent = res.data.sports.calorie;
          tiemerDom.textContent = res.data.sports.times;
        }
      })
})