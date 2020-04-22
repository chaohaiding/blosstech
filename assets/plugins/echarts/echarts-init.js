// ============================================================== 
// BP chart
// ============================================================== 
var dom = document.getElementById("bp");
var mytempChart = echarts.init(dom);
var app = {};
option = null;
option = {
   
    tooltip : {
        trigger: 'axis'
    },
    toolbox: {
        show : true,
    },
    color: ["#f0003c","#8c0808"],
    calculable : true,
    xAxis : [
        {
            type : 'category',

            boundaryGap : false,
            data : ['12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00','15:30','16:00','16:30','17:00','17:30','18:00','18:30','19:00','19:30','20:00','20:30','21:00','21:30','22:00','22:30','23:00','23:30','24:00',]
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel : {
                formatter: '{value} mmHg'
            }
        }
    ],

    series : [
        {
            name:'收缩压',
            type:'line',
            color:['#000'],
            data:[135, 142, 140, 138, 130, 131, 139, 133, 132],
            markPoint : {
                data : [
                    {type : 'max', name: 'Max'},
                    {type : 'min', name: 'Min'}
                ]
            },
            itemStyle: {
                normal: {
                    lineStyle: {
                        shadowColor : 'rgba(0,0,0,0.3)',
                        shadowBlur: 10,
                        shadowOffsetX: 8,
                        shadowOffsetY: 8 
                    }
                }
            },        
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
        },
        {
            name:'舒张压',
            type:'line',
            data:[97, 96, 91, 94, 90, 93, 89, 92, 90],

            markPoint : {
                data : [
                    {type : 'max', name: 'Max'},
                    {type : 'min', name: 'Min'}
                ]
            },

            itemStyle: {
                normal: {
                    lineStyle: {
                        shadowColor : 'rgba(0,0,0,0.3)',
                        shadowBlur: 10,
                        shadowOffsetX: 8,
                        shadowOffsetY: 8 
                    }
                }
            }, 
            markLine : {
                data : [
                    {type : 'average', name : '平均值'}
                ]
            }
        }
    ]
};

if (option && typeof option === "object") {
    mytempChart.setOption(option, true), $(function() {
            function resize() {
                setTimeout(function() {
                    mytempChart.resize()
                }, 100)
            }
            $(window).on("resize", resize), $(".sidebartoggler").on("click", resize)
        });
}

// ============================================================== 

// ============================================================== 
// ECG chart
// ============================================================== 
/*var dom = document.getElementById("ecg");
var mytempChart = echarts.init(dom);
var app = {};
option = null;
option = {
   
    tooltip : {
        trigger: 'axis'
    },
    toolbox: {
        show : true,
    },
    color: ["#55ce63"],
    calculable : true,
    xAxis : [
        {
            type : 'category',

            boundaryGap : false,
            data : ['12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00','15:30','16:00']
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel : {
                formatter: '{value} bpm'
            }
        }
    ],

    series : [
        {
            name:'bpm',
            type:'line',
            color:['#000'],
            data:[80, 85, 87, 83, 79, 80, 81, 86, 87],
            markPoint : {
                data : [
                    {type : 'max', name: '最大'},
                    {type : 'min', name: '最小'}
                ]
            },
            itemStyle: {
                normal: {
                    lineStyle: {
                        shadowColor : 'rgba(0,0,0,0.3)',
                        shadowBlur: 10,
                        shadowOffsetX: 8,
                        shadowOffsetY: 8 
                    }
                }
            },        
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
        },
        
    ]
};

if (option && typeof option === "object") {
    mytempChart.setOption(option, true), $(function() {
            function resize() {
                setTimeout(function() {
                    mytempChart.resize()
                }, 100)
            }
            $(window).on("resize", resize), $(".sidebartoggler").on("click", resize)
        });
}
*/
// ============================================================== 

// ============================================================== 
// SPO2 chart
// ============================================================== 
var dom = document.getElementById("sp");
var mytempChart = echarts.init(dom);
var app = {};
option = null;
option = {
   
    tooltip : {
        trigger: 'axis'
    },
    toolbox: {
        show : true,
    },
    color: ["#009efb"],
    calculable : true,
    xAxis : [
        {
            type : 'category',

            boundaryGap : false,
            data : ['12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00','15:30','16:00','16:30','17:00','17:30','18:00','18:30','19:00','19:30','20:00','20:30','21:00','21:30','22:00','22:30','23:00','23:30','24:00',]
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel : {
                formatter: '{value} %'
            }
        }
    ],

    series : [
        {
            name:'血氧',
            type:'line',
            color:['#000'],
            data:[93, 97, 94, 96, 92, 87, 89, 86, 90],
            markPoint : {
                data : [
                    {type : 'max', name: '最大'},
                    {type : 'min', name: '最小'}
                ]
            },
            itemStyle: {
                normal: {
                    lineStyle: {
                        shadowColor : 'rgba(0,0,0,0.3)',
                        shadowBlur: 10,
                        shadowOffsetX: 8,
                        shadowOffsetY: 8 
                    }
                }
            },        
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
        },
        
    ]
};

if (option && typeof option === "object") {
    mytempChart.setOption(option, true), $(function() {
            function resize() {
                setTimeout(function() {
                    mytempChart.resize()
                }, 100)
            }
            $(window).on("resize", resize), $(".sidebartoggler").on("click", resize)
        });
}

// ============================================================== 

// ============================================================== 
// TEMP chart
// ============================================================== 
var dom = document.getElementById("temp");
var mytempChart = echarts.init(dom);
var app = {};
option = null;
option = {
   
    tooltip : {
        trigger: 'axis'
    },
    toolbox: {
        show : true,
    },
    color: ["#ff8400"],
    calculable : true,
    xAxis : [
        {
            type : 'category',

            boundaryGap : false,
            data : ['12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00','15:30','16:00','16:30','17:00','17:30','18:00','18:30','19:00','19:30','20:00','20:30','21:00','21:30','22:00','22:30','23:00','23:30','24:00',]
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel : {
                formatter: '{value} °C'
            }
        }
    ],

    series : [
        {
            name:'体温',
            type:'line',
            color:['#000'],
            data:[37.1, 36, 37.5, 36.9, 37.2, 37, 36.8, 36.7, 36.5],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            itemStyle: {
                normal: {
                    lineStyle: {
                        shadowColor : 'rgba(0,0,0,0.3)',
                        shadowBlur: 10,
                        shadowOffsetX: 8,
                        shadowOffsetY: 8 
                    }
                }
            },        
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
        },
        
    ]
};

if (option && typeof option === "object") {
    mytempChart.setOption(option, true), $(function() {
            function resize() {
                setTimeout(function() {
                    mytempChart.resize()
                }, 100)
            }
            $(window).on("resize", resize), $(".sidebartoggler").on("click", resize)
        });
}

// ============================================================== 
