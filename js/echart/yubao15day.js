var dom = document.getElementById("container1");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
//  tooltip: {
//      trigger: 'axis',
//      formatter: '{b0} {c0}℃ {c1}',
//  },
//  toolbox: {
//      feature: {
//          magicType: {show: true, type: ['line', 'bar']},
//          restore: {show: true},
//      },
//      iconStyle: {
//      	borderColor: '#DDDDDD',
//      },
//      emphasis: {
//      	iconStyle: {
//      	borderColor: '#FFFFFF',
//      },
//      }
//  },
    color: ['#CF2D28', '#5e82db'],
//  legend: {
//      data: ['℃', '降水量', '平均温度']
//  },
	grid: {
		left: '0%',
		right: '0%',
		top: '0%',
		bottom: '0%',
	},
    xAxis: [
        {
            type: 'category',
            show: false,
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
            axisLine: {
            	show: true,
            	lineStyle: {
            		color: '#FFFFFF',
            	}
            },
            axisTick: {
            	show: false,
            },
            splitLine: {
	            show: false,
	        },
            axisPointer: {
                type: 'none',
            },
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '℃',
            show: false,
            min: '0',
            max: '40',
            axisLine: {
            	show: true,
            	lineStyle: {
            		color: '#FFFFFF',
            	}
            },
            axisTick: {
            	show: false,
            },
            splitLine: {
	            show: false,
	        },
            axisLabel: {
                formatter: '{value} ℃'
            }
        }
    ],
    series: [
        {
            name: '温度',
            type: 'line',
            smooth: true,
            label: {
                show: true,
                position: 'top',
                formatter: '{c}℃'
            },
            data: [18, 20, 21, 20, 22, 25, 28, 32, 30, 27, 22, 30, 27, 22, 20]
        },
        {
            name: '天气',
            type: 'line',
            label: {
                show: true,
                position: 'bottom',
                formatter: '{c}℃'
            },
            data: [15, 17, 18, 17, 20, 22, 25, 30, 25, 22, 21, 25, 22, 21, 18]
        }
    ]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}