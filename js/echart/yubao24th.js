var dom = document.getElementById("container");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
    tooltip: {
        trigger: 'axis',
        formatter: '{b0} {c0}℃ {c1}',
    },
    toolbox: {
        feature: {
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
        },
        iconStyle: {
        	borderColor: '#DDDDDD',
        },
        emphasis: {
        	iconStyle: {
        	borderColor: '#FFFFFF',
        },
        }
    },
    color: ['#5e82db'],
//  legend: {
//      data: ['℃', '降水量', '平均温度']
//  },
	dataZoom: {
        type: 'inside',
        start: '0',
        end: '30',
        xAxisIndex: 0,
    },
	grid: {
		left: '15%',
		right: '5%',
		top: '5%',
		bottom: '15%',
	},
    xAxis: [
        {
            type: 'category',
            data: ['0:00', '2:00', '4:00', '6:00', '8:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00',],
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
        },
        {
            type: 'category',
            show: false,
            name: '天气',
            data: ['晴', '多云', '阴', '阵雨', '小雨', '中雨', '大雨']
        },
    ],
    series: [
        {
            name: '温度',
            type: 'line',
            yAxisIndex: 0,
            smooth: true,
            data: [18, 20, 21, 20, 22, 25, 28, 32, 30, 27, 22, 20]
        },
        {
            name: '天气',
            type: 'bar',
            yAxisIndex: 1,
            legendHoverLink: false,
            itemStyle: {
            	color: 'rgba(0,0,0,.0)'
            },
            data: ['晴', '晴', '阴', '阵雨', '小雨', '晴', '晴', '晴', '中雨', '中雨', '中雨', '晴']
        }
    ]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}